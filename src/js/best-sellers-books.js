import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { showLoader, hideLoader } from './Loader.js';

import { getAllBooks, getBooksByCategory } from './serviceBooks';

const mainWrapper = document.querySelector(".main-wrapper");
mainWrapper.addEventListener('click', showMoreByCategory);
const scrollBtn = document.querySelector('.scroll-to-top-btn');
scrollBtn.addEventListener('click', scrollToTop);
window.addEventListener('scroll', trackScroll);

// LOADER //
// function showLoader() {
//   mainWrapper.insertAdjacentHTML('afterbegin', '<div id="loader"></div>');
//   const loader = document.querySelector('#loader');
//   loader.classList.add('loader');
// }

// function hideLoader() {
//   const loader = document.querySelector('#loader');
//   loader.classList.remove('loader');
// }

// SCROLL //
function scrollToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

function trackScroll() {
  const offset = window.pageYOffset;
  const coordinates = document.documentElement.clientHeight;
  if (offset > coordinates) {
    scrollBtn.classList.add('scroll-to-top-btn-show');
  } else {
    scrollBtn.classList.remove('scroll-to-top-btn-show');
  }
}

// RENDER BOOKS //
async function renderAllBooks() {
  cleanMainWrapper();
  showLoader();
  try {
    const allBooks = await getAllBooks();
    renderBooksBlocks(allBooks);
  } catch (error) {
      iziToast.error({
        title: '',
        message: 'Whoops! Somethink went wrong',
        position: "topRight",
        });
  } finally {
    hideLoader();
  }
}

renderAllBooks()

async function showMoreByCategory(event) {
  if (!event.target.classList.contains('see-more-btn')) {
    return;
  }

  cleanMainWrapper();
  showLoader();
  const category = event.target.dataset.category;

  try {
    const booksByCategory = await getBooksByCategory(category);
    renderBooksList(booksByCategory);
  } catch (error) {
      iziToast.error({
        title: '',
        message: 'Sorry, we couldn\'t find any books in this category',
        position: "topRight",
        });
  } finally {
    hideLoader();
  }
}

// MARKUP //
function bookCardTemplate(book, liClass) {
    return `<li class="${liClass}" data-id="${book._id}">
                 <div class="overlay-box">
                   <img
                     class="book-img"
                     src="${book.book_image}"
                     alt="${book.title}"
                     width="180"
                     height="256"
                   />
                   <p class="overlay-text">Quick View</p>
                 </div>
                 <div class="book-info">
                   <h3 class="book-title">${book.title}</h3>
                   <p class="book-author">${book.author}</p>
                 </div>
               </li>`;
}

function booksBlockTemplate(collection) {
    const bookCards = collection.books.map(book => bookCardTemplate(book, 'best-sellers-list-item')).join('');
    return `<div class="best-sellers-container">
             <h2 class="category-title">${collection.list_name}</h2>
             <ul class="best-sellers-list">${bookCards}</ul>
             <div class="see-more-btn-wrapper">
               <button class="see-more-btn" type="button" data-category="${collection.list_name}">See more</button>
             </div>
           </div>`
}

function booksList(books) {
    const bookCards = books.map(book => bookCardTemplate(book, 'category-list-item')).join('');
    return `<ul class="category-list">${bookCards}</ul>`
}

function addBooksBlocks(collection) {
  mainWrapper.insertAdjacentHTML('beforeend', booksBlockTemplate(collection))
}

function addBooksList(books) {
  mainWrapper.insertAdjacentHTML('beforeend', booksList(books));
}

function renderMainBooksHeader() {
    mainWrapper.insertAdjacentHTML('afterbegin',
        `<h1 class="main-title">
            Best Sellers <span class="accent-text">Books</span>
        </h1>`
  );
}

function renderCategoryName(booksCollection) {
  const words = booksCollection[0].list_name.split(' ');
  const lastWord = words.pop();
  const categoryName = `${words.join(' ')} <span class="accent-text">${lastWord}</span>`;
  mainWrapper.insertAdjacentHTML('afterbegin', `<h1 class="main-title">${categoryName}</h1>`);
}

function cleanMainWrapper() {
  mainWrapper.innerHTML = '';
}

function renderBooksBlocks(collection) {
  collection.forEach(addBooksBlocks);
  renderMainBooksHeader();
}

  function renderBooksList(books) {
    addBooksList(books);
    renderCategoryName(books);  
}

export { renderAllBooks, showMoreByCategory, mainWrapper };
