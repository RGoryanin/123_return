function returnRegions () {
  const addresses = [
    {
      city: 'Санкт-Петербург',
      addresses: [
        {
          address: 'г. Санкт-Петербург пр-т Лиговский, 50, корп.13, 101а',
          time: 'ежедневно: 08:00-21:00'
        },
        {
          address: 'тестовый адрес',
          time: 'тестовое время'
        },
      ]
    }
  ];
  const RegionBlock = document.querySelector(".section_regions-w-offices");
  const moreCityName = RegionBlock.querySelector(".city_name");
  const moreInfo = RegionBlock.querySelector(".more__info");
  moreCityName.textContent = addresses[0].city;
  moreInfo.innerHTML = "";
  addresses[0].addresses.forEach(
    function newOffice () {
      const createOffice = document.createElement("div");
      createOffice.classList.add("more__office");
      moreInfo.append(createOffice);

      const moreOffice = document.getElementsByClassName(".more__office");
      moreOffice.forEach(
        function newAddress () {
          const createAddress = document.createElement("address");
          const createTime = document.createElement("span");
          createAddress.textContent = "адрес";
          createAddress.classList.add("more__address");
          moreOffice.append(createAddress);
          createTime.textContent = "время";
          createTime.classList.add("more__time");
          moreOffice.append(createTime);
        }
      )
    }
  );
}



export { returnRegions };
