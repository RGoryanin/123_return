import {
  receptionPoints
} from "./receptionPoints";

function returnRegions () {
  let cityName;
  // на случай, если город ищется по ID
  let cityID;
  // временно привяжемся к Питеру
  // вот тут надо сделать привязку, по городу на сайте
  cityName = 'Санкт-Петербург'

  // если в массиве есть id - написать условие


  // ищем город с нашим обозначением cities
  let cityOffices = receptionPoints.filter(
    item => item.city == cityName
  );



  /*
  let citiOfficesID = receptionPoints.filter(
    item => item.city == cityID
  );
  */

  const section = document.querySelector(".section_regions-w-offices");
  const sectionCaptionName = section.querySelector(".city_name");
  const sectionMoreInfo = section.querySelector(".more__info");

  // выводим название города
  sectionCaptionName.textContent = cityName;

  // начинаем перечисление офисов
  sectionMoreInfo.innerHTML = "";


  cityOffices[0].points.forEach (function(){
    const createDiv = document.createElement('div');
    createDiv.classList.add('more__office');
    sectionMoreInfo.append(createDiv);
  });

  console.log(cityOffices[0].points);
}

export { returnRegions };
