const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slider = document.querySelector('.slider');
const slideHeight = document.querySelector('.slide').offsetHeight;
const totalSlides = document.querySelectorAll('.slide').length;

const coffeeBlock = document.querySelector(".coffee-list");
const rightMenu = document.querySelector(".right-menu");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const body = document.querySelector("body");
const orderMenu = document.querySelector(".order-menu");
const coffeeOrderBlock = document.getElementById("coffee-order-block");
const orderImageBlock = document.querySelector(".order-image");
const orderedCoffeeBlock = document.getElementById("ordered-coffee-block");
const costsBlock = document.querySelector(".prices-block");
let sizeButton = document.querySelector(".coffee-size");
let extraButton = document.querySelector(".coffee-extra");
let milkButton = document.querySelector(".coffee-milk");

let coffeeSelectors = [];
let orderedCoffeeList = [];
let currentIndex = 0;
let selectedSize = "";
let selectedExtra = "";
let selectedMilk = "";

const updateSliderPosition = () => {
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

for (let i = 1; i <= 5; i++) {
    coffeeSelectors.push(document.getElementById(`${i}-coffee-Type`));
}



let coffee = [
    {
        "Title": "Espresso",
        "Cost": "99",
        "Type": "Espresso",
        "Image": "images/esspreso.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Cappuccino 1",
        "Cost": "99",
        "Type": "Cappuccino",
        "Image": "images/capuchino1.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Cappuccino 2",
        "Cost": "99",
        "Type": "Cappuccino",
        "Image": "images/capuchino2.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]

    },
    {
        "Title": "Cappuccino 3",
        "Cost": "99",
        "Type": "Cappuccino",
        "Image": "images/capuchino3.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Latte 1",
        "Cost": "99",
        "Type": "Latte",
        "Image": "images/latte1.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Latte 2",
        "Cost": "99",
        "Type": "Latte",
        "Image": "images/latte2.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Americano",
        "Cost": "99",
        "Type": "Americano",
        "Image": "images/americano.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Macchiato 1",
        "Cost": "99",
        "Type": "Macchiato",
        "Image": "images/macchiato.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Macchiato 2",
        "Cost": "99",
        "Type": "Macchiato",
        "Image": "images/macchiato2.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Raf 1",
        "Cost": "99",
        "Type": "Raf",
        "Image": "images/raf1.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Raf 2",
        "Cost": "99",
        "Type": "Raf",
        "Image": "images/raf2.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Mocha 1",
        "Cost": "99",
        "Type": "Mocha",
        "Image": "images/mocha1.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Mocha 2",
        "Cost": "99",
        "Type": "Mocha",
        "Image": "images/mocha2.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Glasse 1",
        "Cost": "99",
        "Type": "Glasse",
        "Image": "images/glasse1.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Glasse 2",
        "Cost": "99",
        "Type": "Glasse",
        "Image": "images/Glasse2.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Irish",
        "Cost": "99",
        "Type": "Irish",
        "Image": "images/irish.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
    {
        "Title": "Bicerin",
        "Cost": "99",
        "Type": "Bicerin",
        "Image": "images/Bicerin.webp",
        "Size": ["Little", "Middle", "Big"],
        "Extra": ["Sugar", "Milk"],
        "Milk": ["Oat", "Cow"]
    },
]
let selectedBlock = -1;

let totalCost = 0;
let totalCount = 0;

let currFilter = "";


const showCoffee = () => {
    let s = "";
    coffee.forEach(elem => {
        if (currFilter == "" || elem.Title.toLowerCase().includes(currFilter.toLowerCase())) {
            s += `<div class="coffee-card" id="${elem.Type}">`;
            s += `<a Title="${elem.Type}"></a>`;
            s += `<img src="${elem.Image}">`;
            s += `<p>${elem.Title}</p>`;
            s += `<div class="order-button-block">`;
            s += `<div class="order-text-block">`;
            s += `<p>R ${elem.Cost} </p>`;
            s += `</div>`;
            s += `<button class="order-button" onclick="OrderCoffee('${elem.Title}')">+</button>`;
            s += `</div>`;
            s += `</div>`;
        }

    });
    coffeeBlock.innerHTML = s;
}

showCoffee();


const OrderCoffee = (coffeeTitle) => {
    OpenCoffeeCard();
    let currCoffee = FindCoffee(coffeeTitle);
    let i = 0;

    let size = "<div class='extra-list'>";
    currCoffee.Size.forEach(elem => {
        size +=
            `
        <div class="coffee-size" onclick="ChooseCoffeeSize(${i})">
            <p>${elem}</p>
        </div>
        `
        i += 1;
    });
    size += "</div>"

    let extra = "<div class='extra-list'>";
    i = 0;
    currCoffee.Extra.forEach(elem => {
        extra +=
            `
        <div class="coffee-extra" onclick="ChooseCoffeeExtra(${i})">
            <p>${elem}</p>
        </div>
        `
        i += 1;
    });
    extra += "</div>"
    i = 0;
    let Milk = "<div class='extra-list'>";
    currCoffee.Milk.forEach(elem => {
        Milk +=
            `
        <div class="coffee-milk" onclick="ChooseCoffeeMilk(${i})">
            <p>${elem}</p>
        </div>
        `
        i += 1;
    });
    Milk += "</div>"

    if (currCoffee) {
        orderImageBlock.innerHTML =
            `
        <img src="${currCoffee.Image}">
        `
        coffeeOrderBlock.innerHTML =
            `
        <h5>${currCoffee.Title}</h5>
        <p>Size</p>
        ${size}
        <p>Extra</p>
        ${extra}
        <p>Milk</p>
        ${Milk}
        <div class="buy-block">
        <div class="count-cost">
        <p>R ${currCoffee.Cost} </p>
        <input Type="number" min="1" max="10" value="1" id="order-count-input">
        </div>
        <button onclick="CreateOrder('${currCoffee.Title}', 0)">PLACE ORDER</button>
        </div>
        `;
    }
}

const FindCoffee = (Title) => {
    return coffee.find(element => element.Title == Title) || null;
}

const OpenRightMenu = () => {
    rightMenu.style.width = "25%";
    rightMenu.style.display = "flex";
    menu.classList.add("deactivated");
    main.classList.add("deactivated");
    body.style.overflow = "hidden";
}

const CloseRightMenu = () => {
    rightMenu.style.width = "0%";
    rightMenu.style.display = "none";
    menu.classList.remove("deactivated");
    main.classList.remove("deactivated");
    body.style.overflow = "auto";
}

const OpenCoffeeCard = () => {
    orderMenu.style.display = "flex";
    body.style.overflow = "hidden";
    main.style.display = "none";
    menu.style.display = "none";
}

const CloseOrderMenu = () => {
    orderMenu.style.display = "none";
    body.style.overflow = "auto";
    main.style.display = "flex";
    menu.style.display = "flex";
}

const ChooseCoffeeSize = (ind) => {
    i = 0;
    sizeButton = document.querySelectorAll(".coffee-size");
    sizeButton.forEach(elem => {
        if (i == ind) {
            elem.classList.add("selected-coffee-extra");
            selectedSize = elem.innerText;
        }
        else {
            elem.classList.remove("selected-coffee-extra");
        }
        i += 1;
    })
}

const ChooseCoffeeExtra = (ind) => {
    i = 0;
    extraButton = document.querySelectorAll(".coffee-extra");
    extraButton.forEach(elem => {
        if (i == ind) {
            elem.classList.add("selected-coffee-extra")
            selectedExtra = elem.innerText;
        }
        else {
            elem.classList.remove("selected-coffee-extra")
        }
        i += 1;
    })
}

const ChooseCoffeeMilk = (ind) => {
    i = 0;
    milkButton = document.querySelectorAll(".coffee-milk");
    milkButton.forEach(elem => {
        if (i == ind) {
            elem.classList.add("selected-coffee-extra")
            selectedMilk = elem.innerText;
        }
        else {
            elem.classList.remove("selected-coffee-extra")
        }
        i += 1;
    })
}

const CreateOrder = (Title, count_json) => {
    let selectedCoffee = FindCoffee(Title);
    let count = 0;
    if (count_json == 0) {
        count = Number(document.getElementById("order-count-input").value);
    }
    else {
        count = count_json;
    }
    s = orderedCoffeeBlock.innerHTML;
    s +=
        `
    <div class="ordered-coffee-block">
    <div class="element-order-block">
    <img src="${selectedCoffee.Image}">
    </div>
    <div class="element-order-block">
    <p>${selectedCoffee.Title}</p>
    </div>
    <div class="block-count">
    <p>${count}</p>
    </div>
    </div>
    `
    orderedCoffeeBlock.innerHTML = s;
    totalCost += count * selectedCoffee.Cost;
    console.log(totalCost)
    totalCount += count;
    let counts = document.querySelectorAll(".order-count");
    counts.forEach(elem => {
        elem.innerText = totalCount
    })

    let p = "";
    p +=
        `
    <div class="price-total-block">
        <p>Subtotal</p>
        <p>R ${totalCost} </p>
    </div>
    <hr class ="price_hr">
    <div class="price-total-block">
        <p>Discount -10%</p>
        <p>R ${(totalCost * 0.1).toFixed()} </p>
    </div>
    <hr class ="price_hr">
    <div class="price-total-block">
        
        <p>Total</p>
        <p>R ${(totalCost * 0.9).toFixed()} </p>
        </div>
        <div class="slide-close-button" onclick="CloseRightMenu()">
        <img src="Images/right-slide.png" alt="right-slide">
    </div>
    `
    costsBlock.innerHTML = p;
    if (count_json == 0) {
        orderedCoffeeList.push({ "Title": Title, "count": count, "Size": selectedSize, "Extra": selectedExtra, "Milk": selectedMilk });
        CloseOrderMenu();
    }
}

document.getElementById("search-input").addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        currFilter = this.value;
    }
    showCoffee();
});

