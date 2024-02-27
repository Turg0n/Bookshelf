export function showLoader() {
  const loader = document.querySelector('#loader');
  if (loader) {
    // loader.classList.add('visible');
    loader.style.display = 'flex';
  } else {
    console.error('Loader element not found.');
  }
}

export function hideLoader() {
  const loader = document.querySelector('#loader');
  if (loader) {
    // loader.classList.remove('visible');
    loader.style.display = 'none';
  } else {
    console.error('Loader element not found.');
  }
}