// SIDEBAR
const navShow = document.querySelector("header");
const navToggle = document.querySelector("header nav h1");

navToggle.addEventListener('click', () => {
    navShow.classList.toggle("slide")
});