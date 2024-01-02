generateSnow();
showSnow(true);


const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu__wrap');
const menuItem = document.querySelectorAll('.menu__item');
const body = document.body

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__wrap--open')
    menuItem.forEach(item => {
        item.classList.toggle('menu__item--fade')
    })
    body.classList.toggle('overflow-hidden')
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


document.addEventListener("DOMContentLoaded", function () {
	var scrollLinks = document.querySelectorAll('.scroll-item');
  
	scrollLinks.forEach(function (scrollLink) {
	  scrollLink.addEventListener('click', function (e) {
		e.preventDefault();
  
		var targetId = this.getAttribute('id');
		var targetElement = document.getElementById(targetId);
  
		if (targetElement) {
		  var offset = targetElement.offsetTop;
  
		  window.scrollTo({
			top: offset,
			behavior: 'smooth'
		  });
		}
	  });
	});
  });