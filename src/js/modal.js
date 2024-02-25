// import api from './serviceBooks';
import amazon from '../images/amazon.png';
import applebooks from '../images/apple-books.png';

const modal = document.getElementById('bookModal');
const modalTitle = document.getElementById('bookModalTitle');
const modalText = document.getElementById('bookModalText');
const addToShoppingListBtn = document.getElementById('addToShoppingList');
const modalCloseBtn = document.querySelector('.modal-close');
const addTextModal = document.getElementById('modalADText');

let shoppingList = [];
let shoppingCard = [];
let firstCard = {};
const descEmpty = '';
function openModal(bookId) {
    api.fetchBookById(bookId).then(book => {
    modalTitle.innerText = book.title;
    if(!book.description){
        book.description=descEmpty;
    }
    firstCard = {
        book_image: book.book_image,
        title: book.title,
        author: book.author,
        description: book.description,
        amazonLinks: book.buy_links[0].url,
        appleLinks: book.buy_links[1].url,
    };
    modalTitle.dataset.bookId = bookId; // dataset для збереження bookId
    modalText.innerHTML = `<img src="${book.book_image}" alt="${book.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${book.title}</h2>
                <h3 class="book-modal-author">${book.author}</h3>
                <p class="book-modal-desc">${book.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${book.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${amazon} 1x, ${amazon2x} 2x" src="${amazon}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${book.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${applebooks} 1x, ${applebooks2x} 2x" src="${applebooks}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `;
    
    // Перевірка, книга в списку покупок
    if (shoppingList.includes(bookId)) {
        addToShoppingListBtn.innerText = 'Remove from the shopping list';
        addTextModal.style.display = 'block';
    } else {
        addToShoppingListBtn.innerText = 'Add to shopping list';
        addTextModal.style.display = 'none';
    }

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; 
    });
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; 
}

function toggleShoppingList(bookId) {
    if (!bookId) {
    console.error('Invalid bookId:', bookId);
    return;
    }
    const index = shoppingList.indexOf(bookId);
    if (index === -1) {
    shoppingList.push(bookId);
    shoppingCard.push(firstCard);
    } else {
    shoppingList.splice(index, 1);
    shoppingCard.splice(index,1);
    }

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    localStorage.setItem('shoppingCard',JSON.stringify(shoppingCard));


    if (index === -1) {
    addToShoppingListBtn.innerText = 'Remove from the shopping list';
    addTextModal.style.display = 'block';
    } else {
    addToShoppingListBtn.innerText = 'Add to shopping list';
    addTextModal.style.display = 'none';
    }
}

addToShoppingListBtn.addEventListener('click', () => {
  const currentBookId = modalTitle.dataset.bookId; // Отримати bookId з dataset
    toggleShoppingList(currentBookId);
});

modal.addEventListener('click', event => {
    if (event.target === modal) {
    closeModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
    closeModal();
    }
});
// Відкриття модалки
// "Index".bookCollectionWrapper.addEventListener('click', event => {
//     const bookLink = event.target.closest('.book-link');
//     if (bookLink) {
//     event.preventDefault();
//     const bookId = bookLink.dataset.id;
    
//     openModal(bookId);
//     }
// });

// Локалка
const savedShoppingList = localStorage.getItem('shoppingList');
const savedShoppingCard = localStorage.getItem('shoppingCard'); 
if (savedShoppingList) {
    shoppingList = JSON.parse(savedShoppingList);
}
if (savedShoppingCard) {
    shoppingCard = JSON.parse(savedShoppingCard);
}

modalCloseBtn.addEventListener('click', closeModal);
