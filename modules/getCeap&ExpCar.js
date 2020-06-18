import { expensivepCar, cheapCar } from "./calc-car-prices";

export let cheapCarsDate = cheapCar(allCars);

export function getCheapCar(){
 console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე იაფიანი ავტომობილის კონკრეტული მახასიათებლების პოვნა");
 return `ჩვენს კატალოგში ყველაზე იაფიანი ავტომობილის მახასიათებლები არის:  
           მარკა: ${cheapCarsDate.manufacturer},
           მოდელი: ${cheapCarsDate.model},
           ფერი: ${cheapCarsDate.color}, 
           გამოშვების წელი: ${cheapCarsDate.DateOfIssue}, 
           ფასი: ${cheapCarsDate.price}$`;
           
           
}

export let expensiveCarDate = expensivepCar(allCars);

// console.log(expensiveCarDate);

export function getExspensiveCar(){
 console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე ძვირიანი ავტომობილის კონკრეტული მახასიათებლების პოვნა");
 return `ჩვენს კატალოგში ყველაზე ძვიარიანი ავტომობილის მახასიათებლები არის:  
           მარკა: ${expensiveCarDate.manufacturer},
           მოდელი: ${expensiveCarDate.model},
           ფერი: ${expensiveCarDate.color}, 
           გამოშვების წელი: ${expensiveCarDate.DateOfIssue}, 
           ფასი: ${expensiveCarDate.price}$`;
}


/////////////////////////////////////button
export function enableAllBuyButtons() {
  for (let i = 0; i < allCars.length; i++) {
    document.getElementById(allCars[i].id + "Button").disabled = false;
  }
}