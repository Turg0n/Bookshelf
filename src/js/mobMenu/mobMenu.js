const mobMenu = () => {
  const backDropMenu = document.querySelector('.backdrop');

  console.log(backDropMenu);

  const burgerButton = document.querySelector('.');

  console.log(burgerButton);

  const closeButton = document.querySelector('.');
  console.log(closeButton);

  function openMenu() {
    mobileMenu.classList.toggle('show__mob');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
  }

  burgerButton.addEventListener('click', openMenu);

  closeButton.addEventListener('click', closeMenu);
};

export default mobMenu;
