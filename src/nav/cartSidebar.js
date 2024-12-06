let cartBtn = document.querySelector("#cartBtn")
let cartSidebar = document.querySelector(".cart-sidebar")
let closeBtn = document.querySelector(".cart-close")
let mobileContainer = document.querySelector(".mobile-container")


cartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("show")
    mobileContainer.classList.remove('mobile-show')
})

closeBtn.addEventListener("click",() => {
    cartSidebar.classList.remove("show")
})


export const displayCart = () => {
    cartSidebar.classList.add("show")
}