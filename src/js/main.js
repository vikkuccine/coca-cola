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


function pageScroll() {
	"use strict";
	var pnls = document.querySelectorAll('.panel').length,
		scdir, hold = false;

	function _scrollY(obj) {
		var slength, plength, pan, step = 100,
			vh = window.innerHeight / 100,
			vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
		if ((this !== undefined && this.id === 'container') || (obj !== undefined && obj.id === 'container')) {
			pan = this || obj;
			plength = parseInt(pan.offsetHeight / vh);
		}
		if (pan === undefined) {
			return;
		}
		plength = plength || parseInt(pan.offsetHeight / vmin);
		slength = parseInt(pan.style.transform.replace('translateY(', ''));
		if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
			slength = slength - step;
		} else if (scdir === 'down' && slength < 0) {
			slength = slength + step;
		} else if (scdir === 'top') {
			slength = 0;
		}
		if (hold === false) {
			hold = true;
			pan.style.transform = 'translateY(' + slength + 'vh)';
			setTimeout(function() {
				hold = false;
			}, 1000);
		}
	}

	function _swipe(obj) {
		var swdir,
			sX,
			sY,
			dX,
			dY,
			threshold = 100,
			/*[min distance traveled to be considered swipe]*/
			slack = 50,
			/*[max distance allowed at the same time in perpendicular direction]*/
			alT = 500,
			/*[max time allowed to travel that distance]*/
			elT, /*[elapsed time]*/
			stT; /*[start time]*/
		obj.addEventListener('touchstart', function(e) {
			var tchs = e.changedTouches[0];
			swdir = 'none';
			sX = tchs.pageX;
			sY = tchs.pageY;
			stT = new Date().getTime();
		}, false);

		obj.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);

		obj.addEventListener('touchend', function(e) {
			var tchs = e.changedTouches[0];
			dX = tchs.pageX - sX;
			dY = tchs.pageY - sY;
			elT = new Date().getTime() - stT;
			if (elT <= alT) {
				if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
					swdir = (dX < 0) ? 'left' : 'right';
				} else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
					swdir = (dY < 0) ? 'up' : 'down';
				}
				if (obj.id === 'container') {
					if (swdir === 'up') {
						scdir = swdir;
						_scrollY(obj);
					} else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
						scdir = swdir;
						_scrollY(obj);

					}
					e.stopPropagation();
				}
			}
		}, false);
	}

	var container = document.getElementById('container');
	container.style.transform = 'translateY(0)';
	container.addEventListener('wheel', function(e) {
		if (e.deltaY < 0) {
			scdir = 'down';
		}
		if (e.deltaY > 0) {
			scdir = 'up';
		}
		e.stopPropagation();
	});
	container.addEventListener('wheel', _scrollY);
	_swipe(container);
	
};

pageScroll();