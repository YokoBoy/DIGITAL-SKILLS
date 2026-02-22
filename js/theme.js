// Theme Switcher - Dark/Light mode
// Persists to localStorage as 'theme' = 'dark' | 'light'

(function () {
    const STORAGE_KEY = 'theme';
    const DARK = 'dark';
    const LIGHT = 'light';

    function getTheme() {
        return localStorage.getItem(STORAGE_KEY) || DARK;
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = document.getElementById('theme-icon');
        if (icon) {
            if (theme === LIGHT) {
                icon.className = 'fas fa-sun';
                icon.style.color = '#ffc107';
            } else {
                icon.className = 'fas fa-moon';
                icon.style.color = '';
            }
        }
    }

    // Apply saved theme immediately (before DOMContentLoaded to prevent flash)
    applyTheme(getTheme());

    document.addEventListener('DOMContentLoaded', function () {
        // Re-apply after DOM is ready (for icon)
        applyTheme(getTheme());

        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                const current = getTheme();
                const next = current === DARK ? LIGHT : DARK;
                localStorage.setItem(STORAGE_KEY, next);
                applyTheme(next);
            });
        }
    });
})();
