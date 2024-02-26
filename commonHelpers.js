import{a as L,b as w}from"./assets/apple-books-4f196d85.js";import{a as y,i as c,P as j}from"./assets/vendor-99c9b1bc.js";document.querySelector(".js-open-menu");document.querySelector(".js-close-menu");document.querySelector(".js-modal");new BroadcastChannel("modal-channel");const H=document.querySelector(".div-theme"),S=document.querySelector(".span-theme"),B=document.querySelector("body");let a=!1;H.addEventListener("change",()=>{a?(a=!1,localStorage.setItem("userTheme","light")):(a=!0,localStorage.setItem("userTheme","dark")),x()});function x(){try{a=localStorage.getItem("userTheme")==="dark"}catch{a=!1}const e=document.querySelector(".header-logo-icon"),t=document.querySelector(".header-logo-icon1");a?(B.classList.add("dark-theme"),S.style.left="20px",e.style.width="0px",t.style.width="109px"):(B.classList.remove("dark-theme"),S.style.left="2px",t.style.width="0px",e.style.width="109px")}x();function d(){const e=document.querySelector("#loader");e?e.classList.add("visible"):console.error("Loader element not found.")}function s(){const e=document.querySelector("#loader");e?e.classList.remove("visible"):console.error("Loader element not found.")}async function E(e){try{d();const t=await y(`https://books-backend.p.goit.global/books/category?category=${e}`);return s(),t.data}catch{s(),c.error({title:"",message:"Failed server request",position:"topRight"})}}async function P(e){try{d();const t=await y(`https://books-backend.p.goit.global/books/${e}`);return s(),t.data}catch{s(),c.error({title:"",message:"Book not found",position:"topRight"})}}async function z(){try{d();const e=await y("https://books-backend.p.goit.global/books/top-books");return s(),e.data}catch{s(),c.error({title:"",message:"Failed server request",position:"topRight"})}}const q=document.querySelector(".nav-categories-list");async function N(){const{data:e}=await y.get("https://books-backend.p.goit.global/books/category-list");return e}const R=async()=>{try{const e=await N();q.innerHTML=await J(e),document.querySelectorAll(".nav-category-item").forEach(o=>{o.addEventListener("click",l=>{const v=document.querySelector(".nav-category-item.active");v&&v.classList.remove("active"),l.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};R();q.addEventListener("click",D);function D(e){e.target.dataset.id&&E(e)}function J(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}const W=document.querySelector(".main-wrapper"),g=document.getElementById("bookModal"),h=document.getElementById("bookModalTitle"),Y=document.getElementById("bookModalText"),r=document.getElementById("addToShoppingList"),F=document.querySelector(".modal-close"),m=document.getElementById("modalADText");let n=[],p=[],M={};const G="";function Q(e){P.fetchBookById(e).then(t=>{h.innerText=t.title,t.description||(t.description=G),M={book_image:t.book_image,title:t.title,author:t.author,description:t.description,amazonLinks:t.buy_links[0].url,appleLinks:t.buy_links[1].url},h.dataset.bookId=e,Y.innerHTML=`<img src="${t.book_image}" alt="${t.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${t.title}</h2>
                <h3 class="book-modal-author">${t.author}</h3>
                <p class="book-modal-desc">${t.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${t.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${L} 1x, ${amazon2x} 2x" src="${L}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${t.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${w} 1x, ${applebooks2x} 2x" src="${w}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,n.includes(e)?(r.innerText="Remove from the shopping list",m.style.display="block"):(r.innerText="Add to shopping list",m.style.display="none"),g.classList.add("show"),document.body.style.overflow="hidden"})}function k(){g.classList.remove("show"),document.body.style.overflow=""}function V(e){if(!e){console.error("Invalid bookId:",e);return}const t=n.indexOf(e);t===-1?(n.push(e),p.push(M)):(n.splice(t,1),p.splice(t,1)),localStorage.setItem("shoppingList",JSON.stringify(n)),localStorage.setItem("shoppingCard",JSON.stringify(p)),t===-1?(r.innerText="Remove from the shopping list",m.style.display="block"):(r.innerText="Add to shopping list",m.style.display="none")}r.addEventListener("click",()=>{const e=h.dataset.bookId;V(e)});g.addEventListener("click",e=>{e.target===g&&k()});document.addEventListener("keydown",e=>{e.key==="Escape"&&k()});W.addEventListener("click",e=>{const t=e.target.closest(".book-link");if(t){e.preventDefault();const o=t.dataset.id;Q(o)}});const T=localStorage.getItem("shoppingList"),$=localStorage.getItem("shoppingCard");T&&(n=JSON.parse(T));$&&(p=JSON.parse($));F.addEventListener("click",k);const K=document.querySelector(".backdrop"),C=document.querySelector(".js-open-menu");C.insertAdjacentHTML("afterbegin",`<svg class="icon-close visually-hidden" width="28" height="28">
    <use href="../img/sprite.svg#icon-x-close"></use>
  </svg>`);const U=document.querySelector(".icon-close"),X=document.querySelector(".header-burger-icon");function Z(){K.classList.toggle("show__mob-menu"),U.classList.toggle("visually-hidden"),X.classList.toggle("visually-hidden")}C.addEventListener("click",Z);let u={totalItems:0,itemsPerPage:0,visiblePages:0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-page-btn-moveButton"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-page-btn-disabledMoveButton tui-is-disabled"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-page-btn-moreButton tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};const ee="ShoppingListLocalStorage";document.getElementById("pagination-list");function te(e,t){let o=window.localStorage.getItem(ee);if(o!==null){let l=JSON.parse(o);u.totalItems=l.length,u.itemsPerPage=e,u.visiblePages=t}}te(3,2);let I=new j("pagination-list",u);I.on("beforeMove",function(e){});I.on("afterMove",function(e){});const i=document.querySelector(".main-wrapper");i.addEventListener("click",ae);const f=document.querySelector(".scroll-to-top-btn");f.addEventListener("click",oe);window.addEventListener("scroll",se);function oe(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}function se(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?f.classList.add("scroll-to-top-btn-show"):f.classList.remove("scroll-to-top-btn-show")}async function ne(){A(),d();try{const e=await z();ue(e)}catch{c.error({title:"",message:"Whoops! Somethink went wrong",position:"topRight"})}finally{s()}}ne();async function ae(e){if(!e.target.classList.contains("see-more-btn"))return;A(),d();const t=e.target.dataset.category;try{const o=await E(t);ge(o)}catch{c.error({title:"",message:"Sorry, we couldn't find any books in this category",position:"topRight"})}finally{s()}}function _(e,t){return`<li class="${t}" data-id="${e._id}">
                 <div class="overlay-box">
                   <img
                     class="book-img"
                     src="${e.book_image}"
                     alt="${e.title}"
                     width="180"
                     height="256"
                   />
                   <p class="overlay-text">Quick View</p>
                 </div>
                 <div class="book-info">
                   <h3 class="book-title">${e.title}</h3>
                   <p class="book-author">${e.author}</p>
                 </div>
               </li>`}function ie(e){const t=e.books.map(o=>_(o,"best-sellers-list-item")).join("");return`<div class="best-sellers-container">
             <h2 class="category-title">${e.list_name}</h2>
             <ul class="best-sellers-list">${t}</ul>
             <div class="see-more-btn-wrapper">
               <button class="see-more-btn" type="button" data-category="${e.list_name}">See more</button>
             </div>
           </div>`}function le(e){return`<ul class="category-list">${e.map(o=>_(o,"category-list-item")).join("")}</ul>`}function re(e){i.insertAdjacentHTML("beforeend",ie(e))}function ce(e){i.insertAdjacentHTML("beforeend",le(e))}function de(){i.insertAdjacentHTML("afterbegin",`<h1 class="main-title">
            Best Sellers <span class="accent-text">Books</span>
        </h1>`)}function pe(e){const t=e[0].list_name.split(" "),o=t.pop(),l=`${t.join(" ")} <span class="accent-text">${o}</span>`;i.insertAdjacentHTML("afterbegin",`<h1 class="main-title">${l}</h1>`)}function A(){i.innerHTML=""}function ue(e){e.forEach(re),de()}function ge(e){ce(e),pe(e)}const b=document.querySelector(".back-top");window.addEventListener("scroll",me);b.addEventListener("click",O);function me(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?b.classList.add("back-top-show"):b.classList.remove("back-top-show")}function O(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(O,0))}
//# sourceMappingURL=commonHelpers.js.map
