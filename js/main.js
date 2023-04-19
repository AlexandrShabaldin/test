let menuBtn = document.querySelector('.nav__menu-btn');
let menu = document.querySelector('.nav');
const body = document.body;
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  body.classList.toggle('noscroll')
})

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".saySwiper", {
  navigation: {
    nextEl: ".say-button-next",
    prevEl: ".say-button-prev",
  },
});

var swiper = new Swiper(".donatingSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".donating__button-next",
    prevEl: ".donating__button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
