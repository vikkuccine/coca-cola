generateSnow();
showSnow(true);


const burgerMenu = document.querySelectorAll('.burger-menu');
const menu = document.querySelector('.menu__wrap');
const menuItem = document.querySelectorAll('.menu__item');
const body = document.body

burgerMenu.forEach((item) => {
    item.addEventListener('click', (event) => {
        const itemTarget = event.currentTarget
        const currentMenu = event.currentTarget.nextElementSibling
        currentMenu.classList.toggle('menu__wrap--open')
        itemTarget.classList.toggle('burger-menu--open')
        menuItem.forEach(item => {
            item.classList.toggle('menu__item--fade')
        })
        body.classList.toggle('overflow-hidden')
    })
})




const clientsSwiper = new Swiper('.presents__swiper', {
    slidesPerView: 'auto',
    loop: false,
    allowTouchMove: false,
    effect: 'fade',
    speed: 1000,
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<div class="presents-list__item ${className}">
                        <img src="./images/presents-${(index + 1)}.png" alt=""> 
                     </div>`
        },
    }
})



document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.js-choice');
    const choices = new Choices(element, {
        searchEnabled: false,
        choices: [
            {
                value: 'Girl',
                label: 'Girl',
                selected: false,
            },
            {
                value: 'Boy',
                label: 'Boy',
                selected: false,
            },
        ]
    })
})


const snowflakeBlock = document.querySelector('.snowflake-block')
const secondScreen = document.querySelector('.presents')

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.4 });

observer.observe(secondScreen);

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            snowflakeBlock.style.bottom = '-315px';
        } else {
            snowflakeBlock.style.bottom = '20px';
        }
    });
}