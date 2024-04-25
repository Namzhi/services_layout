import Swiper from 'swiper';
Swiper.use([Navigation, Pagination]);
import 'swiper/modules';

import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow
} from 'swiper/modules';
Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);
new Swiper('.logo-slider-kinds', {
  pagination: {
    el: '.swiper-pagination__kinds',
    clickable: true
  },

  slidesPerView: 'auto',
  spaceBetween: 16,
  watchOverflow: true,
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 24
    }
  }
});

let buttonShow = document.querySelector('.logo-slider-kinds__showmore');
let buttonShowText = buttonShow.querySelector(
  '.logo-slider-kinds__showmore-text'
);
let wrapper = document.querySelector('.logo-slider-kinds__wrapper');

function show() {
  buttonShow.addEventListener('click', function (evt) {
    evt.preventDefault();

    wrapper.classList.remove('logo-slider-kinds__wrapper--hidden');
    wrapper.classList.add('logo-slider-kinds__wrapper--open-margin-bottom');

    buttonShowText.textContent = 'Cкрыть';

    hide();
  });
}

function hide() {
  if (buttonShowText.textContent === 'Cкрыть') {
    buttonShow.addEventListener('click', function (evt) {
      evt.preventDefault();

      wrapper.classList.add('logo-slider-kinds__wrapper--hidden');
      wrapper.classList.remove(
        'logo-slider-kinds__wrapper--open-margin-bottom'
      );

      buttonShowText.textContent = 'Показать все';
      show();
    });
  }
}

show();
