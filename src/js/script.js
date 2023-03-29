const menuHamburger = document.querySelector("#hamburguer");
const navMenu = document.querySelector(".navbar-menu");

menuHamburger.addEventListener("click", () => {
  navMenu.classList.toggle("navbar-menu__active");
});
