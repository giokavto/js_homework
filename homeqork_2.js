
  let allCars = [
    {
        id: "audi",
        manufacturer: "audi",
        model: "A5",
        color: "pink",
        DateOfIssue: 2008,
        price: 19000,
    },
    {
        id: "mercedes",
        manufacturer: "mercedes-benz",
        model: "e320",
        color: "red",
        DateOfIssue: 2015,
        price: 18000,
    },
    {
        id: "mazda",
        manufacturer: "mazda",
        model: "atenza",
        color: "black",
        DateOfIssue: 2010,
        price: 13000,
    },
    {
        id: "bmw",
        manufacturer: "bmw",
        model: "m5",
        color: "yellow",
        DateOfIssue: 2007,
        price: 10000,
    },
  ];
  
////////////////////////////////////////////////////////////////////////
//start functions

function createAlert() {
    alert();
  }
  /////////////////////////
  
  function findCardById(carId) {
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].id === carId) {
        return allCars[i];
      }
    }
  }
  
  //////////////////////////////////
  function getDescription(foundCar) {
    return `ამ ავტომობილის მახასიათებლები არის:  
            მარკა: ${foundCar.manufacturer},
            მოდელი: ${foundCar.model},
            ფერი: ${foundCar.color}, 
            გამოშვების წელი: ${foundCar.DateOfIssue}, 
            ფასი: ${foundCar.price}$`;
  }
  
  ///////////////////////////////
  function displayDescription(carId) {
    let foundCar = findCardById(carId);
    let description = getDescription(foundCar);
  
    alert(description);
  }
  
  ///////////////////////////////////
  function findPriceLessThan(price) {
    let cars = [];
    for (let i = 0; i < allCars.length; i++) {
      if (price > allCars[i].price) cars.push(allCars[i]);
    }
    return cars;
  }
  ///////////////////////////////////
  function getDescriptions(cars) {
    let descriptions = "";
    for (let i = 0; i < cars.length; i++) {
      descriptions += `მარკა : ${cars[i].manufacturer} , მოდელი : ${cars[i].model} , ფასი : ${cars[i].price} \n`;
    }
    return descriptions;
  }

  function showPopup() {
    let searchBar = document.getElementById("searchCars");
    let price = searchBar.value;
    let cars = findPriceLessThan(price);
    let description = getDescriptions(cars);
    if (description) {
      alert(description);
    } else {
      alert("სამწუხაროდ, ამ ფასად ავტომობილს ვერ შეიძენთ");
    }
  }
  
function carsPriceAverage(allCars) {
  let sum = 0;
  for(let i = 0; i < allCars.length; i++){
      sum += allCars[i].price;
  }
  let average = sum / allCars.length;
  return average;
}

function showCarsPriceAverage() {
  let seachAveragePrice = document.getElementById("priceaverage");
  let priceaverage = carsPriceAverage(allCars);
  alert("ავტომობილების საშუალო ფასი არის" + " "+ priceaverage + "$");
}



























// console.log(car4);

// homework_2.1 end

// homework_2.2

// let cars = [];

// cars.push(car1);
// cars.push(car2);
// cars.push(car3);
// cars.push(car4);







// console.log(cars.length)

// let cheapCars = [];
// let expensiveCars = [];

// let listOfCheapCars = "";
// let listOfExpensiveCars = "";

// for(let i = 0; i < cars.length; i++){
//     if(cars[i].price < 15000){
//         listOfCheapCars = listOfCheapCars + " " + cars[i].manufacturer + ": " + cars[i].model + ", ";
//     } else{
//         listOfExpensiveCars = listOfExpensiveCars + " " + cars[i].manufacturer + ": " + cars[i].model + ", ";
//     }
// }
// console.log("You Can Buy It: " + listOfCheapCars);

// console.log("Unfortunately you can’t buy a car at this price: " + listOfExpensiveCars);
