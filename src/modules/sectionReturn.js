const sectionReturnGood = document.querySelector(".section_return_good");
const sectionReturnBad = document.querySelector(".section_return_bad");

function sectionRerurn () {
  const dropDownGood = document.querySelector(".drop-down__list-item_rules-good");
  const dropDownBad = document.querySelector(".drop-down__list-item_rules-bad");

  dropDownGood.addEventListener("click", showSectionGood);
  dropDownBad.addEventListener("click", showSectionBad);
}

function showSectionGood () {
  if (sectionReturnBad.classList.contains("section_hidden")) {
    sectionReturnGood.classList.remove("section_hidden");
  } else {
    sectionReturnBad.classList.add("section_hidden")
    sectionReturnGood.classList.remove("section_hidden");
  }
}

function showSectionBad () {
  if (sectionReturnGood.classList.contains("section_hidden")) {
    sectionReturnBad.classList.remove("section_hidden");
  } else {
    sectionReturnGood.classList.add("section_hidden")
    sectionReturnBad.classList.remove("section_hidden");
  }
}

export { sectionRerurn }
