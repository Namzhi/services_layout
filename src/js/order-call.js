let showOrderCall = document.querySelectorAll('.header__call');

for (let i = 0; i < showOrderCall.length; i++) {
  showOrderCall[i].addEventListener('click', function () {
    let overlay = document.querySelector('.overlay');
    let orderCall = document.querySelector('.order-call');

    let header = document.querySelector('.header');

    let services__body = document.querySelector('.services__body');
    orderCall.classList.add('mobile-menu--visible');
    overlay.classList.add('mobile-menu--visible');

    header.classList.add('header--opacity-half');
    services__body.classList.add('header--opacity-half');
    overlay.classList.remove('overlay--hidden');
    hideOrderCall(orderCall, services__body, header);
  });

  const clientWidth = document.body.clientWidth;
  let hideOrderCall = function (orderCall, services__body, header) {
    let overlay = document.querySelector('.overlay');
    let orderCall__exit = document.querySelector('.order-call__exit');
    overlay.addEventListener('click', function (evt) {
      orderCall.classList.remove('mobile-menu--visible');

      if (clientWidth >= 1440) {
        header.classList.remove('header--opacity-half');
        services__body.classList.remove('header--opacity-half');
        overlay.classList.add('overlay--hidden');
      }
    });
    orderCall__exit.addEventListener('click', function (evt) {
      orderCall.classList.remove('mobile-menu--visible');
      if (
        clientWidth >= 1440 ||
        document.querySelector('.mobile-menu.mobile-menu--visible') == null
      ) {
        header.classList.remove('header--opacity-half');
        services__body.classList.remove('header--opacity-half');
        overlay.classList.add('overlay--hidden');
      }
    });
  };
}
