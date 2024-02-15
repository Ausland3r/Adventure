
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom >= 0
    );
}

// Обработчик события прокрутки для добавления класса 'img-visible'
function checkVisibility() {
    const imgs = document.querySelectorAll('.img-animate');
    imgs.forEach(img => {
        if (isInViewport(img)) {
            img.classList.add('img-visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);

// Обработчик события прокрутки для добавления класса 'img-visible'
function checkVisibility() {
    const imgs = document.querySelectorAll('.img-animate');
    imgs.forEach(img => {
        if (isInViewport(img)) {
            img.classList.add('img-visible');
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', checkVisibility);

// Проверяем видимость изображений при загрузке страницы
document.addEventListener('DOMContentLoaded', checkVisibility);
