//анимация для бургер меню
let navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger_button");
burger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  navbar.classList.toggle("open");
});

