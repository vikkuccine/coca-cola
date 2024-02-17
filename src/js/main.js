
generateSnow();
showSnow(true);

class BurgerMenu {
    constructor() {
        this.burgerMenu = document.querySelectorAll('.burger-menu');
        this.menu = document.querySelector('.menu__wrap');
        this.menuItem = document.querySelectorAll('.menu__item');
        this.body = document.body;
        this.openBurgerMenu();
    }
    openBurgerMenu() {
        this.burgerMenu.forEach((item) => {
            item.addEventListener('click', (event) => {
                const itemTarget = event.currentTarget
                const currentMenu = event.currentTarget.nextElementSibling
                currentMenu.classList.toggle('menu__wrap--open')
                itemTarget.classList.toggle('burger-menu--open')
                this.menuItem.forEach(item => {
                    item.classList.toggle('menu__item--fade')
                })
                this.body.classList.toggle('overflow-hidden')
            })
        })
    }
}



class AnimatedSnowflake {
    constructor() {
        this.snowflakeBlock = document.querySelector('.snowflake-block')
        this.secondScreen = document.querySelector('.presents')
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), { threshold: 0.4 });
        this.observerScreen(); 
    }

    observerScreen() {
        this.observer.observe(this.secondScreen);
    }

    handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.snowflakeBlock.style.bottom = '-315px';
            } else {
                this.snowflakeBlock.style.bottom = '20px';
            }
        });
    }
}


const burgerMenu = new BurgerMenu();
const animatedSnowflake = new AnimatedSnowflake();

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


