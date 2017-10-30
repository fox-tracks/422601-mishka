var menuBtn = document.querySelector(".page-header__hamburger-label");
var menu = document.querySelector(".page-header__menu");

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("page-header__menu--shown");
  menuBtn.classList.toggle("page-header__hamburger-label--close");
});
