import { enableAllBuyButtons } from "./getCeap&ExpCar";

export function findCardById(allCars, carId) {
    console.log("ყველა ავტომობილის მონაცემის პოვნის ღილაკი");
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].id === carId) {
        return allCars[i];
      }
    }
  }

   ///////////////////////////////////
 export function findPriceLessThan(price) {
  let cars = [];
  console.log("ფასების მიხედვით ავტომობილების მონაცემების პოვნა");
  for (let i = 0; i < allCars.length; i++) {
    if (price > allCars[i].price) cars.push(allCars[i]);
  }
  return cars;
 }
 
//////////////////////
  export function getDescriptions(cars) {
    let descriptions = "";
    for (let i = 0; i < cars.length; i++) {
      descriptions += `მარკა : ${cars[i].manufacturer} , მოდელი : ${cars[i].model} , ფასი : ${cars[i].price} \n`;
    }
    return descriptions;
  }

 