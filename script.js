const btnMobileEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".navigationBar");

btnMobileEl.addEventListener("click", function() {
    navEl.classList.toggle("nav-open")
});
