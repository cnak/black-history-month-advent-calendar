// eslint-disable-next-line no-unused-vars
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const hatchArray = [
  {
    id: 'hatch-1',
    nr: 1,
    name: 'Daniel Hale Williams',
    img: './img/1.jpg',
    text: `'Daniel Hale Williams (January 18, 1856 – August 4, 1931) was an African-American general surgeon. In 1893 he was the second surgeon to successfully repair a heart wound.
Early life

Daniel Hale Williams III was born on January 18, 1856, in Hollidaysburg, Pennsylvania, to Sarah Price Williams and Daniel Hale Williams II, who was a barber. The couple had several children. Williams III started as a shoemaker apprentice. Later he worked with the Equal Rights League, which was a black civil rights organization active during the Reconstruction era. He went to Chicago Medical college.
Public life

In 1891, Williams opened Provident Hospital and Training School for Nurses. It was the first hospital with an interracial staff. In 1893, Williams was the second surgeon to perform open-heart surgery in the United States. The following year, he became chief surgeon at Freedmen's Hospital.`,
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 1),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-2',
    nr: 2,
    name: 'Cedric',
    img: './img/2.jpg',
    text: '',
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 2),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-3',
    nr: 3,
    name: 'Cedric',
    img: './img/3.jpg',
    text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do e',
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 3),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-4',
    nr: 4,
    name: 'Cedric',
    img: './img/4.jpg',
    text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do e',
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 4),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-5',
    nr: 5,
    name: 'Cedric',
    img: './img/5.jpg',
    text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do e',
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 5),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-6',
    nr: 6,
    name: 'Cedric',
    img: './img/6.jpg',
    text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do e',
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 6),
    frontColor: '#E8AA24'
  },
  {
    id: 'hatch-7',
    nr: 7,
    name: 'Cedric',
    img: './img/7.jpg',
    text: 'What nationality is Santa Claus? North Polish',
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 7),
    frontColor: '#E55F13'
  },
  {
    id: 'hatch-8',
    nr: 8,
    name: 'Cedric',
    img: './img/8.jpg',
    text: 'What kind of motorbike does Santa ride? A Holly Davidson!',
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 8),
    frontColor: '#647D1C'
  },
  {
    id: 'hatch-9',
    nr: 9,
    img: './img/9.jpg',
    name: 'Cedric',
    text: "Who is never hungry at Christmas? The turkey - he's always stuffed!",
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 9),
    frontColor: '#E8AA24'
  }
];

export const createCalendar = () => hatchArray;
