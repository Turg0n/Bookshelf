import icon from "./../img/sprite.svg"
const backDropMenu = document.querySelector('.backdrop');
const burgerBtn = document.querySelector('.js-open-menu');

burgerBtn.insertAdjacentHTML(
  'afterbegin',
  `<svg class="icon-close visually-hidden" width="28" height="28">
    <use href="${icon}#icon-x-close"></use>
  </svg>`
);

const closeIcon = document.querySelector('.icon-close');
const burgerIcon = document.querySelector('.header-burger-icon');

function toggleMenuOpen() {
  backDropMenu.classList.toggle('show__mob-menu');
  closeIcon.classList.toggle('visually-hidden');
  burgerIcon.classList.toggle('visually-hidden');
}

burgerBtn.addEventListener('click', toggleMenuOpen);
