//Lesson 02

/**
 * 02.js
 * authot: Meto
 * Date: 05,16,2020
 */

/////////////////////////////////////////////
//chalenge 3
///////////////////////////////////////////////
// let car = {
//   marka: "Toyota",
//   model: "Highlender",
//   color: "Grey",
//   year: 2018,
//   horsePower: 370,
//   price: 37777,
// };

// console.log("About this car : ");

// for (let key in car) {
//   console.log(`${key} , ${car[key]}`);
// }
// console.log("\n");
// console.log("\n");
// ////////////////////////////////////////////////////
// /////////////

// let car1 = {
//   marka: "Toyota",
//   model: "Prius",
//   color: "Grey",
//   year: 2018,
//   horsePower: 160,
//   price: 13333,
// };

// console.log("About this car : ");
// for (let key in car1) {
//   console.log(`${key}, ${car1[key]}`);
// }

// console.log("\n");
// console.log("\n");
// ////////////////////////////////////
// ////
// let car2 = {
//   marka: "BMW",
//   model: "E35",
//   color: "Grey",
//   year: 2012,
//   horsePower: 280,
//   price: 11111,
// };

// console.log("About this car : ");
// for (let key in car2) {
//   console.log(`${key}, ${car2[key]}`);
// }

// console.log("\n");
// console.log("\n");
// ///////////////////////////////////////////////
// ///
// let car3 = {
//   marka: "Mercedes",
//   model: "GL",
//   color: "Grey",
//   year: 2016,
//   horsePower: 450,
//   price: 28000,
// };

// console.log(
//   `About car: \n Marka: ${car3.marka}, \n Color: ${car3.color}, \n Model: ${car3.model}, \n Year: ${car3.year}, \n HorsePower: ${car3.horsePower}, \n Price: ${car3.price}`
// );

// console.log("\n");
// console.log("\n");

/////////////////////////////
//сhalenge 4
//////////////////////////

let car = {
  marka: "Toyota",
  model: "Highlender",
  color: "Grey",
  year: 2018,
  horsePower: 370,
  price: 31777,
};

let car1 = {
  marka: "Ford",
  model: "Mustang",
  color: "Black",
  year: 1969,
  horsePower: 340,
  price: 37000,
};

let car2 = {
  marka: "Mercedes-Benz",
  model: "CLS-50",
  color: "Grey",
  year: 2014,
  horsePower: 280,
  price: 13500,
};

let car3 = {
  marka: "Mini",
  model: "Cooper",
  color: "Red",
  year: 2013,
  horsePower: 170,
  price: 12200,
};

let allCars = [car, car1, car2, car3];
let carFound = false;
for (i = 0; i < allCars.length; i++) {
  if (allCars[i].price < 15000) {
    carFound = true;
  }
}
if (carFound) {
  console.log("Yes, we have some car's.");
} else {
  console.log("No, sorry we dont have car's in this price.");
}
