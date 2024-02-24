import Pagination from 'tui-pagination';

let paginationOptions   =   {
    totalItems: 500,
    itemsPerPage: 5,
    visiblePages: 5
};

const LOCAL_STORAGE_NAME = 'ShoppingListLocalStorage';
let currentPage =   1;








//Функції

function setPaginationOptions(itemsPerPage=5,visiblePages=5){
    
    let arrayShoppingList   =   window.localStorage.getItem(LOCAL_STORAGE_NAME);

    if (arrayShoppingList==null){
        paginationOptions.totalItems    =   0;
        paginationOptions.visiblePages  =   0;
    } else {
        let jsonArrayShoppingList   =   JSON.parse(arrayShoppingList);

        paginationOptions.totalItems    =   jsonArrayShoppingList.length;
        paginationOptions.itemsPerPage  =   itemsPerPage;
        paginationOptions.visiblePages  =   visiblePages;
    }
}



function getShoppingList(){

    let arrayShoppingList   =   JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_NAME));
    
    

}



//Єкспортування
export {getShoppingList};


// --------------------------------------------------TEST data----------------------------------------------------

function set_Test_ShoppingList() {
let testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(testArray));
}

set_Test_ShoppingList();
// --------------------------------------------------run----------------------------------------------------





setPaginationOptions();
var pagination = new Pagination('pagination-list', paginationOptions);

pagination.on('beforeMove', function(eventData) {
    // return confirm('Go to page ' + eventData.page + '?');
});

pagination.on('afterMove', function(eventData) {
    currentPage =   eventData.page;
    getShoppingList();
});

getShoppingList();