window.intermediateTasksData = {
    ru: [
        {
            id: 1,
            title: "Задание 1: У нас проблемы, Хьюстон!!!",
            description: "Инженерно-педагогический квест.",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Ситуация:</h5>
                        <p>Учитель информатики сталкивается со следующей ситуацией:</p>
                        <ul>
                            <li>учащиеся выполняют практические задания по алгоритмам формально;</li>
                            <li>сложно выявить, на каком этапе возникает ошибка;</li>
                            <li>обратная связь запаздывает;</li>
                            <li>снижается мотивация и самостоятельность учащихся.</li>
                        </ul>
                        <p><strong>При использовании ЭОР и LMS:</strong></p>
                        <ul>
                            <li>отсутствует механизм поэтапной проверки выполнения задания;</li>
                            <li>нет автоматической фиксации типовых ошибок;</li>
                            <li>преподаватель не получает оперативных данных о ходе выполнения заданий.</li>
                        </ul>
                    `,
                    description: "Изучите ситуацию и нажмите 'Далее'."
                },
                {
                    type: 'info',
                    situation: `
                        <h5>Ваша миссия:</h5>
                        <p>Твоя задача — спроектировать цифровое решение, которое одновременно:</p>
                        <ul>
                            <li>поддерживает обучение;</li>
                            <li>автоматизирует контроль;</li>
                            <li>повышает качество усвоения материала.</li>
                        </ul>
                        <p><strong>Ты должен обеспечить:</strong></p>
                        <ul>
                            <li>пошаговую проверку выполнения алгоритмического задания;</li>
                            <li>мгновенную обратную связь;</li>
                            <li>сбор данных о действиях учащихся в ЭОР.</li>
                        </ul>
                    `,
                    description: "Ознакомьтесь с миссией и нажмите 'Далее'."
                },
                {
                    type: 'matching',
                    situation: "Соотнесите выявленные проблемы с элементами цифрового решения, которые позволяют их устранить.",
                    description: "Перетащите решение к соответствующей проблеме.",
                    pairs: [
                        { left: "Отсутствие быстрой обратной связи", right: "Мгновенное отображение результата" },
                        { left: "Невозможность определить этап ошибки", right: "Поэтапная автоматическая проверка" },
                        { left: "Формальное выполнение заданий", right: "Интерактивное задание с визуальной сборкой алгоритма" },
                        { left: "Отсутствие данных о ходе работы", right: "Логирование действий пользователя" }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Задание 2: Инженерно-педагогическая проблема",
            description: "Учитель информатики использует LMS. Квест по цифровому следу.",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Проблема:</h5>
                        <p>Учитель информатики использует LMS, онлайн-тесты и облачные сервисы. При этом:</p>
                        <ul>
                            <li>учащиеся не осознают, что их действия формируют цифровой след;</li>
                            <li>часто нарушают правила цифровой безопасности;</li>
                            <li>не понимают последствий своих онлайн-действий.</li>
                        </ul>
                        <p><strong>Технические недостатки текущего решения:</strong></p>
                        <ul>
                            <li>отсутствуют встроенные механизмы визуализации цифрового следа;</li>
                            <li>нет автоматического контроля рисковых действий;</li>
                            <li>не реализованы подсказки, предупреждающие небезопасное поведение.</li>
                        </ul>
                    `,
                    description: "Ознакомьтесь с проблемой."
                },
                {
                    type: 'info',
                    situation: `
                        <h5>Ваша задача:</h5>
                        <p>Спроектировать цифровое решение, которое:</p>
                        <ul>
                            <li>формирует осознанное поведение учащихся;</li>
                            <li>снижает риски цифровой безопасности;</li>
                            <li>не требует постоянного ручного контроля со стороны учителя.</li>
                        </ul>
                        <p><strong>Цели:</strong></p>
                        <ul>
                            <li>показать учащимся последствия их цифровых действий;</li>
                            <li>встроить элементы цифровой безопасности в ЭОР;</li>
                            <li>обеспечить профилактику рисков через автоматические механизмы.</li>
                        </ul>
                    `,
                    description: "Примите задачу к выполнению."
                },
                {
                    type: 'matching',
                    situation: "Соотнесите действие пользователя в цифровой образовательной среде с его основным последствием с точки зрения цифровой безопасности.",
                    description: "Соотнесите действие и последствие.",
                    pairs: [
                        { left: "Публикация работы с ФИО и контактами", right: "Формирование расширенного цифрового следа" },
                        { left: "Использование двухфакторной аутентификации", right: "Снижение риска несанкционированного доступа" },
                        { left: "Работа в LMS под чужой учётной записью", right: "Потеря персональной ответственности за действия" },
                        { left: "Настройка приватности профиля", right: "Защита персональных данных" }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Задание 3: Комплексное цифровое решение",
            description: "Проектирование учебного процесса по теме «Алгоритмы».",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Педагогическая проблема:</h5>
                        <p>При изучении темы «Алгоритмы и исполнители» учитель сталкивается с тем, что:</p>
                        <ul>
                            <li>учащиеся понимают теорию, но плохо применяют её на практике;</li>
                            <li>сложно связать объяснение, практику и проверку результата;</li>
                            <li>учебные материалы существуют разрозненно (нет единого сценария).</li>
                        </ul>
                    `,
                    description: "Изучите проблему."
                },
                {
                    type: 'info',
                    situation: `
                        <h5>Задача:</h5>
                        <p>Спроектировать комплексное цифровое решение, объединяющее несколько инструментов в один учебный процесс.</p>
                        <p><strong>Нужно обеспечить:</strong></p>
                        <ul>
                            <li>целостный практико-ориентированный урок;</li>
                            <li>активную работу учащихся;</li>
                            <li>автоматическую фиксацию и проверку результатов.</li>
                        </ul>
                    `,
                    description: "Ознакомьтесь с требованиями к решению."
                },
                {
                    type: 'matching',
                    situation: "Соотнесите этапы учебного процесса с цифровыми инструментами, которые наиболее целесообразно использовать.",
                    description: "Распределите инструменты по этапам.",
                    pairs: [
                        { left: "Объяснение принципа работы исполнителя", right: "Интерактивная презентация с анимацией" },
                        { left: "Практическое выполнение алгоритма", right: "Симулятор исполнителя (визуальная среда)" },
                        { left: "Проверка правильности выполнения", right: "Автопроверяемое задание в ЭОР" },
                        { left: "Анализ типичных ошибок", right: "Отчёт о действиях учащегося (лог выполнения)" }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Задание 4: Алгоритм",
            description: "Проектирование интерактивного задания.",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Проблема проверки:</h5>
                        <p>При выполнении заданий по алгоритмам:</p>
                        <ul>
                            <li>учащиеся часто получают неверный результат, не понимая причину;</li>
                            <li>учитель не видит логику решения;</li>
                            <li>проверка занимает много времени.</li>
                        </ul>
                        <p><strong>Твоя задача</strong> — спроектировать интерактивное задание, которое проверяет логику алгоритма и автоматически оценивает корректность.</p>
                    `,
                    description: "Далее"
                },
                {
                    type: 'info',
                    situation: `
                        <h5>Алгоритм для реализации:</h5>
                        <p>Необходимо реализовать алгоритм, который:</p>
                        <ol>
                            <li>принимает число <strong>n</strong>;</li>
                            <li>если <strong>n</strong> чётное — выводит «Чётное»;</li>
                            <li>иначе — выводит «Нечётное».</li>
                        </ol>
                    `,
                    description: "Изучите требуемый алгоритм."
                },
                {
                    type: 'dragDrop',
                    situation: "Перетащите элементы алгоритма в правильные логические зоны, чтобы алгоритм работал корректно.",
                    description: "Соберите алгоритм.",
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
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Задание 5: Инженерно-педагогическая задача",
            description: "Решение на основе данных.",
            stages: [
                {
                    type: 'quiz',
                    situation: `
                        <h5>Ситуация:</h5>
                        <p>После выполнения задания по теме «Алгоритмы с ветвлением» системой зафиксированы следующие показатели:</p>
                        <ul>
                            <li>85% учащихся корректно вводят данные;</li>
                            <li>60% правильно формулируют условие;</li>
                            <li><strong>42% верно распределяют действия по ветвям;</strong></li>
                            <li>92% корректно выводят результат.</li>
                        </ul>
                        <p>Учитель видит только итоговые баллы и не понимает причин затруднений.</p>
                    `,
                    description: "Выберите одно педагогически и инженерно обоснованное решение.",
                    questions: [{
                        text: "Что следует реализовать в ЭОР в первую очередь?",
                        options: [
                            "A. Повторить объяснение всей темы на следующем уроке",
                            "B. Добавить пошаговый интерактивный тренажёр для этапа ветвления",
                            "C. Увеличить количество заданий на ввод данных",
                            "D. Убрать автопроверку и проверять задания вручную"
                        ],
                        correct: 1
                    }]
                },
                {
                    type: 'quiz',
                    situation: "Вы выбрали добавление тренажера. Теперь нужно решить, какие дополнительные меры принесут наибольшую пользу для анализа.",
                    description: "Выберите все правильные варианты.",
                    questions: [{
                        text: "Какие действия логично дополнят решение? (Выберите все подходящие варианты)",
                        multi: true,
                        options: [
                            "Визуализация ветвей алгоритма",
                            "Сбор логов по каждому шагу алгоритма",
                            "Отключение автоматической проверки",
                            "Увеличение объёма теоретического текста",
                            "Только увеличение количества видео-лекций"
                        ],
                        correct: [0, 1]
                    }]
                }
            ]
        },
        {
            id: 6,
            title: "Задание 6: Моделирование",
            description: "Поэтапное формирование навыка.",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Ситуация:</h5>
                        <p>При изучении темы «Моделирование и формализация»:</p>
                        <ul>
                            <li>учащиеся понимают задачу, но не умеют выделять параметры;</li>
                            <li>сложно перейти от ситуации к модели;</li>
                            <li>отсутствует адаптивный сценарий;</li>
                        </ul>
                        <p><strong>Задача:</strong> Спроектировать цифровое решение, позволяющее поэтапно формировать навыки моделирования.</p>
                    `,
                    description: "Далее"
                },
                {
                    type: 'ordering',
                    situation: "Расположите этапы цифрового урока в логически и педагогически корректном порядке.",
                    description: "Упорядочите этапы.",
                    items: [
                        "Интерактивное объяснение процесса моделирования",
                        "Пошаговый тренажёр по формализации",
                        "Базовое автопроверяемое задание",
                        "Усложнённое задание с новой задачей",
                        "Сбор и анализ данных выполнения"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Анализ данных:</h5>
                        <p>После внедрения системы и анализа данных ЭОР установлено:</p>
                        <ul>
                            <li>50% учащихся испытывают трудности при формализации условий;</li>
                            <li>30% уверенно справляются с заданиями;</li>
                            <li>20% готовы к усложнённым моделям.</li>
                        </ul>
                    `,
                    description: "Какое цифрово-педагогическое решение является наиболее обоснованным?",
                    questions: [{
                        text: "Ваше решение:",
                        options: [
                            "A. Повторить объяснение всей темы для класса",
                            "B. Использовать только базовое задание",
                            "C. Подключить пошаговый тренажёр и усложнённые задания (дифференциация)",
                            "D. Исключить интерактив и перейти к письменным работам"
                        ],
                        correct: 2
                    }]
                }
            ]
        }
    ],
    uz: [
        {
            id: 1,
            title: "1-topshiriq: Bizda muammo bor, Xyuston!!!",
            description: "Muhandislik-pedagogik kvest.",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Vaziyat:</h5>
                        <p>Informatika o'qituvchisi quyidagi vaziyatga duch keldi:</p>
                        <ul>
                            <li>o'quvchilar algoritmlar bo'yicha amaliy topshiriqlarni rasmiy bajaradilar;</li>
                            <li>xatolik qaysi bosqichda yuz berayotganini aniqlash qiyin;</li>
                            <li>qayta aloqa kechikmoqda;</li>
                            <li>o'quvchilarning motivatsiyasi va mustaqilligi pasaymoqda.</li>
                        </ul>
                        <p><strong>EOR va LMS dan foydalanishda:</strong></p>
                        <ul>
                            <li>topshiriq bajarilishini bosqichma-bosqich tekshirish mexanizmi mavjud emas;</li>
                            <li>tipik xatolarni avtomatik qayd etish yo'q;</li>
                            <li>o'qituvchi topshiriq bajarilishi haqida tezkor ma'lumot olmaydi.</li>
                        </ul>
                    `,
                    description: "Vaziyatni o'rganib chiqing va 'Keyingi' tugmasini bosing."
                },
                {
                    type: 'info',
                    situation: `
                        <h5>Sizning missiyangiz:</h5>
                        <p>Sizning vazifangiz shunday raqamli yechimni loyihalashki, u bir vaqtning o'zida:</p>
                        <ul>
                            <li>o'qitishni qo'llab-quvvatlaydi;</li>
                            <li>nazoratni avtomatlashtiradi;</li>
                            <li>materialni o'zlashtirish sifatini oshiradi.</li>
                        </ul>
                        <p><strong>Siz quyidagilarni ta'minlashingiz kerak:</strong></p>
                        <ul>
                            <li>algoritmik topshiriq bajarilishini bosqichma-bosqich tekshirish;</li>
                            <li>tezkor qayta aloqa;</li>
                            <li>EORda o'quvchilar harakatlari haqida ma'lumotlarni yig'ish.</li>
                        </ul>
                    `,
                    description: "Missiya bilan tanishing va 'Keyingi' tugmasini bosing."
                },
                {
                    type: 'matching',
                    situation: "Aniqlangan muammolarni ularni hal qilishga imkon beruvchi raqamli yechim elementlari bilan moslashtiring.",
                    description: "Yechimni tegishli muammoga surib qo'ying.",
                    pairs: [
                        { left: "Tezkor qayta aloqaning yo'qligi", right: "Natijani darhol ko'rsatish" },
                        { left: "Xatolik bosqichini aniqlash imkonsizligi", right: "Bosqichma-bosqich avtomatik tekshirish" },
                        { left: "Topshiriqlarning rasmiy bajarilishi", right: "Algoritmni vizual yig'ish imkoniyati bo'lgan interaktiv topshiriq" },
                        { left: "Ish jarayoni haqida ma'lumotlarning yo'qligi", right: "Foydalanuvchi harakatlarini loglash (qayd etish)" }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "2-topshiriq: Muhandislik-pedagogik muammo",
            description: "Informatika o'qituvchisi LMS dan foydalanmoqda. Raqamli iz bo'yicha kvest.",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Muammo:</h5>
                        <p>Informatika o'qituvchisi LMS, onlayn testlar va bulutli xizmatlardan foydalanadi. Bunda:</p>
                        <ul>
                            <li>o'quvchilar o'z harakatlari raqamli iz hosil qilishini anglamaydilar;</li>
                            <li>tez-tez raqamli xavfsizlik qoidalarini buzadilar;</li>
                            <li>onlayn harakatlarining oqibatlarini tushunmaydilar.</li>
                        </ul>
                        <p><strong>Joriy yechimning texnik kamchiliklari:</strong></p>
                        <ul>
                            <li>raqamli izni vizualizatsiya qilish mexanizmlari mavjud emas;</li>
                            <li>xavfli harakatlarni avtomatik nazorat qilish yo'q;</li>
                            <li>xavfsiz bo'lmagan xulq-atvordan ogohlantiruvchi maslahatlar amalga oshirilmagan.</li>
                        </ul>
                    `,
                    description: "Muammo bilan tanishing."
                },
                {
                    type: 'info',
                    situation: `
                        <h5>Sizning vazifangiz:</h5>
                        <p>Quyidagilarni ta'minlaydigan raqamli yechim loyihalashtirish:</p>
                        <ul>
                            <li>o'quvchilarning ongli xulq-atvorini shakllantirish;</li>
                            <li>raqamli xavfsizlik xatarlarini kamaytirish;</li>
                            <li>o'qituvchi tomonidan doimiy qo'lda nazoratni talab qilmaslik.</li>
                        </ul>
                        <p><strong>Maqsadlar:</strong></p>
                        <ul>
                            <li>o'quvchilarga ularning raqamli harakatlari oqibatlarini ko'rsatish;</li>
                            <li>EORga raqamli xavfsizlik elementlarini kiritish;</li>
                            <li>avtomatik mexanizmlar orqali xatarlar profilaktikasini ta'minlash.</li>
                        </ul>
                    `,
                    description: "Vazifani bajarishga qabul qiling."
                },
                {
                    type: 'matching',
                    situation: "Raqamli ta'lim muhitidagi foydalanuvchi harakatini raqamli xavfsizlik nuqtai nazaridan uning asosiy oqibati bilan moslashtiring.",
                    description: "Harakat va oqibatni moslashtiring.",
                    pairs: [
                        { left: "F.I.Sh. va kontaktlar bilan ishni nashr qilish", right: "Kengaytirilgan raqamli izni shakllantirish" },
                        { left: "Ikki faktorli autentifikatsiyadan foydalanish", right: "Ruxsatsiz kirish xavfini kamaytirish" },
                        { left: "LMS da birovning akkaunti orqali ishlash", right: "Harakatlar uchun shaxsiy javobgarlikni yo'qotish" },
                        { left: "Profil maxfiyligini sozlash", right: "Shaxsiy ma'lumotlarni himoya qilish" }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "3-topshiriq: Kompleks raqamli yechim",
            description: "«Algoritmlar» mavzusi bo'yicha o'quv jarayonini loyihalash.",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Pedagogik muammo:</h5>
                        <p>«Algoritmlar va ijrochilar» mavzusini o'rganishda o'qituvchi quyidagilarga duch keladi:</p>
                        <ul>
                            <li>o'quvchilar nazariyani tushunadilar, lekin amaliyotda yomon qo'llaydilar;</li>
                            <li>tushuntirish, amaliyot va natijani tekshirishni bog'lash qiyin;</li>
                            <li>o'quv materiallari tarqoq holda mavjud (yagona ssenariy yo'q).</li>
                        </ul>
                    `,
                    description: "Muammoni o'rganing."
                },
                {
                    type: 'info',
                    situation: `
                        <h5>Vazifa:</h5>
                        <p>Bir nechta vositalarni yagona o'quv jarayoniga birlashtiruvchi kompleks raqamli yechimni loyihalash.</p>
                        <p><strong>Ta'minlash kerak:</strong></p>
                        <ul>
                            <li>yaxlit amaliyotga yo'naltirilgan dars;</li>
                            <li>o'quvchilarning faol ishlashi;</li>
                            <li>natijalarni avtomatik qayd etish va tekshirish.</li>
                        </ul>
                    `,
                    description: "Yechimga qo'yiladigan talablar bilan tanishing."
                },
                {
                    type: 'matching',
                    situation: "O'quv jarayoni bosqichlarini foydalanish eng maqsadga muvofiq bo'lgan raqamli vositalar bilan moslashtiring.",
                    description: "Vositalarni bosqichlar bo'yicha taqsimlang.",
                    pairs: [
                        { left: "Ijrochi ishlash prinsipini tushuntirish", right: "Animatsiyali interaktiv taqdimot" },
                        { left: "Algoritmni amaliy bajarish", right: "Ijrochi simulyatori (vizual muhit)" },
                        { left: "Bajarish to'g'riligini tekshirish", right: "EORda avto-tekshiriladigan topshiriq" },
                        { left: "Tipik xatolarni tahlil qilish", right: "O'quvchi harakatlari hisoboti (bajarish logi)" }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "4-topshiriq: Algoritm",
            description: "Interaktiv topshiriqni loyihalash.",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Tekshirish muammosi:</h5>
                        <p>Algoritmlar bo'yicha topshiriqlarni bajarishda:</p>
                        <ul>
                            <li>o'quvchilar sababini tushunmasdan tez-tez noto'g'ri natija oladilar;</li>
                            <li>o'qituvchi yechim mantiqini ko'rmaydi;</li>
                            <li>tekshirish ko'p vaqt oladi.</li>
                        </ul>
                        <p><strong>Sizning vazifangiz</strong> — algoritm mantiqini tekshiradigan va to'g'riligini avtomatik baholaydigan interaktiv topshiriqni loyihalash.</p>
                    `,
                    description: "Keyingi"
                },
                {
                    type: 'info',
                    situation: `
                        <h5>Amalga oshirish uchun algoritm:</h5>
                        <p>Quyidagi algoritmni amalga oshirish kerak:</p>
                        <ol>
                            <li><strong>n</strong> sonini qabul qiladi;</li>
                            <li>agar <strong>n</strong> juft bo'lsa — «Juft» deb chiqaradi;</li>
                            <li>aks holda — «Toq» deb chiqaradi.</li>
                        </ol>
                    `,
                    description: "Talab qilingan algoritmni o'rganing."
                },
                {
                    type: 'dragDrop',
                    situation: "Algoritm to'g'ri ishlashi uchun elementlarni to'g'ri mantiqiy zonalarga joylashtiring.",
                    description: "Algoritmni yig'ing.",
                    categories: [
                        { id: 'start', title: "Algoritm boshi" },
                        { id: 'yes', title: "«Ha» tarmog'i" },
                        { id: 'no', title: "«Yo'q» tarmog'i" },
                        { id: 'end', title: "Tugatish" }
                    ],
                    items: [
                        { id: 'i1', text: "n qiymatini kiritish", category: 'start' },
                        { id: 'i2', text: "n mod 2 = 0 shartini tekshirish", category: 'start' },
                        { id: 'i3', text: "«Juft» deb chiqarish", category: 'yes' },
                        { id: 'i4', text: "«Toq» deb chiqarish", category: 'no' }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "5-topshiriq: Muhandislik-pedagogik masala",
            description: "Ma'lumotlar asosida yechim.",
            stages: [
                {
                    type: 'quiz',
                    situation: `
                        <h5>Vaziyat:</h5>
                        <p>«Tarmoqlanuvchi algoritmlar» mavzusi bo'yicha topshiriq bajarilgandan so'ng tizim quyidagi ko'rsatkichlarni qayd etdi:</p>
                        <ul>
                            <li>85% o'quvchilar ma'lumotlarni to'g'ri kiritmoqda;</li>
                            <li>60% shartni to'g'ri ifodalamoqda;</li>
                            <li><strong>42% harakatlarni tarmoqlar bo'yicha to'g'ri taqsimlamoqda;</strong></li>
                            <li>92% natijani to'g'ri chiqarmoqda.</li>
                        </ul>
                        <p>O'qituvchi faqat yakuniy ballarni ko'rmoqda va qiyinchilik sabablarini tushunmayapti.</p>
                    `,
                    description: "Bitta pedagogik va muhandislik asoslangan yechimni tanlang.",
                    questions: [{
                        text: "EORda birinchi navbatda nimani amalga oshirish kerak?",
                        options: [
                            "A. Keyingi darsda butun mavzu tushuntirishini takrorlash",
                            "B. Tarmoqlanish bosqichi uchun bosqichma-bosqich interaktiv trenajyor qo'shish",
                            "C. Ma'lumotlarni kiritishga doir topshiriqlar sonini oshirish",
                            "D. Avto-tekshirishni olib tashlash va topshiriqlarni qo'lda tekshirish"
                        ],
                        correct: 1
                    }]
                },
                {
                    type: 'quiz',
                    situation: "Siz trenajyor qo'shishni tanladingiz. Endi tahlil uchun eng katta foyda keltiradigan qo'shimcha choralarni hal qilishingiz kerak.",
                    description: "Barcha to'g'ri variantlarni tanlang.",
                    questions: [{
                        text: "Qaysi harakatlar yechimni mantiqan to'ldiradi? (Barcha mos variantlarni tanlang)",
                        multi: true,
                        options: [
                            "Algoritm tarmoqlarini vizualizatsiya qilish",
                            "Algoritmning har bir qadami bo'yicha loglarni yig'ish",
                            "Avtomatik tekshirishni o'chirish",
                            "Nazariy matn hajmini oshirish",
                            "Faqat video-ma'ruzalar sonini oshirish"
                        ],
                        correct: [0, 1]
                    }]
                }
            ]
        },
        {
            id: 6,
            title: "6-topshiriq: Modellashtirish",
            description: "Ko'nikmani bosqichma-bosqich shakllantirish.",
            stages: [
                {
                    type: 'info',
                    situation: `
                        <h5>Vaziyat:</h5>
                        <p>«Modellashtirish va formallashtirish» mavzusini o'rganishda:</p>
                        <ul>
                            <li>o'quvchilar masalani tushunadilar, lekin parametrlarni ajratib ko'rsata olmaydilar;</li>
                            <li>vaziyatdan modelga o'tish qiyin;</li>
                            <li>moslashuvchan ssenariy yo'q;</li>
                        </ul>
                        <p><strong>Vazifa:</strong> Modellashtirish ko'nikmalarini bosqichma-bosqich shakllantirishga imkon beruvchi raqamli yechimni loyihalash.</p>
                    `,
                    description: "Keyingi"
                },
                {
                    type: 'ordering',
                    situation: "Raqamli dars bosqichlarini mantiqiy va pedagogik to'g'ri tartibda joylashtiring.",
                    description: "Bosqichlarni tartiblang.",
                    items: [
                        "Modellashtirish jarayonining interaktiv tushuntirilishi",
                        "Formallashtirish bo'yicha bosqichma-bosqich trenajyor",
                        "Bazaviy avto-tekshiriladigan topshiriq",
                        "Yangi masala bilan murakkablashtirilgan topshiriq",
                        "Bajarish ma'lumotlarini yig'ish va tahlil qilish"
                    ]
                },
                {
                    type: 'quiz',
                    situation: `
                        <h5>Ma'lumotlar tahlili:</h5>
                        <p>Tizim joriy etilgandan va EOR ma'lumotlari tahlil qilingandan so'ng aniqlandi:</p>
                        <ul>
                            <li>50% o'quvchilar shartlarni formallashtirishda qiyinchilikka duch kelmoqda;</li>
                            <li>30% topshiriqlarni ishonch bilan bajarmoqda;</li>
                            <li>20% murakkablashtirilgan modellarga tayyor.</li>
                        </ul>
                    `,
                    description: "Qaysi raqamli-pedagogik yechim eng asosli hisoblanadi?",
                    questions: [{
                        text: "Sizning yechimingiz:",
                        options: [
                            "A. Butun mavzu tushuntirishini sinf uchun takrorlash",
                            "B. Faqat bazaviy topshiriqdan foydalanish",
                            "C. Bosqichma-bosqich trenajyor va murakkablashtirilgan topshiriqlarni ulash (tabaqalashtirish)",
                            "D. Interaktivni chiqarib tashlash va yozma ishlarga o'tish"
                        ],
                        correct: 2
                    }]
                }
            ]
        }
    ]
};

// Default setup for backward compatibility if needed, though TaskRunner should change
// window.intermediateTasks = window.intermediateTasksData.ru; 
