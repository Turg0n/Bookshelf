export function showLoader() {
  const loader = document.querySelector('#loader');
  if (loader) {
    loader.classList.add('visible');
  } else {
    console.error('Loader element not found.');
  }
}

export function hideLoader() {
  const loader = document.querySelector('#loader');
  if (loader) {
    loader.classList.remove('visible');
  } else {
    console.error('Loader element not found.');
  }
}
