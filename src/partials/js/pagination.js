import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css'


let paginationOptions   =   {
    totalItems: 0,
    itemsPerPage: 0,
    visiblePages: 0
};

const LOCAL_STORAGE_NAME = 'ShoppingListLocalStorage';

const paginationDivList = document.getElementById('pagination-list');







//Функції

function setPaginationOptions(itemsPerPage=5,visiblePages=5){
    
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
    let resultArray =   [];
    let indexFrom = 0;
    
    if (arrayShoppingList==null || JSON.parse(arrayShoppingList).length == 0) {
        paginationDivList.style.display = 'none';  
    } else {
    arrayShoppingList     =   JSON.parse(arrayShoppingList);
    indexFrom   =   paginationOptions.itemsPerPage*pagination._currentPage-paginationOptions.itemsPerPage;
    resultArray   =   arrayShoppingList.slice(indexFrom,indexFrom+paginationOptions.itemsPerPage);
    paginationDivList.style.display = 'block';  
    }

console.log(indexFrom,paginationOptions.itemsPerPage,resultArray);

return resultArray;

}



//Єкспортування функції отримимання данних через пагінацію
// export {getShoppingList};


// --------------------------------------------------TEST data----------------------------------------------------

function set_Test_ShoppingList() {
let testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
// let testArray = [];
localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(testArray));
}

set_Test_ShoppingList();
// --------------------------------------------------run----------------------------------------------------





setPaginationOptions(5,5);
let pagination = new Pagination('pagination-list', paginationOptions);

pagination.on('beforeMove', function(eventData) {
    // return confirm('Go to page ' + eventData.page + '?');
});

pagination.on('afterMove', function(eventData) {
    getShoppingList();
});

getShoppingList();