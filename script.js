const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".navigationBar ");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open")
});