import {
  receptionPoints
} from "./receptionPoints";

function returnRegions () {
  const body = document.getElementById('body');
  // название города
  const dataCityName = body.getAttribute('data-city-name');
  // id города
  const dataGeoCityID = body.getAttribute('data-geo-city-id');


  // временно привяжемся к Питеру
  // вот тут надо сделать привязку, по городу на сайте

  // если в массиве есть id - написать условие
  let cityOfficesO = receptionPoints.find(
    item => item.city == dataGeoCityID
  );

  console.log(cityOfficesO);

  // ищем город с нашим обозначением cities
  let cityOffices = receptionPoints.find(
    item => item.city == dataCityName
  );

  /*
  let citiOfficesID = receptionPoints.find(
    item => item.city == cityID
  );
  */

  const section = document.querySelector(".section_regions-w-offices");
  const sectionCaptionName = section.querySelector(".city_name");
  const sectionMoreInfo = section.querySelector(".more__info");

  // выводим название города
  sectionCaptionName.textContent = dataCityName;

  // начинаем перечисление офисов
  sectionMoreInfo.innerHTML = "";

  cityOffices.points.forEach (function(point){
    const createDiv = document.createElement('div');
    createDiv.classList.add('more__office');

    const createAddress = document.createElement('address');
    createAddress.classList.add('more__address');
    createAddress.textContent = point.address;
    createDiv.append(createAddress);

    const createTime = document.createElement('span');
    createTime.classList.add('more__time');
    createTime.textContent = point.time;
    createDiv.append(createTime);

    sectionMoreInfo.append(createDiv);

  });
}

export { returnRegions };
