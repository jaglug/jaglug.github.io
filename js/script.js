// Инициализация библиотеки анимаций AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Длительность анимации (1 сек)
        once: true,     // Анимация проигрывается только один раз
        offset: 100     // Запуск анимации за 100px до элемента
    });
});

// Обработка формы (для демонстрации)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    form.reset();
});

// Плавная прокрутка для навигации (на случай старых браузеров)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
