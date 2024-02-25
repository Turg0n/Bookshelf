const mobMenu = () => {
  const backDropMenu = document.querySelector('.backdrop');

  console.log(backDropMenu);

  const burgerButton = document.querySelector('.');

  console.log(burgerButton);

  const closeButton = document.querySelector('.');

  function openMenu() {
    backDropMenu.classList.toggle('show__mob-menu');
  }

  burgerButton.addEventListener('click', openMenu);

  closeButton.addEventListener('click', openMenu);
};

export default mobMenu;
