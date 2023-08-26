let seeMenu = document.querySelector('#main-action-button');
let menu = document.querySelector('#products');
let links = document.querySelectorAll('.menu-item > a');
let ButtonsOrder = document.querySelectorAll('.product-button');
let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let order_action = document.getElementById('order-action');
let inputs = document.querySelectorAll('.order-form-input > input');
let changeCurrency = document.querySelector('#change-currency');
let prices = document.querySelectorAll('.products-item-price');
const logo = document.querySelector('.logo');
const btn_more = document.querySelector('.btn_more');
const optional = document.querySelector('.optional');

btn_more.addEventListener('click', function() {
    optional.style.display = 'flex';
})


logo.addEventListener('click', function() {
    this.classList.add('logo_rotate');
    setTimeout(() => {
        this.classList.remove('logo_rotate')
    },1000)
})


seeMenu.addEventListener('click', function() {
    menu.scrollIntoView({behavior: "smooth"})
})

for(let link of links) {
    link.addEventListener('click', function() {
        document.getElementById(link.getAttribute('data-link')).scrollIntoView({behavior: "smooth"});
    })
}

for(let btn of ButtonsOrder) {
    btn.addEventListener('click', function() {
        document.getElementById('order').scrollIntoView({behavior: "smooth"})
    })
}

order_action.addEventListener('click', function() {
    let hasError = false;
    for(let inp of inputs) {
        if(inp.value == '') {
            inp.style.border = '1px solid red';
            hasError = true;
        } else inp.style.border = '';
    }

    if(!hasError) {
        inputs.forEach(inp => inp.value = '');
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
    }
})

changeCurrency.addEventListener('click', function(e) {
    let currentCurrency = e.target.innerText;
    let newCurrency = '$';
    let coefficient = 1;

    if(currentCurrency === '$') {
        newCurrency = '₽';
        coefficient = 93;
    } else if(currentCurrency === '₽') {
        newCurrency = 'BYN';
        coefficient = 3;
    }

    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }


    e.target.innerText = newCurrency;


    for(let price of prices) { 
        price.innerText = (price.getAttribute('product-base-price') * coefficient).toFixed() + ' ' + newCurrency;
    }
})