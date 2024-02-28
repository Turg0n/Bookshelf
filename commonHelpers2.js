import{a as p,i as E}from"./assets/sideBar-87ddd161.js";import"./assets/vendor-b6f9ed32.js";const k="/Bookshelf/assets/books-desk@1x-1f62c9bc.png",C="/Bookshelf/assets/books-desk@2x-306b4264.png",S="/Bookshelf/assets/books-mob@1x-93df6442.png",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",r="shoppingCard",a="shoppingList",t=document.querySelector(".js-shopping-list"),l=document.querySelector(".shopping-list-container"),v="The Florida governor gives his account of his achievements and shares his opinions about the political left. Read by John Pruden and the author. 8 hours, 59 minutes unabridged.",n=c(r),d=c(a);n[0]!==void 0?(l.innerHTML="",t.innerHTML="",t.insertAdjacentHTML("afterbegin",A(n)),t.addEventListener("click",y)):m();function y(e){let s=e.target.closest(".btn-shop");if(s)t.innerHTML="",n.splice(s.id,1),d.splice(s.id,1),localStorage.removeItem(r),localStorage.removeItem(a),h(r,n),h(a,d),n[0]!==void 0?t.insertAdjacentHTML("afterbegin",A(c(r))):m();else return}function A(e){return e.map(({book_image:s,title:o,author:f,description:i,amazonLinks:u,appleLinks:L},b)=>(i||(i=v),`<li class="shopping-list-item">
      <img class="shopping-list-card-img" src="${s}" alt="${o}">
      <div class="shopping-list-card-container">
        <h2 class="shopping-list-card-title">${o}</h2>
        <p class="shopping-list-card-text">Hardcover fiction</p>
        <p class="shopping-list-card-desc">${i}</p>
        <div class="shopping-list-card-bottom-container">
          <p class="shopping-list-card-author">${f}</p>
          <div class="shopping-list-card-container-img">
            <a href="${u}" class="shopping-amazon-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-amazon"srcset="${p} 1x," src="${p}" alt="Amazon" loading="lazy">
            </a>
            <a href="${L}" class="shopping-book-link" rel="noopener noreferrer nofollow" target="_blank">
              <img class="shopping-list-card-icon-book" srcset="${g} 1x," src="${g}" alt="Apple books" loading="lazy">
            </a>
          </div>
        </div>
        <div>
          <button class="btn-shop shopping-list-card-container-trash" id="${b}">
            <svg class="shopping-list-card-icon-trash" width="18px" height="18px">
              <use href="${E}#icon-del"></use>
            </svg>
          </button>
        </div>
      </div>
    </li>
  `)).join("")}function m(){l.innerHTML="",l.insertAdjacentHTML("afterbegin",`
    <p class="shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <img
      class="shopping-list-image"
      srcset="
        ${k} 1x,
        ${C} 2x
      "
      src="${S}"
      alt="books"
      width="265"
      height="198"
    />
    `)}function h(e,s){try{const o=JSON.stringify(s);localStorage.setItem(e,o)}catch(o){console.error("Get state error: ",o.message)}}function c(e){try{const s=localStorage.getItem(e);return s===null?void 0:JSON.parse(s)}catch(s){console.error("Get state error: ",s.message)}}
//# sourceMappingURL=commonHelpers2.js.map
