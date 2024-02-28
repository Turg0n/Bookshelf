import{a as v,b as w}from"./assets/apple-books-4f196d85.js";import{a as g,i as l}from"./assets/vendor-94296d0c.js";document.querySelector(".js-open-menu");document.querySelector(".js-close-menu");document.querySelector(".js-modal");new BroadcastChannel("modal-channel");const A=document.querySelector(".div-theme"),L=document.querySelector(".span-theme"),S=document.querySelector("body");let a=!1;A.addEventListener("change",()=>{a?(a=!1,localStorage.setItem("userTheme","light")):(a=!0,localStorage.setItem("userTheme","dark")),$()});function $(){try{a=localStorage.getItem("userTheme")==="dark"}catch{a=!1}const e=document.querySelector(".header-logo-icon"),t=document.querySelector(".header-logo-icon1");a?(S.classList.add("dark-theme"),L.style.left="20px",e.style.width="0px",t.style.width="109px"):(S.classList.remove("dark-theme"),L.style.left="2px",t.style.width="0px",e.style.width="109px")}$();function c(){const e=document.querySelector("#loader");e?e.style.display="flex":console.error("Loader element not found.")}function s(){const e=document.querySelector("#loader");e?e.style.display="none":console.error("Loader element not found.")}async function x(e){try{c();const t=await g(`https://books-backend.p.goit.global/books/category?category=${e}`);return s(),t.data}catch{s(),l.error({title:"",message:"Failed server request",position:"topRight"})}}async function j(e){try{c();const t=await g(`https://books-backend.p.goit.global/books/${e}`);return s(),t.data}catch{s(),l.error({title:"",message:"Book not found",position:"topRight"})}}async function H(){try{c();const e=await g("https://books-backend.p.goit.global/books/top-books");return s(),e.data}catch{s(),l.error({title:"",message:"Failed server request",position:"topRight"})}}const E=document.querySelector(".nav-categories-list");async function O(){const{data:e}=await g.get("https://books-backend.p.goit.global/books/category-list");return e}const R=async()=>{try{const e=await O();E.innerHTML=await N(e),document.querySelectorAll(".nav-category-item").forEach(o=>{o.addEventListener("click",p=>{const b=document.querySelector(".nav-category-item.active");b&&b.classList.remove("active"),p.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};R();E.addEventListener("click",z);function z(e){e.target.dataset.id&&x(e)}function N(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}const J=document.querySelector(".main-wrapper"),u=document.getElementById("bookModal"),h=document.getElementById("bookModalTitle"),W=document.getElementById("bookModalText"),r=document.getElementById("addToShoppingList"),Y=document.querySelector(".modal-close"),m=document.getElementById("modalADText");let n=[],d=[],q={};const D="The Florida governor gives his account of his achievements and shares his opinions about the political left. Read by John Pruden and the author. 8 hours, 59 minutes unabridged.";function F(e){j(e).then(t=>{h.innerText=t.title,t.description||(t.description=D),q={book_image:t.book_image,title:t.title,author:t.author,description:t.description,amazonLinks:t.buy_links[0].url,appleLinks:t.buy_links[1].url},h.dataset.bookId=e,W.innerHTML=`<img src="${t.book_image}" alt="${t.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${t.title}</h2>
                <h3 class="book-modal-author">${t.author}</h3>
                <p class="book-modal-desc">${t.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${t.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${v} 1x, src="${v}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${t.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${w} 1x, src="${w}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,n.includes(e)?(r.innerText="Remove from the shopping list",m.style.display="block"):(r.innerText="Add to shopping list",m.style.display="none"),u.classList.add("show"),document.body.style.overflow="hidden"})}function k(){u.classList.remove("show"),document.body.style.overflow=""}function P(e){if(!e){console.error("Invalid bookId:",e);return}const t=n.indexOf(e);t===-1?(n.push(e),d.push(q)):(n.splice(t,1),d.splice(t,1)),localStorage.setItem("shoppingList",JSON.stringify(n)),localStorage.setItem("shoppingCard",JSON.stringify(d)),t===-1?(r.innerText="Remove from the shopping list",m.style.display="block"):(r.innerText="Add to shopping list",m.style.display="none")}r.addEventListener("click",()=>{const e=h.dataset.bookId;P(e)});u.addEventListener("click",e=>{e.target===u&&k()});document.addEventListener("keydown",e=>{e.key==="Escape"&&k()});J.addEventListener("click",e=>{const t=e.target.closest(".book-link");if(t){e.preventDefault();const o=t.dataset.id;F(o)}});const T=localStorage.getItem("shoppingList"),B=localStorage.getItem("shoppingCard");T&&(n=JSON.parse(T));B&&(d=JSON.parse(B));Y.addEventListener("click",k);const Q=document.querySelector(".backdrop"),C=document.querySelector(".js-open-menu");C.insertAdjacentHTML("afterbegin",`<svg class="icon-close visually-hidden" width="28" height="28">
    <use href="../img/sprite.svg#icon-x-close"></use>
  </svg>`);const V=document.querySelector(".icon-close"),G=document.querySelector(".header-burger-icon");function K(){Q.classList.toggle("show__mob-menu"),V.classList.toggle("visually-hidden"),G.classList.toggle("visually-hidden")}C.addEventListener("click",K);document.getElementById("pagination-list");const i=document.querySelector(".main-wrapper");i.addEventListener("click",ee);const y=document.querySelector(".scroll-to-top-btn");y.addEventListener("click",U);window.addEventListener("scroll",X);function U(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}function X(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?y.classList.add("scroll-to-top-btn-show"):y.classList.remove("scroll-to-top-btn-show")}async function Z(){_(),c();try{const e=await H();re(e)}catch{l.error({title:"",message:"Whoops! Somethink went wrong",position:"topRight"})}finally{s()}}Z();async function ee(e){if(!e.target.classList.contains("see-more-btn"))return;_(),c();const t=e.target.dataset.category;try{const o=await x(t);le(o)}catch{l.error({title:"",message:"Sorry, we couldn't find any books in this category",position:"topRight"})}finally{s()}}function M(e,t){return`<li class="${t} book-link" data-id="${e._id}">
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
               </li>`}function te(e){const t=e.books.map(o=>M(o,"best-sellers-list-item")).join("");return`<div class="best-sellers-container">
             <h2 class="category-title">${e.list_name}</h2>
             <ul class="best-sellers-list">${t}</ul>
             <div class="see-more-btn-wrapper">
               <button class="see-more-btn" type="button" data-category="${e.list_name}">See more</button>
             </div>
           </div>`}function oe(e){return`<ul class="category-list">${e.map(o=>M(o,"category-list-item")).join("")}</ul>`}function se(e){i.insertAdjacentHTML("beforeend",te(e))}function ne(e){i.insertAdjacentHTML("beforeend",oe(e))}function ae(){i.insertAdjacentHTML("afterbegin",`<h1 class="main-title">
            Best Sellers <span class="accent-text">Books</span>
        </h1>`)}function ie(e){const t=e[0].list_name.split(" "),o=t.pop(),p=`${t.join(" ")} <span class="accent-text">${o}</span>`;i.insertAdjacentHTML("afterbegin",`<h1 class="main-title">${p}</h1>`)}function _(){i.innerHTML=""}function re(e){e.forEach(se),ae()}function le(e){ne(e),ie(e)}const f=document.querySelector(".back-top");window.addEventListener("scroll",ce);f.addEventListener("click",I);function ce(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?f.classList.add("back-top-show"):f.classList.remove("back-top-show")}function I(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(I,0))}
//# sourceMappingURL=commonHelpers.js.map
