import 'swiper/css/bundle';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
// Optional parameters
// direction: 'vertical',
// loop: true,

// If we need pagination
// pagination: {
//     el: '.swiper-pagination',
// },

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

// // And if we need scrollbar
// scrollbar: {
//     el: '.swiper-scrollbar',
// },

slidesPerView: 1,
slidesPerGroup: 1,
spaceBetween: 30,

initialSlide: 0,

centeredSlides: true,

resistanceRatio: 0,

breakpoints: {
    // when window width is >= 640px
    640: {
      //width: 640,
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      //width: 768,
      slidesPerView: 2,
    },
  }

});

