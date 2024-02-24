import Pagination from 'tui-pagination';


let paginationOptions   =   {
    totalItems: 500,
    itemsPerPage: 5,
    visiblePages: 5
};

const LOCAL_STORAGE_NAME = 'ShoppingListLocalStorage';
let currentPage =   1;








//Функції

function setPaginationOptions(itemsPerPage,visiblePages){
    
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
    
    let arrayShoppingList   =   window.localStorage.getItem(LOCAL_STORAGE_NAME);
    let resultArray =   [];
    
    if (arrayShoppingList!==null) {

    arrayShoppingList     =   JSON.parse(arrayShoppingList);
    let indexFrom   =   paginationOptions.itemsPerPage*currentPage-paginationOptions.itemsPerPage;

    console.log(indexFrom,paginationOptions.itemsPerPage,arrayShoppingList);
    
    resultArray   =   arrayShoppingList.slice(indexFrom,indexFrom+paginationOptions.itemsPerPage);

    }

// console.log(resultArray);
return resultArray;

}



//Єкспортування функції отримимання данних через пагінацію
export {getShoppingList};


// --------------------------------------------------TEST data----------------------------------------------------

function set_Test_ShoppingList() {
let testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(testArray));
}

set_Test_ShoppingList();
// --------------------------------------------------run----------------------------------------------------





setPaginationOptions(5,5);
var pagination = new Pagination('pagination-list', paginationOptions);

pagination.on('beforeMove', function(eventData) {
    // return confirm('Go to page ' + eventData.page + '?');
});

pagination.on('afterMove', function(eventData) {
    currentPage =   eventData.page;
    getShoppingList();
});

getShoppingList();