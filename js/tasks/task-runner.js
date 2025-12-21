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
            if (level === 'basic') {
                sourceData = window.basicTasks;
            } else if (level === 'intermediate') {
                if (window.intermediateTasksData && window.intermediateTasksData[lang]) {
                    sourceData = window.intermediateTasksData[lang];
                } else {
                    sourceData = window.intermediateTasks;
                }
            } else if (level === 'advanced') {
                if (window.advancedTasksData && window.advancedTasksData[lang]) {
                    sourceData = window.advancedTasksData[lang];
                } else {
                    sourceData = window.advancedTasks;
                }
            }
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
        this.currentResults = []; // Store results for each stage

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
            const lang = localStorage.getItem('selectedLanguage') || 'ru';
            const questionText = lang === 'uz' ? 'Savol' : 'Вопрос';
            const ofText = lang === 'uz' ? '/' : 'из';

            const progressHtml = `<div class="progress mb-3" style="height: 5px;">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${((this.currentStageIndex + 1) / task.stages.length) * 100}%"></div>
            </div>
            <p class="text-muted small">${questionText} ${this.currentStageIndex + 1} ${ofText} ${task.stages.length}</p>`;
            container.innerHTML = progressHtml;
        }

        const type = contentToRender.type || task.type;

        // SPLIT VIEW LOGIC
        if (situationText) {
            const row = document.createElement('div');
            row.className = 'row h-100';

            // Left Column: Situation
            const lang = localStorage.getItem('selectedLanguage') || 'ru';
            const situationTitle = lang === 'uz' ? 'Vaziyat' : 'Ситуация';
            const colLeft = document.createElement('div');
            colLeft.className = 'col-md-5 border-end pe-4 d-none d-md-block';
            colLeft.innerHTML = `<h5 class="text-primary"><i class="fas fa-info-circle"></i> ${situationTitle}</h5>
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
            else if (type === 'scenarioBuilder') this.renderScenarioBuilder(contentToRender, colRight);
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
            else if (type === 'scenarioBuilder') this.renderScenarioBuilder(contentToRender, container);
            else if (type === 'checklist') this.renderChecklist(contentToRender, container);
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
        if (checkBtn.parentNode) checkBtn.parentNode.replaceChild(newBtn, checkBtn);
        else {
            // Fallback if checkBtn was hidden/removed
            const container = document.querySelector('.modal-footer') || document.querySelector('.task-footer');
            if (container) container.appendChild(newBtn);
        }

        if (newBtn.style.display === 'none') newBtn.style.display = 'block';

        const lang = localStorage.getItem('selectedLanguage') || 'ru';

        if (type === 'info') {
            newBtn.textContent = lang === 'uz' ? 'Keyingi' : 'Далее';
            newBtn.className = 'btn btn-primary';
            newBtn.addEventListener('click', () => {
                if (this.currentTask.stages && this.currentStageIndex < this.currentTask.stages.length - 1) {
                    this.currentStageIndex++;
                    this.renderCurrentStage(
                        document.getElementById(this.config.containerId),
                        document.getElementById(this.config.checkBtnId)
                    );
                } else {
                    this.currentResults.push(100); // Info always 100? Or just ignore in avg? Let's say 100 for reading.
                    this.finishInfoTask();
                }
            });
        } else {
            if (this.currentTask.stages && this.currentStageIndex < this.currentTask.stages.length - 1) {
                newBtn.textContent = lang === 'uz' ? 'Keyingi' : 'Далее';
                newBtn.className = 'btn btn-primary';
            } else {
                newBtn.textContent = lang === 'uz' ? 'Tugatish' : 'Завершить';
                newBtn.className = 'btn btn-success';
            }
            newBtn.addEventListener('click', () => {
                this.processStage(contentToRender);
            });
        }
    },

    isStageAnswered: function (type, content) {
        if (type === 'quiz') {
            const questions = content.questions || [];
            // Check if all questions have a selected option
            return questions.every((q, i) => document.querySelector(`input[name="q${i}"]:checked`));
        } else if (type === 'dragDrop') {
            // Check if all items are in a zone (not in the pool)
            const pool = document.getElementById('dd-pool');
            return pool && pool.children.length === 0;
        } else if (type === 'matching') {
            // Check if all left items are disabled (matched)
            const lefts = document.querySelectorAll('#match-left .match-item');
            return Array.from(lefts).every(el => el.classList.contains('disabled'));
        } else if (type === 'ordering') {
            // Ordering is always "answered" as items are present. 
            // We could check if user interacted, but usually initial state is considered an answer if accepted.
            // Let's assume always true for now, or maybe check if order changed? 
            // User requirement "important to answer". Let's accept current state.
            return true;

        } else if (type === 'scenarioBuilder') {
            return this.validateScenarioForm(content);
        } else if (type === 'checklist') {
            return this.validateChecklist(content);
        }
        return true;
    },

    validateScenarioForm: function (content) {
        const form = document.getElementById('scenario-form');
        if (!form) return false;

        // Iterate over blocks to validate
        for (let block of content.blocks) {
            if (block.type === 'structureBuilder') {
                if (this._currentStructure.length < (block.minItems || 0)) return false;
            }
            else if (block.type === 'file') {
                const fileInp = form.querySelector(`input[name="${block.id}"]`);
                if (!fileInp || !fileInp.value) return false;
            }
            else if (block.type === 'url_or_file') {
                const url = form.querySelector(`input[name="${block.id}_url"]`).value;
                const file = form.querySelector(`input[name="${block.id}_file"]`).value;
                if (!url && !file) return false;
            }
            else if (block.type === 'checkbox_single') {
                const chzk = form.querySelector(`input[name="${block.id}"]`);
                if (!chzk || !chzk.checked) return false;
            }
            else if (block.type === 'select' || block.type === 'multiselect') {
                // Check if any option selected
                // For select: value not empty
                // For multi: checked length > 0
                if (block.type === 'select') {
                    const sel = form.querySelector(`select[name="${block.id}"]`);
                    if (sel && !sel.value) return false;
                } else {
                    const checked = form.querySelectorAll(`input[name="${block.id}"]:checked`);
                    if (checked.length === 0) return false;
                }
            }
        }
        return true;
    },

    validateChecklist: function (content) {
        return (content.groups || []).every((g, i) => {
            const checked = document.querySelectorAll(`input[name="chk_group_${i}"]:checked`);
            return checked.length > 0;
        });
    },

    processStage: function (contentToCheck) {
        const type = contentToCheck.type || this.currentTask.type;

        // 1. Validate 'Presence' of answer
        if (!this.isStageAnswered(type, contentToCheck)) {
            alert('Пожалуйста, дайте ответ на задание, прежде чем продолжить.\nIltimeos, davom etishdan oldin javob bering.');
            return;
        }

        // 2. Calculate Score (Silent)
        let correctC = 0;
        let total = 0;

        if (type === 'quiz') {
            const questions = contentToCheck.questions || [];
            total = questions.length;
            questions.forEach((q, i) => {
                if (q.multi) {
                    const checkedInputs = document.querySelectorAll(`input[name="q${i}"]:checked`);
                    const checkedValues = Array.from(checkedInputs).map(inp => parseInt(inp.value)).sort((a, b) => a - b);
                    const correctValues = (q.correct || []).sort((a, b) => a - b);

                    // Exact match check
                    if (checkedValues.length === correctValues.length &&
                        checkedValues.every((val, idx) => val === correctValues[idx])) {
                        correctC++;
                    }
                } else {
                    const checked = document.querySelector(`input[name="q${i}"]:checked`);
                    if (checked && parseInt(checked.value) === q.correct) {
                        correctC++;
                    }
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
                    }
                }
            });
        }
        else if (type === 'matching') {
            total = contentToCheck.pairs.length;
            // logic: we check pairs. DOM elements have data-target.
            document.querySelectorAll('#match-left .match-item').forEach(left => {
                const targetId = left.getAttribute('data-target');
                const leftId = left.dataset.id;
                if (targetId && targetId === leftId) correctC++;
            });
        }
        else if (type === 'ordering') {
            total = contentToCheck.items.length;
            const domItems = document.querySelectorAll('.order-item span');
            domItems.forEach((span, i) => {
                if (span.textContent === contentToCheck.items[i]) correctC++;
            });
        }

        else if (type === 'scenarioBuilder') {
            // For scenarios, if validation passed, we consider it 100% correct 
            // as there's no "right answer" logic defined, only "completed".
            // Or we could check specific values but requirements say "System checks if done".
            // So if validateScenarioForm passed, Score = 100%.
            total = 1;
            correctC = 1;
        }
        else if (type === 'checklist') {
            // Same for checklist, if validation passed (at least one per group), score = 100%
            total = 1;
            correctC = 1;
        }

        const stageScore = total > 0 ? Math.round((correctC / total) * 100) : 0;
        this.currentResults.push(stageScore);

        // 3. Navigation
        if (this.currentTask.stages && this.currentStageIndex < this.currentTask.stages.length - 1) {
            this.currentStageIndex++;
            this.renderCurrentStage(
                document.getElementById(this.config.containerId),
                document.getElementById(this.config.checkBtnId)
            );
        } else {
            this.finishInfoTask(); // Use finishInfoTask which calculates average
        }
    },

    // --- SCENARIO BUILDER LOGIC ---
    renderScenarioBuilder: function (data, container) {
        let html = '<form id="scenario-form" class="needs-validation" onsubmit="return false;">';

        data.blocks.forEach(block => {
            html += `<div class="mb-4 border p-3 rounded bg-white shadow-sm" id="block-${block.id}">`;
            html += `<label class="form-label fw-bold text-primary">${block.label}</label>`;

            if (block.type === 'select') {
                html += `<select class="form-select" name="${block.id}">
                            <option value="">Выберите вариант...</option>
                            ${block.options.map((opt, i) => `<option value="${i}">${opt}</option>`).join('')}
                         </select>`;
            }
            else if (block.type === 'multiselect') {
                html += `<div class="d-flex flex-wrap gap-3">`;
                block.options.forEach((opt, i) => {
                    html += `
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="${block.id}" value="${i}" id="${block.id}_${i}">
                        <label class="form-check-label" for="${block.id}_${i}">${opt}</label>
                    </div>`;
                });
                html += `</div>`;
            }
            else if (block.type === 'static') {
                html += `<div class="form-control-plaintext border p-2 bg-light">${block.value}</div>`;
            }
            else if (block.type === 'file') {
                html += `<input type="file" class="form-control" name="${block.id}">`;
            }
            else if (block.type === 'url_or_file') {
                html += `
                <div class="mb-2">
                    <label class="small text-muted">Ссылка:</label>
                    <input type="url" class="form-control" name="${block.id}_url" placeholder="https://...">
                </div>
                <div class="text-center small text-muted my-1">- ИЛИ -</div>
                <div class="mb-2">
                    <label class="small text-muted">Загрузить файл:</label>
                    <input type="file" class="form-control" name="${block.id}_file">
                </div>`;
            }
            else if (block.type === 'checkbox_single') {
                html += `
                 <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="${block.id}" id="${block.id}">
                    <label class="form-check-label" for="${block.id}">${block.text}</label>
                 </div>`;
            }
            else if (block.type === 'interactiveParam') {
                html += `
                <div class="row g-3">
                    <div class="col-md-7">
                        <select class="form-select" name="${block.id}_type">
                            <option value="">Тип интерактива...</option>
                            ${block.options.map((opt, i) => `<option value="${i}">${opt}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-5">
                        <div class="input-group">
                            <span class="input-group-text">Мин.</span>
                            <input type="number" class="form-control" name="${block.id}_time" placeholder="Время (мин)" min="0">
                        </div>
                    </div>
                </div>`;
            }
            else if (block.type === 'structureBuilder') {
                html += `
                <div id="structure-list" class="mb-2"></div>
                <div class="row g-2 align-items-end p-2 bg-light rounded">
                     <div class="col-md-4">
                        <select class="form-select form-select-sm" id="new-struct-type">
                            <option value="">Тип блока...</option>
                            ${block.blockTypes.map(t => `<option value="${t}">${t}</option>`).join('')}
                        </select>
                     </div>
                     <div class="col-md-4">
                        <select class="form-select form-select-sm" id="new-struct-format">
                            <option value="">Формат...</option>
                            ${block.formats.map(f => `<option value="${f}">${f}</option>`).join('')}
                        </select>
                     </div>
                     <div class="col-md-2">
                        <input type="number" class="form-control form-control-sm" id="new-struct-dur" placeholder="Мин" min="1">
                     </div>
                     <div class="col-md-2">
                        <button class="btn btn-sm btn-outline-primary w-100" onclick="TaskRunner.addStructureBlock()">+ Doc</button>
                     </div>
                </div>
                <input type="hidden" name="structure_data" id="structure-data-input">
                `;

                // Store options globally for helper to access
                this._tempStructureOpts = block;
                this._currentStructure = [];
            }

            html += `<div class="invalid-feedback d-block mt-1" id="err-${block.id}" style="display:none !important"></div>`;
            html += `</div>`;
        });

        html += '</form>';
        container.innerHTML += html;
    },

    addStructureBlock: function () {
        const typeEl = document.getElementById('new-struct-type');
        const fmtEl = document.getElementById('new-struct-format');
        const durEl = document.getElementById('new-struct-dur');

        const type = typeEl.value;
        const fmt = fmtEl.value;
        const dur = parseInt(durEl.value);

        if (!type || !fmt || !dur) {
            alert("Заполните все поля блока!");
            return;
        }

        this._currentStructure.push({ type, format: fmt, duration: dur });

        // Render List
        this.renderStructureList();

        // Reset inputs
        typeEl.value = "";
        fmtEl.value = "";
        durEl.value = "";
    },

    removeStructureBlock: function (index) {
        this._currentStructure.splice(index, 1);
        this.renderStructureList();
    },

    renderStructureList: function () {
        const container = document.getElementById('structure-list');
        const input = document.getElementById('structure-data-input');

        if (!container) return;

        input.value = JSON.stringify(this._currentStructure);

        container.innerHTML = this._currentStructure.map((item, i) => `
            <div class="d-flex justify-content-between align-items-center border-bottom py-1">
                <span><span class="badge bg-secondary">${i + 1}</span> <b>${item.type}</b> (${item.format}, ${item.duration} мин)</span>
                <button class="btn btn-sm text-danger" onclick="TaskRunner.removeStructureBlock(${i})">&times;</button>
            </div>
        `).join('');
    },
    renderChecklist: function (data, container) {
        let html = '<form id="checklist-form">';
        data.groups.forEach((group, gIdx) => {
            html += `<div class="card mb-3 shadow-sm">
                <div class="card-header fw-bold">${group.title}</div>
                <div class="card-body">`;
            group.items.forEach((item, i) => {
                html += `
                 <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" name="chk_group_${gIdx}" id="g${gIdx}_${i}" value="${i}">
                    <label class="form-check-label" for="g${gIdx}_${i}">${item}</label>
                 </div>`;
            });
            html += `</div></div>`;
        });
        html += '</form>';
        container.innerHTML += html;
    },

    // ----------------------------

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
                                <input class="form-check-input" type="${q.multi ? 'checkbox' : 'radio'}" name="q${index}" id="q${index}_${i}" value="${i}">
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

    finishInfoTask: function () {
        // Calculate average score
        const total = this.currentResults.reduce((a, b) => a + b, 0);
        const avg = this.currentResults.length > 0 ? Math.round(total / this.currentResults.length) : 100;
        this.finishTask(avg);
    },

    finishTask: function (finalScore) {
        this.saveProgress(this.currentTask.id, finalScore);

        let grade = 2;
        let gradeColor = 'danger';
        let msg = 'Try again!';

        const threshold = this.getPassThreshold();
        const passed = finalScore >= threshold;

        if (finalScore >= 91) {
            grade = 5;
            gradeColor = 'success';
            msg = passed ? 'Отлично / A\'lo' : 'Отлично, но недостаточно для этого уровня'; // Edge case if 91 < threshold? Unlikely.
            // Actually for Advanced threshold is 90. So 91 is pass.
            msg = 'Отлично / A\'lo';
        } else if (finalScore >= 71) {
            grade = 4;
            gradeColor = passed ? 'primary' : 'danger'; // Blue if pass, Red if fail (e.g. Adv requires 90)
            msg = passed ? 'Хорошо / Yaxshi' : 'Недостаточно баллов / Ball yetarli emas';
        } else if (finalScore >= 60) {
            grade = 3;
            gradeColor = passed ? 'warning' : 'danger';
            msg = passed ? 'Удовлетворительно / Qoniqarli' : 'Недостаточно баллов / Ball yetarli emas';
        } else {
            msg = 'Неудовлетворительно / Qoniqarsiz';
        }

        const resultDiv = document.createElement('div');
        resultDiv.className = `alert mt-3 text-center alert-${gradeColor}`;
        resultDiv.innerHTML = `
            <h4>Result: ${finalScore}% ${passed ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>'}</h4>
            <h5 class="fw-bold">Оценка/Baho: ${grade}</h5>
            <p>${msg}</p>
            ${!passed ? `<p class="small text-muted">Для прохождения уровня требуется ${threshold}%</p>` : ''}
        `;

        const modalBody = document.getElementById(this.config.containerId);
        if (modalBody) {
            const oldAlert = modalBody.querySelector('.alert');
            if (oldAlert) oldAlert.remove();
            modalBody.appendChild(resultDiv);
        }

        // Hide Check Button
        const checkBtn = document.getElementById(this.config.checkBtnId);
        if (checkBtn) checkBtn.style.display = 'none';

        if (typeof renderUserContent === 'function') {
            const user = JSON.parse(localStorage.getItem('user'));
            renderUserContent(user);
        }

        // Check for Level Completion
        if (finalScore >= this.getPassThreshold()) {
            this.checkLevelCompletion();
        }
    },

    getPassThreshold: function () {
        const user = JSON.parse(localStorage.getItem('user'));
        const level = this.currentLevel || user.level || 'basic';
        if (level === 'advanced') return 90;
        if (level === 'intermediate') return 70;
        return 60;
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
    },

    checkLevelCompletion: function () {
        const user = JSON.parse(localStorage.getItem('user'));
        const lang = localStorage.getItem('selectedLanguage') || 'ru';
        const rawLevel = this.currentLevel || user.level || 'basic';
        const levelKey = `${lang}_${rawLevel}`;

        // Determine total tasks
        let totalTasks = 0;
        if (rawLevel === 'basic' && window.basicTasks) totalTasks = window.basicTasks.length;
        else if (rawLevel === 'intermediate' && window.intermediateTasks) totalTasks = window.intermediateTasks.length;
        else if (rawLevel === 'advanced' && window.advancedTasks) totalTasks = window.advancedTasks.length;

        if (totalTasks === 0) return;

        // Check user progress
        const progress = user.progress[levelKey] || {};
        let completedCount = 0;
        const threshold = this.getPassThreshold(); // This uses currentLevel which should be set

        // Safety: ensure currentLevel is correct for loop context? 
        // Actually getPassThreshold relies on this.currentLevel. 
        // When checking completion, we ARE in that level. So it is fine.

        for (let i = 1; i <= totalTasks; i++) {
            if ((progress[i] || 0) >= threshold) completedCount++;
        }

        if (completedCount === totalTasks) {
            this.showCongratsModal();
        }
    },

    showCongratsModal: function () {
        const lang = localStorage.getItem('selectedLanguage') || 'ru';
        const title = lang === 'ru' ? 'Поздравляем!' : 'Tabriklaymiz!';
        const msg = lang === 'ru' ?
            'Вы успешно завершили уровень! Сертификат доступен в личном кабинете.' :
            'Siz darajani muvaffaqiyatli yakunladingiz! Sertifikat shaxsiy kabinetda mavjud.';
        const btnCabinet = lang === 'ru' ? 'В кабинет' : 'Kabinetga';
        const btnStay = lang === 'ru' ? 'Остаться' : 'Qolish';

        // Create Modal HTML
        const modalId = 'congratsModal';
        // Remove if exists
        const existing = document.getElementById(modalId);
        if (existing) existing.remove();

        const html = `
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true" data-bs-backdrop="static" style="z-index: 10000;">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-dark" style="border: 2px solid #28a745;">
              <div class="modal-header bg-success text-white">
                <h5 class="modal-title"><i class="fas fa-trophy"></i> ${title}</h5>
                <button type="button" class="btn-close btn-close-white" onclick="document.getElementById('${modalId}').remove()" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center py-4">
                 <i class="fas fa-certificate fa-4x text-warning mb-3"></i>
                 <p class="lead">${msg}</p>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" onclick="document.getElementById('${modalId}').remove()">${btnStay}</button>
                <a href="cabinet.html" class="btn btn-primary">${btnCabinet}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade show" id="${modalId}-backdrop" style="z-index: 9999;"></div>`;

        document.body.insertAdjacentHTML('beforeend', html);
        const modalEl = document.getElementById(modalId);
        const backdropEl = document.getElementById(`${modalId}-backdrop`);

        // Try Bootstrap first
        let bsSuccess = false;
        if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
            try {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
                // If bootstrap works, it adds its own backdrop, so remove ours
                if (backdropEl) backdropEl.remove();
                bsSuccess = true;
            } catch (e) {
                console.warn("Bootstrap Modal init failed", e);
            }
        }

        if (!bsSuccess) {
            // Vanilla Fallback
            modalEl.classList.add('show');
            modalEl.style.display = 'block';
            // We keep our backdrop
        } else {
            // If success, we removed our backdrop.
            // But verify z-index issues. Bootstrap modals usually have 1050.
            // Ours has 10000. It should be fine.
        }
    }
};