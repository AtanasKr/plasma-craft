const translations = {
    bg: {
        "nav.home": "Начало",
        "nav.services": "Услуги",
        "nav.about": "За нас",
        "nav.contact": "Контакти",

        "hero.tagline": "Прецизно метално изкуство",
        "hero.line1": "ИЗКОВАНО",
        "hero.line2.prefix": "ОТ",
        "hero.line2.fire": "ОГЪН",
        "hero.line3": "И",
        "hero.line4": "СТОМАНА",
        "hero.description":
            "Изрязване с ЦНК плазма за стенно<br>изкуство, надписи, декоративни панели и<br>промишлено производство. Всеки разрез<br>разказва история.",
        "hero.cta": "ПОРЪЧАЙ ПО ПРОЕКТ",
        "hero.viewWork": "ВИЖ НАШАТА РАБОТА"
    },

    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.about": "About us",
        "nav.contact": "Contact",

        "hero.tagline": "Precision metal art",
        "hero.line1": "FORGED",
        "hero.line2.prefix": "FROM",
        "hero.line2.fire": "FIRE",
        "hero.line3": "AND",
        "hero.line4": "STEEL",
        "hero.description":
            "CNC plasma cutting for wall art,<br>lettering, decorative panels and<br>industrial production. Every cut<br>tells a story.",
        "hero.cta": "ORDER A CUSTOM PROJECT",
        "hero.viewWork": "VIEW OUR WORK"
    }
};

function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) el.innerHTML = translations[lang][key];
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
    const lang = localStorage.getItem('lang') || 'bg';
    const theme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', theme);
    applyLang(lang);
    document.getElementById('themeBtn').textContent = theme === 'dark' ? '☀️' : '🌙';
})();

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburgerBtn');
    menu.classList.toggle('open');
    btn.classList.toggle('open');
}