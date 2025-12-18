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
    const dashboardBtn = document.getElementById('dashboard-item');
    const protectedSections = document.querySelectorAll('.protected-content');
    const welcomeMsg = document.getElementById('user-welcome-msg');

    if (user) {
        // User is logged in
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'block';
        if (dashboardBtn) dashboardBtn.style.display = 'block';

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
    const users = JSON.parse(localStorage.getItem('db_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        // Instead of just checkAuth(), prompt for level if not set, OR always prompt as per request?
        // Request: "after entering account... opens modal with choice of 3 levels"
        // Let's open it every time for now as requested, or maybe checks if missing.
        // Let's just open it.
        // Local Storage Updated
        window.location.href = 'dashboard.html';
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
    window.location.href = 'dashboard.html';
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
