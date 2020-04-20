function moreRegion() {
  const moreRegionBlock = document.querySelector(".more_region");
  const moreTitle = moreRegionBlock.querySelector(".more__title");

  moreTitle.addEventListener("click", moreRegionShowInfo);
}

function moreRegionShowInfo() {
  const moreRegionBlock = document.querySelector(".more_region");
  const moreInfo = moreRegionBlock.querySelector(".more__info");
  const moreArrow = moreRegionBlock.querySelector(".more__arrow");

  moreInfo.classList.toggle("more__info_hidden");
  moreArrow.classList.toggle("more__arrow_rotate");
}

export { moreRegion };
