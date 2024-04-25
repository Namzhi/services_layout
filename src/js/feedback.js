let showFeedback = document.querySelectorAll('.header__chat');

for (let i = 0; i < showFeedback.length; i++) {
  showFeedback[i].addEventListener('click', function () {
    let overlay = document.querySelector('.overlay');
    let Feedback = document.querySelector('.feedback');

    let header = document.querySelector('.header');

    let services__body = document.querySelector('.services__body');
    Feedback.classList.add('mobile-menu--visible');
    overlay.classList.add('mobile-menu--visible');

    header.classList.add('header--opacity-half');
    services__body.classList.add('header--opacity-half');
    overlay.classList.remove('overlay--hidden');
    hideFeedback(Feedback, services__body, header);
  });

  const clientWidth = document.body.clientWidth;

  let hideFeedback = function (Feedback, services__body, header) {
    let overlay = document.querySelector('.overlay');
    let Feedback__exit = document.querySelector('.feedback__exit');

    overlay.addEventListener('click', function (evt) {
      Feedback.classList.remove('mobile-menu--visible');

      header.classList.remove('header--opacity-half');
      services__body.classList.remove('header--opacity-half');
      overlay.classList.add('overlay--hidden');
    });
    Feedback__exit.addEventListener('click', function (evt) {
      Feedback.classList.remove('mobile-menu--visible');

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
