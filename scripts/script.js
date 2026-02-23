const translations = {
    bg: {
        "nav.home": "Начало",
        "nav.services": "Услуги",
        "nav.about": "За нас",
        "nav.contact": "Контакти",
    },
    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.about": "About us",
        "nav.contact": "Contact",
    }
};

function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) el.textContent = translations[lang][key];
        el.style.visibility = 'visible'; // reveal after swap
    });

    document.querySelectorAll('.lang-switch span').forEach(el => {
        el.classList.toggle('active-lang', el.getAttribute('data-lang') === lang);
    });

    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
}

function setLang(lang) {
    applyLang(lang);
}

function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
}

// On every page load: restore lang and theme icon
(function init() {
    const lang  = localStorage.getItem('lang')  || 'bg';
    const theme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', theme);
    applyLang(lang);
    document.getElementById('themeBtn').textContent = theme === 'dark' ? '☀️' : '🌙';
})();