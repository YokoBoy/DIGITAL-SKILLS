const basicTasks = [
    {
        id: 1,
        type: 'quiz',
        title: "Задание 1: Тест",
        description: "Выберите правильный ответ.",
        questions: [
            {
                text: "Какое положение наиболее точно отражает отличие цифровой педагогики от традиционной?",
                options: ["a) Использование компьютеров вместо учебников", "b) Перенос учебного материала в электронный формат", "c) Изменение роли преподавателя и логики организации учебной деятельности", "d) Увеличение количества мультимедийных материалов"],
                correct: 2 // Index c
            },
            {
                text: "Что является ключевой характеристикой цифрового общества в образовательном контексте?",
                options: ["a) Повсеместное использование компьютеров", "b) Доступность онлайн-ресурсов", "c) Интеграция цифровых технологий в социальные и образовательные практики", "d) Развитие дистанционного обучения"],
                correct: 2 // Index c
            },
            {
                text: "Какова основная функция цифровых сервисов в образовательном процессе?",
                options: ["a) Хранение учебных материалов", "b) Организация и поддержка совместной учебной деятельности", "c) Замена преподавателя", "d) Контроль посещаемости"],
                correct: 1 // Index b
            },
            {
                text: "Что относится к современным техническим руководствам в образовании?",
                options: ["a) Инструкции по эксплуатации оборудования", "b) Методические рекомендации по использованию цифровых технологий", "c) Учебные планы и программы", "d) Электронные журналы успеваемости"],
                correct: 1 // Index b
            },
            {
                text: "Какое устройство относится к устройствам ввода информации?",
                options: ["a) Проектор", "b) Монитор", "c) Сканер", "d) Акустическая система"],
                correct: 2 // Index c
            },
            {
                text: "Основная педагогическая функция экранных и визуальных уроков заключается в:",
                options: ["a) Замене устного объяснения", "b) Повышении наглядности и визуализации учебного материала", "c) Сокращении времени занятия", "d) Автоматизации контроля знаний"],
                correct: 1 // Index b
            },
            {
                text: "В чем заключается образовательный потенциал storytelling в цифровой среде?",
                options: ["a) В передаче большого объёма информации", "b) В формировании эмоциональной вовлечённости и смыслового понимания материала", "c) В использовании анимации и видео", "d) В упрощении теоретического содержания"],
                correct: 1 // Index b
            },
            {
                text: "Какое преимущество мультимедийных учебных материалов является ключевым?",
                options: ["a) Возможность быстрого обновления контента", "b) Интеграция текста, звука и изображения для повышения усвоения материала", "c) Простота технической реализации", "d) Снижение роли преподавателя"],
                correct: 1 // Index b
            },
            {
                text: "Какое направление использования видеокамер наиболее актуально в современном образовании?",
                options: ["a) Фиксация посещаемости", "b) Запись лекций для архива", "c) Создание учебных видеоматериалов и интерактивного контента", "d) Контроль дисциплины"],
                correct: 2 // Index c
            },
            {
                text: "Какова основная функция программного обеспечения интерактивной доски?",
                options: ["a) Проецирование изображения", "b) Управление мультимедийным оборудованием", "c) Обеспечение интерактивного взаимодействия с учебным материалом", "d) Хранение учебных файлов"],
                correct: 2 // Index c
            },
            {
                text: "Какую роль выполняют сетевые технологии в дистанционном обучении?",
                options: ["a) Обеспечивают визуализацию контента", "b) Создают техническую основу для передачи и взаимодействия данных", "c) Заменяют образовательные платформы", "d) Используются только для связи"],
                correct: 1 // Index b
            },
            {
                text: "Что является характерной особенностью SMART-технологий в образовании?",
                options: ["a) Использование мобильных устройств", "b) Интерактивность и адаптивность образовательного процесса", "c) Применение искусственного интеллекта", "d) Онлайн-формат обучения"],
                correct: 1 // Index b
            },
            {
                text: "Какое преимущество облачных сервисов наиболее значимо при разработке электронных учебных ресурсов?",
                options: ["a) Высокая скорость интернета", "b) Возможность коллективной работы и удалённого доступа", "c) Защита от копирования", "d) Автономность использования"],
                correct: 1 // Index b
            },
            {
                text: "Какое педагогическое условие является ключевым при использовании социальных сетей в вузе?",
                options: ["a) Популярность платформы среди студентов", "b) Наличие мобильного приложения", "c) Методически обоснованная интеграция в учебный процесс", "d) Возможность обмена файлами"],
                correct: 2 // Index c
            },
            {
                text: "Какова основная функция МООК в системе высшего образования?",
                options: ["a) Замена очного обучения", "b) Средство контроля знаний", "c) Поддержка самостоятельного и непрерывного обучения", "d) Повышение рейтинга университета"],
                correct: 2 // Index c
            }
        ]
    },
    {
        id: 2,
        type: 'dragDrop',
        title: "Задание 2: Перетаскивание",
        description: "Перетащите цифровые инструменты в соответствующие категории.",
        categories: [
            { id: 'pres', title: "Представление учебного материала" },
            { id: 'interact', title: "Организация взаимодействия" },
            { id: 'control', title: "Контроль и оценивание" }
        ],
        items: [
            { id: 'i1', text: "Edpuzzle", category: 'pres' },
            { id: 'i2', text: "Google Forms", category: 'control' },
            { id: 'i3', text: "Zoom", category: 'interact' },
            { id: 'i4', text: "Padlet", category: 'interact' },
            { id: 'i5', text: "LearningApps", category: 'control' }
        ]
    },
    {
        id: 3,
        type: 'matching',
        title: "Задание 3: Соотнесение",
        description: "Соотнесите формат цифрового контента с его назначением.",
        pairs: [
            { left: "Видеоурок с интерактивными вопросами", right: "Закрепление знаний через практическую деятельность в процессе просмотра" },
            { left: "Инфографика", right: "Наглядное представление сложной информации и связей" },
            { left: "Multimedia longread", right: "Формирование целостного понимания темы через сочетание текста и мультимедиа" },
            { left: "Подкаст (аудиоурок)", right: "Развитие слухового восприятия и возможности обучения в мобильном формате" },
            { left: "Интерактивная презентация", right: "Активизация познавательной деятельности и вовлечение обучающихся" },
            { left: "Онлайн-тест с автоматической проверкой", right: "Контроль и самопроверка усвоения учебного материала" }
        ]
    },
    {
        id: 4,
        type: 'ordering',
        title: "Задание 4: Последовательность",
        description: "Расположите этапы разработки контента в правильном порядке.",
        items: [
            "Анализ учебной цели и целевой аудитории",
            "Выбор цифрового формата и инструментов",
            "Проектирование структуры контента",
            "Создание мультимедийных элементов",
            "Интеграция интерактивных компонентов",
            "Проверка и корректировка контента"
        ]
    },
    {
        id: 5,
        type: 'matching',
        title: "Задание 5: Кейс (Ситуация)",
        description: "Соотнесите цифровой инструмент с этапом урока.",
        pairs: [
            { left: "Интерактивная презентация", right: "Объяснение нового материала" },
            { left: "Короткое учебное видео", right: "Актуализация знаний" },
            { left: "Онлайн-опрос", right: "Рефлексия" },
            { left: "Облачный документ", right: "Закрепление" }
        ]
    },
    {
        id: 6,
        type: 'matching',
        title: "Задание 6: Облачные технологии",
        description: "Соотнесите функцию облачного сервиса с её назначением.",
        pairs: [
            { left: "Совместный доступ", right: "Совместная работа над заданием" },
            { left: "Комментарии", right: "Обратная связь от учителя" },
            { left: "Хранение файлов", right: "Единое место хранения работ" },
            { left: "История изменений", right: "Контроль вклада каждого ученика" }
        ]
    },
    {
        id: 7,
        type: 'matching',
        title: "Задание 7: Интерактивные элементы",
        description: "Соотнесите интерактивный элемент с навыком.",
        pairs: [
            { left: "Онлайн-викторина", right: "Критическое мышление" },
            { left: "Интерактивное видео", right: "Анализ информации" },
            { left: "Мини-опрос", right: "Цифровая коммуникация" },
            { left: "Игровой тест", right: "Осознанное использование цифровых инструментов" }
        ]
    },
    {
        id: 8,
        type: 'dragDrop',
        title: "Задание 8: Этика и безопасность",
        description: "Распределите действия по категориям.",
        categories: [
            { id: 'ethical', title: "Этичное и безопасное поведение" },
            { id: 'unethical', title: "Неэтичное или опасное поведение" }
        ],
        items: [
            { id: 'p1', text: "Использование сложного пароля", category: 'ethical' },
            { id: 'p2', text: "Указание источника информации", category: 'ethical' },
            { id: 'p3', text: "Публикация чужой фотографии без разрешения", category: 'unethical' },
            { id: 'p4', text: "Оскорбление в комментариях", category: 'unethical' }
        ]
    },
    {
        id: 9,
        type: 'matching',
        title: "Задание 9: Онлайн-общение",
        description: "Соотнесите ситуацию с корректным действием.",
        pairs: [
            { left: "Онлайн-урок идёт, учитель объясняет тему", right: "Не писать посторонние сообщения" },
            { left: "Работа в общем документе", right: "Вносить правки аккуратно и по договорённости" },
            { left: "Общение в учебном чате", right: "Соблюдать вежливый стиль общения" },
            { left: "Использование информации из интернета", right: "Указывать источник информации" }
        ]
    }
];

const intermediateTasks = [
    {
        id: 1,
        type: 'matching',
        title: "Задание 1: У нас проблемы, Хьюстон!!!",
        description: "Соотнесите выявленные проблемы с элементами цифрового решения, которые позволяют их устранить.",
        pairs: [
            { left: "Отсутствие быстрой обратной связи", right: "Мгновенное отображение результата" },
            { left: "Невозможность определить этап ошибки", right: "Поэтапная автоматическая проверка" },
            { left: "Формальное выполнение заданий", right: "Интерактивное задание с визуальной сборкой алгоритма" },
            { left: "Отсутствие данных о ходе работы", right: "Логирование действий пользователя" }
        ]
    },
    {
        id: 2,
        type: 'matching',
        title: "Задание 2: Инженерно-педагогическая проблема",
        description: "Соотнесите действие пользователя в цифровой образовательной среде с его последствием.",
        pairs: [
            { left: "Публикация работы с ФИО и контактами", right: "Формирование расширенного цифрового следа" },
            { left: "Использование двухфакторной аутентификации", right: "Снижение риска несанкционированного доступа" },
            { left: "Работа в LMS под чужой учётной записью", right: "Потеря персональной ответственности за действия" },
            { left: "Настройка приватности профиля", right: "Защита персональных данных" }
        ]
    },
    {
        id: 3,
        type: 'matching',
        title: "Задание 3: Комплексное цифровое решение",
        description: "Соотнесите этапы учебного процесса с цифровыми инструментами.",
        pairs: [
            { left: "Объяснение принципа работы исполнителя", right: "Интерактивная презентация с анимацией" },
            { left: "Практическое выполнение алгоритма", right: "Симулятор исполнителя (визуальная среда)" },
            { left: "Проверка правильности выполнения", right: "Автопроверяемое задание в ЭОР" },
            { left: "Анализ типичных ошибок", right: "Отчёт о действиях учащегося (лог выполнения)" }
        ]
    },
    {
        id: 4,
        type: 'dragDrop', // Implemented as ordering visually described as zones but ordering logic fits "Logic Flow" 
        // Text says: "Перетащите элементы алгоритма в правильные логические зоны". 
        // We can simulate this with a DragDrop into zones.
        // Zones: Начало, Ветвь Да, Ветвь Нет, Завершение.
        title: "Задание 4: Алгоритм",
        description: "Перетащите элементы алгоритма в правильные логические зоны.",
        categories: [
            { id: 'start', title: "Начало алгоритма" },
            { id: 'yes', title: "Ветвь «Да»" },
            { id: 'no', title: "Ветвь «Нет»" },
            { id: 'end', title: "Завершение" }
        ],
        items: [
            { id: 'i1', text: "Ввести значение n", category: 'start' },
            { id: 'i2', text: "Проверить условие n mod 2 = 0", category: 'start' },
            { id: 'i3', text: "Вывести «Чётное»", category: 'yes' },
            { id: 'i4', text: "Вывести «Нечётное»", category: 'no' }
            // No items for 'end' in key? Key says "Завершение алгоритма: (без дополнительных команд)". 
            // So user leaves it empty? Or maybe the zones are just containers?
            // "Алгоритм считается корректным если... Завершение: (без доп команд)"
            // I will implement it as drag drop.
        ]
    },
    {
        id: 5,
        type: 'quiz',
        title: "Задание 5: Инженерно-педагогическая задача",
        description: "Выберите одно педагогически и инженерно обоснованное решение.",
        questions: [
            {
                text: "85% корректно вводят данные, 60% правильно формулируют условие, 42% верно распределяют действия, 92% корректно выводят. Какое решение выбрать?",
                options: [
                    "A. Повторить объяснение всей темы",
                    "B. Добавить пошаговый интерактивный тренажёр для этапа ветвления", // Correct
                    "C. Увеличить количество заданий на ввод данных",
                    "D. Убрать автопроверку"
                ],
                correct: 1 // B
            },
            {
                text: "Выберите ДВА действия, которые логично дополнят решение (множественный выбор не поддерживается в моем quiz engine пока, сделаю как 2 вопроса или 1 сложный). Пусть будет вопрос 2.",
                // Wait, quiz engine support single choice. The task asks for TWO. 
                // I will adapt: "Какое из этих действий дополнит решение? (Часть 1)" then "(Часть 2)" OR combine.
                // Let's combine into single best answer or split.
                // "Выберите действие, дополняющее решение (1 из 2 верных)" - no that's ambiguous.
                // I'll make it multiple choice checkboxes effectively? My engine is radio buttons.
                // I will adapt to: Question 2: "Какое первое действие дополнит решение?" Question 3: "Какое второе?"
                // Or just: "Визуализация ветвей алгоритма (Да/Нет)?" -> True.
                // Let's simplify: "Что из перечисленного является корректным дополнением?" (Option having both?)
                // Option: "Визуализация ветвей и Сбор логов" (Correct combination)
                text: "Какие действия логично дополнят выбранное решение?",
                options: [
                    "a) Визуализация ветвей и Сбор логов", // Combined Correct
                    "b) Отключение проверки и Сбор логов",
                    "c) Увеличение теории и Визуализация",
                    "d) Только увеличение теории"
                ],
                correct: 0
            }
        ]
    },
    {
        id: 6,
        type: 'ordering',
        title: "Задание 6: Моделирование",
        description: "Расположите этапы цифрового урока в правильном порядке.",
        items: [
            "Интерактивное объяснение процесса моделирования",
            "Пошаговый тренажёр по формализации",
            "Базовое автопроверяемое задание",
            "Усложнённое задание с новой задачей",
            "Сбор и анализ данных выполнения"
        ]
    }
];

const TaskRunner = {
    currentTask: null,
    currentLevel: null,

    open: function (taskId, level = 'basic') {
        const sourceData = level === 'intermediate' ? intermediateTasks : basicTasks;
        const task = sourceData.find(t => t.id === taskId);

        if (!task) {
            console.error(`Task ${taskId} not found in ${level}`);
            return;
        }

        this.currentTask = task;
        this.currentLevel = level;

        const modalBody = document.getElementById('task-modal-body');
        const modalTitle = document.getElementById('taskModalLabel');
        const checkBtn = document.getElementById('btn-check-task');

        modalTitle.textContent = task.title;
        modalBody.innerHTML = `<p class="mb-3">${task.description}</p>`;
        checkBtn.style.display = 'block';

        if (task.type === 'quiz') this.renderQuiz(task, modalBody);
        if (task.type === 'dragDrop') this.renderDragDrop(task, modalBody);
        if (task.type === 'matching') this.renderMatching(task, modalBody);
        if (task.type === 'ordering') this.renderOrdering(task, modalBody);

        const modal = new bootstrap.Modal(document.getElementById('taskModal'));
        modal.show();

        // Remove old listeners
        const newBtn = checkBtn.cloneNode(true);
        checkBtn.parentNode.replaceChild(newBtn, checkBtn);
        newBtn.addEventListener('click', () => this.checkAnswer(task));
    },

    renderQuiz: function (task, container) {
        let html = '<div class="quiz-container">';
        task.questions.forEach((q, index) => {
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

    renderDragDrop: function (task, container) {
        let html = '<div class="row">';

        // Items pool
        html += '<div class="col-12 mb-3"><div class="d-flex flex-wrap gap-2 p-3 border rounded bg-light" id="dd-pool">';
        task.items.forEach((item, i) => {
            html += `<div class="btn btn-outline-dark dd-item" draggable="true" data-id="${item.id}" id="item-${i}">${item.text}</div>`;
        });
        html += '</div></div>';

        // Categories
        let colSize = 12 / task.categories.length;
        if (colSize < 3) colSize = 3; // Minimum width

        task.categories.forEach(cat => {
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
                this.classList.remove('bg-warning');
                if (draggedItem) {
                    this.appendChild(draggedItem);
                }
            });
        });
    },

    renderMatching: function (task, container) {
        let lefts = task.pairs.map((p, i) => ({ text: p.left, id: i }));
        let rights = task.pairs.map((p, i) => ({ text: p.right, id: i }));

        // Shuffle rights
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
                    selectedRight.style.backgroundColor = '#f0f0f0'; // Ensure both colored

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

    renderOrdering: function (task, container) {
        let items = [...task.items];
        items.sort(() => Math.random() - 0.5);

        let html = '<div class="list-group" id="order-list">';
        items.forEach((item, i) => {
            html += `
                <div class="list-group-item d-flex justify-content-between align-items-center order-item">
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

    checkAnswer: function (task) {
        let correctC = 0;
        let total = 0;

        document.querySelectorAll('.is-valid, .is-invalid, .text-success, .text-danger, .bg-success, .bg-danger').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid', 'text-success', 'text-danger', 'bg-success', 'bg-danger', 'text-white');
            if (el.classList.contains('card')) el.classList.remove('border-success', 'border-danger');
        });

        if (task.type === 'quiz') {
            total = task.questions.length;
            task.questions.forEach((q, i) => {
                const container = document.getElementById(`q-container-${i}`);
                const checked = document.querySelector(`input[name="q${i}"]:checked`);
                if (checked && parseInt(checked.value) === q.correct) {
                    correctC++;
                    if (container) container.classList.add('border-success');
                    checked.nextElementSibling.classList.add('text-success', 'fw-bold');
                } else {
                    if (container) container.classList.add('border-danger');
                    if (checked) checked.nextElementSibling.classList.add('text-danger', 'fw-bold');
                }
            });
        }
        else if (task.type === 'dragDrop') {
            total = task.items.length;
            task.items.forEach(item => {
                const el = document.querySelector(`.dd-item[data-id="${item.id}"]`);
                const zone = el.closest('.dd-zone');
                if (zone && zone.dataset.cat === item.category) {
                    correctC++;
                    el.classList.add('bg-success', 'text-white');
                } else {
                    el.classList.add('bg-danger', 'text-white');
                }
            });
        }
        else if (task.type === 'matching') {
            total = task.pairs.length;
            document.querySelectorAll('#match-left .list-group-item').forEach(left => {
                const targetId = left.getAttribute('data-target');
                if (targetId && targetId === left.dataset.id) {
                    correctC++;
                    left.classList.add('bg-success', 'text-white');
                    const right = document.querySelector(`#match-right .match-item[data-id="${targetId}"]`);
                    if (right) right.classList.add('bg-success', 'text-white');
                } else {
                    if (left.classList.contains('disabled')) {
                        left.classList.add('bg-danger', 'text-white');
                        if (targetId) {
                            const right = document.querySelector(`#match-right .match-item[data-id="${targetId}"]`);
                            if (right) right.classList.add('bg-danger', 'text-white');
                        }
                    }
                }
            });
        }
        else if (task.type === 'ordering') {
            total = task.items.length;
            const domItems = document.querySelectorAll('.order-item span');
            domItems.forEach((span, i) => {
                if (span.textContent === task.items[i]) {
                    correctC++;
                    span.parentElement.classList.add('bg-success', 'text-white');
                } else {
                    span.parentElement.classList.add('bg-danger', 'text-white');
                }
            });
        }

        const scorePercent = Math.round((correctC / total) * 100);
        this.saveProgress(task.id, scorePercent);

        // Determine Grade and Message
        let grade = 2;
        let gradeColor = 'danger';
        let msg = 'Try again!';

        if (scorePercent >= 91) {
            grade = 5;
            gradeColor = 'success';
            msg = 'Отлично / A\'lo';
        } else if (scorePercent >= 71) {
            grade = 4;
            gradeColor = 'primary';
            msg = 'Хорошо / Yaxshi';
        } else if (scorePercent >= 60) {
            grade = 3;
            gradeColor = 'warning';
            msg = 'Удовлетворительно / Qoniqarli';
        } else {
            msg = 'Неудовлетворительно / Qoniqarsiz';
        }

        // Result Display
        const resultDiv = document.createElement('div');
        resultDiv.className = `alert mt-3 text-center alert-${gradeColor}`;
        resultDiv.innerHTML = `
            <h4>Result: ${correctC} / ${total} (${scorePercent}%)</h4>
            <h5 class="fw-bold">Оценка/Baho: ${grade}</h5>
            <p>${msg}</p>
        `;

        const modalBody = document.getElementById('task-modal-body');
        // Remove old alert
        const oldAlert = modalBody.querySelector('.alert');
        if (oldAlert) oldAlert.remove();

        modalBody.appendChild(resultDiv);

        if (typeof renderUserContent === 'function') {
            const user = JSON.parse(localStorage.getItem('user'));
            renderUserContent(user);
        }
    },

    saveProgress: function (taskId, score) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) return;

        // Dynamic level support
        const level = this.currentLevel || user.level || 'basic';

        if (!user.progress) user.progress = {};
        if (!user.progress[level]) user.progress[level] = {};

        const currentBest = user.progress[level][taskId] || 0;
        if (score > currentBest) {
            user.progress[level][taskId] = score;
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
