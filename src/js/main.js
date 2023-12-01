generateSnow();
showSnow(true);


const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu__wrap');
const menuItem = document.querySelectorAll('.menu__item');

burgerMenu.addEventListener('click', ()=> {
    menu.classList.toggle('menu__wrap--open')
    menuItem.forEach(item =>{
        item.classList.toggle('menu__item--fade')
    })
})