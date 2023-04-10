const menuHamburger = document.querySelector("#hamburguer");
const navMenu = document.querySelector(".navbar-menu");

menuHamburger.addEventListener("click", () => {
  if (navMenu.style.marginLeft === "-100%") {
    navMenu.style.marginLeft = "0";
  } else {
    navMenu.style.marginLeft = "-100%";
  }
});

navMenu.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", (e) => {
    navMenu.style.marginLeft = "-100%";
  });
});
