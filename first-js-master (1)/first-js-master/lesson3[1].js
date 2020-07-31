//Lesson 03

/**
 * 03.js
 * authot: Meto
 * Date: 05,19,2020
 */

/////////////////////////////////////////////
//chalenge 1 / 2
///////////////////////////////////////////////
// let car = {

let car2 = {
  marka: "Toyota",
  model: "Highlender",
  color: "Grey",
  year: 2018,
  horsePower: 370,
  price: 31777,
};
//////////////////////////////////////////
let car1 = {
  marka: "Toyota",
  model: "Prius",
  color: "Grey",
  year: 2018,
  horsePower: 160,
  price: 13000,
};
////////////////////////////////
let car3 = {
  marka: "BMW",
  model: "E35",
  color: "Grey",
  year: 2012,
  horsePower: 280,
  price: 8900,
};
////////////////////////////////////////
let car = {
  marka: "Mercedes",
  model: "GL",
  color: "Grey",
  year: 2016,
  horsePower: 450,
  price: 28000,
};
/////////////////////////////////////////
let allCars = [car, car1, car2, car3];

function calcAveragePrice(items, value) {
  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    sum += items[i][value];
  }

  let result = sum / items.length;
  return result;
}

let calcAverage = calcAveragePrice(allCars, "price");
console.log(`Average price is : ${calcAverage}`);

// function foundCarWithMaxPrice(items) {
//   let maxPrice = 0;
//   let maxPriceCar = "";
//   for (i = 0; i < items.length; i++) {
//     if (maxPrice < items[i].price) {
//       maxPrice = items[i].price;
//       maxPriceCar = items[i];
//     }
//   }
//   return maxPriceCar;
// }
// console.log(`The most expensive car is :`, foundCarWithMaxPrice(allCars));
