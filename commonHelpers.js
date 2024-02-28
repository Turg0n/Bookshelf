import{a as b}from"./assets/sideBar-87ddd161.js";import{a as p,i as l}from"./assets/vendor-b6f9ed32.js";function n(){const t=document.querySelectorAll("#loader");t&&t.forEach(e=>{e.style.display="flex"})}function s(){const t=document.querySelectorAll("#loader");t&&t.forEach(e=>{e.style.display="none"})}async function E(t){try{n();const e=await p(`https://books-backend.p.goit.global/books/category?category=${t}`);return s(),e.data}catch{s(),l.error({title:"",message:"Failed server request",position:"topRight"})}}async function x(t){try{n();const e=await p(`https://books-backend.p.goit.global/books/${t}`);return s(),e.data}catch{s(),l.error({title:"",message:"Book not found",position:"topRight"})}}async function I(){try{n();const t=await p("https://books-backend.p.goit.global/books/top-books");return s(),t.data}catch{s(),l.error({title:"",message:"Failed server request",position:"topRight"})}}const i=document.querySelector(".main-wrapper");i.addEventListener("click",$);const u=document.querySelector(".scroll-to-top-btn");u.addEventListener("click",q);window.addEventListener("scroll",R);function q(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}function R(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e?u.classList.add("scroll-to-top-btn-show"):u.classList.remove("scroll-to-top-btn-show")}async function Q(){f(),n();try{const t=await I();z(t)}catch{l.error({title:"",message:"Whoops! Somethink went wrong",position:"topRight"})}finally{s()}}Q();async function $(t){if(!t.target.classList.contains("see-more-btn"))return;f(),n();const e=t.target.dataset.category;try{const o=await E(e);S(o)}catch{l.error({title:"",message:"Sorry, we couldn't find any books in this category",position:"topRight"})}finally{s()}}function B(t,e){return`<li class="${e} book-link" data-id="${t._id}">
                 <div class="overlay-box">
                   <img
                     class="book-img"
                     src="${t.book_image}"
                     alt="${t.title}"
                     width="180"
                     height="256"
                   />
                   <p class="overlay-text">Quick View</p>
                 </div>
                 <div class="book-info">
                   <h3 class="book-title">${t.title}</h3>
                   <p class="book-author">${t.author}</p>
                 </div>
               </li>`}function H(t){const e=t.books.map(o=>B(o,"best-sellers-list-item")).join("");return`<div class="best-sellers-container">
             <h2 class="category-title">${t.list_name}</h2>
             <ul class="best-sellers-list">${e}</ul>
             <div class="see-more-btn-wrapper">
               <button class="see-more-btn" type="button" data-category="${t.list_name}">See more</button>
             </div>
           </div>`}function O(t){return`<ul class="category-list">${t.map(o=>B(o,"category-list-item")).join("")}</ul>`}function V(t){i.insertAdjacentHTML("beforeend",H(t))}function Y(t){i.insertAdjacentHTML("beforeend",O(t))}function J(){i.insertAdjacentHTML("afterbegin",`<h1 class="main-title">
            Best Sellers <span class="accent-text">Books</span>
        </h1>`)}function j(t){const e=t[0].list_name.split(" "),o=e.pop(),m=`${e.join(" ")} <span class="accent-text">${o}</span>`;i.insertAdjacentHTML("afterbegin",`<h1 class="main-title">${m}</h1>`)}function f(){i.innerHTML=""}function z(t){t.forEach(V),J()}function S(t){Y(t),j(t)}const C=document.querySelector(".nav-categories-list");async function U(){const{data:t}=await p.get("https://books-backend.p.goit.global/books/category-list");return t}const X=async()=>{try{n();const t=await U();C.innerHTML=await W(t),document.querySelectorAll(".nav-category-item").forEach(o=>{o.addEventListener("click",m=>{const A=document.querySelector(".nav-category-item.active");A&&A.classList.remove("active"),m.target.classList.add("active")})}),s()}catch{s()}};X();C.addEventListener("click",P);function P(t){t.target.dataset.id&&N(t.target.dataset.id)}async function N(t){f(),n();const e=t;try{const o=await E(e);S(o)}catch{iziToast.error({title:"",message:"Sorry, we couldn't find any books in this category",position:"topRight"})}finally{s()}}function W(t){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${t.map(e=>`<li class="nav-category-item" data-id="${e.list_name}">
        ${e.list_name}
        </li>`).join("")}`}const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",Z=document.querySelector(".main-wrapper"),d=document.getElementById("bookModal"),y=document.getElementById("bookModalTitle"),G=document.getElementById("bookModalText"),r=document.getElementById("addToShoppingList"),F=document.querySelector(".modal-close"),g=document.getElementById("modalADText");let a=[],c=[],T={};const _="The Florida governor gives his account of his achievements and shares his opinions about the political left. Read by John Pruden and the author. 8 hours, 59 minutes unabridged.";function D(t){x(t).then(e=>{y.innerText=e.title,e.description||(e.description=_),T={book_image:e.book_image,title:e.title,author:e.author,description:e.description,amazonLinks:e.buy_links[0].url,appleLinks:e.buy_links[1].url},y.dataset.bookId=t,G.innerHTML=`<img src="${e.book_image}" alt="${e.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${e.title}</h2>
                <h3 class="book-modal-author">${e.author}</h3>
                <p class="book-modal-desc">${e.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${e.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${b} 1x, src="${b}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${e.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${w} 1x, src="${w}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,a.includes(t)?(r.innerText="Remove from the shopping list",g.style.display="block"):(r.innerText="Add to shopping list",g.style.display="none"),d.classList.add("show"),document.body.style.overflow="hidden"})}function k(){d.classList.remove("show"),document.body.style.overflow=""}function K(t){if(!t){console.error("Invalid bookId:",t);return}const e=a.indexOf(t);e===-1?(a.push(t),c.push(T)):(a.splice(e,1),c.splice(e,1)),localStorage.setItem("shoppingList",JSON.stringify(a)),localStorage.setItem("shoppingCard",JSON.stringify(c)),e===-1?(r.innerText="Remove from the shopping list",g.style.display="block"):(r.innerText="Add to shopping list",g.style.display="none")}r.addEventListener("click",()=>{const t=y.dataset.bookId;K(t)});d.addEventListener("click",t=>{t.target===d&&k()});document.addEventListener("keydown",t=>{t.key==="Escape"&&k()});Z.addEventListener("click",t=>{const e=t.target.closest(".book-link");if(e){t.preventDefault();const o=e.dataset.id;D(o)}});const L=localStorage.getItem("shoppingList"),v=localStorage.getItem("shoppingCard");L&&(a=JSON.parse(L));v&&(c=JSON.parse(v));F.addEventListener("click",k);document.getElementById("pagination-list");const h=document.querySelector(".back-top");window.addEventListener("scroll",tt);h.addEventListener("click",M);function tt(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e?h.classList.add("back-top-show"):h.classList.remove("back-top-show")}function M(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(M,0))}
//# sourceMappingURL=commonHelpers.js.map
