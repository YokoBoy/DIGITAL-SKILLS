const TaskRunner = {
    currentTask: null,
    currentLevel: null,
    currentStageIndex: 0,
    config: {
        containerId: 'task-modal-body',
        titleId: 'taskModalLabel',
        checkBtnId: 'btn-check-task',
        isModal: true
    },

    initPageMode: function (cfg) {
        this.config = { ...this.config, ...cfg, isModal: false };
    },

    open: function (taskId, level = 'basic') {
        const lang = localStorage.getItem('selectedLanguage') || 'ru';
        let sourceData;

        // Try getting data from localization first
        if (typeof translations !== 'undefined' && translations[lang] && translations[lang].tasks && translations[lang].tasks[level]) {
            sourceData = translations[lang].tasks[level];
        }

        // Fallback or if localization not found (though localization.js should be loaded)
        if (!sourceData || sourceData.length === 0) {
            if (level === 'basic') sourceData = window.basicTasks;
            else if (level === 'intermediate') sourceData = window.intermediateTasks;
        }

        if (!sourceData) {
            console.error(`No data for level: ${level}`);
            return;
        }

        const task = sourceData.find(t => t.id === taskId);

        if (!task) {
            console.error(`Task ${taskId} not found in ${level}`);
            return;
        }

        this.currentTask = task;
        this.currentLevel = level;
        this.currentStageIndex = 0; // Reset stage

        const container = document.getElementById(this.config.containerId);
        const title = document.getElementById(this.config.titleId);
        const checkBtn = document.getElementById(this.config.checkBtnId);

        if (title) title.textContent = task.title;

        // Initial Render
        if (container && checkBtn) {
            this.renderCurrentStage(container, checkBtn);
        }

        if (this.config.isModal) {
            const modalEl = document.getElementById('taskModal');
            if (modalEl) {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            }
        }
    },

    renderCurrentStage: function (container, checkBtn) {
        const task = this.currentTask;
        container.innerHTML = ''; // Clear previous styling/content

        let contentToRender = task;
        let situationText = task.situation || null;

        // Check if multi-stage
        if (task.stages && Array.isArray(task.stages)) {
            contentToRender = task.stages[this.currentStageIndex];
            // Stage can override situation
            if (contentToRender.situation) situationText = contentToRender.situation;

            // Add stage Indicator
            const progressHtml = `<div class="progress mb-3" style="height: 5px;">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${((this.currentStageIndex + 1) / task.stages.length) * 100}%"></div>
            </div>
            <p class="text-muted small">Вопрос ${this.currentStageIndex + 1} из ${task.stages.length}</p>`;
            container.innerHTML = progressHtml;
        }

        const type = contentToRender.type || task.type;

        // SPLIT VIEW LOGIC
        if (situationText) {
            const row = document.createElement('div');
            row.className = 'row h-100';

            // Left Column: Situation
            const colLeft = document.createElement('div');
            colLeft.className = 'col-md-5 border-end pe-4 d-none d-md-block';
            colLeft.innerHTML = `<h5 class="text-primary"><i class="fas fa-info-circle"></i> Ситуация</h5>
                                 <div class="bg-light p-3 rounded" style="max-height: 400px; overflow-y: auto;">
                                    ${situationText}
                                 </div>`;

            // Right Column: Task
            const colRight = document.createElement('div');
            colRight.className = 'col-md-7 ps-4';

            // Task Description
            colRight.innerHTML += `<p class="mb-3 lead">${contentToRender.description || task.description || ''}</p>`;

            // Render specific task content into Right Column
            if (type === 'quiz') this.renderQuiz(contentToRender, colRight);
            else if (type === 'dragDrop') this.renderDragDrop(contentToRender, colRight);
            else if (type === 'matching') this.renderMatching(contentToRender, colRight);
            else if (type === 'ordering') this.renderOrdering(contentToRender, colRight);
            else if (type === 'info') {
                // For info stage
                if (contentToRender.content) {
                    colRight.innerHTML += contentToRender.content;
                }
            }

            row.appendChild(colLeft);
            row.appendChild(colRight);
            container.appendChild(row);

            // Setup button for split view
            this.setupStageButton(checkBtn, type, contentToRender);

        } else {
            // NORMAL VIEW
            container.innerHTML += `<p class="mb-3 lead">${contentToRender.description || task.description || ''}</p>`;

            if (type === 'quiz') this.renderQuiz(contentToRender, container);
            else if (type === 'dragDrop') this.renderDragDrop(contentToRender, container);
            else if (type === 'matching') this.renderMatching(contentToRender, container);
            else if (type === 'ordering') this.renderOrdering(contentToRender, container);
            else if (type === 'info') {
                if (contentToRender.content) {
                    container.innerHTML += contentToRender.content;
                }
            }

            // Setup button for normal view
            this.setupStageButton(checkBtn, type, contentToRender);
        }
    },

    setupStageButton: function (checkBtn, type, contentToRender) {
        // Clone button to remove old listeners
        const newBtn = checkBtn.cloneNode(true);
        checkBtn.parentNode.replaceChild(newBtn, checkBtn);

        if (type === 'info') {
            newBtn.textContent = 'Далее / Next';
            newBtn.addEventListener('click', () => {
                if (this.currentTask.stages && this.currentStageIndex < this.currentTask.stages.length - 1) {
                    this.currentStageIndex++;
                    this.renderCurrentStage(
                        document.getElementById(this.config.containerId),
                        newBtn
                    );
                } else {
                    this.finishTask(100);
                }
            });
        } else {
            newBtn.textContent = 'Check Answer';
            newBtn.addEventListener('click', () => {
                this.checkAnswer(contentToRender);
            });
        }
    },

    renderQuiz: function (items, container) {
        const questions = items.questions || [];
        let html = '<div class="quiz-container">';
        questions.forEach((q, index) => {
            html += `
            <div class="card mb-3 shadow-sm" id="q-container-${index}">
                <div class="card-body">
                    <p class="fw-bold mb-2">${index + 1}. ${q.text}</p>
                    <div class="options-list">
                        ${q.options.map((opt, i) => `
                            <div class="form-check p-2 rounded hover-item">
                                <input class="form-check-input" type="radio" name="q${index}" id="q${index}_${i}" value="${i}">
                                <label class="form-check-label w-100" style="cursor:pointer" for="q${index}_${i}">${opt}</label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        });
        html += '</div>';
        container.innerHTML += html;
    },

    renderDragDrop: function (itemData, container) {
        let html = '<div class="row">';

        // Items pool
        html += '<div class="col-12 mb-3"><div class="d-flex flex-wrap gap-2 p-3 border rounded bg-light" id="dd-pool">';
        itemData.items.forEach((item, i) => {
            html += `<div class="btn btn-outline-dark dd-item" draggable="true" data-id="${item.id}" id="item-${i}">${item.text}</div>`;
        });
        html += '</div></div>';

        // Categories
        let colSize = 12 / itemData.categories.length;
        if (colSize < 3) colSize = 3;

        itemData.categories.forEach(cat => {
            html += `
            <div class="col-md-${Math.floor(colSize)} mb-2">
                <div class="card h-100">
                    <div class="card-header small text-center">${cat.title}</div>
                    <div class="card-body dd-zone" data-cat="${cat.id}" style="min-height: 150px; background: #f8f9fa;">
                    </div>
                </div>
            </div>
        `;
        });

        html += '</div>';
        container.innerHTML += html;

        setTimeout(() => this.initDragDrop(), 100);
    },

    initDragDrop: function () {
        const items = document.querySelectorAll('.dd-item');
        const zones = document.querySelectorAll('.dd-zone');
        let draggedItem = null;

        items.forEach(item => {
            item.addEventListener('dragstart', function () {
                draggedItem = this;
                setTimeout(() => this.style.opacity = '0.5', 0);
            });
            item.addEventListener('dragend', function () {
                setTimeout(() => this.style.opacity = '1', 0);
                draggedItem = null;
            });
            item.addEventListener('click', function () {
                if (this.closest('.dd-zone')) {
                    document.getElementById('dd-pool').appendChild(this);
                }
            });
        });

        zones.forEach(zone => {
            zone.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.classList.add('bg-warning');
            });
            zone.addEventListener('dragleave', function (e) {
                this.classList.remove('bg-warning');
            });
            zone.addEventListener('drop', function (e) {
                e.preventDefault();
                this.classList.remove('bg-warning');
                if (draggedItem) {
                    this.appendChild(draggedItem);
                }
            });
        });
    },

    renderMatching: function (itemData, container) {
        let lefts = itemData.pairs.map((p, i) => ({ text: p.left, id: i }));
        let rights = itemData.pairs.map((p, i) => ({ text: p.right, id: i }));

        rights.sort(() => Math.random() - 0.5);

        let html = '<div class="row matching-container">';

        html += '<div class="col-6"><div class="list-group" id="match-left">';
        lefts.forEach(item => {
            html += `<button type="button" class="list-group-item list-group-item-action match-item" data-id="${item.id}" data-side="left">${item.text}</button>`;
        });
        html += '</div></div>';

        html += '<div class="col-6"><div class="list-group" id="match-right">';
        rights.forEach(item => {
            html += `<button type="button" class="list-group-item list-group-item-action match-item" data-id="${item.id}" data-side="right">${item.text}</button>`;
        });
        html += '</div></div>';

        html += '</div><p class="mt-2 text-muted small">Select an item from the left, then the corresponding item from the right.</p>';

        container.innerHTML += html;

        setTimeout(() => this.initMatching(), 100);
    },

    initMatching: function () {
        let selectedLeft = null;
        let selectedRight = null;

        document.querySelectorAll('.match-item').forEach(item => {
            item.addEventListener('click', function () {
                if (this.classList.contains('disabled')) return;

                if (this.dataset.side === 'left') {
                    if (selectedLeft) selectedLeft.classList.remove('active');
                    selectedLeft = this;
                    this.classList.add('active');
                } else {
                    if (selectedRight) selectedRight.classList.remove('active');
                    selectedRight = this;
                    this.classList.add('active');
                }

                if (selectedLeft && selectedRight) {
                    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    selectedLeft.style.borderColor = color;
                    selectedLeft.style.borderLeftWidth = '5px';
                    selectedLeft.style.backgroundColor = '#f0f0f0';
                    selectedRight.style.borderColor = color;
                    selectedRight.style.borderLeftWidth = '5px';
                    selectedRight.style.backgroundColor = '#f0f0f0';

                    selectedLeft.setAttribute('data-target', selectedRight.dataset.id);

                    selectedLeft.classList.remove('active');
                    selectedRight.classList.remove('active');
                    selectedLeft.classList.add('disabled');
                    selectedRight.classList.add('disabled');

                    selectedLeft = null;
                    selectedRight = null;
                }
            });
        });
    },

    renderOrdering: function (itemData, container) {
        let items = [...itemData.items];
        items.sort(() => Math.random() - 0.5);

        let html = '<div class="list-group" id="order-list">';
        items.forEach((item, i) => {
            html += `
            <div class="list-group-item d-flex justify-content-between align-items-center order-item" data-index="${i}">
                <span>${item}</span>
                <div>
                    <button class="btn btn-sm btn-outline-secondary btn-up"><i class="fas fa-arrow-up"></i></button>
                    <button class="btn btn-sm btn-outline-secondary btn-down"><i class="fas fa-arrow-down"></i></button>
                </div>
            </div>
        `;
        });
        html += '</div>';
        container.innerHTML += html;

        setTimeout(() => this.initOrdering(), 100);
    },

    initOrdering: function () {
        document.querySelectorAll('.btn-up').forEach(btn => {
            btn.addEventListener('click', function () {
                const item = this.closest('.order-item');
                if (item.previousElementSibling) {
                    item.parentNode.insertBefore(item, item.previousElementSibling);
                    item.classList.add('bg-light');
                    setTimeout(() => item.classList.remove('bg-light'), 300);
                }
            });
        });
        document.querySelectorAll('.btn-down').forEach(btn => {
            btn.addEventListener('click', function () {
                const item = this.closest('.order-item');
                if (item.nextElementSibling) {
                    item.parentNode.insertBefore(item.nextElementSibling, item);
                    item.classList.add('bg-light');
                    setTimeout(() => item.classList.remove('bg-light'), 300);
                }
            });
        });
    },

    checkAnswer: function (contentToCheck) {
        let correctC = 0;
        let total = 0;

        // Clear previous validation styles
        document.querySelectorAll('.is-valid, .is-invalid, .text-success, .text-danger, .bg-success, .bg-danger, .border-success, .border-danger').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid', 'text-success', 'text-danger', 'bg-success', 'bg-danger', 'border-success', 'border-danger', 'text-white');
        });

        // Determine type of current stage/task
        const type = contentToCheck.type || this.currentTask.type;

        if (type === 'quiz') {
            const questions = contentToCheck.questions || [];
            total = questions.length;
            questions.forEach((q, i) => {
                const container = document.getElementById(`q-container-${i}`);
                const checked = document.querySelector(`input[name="q${i}"]:checked`);
                if (checked && parseInt(checked.value) === q.correct) {
                    correctC++;
                    if (container) container.classList.add('border-success');
                    if (checked.nextElementSibling) checked.nextElementSibling.classList.add('text-success', 'fw-bold');
                } else {
                    if (container) container.classList.add('border-danger');
                    if (checked && checked.nextElementSibling) checked.nextElementSibling.classList.add('text-danger', 'fw-bold');
                }
            });
        }
        else if (type === 'dragDrop') {
            total = contentToCheck.items.length;
            contentToCheck.items.forEach(item => {
                const el = document.querySelector(`.dd-item[data-id="${item.id}"]`);
                if (el) {
                    const zone = el.closest('.dd-zone');
                    if (zone && zone.dataset.cat === item.category) {
                        correctC++;
                        el.classList.add('bg-success', 'text-white');
                    } else {
                        el.classList.add('bg-danger', 'text-white');
                    }
                }
            });
        }
        else if (type === 'matching') {
            total = contentToCheck.pairs.length;
            document.querySelectorAll('#match-left .match-item').forEach(left => {
                const targetId = left.getAttribute('data-target');
                const leftId = left.dataset.id;

                if (targetId && targetId === leftId) {
                    correctC++;
                    left.classList.add('bg-success', 'text-white');
                    const right = document.querySelector(`#match-right .match-item[data-id="${targetId}"]`);
                    if (right) right.classList.add('bg-success', 'text-white');
                } else if (targetId) {
                    left.classList.add('bg-danger', 'text-white');
                    const right = document.querySelector(`#match-right .match-item[data-id="${targetId}"]`);
                    if (right) right.classList.add('bg-danger', 'text-white');
                }
            });
        }
        else if (type === 'ordering') {
            total = contentToCheck.items.length;
            const domItems = document.querySelectorAll('.order-item span');
            domItems.forEach((span, i) => {
                if (span.textContent === contentToCheck.items[i]) {
                    correctC++;
                    span.parentElement.classList.add('bg-success', 'text-white');
                } else {
                    span.parentElement.classList.add('bg-danger', 'text-white');
                }
            });
        }

        const scorePercent = total > 0 ? Math.round((correctC / total) * 100) : 0;

        // Multi-stage Logic
        if (this.currentTask.stages && this.currentTask.stages.length > 0) {
            if (scorePercent >= 60) {
                if (this.currentStageIndex < this.currentTask.stages.length - 1) {
                    const alertDiv = document.createElement('div');
                    alertDiv.className = 'alert alert-success mt-3';
                    alertDiv.innerHTML = `Great! Stage passed (${scorePercent}%). Moving to next stage...`;

                    const container = document.getElementById('task-modal-body');
                    const oldAlert = container.querySelector('.alert');
                    if (oldAlert) oldAlert.remove();
                    container.appendChild(alertDiv);

                    setTimeout(() => {
                        this.currentStageIndex++;
                        this.renderCurrentStage(
                            document.getElementById(this.config.containerId),
                            document.getElementById(this.config.checkBtnId)
                        );
                    }, 1500);
                } else {
                    this.finishTask(scorePercent);
                }
            } else {
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-danger mt-3';
                alertDiv.innerHTML = `Stage Failed (${scorePercent}%). You need 60% to proceed.`;

                const container = document.getElementById('task-modal-body');
                const oldAlert = container.querySelector('.alert');
                if (oldAlert) oldAlert.remove();
                container.appendChild(alertDiv);
            }
        } else {
            // Single stage task
            this.finishTask(scorePercent);
        }
    },

    finishTask: function (finalScore) {
        this.saveProgress(this.currentTask.id, finalScore);

        let grade = 2;
        let gradeColor = 'danger';
        let msg = 'Try again!';

        if (finalScore >= 91) {
            grade = 5;
            gradeColor = 'success';
            msg = 'Отлично / A\'lo';
        } else if (finalScore >= 71) {
            grade = 4;
            gradeColor = 'primary';
            msg = 'Хорошо / Yaxshi';
        } else if (finalScore >= 60) {
            grade = 3;
            gradeColor = 'warning';
            msg = 'Удовлетворительно / Qoniqarli';
        } else {
            msg = 'Неудовлетворительно / Qoniqarsiz';
        }

        const resultDiv = document.createElement('div');
        resultDiv.className = `alert mt-3 text-center alert-${gradeColor}`;
        resultDiv.innerHTML = `
            <h4>Result: ${finalScore}%</h4>
            <h5 class="fw-bold">Оценка/Baho: ${grade}</h5>
            <p>${msg}</p>
        `;

        const modalBody = document.getElementById('task-modal-body');
        const oldAlert = modalBody.querySelector('.alert');
        if (oldAlert) oldAlert.remove();

        modalBody.appendChild(resultDiv);

        // Hide Check Button
        const checkBtn = document.getElementById(this.config.checkBtnId);
        if (checkBtn) checkBtn.style.display = 'none';

        if (typeof renderUserContent === 'function') {
            const user = JSON.parse(localStorage.getItem('user'));
            renderUserContent(user);
        }
    },

    saveProgress: function (taskId, score) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) return;

        const lang = localStorage.getItem('selectedLanguage') || 'ru';
        const rawLevel = this.currentLevel || user.level || 'basic';
        // Composite key: e.g., 'ru_basic', 'uz_basic'
        const levelKey = `${lang}_${rawLevel}`;

        if (!user.progress) user.progress = {};
        if (!user.progress[levelKey]) user.progress[levelKey] = {};

        const currentBest = user.progress[levelKey][taskId] || 0;
        if (score > currentBest) {
            user.progress[levelKey][taskId] = score;
            localStorage.setItem('user', JSON.stringify(user));

            let db = JSON.parse(localStorage.getItem('db_users')) || [];
            const idx = db.findIndex(u => u.email === user.email);
            if (idx !== -1) {
                db[idx] = user;
                localStorage.setItem('db_users', JSON.stringify(db));
            }
        }
    }
};