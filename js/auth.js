// Simple Frontend Auth using localStorage

// Initialize dummy DB if empty
if (!localStorage.getItem('db_users')) {
    localStorage.setItem('db_users', JSON.stringify([
        { email: 'admin@example.com', password: 'admin', name: 'Admin', level: 'advanced' }
    ]));
}

function checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loginBtn = document.getElementById('login-item');
    const logoutBtn = document.getElementById('logout-item');
    const authRequiredItems = document.querySelectorAll('.auth-required');

    // Updates for specific elements
    const protectedSections = document.querySelectorAll('.protected-content');
    const welcomeMsg = document.getElementById('user-welcome-msg');
    const userNameDisplay = document.getElementById('user-name-display');

    if (user) {
        // User is logged in
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';

        // Show protected nav links (Tasks, Cabinet)
        authRequiredItems.forEach(el => el.style.display = 'block');

        // Show User Name in Header
        if (userNameDisplay) {
            userNameDisplay.style.display = 'block';
            userNameDisplay.textContent = user.name;
        }

        protectedSections.forEach(el => el.style.display = 'block');
        if (welcomeMsg) welcomeMsg.textContent = user.name;

        // Render Content if level is selected
        if (typeof renderUserContent === 'function') {
            renderUserContent(user);
        }
    } else {
        // User is logged out
        if (loginBtn) loginBtn.style.display = 'block';
        if (logoutBtn) logoutBtn.style.display = 'none';

        // Hide protected nav links
        authRequiredItems.forEach(el => el.style.display = 'none');

        if (userNameDisplay) userNameDisplay.style.display = 'none';

        protectedSections.forEach(el => el.style.display = 'none');
    }
}

function showLevelModal() {
    // Hide login modal first if open
    closeModal('loginModal');

    // Show level modal
    const levelModal = new bootstrap.Modal(document.getElementById('levelModal'));
    levelModal.show();
}

function selectLevel(level) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        user.level = level;
        localStorage.setItem('user', JSON.stringify(user));

        // Update DB as well to persist across sessions
        const users = JSON.parse(localStorage.getItem('db_users') || '[]');
        const dbUserIndex = users.findIndex(u => u.email === user.email);
        if (dbUserIndex !== -1) {
            users[dbUserIndex].level = level;
            localStorage.setItem('db_users', JSON.stringify(users));
        }
    }
    closeModal('levelModal');
    checkAuth();
}

function login(email, password) {
    // 1. Backdoor for Tester
    if (email === 'tester@digitalskills.uz' && password === 'SuperDifficultPass_2025') {
        const testUser = {
            name: 'Test Student (Hacked)',
            email: 'tester@digitalskills.uz',
            password: 'SuperDifficultPass_2025',
            level: 'advanced', // Unlock everything
            progress: {
                // Russian Progress (100%)
                'ru_basic': { 1: 100, 2: 100, 3: 100, 4: 100, 5: 100, 6: 100, 7: 100, 8: 100, 9: 100 },
                'ru_intermediate': { 1: 100, 2: 100, 3: 100, 4: 100, 5: 100, 6: 100 },
                'ru_advanced': { 1: 100, 2: 100, 3: 100, 4: 100 },
                // Uzbek Progress (100%)
                'uz_basic': { 1: 100, 2: 100, 3: 100, 4: 100, 5: 100, 6: 100, 7: 100, 8: 100, 9: 100 },
                'uz_intermediate': { 1: 100, 2: 100, 3: 100, 4: 100, 5: 100, 6: 100 },
                'uz_advanced': { 1: 100, 2: 100, 3: 100, 4: 100 }
            }
        };

        localStorage.setItem('user', JSON.stringify(testUser));

        // Also save to DB list to persist re-login if needed
        let users = JSON.parse(localStorage.getItem('db_users') || '[]');
        if (!users.find(u => u.email === testUser.email)) {
            users.push(testUser);
            localStorage.setItem('db_users', JSON.stringify(users));
        }

        window.location.href = 'tasks.html';
        return true;
    }

    const users = JSON.parse(localStorage.getItem('db_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        // Redirect to Tasks page
        window.location.href = 'tasks.html';
        return true;
    } else {
        alert('Invalid email or password / Неверный email или пароль');
        return false;
    }
}

function register(name, email, password) {
    const users = JSON.parse(localStorage.getItem('db_users') || '[]');

    if (users.find(u => u.email === email)) {
        alert('User already exists / Пользователь уже существует');
        return false;
    }

    const newUser = { name, email, password }; // Level will be set after
    users.push(newUser);
    localStorage.setItem('db_users', JSON.stringify(users));

    // Auto login
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Registration successful!');
    window.location.href = 'tasks.html'; // Redirect to Tasks
    return true;
}

function logout() {
    localStorage.removeItem('user');
    checkAuth();
}

function closeModal(modalId) {
    const modalEl = document.getElementById(modalId);
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
}

document.addEventListener('DOMContentLoaded', () => {
    checkAuth();

    // Toggle Forms
    const toRegisterBtn = document.getElementById('to-register');
    const toLoginBtn = document.getElementById('to-login');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const modalTitle = document.getElementById('auth-modal-title');

    if (toRegisterBtn && toLoginBtn) {
        toRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginFormContainer.style.display = 'none';
            registerFormContainer.style.display = 'block';
            modalTitle.setAttribute('data-i18n', 'modal-title-register');
            if (typeof setLanguage === 'function') setLanguage(localStorage.getItem('selectedLanguage') || 'ru');
        });

        toLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginFormContainer.style.display = 'block';
            registerFormContainer.style.display = 'none';
            modalTitle.setAttribute('data-i18n', 'modal-title-login');
            if (typeof setLanguage === 'function') setLanguage(localStorage.getItem('selectedLanguage') || 'ru');
        });
    }

    // Login Form Submit
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            login(email, password);
        });
    }

    // Register Form Submit
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirm = document.getElementById('register-confirm').value;

            if (password !== confirm) {
                alert('Passwords do not match / Пароли не совпадают');
                return;
            }

            register(name, email, password);
        });
    }

    // Logout Button Click
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }

    // Level Selection Buttons
    document.querySelectorAll('.btn-select-level').forEach(btn => {
        btn.addEventListener('click', () => {
            selectLevel(btn.dataset.level);
        });
    });
});
