import axios from 'axios';
import {getBooksByCategory,} from './serviceBooks';
import { showLoader, hideLoader } from './Loader';
import {cleanMainWrapper, renderBooksList, renderAllBooks} from './best-sellers-books.js';
const category_list = document.querySelector('.nav-categories-list');

async function getCategoryList() {
  const { data } = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );
  return data;
}

const renderCategories = async () => {
  try {
    showLoader();
    const category = await getCategoryList();
    category_list.insertAdjacentHTML('beforeend', markupCategoriesList(category)); 
    const listCategory = document.querySelectorAll('.nav-category-item');
    listCategory.forEach(itemCategory => {
      itemCategory.addEventListener('click', event => {
        const ActiveCategory = document.querySelector(
          '.nav-category-item.active'
        );
        if (ActiveCategory) {
          ActiveCategory.classList.remove('active');
        }
        event.target.classList.add('active');
      });
    });
    hideLoader();
  } catch (error) {
    // console.log('Oops! Something went wrong');
    hideLoader();
  }
};

renderCategories();
category_list.addEventListener('click', checkCategory);

function checkCategory(e) {
  if (e.target.dataset.id) {
    if(e.target.dataset.id!=='all-categories'){
    showMoreByCategory(e.target.dataset.id);}
    else{
      renderAllBooks(e.target.dataset.id);
    }
  }
}

async function showMoreByCategory(event) {
  cleanMainWrapper();
  showLoader();
  
  const category = event;

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
function markupCategoriesList(categories) {
  return `${categories
          .map(
            category => `<li class="nav-category-item" data-id="${category.list_name}">
        ${category.list_name}
        </li>`
          )
          .join('')}`;
}
