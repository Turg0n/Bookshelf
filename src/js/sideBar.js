import {supportItems} from './support-items';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const funds = document.querySelector('.swiper-wrapper');
function fundMarkeup(arr){
    const markup = arr.map((el, index) => {
        const { title, url, img } = el;
        const orderNumber = ('0' + (index + 1)).slice(-2);
        return `<li class="funds-elm swiper-slide">
                <a class="funds-link" href="${url}" target="_blank" rel="noopener noreferrer">
                    <div class="num-order">${orderNumber}</div>
                <img src="./../img/support/${img}.png" alt="${title}" srcset="./../img/support/${img}.png 1x, /../img/support/${img}@2x.png 2x">
            </a> </li>`
    }).join('');
    funds.insertAdjacentHTML('beforeend', markup)
}

fundMarkeup(supportItems);



//swiper
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const swiper = new Swiper('.support-swiper', {
  direction: 'vertical',
  slidesPerView: 6,
  slidesPerGroup: 6,
  allowTouchMove: true,
  spaceBetween: '20px',

  modules: [Navigation],
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
    disabledClass: 'none',
  },
  on: {
    slideChange: function () {
      if (this.activeIndex === 0) {
        prevBtn.classList.add('swiper-button-hidden');
        nextBtn.classList.remove('swiper-button-hidden');
      } else {
        prevBtn.classList.remove('swiper-button-hidden');
        nextBtn.classList.add('swiper-button-hidden');
      }
    },
  },
});