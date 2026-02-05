import { TimePeriod } from "../components/HistoricalDates/types";

export const timelineData: TimePeriod[] = [
  {
    id: 1,
    startYear: 2015,
    endYear: 2022,
    category: "Наука",
    events: [
      {
        year: 2015,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        year: 2016,
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        year: 2017,
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        year: 2018,
        description: "Запуск космического телескопа TESS для поиска экзопланет",
      },
    ],
  },
  {
    id: 2,
    startYear: 2006,
    endYear: 2014,
    category: "Технологии",
    events: [
      {
        year: 2007,
        description: "Презентация первого iPhone от Apple",
      },
      {
        year: 2008,
        description: "Запуск первой версии браузера Google Chrome",
      },
      {
        year: 2010,
        description: "Представление первого iPad",
      },
      {
        year: 2012,
        description: "SpaceX впервые доставила груз на МКС",
      },
    ],
  },
  {
    id: 3,
    startYear: 1999,
    endYear: 2005,
    category: "Кино",
    events: [
      {
        year: 1999,
        description: "Премьера фильма «Матрица»",
      },
      {
        year: 2001,
        description: "Выход первой части «Властелина колец»",
      },
      {
        year: 2002,
        description: "Премьера фильма «Поймай меня, если сможешь»",
      },
      {
        year: 2004,
        description: "Выход фильма «Начало» Кристофера Нолана",
      },
    ],
  },
  {
    id: 4,
    startYear: 1987,
    endYear: 1998,
    category: "Спорт",
    events: [
      {
        year: 1990,
        description: "Чемпионат мира по футболу в Италии",
      },
      {
        year: 1992,
        description: "XXV Летние Олимпийские игры в Барселоне",
      },
      {
        year: 1994,
        description: "Чемпионат мира по футболу в США",
      },
      {
        year: 1996,
        description: "Летние Олимпийские игры в Атланте",
      },
    ],
  },
  {
    id: 5,
    startYear: 1975,
    endYear: 1986,
    category: "Музыка",
    events: [
      {
        year: 1977,
        description: 'Выход альбома "Rumours" группы Fleetwood Mac',
      },
      {
        year: 1979,
        description: 'Релиз альбома "The Wall" группы Pink Floyd',
      },
      {
        year: 1982,
        description: 'Выход альбома "Thriller" Майкла Джексона',
      },
      {
        year: 1984,
        description: 'Релиз альбома "Purple Rain" Prince',
      },
    ],
  },
  {
    id: 6,
    startYear: 1960,
    endYear: 1974,
    category: "История",
    events: [
      {
        year: 1961,
        description: "Первый полёт человека в космос — Юрий Гагарин",
      },
      {
        year: 1963,
        description: 'Речь Мартина Лютера Кинга "У меня есть мечта"',
      },
      {
        year: 1969,
        description: "Высадка человека на Луну — миссия Apollo 11",
      },
      {
        year: 1973,
        description: "Окончание войны во Вьетнаме",
      },
    ],
  },
];
