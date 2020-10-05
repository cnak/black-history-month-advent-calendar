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
    text: 'Founded the first black-owned hospital in America, and performed the worlds first successful heart surgery, in 1893',
    isOpen: false,
    hasBeenOpen: false,
    adventDate: new Date(2020, 9, 1),
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
  },
];

export const createCalendar = () => hatchArray;
