import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

async function getAllCategories() {
  try {
    const categories = await axios('https://books-backend.p.goit.global/books/category-list');
    return categories.data;
  } catch (error) {
      iziToast.error({
        title: '',
        message: 'Categories not found',
        position: "topRight",
        });
  }
}

async function getBooksByCategory(category) {
  try {
    const response = await axios(`https://books-backend.p.goit.global/books/category?category=${category}`);
    return response.data;
  } catch (error) {
      iziToast.error({
        title: '',
        message: 'Failed server request',
        position: "topRight",
        });
  }
}

async function getBookById(bookId) {
  try {
    const bookInfo = await axios(`https://books-backend.p.goit.global/books/${bookId}`);
    return bookInfo.data;
  } catch (error) {
      iziToast.error({
        title: '',
        message: 'Book not found',
        position: "topRight",
        });
  }
}

async function getAllBooks() {
    try {
        const response = await axios('https://books-backend.p.goit.global/books/top-books');
        return response.data; 
    } catch (error) {
        iziToast.error({
        title: '',
        message: 'Failed server request',
        position: "topRight",
        });
    }
}

export { getAllBooks, getAllCategories, getBookById, getBooksByCategory };