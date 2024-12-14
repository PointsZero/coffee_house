const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slider = document.querySelector('.slider');
const slideHeight = document.querySelector('.slide').offsetHeight;
const totalSlides = document.querySelectorAll('.slide').length;
let mainMenu = document.querySelector('.main_menu')

let currentIndex = 0;

let coffee = [
    {
        "Title": "Espresso",
        "Cost": "99",
        "Type": "Espresso",
        "Image": "images/esspreso.webp"
    },
    {
        "Title": "Cappuccino 1",
        "Cost": "99",
        "Type": "Cappuccino",
        "Image": "images/capuchino1.webp"
    },
    {
        "Title": "Cappuccino 2",
        "Cost": "99",
        "Type": "Cappuccino",
        "Image": "images/capuchino2.webp"
    },
    {
        "Title": "Cappuccino 3",
        "Cost": "99",
        "Type": "Cappuccino",
        "Image": "images/capuchino3.webp"
    },
    {
        "Title": "Latte 1",
        "Cost": "99",
        "Type": "Latte",
        "Image": "images/latte1.webp"
    },
    {
        "Title": "Latte 2",
        "Cost": "99",
        "Type": "Latte",
        "Image": "images/latte2.webp"
    },
    {
        "Title": "Americano",
        "Cost": "99",
        "Type": "Americano",
        "Image": "images/americano.webp"
    },
    {
        "Title": "Macchiato 1",
        "Cost": "99",
        "Type": "Macchiato",
        "Image": "images/macchiato.webp"
    },
    {
        "Title": "Macchiato 2",
        "Cost": "99",
        "Type": "Macchiato",
        "Image": "images/macchiato2.webp"
    },
    {
        "Title": "Raf 1",
        "Cost": "99",
        "Type": "Raf",
        "Image": "images/raf1.webp"
    },
    {
        "Title": "Raf 2",
        "Cost": "99",
        "Type": "Raf",
        "Image": "images/raf2.webp"
    },
    {
        "Title": "Mocha 1",
        "Cost": "99",
        "Type": "Mocha",
        "Image": "images/mocha1.webp"
    },
    {
        "Title": "Mocha 2",
        "Cost": "99",
        "Type": "Mocha",
        "Image": "images/mocha2.webp"
    },
    {
        "Title": "Glasse 1",
        "Cost": "99",
        "Type": "Glasse",
        "Image": "images/glasse1.webp"
    },
    {
        "Title": "Glasse 2",
        "Cost": "99",
        "Type": "Glasse",
        "Image": "images/Glasse2.webp"
    },
    {
        "Title": "Irish",
        "Cost": "99",
        "Type": "Irish",
        "Image": "images/irish.webp"
    },
    {
        "Title": "Bicerin",
        "Cost": "99",
        "Type": "Bicerin",
        "Image": "images/Bicerin.webp"
    },
]

function updateSliderPosition() {
    slider.style.transform = `translateY(-${currentIndex * slideHeight}px)`;

}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});


nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 6) {
        currentIndex++;
        updateSliderPosition();
    }
});


updateSliderPosition();

const showBox = (coffee) => {
    return `<div class="box" id="${coffee.Type}">
                <img src="${coffee.Image}" alt="image">
                <p>${coffee.Title}</p>
                <div class="box_buy">
                    <p>${coffee.Cost}</p>
                    <button class="buy_button" onclick="updateLocalStorage()">+</button>
                </div>
            </div>
                `
}
const showAllCoffee = () => {
    let s = ''
    coffee.map((coffee) => {
        s += showBox(coffee)
    })
    mainMenu.innerHTML = s

}
showAllCoffee()