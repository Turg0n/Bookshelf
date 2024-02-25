const mobMenu = () => {
  const backDropMenu = document.querySelector('.backdrop');

  const burgerButton = document.querySelector('.');

  const closeButton = document.querySelector('.');

  function openMenu() {
    backDropMenu.classList.toggle('show__mob-menu');
  }

  burgerButton.addEventListener('click', openMenu);

  closeButton.addEventListener('click', openMenu);
  console.log(backDropMenu);
};

export default mobMenu;
