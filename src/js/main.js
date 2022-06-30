  

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
 

const Swiper = new Swiper('.swiper', {
  loop: false,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});