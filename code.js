// Получаем элементы меню и кнопки
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slider = document.querySelector('.slider');
const slideHeight = document.querySelector('.slide').offsetHeight;
const totalSlides = document.querySelectorAll('.slide').length;

// Текущий индекс слайда
let currentIndex = 0;

// Функция для обновления положения слайдера
function updateSliderPosition() {
    slider.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
    // Обновление доступности кнопок
    updateButtons();
}

// Функция для обновления доступности кнопок
function updateButtons() {
    // Если мы на первом слайде, кнопка "Предыдущий" отключена
    if (currentIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // Если мы на последнем слайде, кнопка "Следующий" отключена
    if (currentIndex === totalSlides - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Обработчик для кнопки "Предыдущий"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

// Обработчик для кнопки "Следующий"
nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

// Инициализация начального состояния
updateSliderPosition();
