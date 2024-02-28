import{a as y,i as g}from"./vendor-94296d0c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.querySelector(".js-open-menu");document.querySelector(".js-close-menu");document.querySelector(".js-modal");new BroadcastChannel("modal-channel");const Q=document.querySelector(".div-theme"),w=document.querySelector(".span-theme"),v=document.querySelector("body");let l=!1;Q.addEventListener("change",()=>{l?(l=!1,localStorage.setItem("userTheme","light")):(l=!0,localStorage.setItem("userTheme","dark")),T()});function T(){try{l=localStorage.getItem("userTheme")==="dark"}catch{l=!1}const e=document.querySelector(".header-logo-icon"),t=document.querySelector(".header-logo-icon1");l?(v.classList.add("dark-theme"),w.style.left="20px",e.style.width="0px",t.style.width="109px"):(v.classList.remove("dark-theme"),w.style.left="2px",t.style.width="0px",e.style.width="109px")}T();function u(){const e=document.querySelector("#loader");e?e.style.display="flex":console.error("Loader element not found.")}function r(){const e=document.querySelector("#loader");e?e.style.display="none":console.error("Loader element not found.")}async function M(e){try{u();const t=await y(`https://books-backend.p.goit.global/books/category?category=${e}`);return r(),t.data}catch{r(),g.error({title:"",message:"Failed server request",position:"topRight"})}}async function V(e){try{u();const t=await y(`https://books-backend.p.goit.global/books/${e}`);return r(),t.data}catch{r(),g.error({title:"",message:"Book not found",position:"topRight"})}}async function J(){try{u();const e=await y("https://books-backend.p.goit.global/books/top-books");return r(),e.data}catch{r(),g.error({title:"",message:"Failed server request",position:"topRight"})}}const I=document.querySelector(".nav-categories-list");async function j(){const{data:e}=await y.get("https://books-backend.p.goit.global/books/category-list");return e}const H=async()=>{try{const e=await j();I.innerHTML=await U(e),document.querySelectorAll(".nav-category-item").forEach(s=>{s.addEventListener("click",i=>{const o=document.querySelector(".nav-category-item.active");o&&o.classList.remove("active"),i.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};H();I.addEventListener("click",K);function K(e){e.target.dataset.id&&M(e)}function U(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}const S="data:image/png;base64,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",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",Y=document.querySelector(".main-wrapper"),p=document.getElementById("bookModal"),A=document.getElementById("bookModalTitle"),Z=document.getElementById("bookModalText"),d=document.getElementById("addToShoppingList"),F=document.querySelector(".modal-close"),h=document.getElementById("modalADText");let a=[],m=[],q={};const N="The Florida governor gives his account of his achievements and shares his opinions about the political left. Read by John Pruden and the author. 8 hours, 59 minutes unabridged.";function G(e){V(e).then(t=>{A.innerText=t.title,t.description||(t.description=N),q={book_image:t.book_image,title:t.title,author:t.author,description:t.description,amazonLinks:t.buy_links[0].url,appleLinks:t.buy_links[1].url},A.dataset.bookId=e,Z.innerHTML=`<img src="${t.book_image}" alt="${t.title}" class="book-modal-img"/>
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
                            <img class="icon-book-modal-ibooks" srcset="${E} 1x, src="${E}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,a.includes(e)?(d.innerText="Remove from the shopping list",h.style.display="block"):(d.innerText="Add to shopping list",h.style.display="none"),p.classList.add("show"),document.body.style.overflow="hidden"})}function k(){p.classList.remove("show"),document.body.style.overflow=""}function P(e){if(!e){console.error("Invalid bookId:",e);return}const t=a.indexOf(e);t===-1?(a.push(e),m.push(q)):(a.splice(t,1),m.splice(t,1)),localStorage.setItem("shoppingList",JSON.stringify(a)),localStorage.setItem("shoppingCard",JSON.stringify(m)),t===-1?(d.innerText="Remove from the shopping list",h.style.display="block"):(d.innerText="Add to shopping list",h.style.display="none")}d.addEventListener("click",()=>{const e=A.dataset.bookId;P(e)});p.addEventListener("click",e=>{e.target===p&&k()});document.addEventListener("keydown",e=>{e.key==="Escape"&&k()});Y.addEventListener("click",e=>{const t=e.target.closest(".book-link");if(t){e.preventDefault();const s=t.dataset.id;G(s)}});const B=localStorage.getItem("shoppingList"),C=localStorage.getItem("shoppingCard");B&&(a=JSON.parse(B));C&&(m=JSON.parse(C));F.addEventListener("click",k);const D=document.querySelector(".backdrop"),R=document.querySelector(".js-open-menu");R.insertAdjacentHTML("afterbegin",`<svg class="icon-close visually-hidden" width="28" height="28">
    <use href="./img/sprite.svg#icon-x-close"></use>
  </svg>`);const z=document.querySelector(".icon-close"),W=document.querySelector(".header-burger-icon");function $(){D.classList.toggle("show__mob-menu"),z.classList.toggle("visually-hidden"),W.classList.toggle("visually-hidden")}R.addEventListener("click",$);document.getElementById("pagination-list");const c=document.querySelector(".main-wrapper");c.addEventListener("click",oe);const b=document.querySelector(".scroll-to-top-btn");b.addEventListener("click",_);window.addEventListener("scroll",ee);function _(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}function ee(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?b.classList.add("scroll-to-top-btn-show"):b.classList.remove("scroll-to-top-btn-show")}async function te(){X(),u();try{const e=await J();ce(e)}catch{g.error({title:"",message:"Whoops! Somethink went wrong",position:"topRight"})}finally{r()}}te();async function oe(e){if(!e.target.classList.contains("see-more-btn"))return;X(),u();const t=e.target.dataset.category;try{const s=await M(t);de(s)}catch{g.error({title:"",message:"Sorry, we couldn't find any books in this category",position:"topRight"})}finally{r()}}function x(e,t){return`<li class="${t} book-link" data-id="${e._id}">
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
               </li>`}function se(e){const t=e.books.map(s=>x(s,"best-sellers-list-item")).join("");return`<div class="best-sellers-container">
             <h2 class="category-title">${e.list_name}</h2>
             <ul class="best-sellers-list">${t}</ul>
             <div class="see-more-btn-wrapper">
               <button class="see-more-btn" type="button" data-category="${e.list_name}">See more</button>
             </div>
           </div>`}function ne(e){return`<ul class="category-list">${e.map(s=>x(s,"category-list-item")).join("")}</ul>`}function re(e){c.insertAdjacentHTML("beforeend",se(e))}function ie(e){c.insertAdjacentHTML("beforeend",ne(e))}function ae(){c.insertAdjacentHTML("afterbegin",`<h1 class="main-title">
            Best Sellers <span class="accent-text">Books</span>
        </h1>`)}function le(e){const t=e[0].list_name.split(" "),s=t.pop(),i=`${t.join(" ")} <span class="accent-text">${s}</span>`;c.insertAdjacentHTML("afterbegin",`<h1 class="main-title">${i}</h1>`)}function X(){c.innerHTML=""}function ce(e){e.forEach(re),ae()}function de(e){ie(e),le(e)}const L=document.querySelector(".back-top");window.addEventListener("scroll",ge);L.addEventListener("click",O);function ge(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?L.classList.add("back-top-show"):L.classList.remove("back-top-show")}function O(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(O,0))}export{S as a,E as b};
//# sourceMappingURL=scroll-up-5190212c.js.map
