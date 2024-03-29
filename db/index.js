const popularWines = [
  {
    id: 1,
    cl: 75,
    cost: 380,
    year: "2013",
    avaliableAmount: 300,
    fixedPrice: false,
    quality: "High",
    description: 'Italian red wine "MILANO"',
    imgURL:
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    wineAllDescription: "High quality red wine, made with special technic",
    type: "Red",
  },
  {
    id: 31,
    cl: 75,
    cost: 230,
    year: "2013",
    avaliableAmount: 300,
    fixedPrice: false,
    quality: "High",
    description: 'French red wine "BROADLEAF"',
    imgURL:
      "https://images.unsplash.com/photo-1592845148519-b0d41df97ac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    wineAllDescription: "High quality red wine, made with special technic",
    type: "Red",
  },
  {
    id: 2,
    cl: 45,
    cost: 180,
    year: "2015",
    avaliableAmount: 300,
    fixedPrice: true,
    quality: "High",
    description: 'Spanish red wine "COUNTRY WINE"',
    imgURL:
      "https://images.unsplash.com/photo-1627260101457-21635a409ef3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    wineAllDescription: "High quality red wine, made with special technic",
    type: "Red",
  },
  {
    id: 3,
    cl: 75,
    cost: 100,
    year: "2022",
    fixedPrice: true,
    avaliableAmount: 300,
    quality: "Good",
    description: 'Swiss red wine "BORSAO"',
    imgURL:
      "https://images.unsplash.com/photo-1575136087248-7f2ea5f2fe36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    wineAllDescription: "Good quality white wine, made with regular technic",
    type: "White",
  },
  {
    id: 4,
    cl: 95,
    cost: 120,
    year: "2022",
    fixedPrice: true,
    avaliableAmount: 300,
    quality: "Medium",
    description: 'French red wine "RASTEAU"',
    imgURL:
      "https://images.unsplash.com/photo-1545608508-78f351665a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    wineAllDescription: "Medium quality white wine, made with regular technic",
    type: "White",
  },
  {
    id: 5,
    cl: 87,
    cost: 100,
    year: "2022",
    fixedPrice: true,
    avaliableAmount: 300,
    quality: "Good",
    description: 'French red wine "PAROS"',
    imgURL:
      "https://images.unsplash.com/photo-1628187832510-94b4d90445af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    wineAllDescription: "Medium quality white wine, made with regular technic",
    type: "Red",
  },
];

const winesNewSale = [
  {
    id: 13,
    cl: 75,
    cost: 280,
    year: "2013",
    avaliableAmount: 300,
    fixedPrice: false,
    quality: "High",
    description: 'Italian red wine "JACOBS CREEK"',
    imgURL:
      "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "High quality red wine, made with special technic",
    type: "Red",
  },
  {
    id: 15,
    cl: 75,
    cost: 120,
    year: "2013",
    avaliableAmount: 300,
    fixedPrice: false,
    quality: "Good",
    description: 'Swiss red wine "YUNGFRAU"',
    imgURL:
      "https://images.pexels.com/photos/7607997/pexels-photo-7607997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "Good quality red wine, made with regular technic",
    type: "Red",
  },
  {
    id: 11,
    cl: 45,
    cost: 470,
    year: "2015",
    avaliableAmount: 300,
    fixedPrice: true,
    quality: "High",
    description: 'Spanish red wine "VRANAC"',
    imgURL:
      "https://images.pexels.com/photos/5667613/pexels-photo-5667613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "High quality red wine, made with special technic",
    type: "Red",
  },
  {
    id: 17,
    cl: 75,
    cost: 100,
    year: "2022",
    fixedPrice: true,
    avaliableAmount: 300,
    quality: "Medium",
    description: 'French red wine "MUNI"',
    imgURL:
      "https://images.pexels.com/photos/10963571/pexels-photo-10963571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "Medium quality red wine, made with regular technic",
    type: "Red",
  },
  {
    id: 19,
    cl: 95,
    cost: 120,
    year: "2022",
    fixedPrice: true,
    avaliableAmount: 300,
    quality: "Medium",
    description: 'Italian white wine "PALACIO DE MENADI',
    imgURL:
      "https://images.pexels.com/photos/917831/pexels-photo-917831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "Medium quality white wine, made with regular technic",
    type: "White",
  },
  {
    id: 20,
    cl: 87,
    cost: 100,
    year: "2022",
    fixedPrice: true,
    avaliableAmount: 300,
    quality: "Good",
    description: 'French red wine "RAISIN"',
    imgURL:
      "https://images.pexels.com/photos/7809759/pexels-photo-7809759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "Good quality red wine, made with regular technic",
    type: "Red",
  },
];
const winesPremium = [
  {
    id: 21,
    cl: 75,
    cost: 280,
    year: "2019",
    avaliableAmount: 300,
    fixedPrice: false,
    quality: "Good",
    description: 'Spanish white wine "ALAMEDA"',
    imgURL:
      "https://images.pexels.com/photos/8762151/pexels-photo-8762151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "Good quality white wine, made with regular technic",
    type: "White",
  },
  {
    id: 32,
    cl: 75,
    cost: 110,
    year: "2014",
    avaliableAmount: 300,
    fixedPrice: false,
    quality: "Medium",
    description: 'Italian white wine "PINOT GRIGIO"',
    imgURL:
      "https://images.pexels.com/photos/10054300/pexels-photo-10054300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "Good quality white wine, made with regular technic",
    type: "White",
  },
  {
    id: 33,
    cl: 45,
    cost: 180,
    year: "2015",
    avaliableAmount: 300,
    fixedPrice: true,
    quality: "High",
    description: 'Italian white wine "GRANDE ALBERONE"',
    imgURL:
      "https://images.pexels.com/photos/10822127/pexels-photo-10822127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "High quality red wine, made with special technic",
    type: "Red",
  },
  {
    id: 14,
    cl: 75,
    cost: 100,
    year: "2023",
    fixedPrice: true,
    avaliableAmount: 300,
    quality: "Medium",
    description: 'Swiss red wine "WILLAKENZIE ESTATE"',
    imgURL:
      "https://images.pexels.com/photos/696618/pexels-photo-696618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "Medium quality red wine, made with regular technic",
    type: "Red",
  },
  {
    id: 22,
    cl: 95,
    cost: 1000,
    year: "2000",
    fixedPrice: true,
    avaliableAmount: 300,
    quality: "Super High",
    description: 'French red wine "COASTAL SERIES"',
    imgURL:
      "https://images.pexels.com/photos/14347971/pexels-photo-14347971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription:
      "Super high quality red wine, made with super special technic",
    type: "Red",
  },
  {
    id: 76,
    cl: 87,
    cost: 100,
    year: "2022",
    fixedPrice: true,
    avaliableAmount: 300,
    quality: "Medium",
    description: 'French red wine "Protos"',
    imgURL:
      "https://images.pexels.com/photos/7628680/pexels-photo-7628680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    wineAllDescription: "Medium quality red wine, made with regular technic",
    type: "Red",
  },
];

module.exports = {
  popularWines,
  winesNewSale,
  winesPremium,
};
