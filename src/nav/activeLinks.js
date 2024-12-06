let links;


document.addEventListener("DOMContentLoaded", function() {
    links = document.querySelectorAll(".links");

    const activeLink = () => {
        links.forEach((btn) => {
            btn.classList.remove("active");

            if (btn.href === window.location.href) {
                btn.classList.add("active"); 
            }
        });
    }

    activeLink();

    links.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            links.forEach((item) => {
                item.classList.remove("active");
            });

            btn.classList.add("active");
        });
    });

});
