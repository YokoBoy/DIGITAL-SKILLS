const translations = {
    ru: {
        "nav-login": "Войти",
        "nav-logout": "Выйти",
        "btn-register": "Регистрация",
        "modal-title-login": "Вход в систему",
        "modal-title-register": "Регистрация",
        "label-name": "Имя",
        "label-email": "Email",
        "label-password": "Пароль",
        "label-confirm-password": "Подтвердите пароль",
        "btn-submit-login": "Войти",
        "btn-submit-register": "Зарегистрироваться",
        "text-no-account": "Нет аккаунта?",
        "text-has-account": "Уже есть аккаунт?",
        "modal-title-level": "Выберите ваш уровень",
        "btn-level-basic": "Базовый уровень",
        "btn-level-intermediate": "Средний уровень",
        "btn-level-advanced": "Высокий уровень",
        "resources-title": "Электронные ресурсы",
        "hero-title": "Добро пожаловать в DigitalSkills!",
        "hero-subtitle": "Освойте цифровые технологии в образовании и станьте профессионалом!",
        "hero-cta": "Начать обучение",
        "get-title": "Что вы получите?",
        "get-1": "Доступ к электронным ресурсам по дисциплине.",
        "get-2": "Практическое обучение с интересными заданиями и кейсами.",
        "get-3": "Возможность больше узнать о цифровых технологиях.",
        "learn-title": "Что вы изучите?",
        "learn-1": "Как цифровые технологии меняют образование.",
        "learn-2": "Как создавать интерактивные уроки, онлайн-курсы и мультимедийные проекты.",
        "learn-3": "Основы искусственного интеллекта, виртуальных лабораторий и геймификации.",
        "footer-cta": "Присоединяйтесь и начните свой путь в цифровом обучении!"
    },
    uz: {
        "nav-login": "Kirish",
        "nav-logout": "Chiqish",
        "btn-register": "Ro'yxatdan o'tish",
        "modal-title-login": "Tizimga kirish",
        "modal-title-register": "Ro'yxatdan o'tish",
        "label-name": "Ism",
        "label-email": "Email",
        "label-password": "Parol",
        "label-confirm-password": "Parolni tasdiqlang",
        "btn-submit-login": "Kirish",
        "btn-submit-register": "Ro'yxatdan o'tish",
        "text-no-account": "Akkauntingiz yo'qmi?",
        "text-has-account": "Akkauntingiz bormi?",
        "modal-title-level": "Darajangizni tanlang",
        "btn-level-basic": "Boshlang'ich daraja",
        "btn-level-intermediate": "O'rta daraja",
        "btn-level-advanced": "Yuqori daraja",
        "resources-title": "Elektron resurslar",
        "hero-title": "DigitalSkills ga xush kelibsiz!",
        "hero-subtitle": "Ta'limda raqamli texnologiyalarni o'zlashtiring va professional bo'ling!",
        "hero-cta": "O'qishni boshlash",
        "get-title": "Siz nima olasiz?",
        "get-1": "Fan bo'yicha elektron resurslarga kirish.",
        "get-2": "Qiziqarli topshiriqlar va keyslar bilan amaliy mashg'ulot.",
        "get-3": "Raqamli texnologiyalar haqida ko'proq bilish imkoniyati.",
        "learn-title": "Siz nimalarni o'rganasiz?",
        "learn-1": "Raqamli texnologiyalar ta'limni qanday o'zgartirmoqda.",
        "learn-2": "Interaktiv darslar, onlayn kurslar va multimedia loyihalarini qanday yaratish.",
        "learn-3": "Sun'iy intellekt, virtual laboratoriyalar va geymifikatsiya asoslari.",
        "footer-cta": "Bizga qo'shiling va raqamli ta'limdagi yo'lingizni boshlang!"
    },
    // Content Data (shared structure, localized strings)
    levels: {
        ru: {
            basic: {
                title: "Базовый уровень",
                description: "Базовый уровень состоит из 9 простых заданий, выполнение которых формируют минимальные результаты обучения для уровня IT специализации.",
                tasks: 9
            },
            intermediate: {
                title: "Средний уровень",
                description: "Средний уровень состоит из 6 заданий, выполнение которых поможет сформировать для инженера-педагога более продвинутые навыки и знания в области цифровых технологий, которые позволят эффективно интегрировать их в образовательный процесс.",
                tasks: 6
            },
            advanced: {
                title: "Высокий уровень",
                description: "Высокий уровень состоит из 4 сложных заданий выполнение которых поможет сформировать продвинутый уровень цифровой компетенции. Каждое задание охватывает все компоненты цифровой компетенции. Одно задание заключается в прохождении онлайн-курса на платформе Coursera.",
                tasks: 4,
                specialTask: "Прохождение онлайн-курса на платформе Coursera (студенты самостоятельно выбирают курсы)."
            }
        },
        uz: {
            basic: {
                title: "Boshlang'ich daraja",
                description: "Boshlang'ich daraja 9 ta oddiy topshiriqdan iborat bo'lib, ularni bajarish IT ixtisosligi darajasi uchun minimal ta'lim natijalarini shakllantiradi.",
                tasks: 9
            },
            intermediate: {
                title: "O'rta daraja",
                description: "O'rta daraja 6 ta topshiriqdan iborat bo'lib, ularni bajarish muhandis-pedagogda raqamli texnologiyalar sohasida yanada ilg'or ko'nikma va bilimlarni shakllantirishga yordam beradi.",
                tasks: 6
            },
            advanced: {
                title: "Yuqori daraja",
                description: "Yuqori daraja 4 ta murakkab topshiriqdan iborat bo'lib, raqamli kompetentsiyaning ilg'or darajasini shakllantirishga yordam beradi. Har bir topshiriq raqamli kompetentsiyaning barcha tarkibiy qismlarini qamrab oladi.",
                tasks: 4,
                specialTask: "Coursera platformasida onlayn kursni o'tish (talabalar kurslarni mustaqil tanlaydilar)."
            }
        }
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;

    localStorage.setItem('selectedLanguage', lang);

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update active state on buttons if they exist
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Re-render user content if available (for dynamic level content)
    if (typeof renderUserContent === 'function') {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            renderUserContent(user);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    setLanguage(savedLang);

    // Event listeners for language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(btn.dataset.lang);
        });
    });
});
