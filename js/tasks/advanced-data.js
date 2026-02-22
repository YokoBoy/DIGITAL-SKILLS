window.advancedTasksData = {
    ru: [
        {
            id: 1,
            title: "Задание 1: Прохождение онлайн-курса Coursera",
            description: "Выберите и пройдите курс, затем загрузите сертификат.",
            type: 'scenarioBuilder',
            stages: [
                {
                    type: 'scenarioBuilder',
                    description: "Заполните данные о курсе и загрузите сертификат.",
                    blocks: [
                        {
                            id: 'course_name',
                            label: "Выбор курса",
                            type: 'select',
                            options: [
                                "Generative AI for Educators Specialization",
                                "Prompt Engineering for Educators Specialization",
                                "Designing Learning Innovation",
                                "University Teaching",
                                "Instructional Design Foundations and Applications",
                                "Assessment in Higher Education: Professional Development",
                                "Foundations of Teaching for Learning: Introduction to Student Assessment",
                                "University Teaching",
                                "Artificial Intelligence (AI) Education for Teachers",
                                "Learning to Teach Online",
                                "Online Learning Design for Educators Specialization"
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
                                "Искусственный интеллект в образовании",
                                "Педагогический дизайн",
                                "Оценивание и обратная связь",
                                "Университетское преподавание",
                                "Онлайн-обучение"
                            ]
                        },
                        {
                            id: 'technology',
                            label: "Основная технология",
                            type: 'select',
                            options: [
                                "Generative AI",
                                "Prompt Engineering",
                                "LMS (Learning Management Systems)",
                                "Digital Assessment Tools",
                                "Educational Analytics"
                            ]
                        },
                        {
                            id: 'application',
                            label: "Куда можно применить знания",
                            type: 'select',
                            options: [
                                "Разработка новых курсов",
                                "Повышение вовлеченности студентов",
                                "Автоматизация оценивания",
                                "Создание интерактивного контента",
                                "Персонализация обучения"
                            ]
                        },
                        {
                            id: 'certificate',
                            label: "Загрузить сертификат (PDF/IMG)",
                            type: 'file'
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Задание 2: Сценарий интерактивной образовательной игры",
            description: "Разработайте и проанализируйте сценарий образовательной игры.",
            stages: [
                {
                    type: 'ordering',
                    situation: `
                        <h5>Логическая реконструкция сценария</h5>
                        <p>Расположите элементы игровой модели в корректной проектной последовательности.</p>
                    `,
                    description: "Упорядочите элементы.",
                    items: [
                        "Формулировка образовательной цели",
                        "Определение игрового механизма",
                        "Введение сюжетной ситуации",
                        "Разработка критериев победы",
                        "Проектирование системы обратной связи"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Определите ключевое методическое несоответствие</h5>
                        <p>Фрагмент сценария: Игра включает серию заданий с начислением баллов и финальным тестом. Сюжет отсутствует, механика не изменяется в ходе игры, участники получают итоговый результат без пояснений. Основная цель обозначена как «проверка знаний».</p>
                    `,
                    description: "Выберите правильный вариант.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Отсутствует вариативность игровых механик и обучающая обратная связь.",
                            "Недостаточно развита визуальная часть сценария.",
                            "Слишком ограничено количество заданий.",
                            "Не используется система рейтингов между участниками."
                        ],
                        correct: 0
                    }]
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>Сопоставление «Игровой элемент – Педагогическая функция»</h5>
                        <p>Соотнесите элементы сценария и их образовательную роль.</p>
                    `,
                    description: "Соотнесите элементы.",
                    pairs: [
                        { left: "Разветвление сценария", right: "Персонализация траектории прохождения" },
                        { left: "Ограничение времени на выполнение задания", right: "Повышение концентрации внимания" },
                        { left: "Система накопительных баллов", right: "Мотивация к достижению результата" },
                        { left: "Встроенные подсказки", right: "Поддержка обучающего сопровождения" },
                        { left: "Ролевая модель участника", right: "Формирование деятельностного погружения" }
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Выбор стратегически корректного решения</h5>
                        <p>Ситуация: Во время тестирования игры выяснилось, что участники быстро проходят задания, но не демонстрируют глубокого понимания материала.</p>
                    `,
                    description: "Выберите решение.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Увеличить количество заданий и усложнить формулировки.",
                            "Включить задания с выбором одного правильного ответа.",
                            "Добавить этапы, требующие аргументации и принятия решения в игровой ситуации.",
                            "Увеличить продолжительность игры и добавить больше уровней."
                        ],
                        correct: 2
                    }]
                }
            ]
        },
        {
            id: 3,
            title: "Задание 3: Создание цифрового учебного ресурса",
            description: "Спроектируйте цифровой учебный ресурс.",
            stages: [
                {
                    type: 'ordering',
                    situation: `
                        <h5>Логическая последовательность разработки ресурса</h5>
                        <p>Расположите этапы проектирования цифрового учебного ресурса в корректной последовательности.</p>
                    `,
                    description: "Упорядочите этапы.",
                    items: [
                        "Анализ целевой аудитории",
                        "Определение образовательных результатов",
                        "Проектирование структуры и навигации",
                        "Выбор цифровых инструментов",
                        "Настройка системы обратной связи и аналитики"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Определите ключевое архитектурное несоответствие</h5>
                        <p>Фрагмент описания ресурса: Ресурс включает видеолекцию, текстовый конспект и итоговый тест. Навигация линейная, пользователь не может вернуться к предыдущим разделам во время тестирования. Обратная связь ограничивается сообщением «Ответ верный» или «Ответ неверный». Аналитика фиксирует только общий процент выполнения.</p>
                    `,
                    description: "Выберите правильный вариант.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Структура ресурса ориентирована на передачу информации, но не на сопровождение обучения.",
                            "В ресурсе недостаточно визуальных элементов и мультимедийных вставок.",
                            "Платформа не поддерживает адаптивный дизайн для мобильных устройств.",
                            "Видеолекция должна быть разбита на более короткие фрагменты."
                        ],
                        correct: 0
                    }]
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>Сопоставление «Элемент ресурса – Образовательная функция»</h5>
                        <p>Соотнесите компонент цифрового ресурса и его педагогическую роль.</p>
                    `,
                    description: "Соотнесите элементы.",
                    pairs: [
                        { left: "Интерактивные вставки внутри видео", right: "Активизация внимания" },
                        { left: "Разветвлённая навигация", right: "Персонализация траектории обучения" },
                        { left: "Автоматическая аналитика попыток", right: "Мониторинг прогресса" },
                        { left: "Встроенные пояснения после ошибки", right: "Поддержка осмысления ошибок" },
                        { left: "Модуль предварительной диагностики", right: "Определение исходного уровня знаний" }
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Выбор стратегически корректной доработки</h5>
                        <p>Ситуация: После запуска ресурса выяснилось, что учащиеся прекращают прохождение после первого сложного модуля, не возвращаясь к материалу.</p>
                    `,
                    description: "Выберите решение.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Упростить содержание модуля и сократить объём информации.",
                            "Добавить адаптивные переходы с возможностью выбора уровня сложности.",
                            "Увеличить количество контрольных вопросов в начале модуля.",
                            "Установить ограничение по времени на прохождение каждого раздела."
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 4,
            title: "Задание 4: Рекомендации по созданию онлайн-курсов",
            description: "Разработайте рекомендации для онлайн-курса.",
            stages: [
                {
                    type: 'ordering',
                    situation: `
                        <h5>Логическая последовательность разработки рекомендаций</h5>
                        <p>Расположите этапы разработки рекомендаций по созданию онлайн-курса в стратегически обоснованной последовательности.</p>
                    `,
                    description: "Упорядочите этапы.",
                    items: [
                        "Анализ целевой аудитории и её образовательных потребностей",
                        "Определение измеримых образовательных результатов",
                        "Проектирование структуры модулей и логики прохождения",
                        "Выбор инструментов взаимодействия и форм обратной связи",
                        "Формирование критериев оценки эффективности курса"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Определите ключевое стратегическое несоответствие</h5>
                        <p>Фрагмент рекомендаций: Онлайн-курс предполагает видеолекции продолжительностью до 35 минут, итоговые тесты после каждого модуля и итоговую аттестацию. Проверка заданий осуществляется вручную. Эффективность курса оценивается по количеству завершивших обучение. Аналитика используется только для фиксации итогового результата.</p>
                    `,
                    description: "Выберите правильный вариант.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "В рекомендациях отсутствует система сопровождения обучения и промежуточной аналитики, ориентированная на поддержку процесса усвоения.",
                            "В структуре курса недостаточно разнообразных форм представления теоретического материала и мультимедийных элементов.",
                            "Рекомендации не предусматривают гибкую адаптацию содержания в зависимости от уровня подготовки слушателей.",
                            "Модель оценивания ориентирована преимущественно на итоговую проверку без интеграции формирующей обратной связи."
                        ],
                        correct: 0
                    }]
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>Сопоставление «Рекомендация – Проблема, которую она предотвращает»</h5>
                        <p>Соотнесите элемент рекомендаций и педагогическую проблему, которую он решает.</p>
                    `,
                    description: "Соотнесите элементы.",
                    pairs: [
                        { left: "Разделение курса на микромодули", right: "Потеря внимания и перегрузка" },
                        { left: "Встроенные интерактивные задания", right: "Формальное прохождение без понимания" },
                        { left: "Регулярная аналитика прохождения", right: "Отсутствие мониторинга прогресса" },
                        { left: "Форумы и обсуждения", right: "Низкая вовлечённость" },
                        { left: "Промежуточная диагностика знаний", right: "Невозможность выявить стартовый уровень" }
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Выбор стратегически приоритетного решения</h5>
                        <p>Ситуация: После запуска онлайн-курса высокий процент слушателей прекращает обучение после первого модуля. Аналитика показывает, что видео просматриваются частично, а задания выполняются нерегулярно.</p>
                    `,
                    description: "Выберите решение.",
                    questions: [{
                        text: "Варианты:",
                        options: [
                            "Увеличить объём информационного материала, чтобы повысить ценность курса.",
                            "Внедрить систему адаптивного прохождения и промежуточных достижений.",
                            "Увеличить длительность доступа к курсу без изменения структуры.",
                            "Усилить итоговое тестирование для повышения дисциплины."
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
            title: "1-topshiriq: Coursera onlayn kursini o'tish",
            description: "Kursni tanlang va o'ting, so'ng sertifikatni yuklang.",
            type: 'scenarioBuilder',
            stages: [
                {
                    type: 'scenarioBuilder',
                    description: "Kurs haqida ma'lumotlarni to'ldiring va sertifikatni yuklang.",
                    blocks: [
                        {
                            id: 'course_name',
                            label: "Kursni tanlash",
                            type: 'select',
                            options: [
                                "Generative AI for Educators Specialization",
                                "Prompt Engineering for Educators Specialization",
                                "Designing Learning Innovation",
                                "University Teaching",
                                "Instructional Design Foundations and Applications",
                                "Assessment in Higher Education: Professional Development",
                                "Foundations of Teaching for Learning: Introduction to Student Assessment",
                                "University Teaching",
                                "Artificial Intelligence (AI) Education for Teachers",
                                "Learning to Teach Online",
                                "Online Learning Design for Educators Specialization"
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
                                "Ta'limda sun'iy intellekt",
                                "Pedagogik dizayn",
                                "Baholash va qayta aloqa",
                                "Universitetda o'qitish",
                                "Onlayn ta'lim"
                            ]
                        },
                        {
                            id: 'technology',
                            label: "Asosiy texnologiya",
                            type: 'select',
                            options: [
                                "Generative AI",
                                "Prompt Engineering",
                                "LMS (Ta'limni boshqarish tizimlari)",
                                "Raqamli baholash vositalari",
                                "Ta'lim analitikasi"
                            ]
                        },
                        {
                            id: 'application',
                            label: "Bilimlarni qyerda qo'llash mumkin",
                            type: 'select',
                            options: [
                                "Yangi kurslarni ishlab chiqish",
                                "Talabalar faolligini oshirish",
                                "Baholashni avtomatlashtirish",
                                "Interaktiv kontent yaratish",
                                "O'qitishni shaxsiylashtirish"
                            ]
                        },
                        {
                            id: 'certificate',
                            label: "Sertifikatni yuklash (PDF/IMG)",
                            type: 'file'
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "2-topshiriq: Interaktiv ta'limiy o'yin ssenariysi",
            description: "Ta'limiy o'yin ssenariysini ishlab chiqing va tahlil qiling.",
            stages: [
                {
                    type: 'ordering',
                    situation: `
                        <h5>Ssenariyning mantiqiy rekonstruksiyasi</h5>
                        <p>O'yin modeli elementlarini to'g'ri loyihalash ketma-ketligida joylashtiring.</p>
                    `,
                    description: "Elementlarni tartiblang.",
                    items: [
                        "Ta'lim maqsadini shakllantirish",
                        "O'yin mexanizmini aniqlash",
                        "Syujet holatini kiritish",
                        "G'alaba mezonlarini ishlab chiqish",
                        "Qayta aloqa tizimini loyihalash"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Asosiy uslubiy nomuvofiqlikni aniqlang</h5>
                        <p>Ssenariy fragmenti: O'yin ballar to'plash va yakuniy test bilan bir qator topshiriqlarni o'z ichiga oladi. Syujet yo'q, o'yin davomida mexanika o'zgarmaydi, ishtirokchilar yakuniy natijani tushuntirishsiz olishadi. Asosiy maqsad «bilimni tekshirish» deb belgilangan.</p>
                    `,
                    description: "To'g'ri javobni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "O'yin mexanikasi xilma-xilligi va o'rgatuvchi qayta aloqa mavjud emas.",
                            "Ssenariyning vizual qismi yetarli darajada rivojlanmagan.",
                            "Topshiriqlar soni juda cheklangan.",
                            "Ishtirokchilar o'rtasida reyting tizimi qo'llanilmaydi."
                        ],
                        correct: 0
                    }]
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>«O'yin elementi – Pedagogik funksiya» mosligi</h5>
                        <p>Ssenariy elementlari va ularning ta'limiy rolini moslang.</p>
                    `,
                    description: "Elementlarni moslang.",
                    pairs: [
                        { left: "Ssenariyning tarmoqlanishi", right: "O'tish trayektoriyasini shaxsiylashtirish" },
                        { left: "Topshiriqni bajarish vaqtini cheklash", right: "Diqqatni jamlashni oshirish" },
                        { left: "Yig'iladigan ballar tizimi", right: "Natijaga erishish motivatsiyasi" },
                        { left: "O'rnatilgan maslahatlar", right: "O'quv jarayonini qo'llab-quvvatlash" },
                        { left: "Ishtirokchining rolli modeli", right: "Faoliyatga sho'ng'ishni shakllantirish" }
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Strategik jihatdan to'g'ri yechimni tanlash</h5>
                        <p>Vaziyat: O'yinni sinovdan o'tkazish paytida ma'lum bo'ldiki, ishtirokchilar topshiriqlarni tez bajarishadi, ammo materialni chuqur tushunishni namoyish etishmaydi.</p>
                    `,
                    description: "Yechimni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Topshiriqlar sonini ko'paytirish va formulirovkalarni murakkablashtirish.",
                            "Bitta to'g'ri javobni tanlash topshiriqlarini kiritish.",
                            "O'yin vaziyatida argumentlash va qaror qabul qilishni talab qiladigan bosqichlarni qo'shish.",
                            "O'yin davomiyligini oshirish va ko'proq darajalarni qo'shish."
                        ],
                        correct: 2
                    }]
                }
            ]
        },
        {
            id: 3,
            title: "3-topshiriq: Raqamli o'quv resursini yaratish",
            description: "Raqamli o'quv resursini loyihalashtiring.",
            stages: [
                {
                    type: 'ordering',
                    situation: `
                        <h5>Resursni ishlab chiqishning mantiqiy ketma-ketligi</h5>
                        <p>Raqamli o'quv resursini loyihalash bosqichlarini to'g'ri ketma-ketlikda joylashtiring.</p>
                    `,
                    description: "Bosqichlarni tartiblang.",
                    items: [
                        "Maqsadli auditoriyani tahlil qilish",
                        "Ta'lim natijalarini aniqlash",
                        "Tuzilma va navigatsiyani loyihalash",
                        "Raqamli vositalarni tanlash",
                        "Qayta aloqa va tahlil tizimini sozlash"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Asosiy arxitektura nomuvofiqligini aniqlang</h5>
                        <p>Resurs tavsifi fragmenti: Resurs videoma'ruza, matnli konspekt va yakuniy testni o'z ichiga oladi. Navigatsiya chiziqli, foydalanuvchi test paytida oldingi bo'limlarga qayta olmaydi. Qayta aloqa «Javob to'g'ri» yoki «Javob noto'g'ri» xabari bilan cheklanadi. Tahlil faqat umumiy bajarish foizini qayd etadi.</p>
                    `,
                    description: "To'g'ri javobni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Resurs tuzilmasi o'qishni qo'llab-quvvatlashga emas, balki ma'lumot uzatishga qaratilgan.",
                            "Resursda vizual elementlar va multimedia kiritmalari yetarli emas.",
                            "Platforma mobil qurilmalar uchun moslashuvchan dizaynni qo'llab-quvvatlamaydi.",
                            "Videoma'ruza qisqaroq fragmentlarga bo'linishi kerak."
                        ],
                        correct: 0
                    }]
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>«Resurs elementi – Ta'lim funksiyasi» mosligi</h5>
                        <p>Raqamli resurs komponenti va uning pedagogik rolini moslang.</p>
                    `,
                    description: "Elementlarni moslang.",
                    pairs: [
                        { left: "Video ichidagi interaktiv kiritmalar", right: "Diqqatni faollashtirish" },
                        { left: "Tarmoqlangan navigatsiya", right: "O'qish trayektoriyasini shaxsiylashtirish" },
                        { left: "Urinishlarning avtomatik tahlili", right: "Jarayonni monitoring qilish" },
                        { left: "Xatodan keyin o'rnatilgan tushuntirishlar", right: "Xatolarni tushunishni qo'llab-quvvatlash" },
                        { left: "Dastlabki diagnostika moduli", right: "Bilimlarning boshlang'ich darajasini aniqlash" }
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Strategik jihatdan to'g'ri takomillashtirishni tanlash</h5>
                        <p>Vaziyat: Resurs ishga tushirilgandan so'ng ma'lum bo'ldiki, o'quvchilar birinchi murakkab moduldan keyin o'qishni to'xtatishmoqda va materialga qaytishmayapti.</p>
                    `,
                    description: "Yechimni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Modul mazmunini soddalashtirish va ma'lumot hajmini qisqartirish.",
                            "Murakkablik darajasini tanlash imkoniyati bilan moslashuvchan o'tishlarni qo'shish.",
                            "Modul boshida nazorat savollari sonini ko'paytirish.",
                            "Har bir bo'limni o'tish uchun vaqt cheklovini o'rnatish."
                        ],
                        correct: 1
                    }]
                }
            ]
        },
        {
            id: 4,
            title: "4-topshiriq: Onlayn kurslarni yaratish bo'yicha tavsiyalar",
            description: "Onlayn kurs uchun tavsiyalar ishlab chiqing.",
            stages: [
                {
                    type: 'ordering',
                    situation: `
                        <h5>Tavsiyalarni ishlab chiqishning mantiqiy ketma-ketligi</h5>
                        <p>Onlayn kurs yaratish bo'yicha tavsiyalarni ishlab chiqish bosqichlarini strategik asoslangan ketma-ketlikda joylashtiring.</p>
                    `,
                    description: "Bosqichlarni tartiblang.",
                    items: [
                        "Maqsadli auditoriya va uning ta'lim ehtiyojlarini tahlil qilish",
                        "O'lchanadigan ta'lim natijalarini aniqlash",
                        "Modullar tuzilmasi va o'tish mantiqini loyihalash",
                        "O'zaro ta'sir vositalari va qayta aloqa shakllarini tanlash",
                        "Kurs samaradorligini baholash mezonlarini shakllantirish"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Asosiy strategik nomuvofiqlikni aniqlang</h5>
                        <p>Tavsiyalar fragmenti: Onlayn kurs davomiyligi 35 daqiqagacha bo'lgan videoma'ruzalar, har bir moduldan keyin yakuniy testlar va yakuniy attestatsiyani nazarda tutadi. Topshiriqlarni tekshirish qo'lda amalga oshiriladi. Kurs samaradorligi o'qishni tugatganlar soni bo'yicha baholanadi. Tahlil faqat yakuniy natijani qayd etish uchun ishlatiladi.</p>
                    `,
                    description: "To'g'ri javobni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Tavsiyalarda o'zlashtirish jarayonini qo'llab-quvvatlashga qaratilgan o'quv jarayonini kuzatish va oraliq tahlil tizimi mavjud emas.",
                            "Kurs tuzilmasida nazariy materialni taqdim etishning xilma-xil shakllari va multimedia elementlari yetarli emas.",
                            "Tavsiyalar tinglovchilar tayyorgarligi darajasiga qarab mazmunni moslashuvchan adaptatsiya qilishni nazarda tutmaydi.",
                            "Baholash modeli asosan shakllantiruvchi qayta aloqani integratsiya qilmasdan yakuniy tekshirishga qaratilgan."
                        ],
                        correct: 0
                    }]
                },
                {
                    type: 'matching',
                    situation: `
                        <h5>«Tavsiya – U oldini oladigan muammo» mosligi</h5>
                        <p>Tavsiya elementi va u hal qiladigan pedagogik muammoni moslang.</p>
                    `,
                    description: "Elementlarni moslang.",
                    pairs: [
                        { left: "Kursni mikromodullarga bo'lish", right: "Diqqatni yo'qotish va ortiqcha yuklama" },
                        { left: "O'rnatilgan interaktiv topshiriqlar", right: "Tushunmasdan rasmiy o'tish" },
                        { left: "O'tishning muntazam tahlili", right: "Jarayon monitoringi yo'qligi" },
                        { left: "Forumlar va muhokamalar", right: "Past jalb qilinganlik" },
                        { left: "Bilimlarni oraliq diagnostika qilish", right: "Boshlang'ich darajani aniqlash imkonsizligi" }
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Strategik ustuvor yechimni tanlash</h5>
                        <p>Vaziyat: Onlayn kurs ishga tushirilgandan so'ng tinglovchilarning yuqori foizi birinchi moduldan keyin o'qishni to'xtatmoqda. Tahlil shuni ko'rsatadiki, videolar qisman ko'rilmoqda, topshiriqlar esa muntazam bajarilmayapti.</p>
                    `,
                    description: "Yechimni tanlang.",
                    questions: [{
                        text: "Variantlar:",
                        options: [
                            "Kurs qiymatini oshirish uchun axborot materiallari hajmini ko'paytirish.",
                            "Moslashuvchan o'tish va oraliq yutuqlar tizimini joriy etish.",
                            "Tuzilmani o'zgartirmasdan kursga kirish davomiyligini oshirish.",
                            "Intizomni oshirish uchun yakuniy test sinovlarini kuchaytirish."
                        ],
                        correct: 1
                    }]
                }
            ]
        }
    ]
};
console.log('Advanced Tasks Data Loaded: v2025-02-18');
