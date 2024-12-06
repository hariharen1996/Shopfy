import {  productContainer } from "../main/utils.js"
import displayProducts from "../products/displayProducts.js";


const tabFilter = (data) => {

    if (window.location.pathname !== '/products.html') {
        return; 
    }

    let companuCon = document.querySelector(".company-container");
    let btnCategory = ['all',...new Set(data.map((item) => item.company))]
    companuCon.innerHTML = btnCategory.map((items) => {
        return `<button class="company-btn" data-value=${items}>${items}</button>`
    }).join("")

    companuCon.addEventListener("click",(e) => {
        let value = e.target.dataset.value;
        if(e.target.classList.contains("company-btn")){
            if(value === 'all'){
                displayProducts(data,productContainer,true)
            }else{
                let newData = data.filter((items) => {
                    return items.company === value;
                })

                displayProducts(newData,productContainer,true)
            }
        }
    })


}

export default tabFilter