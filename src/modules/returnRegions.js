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
  addresses.forEach(
    function() {
      const createOffice = document.createElement("div");
      const createAddress = document.createElement("address");
      const createTime = document.createElement("span");
      createOffice.classList.add("more__office");
      moreInfo.append(createOffice);

      const moreOffice = document.querySelector(".more__office");
      createAddress.classList.add("more__address");
      createAddress.textContent = "adresss";
      moreOffice.append(createAddress);

      createTime.classList.add("more__time");
      createTime.textContent = "time";
      moreOffice.append(createTime);
    }
  )
  console.log("")
}

export { returnRegions };
