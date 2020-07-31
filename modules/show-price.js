import { carsPriceAverage } from "./calc-car-prices";
import { enableAllBuyButtons } from "./getCeap&ExpCar";

export function showCarsPriceAverage() {
    console.log("ბაზაში არშებული ავტომობილების, საშუალო ფასის დაბეჭდვა");
    let seachAveragePrice = document.getElementById("priceaverage");
    let priceaverage = carsPriceAverage(allCars);
    alert("ავტომობილების საშუალო ფასი არის" + " "+ priceaverage + "$");
  }
  