import{a as S,b as B}from"./assets/apple-books-4f196d85.js";import{a as y,i as d,P as H}from"./assets/vendor-99c9b1bc.js";document.querySelector(".js-open-menu");document.querySelector(".js-close-menu");document.querySelector(".js-modal");new BroadcastChannel("modal-channel");const R=document.querySelector(".div-theme"),T=document.querySelector(".span-theme"),E=document.querySelector("body");let i=!1;R.addEventListener("change",()=>{i?(i=!1,localStorage.setItem("userTheme","light")):(i=!0,localStorage.setItem("userTheme","dark")),q()});function q(){try{i=localStorage.getItem("userTheme")==="dark"}catch{i=!1}const e=document.querySelector(".header-logo-icon"),t=document.querySelector(".header-logo-icon1");i?(E.classList.add("dark-theme"),T.style.left="20px",e.style.width="0px",t.style.width="109px"):(E.classList.remove("dark-theme"),T.style.left="2px",t.style.width="0px",e.style.width="109px")}q();function p(){const e=document.querySelector("#loader");e?e.classList.add("visible"):console.error("Loader element not found.")}function s(){const e=document.querySelector("#loader");e?e.classList.remove("visible"):console.error("Loader element not found.")}async function M(e){try{p();const t=await y(`https://books-backend.p.goit.global/books/category?category=${e}`);return s(),t.data}catch{s(),d.error({title:"",message:"Failed server request",position:"topRight"})}}async function J(e){try{p();const t=await y(`https://books-backend.p.goit.global/books/${e}`);return s(),t.data}catch{s(),d.error({title:"",message:"Book not found",position:"topRight"})}}async function z(){try{p();const e=await y("https://books-backend.p.goit.global/books/top-books");return s(),e.data}catch{s(),d.error({title:"",message:"Failed server request",position:"topRight"})}}const _=document.querySelector(".nav-categories-list");async function D(){const{data:e}=await y.get("https://books-backend.p.goit.global/books/category-list");return e}const W=async()=>{try{const e=await D();_.innerHTML=await Y(e),document.querySelectorAll(".nav-category-item").forEach(o=>{o.addEventListener("click",r=>{const w=document.querySelector(".nav-category-item.active");w&&w.classList.remove("active"),r.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};W();_.addEventListener("click",F);function F(e){e.target.dataset.id&&M(e)}function Y(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}const G=document.querySelector(".main-wrapper"),u=document.getElementById("bookModal"),f=document.getElementById("bookModalTitle"),V=document.getElementById("bookModalText"),c=document.getElementById("addToShoppingList"),Q=document.querySelector(".modal-close"),m=document.getElementById("modalADText");let a=[],g=[],C={};const K="The Florida governor gives his account of his achievements and shares his opinions about the political left. Read by John Pruden and the author. 8 hours, 59 minutes unabridged.";function U(e){J(e).then(t=>{f.innerText=t.title,t.description||(t.description=K),C={book_image:t.book_image,title:t.title,author:t.author,description:t.description,amazonLinks:t.buy_links[0].url,appleLinks:t.buy_links[1].url},f.dataset.bookId=e,V.innerHTML=`<img src="${t.book_image}" alt="${t.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${t.title}</h2>
                <h3 class="book-modal-author">${t.author}</h3>
                <p class="book-modal-desc">${t.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${t.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${S} 1x, src="${S}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${t.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${B} 1x, src="${B}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,a.includes(e)?(c.innerText="Remove from the shopping list",m.style.display="block"):(c.innerText="Add to shopping list",m.style.display="none"),u.classList.add("show"),document.body.style.overflow="hidden"})}function L(){u.classList.remove("show"),document.body.style.overflow=""}function X(e){if(!e){console.error("Invalid bookId:",e);return}const t=a.indexOf(e);t===-1?(a.push(e),g.push(C)):(a.splice(t,1),g.splice(t,1)),localStorage.setItem("shoppingList",JSON.stringify(a)),localStorage.setItem("shoppingCard",JSON.stringify(g)),t===-1?(c.innerText="Remove from the shopping list",m.style.display="block"):(c.innerText="Add to shopping list",m.style.display="none")}c.addEventListener("click",()=>{const e=f.dataset.bookId;X(e)});u.addEventListener("click",e=>{e.target===u&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&L()});G.addEventListener("click",e=>{const t=e.target.closest(".book-link");if(t){e.preventDefault();const o=t.dataset.id;U(o)}});const $=localStorage.getItem("shoppingList"),x=localStorage.getItem("shoppingCard");$&&(a=JSON.parse($));x&&(g=JSON.parse(x));Q.addEventListener("click",L);const Z=document.querySelector(".backdrop"),A=document.querySelector(".js-open-menu");A.insertAdjacentHTML("afterbegin",`<svg class="icon-close visually-hidden" width="28" height="28">
    <use href="//img/sprite.svg#icon-x-close"></use>
  </svg>`);const ee=document.querySelector(".icon-close"),te=document.querySelector(".header-burger-icon");function oe(){Z.classList.toggle("show__mob-menu"),ee.classList.toggle("visually-hidden"),te.classList.toggle("visually-hidden")}A.addEventListener("click",oe);let h=[],n={totalItems:0,itemsPerPage:0,visiblePages:0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-page-btn-moveButton"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-page-btn-disabledMoveButton tui-is-disabled"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-page-btn-moreButton tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};const O="ShoppingListLocalStorage",b=document.getElementById("pagination-list");function se(e,t){let o=window.localStorage.getItem(O);if(o!==null){let r=JSON.parse(o);n.totalItems=r.length,n.itemsPerPage=e,n.visiblePages=t}}function I(){let e=window.localStorage.getItem(O),t=0;return e==null||JSON.parse(e).length==0?b.style.display="none":(e=JSON.parse(e),t=n.itemsPerPage*pagination._currentPage-n.itemsPerPage,h=e.slice(t,t+n.itemsPerPage),b.style.display="block"),h}if(b){se(3,2);let e=new H("pagination-list",n);e.on("beforeMove",function(t){}),e.on("afterMove",function(t){h=I()}),h=I()}else console.error("Element with id 'pagination-list' not found.");const l=document.querySelector(".main-wrapper");l.addEventListener("click",le);const k=document.querySelector(".scroll-to-top-btn");k.addEventListener("click",ne);window.addEventListener("scroll",ae);function ne(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}function ae(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?k.classList.add("scroll-to-top-btn-show"):k.classList.remove("scroll-to-top-btn-show")}async function ie(){j(),p();try{const e=await z();me(e)}catch{d.error({title:"",message:"Whoops! Somethink went wrong",position:"topRight"})}finally{s()}}ie();async function le(e){if(!e.target.classList.contains("see-more-btn"))return;j(),p();const t=e.target.dataset.category;try{const o=await M(t);he(o)}catch{d.error({title:"",message:"Sorry, we couldn't find any books in this category",position:"topRight"})}finally{s()}}function P(e,t){return`<li class="${t} book-link" data-id="${e._id}">
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
               </li>`}function re(e){const t=e.books.map(o=>P(o,"best-sellers-list-item")).join("");return`<div class="best-sellers-container">
             <h2 class="category-title">${e.list_name}</h2>
             <ul class="best-sellers-list">${t}</ul>
             <div class="see-more-btn-wrapper">
               <button class="see-more-btn" type="button" data-category="${e.list_name}">See more</button>
             </div>
           </div>`}function ce(e){return`<ul class="category-list">${e.map(o=>P(o,"category-list-item")).join("")}</ul>`}function de(e){l.insertAdjacentHTML("beforeend",re(e))}function pe(e){l.insertAdjacentHTML("beforeend",ce(e))}function ge(){l.insertAdjacentHTML("afterbegin",`<h1 class="main-title">
            Best Sellers <span class="accent-text">Books</span>
        </h1>`)}function ue(e){const t=e[0].list_name.split(" "),o=t.pop(),r=`${t.join(" ")} <span class="accent-text">${o}</span>`;l.insertAdjacentHTML("afterbegin",`<h1 class="main-title">${r}</h1>`)}function j(){l.innerHTML=""}function me(e){e.forEach(de),ge()}function he(e){pe(e),ue(e)}const v=document.querySelector(".back-top");window.addEventListener("scroll",ye);v.addEventListener("click",N);function ye(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?v.classList.add("back-top-show"):v.classList.remove("back-top-show")}function N(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(N,0))}
//# sourceMappingURL=commonHelpers.js.map
