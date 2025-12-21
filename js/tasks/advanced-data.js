window.advancedTasks = [
    {
        id: 1,
        title: "Задание 1: Прохождение онлайн-курса Coursera",
        description: "Выберите и пройдите курс, затем загрузите сертификат.",
        type: 'scenarioBuilder',
        blocks: [
            {
                id: 'course_name',
                label: "Выбор курса",
                type: 'select',
                options: [
                    "Google Data Analytics",
                    "Python for Everybody",
                    "IBM Data Science",
                    "Deep Learning Specialization",
                    "AWS Fundamentals"
                ]
            },
            {
                id: 'platform',
                label: "Платформа",
                type: 'static',
                value: "Coursera"
            },
            {
                id: 'direction',
                label: "Направление курса",
                type: 'select',
                options: [
                    "Data Science",
                    "Computer Science",
                    "Business",
                    "Information Technology",
                    "Language Learning"
                ]
            },
            {
                id: 'technology',
                label: "Основная технология",
                type: 'select',
                options: [
                    "Python",
                    "R",
                    "SQL",
                    "TensorFlow",
                    "Cloud Computing"
                ]
            },
            {
                id: 'application',
                label: "Куда можно применить знания",
                type: 'select',
                options: [
                    "Анализ данных в образовании",
                    "Создание учебных ботов",
                    "Разработка LMS",
                    "Автоматизация проверки заданий",
                    "Персонализация обучения"
                ]
            },
            {
                id: 'certificate',
                label: "Загрузить сертификат (PDF/IMG)",
                type: 'file'
            }
        ]
    },
    {
        id: 2,
        title: "Задание 2: Сценарий интерактивной образовательной игры",
        description: "Спроектируйте сценарий образовательной игры, заполнив все поля.",
        type: 'scenarioBuilder',
        blocks: [
            {
                id: 'game_goal',
                label: "Цель игры",
                type: 'select', // Using select acting as radio (single choice)
                options: [
                    "Закрепление материала",
                    "Проверка знаний",
                    "Введение в новую тему",
                    "Командообразование"
                ]
            },
            {
                id: 'target_audience',
                label: "Для кого игра",
                type: 'multiselect',
                options: [
                    "Младшие школьники",
                    "Старшеклассники",
                    "Студенты вузов",
                    "Взрослые обучающиеся"
                ]
            },
            {
                id: 'learning_outcome',
                label: "Результат обучения",
                type: 'multiselect',
                options: [
                    "Усвоение терминологии",
                    "Развитие навыков принятия решений",
                    "Понимание взаимосвязей",
                    "Повышение мотивации"
                ]
            },
            {
                id: 'game_stages',
                label: "Этапы игры (минимум 4)",
                type: 'structureBuilder',
                blockTypes: ["Введение", "Задание", "Квиз", "Бонус", "Финал"],
                formats: ["Текст", "Видео", "Интерактив"],
                minItems: 4
            },
            {
                id: 'digital_tools',
                label: "Цифровые инструменты",
                type: 'select',
                options: [
                    "Genially",
                    "Kahoot!",
                    "Wordwall",
                    "Minecraft Education",
                    "Scratch"
                ]
            },
            {
                id: 'interactive_element',
                label: "Интерактивный элемент",
                type: 'select',
                options: [
                    "Drag-and-Drop",
                    "Выбор варианта",
                    "Ввод ответа",
                    "Поиск предметов"
                ]
            },
            {
                id: 'feedback',
                label: "Обратная связь",
                type: 'select',
                options: [
                    "Мгновенная (после каждого шага)",
                    "Отложенная (в конце игры)",
                    "Адаптивная (подсказки при ошибке)"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Задание 3: Создание цифрового учебного ресурса",
        description: "Создайте цифровой ресурс и опишите его параметры.",
        type: 'scenarioBuilder',
        blocks: [
            {
                id: 'resource_type',
                label: "Тип ресурса",
                type: 'select',
                options: [
                    "Видеолекция",
                    "Интерактивный модуль",
                    "Презентация",
                    "Электронный учебник"
                ]
            },
            {
                id: 'resource_link',
                label: "Ссылка на ресурс или файл",
                type: 'url_or_file' // Complex type handled by custom logic? Or just two fields? User said "Link OR File". I'll use a file input that can also accept text? Or two separate inputs where one is required. Let's make it a composite block if possible, or just a new type 'linkOrFile'
            },
            {
                id: 'tools_used',
                label: "Используемые инструменты",
                type: 'multiselect',
                options: [
                    "PowerPoint",
                    "Canva",
                    "iSpring",
                    "OBS Studio",
                    "Moodle"
                ]
            },
            {
                id: 'has_interactive',
                label: "Наличие интерактива",
                type: 'checkbox_single',
                text: "Есть интерактивные элементы"
            },
            {
                id: 'has_ethics',
                label: "Цифровая этика",
                type: 'checkbox_single',
                text: "Соблюдены нормы цифровой этики и авторского права"
            }
        ]
    },
    {
        id: 4,
        title: "Задание 4: Рекомендации по созданию онлайн-курсов",
        description: "Отметьте необходимые компоненты качественного онлайн-курса.",
        type: 'checklist',
        groups: [
            {
                title: "1. Цифровые инструменты",
                items: ["Удобная навигация", "Доступность на мобильных", "Минимализм в дизайне", "Скорость загрузки"]
            },
            {
                title: "2. Интерактивность",
                items: ["Тесты с автопроверкой", "Форум для общения", "Взаимная оценка (Peer Review)", "Геймификация"]
            },
            {
                title: "3. Цифровая безопасность",
                items: ["Защита персональных данных", "Безопасные ссылки", "Соблюдение авторских прав", "Модерация общения"]
            },
            {
                title: "4. Поддержка студентов",
                items: ["Инструкция по работе", "Техническая поддержка", "FAQ", "Каналы связи с тьютором"]
            },
            {
                title: "5. Оценка эффективности",
                items: ["Сбор статистики успеваемости", "Анкетирование студентов", "Анализ доходимости", "Сертификация"]
            }
        ]
    }
];
