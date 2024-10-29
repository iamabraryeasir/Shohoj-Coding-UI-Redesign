let navOnMobile = document.getElementById("nav-on-mobile");
function toggleNavBar() {
    navOnMobile.classList.toggle("hidden");
}

let mobileMenuItem = document.querySelectorAll(".mobile-menu-item");

mobileMenuItem.forEach((item) => {
    item.addEventListener("click", () => {
        navOnMobile.classList.toggle("hidden");
    });
});
