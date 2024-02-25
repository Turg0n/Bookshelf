const goTopBtn = document.querySelector(".back-top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {

  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add("back-top-show");
  } else {
    goTopBtn.classList.remove("back-top-show");
  }
}

function goTop() {

  if (window.pageYOffset > 0) {
    window.scrollBy(0, -25);
    setTimeout(goTop, 0); 
  }
}