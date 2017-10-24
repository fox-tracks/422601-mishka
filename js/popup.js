var productBtn = document.querySelector(".product__btn");
var popup = document.querySelector(".popup");
var sizeS = popup.querySelector(".size-choice__btn--s");
var sizeM = popup.querySelector(".size-choice__btn--m");
var sizeL = popup.querySelector(".size-choice__btn--l");
var sizeChoice = popup.querySelector(".size-choice");
var popupBlock = popup.querySelector(".popup__block");

productBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--shown");
  sizeM.focus();
});

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
sizeChoice.addEventListener("click", onSubmit);
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("popup--show")) {
            popup.classList.remove("popup--show");
        }
    }
});

