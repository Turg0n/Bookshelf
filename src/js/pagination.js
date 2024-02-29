import Pagination from 'tui-pagination'; /* ES6 */
import 'tui-pagination/dist/tui-pagination.css'

let pagination;
let myCurrentPage = 1;
let resultArray =   [];

let paginationOptions   =   {
    totalItems: 0,
    itemsPerPage: 0,
    visiblePages: 0,
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-page-btn-moveButton">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-page-btn-disabledMoveButton tui-is-disabled">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-page-btn-moreButton tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
          '</a>'
      }
};

const LOCAL_STORAGE_NAME = 'shoppingCard';

const PAGINATION_DEV_LIST = document.getElementById('pagination-list');







//Функції

function setPaginationOptions(itemsPerPage,visiblePages){
    
    let arrayShoppingList   =   window.localStorage.getItem(LOCAL_STORAGE_NAME);

    if (arrayShoppingList!==null){
        let jsonArrayShoppingList   =   JSON.parse(arrayShoppingList);

        paginationOptions.totalItems    =   jsonArrayShoppingList.length;
        paginationOptions.itemsPerPage  =   itemsPerPage;
        paginationOptions.visiblePages  =   visiblePages;
    }
}



function getShoppingList(){
    
    let arrayShoppingList   =   window.localStorage.getItem(LOCAL_STORAGE_NAME);
    let indexFrom = 0;
    
    if (arrayShoppingList==null || JSON.parse(arrayShoppingList).length == 0) {
        PAGINATION_DEV_LIST.style.display = 'none';  
    } else {
        
    arrayShoppingList     =   JSON.parse(arrayShoppingList);
    indexFrom   =   paginationOptions.itemsPerPage*myCurrentPage-paginationOptions.itemsPerPage;
    resultArray   =   arrayShoppingList.slice(indexFrom,indexFrom+paginationOptions.itemsPerPage);
    PAGINATION_DEV_LIST.style.display = 'block';  
    }

return resultArray;

}


//Єкспортування функції отримимання данних через пагінацію
export {getShoppingList, setPaginationOptions};


// // --------------------------------------------------TEST data----------------------------------------------------

// function set_Test_ShoppingList() {
// let testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
// // let testArray = [];
// localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(testArray));
// }

// set_Test_ShoppingList();




// // --------------------------------------------------use----------------------------------------------------


if (PAGINATION_DEV_LIST) {



  setPaginationOptions(3, 2);
  let pagination = new Pagination('pagination-list', paginationOptions);

  pagination.on('afterMove', function (eventData) {
    myCurrentPage = eventData.page;
      resultArray = getShoppingList();
      return resultArray;
  });

  //  getShoppingList();
}