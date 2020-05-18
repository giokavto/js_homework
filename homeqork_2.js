// lesson 2
/*
homework_2.js
author: giorgi kavtaradze
*/


// homework_2.1

let car1 = {
    manufacturer: "Audi",
    model: "A4",
    DateOfIssue: 2019,
    price: 20000,
}

console.log(car1);

let car2 = {
    manufacturer: "mercedes-benz",
    model: "e320",
    DateOfIssue: 2015,
    price: 18000,
}

// console.log(car2);

let car3 = {
    manufacturer: "mazda",
    model: "atenza",
    DateOfIssue: 2010,
    price: 13000,
}

// console.log(car3);

let car4 = {
    manufacturer: "bmw",
    model: "m5",
    DateOfIssue: 2007,
    price: 10000,
}

// console.log(car4);

// homework_2.1 end

// homework_2.2

let cars = [];

cars.push(car1);
cars.push(car2);
cars.push(car3);
cars.push(car4);

// console.log(cars.length)

let cheapCars = [];
let expensiveCars = [];

let listOfCheapCars = "";
let listOfExpensiveCars = "";

for(let i = 0; i < cars.length; i++){
    if(cars[i].price < 15000){
        listOfCheapCars = listOfCheapCars + " " + cars[i].manufacturer + ": " + cars[i].model + ", ";
    } else{
        listOfExpensiveCars = listOfExpensiveCars + " " + cars[i].manufacturer + ": " + cars[i].model + ", ";
    }
}
console.log("You Can Buy It: " + listOfCheapCars);

console.log("Unfortunately you can’t buy a car at this price: " + listOfExpensiveCars);
