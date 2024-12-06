
let navBtn = document.querySelector("#navBtn")
let mobileContainer = document.querySelector(".mobile-container")
let cartSidebar = document.querySelector(".cart-sidebar")


navBtn.addEventListener("click", (e) => {
    mobileContainer.classList.toggle("mobile-show")
    //cartSidebar.classList.remove('show')
})


