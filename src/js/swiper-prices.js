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
new Swiper('.logo-slider-prices', {
  pagination: {
    el: '.swiper-pagination__prices',
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

let buttonShow = document.querySelector('.logo-slider-prices__showmore');
let buttonShowText = buttonShow.querySelector(
  '.logo-slider-prices__showmore-text'
);
let wrapper = document.querySelector('.logo-slider-prices__wrapper');

function show() {
  buttonShow.addEventListener('click', function (evt) {
    evt.preventDefault();

    wrapper.classList.remove('logo-slider-prices__wrapper--hidden');
    wrapper.classList.add('logo-slider-prices__wrapper--open-margin-bottom');

    buttonShowText.textContent = 'Cкрыть';

    hide();
  });
}

function hide() {
  if (buttonShowText.textContent === 'Cкрыть') {
    buttonShow.addEventListener('click', function (evt) {
      evt.preventDefault();

      wrapper.classList.add('logo-slider-prices__wrapper--hidden');
      wrapper.classList.remove(
        'logo-slider-prices__wrapper--open-margin-bottom'
      );

      buttonShowText.textContent = 'Показать все';
      show();
    });
  }
}

show();

let slidePrices__titles = document.querySelectorAll(
  '.logo-slider-prices__title'
);

for (let i = 0; i < slidePrices__titles.length; i++) {
  let slidePrices__title = slidePrices__titles[i];
  slidePrices__title.classList.add('logo-slider-prices__title--hidden');
}
