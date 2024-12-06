import { addToCart } from "../cart/addToCart.js";
import { formatPrice } from "../main/utils.js";

const displayProducts = (data, element, filters) => {

  if (window.location.pathname !== '/products.html') {
    return;  
}

  if (Array.isArray(data)) {
  if(navigator.onLine){  
    element.innerHTML = data
      .map((item) => {
        //console.log(item);
        const { id, name, images, price, company } = item;

        const imageSrc = Array.isArray(images) ? images.join("") : ""

        //console.log(id)
        return `<a class="single-product" href="product.html?id=${id}">      
            <img src="${imageSrc}" class="single-product-img img" alt="${name}" />
            <footer>
            <div>
              <h5 class="name"><span class="company-name">${company}: </span>${name}</h5>
              <span class="price">Price: ${formatPrice(price)}</span>   
            </div>  
              <button class="product-cart-btn cart-icon" data-id=${id}>
                <i class="fas fa-cart-arrow-down"></i>
              </button>
            </footer>
          </a>`;
      })
      .join("");
    }else{
      element.innerHTML = `
      <div class='error-container'>
         <h1 class='error-message'>Your offline, please check your internet connection</h1>  
      </div>
      `
    }
  }

  //console.log(data)
  if (filters) return;

  element.addEventListener("click", (e) => {
    let parentEl = e.target.parentElement;
    //console.log(parentEl)
    if (parentEl.classList.contains("product-cart-btn")) {
      addToCart(parentEl.dataset.id);
    }
  });
};

export default displayProducts;
