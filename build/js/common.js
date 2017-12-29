var myMap;
var myPlacemark;
if (window.ymaps) {
  ymaps.ready(init);
}
function init() {
  myMap = new ymaps.Map("map", {
    center: [59.938826, 30.322876],
    zoom: 16,
    controls: []
  });
  myPlacemark = new ymaps.Placemark([59.938848, 30.322954], {
    hintContent: "Мы здесь!"
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/icon-map-pin.svg",
    iconImageSize: [67, 100],
    iconImageOffset: [-34, -100]
  });
  myMap.geoObjects
    .add(myPlacemark);
}

var menuBtn = document.querySelector(".page-header__hamburger-label");
var menu = document.querySelector(".page-header__menu");

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("page-header__menu--shown");
  menuBtn.classList.toggle("page-header__hamburger-label--close");
});

var productBtn = document.querySelector(".product__btn");
var catalogBtns = document.querySelectorAll(".catalog__btn");

function showPopup(evt) {
  evt.preventDefault();
  popup.classList.add("popup--shown");
}

if (productBtn != null) {
  productBtn.addEventListener("click", showPopup);
}

for (var i = 0; i < catalogBtns.length; i++) {
  catalogBtns[i].addEventListener("click", showPopup);
}

var popup = document.querySelector(".popup");
if (popup != null) {
  var sizeS = popup.querySelector(".size-choice__btn--s");
  var sizeM = popup.querySelector(".size-choice__btn--m");
  var sizeL = popup.querySelector(".size-choice__btn--l");
  var sizeChoice = popup.querySelector(".size-choice");
  var popupBlock = popup.querySelector(".popup__block");

  popup.addEventListener("click", function (evt) {
    if (evt.target == popup) {
      evt.preventDefault();
      popup.classList.remove("popup--shown");
    }
  });

  function onSubmit(evt) {
    if (!sizeS.checked && !sizeM.checked && !sizeL.checked) {
      evt.preventDefault();
      popupBlock.classList.remove("popup__block--error");
      setTimeout(function () {
        popupBlock.classList.add("popup__block--error");
      }, 0);
    }
  }

  sizeChoice.addEventListener("submit", onSubmit);
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("popup--shown")) {
        popup.classList.remove("popup--shown");
      }
    }
  });
}
