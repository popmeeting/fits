// ============================================================================
// Task Manager Application
// ============================================================================

class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.loadTasks();
        this.cacheDOM();
        this.bindEvents();
        this.render();
    }

    /**
     * Cache DOM elements for performance
     */
    cacheDOM() {
        this.taskForm = document.getElementById('task-form');
        this.taskInput = document.getElementById('task-input');
        this.taskList = document.getElementById('task-list');
        this.emptyState = document.getElementById('empty-state');
        this.tasksRemaining = document.getElementById('tasks-remaining');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.clearCompletedBtn = document.getElementById('clear-completed-btn');
        this.countBadges = {
            all: document.getElementById('count-all'),
            active: document.getElementById('count-active'),
            completed: document.getElementById('count-completed'),
        };
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        if (this.taskForm) {
            this.taskForm.addEventListener('submit', (e) => this.handleAddTask(e));
        }
        this.filterButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => this.handleFilterClick(e));
        });
        this.clearCompletedBtn.addEventListener('click', () => this.handleClearCompleted());
    }

    /**
     * Load tasks from localStorage
     */
    loadTasks() {
        const saved = localStorage.getItem('tasks');
        this.tasks = saved ? JSON.parse(saved) : [];
    }

    /**
     * Save tasks to localStorage
     */
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Handle adding a new task
     */
    handleAddTask(e) {
        e.preventDefault();

        const text = this.taskInput.value.trim();
        const errorElement = document.getElementById('task-input-error');

        if (!text) {
            errorElement.textContent = 'Please enter a task.';
            this.taskInput.setAttribute('aria-invalid', 'true');
            return;
        }

        if (text.length > 200) {
            errorElement.textContent = 'Task must be 200 characters or less.';
            this.taskInput.setAttribute('aria-invalid', 'true');
            return;
        }

        errorElement.textContent = '';
        this.taskInput.setAttribute('aria-invalid', 'false');

        const task = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString(),
        };

        this.tasks.unshift(task);
        this.saveTasks();
        this.taskInput.value = '';
        this.taskInput.focus();
        this.render();

        // Announce to screen readers
        this.announce(`Task "${text}" added`);
    }

    /**
     * Handle deleting a task
     */
    handleDeleteTask(id) {
        const task = this.tasks.find((t) => t.id === id);
        this.tasks = this.tasks.filter((t) => t.id !== id);
        this.saveTasks();
        this.render();

        // Announce to screen readers
        if (task) {
            this.announce(`Task "${task.text}" deleted`);
        }
    }

    /**
     * Handle toggling task completion
     */
    handleToggleTask(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();

            const status = task.completed ? 'completed' : 'marked as incomplete';
            this.announce(`Task "${task.text}" ${status}`);
        }
    }

    /**
     * Handle filter button click
     */
    handleFilterClick(e) {
        const filterValue = e.currentTarget.dataset.filter;
        this.currentFilter = filterValue;

        this.filterButtons.forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.filter === filterValue);
        });

        this.render();
    }

    /**
     * Handle clearing all completed tasks
     */
    handleClearCompleted() {
        const completedCount = this.tasks.filter((t) => t.completed).length;

        if (completedCount === 0) return;

        this.tasks = this.tasks.filter((t) => !t.completed);
        this.saveTasks();
        this.render();

        this.announce(`${completedCount} completed task(s) deleted`);
    }

    /**
     * Get filtered tasks based on current filter
     */
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter((t) => !t.completed);
            case 'completed':
                return this.tasks.filter((t) => t.completed);
            default:
                return this.tasks;
        }
    }

    /**
     * Get task counts
     */
    getTaskCounts() {
        return {
            all: this.tasks.length,
            active: this.tasks.filter((t) => !t.completed).length,
            completed: this.tasks.filter((t) => t.completed).length,
        };
    }

    /**
     * Format date for display
     */
    formatDate(isoString) {
        const date = new Date(isoString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;

        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });
    }

    /**
     * Create a task item element
     */
    createTaskElement(task) {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id;

        const checkboxId = `task-${task.id}`;

        li.innerHTML = `
            <input
                type="checkbox"
                id="${checkboxId}"
                class="task-checkbox"
                ${task.completed ? 'checked' : ''}
                aria-label="Mark task as ${task.completed ? 'incomplete' : 'complete'}"
            >
            <div class="task-content">
                <label for="${checkboxId}" class="task-text">${this.escapeHtml(task.text)}</label>
                <span class="task-date" aria-label="Created ${this.formatDate(task.createdAt)}">${this.formatDate(task.createdAt)}</span>
            </div>
            <div class="task-actions">
                <button
                    type="button"
                    class="task-btn task-btn-delete"
                    aria-label="Delete task: ${this.escapeHtml(task.text)}"
                    title="Delete task"
                >
                    🗑️
                </button>
            </div>
        `;

        // Bind task-specific events
        const checkbox = li.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => this.handleToggleTask(task.id));

        const deleteBtn = li.querySelector('.task-btn-delete');
        deleteBtn.addEventListener('click', () => this.handleDeleteTask(task.id));

        return li;
    }

    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Update task counts in badges
     */
    updateCounts() {
        const counts = this.getTaskCounts();
        this.countBadges.all.textContent = counts.all;
        this.countBadges.active.textContent = counts.active;
        this.countBadges.completed.textContent = counts.completed;
    }

    /**
     * Update tasks remaining info
     */
    updateTasksInfo() {
        const counts = this.getTaskCounts();
        const activeTasks = counts.active;

        if (counts.all === 0) {
            this.tasksRemaining.textContent = '';
            return;
        }

        const text =
            activeTasks === 0
                ? 'All tasks completed! 🎉'
                : activeTasks === 1
                  ? '1 active task remaining'
                  : `${activeTasks} active tasks remaining`;

        this.tasksRemaining.textContent = text;
    }

    /**
     * Update clear completed button state
     */
    updateClearButtonState() {
        const hasCompleted = this.tasks.some((t) => t.completed);
        this.clearCompletedBtn.disabled = !hasCompleted;
    }

    /**
     * Render the task list
     */
    render() {
        // Clear current list
        this.taskList.innerHTML = '';

        const filteredTasks = this.getFilteredTasks();
        const isEmpty = this.tasks.length === 0;

        // Show/hide empty state
        this.emptyState.classList.toggle('hidden', !isEmpty);

        // Render tasks
        if (!isEmpty) {
            filteredTasks.forEach((task) => {
                const taskElement = this.createTaskElement(task);
                this.taskList.appendChild(taskElement);
            });
        }

        // Update UI elements
        this.updateCounts();
        this.updateTasksInfo();
        this.updateClearButtonState();
    }

    /**
     * Announce message to screen readers using aria-live region
     */
    announce(message) {
        const announcement = document.createElement('div');
        announcement.className = 'sr-only';
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.textContent = message;

        document.body.appendChild(announcement);

        // Remove after screen readers have a chance to read it
        setTimeout(() => {
            announcement.remove();
        }, 1000);
    }
}

// ============================================================================
// Initialize Application
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
