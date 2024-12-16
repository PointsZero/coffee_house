const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slider = document.querySelector('.slider');
const slideHeight = document.querySelector('.slide').offsetHeight;
const totalSlides = document.querySelectorAll('.slide').length;
const coffeeOrderBlock = document.getElementById("coffee_order_block");
let mainMenu = document.querySelector('.main_menu')
let coffeeCard = document.querySelector('.coffee_card')
const buyButton = document.querySelector('.buy_button');
let sizeButton = document.querySelector(".size_button");
let extraButton = document.querySelector(".extra_button");
let milkButton = document.querySelector(".milk_button");

let currFilter = "";
let currentIndex = 0;
let coffeeSelectors = [];
let orderedCoffeeList = [];

let selectedSize = "";
let selectedExtra = "";
let selectedMilk = "";
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
for (let i = 1; i <= 5; i++) {
    coffeeSelectors.push(document.getElementById(`${i}-coffee-type`));
}
const Init = () => {
    let s = "";
    coffee.forEach(elem => {
        if (currFilter == "" || elem.name.toLowerCase().includes(currFilter.toLowerCase())) {
            s += `<div class="coffee-card" id="${elem.type}-block">`;
            s += `<a name="${elem.type}"></a>`;
            s += `<img src="${elem.image}">`;
            s += `<p>${elem.name}</p>`;
            s += `<div class="order-button-block">`;
            s += `<div class="order-text-block">`;
            s += `<p>${elem.price} RUB</p>`;
            s += `</div>`;
            s += `<button class="order-button" onclick="OrderCoffee('${elem.name}')">+</button>`;
            s += `</div>`;
            s += `</div>`;
        }

    });
    coffeeBlock.innerHTML = s;
    Update();
}

Init();
const OrderCoffee = (coffee) => {
    OpenOrderMenu();
    let currCoffee = FindCoffee(coffee);
    let i = 0;

    let size = "<div class='extra_list'>";
    currCoffee.size.forEach(elem => {
        size +=
            `
        <div class="size" onclick="ChooseSize(${i})">
            <p>${elem}</p>
        </div>
        `
        i += 1;
    });
    size += "</div>"

    let extra = "<div class='extra_list'>";
    i = 0;
    currCoffee.extra.forEach(elem => {
        extra +=
            `
        <div class="extra" onclick="ChooseExtra(${i})">
            <p>${elem}</p>
        </div>
        `
        i += 1;
    });
    extra += "</div>"
    i = 0;
    let milk = "<div class='extra_list'>";
    currCoffee.milks.forEach(elem => {
        milk +=
            `
        <div class="milk" onclick="ChooseMilk(${i})">
            <p>${elem}</p>
        </div>
        `
        i += 1;
    });
    milk += "</div>"

    if (currCoffee) {
        orderImageBlock.innerHTML =
            `
        <img src="${currCoffee.image}">
        `
        coffeeOrderBlock.innerHTML =
            `
        <h5>${currCoffee.name}</h5>
        <p >Size</p>
        ${size}
        <p >Extra</p>
        ${extra}
        <p >Milk</p>
        ${milk}
        <div class="buy_block">
        <div class="count_price">
        <p>${currCoffee.price}</p>
        <input type="number" min="1" max="10" value="1" id="order_count_input">
        </div>
        <button onclick="CreateOrder('${currCoffee.name}', 0)">PLACE ORDER</button>
        </div>
        `;
    }
}
// const showCard = (coffee) => {

//     return `<div class="box" >
//                 <img src="${coffee.Image}" alt="image">
//                 <p>${coffee.Title}</p>
//                 <div class="box_size">
//                     <button class="little_button" onclick="updateLocalStorage()">Little</button>
//                     <button class="middle_button" onclick="updateLocalStorage()">Middle</button>
//                     <button class="big_button" onclick="updateLocalStorage()">Big</button>
//                 </div>
//                 <div class="box_extra">
//                     <button class="milk_button" onclick="updateLocalStorage()">Milk</button>
//                     <button class="sugar_button" onclick="updateLocalStorage()">Sugar</button>
//                 </div>
//                 <div class="box_milkType">
//                     <button class="oat_button" onclick="updateLocalStorage()">Oat milk</button>
//                     <button class="cow_button" onclick="updateLocalStorage()">Cow milk</button>
//                 </div>
//                 <div class="box_buy">
//                     <p>${coffee.Cost}</p>
//                     <button class="buy_button+" onclick="updateLocalStorage()">+</button>
//                     <p>${coffee.Cost}</p>
//                     <button class="buy_button-" onclick="updateLocalStorage()">-</button>
//                 </div>
//             </div>
//                 `
// }
// coffee.forEach(coffee => {
//     coffee.addEventListener('click', () => {
//         coffeeCard.innerHTML =
//             `
//                 <img src="${coffee.Image}" alt="image">
//                 <p>${coffee.Title}</p>
//                 <div class="options">
//                     <div class="option_group">
//                         <h3>SIZE</h3>
//                         <button class="size_button">Little</button>
//                         <button class="size_button">Middle</button>
//                         <button class="size_button">Big</button>
//                     </div>
//                     <div class="option_group">
//                         <h3>EXTRA</h3>
//                         <button class="extra_button">Sugar</button>
//                         <button class="extra_button">Milk</button>
//                     </div>

//                     <div class="option_group">
//                         <h3>MILK TYPE</h3>
//                         <button class="milk_button">Oat</button>
//                         <button class="milk_button">Cow</button>
//                     </div>
//                 </div>
//                 <div class="order_summary">
//                     <h2 class="price">${coffee.Cost}</h2>
//                     <div class="quantity">
//                         <button id="decrease">−</button>
//                         <span id="quantity">1</span>
//                         <button id="increase">+</button>
//                     </div>
//                 </div>
//                 <button class="place_order_button">PLACE ORDER</button>
//                 `
//     });
// });

// closebutton.addEventListener('click', () => {
//     modal.style.display = 'none';
// });
// window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//     }
// });

// buyButton.addEventListener('click', () => {
//     mainMenu.style.display = "none";
//     coffeeCard.innerHTML = showCard(coffee)
// });