let buttons = document.querySelectorAll('.languages__button');
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let activeButton = document.querySelector('.languages__button--clicked');
    if (activeButton) {
      activeButton.classList.remove('languages__button--clicked');
    }
    buttons[i].classList.add('languages__button--clicked');
  });
}
