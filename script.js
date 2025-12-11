// ============================================================================
// Task Manager Application
// ============================================================================

class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.translations = {
            'en': {
                title: 'Task Manager',
                subtitle: 'Organize your tasks efficiently',
                addTask: 'Add Task',
                newTaskLabel: 'New Task',
                inputPlaceholder: 'Add a new task...',
                inputErrorEmpty: 'Please enter a task.',
                inputErrorTooLong: 'Task must be 200 characters or less.',
                all: 'All',
                active: 'Active',
                completed: 'Completed',
                noTasks: 'No tasks yet. Add one to get started!',
                clearCompleted: 'Clear Completed',
                taskAdded: 'Task "{text}" added',
                taskDeleted: 'Task "{text}" deleted',
                taskCompleted: 'completed',
                taskMarkedIncomplete: 'marked as incomplete',
                allCompletedMessage: 'All tasks completed! 🎉',
                activeTasksOne: '1 active task remaining',
                activeTasksMany: '{count} active tasks remaining',
                justNow: 'just now',
                minutesAgo: '{n}m ago',
                hoursAgo: '{n}h ago',
                daysAgo: '{n}d ago',
                markComplete: 'complete',
                markIncomplete: 'incomplete',
                deleteTask: 'Delete task',
            },
            'zh-CN': {
                title: '任务管理器',
                subtitle: '高效地组织您的任务',
                addTask: '添加任务',
                newTaskLabel: '新任务',
                inputPlaceholder: '添加一个新任务...',
                inputErrorEmpty: '请输入任务。',
                inputErrorTooLong: '任务最多200个字符。',
                all: '全部',
                active: '未完成',
                completed: '已完成',
                noTasks: '尚无任务。添加一个开始吧！',
                clearCompleted: '删除已完成',
                taskAdded: '已添加任务 "{text}"',
                taskDeleted: '已删除任务 "{text}"',
                taskCompleted: '已完成',
                taskMarkedIncomplete: '标记为未完成',
                allCompletedMessage: '所有任务已完成！🎉',
                activeTasksOne: '1 个未完成任务',
                activeTasksMany: '{count} 个未完成任务',
                justNow: '刚刚',
                minutesAgo: '{n} 分钟前',
                hoursAgo: '{n} 小时前',
                daysAgo: '{n} 天前',
                markComplete: '完成',
                markIncomplete: '未完成',
                deleteTask: '删除任务',
            },
            'ru': {
                title: 'Менеджер задач',
                subtitle: 'Организуйте ваши задачи эффективно',
                addTask: 'Добавить задачу',
                newTaskLabel: 'Новая задача',
                inputPlaceholder: 'Добавьте новую задачу...',
                inputErrorEmpty: 'Пожалуйста, введите задачу.',
                inputErrorTooLong: 'Задача должна быть не более 200 символов.',
                all: 'Все',
                active: 'Активные',
                completed: 'Выполненные',
                noTasks: 'Пока нет задач. Добавьте первую!',
                clearCompleted: 'Удалить выполненные',
                taskAdded: 'Задача "{text}" добавлена',
                taskDeleted: 'Задача "{text}" удалена',
                taskCompleted: 'выполнена',
                taskMarkedIncomplete: 'помечена как невыполненная',
                allCompletedMessage: 'Все задачи выполнены! 🎉',
                activeTasksOne: '1 активная задача',
                activeTasksMany: '{count} активных задач',
                justNow: 'только что',
                minutesAgo: '{n} мин назад',
                hoursAgo: '{n} ч назад',
                daysAgo: '{n} дн назад',
                markComplete: 'выполнить',
                markIncomplete: 'не выполнено',
                deleteTask: 'Удалить задачу',
            },
            'ar': {
                title: 'مدير المهام',
                subtitle: 'نظم مهامك بكفاءة',
                addTask: 'أضف مهمة',
                newTaskLabel: 'مهمة جديدة',
                inputPlaceholder: 'أضف مهمة جديدة...',
                inputErrorEmpty: 'الرجاء إدخال مهمة.',
                inputErrorTooLong: 'يجب ألا تتجاوز المهمة 200 حرف.',
                all: 'الكل',
                active: 'قيد التنفيذ',
                completed: 'مكتملة',
                noTasks: 'لا توجد مهام بعد. أضف واحدة للبدء!',
                clearCompleted: 'مسح المكتمل',
                taskAdded: 'تمت إضافة المهمة "{text}"',
                taskDeleted: 'تم حذف المهمة "{text}"',
                taskCompleted: 'مكتملة',
                taskMarkedIncomplete: 'وُسمت كغير مكتملة',
                allCompletedMessage: 'تمت جميع المهام! 🎉',
                activeTasksOne: 'مهمة واحدة قيد التنفيذ',
                activeTasksMany: '{count} مهام قيد التنفيذ',
                justNow: 'الآن',
                minutesAgo: 'منذ {n} دقيقة',
                hoursAgo: 'منذ {n} ساعة',
                daysAgo: 'منذ {n} يوم',
                markComplete: 'اكتمال',
                markIncomplete: 'غير مكتمل',
                deleteTask: 'حذف المهمة',
            },
            'ja': {
                title: 'タスクマネージャー',
                subtitle: 'タスクを効率的に管理しましょう',
                addTask: 'タスクを追加',
                newTaskLabel: '新しいタスク',
                inputPlaceholder: '新しいタスクを追加...',
                inputErrorEmpty: 'タスクを入力してください。',
                inputErrorTooLong: 'タスクは200文字以内で入力してください。',
                all: 'すべて',
                active: '未完了',
                completed: '完了',
                noTasks: 'タスクはありません。追加して始めましょう！',
                clearCompleted: '完了を消去',
                taskAdded: 'タスク「{text}」を追加しました',
                taskDeleted: 'タスク「{text}」を削除しました',
                taskCompleted: '完了',
                taskMarkedIncomplete: '未完了にマークされました',
                allCompletedMessage: 'すべてのタスクが完了しました！🎉',
                activeTasksOne: '1 件の未完了タスク',
                activeTasksMany: '{count} 件の未完了タスク',
                justNow: 'たった今',
                minutesAgo: '{n}分前',
                hoursAgo: '{n}時間前',
                daysAgo: '{n}日前',
                markComplete: '完了',
                markIncomplete: '未完了',
                deleteTask: 'タスクを削除',
            },
            'ko': {
                title: '작업 관리자',
                subtitle: '작업을 효율적으로 정리하세요',
                addTask: '작업 추가',
                newTaskLabel: '새 작업',
                inputPlaceholder: '새 작업 추가...',
                inputErrorEmpty: '작업을 입력하세요.',
                inputErrorTooLong: '작업은 200자 이하여야 합니다.',
                all: '전체',
                active: '진행중',
                completed: '완료됨',
                noTasks: '작업이 없습니다. 추가하여 시작하세요!',
                clearCompleted: '완료 삭제',
                taskAdded: '작업 "{text}" 추가됨',
                taskDeleted: '작업 "{text}" 삭제됨',
                taskCompleted: '완료됨',
                taskMarkedIncomplete: '미완료로 표시됨',
                allCompletedMessage: '모든 작업이 완료되었습니다! 🎉',
                activeTasksOne: '1개의 진행중인 작업',
                activeTasksMany: '{count}개의 진행중인 작업',
                justNow: '방금 전',
                minutesAgo: '{n}분 전',
                hoursAgo: '{n}시간 전',
                daysAgo: '{n}일 전',
                markComplete: '완료',
                markIncomplete: '미완료',
                deleteTask: '작업 삭제',
            }
        };
        this.init();
    }

    init() {
        this.loadTasks();
        this.cacheDOM();
        this.bindEvents();
        this.initTheme();
        this.initLanguage();
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
        this.themeToggle = document.getElementById('theme-toggle');
        this.langSelect = document.getElementById('lang-select');
        this.appTitle = document.getElementById('app-title');
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
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
            this.themeToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleTheme();
                }
            });
        }
        if (this.langSelect) {
            this.langSelect.addEventListener('change', (e) => {
                const value = e.target.value;
                this.applyLanguage(value);
            });
        }
    }

    /**
     * Initialize theme based on user preference or system
     */
    initTheme() {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = saved ? saved : (prefersDark ? 'dark' : 'light');

        this.applyTheme(theme);
    }

    /**
     * Initialize language based on saved preference or browser default
     */
    initLanguage() {
        const saved = localStorage.getItem('lang');
        const browser = navigator.language || navigator.userLanguage || 'en';
        const normalized = saved || (['zh', 'zh-CN'].includes(browser) ? 'zh-CN' : browser.split('-')[0]);
        const supported = Object.keys(this.translations);
        const lang = supported.includes(normalized) ? normalized : (supported.includes(browser) ? browser : 'en');

        if (this.langSelect) {
            // if saved value exists, use it, otherwise try to match browser
            this.langSelect.value = saved || (supported.includes(browser) ? browser : lang);
        }

        this.applyLanguage(saved || lang);
    }

    /**
     * Apply language to UI and persist selection
     */
    applyLanguage(code) {
        const lang = code || 'en';
        const tr = this.translations[lang] || this.translations['en'];

        // Document language and direction for accessibility
        document.documentElement.lang = lang;
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }

        // Update static texts
        if (this.appTitle) this.appTitle.textContent = tr.title;
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) subtitle.textContent = tr.subtitle;

        // Update form labels and placeholders
        const inputLabel = document.querySelector('label[for="task-input"]');
        if (inputLabel) inputLabel.textContent = tr.newTaskLabel;
        if (this.taskInput) this.taskInput.placeholder = tr.inputPlaceholder;

        // Update add button
        const submitBtn = document.querySelector('#task-form button[type="submit"]');
        if (submitBtn) {
            const icon = submitBtn.querySelector('.btn-icon');
            const textSpan = submitBtn.querySelector('span:not(.btn-icon)');
            if (textSpan) textSpan.textContent = tr.addTask;
            submitBtn.setAttribute('aria-label', tr.addTask);
        }

        // Update filter buttons (preserve badge counts)
        const allBadge = document.getElementById('count-all')?.textContent || '0';
        const activeBadge = document.getElementById('count-active')?.textContent || '0';
        const completedBadge = document.getElementById('count-completed')?.textContent || '0';

        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        const activeBtn = document.querySelector('.filter-btn[data-filter="active"]');
        const completedBtn = document.querySelector('.filter-btn[data-filter="completed"]');

        if (allBtn) allBtn.innerHTML = `${tr.all} <span class="badge" id="count-all">${allBadge}</span>`;
        if (activeBtn) activeBtn.innerHTML = `${tr.active} <span class="badge" id="count-active">${activeBadge}</span>`;
        if (completedBtn) completedBtn.innerHTML = `${tr.completed} <span class="badge" id="count-completed">${completedBadge}</span>`;

        // Update empty state
        const emptyP = this.emptyState ? this.emptyState.querySelector('p') : null;
        if (emptyP) emptyP.textContent = tr.noTasks;

        // Update clear button
        if (this.clearCompletedBtn) {
            this.clearCompletedBtn.textContent = tr.clearCompleted;
            this.clearCompletedBtn.setAttribute('aria-label', tr.clearCompleted);
        }

        // Persist selection and update cached badge refs
        localStorage.setItem('lang', lang);
        this.countBadges = {
            all: document.getElementById('count-all'),
            active: document.getElementById('count-active'),
            completed: document.getElementById('count-completed'),
        };

        // Re-render to ensure task aria labels and dates are localized
        this.render();
    }

    /**
     * Apply theme and update toggle button
     */
    applyTheme(theme) {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
            root.classList.add('dark-mode');
            if (this.themeToggle) {
                this.themeToggle.setAttribute('aria-pressed', 'true');
                const icon = this.themeToggle.querySelector('.theme-icon');
                if (icon) icon.textContent = '☀️';
            }
        } else {
            root.removeAttribute('data-theme');
            root.classList.remove('dark-mode');
            if (this.themeToggle) {
                this.themeToggle.setAttribute('aria-pressed', 'false');
                const icon = this.themeToggle.querySelector('.theme-icon');
                if (icon) icon.textContent = '🌙';
            }
        }
        localStorage.setItem('theme', theme);
    }

    /**
     * Toggle between dark and light themes
     */
    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') === 'dark' || document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        this.applyTheme(next);
        this.announce(`Switched to ${next} theme`);
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
            const tr = this.translations[document.documentElement.lang || 'en'];
            errorElement.textContent = tr.inputErrorEmpty;
            this.taskInput.setAttribute('aria-invalid', 'true');
            return;
        }

        if (text.length > 200) {
            const tr = this.translations[document.documentElement.lang || 'en'];
            errorElement.textContent = tr.inputErrorTooLong;
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
        const tr = this.translations[document.documentElement.lang || 'en'];
        this.announce(tr.taskAdded.replace('{text}', text));
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
            const tr = this.translations[document.documentElement.lang || 'en'];
            this.announce(tr.taskDeleted.replace('{text}', task.text));
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

            const tr = this.translations[document.documentElement.lang || 'en'];
            const status = task.completed ? tr.taskCompleted : tr.taskMarkedIncomplete;
            this.announce(tr.taskAdded ? tr.taskAdded.replace('{text}', task.text) : `${task.text} ${status}`);
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

        const tr = this.translations[document.documentElement.lang || 'en'];
        const msg = tr.activeTasksMany.replace('{count}', completedCount);
        this.announce(msg + ' ' + tr.clearCompleted);
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

        const lang = document.documentElement.lang || 'en';
        const tr = this.translations[lang] || this.translations['en'];

        if (diffMins < 1) return tr.justNow;
        if (diffMins < 60) return tr.minutesAgo.replace('{n}', diffMins);
        if (diffHours < 24) return tr.hoursAgo.replace('{n}', diffHours);
        if (diffDays < 7) return tr.daysAgo.replace('{n}', diffDays);

        return date.toLocaleDateString(lang, {
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
                aria-label="${task.completed ? (this.translations[document.documentElement.lang || 'en'].markIncomplete) : (this.translations[document.documentElement.lang || 'en'].markComplete)}"
            >
            <div class="task-content">
                <label for="${checkboxId}" class="task-text">${this.escapeHtml(task.text)}</label>
                <span class="task-date" aria-label="Created ${this.formatDate(task.createdAt)}">${this.formatDate(task.createdAt)}</span>
            </div>
            <div class="task-actions">
                <button
                    type="button"
                    class="task-btn task-btn-delete"
                    aria-label="${this.escapeHtml(this.translations[document.documentElement.lang || 'en'].deleteTask)}: ${this.escapeHtml(task.text)}"
                    title="${this.escapeHtml(this.translations[document.documentElement.lang || 'en'].deleteTask)}"
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
        const tr = this.translations[document.documentElement.lang || 'en'];
        let text = '';
        if (activeTasks === 0) text = tr.allCompletedMessage;
        else if (activeTasks === 1) text = tr.activeTasksOne;
        else text = tr.activeTasksMany.replace('{count}', activeTasks);

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
