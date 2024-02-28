
export function showLoader() {
  const loader = document.querySelectorAll('#loader');
  if (loader) {
  loader.forEach(node => {
    console.log(node);
    node.style.display = 'flex';
  });
} else {
  // console.error('Loader element not found.');
}

}

export function hideLoader() {
  const loader = document.querySelectorAll('#loader');
  if (loader) {
  loader.forEach(node => {
    console.log(node);
    node.style.display = 'none';
  });
} else {
  // console.error('Loaders element not found.');
}

}