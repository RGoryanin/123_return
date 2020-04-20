const receptionPoints = [
  {
    city: 'Абакан',
    points: [
      {
        address: 'г. Абакан ул. Чертыгашева, 126, 13',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Азов',
    points: [
      {
        address: 'г. Азов ул. Измайлова, 55',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Альметьевск',
    points: [
      {
        address: 'г. Альметьевск ул. Чехова, 19',
        time: 'понедельник-пятница: 09:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Амурск',
    points: [
      {
        address: 'г. Амурск Пр-т Строителей, 38',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Анапа',
    points: [
      {
        address: 'г. Анапа ул. Гребенская, 111',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Анапа ул. Крымская, 218, 19',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Ангарск',
    points: [
      {
        address: 'г. Ангарск, ул. 89-й квартал, 1',
        time: 'понедельник-пятница:	09:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Анжеро-Судженск',
    points: [
      {
        address: 'г. Анжеро-Судженск ул. им. 50 лет Октября, 15',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Апатиты',
    points: [
      {
        address: 'г. Апатиты ул. Бредова, 1',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Арзамас',
    points: [
      {
        address: 'г. Арзамас ул. 9 Мая, . 1/1',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Арзамас ул. Кольцова, 4',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Армавир',
    points: [
      {
        address: 'г. Армавир, ул. Советской Армии, 97, 27',
        time: 'понедельник-пятница:	10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Армавир, ул.Розы Люксембург, 99',
        time: 'понедельник-пятница:	10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Арсеньев',
    points: [
      {
        address: 'г. Арсеньев ул. Ломоносова, 15',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Артем',
    points: [
      {
        address: 'г. Артем ул. 1-я Рабочая, 38',
        time: 'понедельник-пятница: 09:00-18:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Артем ул. Фрунзе, 47/1, 1-ый этаж',
        time: 'понедельник-пятница: 09:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Архангельск',
    points: [
      {
        address: 'г. Архангельск, ул. Свободы, 53',
        time: 'понедельник-пятница:	10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Архангельск, пр. Ленинградский, 109 корп. 1',
        time: 'понедельник-пятница:	10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Асбест',
    points: [
      {
        address: 'г. Асбест ул. Ленинградская, 35',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Астрахань',
    points: [
      {
        address: 'г. Астрахань ул. Кирова, 84',
        time: 'понедельник-пятница: 08:30-20:00, суббота-воскресенье: 10:00-18:00'
      },
      {
        address: 'г. Астрахань ул. Селенского, 13, 103',
        time: 'понедельник-пятница: 10:00-20:00, суббота-воскресенье: 10:00-16:00'
      },
    ]
  },
  {
    city: 'Балаково',
    points: [
      {
        address: 'г. Балаково пр-т Героев, 41, 201',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Балахна',
    points: [
      {
        address: 'г. Балахна ул. Дзержинского, 1',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Балашиха',
    points: [
      {
        address: 'г. Балашиха ул. Объединения, 9/28',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Балашиха Заводской пр., 4',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Балашиха пр-т Ленина, 8',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Балашиха ул. Твардовского, 44',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Барнаул',
    points: [
      {
        address: 'г. Барнаул ул. Малахова, 83',
        time: 'понедельник-пятница: 09:00-20:00 , суббота-воскресенье: 10:00-16:00'
      },
      {
        address: 'г. Барнаул ул. Малахова, 179',
        time: 'понедельник-пятница: 08:00-20:00 , суббота: 10:00-18:00 , воскресенье:  10:00-16:00'
      },
      {
        address: 'г. Барнаул ул. Балтийская, 50',
        time: 'понедельник-пятница: 09:00-20:00 , суббота-воскресенье: 10:00-16:00'
      },
      {
        address: 'г. Барнаул пр-т Строителей, 26',
        time: 'понедельник-пятница: 09:00-20:00 , суббота-воскресенье: 10:00-16:00'
      },
      {
        address: 'г. Барнаул пр-т Ленина, 150',
        time: 'понедельник-пятница: 09:00-20:00 , суббота-воскресенье: 10:00-16:00'
      },
      {
        address: 'г. Барнаул Павловский тракт, 299',
        time: 'понедельник-пятница: 09:00-20:00 , суббота-воскресенье: 10:00-16:00'
      },
    ]
  },
  {
    city: 'Батайск',
    points: [
      {
        address: 'г. Батайск ул. Энгельса, 96',
        time: 'понедельник-пятница: 09:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Белгород',
    points: [
      {
        address: 'г. Белгород, ул. Харьковская, 34, корп.1',
        time: 'понедельник-пятница:	10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Белгород, ул. Губкина, 38а',
        time: 'понедельник-пятница:	09:00-20:00, суббота-воскресенье: 10:00-16:00'
      },
      {
        address: 'г. Белгород, пр-т Богдана Хмельницкого, 102',
        time: 'понедельник-пятница:	10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Белебей',
    points: [
      {
        address: 'г. Белебей ул. Революционеров, 1а',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Белореченск',
    points: [
      {
        address: 'г. Белореченск ул. Гоголя, 27',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Березовский',
    points: [
      {
        address: 'г. Березовский ул. Театральная, 22,, пом. 40,51,62,63',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Бердск',
    points: [
      {
        address: 'г. Бердск ул Вокзальная, 26, 116',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Березники',
    points: [
      {
        address: 'г. Березники ул. Черепанова, 22',
        time: 'понедельник-пятница: 09:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Бийск',
    points: [
      {
        address: 'г. Бийск, ул. Советская, 27/3',
        time: 'понедельник-пятница:	09:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Бийск, ул. Васильева, 79',
        time: 'понедельник-пятница:	10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Бирск',
    points: [
      {
        address: 'г. Бирск ул. Коммунистическая, 101',
        time: 'понедельник-пятница: 09:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Биробиджан',
    points: [
      {
        address: 'г. Биробиджан ул. Пионерская, 66, лит.Б',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Благовещенск',
    points: [
      {
        address: 'г. Благовещенск ул. Тенистая, 101а',
        time: 'понедельник-пятница: 09:00-19:00, суббота: 09:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Благовещенск ул. Зейская, 227, 7',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Бобров',
    points: [
      {
        address: 'г. Бобров, 22 Января ул, д.108',
        time: 'понедельник-пятница: 10:00-19:00 суббота-воскресенье: 10:00-17:00'
      },
    ]
  },
  {
    city: 'Бор',
    points: [
      {
        address: 'г. Бор ул. Ленина, 102, пом. 17',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Борисоглебск',
    points: [
      {
        address: 'г. Борисоглебск ул. Юбилейная, 96',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Боровичи',
    points: [
      {
        address: 'г. Боровичи ул. Подбельского, 27',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Бугульма',
    points: [
      {
        address: 'г. Бугульма ул. Мусы Джалиля, 52',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Буденновск',
    points: [
      {
        address: 'г. Буденновск ул. Розы Люксембург, 23А',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Братск',
    points: [
      {
        address: 'г. Братск, ул. Южная, дом 14, стр. 10',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      }
    ]
  },
  {
    city: 'Брянск',
    points: [
      {
        address: 'г. Брянск ул. Бурова, 14',
        time: 'понедельник-пятница: 09:00-19:00, суббота: 10:00-17:00, воскресенье: выходной'
      },
      {
        address: 'г. Брянск ул. Бежицкая, 7, 5',
        time: 'понедельник-пятница: 09:00-19:00, суббота-воскресенье: 10:00-16:00'
      },
      {
        address: 'г. Брянск ул. 3 Интернационала, 4',
        time: 'понедельник-пятница: 10:00-20:00, суббота: 09:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Бугуруслан',
    points: [
      {
        address: 'г. Бугуруслан, Ленинградская ул, д.41',
        time: 'понедельник-пятница: 09:30-18:00 суббота-воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Бузулук',
    points: [
      {
        address: 'г. Бузулук ул. Фрунзе, 8',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-17:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Великий Новгород',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Великие Луки',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Верхняя Пышма',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Верхняя Салда',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Владивосток',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Владимир',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Владикавказ',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Волгоград',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Волгодонск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Волжск',
    ort: 'Марий Эл',
    id: '15238',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Волжский',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Вологда',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Волхов',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Воронеж',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Воткинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Всеволожск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Выборг',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Выкса',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Вышний Вололочёк',
    ort: 'Тверская область',
    id: '18260',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Вязьма',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Гатчина',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Георгиевск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Геленджик',
    points: [
      {
        address: 'г. Геленджик, ул. Прасковеевская, д. 3',
        time: 'понедельник-пятница: 10:00-19:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Геленджик, ул. Советская, д. 77, оф. 12',
        time: 'понедельник-пятница: 10:00-20:00, суббота: 10:00-16:00, воскресенье: выходной'
      },
      {
        address: 'г. Геленджик, ул. Халтурина, д.11, оф. 11',
        time: 'понедельник-пятница: 09:00-19:00, суббота: 09:00-16:00, воскресенье: выходной'
      },
    ]
  },
  {
    city: 'Глазов',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Грязи',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Горно-Алтайск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Грозный',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Губкин',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Губкинский',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Гуково',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Гусь-Хрустальный',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Дмитров',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Димитровград',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Долгопрудный',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Домодедово',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Евпатория',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Елабуга',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Елец',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Екатеринбург',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ессентуки',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Железногорск',
    ort: 'Красноярский край',
    id: '3824',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Железногорск',
    ort: 'Курская область',
    id: '1362',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Жуковский',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Заречный',
    ort: 'Свердловская область',
    id: '1362',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Заринск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Зеленогорск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Зеленоград',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Зеленодольск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Златоуст',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Жуковский',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Иваново',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ижевск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Иркутск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Искитим',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Истра',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ишим',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Йошкар-Ола',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Казань',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Калининград',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Калуга',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Каменск-Уральский',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Каменск-Шахтинский',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Камень-на-Оби',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Камышин',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Канаш',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кандалакша',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Канск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Качканар',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Керчь',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кемерово',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кимры',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кингисепп',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кинешма',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кириши',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Киров',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кисловодск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Клинцы',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ковров',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Когалым',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Коломна',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Копейск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Королёв',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Корсаков',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кострома',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Краснодар',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Красногорск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Краснокамск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Красноярск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кропоткин',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Крымск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кстово',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Кунгур',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Курган',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Курганинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Курск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Курчатов',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Комсомольск-на-Амуре',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Лабинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Лабытнаги',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Лангепас',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ленинск-Кузнецкий',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Лесной',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ливны',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Липецк',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Лиски',
    ort: 'Воронежская область',
    id: '18659',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Лобня',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Люберцы',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Магадан',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Магнитогорск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Майкоп',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Мариинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Махачкала',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Мегион',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Междуреченск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Миасс',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Минеральные Воды',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Мирный',
    ort: 'Республика Саха (Якутия)',
    id: '6633',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Михайловка',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Михайловск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Мичуринск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Можайск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Мончегорск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Моршанск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Мурманск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Муром',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Мценск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Мыски',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Мытищи',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Набережные Челны',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Надым',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Назрань',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нальчик',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нарьян-Мар',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Находка',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Невинномысск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нерюнгри',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нефтекамск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нефтеюганск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нижневартовск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нижнекамск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нижний Новгород',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нижний Тагил',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новоалтайск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новодвинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новокузнецк',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новокуйбышевск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новомосковск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новороссийск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новосибирск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новотроицк',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новоуральск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новочебоксарск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новошахтинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новочеркасск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Новый Уренгой',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ногинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Норильск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нояьрьск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Нягань',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Обнинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Одинцово',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Озерск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Октябрьский',
    ort: 'Башкортостан респ.',
    id: '3332',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Омск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Оренбург',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Орёл',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Орск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Пенза',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Первоуральск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Пермь',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Петрозаводск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Петропавловск-Камчаткий',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Подольск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Прокопьевск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Псков',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Пушкино',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Пятигорск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Радужный',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Раменское',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ржев',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Рославль',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Россошь',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ростов-на-Дону',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Рубцовск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Рузаевка',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Рязань',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Салават',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Салехард',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Самара',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Санкт-Петербург',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Саранск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Сарапул',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Саратов',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Саров',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Сатка',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Саяногорск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Cевастополь',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Северодвинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Североморск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Северск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Сергиев Посад',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Серов',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Серпухов',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Симферополь',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Славянск-на-Кубани',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Смоленск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Снежинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Соликамск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Советский',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Сочи',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ставрополь',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Старый Оскол',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Стерлитамак',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ступино',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Сургут',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Сызрань',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Сыктывкар',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Таганрог',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Тамбов',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Тверь',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Тимашевск',
    ort: 'Краснодарский край',
    id: '739',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Тихвин',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Тихорецк',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Тольятти',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Томск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Торжок',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Троицк',
    ort: 'Челябинская область',
    id: '8589',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Туапсе',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Туймазы',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Тула',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Тюмень',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Улан-Уде',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ульяновск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Урюпинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Усолье-Сибирское',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Уссурийск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Усть-Лабинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Уфа',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ухта',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Феодосия',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Хабаровск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ханты-Манскийск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Химки',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Чайковский',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Чебаркуль',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Чебоксары',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Челябинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Череповец',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Черкесск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Чехов',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Чистополь',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Чита',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Чусовой',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Шадринск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Шахты',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Шелехов',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Шуя',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Щёлково',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Элиста',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Энгельс',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Югорск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Южно-Сахалинск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Якутск',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ялта',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ярославль',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
  {
    city: 'Ярцево',
    points: [
      {
        address: '',
        time: ''
      },
    ]
  },
];



export { receptionPoints };
