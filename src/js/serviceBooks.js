import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import { showLoader, hideLoader } from './Loader.js';

async function getAllCategories() {
  try {
    showLoader();
    const categories = await axios('https://books-backend.p.goit.global/books/category-list');
    hideLoader();
    return categories.data;
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: '',
      message: 'Categories not found',
      position: "topRight",
    });
  }
}

async function getBooksByCategory(category) {
  try {
    showLoader();
    const response = await axios(`https://books-backend.p.goit.global/books/category?category=${category}`);
    hideLoader();
    return response.data;
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: '',
      message: 'Failed server request',
      position: "topRight",
    });
  }
}

async function getBookById(bookId) {
  try {
    showLoader();
    const bookInfo = await axios(`https://books-backend.p.goit.global/books/${bookId}`);
    hideLoader();
    return bookInfo.data;
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: '',
      message: 'Book not found',
      position: "topRight",
    });
  }
}

async function getAllBooks() {
  try {
    showLoader();
    const response = await axios('https://books-backend.p.goit.global/books/top-books');
    hideLoader();
    return response.data; 
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: '',
      message: 'Failed server request',
      position: "topRight",
    });
  }
}

export { getAllBooks, getAllCategories, getBookById, getBooksByCategory };