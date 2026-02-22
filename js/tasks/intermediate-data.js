window.intermediateTasksData = {
    ru: [
        {
            id: 1,
            title: "Задание 1",
            description: "Цифровая инструкция для пожилых.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Ситуация</h5>
                        <p>В городе Самарканд многие пожилые жители испытывают трудности при записи к врачу через портал «my.gov.uz». Они теряются в интерфейсе, не могут найти нужную кнопку и опасаются вводить свои данные. Администрация поликлиники обратилась в учебное заведение с просьбой разработать простую и понятную цифровую инструкцию.</p>
                        <p><strong>Ваша задача:</strong> Разработать простую, понятную и безопасную цифровую инструкцию для пожилых жителей города Самарканд по записи к врачу через портал «my.gov.uz», продемонстрировав понимание логики пользовательского пути, требований доступности и принципов безопасного использования цифровых сервисов.</p>
                    `,
                    description: "Изучите ситуацию."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>Сопоставление «Проблема – Решение»</h5>
                        <p>Соотнесите проблему пожилого пользователя и соответствующий элемент инструкции.</p>
                    `,
                    description: "Соотнесите проблемы и решения.",
                    pairs: [
                        { left: "Пользователь боится мошенничества", right: "Раздел «Как защитить свои данные»" },
                        { left: "Пользователь не видит кнопку записи", right: "Визуально выделить кнопку записи" },
                        { left: "Пользователь путается в длинных текстах", right: "Использовать короткие нумерованные шаги" },
                        { left: "Пользователь не понимает, завершена ли запись", right: "Добавить скриншот страницы подтверждения" },
                        { left: "Пользователь переживает, что ошибся при выборе врача", right: "Включить пояснение «Как изменить запись»" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Последовательность разработки инструкции</h5>
                        <p>Расположите этапы работы в правильном порядке.</p>
                    `,
                    description: "Упорядочите этапы.",
                    items: [
                        "Определение трудностей пользователей",
                        "Деление записи на пошаговые действия",
                        "Оформление инструкции",
                        "Тестирование инструкции",
                        "Внесение исправлений"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Найдите основную ошибку</h5>
                        <p>Определите нарушение в представленном фрагменте инструкции:</p>
                        <p>«Для осуществления записи необходимо инициировать переход к модулю оказания медицинских услуг и произвести авторизацию посредством идентификационных данных.»</p>
                    `,
                    description: "Выберите правильный вариант.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Нет блока безопасности",
                            "Использованы сложные формулировки",
                            "Нет подтверждения записи",
                            "Нет пошаговой структуры"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 2,
            title: "Задание 2",
            description: "Анализ ошибок алгоритмов.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Ситуация</h5>
                        <p>Учитель информатики 9-й школы Нигора Абдуллаевна столкнулась с проблемой: её ученики выполняют практические задания по алгоритмам формально. Они получают итоговый результат, но не понимают процесс решения. Трудно определить, на каком этапе возникает ошибка — при анализе условия, построении логики или записи алгоритма. Обратная связь запаздывает, мотивация учащихся снижается.</p>
                        <p><strong>Ваша задача:</strong> разработать такое цифровое решение, которое поможет учителю видеть, как именно ученик выполняет алгоритмическое задание, а не только его итоговый ответ. Вам необходимо продумать систему, которая будет проверять каждый шаг решения, сразу сообщать ученику о допущенной ошибке и одновременно сохранять данные о ходе выполнения работы, чтобы преподаватель мог понимать, где и почему возникают трудности.</p>
                    `,
                    description: "Изучите ситуацию."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>Сопоставление «Проблема – Механизм решения»</h5>
                    `,
                    description: "Соотнесите проблемы с элементами решения.",
                    pairs: [
                        { left: "Ошибка выявляется только в конце задания", right: "Разделение алгоритма на проверяемые шаги" },
                        { left: "Невозможно определить этап возникновения ошибки", right: "Автоматическая фиксация шага ошибки" },
                        { left: "Ученик не понимает причину неверного решения", right: "Мгновенное пояснение после неверного шага" },
                        { left: "Учитель не видит типовые ошибки класса", right: "Панель аналитики по этапам выполнения" },
                        { left: "Обратная связь запаздывает", right: "Система подсказок без раскрытия полного ответа" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Последовательность разработки решения</h5>
                        <p>Расположите этапы проектирования системы в логическом порядке.</p>
                    `,
                    description: "Упорядочите этапы.",
                    items: [
                        "Разделение алгоритма на этапы",
                        "Выявление типовых ошибок",
                        "Проектирование механизма проверки",
                        "Настройка обратной связи",
                        "Создание аналитической панели"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Найдите нарушение требований</h5>
                        <p>Фрагмент описания:</p>
                        <p>«Система проверяет только итоговый результат алгоритма и сообщает о неверном ответе после завершения всей работы.»</p>
                    `,
                    description: "Выберите правильный вариант.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Нет фиксации типовых ошибок",
                            "Нет поэтапной проверки",
                            "Нет аналитической панели",
                            "Нарушены основные требования задания"
                        ],
                        correct: 3
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Реакция системы</h5>
                        <p>Ситуация: Ученик допустил ошибку при формулировке условия цикла.</p>
                        <p>Выберите корректную реакцию системы.</p>
                    `,
                    description: "Выберите реакцию.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Сообщить «Ответ неверный»",
                            "Указать на этап цикла и предложить проверить условие",
                            "Автоматически исправить ошибку",
                            "Показать полный правильный алгоритм"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 3,
            title: "Задание 3",
            description: "Цифровой след.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Ситуация</h5>
                        <p>Классный руководитель 10-го класса Дильноза Рустамовна заметила, что её ученики активно используют социальные сети и цифровые сервисы, однако не задумываются о последствиях своих онлайн-действий. Они публикуют личные данные, фотографии, комментарии, не осознавая, что вся эта информация формирует их цифровой след. Во время обсуждений выяснилось, что учащиеся не понимают, какие данные сохраняются в сети, как они могут использоваться третьими лицами и каким образом цифровая репутация может повлиять на их будущее.</p>
                        <p><strong>Ваше задание:</strong> разработать цифровое решение или интерактивный модуль, который поможет учащимся не просто изучить понятие цифрового следа, а осознать его через практическое действие и моделирование реальных ситуаций. Вам необходимо проанализировать, какие онлайн-действия формируют цифровой след и какие риски с ними связаны, затем спроектировать структуру модуля с поэтапной работой над ситуациями, механизмом мгновенной обратной связи и автоматической фиксацией решений учащегося. Разработанное решение должно позволять преподавателю получать аналитические данные о ходе выполнения заданий и уровне понимания темы, а также включать концепцию или прототип модуля с обоснованием его эффективности в формировании цифровой ответственности.</p>
                    `,
                    description: "Изучите ситуацию."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>Сопоставление «Действие – Последствие»</h5>
                        <p>Соотнесите онлайн-действие и его возможное последствие.</p>
                    `,
                    description: "Соотнесите действия и последствия.",
                    pairs: [
                        { left: "Публикация фотографии с указанием геолокации", right: "Возможность отслеживания местоположения" },
                        { left: "Передача пароля знакомому", right: "Потеря контроля над аккаунтом" },
                        { left: "Размещение оскорбительного комментария", right: "Формирование негативной цифровой репутации" },
                        { left: "Заполнение анкеты с личными данными на неизвестном сайте", right: "Использование персональных данных третьими лицами" },
                        { left: "Публичное обсуждение в открытом профиле", right: "Создание открытого цифрового профиля" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Последовательность осознанного действия</h5>
                        <p>Расположите шаги ответственного цифрового поведения в логическом порядке.</p>
                    `,
                    description: "Упорядочите шаги.",
                    items: [
                        "Осознание личной ответственности",
                        "Оценка возможных последствий публикации",
                        "Проверка содержания публикации",
                        "Настройка параметров приватности",
                        "Принятие решения о размещении информации"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Найдите несоответствие принципам цифровой безопасности</h5>
                        <p>Фрагмент поведения: «Лола публикует личные данные и делает профиль полностью открытым, так как считает, что в интернете всё быстро удаляется.»</p>
                    `,
                    description: "Выберите правильный вариант.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Игнорируется принцип долговременности цифрового следа",
                            "Отсутствует понимание настроек приватности",
                            "Недооцениваются риски распространения данных",
                            "Нарушены основные принципы безопасного поведения"
                        ],
                        correct: 3
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Выбор корректной реакции</h5>
                        <p>Ситуация: Дилшод обнаружил, что его старая публикация может негативно повлиять на репутацию. Выберите наиболее ответственное действие.</p>
                    `,
                    description: "Выберите действие.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Игнорировать ситуацию",
                            "Удалить публикацию и пересмотреть настройки приватности",
                            "Опубликовать ещё больше информации",
                            "Передать доступ к аккаунту другу"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 4,
            title: "Задание 4",
            description: "Онлайн-викторина.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Ситуация</h5>
                        <p>Учитель истории 8-й школы Азиза Каримовна заметила, что учащиеся слабо вовлечены в повторение материала. При проведении традиционных тестов активность минимальная, ответы формальные, обсуждение отсутствует.</p>
                        <p>Она решила использовать онлайн-викторины, однако столкнулась с рядом трудностей. Созданные тесты получаются однотипными, проверяют только запоминание фактов и не дают обратной связи. Платформа не предоставляет данных о том, какие вопросы вызывают наибольшие затруднения. Кроме того, учащиеся воспринимают викторину как обычный контроль, а не как инструмент обучения.</p>
                        <p>Азизе Каримовне необходимо цифровое решение, которое позволит создавать содержательные интерактивные викторины, обеспечивать мгновенную обратную связь и получать аналитику по результатам прохождения.</p>
                        <p><strong>Ваше задание:</strong> Вам необходимо разработать структуру онлайн-викторины по выбранной учебной теме и представить её в цифровом формате. Викторина должна включать разные типы вопросов, обеспечивать мгновенную обратную связь, способствовать повторению и углублению материала, а также предусматривать сбор аналитических данных о результатах выполнения.</p>
                    `,
                    description: "Изучите ситуацию."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>Сопоставление «Тип вопроса – Цель»</h5>
                        <p>Соотнесите тип вопроса и его педагогическую цель.</p>
                    `,
                    description: "Соотнесите типы и цели.",
                    pairs: [
                        { left: "Вопрос с выбором одного ответа", right: "Контроль точности знаний" },
                        { left: "Вопрос с множественным выбором", right: "Развитие аналитического мышления" },
                        { left: "Вопрос на сопоставление", right: "Проверка понимания взаимосвязей" },
                        { left: "Открытый вопрос", right: "Диагностика глубины понимания" },
                        { left: "Вопрос с таймером", right: "Повышение концентрации внимания" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Последовательность разработки викторины</h5>
                        <p>Расположите этапы создания онлайн-викторины в логическом порядке.</p>
                    `,
                    description: "Упорядочите этапы.",
                    items: [
                        "Определение цели викторины",
                        "Подбор содержания и формулировка вопросов",
                        "Выбор цифровой платформы",
                        "Настройка обратной связи",
                        "Публикация и анализ результатов"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Определите ключевую педагогическую проблему</h5>
                        <p>Фрагмент описания викторины: «Викторина включает разнообразные вопросы с выбором ответа и сопоставлением. После каждого ответа система сообщает “Верно” или “Неверно”. Все вопросы имеют одинаковую сложность. Аналитика отображает только общий процент правильных ответов класса.»</p>
                    `,
                    description: "Выберите проблему.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Отсутствует вариативность типов вопросов",
                            "Обратная связь носит формальный характер и не способствует обучению",
                            "Недостаточно сложные формулировки вопросов",
                            "Платформа не поддерживает публикацию результатов"
                        ],
                        correct: 1
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Выбор корректного решения</h5>
                        <p>Ситуация: После прохождения викторины учитель хочет понять, какие вопросы вызвали наибольшие затруднения. Выберите корректное действие.</p>
                    `,
                    description: "Выберите решение.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Повторно провести ту же викторину",
                            "Просмотреть аналитический отчёт платформы",
                            "Удалить сложные вопросы",
                            "Игнорировать результаты"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 5,
            title: "Задание 5",
            description: "Блокчейн в образовании.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Ситуация</h5>
                        <p>Заместитель директора колледжа по учебной работе Бахтиёр Илхомович столкнулся с проблемой хранения и подтверждения академических данных. Выпускники регулярно обращаются за подтверждением дипломов и сертификатов, а работодатели запрашивают проверку подлинности документов. Существующая система хранения данных централизована, требует ручной проверки и подвержена рискам изменения или утраты информации. Кроме того, отсутствует прозрачный механизм верификации достижений учащихся. Администрация рассматривает возможность внедрения блокчейн-технологии для хранения и проверки образовательных данных, однако не имеет чёткого представления о структуре такого решения.</p>
                        <p><strong>Ваша задача:</strong> Вам необходимо разработать концепцию и прототип блокчейн-приложения для образовательной организации, которое позволит безопасно хранить академические записи, обеспечивать прозрачную проверку подлинности документов и фиксировать образовательные достижения студентов. Прототип должен включать описание архитектуры системы, механизм записи данных в блокчейн, способ проверки подлинности и интерфейс взаимодействия пользователя с системой.</p>
                    `,
                    description: "Изучите ситуацию."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>Сопоставление «Компонент – Функция»</h5>
                        <p>Соотнесите элемент блокчейн-системы и его назначение.</p>
                    `,
                    description: "Соотнесите элементы.",
                    pairs: [
                        { left: "Блок", right: "Хранение набора транзакций" },
                        { left: "Хэш", right: "Защита данных от изменения" },
                        { left: "Децентрализованная сеть", right: "Распределённое хранение информации" },
                        { left: "Смарт-контракт", right: "Автоматическое выполнение запрограммированных условий" },
                        { left: "Криптографическая подпись", right: "Подтверждение подлинности документа" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Последовательность разработки прототипа</h5>
                        <p>Расположите этапы проектирования в логическом порядке.</p>
                    `,
                    description: "Упорядочите этапы.",
                    items: [
                        "Определение целей внедрения",
                        "Анализ типов данных для хранения",
                        "Проектирование архитектуры блокчейн-системы",
                        "Разработка прототипа интерфейса",
                        "Моделирование сценария верификации документа"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Определите ключевое архитектурное несоответствие</h5>
                        <p>Фрагмент описания решения: «Все образовательные данные студентов хранятся в открытом блокчейне в полном объёме, включая персональные данные. Любой пользователь может просматривать содержимое записей без ограничений. Система не использует криптографические подписи, так как данные защищены самой сетью.»</p>
                    `,
                    description: "Выберите проблему.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Нарушен принцип защиты персональных данных",
                            "Отсутствует криптографическая подпись",
                            "Блокчейн используется без учёта требований конфиденциальности",
                            "Нарушены ключевые принципы проектирования системы"
                        ],
                        correct: 3
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Выбор корректного решения</h5>
                        <p>Ситуация: Работодатель хочет проверить подлинность диплома выпускника через систему. Выберите корректный механизм проверки.</p>
                    `,
                    description: "Выберите решение.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Отправить запрос в администрацию колледжа",
                            "Сравнить хэш документа с записью в блокчейне",
                            "Скачать копию диплома с сайта",
                            "Проверить данные в локальной базе колледжа"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 6,
            title: "Задание 6",
            description: "Организация онлайн-конференции.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Ситуация</h5>
                        <p>Методист районного центра повышения квалификации Нозима Шухратовна планирует провести онлайн-конференцию для учителей по теме внедрения цифровых технологий в обучение. Ранее подобные мероприятия сопровождались техническими сбоями, низкой вовлечённостью участников и отсутствием последующего анализа эффективности. Во время вебинаров часть слушателей не подключается вовремя, некоторые отключают камеры и не участвуют в обсуждении, вопросы остаются без ответа. Запись мероприятия сохраняется, однако аналитика посещаемости и активности не используется. Нозиме Шухратовне необходимо цифровое решение, которое обеспечит качественную организацию онлайн-конференции, интерактивное взаимодействие участников и сбор аналитических данных о результатах мероприятия.</p>
                        <p><strong>Ваша задача:</strong> Вам необходимо разработать структуру организации онлайн-конференции или вебинара для образовательной аудитории. Следует продумать выбор платформы, сценарий проведения, инструменты вовлечения участников, механизм обратной связи и систему сбора аналитики. Проект должен включать описание этапов подготовки, проведения и последующего анализа эффективности мероприятия, а также представить концепцию или прототип организации онлайн-события.</p>
                    `,
                    description: "Изучите ситуацию."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>Сопоставление «Элемент – Назначение»</h5>
                        <p>Соотнесите инструмент онлайн-конференции и его функцию.</p>
                    `,
                    description: "Соотнесите элементы.",
                    pairs: [
                        { left: "Регистрация через форму", right: "Предварительная организация участников" },
                        { left: "Чат и реакции", right: "Повышение интерактивности" },
                        { left: "Опросы в реальном времени", right: "Анализ вовлечённости" },
                        { left: "Запись вебинара", right: "Возможность повторного просмотра" },
                        { left: "Аналитический отчёт платформы", right: "Фиксация участия" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Последовательность организации вебинара</h5>
                        <p>Расположите этапы в логическом порядке.</p>
                    `,
                    description: "Упорядочите этапы.",
                    items: [
                        "Определение цели мероприятия",
                        "Выбор цифровой платформы",
                        "Подготовка сценария и интерактивных элементов",
                        "Проведение вебинара",
                        "Анализ результатов и обратной связи"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Определите ключевое методическое нарушение</h5>
                        <p>Вебинар проведён на современной платформе с регистрацией участников и возможностью чата. Спикер представил презентацию и ответил на часть вопросов. Участникам направлена запись и сертификаты. Эффективность мероприятия оценивалась по количеству подключений.</p>
                    `,
                    description: "Выберите нарушение.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Организация мероприятия ориентирована преимущественно на формальные показатели участия, а не на образовательный результат",
                            "Вебинар не включал достаточного количества технических интерактивных инструментов",
                            "Сценарий мероприятия не предусматривал анализа потребностей аудитории",
                            "Используемая платформа не обеспечивает полноценного цифрового взаимодействия"
                        ],
                        correct: 0
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Определите стратегически корректное управленческое решение</h5>
                        <p>Ситуация: Во время вебинара по внедрению цифровых инструментов участники подключены, но активность в чате минимальна. Камеры в основном выключены, реакции почти отсутствуют. При этом статистика показывает стабильное присутствие слушателей на платформе.</p>
                    `,
                    description: "Выберите решение.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Продолжить запланированный сценарий, сохраняя темп изложения и рассчитывая на последующий просмотр записи активными участниками",
                            "Предложить участникам краткое практическое задание с ограничением по времени и обсудить результаты в общем формате",
                            "Сделать паузу и напомнить участникам о правилах активного поведения во время онлайн-мероприятий",
                            "Перенести дискуссионную часть на конец вебинара, чтобы не нарушать структуру презентации"
                        ],
                        correct: 1
                    }]
                }
            ]
        }
    ],
    uz: [
        {
            id: 1,
            title: "1-topshiriq",
            description: "Keksalar uchun raqamli ko'rsatma.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Vaziyat</h5>
                        <p>Samarqand shahrida ko‘plab keksa aholi «my.gov.uz» portali orqali shifokor qabuliga yozilishda qiyinchiliklarga duch kelmoqda. Ular interfeysda adashib qolishadi, kerakli tugmani topa olishmaydi va o‘z ma’lumotlarini kiritishdan xavfsirashadi. Poliklinika ma’muriyati o‘quv muassasasiga murojaat qilib, sodda va tushunarli raqamli ko‘rsatma ishlab chiqishni so‘radi.</p>
                        <p><strong>Sizning vazifangiz:</strong> Samarqand shahridagi keksa aholi uchun «my.gov.uz» portali orqali shifokor qabuliga yozilish bo‘yicha sodda, tushunarli va xavfsiz raqamli ko‘rsatma ishlab chiqish. Bunda foydalanuvchi yo‘li mantiqini, qulaylik talablarini va raqamli xizmatlardan xavfsiz foydalanish tamoyillarini tushunishingizni namoyish etishingiz kerak.</p>
                    `,
                    description: "Vaziyatni o'rganing."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>«Muammo – Yechim» mosligi</h5>
                        <p>Keksa foydalanuvchi muammosini ko‘rsatmaning tegishli elementi bilan moslang.</p>
                    `,
                    description: "Muammolar va yechimlarni moslang.",
                    pairs: [
                        { left: "Foydalanuvchi firibgarlikdan qo‘rqadi", right: "«Ma’lumotlarni qanday himoya qilish kerak» bo‘limi" },
                        { left: "Foydalanuvchi yozilish tugmasini ko‘rmayapti", right: "Yozilish tugmasini vizual ajratib ko‘rsatish" },
                        { left: "Foydalanuvchi uzun matnlarda adashib qolmoqda", right: "Qisqa raqamli bosqichlardan foydalanish" },
                        { left: "Foydalanuvchi yozilish yakunlanganini tushunmayapti", right: "Tasdiqlash sahifasi skrinshotini qo‘shish" },
                        { left: "Foydalanuvchi noto‘g‘ri shifokorni tanlashdan xavotirda", right: "«Yozuvni qanday o‘zgartirish mumkin» tushuntirishini kiritish" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Ko‘rsatma ishlab chiqish ketma-ketligi</h5>
                        <p>Ish bosqichlarini to‘g‘ri tartibda joylashtiring.</p>
                    `,
                    description: "Bosqichlarni tartiblang.",
                    items: [
                        "Foydalanuvchilar qiyinchiliklarini aniqlash",
                        "Yozilish jarayonini bosqichma-bosqich harakatlarga bo‘lish",
                        "Ko‘rsatmani rasmiylashtirish",
                        "Ko‘rsatmani sinovdan o‘tkazish",
                        "Tuzatishlar kiritish"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Asosiy xatoni toping</h5>
                        <p>Taqdim etilgan ko‘rsatma fragmentidagi qoidabuzarlikni aniqlang: «Yozilishni amalga oshirish uchun tibbiy xizmatlar ko‘rsatish moduliga o‘tishni boshlash va identifikatsiya ma’lumotlari orqali avtorizatsiyadan o‘tish zarur.»</p>
                    `,
                    description: "To'g'ri javobni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Xavfsizlik bloki yo‘q",
                            "Murakkab iboralar ishlatilgan",
                            "Yozilish tasdiqlanmagan",
                            "Bosqichma-bosqich tuzilma yo‘q"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 2,
            title: "2-topshiriq",
            description: "Algoritm xatolarini tahlil qilish.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Vaziyat</h5>
                        <p>9-maktab informatika o‘qituvchisi Nigora Abdullayevna muammoga duch keldi: o‘quvchilari algoritmlar bo‘yicha amaliy topshiriqlarni rasmiy bajarishmoqda. Ular yakuniy natijani olishadi, ammo yechim jarayonini tushunishmaydi. Xato qaysi bosqichda — shartni tahlil qilish, mantiqni qurish yoki algoritmni yozishda yuz berayotganini aniqlash qiyin. Qayta aloqa kechikmoqda, o‘quvchilar motivatsiyasi pasaymoqda.</p>
                        <p><strong>Sizning vazifangiz:</strong> o‘qituvchiga o‘quvchi algoritmik topshiriqni qanday bajarayotganini (faqat yakuniy javobni emas) ko‘rishga yordam beradigan raqamli yechim ishlab chiqish. Siz har bir yechim qadamini tekshiradigan, o‘quvchiga yo‘l qo‘yilgan xato haqida darhol xabar beradigan va bir vaqtning o‘zida o‘qituvchi qiyinchiliklar qayerda va nima uchun paydo bo‘layotganini tushunishi uchun ish jarayoni ma’lumotlarini saqlaydigan tizimni o‘ylab topishingiz kerak.</p>
                    `,
                    description: "Vaziyatni o'rganing."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>«Muammo – Yechim mexanizmi» mosligi</h5>
                    `,
                    description: "Muammolar va yechim elementlarini moslang.",
                    pairs: [
                        { left: "Xato faqat topshiriq oxirida aniqlanadi", right: "Algoritmni tekshiriladigan qadamlarga bo‘lish" },
                        { left: "Xatolik yuz bergan bosqichini aniqlab bo‘lmaydi", right: "Xato qadamini avtomatik qayd etish" },
                        { left: "O‘quvchi noto‘g‘ri yechim sababini tushunmaydi", right: "Noto‘g‘ri qadamdan so‘ng darhol tushuntirish" },
                        { left: "O‘qituvchi sinfning tipik xatolarini ko‘rmaydi", right: "Bajarish bosqichlari bo‘yicha tahliliy panel" },
                        { left: "Qayta aloqa kechikmoqda", right: "To‘liq javobni ochmasdan maslahatlar tizimi" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Yechimni ishlab chiqish ketma-ketligi</h5>
                        <p>Tizimni loyihalash bosqichlarini mantiqiy tartibda joylashtiring.</p>
                    `,
                    description: "Bosqichlarni tartiblang.",
                    items: [
                        "Algoritmni bosqichlarga bo‘lish",
                        "Tipik xatolarni aniqlash",
                        "Tekshirish mexanizmini loyihalash",
                        "Qayta aloqani sozlash",
                        "Tahliliy panel yaratish"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Talablar buzilishini toping</h5>
                        <p>Tavsif fragmenti: «Tizim faqat algoritmning yakuniy natijasini tekshiradi va butun ish tugaganidan so‘ng noto‘g‘ri javob haqida xabar beradi.»</p>
                    `,
                    description: "To'g'ri javobni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Tipik xatolar qayd etilmaydi",
                            "Bosqichma-bosqich tekshirish yo‘q",
                            "Tahliliy panel yo‘q",
                            "Topshiriqning asosiy talablari buzilgan"
                        ],
                        correct: 3
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Tizim reaksiyasi</h5>
                        <p>Vaziyat: O‘quvchi tsikl shartini ifodalashda xatoga yo‘l qo‘ydi. Tizimning to‘g‘ri reaksiyasini tanlang.</p>
                    `,
                    description: "Reaksiyani tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "«Javob noto‘g‘ri» deb xabar berish",
                            "Tsikl bosqichini ko‘rsatish va shartni tekshirishni taklif qilish",
                            "Xatoni avtomatik tuzatish",
                            "To‘liq to‘g‘ri algoritmni ko‘rsatish"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 3,
            title: "3-topshiriq",
            description: "Raqamli iz.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Vaziyat</h5>
                        <p>10-sinf rahbari Dilnoza Rustamovna o‘quvchilari ijtimoiy tarmoqlar va raqamli xizmatlardan faol foydalanishini, ammo o‘z onlayn harakatlarining oqibatlari haqida o‘ylamasliklarini payqadi. Ular shaxsiy ma’lumotlar, rasmlar, izohlarni joylashtirishadi va bu ma’lumotlar ularning raqamli izini shakllantirishini anglashmaydi. Muhokamalar davomida ma’lum bo‘ldiki, o‘quvchilar tarmoqda qanday ma’lumotlar saqlanib qolishini, uchinchi shaxslar ulardan qanday foydalanishi mumkinligini va raqamli obro‘ kelajakda ularga qanday ta’sir qilishini tushunishmaydi.</p>
                        <p><strong>Sizning vazifangiz:</strong> o‘quvchilarga raqamli iz tushunchasini shunchaki o‘rganish emas, balki amaliy harakat va real vaziyatlarni modellashtirish orqali anglashga yordam beradigan raqamli yechim yoki interaktiv modul ishlab chiqish.</p>
                    `,
                    description: "Vaziyatni o'rganing."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>«Harakat – Oqibat» mosligi</h5>
                    `,
                    description: "Harakat va oqibatlarni moslang.",
                    pairs: [
                        { left: "Geolokatsiya ko‘rsatilgan rasmni joylashtirish", right: "Joylashuvni kuzatish imkoniyati" },
                        { left: "Parolni tanishiga berish", right: "Akkaunt ustidan nazoratni yo‘qotish" },
                        { left: "Haqoratli izoh qoldirish", right: "Salbiy raqamli obro‘ shakllanishi" },
                        { left: "Noma’lum saytda shaxsiy ma’lumotlar bilan anketa to‘ldirish", right: "Shaxsiy ma’lumotlardan uchinchi shaxslar foydalanishi" },
                        { left: "Ochiq profilda ommaviy muhokama qilish", right: "Ochiq raqamli profil yaratilishi" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Ongli harakat ketma-ketligi</h5>
                        <p>Mas’uliyatli raqamli xulq-atvor qadamlarini mantiqiy tartibda joylashtiring.</p>
                    `,
                    description: "Qadamlarni tartiblang.",
                    items: [
                        "Shaxsiy mas’uliyatni anglash",
                        "Nashr qilishning mumkin bo‘lgan oqibatlarini baholash",
                        "Nashr mazmunini tekshirish",
                        "Maxfiylik parametrlarini sozlash",
                        "Ma’lumotni joylashtirish haqida qaror qabul qilish"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Raqamli xavfsizlik tamoyillariga nomuvofiqlikni toping</h5>
                        <p>Xulq-atvor fragmenti: «Lola shaxsiy ma’lumotlarini joylashtirib, profilini butunlay ochiq qilib qo‘ydi, chunki u internetda hamma narsa tez o‘chib ketadi deb hisoblaydi.»</p>
                    `,
                    description: "To'g'ri javobni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Raqamli izning uzoq muddat saqlanishi tamoyili inkor qilinmoqda",
                            "Maxfiylik sozlamalari haqida tushuncha yo‘q",
                            "Ma’lumotlar tarqalish xavfi yetarlicha baholanmayapti",
                            "Xavfsiz xulq-atvorning asosiy tamoyillari buzilgan"
                        ],
                        correct: 3
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>To‘g‘ri reaksiyani tanlash</h5>
                        <p>Vaziyat: Dilshod o‘zining eski nashri obro‘siga salbiy ta’sir qilishi mumkinligini aniqladi. Eng mas’uliyatli harakatni tanlang.</p>
                    `,
                    description: "Harakatni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Vaziyatga e’tibor bermaslik",
                            "Nashrni o‘chirish va maxfiylik sozlamalarini qayta ko‘rib chiqish",
                            "Yanada ko‘proq ma’lumot joylashtirish",
                            "Akkauntga kirish huquqini do‘stiga berish"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 4,
            title: "4-topshiriq",
            description: "Onlayn-viktorina.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Vaziyat</h5>
                        <p>8-maktab tarix o‘qituvchisi Aziza Karimovna o‘quvchilar materialni takrorlashga yetarlicha jalb etilmayotganini payqadi. An’anaviy testlar o‘tkazilganda faollik minimal, javoblar rasmiy, muhokama yo‘q.</p>
                        <p>U onlayn-viktorinalardan foydalanishga qaror qildi, ammo qator qiyinchiliklarga duch keldi. Tuzilgan testlar bir xil turdagi bo‘lib, faqat faktlarni eslab qolishni tekshiradi va qayta aloqa bermaydi. Platforma qaysi savollar eng ko‘p qiyinchilik tug‘dirayotgani haqida ma’lumot taqdim etmaydi. Bundan tashqari, o‘quvchilar viktorinani ta’lim vositasi sifatida emas, balki oddiy nazorat sifatida qabul qilishadi.</p>
                        <p>Aziza Karimovnaga mazmunli interaktiv viktorinalar yaratish, tezkor qayta aloqani ta’minlash va o‘tish natijalari bo‘yicha tahliliy ma’lumotlarni olish imkonini beruvchi raqamli yechim zarur.</p>
                        <p><strong>Sizning vazifangiz:</strong> Tanlangan o‘quv mavzusi bo‘yicha onlayn-viktorina tuzilmasini ishlab chiqish va uni raqamli formatda taqdim etish.</p>
                    `,
                    description: "Vaziyatni o'rganing."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>«Savol turi – Maqsad» mosligi</h5>
                    `,
                    description: "Savol turlari va maqsadlarini moslang.",
                    pairs: [
                        { left: "Bitta javob tanlanadigan savol", right: "Bilimlar aniqligini nazorat qilish" },
                        { left: "Ko‘p javobli savol", right: "Tahliliy fikrlashni rivojlantirish" },
                        { left: "Moslashtirish savoli", right: "O‘zaro bog‘liqliklarni tushunishni tekshirish" },
                        { left: "Ochiq savol", right: "Tushunish chuqurligini diagnostika qilish" },
                        { left: "Taymerli savol", right: "Diqqatni jamlashni oshirish" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Viktorina ishlab chiqish ketma-ketligi</h5>
                        <p>Onlayn-viktorina yaratish bosqichlarini mantiqiy tartibda joylashtiring.</p>
                    `,
                    description: "Bosqichlarni tartiblang.",
                    items: [
                        "Viktorina maqsadini aniqlash",
                        "Mazmunini tanlash va savollarni shakllantirish",
                        "Raqamli platformani tanlash",
                        "Qayta aloqani sozlash",
                        "Natijalarni e’lon qilish va tahlil qilish"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Asosiy pedagogik muammoni aniqlang</h5>
                        <p>Viktorina tavsifi fragmenti: «Viktorina javob tanlash va moslashtirish kabi turli xil savollarni o‘z ichiga oladi. Har bir javobdan so‘ng tizim “To‘g‘ri” yoki “Noto‘g‘ri” deb xabar beradi. Barcha savollar bir xil qiyinlik darajasiga ega. Tahlil faqat sinfning to‘g‘ri javoblari umumiy foizini ko‘rsatadi.»</p>
                    `,
                    description: "Muammoni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Savol turlarining xilma-xilligi yo‘q",
                            "Qayta aloqa rasmiy xarakterga ega va o‘qishga yordam bermaydi",
                            "Savollar yetarlicha murakkab tuzilmagan",
                            "Platforma natijalarni e’lon qilishni qo‘llab-quvvatlamaydi"
                        ],
                        correct: 1
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>To‘g‘ri yechimni tanlash</h5>
                        <p>Vaziyat: Viktorina o‘tkazilgandan so‘ng o‘qituvchi qaysi savollar eng ko‘p qiyinchilik tug‘dirganini tushunmoqchi. To‘g‘ri harakatni tanlang.</p>
                    `,
                    description: "Yechimni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "O‘sha viktorinani qayta o‘tkazish",
                            "Platformaning tahliliy hisobotini ko‘rib chiqish",
                            "Murakkab savollarni o‘chirib tashlash",
                            "Natijalarga e’tibor bermaslik"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 5,
            title: "5-topshiriq",
            description: "Ta’limda blokcheyn.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Vaziyat</h5>
                        <p>Kollej direktorining o‘quv ishlari bo‘yicha o‘rinbosari Baxtiyor Ilhomovich akademik ma’lumotlarni saqlash va tasdiqlash muammosiga duch keldi. Bitiruvchilar diplom va sertifikatlarni tasdiqlash uchun muntazam murojaat qilishadi, ish beruvchilar esa hujjatlarning haqiqiyligini tekshirishni so‘rashadi. Mavjud ma’lumotlarni saqlash tizimi markazlashgan, qo‘lda tekshirishni talab qiladi va ma’lumotlarning o‘zgarishi yoki yo‘qolishi xavfiga ega. Bundan tashqari, o‘quvchilar yutuqlarini verifikatsiya qilishning shaffof mexanizmi mavjud emas. Ma’muriyat ta’lim ma’lumotlarini saqlash va tekshirish uchun blokcheyn texnologiyasini joriy etish imkoniyatini ko‘rib chiqmoqda.</p>
                        <p><strong>Sizning vazifangiz:</strong> Ta’lim tashkiloti uchun akademik yozuvlarni xavfsiz saqlash, hujjatlar haqiqiyligini shaffof tekshirish va talabalar yutuqlarini qayd etish imkonini beruvchi blokcheyn-ilova konsepsiyasi va prototipini ishlab chiqish.</p>
                    `,
                    description: "Vaziyatni o'rganing."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>«Komponent – Funksiya» mosligi</h5>
                        <p>Blokcheyn tizimi elementi va uning vazifasini moslang.</p>
                    `,
                    description: "Elementlarni moslang.",
                    pairs: [
                        { left: "Blok", right: "Tranzaksiyalar to‘plamini saqlash" },
                        { left: "Xesh", right: "Ma’lumotlarni o‘zgartirishdan himoya qilish" },
                        { left: "Markazlashmagan tarmoq", right: "Ma’lumotlarni taqsimlangan holda saqlash" },
                        { left: "Aqlli shartnoma (Smart-kontrakt)", right: "Dasturlashtirilgan shartlarni avtomatik bajarish" },
                        { left: "Kriptografik imzo", right: "Hujjat haqiqiyligini tasdiqlash" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Prototip ishlab chiqish ketma-ketligi</h5>
                        <p>Loyihalash bosqichlarini mantiqiy tartibda joylashtiring.</p>
                    `,
                    description: "Bosqichlarni tartiblang.",
                    items: [
                        "Joriy etish maqsadlarini aniqlash",
                        "Saqlash uchun ma’lumot turlarini tahlil qilish",
                        "Blokcheyn tizimi arxitekturasini loyihalash",
                        "Interfeys prototipini ishlab chiqish",
                        "Hujjatni verifikatsiya qilish ssenariysini modellashtirish"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Asosiy arxitektura nomuvofiqligini aniqlang</h5>
                        <p>Yechim tavsifi fragmenti: «Talabalarning barcha ta’lim ma’lumotlari to‘liq hajmda, jumladan shaxsiy ma’lumotlar ochiq blokcheynda saqlanadi. Har qanday foydalanuvchi yozuvlar mazmunini cheklovsiz ko‘rishi mumkin. Tizim kriptografik imzolardan foydalanmaydi, chunki ma’lumotlar tarmoqning o‘zi tomonidan himoyalangan.»</p>
                    `,
                    description: "Muammoni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Shaxsiy ma’lumotlarni himoya qilish tamoyili buzilgan",
                            "Kriptografik imzo mavjud emas",
                            "Blokcheyn maxfiylik talablarini hisobga olmasdan ishlatilmoqda",
                            "Tizimni loyihalashning asosiy tamoyillari buzilgan"
                        ],
                        correct: 3
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>To‘g‘ri yechimni tanlash</h5>
                        <p>Vaziyat: Ish beruvchi tizim orqali bitiruvchi diplomining haqiqiyligini tekshirmoqchi. Tekshirishning to‘g‘ri mexanizmini tanlang.</p>
                    `,
                    description: "Yechimni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Kollej ma’muriyatiga so‘rov yuborish",
                            "Hujjat xeshini blokcheyndagi yozuv bilan solishtirish",
                            "Saytdan diplom nusxasini yuklab olish",
                            "Kollejning mahalliy bazasidagi ma’lumotlarni tekshirish"
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 6,
            title: "6-topshiriq",
            description: "Onlayn-konferensiya tashkil etish.",
            stages: [
                {
                    type: 'info',
                    requiresFileUpload: true,
                    situation: `
                        <h5>Vaziyat</h5>
                        <p>Tuman malaka oshirish markazi metodisti Nozima Shuhratovna o‘qituvchilar uchun ta’limga raqamli texnologiyalarni joriy etish mavzusida onlayn-konferensiya o‘tkazishni rejalashtirmoqda. Avvalroq shunga o‘xshash tadbirlar texnik nosozliklar, ishtirokchilarning past qiziqishi va samaradorlikning keyingi tahlili yo‘qligi bilan kuzatilgan edi. Vebinarlar davomida tinglovchilarning bir qismi vaqtida ulanmaydi, ba’zilari kameralarni o‘chirib qo‘yadi va muhokamada qatnashmaydi, savollar javobsiz qoladi.</p>
                        <p>Nozima Shuhratovnaga onlayn-konferensiyani sifatli tashkil etish, ishtirokchilarning interaktiv hamkorligini va tadbir natijalari bo‘yicha tahliliy ma’lumotlarni yig‘ishni ta’minlaydigan raqamli yechim zarur.</p>
                        <p><strong>Sizning vazifangiz:</strong> Ta’lim auditoriyasi uchun onlayn-konferensiya yoki vebinar tashkil etish tuzilmasini ishlab chiqish.</p>
                    `,
                    description: "Vaziyatni o'rganing."
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>«Element – Vazifa» mosligi</h5>
                        <p>Onlayn-konferensiya vositasi va uning funksiyasini moslang.</p>
                    `,
                    description: "Vositalarni moslang.",
                    pairs: [
                        { left: "Forma orqali ro‘yxatdan o‘tish", right: "Ishtirokchilarni oldindan tashkillashtirish" },
                        { left: "Chat va reaksiyalar", right: "Interaktivlikni oshirish" },
                        { left: "Real vaqtda so‘rovnomalar", right: "Qiziqishni tahlil qilish" },
                        { left: "Vebinar yozuvi", right: "Qayta ko‘rish imkoniyati" },
                        { left: "Platformaning tahliliy hisoboti", right: "Ishtirokni qayd etish" }
                    ]
                },
                {
                    type: 'ordering',
                    situation: `
                        <h5>Vebinar tashkil etish ketma-ketligi</h5>
                        <p>Bosqichlarni mantiqiy tartibda joylashtiring.</p>
                    `,
                    description: "Bosqichlarni tartiblang.",
                    items: [
                        "Tadbir maqsadini aniqlash",
                        "Raqamli platformani tanlash",
                        "Ssenariy va interaktiv elementlarni tayyorlash",
                        "Vebinarni o‘tkazish",
                        "Natijalar va qayta aloqani tahlil qilish"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Asosiy metodik qoidabuzarlikni aniqlang</h5>
                        <p>Vebinar zamonaviy platformada tashkil etildi. Spiker taqdimot qildi va savollarga javob berdi. Ishtirokchilarga yozuv va sertifikatlar yuborildi. Tadbir samaradorligi ulanishlar soni bo‘yicha baholandi.</p>
                    `,
                    description: "Qoidabuzarlikni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Tadbirni tashkil etish ta’lim natijasiga emas, balki rasmiy ishtirok ko‘rsatkichlariga qaratilgan",
                            "Vebinar yetarli darajada texnik interaktiv vositalarni o‘z ichiga olmadi",
                            "Tadbir ssenariysi auditoriya ehtiyojlarini tahlil qilishni nazarda tutmadi",
                            "Foydalanilgan platforma to‘liq raqamli hamkorlikni ta’minlamaydi"
                        ],
                        correct: 0
                    }]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Strategik jihatdan to‘g‘ri boshqaruv qarorini aniqlang</h5>
                        <p>Vaziyat: Vebinar davomida ishtirokchilar ulangan, ammo chatda faollik minimal. Statistikaga ko‘ra tinglovchilar platformada barqaror mavjud.</p>
                    `,
                    description: "Qarorni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Rejalashtirilgan ssenariyni davom ettirish",
                            "Ishtirokchilarga vaqt cheklovi bilan qisqa amaliy topshiriq taklif qilish va natijalarni muhokama qilish",
                            "Tanaffus qilish va qoidalarni eslatish",
                            "Munozara qismini vebinar oxiriga ko‘chirish"
                        ],
                        correct: 1
                    }]
                }
            ]
        }
    ]
};
console.log('Intermediate Tasks Data Loaded: v2025-01-26 Updated');
