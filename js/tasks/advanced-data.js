window.advancedTasksData = {
    ru: [
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
                    type: 'select',
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
                    type: 'url_or_file'
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
    ],
    uz: [
        {
            id: 1,
            title: "1-topshiriq: Coursera onlayn kursini o'tish",
            description: "Kursni tanlang va o'ting, so'ng sertifikatni yuklang.",
            type: 'scenarioBuilder',
            blocks: [
                {
                    id: 'course_name',
                    label: "Kursni tanlash",
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
                    label: "Platforma",
                    type: 'static',
                    value: "Coursera"
                },
                {
                    id: 'direction',
                    label: "Kurs yo'nalishi",
                    type: 'select',
                    options: [
                        "Data Science (Ma'lumotlar fani)",
                        "Computer Science (Kompyuter fanlari)",
                        "Business (Biznes)",
                        "Information Technology (Axborot texnologiyalari)",
                        "Language Learning (Til o'rganish)"
                    ]
                },
                {
                    id: 'technology',
                    label: "Asosiy texnologiya",
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
                    label: "Bilimlarni qyerda qo'llash mumkin",
                    type: 'select',
                    options: [
                        "Ta'limda ma'lumotlar tahlili",
                        "O'quv botlarini yaratish",
                        "LMS ishlab chiqish",
                        "Topshiriqlarni tekshirishni avtomatlashtirish",
                        "O'qitishni shaxsiylashtirish"
                    ]
                },
                {
                    id: 'certificate',
                    label: "Sertifikatni yuklash (PDF/IMG)",
                    type: 'file'
                }
            ]
        },
        {
            id: 2,
            title: "2-topshiriq: Interaktiv ta'limiy o'yin ssenariysi",
            description: "Barcha maydonlarni to'ldirib, ta'limiy o'yin ssenariysini loyihalashtiring.",
            type: 'scenarioBuilder',
            blocks: [
                {
                    id: 'game_goal',
                    label: "O'yin maqsadi",
                    type: 'select',
                    options: [
                        "Materialni mustahkamlash",
                        "Bilimlarni tekshirish",
                        "Yangi mavzuga kirish",
                        "Jamoani shakllantirish"
                    ]
                },
                {
                    id: 'target_audience',
                    label: "O'yin kimlar uchun",
                    type: 'multiselect',
                    options: [
                        "Kichik yoshdagi maktab o'quvchilari",
                        "Yuqori sinf o'quvchilari",
                        "OTM talabalari",
                        "Katta yoshli o'quvchilar"
                    ]
                },
                {
                    id: 'learning_outcome',
                    label: "O'qitish natijasi",
                    type: 'multiselect',
                    options: [
                        "Terminologiyani o'zlashtirish",
                        "Qaror qabul qilish ko'nikmalarini rivojlantirish",
                        "O'zaro bog'liqliklarni tushunish",
                        "Motivatsiyani oshirish"
                    ]
                },
                {
                    id: 'game_stages',
                    label: "O'yin bosqichlari (kamida 4 ta)",
                    type: 'structureBuilder',
                    blockTypes: ["Kirish", "Topshiriq", "Kviz", "Bonus", "Final"],
                    formats: ["Matn", "Video", "Interaktiv"],
                    minItems: 4
                },
                {
                    id: 'digital_tools',
                    label: "Raqamli vositalar",
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
                    label: "Interaktiv element",
                    type: 'select',
                    options: [
                        "Drag-and-Drop (Surib tashlash)",
                        "Variantni tanlash",
                        "Javobni kiritish",
                        "Predmetlarni qidirish"
                    ]
                },
                {
                    id: 'feedback',
                    label: "Qayta aloqa",
                    type: 'select',
                    options: [
                        "Bir lahzalik (har bir qadamdan so'ng)",
                        "Kechiktirilgan (o'yin oxirida)",
                        "Moslashuvchan (xato qilganda maslahatlar)"
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "3-topshiriq: Raqamli o'quv resursini yaratish",
            description: "Raqamli resurs yarating va uning parametrlarini tavsiflang.",
            type: 'scenarioBuilder',
            blocks: [
                {
                    id: 'resource_type',
                    label: "Resurs turi",
                    type: 'select',
                    options: [
                        "Videoma'ruza",
                        "Interaktiv modul",
                        "Taqdimot",
                        "Elektron darslik"
                    ]
                },
                {
                    id: 'resource_link',
                    label: "Resursga havola yoki fayl",
                    type: 'url_or_file'
                },
                {
                    id: 'tools_used',
                    label: "Foydalaniladigan vositalar",
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
                    label: "Interaktiv mavjudligi",
                    type: 'checkbox_single',
                    text: "Interaktiv elementlar mavjud"
                },
                {
                    id: 'has_ethics',
                    label: "Raqamli etika",
                    type: 'checkbox_single',
                    text: "Raqamli etika va mualliflik huquqi normalariga rioya qilingan"
                }
            ]
        },
        {
            id: 4,
            title: "4-topshiriq: Onlayn kurslarni yaratish bo'yicha tavsiyalar",
            description: "Sifatli onlayn kursning zaruriy komponentlarini belgilang.",
            type: 'checklist',
            groups: [
                {
                    title: "1. Raqamli vositalar",
                    items: ["Qulay navigatsiya", "Mobil qurilmalarda foydalanish imkoniyati", "Dizaynda minimalizm", "Yuklanish tezligi"]
                },
                {
                    title: "2. Interaktivlik",
                    items: ["Avto-tekshiriladigan testlar", "Muloqot uchun forum", "O'zaro baholash (Peer Review)", "Geymifikatsiya"]
                },
                {
                    title: "3. Raqamli xavfsizlik",
                    items: ["Shaxsiy ma'lumotlarni himoya qilish", "Xavfsiz havolalar", "Mualliflik huquqiga rioya qilish", "Muloqot moderatsiyasi"]
                },
                {
                    title: "4. Talabalarni qo'llab-quvvatlash",
                    items: ["Ishlash bo'yicha yo'riqnoma", "Texnik yordam", "FAQ (Ko'p beriladigan savollar)", "Tyutor bilan aloqa kanallari"]
                },
                {
                    title: "5. Samaradorlikni baholash",
                    items: ["O'zlashtirish statistikasini yig'ish", "Talabalar o'rtasida so'rovnoma o'tkazish", "Kursni oxirigacha yetkazish tahlili", "Sertifikatlash"]
                }
            ]
        }
    ]
};
