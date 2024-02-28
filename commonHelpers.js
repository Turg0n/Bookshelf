import{a as A}from"./assets/sideBar-87ddd161.js";import{a as p,i as l}from"./assets/vendor-b6f9ed32.js";function a(){const t=document.querySelectorAll("#loader");t&&t.forEach(e=>{e.style.display="flex"})}function s(){const t=document.querySelectorAll("#loader");t&&t.forEach(e=>{e.style.display="none"})}async function v(t){try{a();const e=await p(`https://books-backend.p.goit.global/books/category?category=${t}`);return s(),e.data}catch{s(),l.error({title:"",message:"Failed server request",position:"topRight"})}}async function M(t){try{a();const e=await p(`https://books-backend.p.goit.global/books/${t}`);return s(),e.data}catch{s(),l.error({title:"",message:"Book not found",position:"topRight"})}}async function x(){try{a();const t=await p("https://books-backend.p.goit.global/books/top-books");return s(),t.data}catch{s(),l.error({title:"",message:"Failed server request",position:"topRight"})}}const E=document.querySelector(".nav-categories-list");async function I(){const{data:t}=await p.get("https://books-backend.p.goit.global/books/category-list");return t}const q=async()=>{try{a();const t=await I();E.innerHTML=await R(t),document.querySelectorAll(".nav-category-item").forEach(o=>{o.addEventListener("click",m=>{const k=document.querySelector(".nav-category-item.active");k&&k.classList.remove("active"),m.target.classList.add("active")})}),s()}catch{s()}};q();E.addEventListener("click",Q);function Q(t){t.target.dataset.id&&v(t)}function R(t){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${t.map(e=>`<li class="nav-category-item" data-id="${e.list_name}">
        ${e.list_name}
        </li>`).join("")}`}const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",H=document.querySelector(".main-wrapper"),d=document.getElementById("bookModal"),u=document.getElementById("bookModalTitle"),O=document.getElementById("bookModalText"),r=document.getElementById("addToShoppingList"),V=document.querySelector(".modal-close"),g=document.getElementById("modalADText");let n=[],c=[],B={};const $="The Florida governor gives his account of his achievements and shares his opinions about the political left. Read by John Pruden and the author. 8 hours, 59 minutes unabridged.";function Y(t){M(t).then(e=>{u.innerText=e.title,e.description||(e.description=$),B={book_image:e.book_image,title:e.title,author:e.author,description:e.description,amazonLinks:e.buy_links[0].url,appleLinks:e.buy_links[1].url},u.dataset.bookId=t,O.innerHTML=`<img src="${e.book_image}" alt="${e.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${e.title}</h2>
                <h3 class="book-modal-author">${e.author}</h3>
                <p class="book-modal-desc">${e.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${e.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${A} 1x, src="${A}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${e.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${b} 1x, src="${b}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,n.includes(t)?(r.innerText="Remove from the shopping list",g.style.display="block"):(r.innerText="Add to shopping list",g.style.display="none"),d.classList.add("show"),document.body.style.overflow="hidden"})}function f(){d.classList.remove("show"),document.body.style.overflow=""}function J(t){if(!t){console.error("Invalid bookId:",t);return}const e=n.indexOf(t);e===-1?(n.push(t),c.push(B)):(n.splice(e,1),c.splice(e,1)),localStorage.setItem("shoppingList",JSON.stringify(n)),localStorage.setItem("shoppingCard",JSON.stringify(c)),e===-1?(r.innerText="Remove from the shopping list",g.style.display="block"):(r.innerText="Add to shopping list",g.style.display="none")}r.addEventListener("click",()=>{const t=u.dataset.bookId;J(t)});d.addEventListener("click",t=>{t.target===d&&f()});document.addEventListener("keydown",t=>{t.key==="Escape"&&f()});H.addEventListener("click",t=>{const e=t.target.closest(".book-link");if(e){t.preventDefault();const o=e.dataset.id;Y(o)}});const L=localStorage.getItem("shoppingList"),w=localStorage.getItem("shoppingCard");L&&(n=JSON.parse(L));w&&(c=JSON.parse(w));V.addEventListener("click",f);document.getElementById("pagination-list");const i=document.querySelector(".main-wrapper");i.addEventListener("click",X);const h=document.querySelector(".scroll-to-top-btn");h.addEventListener("click",j);window.addEventListener("scroll",U);function j(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}function U(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e?h.classList.add("scroll-to-top-btn-show"):h.classList.remove("scroll-to-top-btn-show")}async function z(){T(),a();try{const t=await x();_(t)}catch{l.error({title:"",message:"Whoops! Somethink went wrong",position:"topRight"})}finally{s()}}z();async function X(t){if(!t.target.classList.contains("see-more-btn"))return;T(),a();const e=t.target.dataset.category;try{const o=await v(e);D(o)}catch{l.error({title:"",message:"Sorry, we couldn't find any books in this category",position:"topRight"})}finally{s()}}function S(t,e){return`<li class="${e} book-link" data-id="${t._id}">
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
               </li>`}function P(t){const e=t.books.map(o=>S(o,"best-sellers-list-item")).join("");return`<div class="best-sellers-container">
             <h2 class="category-title">${t.list_name}</h2>
             <ul class="best-sellers-list">${e}</ul>
             <div class="see-more-btn-wrapper">
               <button class="see-more-btn" type="button" data-category="${t.list_name}">See more</button>
             </div>
           </div>`}function N(t){return`<ul class="category-list">${t.map(o=>S(o,"category-list-item")).join("")}</ul>`}function W(t){i.insertAdjacentHTML("beforeend",P(t))}function Z(t){i.insertAdjacentHTML("beforeend",N(t))}function G(){i.insertAdjacentHTML("afterbegin",`<h1 class="main-title">
            Best Sellers <span class="accent-text">Books</span>
        </h1>`)}function F(t){const e=t[0].list_name.split(" "),o=e.pop(),m=`${e.join(" ")} <span class="accent-text">${o}</span>`;i.insertAdjacentHTML("afterbegin",`<h1 class="main-title">${m}</h1>`)}function T(){i.innerHTML=""}function _(t){t.forEach(W),G()}function D(t){Z(t),F(t)}const y=document.querySelector(".back-top");window.addEventListener("scroll",K);y.addEventListener("click",C);function K(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e?y.classList.add("back-top-show"):y.classList.remove("back-top-show")}function C(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(C,0))}
//# sourceMappingURL=commonHelpers.js.map
