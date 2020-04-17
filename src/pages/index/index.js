import './index.css';
import {
  sectionRerurn
} from "../../modules/sectionReturn";
import {
  popupShow
} from '../../modules/popupShow';

function moreMoscow() {
  const moreMoscowBlock = document.querySelector(".more_moscow");
  const moreTitle = moreMoscowBlock.querySelector(".more__title");

  moreTitle.addEventListener("click", moreMoscowShowInfo);
}

function moreMoscowShowInfo() {
  const moreMoscowBlock = document.querySelector(".more_moscow");
  const moreInfo = moreMoscowBlock.querySelector(".more__info");
  const moreArrow = moreMoscowBlock.querySelector(".more__arrow");

  moreInfo.classList.toggle("more__info_hidden");
  moreArrow.classList.toggle("more__arrow_rotate");
}

sectionRerurn ();
moreMoscow();
popupShow ();


