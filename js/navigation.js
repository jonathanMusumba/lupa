document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    toggleButton.addEventListener('click', () => {
        const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !expanded);
        navMenu.setAttribute('aria-expanded', !expanded);
    });
});