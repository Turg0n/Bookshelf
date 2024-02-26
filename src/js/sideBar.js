import {supportIrems} from './support-item';

function fundMarkeup(arr){
    const markup = arr.map((el, index) => {
        const { title, url, img } = el;
        const orderNumber = ('0' + (index + 1)).slice(-2);
        return `<li class="funds-elm">
                <a class="funds-link" href="${url}" target="_blank" rel="noopener noreferrer">
                    <div class="num-order">${orderNumber}</div>
                <img src="./img/support/${img}.png" alt="${title}" srcset="./img/support/${img}.png 1x, ./img/support/${img}@2x.png 2x">
            </a> </li>`
    }).join('');
    const funds = document.querySelector('.funds');
    funds.insertAdjacentHTML('beforeend', markup)
}

fundMarkeup(supportIrems);
