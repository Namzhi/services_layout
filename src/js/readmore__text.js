let readmore__text = document.querySelector('.readmore__text');
readmore__text.addEventListener('click', function () {
  document
    .querySelector('.description-block__text')
    .classList.toggle('description-block__text--hidden');
  readmore__text.classList.toggle('readmore__text--expand');
});

const clientWidth = document.body.clientWidth;
