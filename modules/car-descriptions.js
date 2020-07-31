import { findCardById } from "./find-cars";

export function findCardById(allCars, carId) {
    console.log("ყველა ავტომობილის მონაცემის პოვნის ღილაკი");
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].id === carId) {
        return allCars[i];
      }
    }
  }
  
  //////////////////////////////////
  export function getDescription(foundCar) {
    console.log("კონკრეტული ავტომობილების მონაცემების ამოღება, სათითაოდ");
    return `ამ ავტომობილის მახასიათებლები არის:  
            მარკა: ${foundCar.manufacturer},
            მოდელი: ${foundCar.model},
            ფერი: ${foundCar.color}, 
            გამოშვების წელი: ${foundCar.DateOfIssue}, 
            ფასი: ${foundCar.price}$`;
  }
  
  ///////////////////////////////
  export function displayDescription(el) {
    let carId = el.parentNode.id;
    console.log("ავტომობილის სურათზე კლიკის დროს, იმავე ავტომობილის მონაცემების ალერტში გამოტანა");
    let foundCar = findCardById(carId);
    let description = getDescription(foundCar);
  
    alert(description);
  }

