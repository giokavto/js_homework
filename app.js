// use strict-თ ჯავასკრიპტი იმოქმედებს მკაცრად განსაზღვრული პირობით
// "use strict";

import Car from "./modules/car";
import {displayDescription} from "./modules/car-descriptions";
import {
  getCheapCar, cheapCarsDate, 
  getExspensiveCar, expensiveCarDate, 
} from "./modules/getCeap&ExpCar";
import { showAveragePrice } from "./modules/show-price";
import showPopup from "./modules/show-popup";
import { displayDescription } from "./modules/car-descriptions";




  const mercedes = new Car("mercedes", "mercedes-benz", "e320", "red", 2015, 20000,);
  const audi = new Car("audi", "audi", "A5", "pink", 2008, 18000,);
  const mazda = new Car("mazda", "mazda", "atenza", "black", 2010, 13000,);
  const bmw = new Car("bmw", "bmw", "m5", "yellow", 2007, 10000,);

  let allCars = [audi, mercedes, mazda, bmw,];
////////////////////////////////////////////////////////////////////////
//start functions

function createAlert() {
    alert();
  }
  /////////////////////////
  // let carDiv = document.getElementById(allCars.id);
  // carDiv.querySelector(`.car-tittle`).innerHTML = allCars.manufacturer;


  let carHtmlNodes = Array.from(
    document.querySelectorAll(".display_description")
  );
  
  for (let i = 0; i < carHtmlNodes.length; i++) {
    carHtmlNodes[i].addEventListener("click", function () {
      const carId = carHtmlNodes[i].getAttribute("id");
      displayDescription(allCars, carId);
    });
  }
  
 
  ///////////////////////////////////acerage
  
  const averagePrice = document.querySelector("#priceaverage");
  if (averagePrice) {
    averagePrice.addEventListener("click", function () {
      showAveragePrice(allCars);
    });
  }
  


////////////////////////////////cheap car


const showCheapCar = document.querySelector('#cheapCar');
console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე იაფიანი ავტომობილის კონკრეტული მახასიათებლების ალერტში გამოტანა");
if(showCheapCar){
  showCheapCar.addEventListener('click', function () {
    let priceCheapcar = getCheapCar();
    alert(priceCheapcar)
  })
}

/////////////////////////expensive car

const showExpensiveCar = document.querySelector('#expensiveCar');
console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე ძვირიანი ავტომობილის კონკრეტული მახასიათებლების ალერტში გამოტანა");
if(showExpensiveCar){
  showExpensiveCar.addEventListener('click', function () {
    let priceExpensiveCar = getExspensiveCar(); 
    alert(priceExpensiveCar);
  })
}

//////////////showpop
const searchCarBuyPrice = document.querySelector("#showPoPup");
if (searchCarBuyPrice) {
  searchCarBuyPrice.addEventListener("click", function () {
    showPopup(allCars);
  });
}


///////////login function
const navigateToLogin = document.querySelector('.navigate_To_Login');
if(navigateToLogin){
  navigateToLogin.addEventListener('click', function navigateToLogin(){
    window.location = "login.html";
  })
}


const displayButton = document.querySelectorAll('.by-button');
if(displayButton){
  displayButton.addEventListener('click', function(){
    for(let i = 0; i < allCars.length; i++){
      let currenbutton = document.getElementById(allCars[i].id);
      currenbutton.querySelectorAll(".by-button");
      alert("გთხოვთ დალოგინდეთ");
    }
  })
}

















