let button = document.querySelectorAll('.button');

let showMobileMenu = document.querySelector('.header__menu.button:first-child');
const clientWidth = document.body.clientWidth;

if (clientWidth < 1440) {
  showMobileMenu.addEventListener('click', function () {
    let overlay = document.querySelector('.overlay');
    let mobileMenu = document.querySelector('.mobile-menu');

    let header = document.querySelector('.header');

    let services__body = document.querySelector('.services__body');
    mobileMenu.classList.add('mobile-menu--visible');
    overlay.classList.add('mobile-menu--visible');

    header.classList.add('header--opacity-half');
    services__body.classList.add('header--opacity-half');
    overlay.classList.remove('overlay--hidden');
    hideMobileMenu(mobileMenu, services__body, header);
  });
}

let hideMobileMenu = function (mobileMenu, services__body, header) {
  let overlay = document.querySelector('.overlay');
  let mobileMenu__exit = document.querySelector('.mobile-menu__exit');
  overlay.addEventListener('click', function (evt) {
    console.log('Chimit');
    mobileMenu.classList.remove('mobile-menu--visible');
    header.classList.remove('header--opacity-half');
    services__body.classList.remove('header--opacity-half');
    overlay.classList.add('overlay--hidden');
  });
  mobileMenu__exit.addEventListener('click', function (evt) {
    mobileMenu.classList.remove('mobile-menu--visible');

    if (
      document.querySelector('.feedback.mobile-menu--visible') !== null ||
      document.querySelector('.order-call.mobile-menu--visible') !== null
    ) {
      console.log(document.querySelector('.feedback.mobile-menu--visible'));
      header.classList.add('header--opacity-half');
      services__body.classList.add('header--opacity-half');
    } else {
      header.classList.remove('header--opacity-half');
      services__body.classList.remove('header--opacity-half');
      overlay.classList.remove('overlay--hidden');
    }
  });
};
