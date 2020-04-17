function popupShow () {
  const popup = document.querySelector(".popup");
  const background = document.querySelector(".background");
  const linkForCorporate = document.querySelector(".link_for-corporate");
  const linkForHidden = document.querySelector(".link_close-popup");

  linkForCorporate.addEventListener("click", function () {
    popup.classList.remove("popup_hidden");
    background.classList.remove("background_hidden");
  })

  linkForHidden.addEventListener("click", function () {
    popup.classList.add("popup_hidden");
    background.classList.add("background_hidden");
  })
}

export { popupShow }
