// use strict-თ ჯავასკრიპტი იმოქმედებს მკაცრად განსაზღვრული პირობით
// "use strict";

let user1 = {
    username: "giorgi1994",
    email: "giorgi1994@gmail.com",
    password: "1423AR$",
    
  };
  
  let user2 = {
    username: "spophia1990",
    password: "f12374G&",
    email: "spophia1990@gmail.com",
  };
  
  let user3 = {
    username: "joni1988",
    password: "e1334LJ*",
    email: "joni1988@gmail.com",
  };
  
  let user4 = {
    username: "katerina1989",
    password: "123884567",
    email: "katerina1989@gmail.com",
  };
  
  let user5 = {
    username: "lazare1995",
    password: "4548415121",
    email: "lazare1995@gmail.com",
  };
  
  let users = [user1, user2, user3, user4, user5];
  
  function getFoundUser(users, possibleUsername) {
    for (i = 0; i < users.length; i++) {
      if (users[i].username === possibleUsername) {
        return users[i];
      }
    }
  }

  function getFoundEmail(users, possibleEmail) {
    for (i = 0; i < users.length; i++) {
      if (users[i].email === possibleEmail) {
        return users[i];
      }
    }
  }
  
 let checkPassword = (user, possiblePassword) => {
    let isSame = user.password === possiblePassword;
    return isSame;
  }
  
  
////////////////////////////

  function login(email, password) {
    let passwordStrong = /^.*(?=.*[A-Z]{1,})(?=.*[^\w]{1,})(?=.*[0-9]{1,})(?=.*[\w]).{6,20}$/;
    let isPassworStrong = passwordStrong.exec(password);
    let possibleE = getFoundEmail(users, email);
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isMailformat = mailformat.exec(email);
    if (!possibleE ?? !isMailformat) {
      console.log("ამ მეილით მომხმარებელი ვერ მოიძებნა ან მეილი არასწორ ფორმატში გაქვთ შეყვანილი");
      alert("ამ მეილით მომხმარებელი ვერ მოიძებნა ან მეილი არასწორ ფორმატში გაქვთ შეყვანილი");
    } else {
      let isPasswordValid = checkPassword(possibleE, password,);
      if (isPasswordValid) {
        console.log("წარმატებით შეხვედით სისტემაში .");
        alert("წარმატებით შეხვედით სისტემაში .");
        window.location = "index.html";
        if (!isPassworStrong) {
          console.log(
            "მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი"
          );
          alert("მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი");
          window.location = "index.html";
        }
      } else {
        console.log("პაროლი არასწორია");
        alert("პაროლი არასწორია");
      }
    }
    
  }
  //////////////////////
  $(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    
    let input = $("#password");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

let  tryLogin = () => {
    // let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    

    login(email, password,);
}
  



// function login(username, password) {
//   let possibleUser = getFoundUser(users, username);
//   if (!possibleUser) {
//     console.log("მომხმარებელი ამ სახელით არ მოიძებნა");
//     alert("მომხმარებელი ამ სახელით არ მოიძებნა");
//   } else {
//     let possibleEmail = getFoundEmail(email, possibleEmail);
//     let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(!possibleEmail ?? !mailformat){
//       console.log("ამ მეილით მომხმარებელი ვერ მოიძებნა ან მეილი არასწორ ფორმატში გაქვთ შეყვანილი");
//       alert("ამ მეილით მომხმარებელი ვერ მოიძებნა ან მეილი არასწორ ფორმატში გაქვთ შეყვანილი");
//     }
//   } else {
//     let isPasswordValid = checkPassword(possibleUser, possibleEmail, mailformat,  password,);
//     if (isPasswordValid) {
//       console.log("წარმატებით შეხვედით სისტემაში .");
//       alert("წარმატებით შეხვედით სისტემაში .");
//       if (password.length < 8) {
//         console.log(
//           "მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი"
//         );
//         alert("მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი");
//         window.location = "index.html";
//       }
//     } else {
//       console.log("პაროლი არასწორია");
//       alert("პაროლი არასწორია");
//     }
//   }
  
// }



////////////////////////// end login js before 8 class/lesson

/////////////// როგორ ვქმნიდით ობიექტებს და მასივებს კლასებამდე

// use strict-თ ჯავასკრიპტი იმოქმედებს მკაცრად განსაზღვრული პირობით
// "use strict";

  let allCars = [
    {
        id: "audi",
        manufacturer: "audi",
        model: "A5",
        color: "pink",
        DateOfIssue: 2008,
        price: 18000,
    },
    {
        id: "mercedes",
        manufacturer: "mercedes-benz",
        model: "e320",
        color: "red",
        DateOfIssue: 2015,
        price: 20000,
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
  // let carDiv = document.getElementById(allCars.id);
  // carDiv.querySelector(`.car-tittle`).innerHTML = allCars.manufacturer;


  function findCardById(carId) {
    console.log("ყველა ავტომობილის მონაცემის პოვნის ღილაკი");
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].id === carId) {
        return allCars[i];
      }
    }
  }
  
  //////////////////////////////////
  function getDescription(foundCar) {
    console.log("კონკრეტული ავტომობილების მონაცემების ამოღება, სათითაოდ");
    return `ამ ავტომობილის მახასიათებლები არის:  
            მარკა: ${foundCar.manufacturer},
            მოდელი: ${foundCar.model},
            ფერი: ${foundCar.color}, 
            გამოშვების წელი: ${foundCar.DateOfIssue}, 
            ფასი: ${foundCar.price}$`;
  }
  
  ///////////////////////////////
  function displayDescription(el) {
    let carId = el.parentNode.id;
    console.log("ავტომობილის სურათზე კლიკის დროს, იმავე ავტომობილის მონაცემების ალერტში გამოტანა");
    let foundCar = findCardById(carId);
    let description = getDescription(foundCar);
  
    alert(description);
  }
  
  ///////////////////////////////////
  function findPriceLessThan(price) {
    let cars = [];
    console.log("ფასების მიხედვით ავტომობილების მონაცემების პოვნა");
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
    console.log("კონკრეტულ ფასად ავტომობილების პოვნის შემთხვევაში, ამ ავტომობილების მონაცემების დაბეჭდვა, თუ ვერ მოიძებნა ამ ფასად ავტომობილი, შესაბამისი შეტყობინების გამოტანა");
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
  ////////////////////////////// cars price average
function carsPriceAverage(allCars) {
  console.log("ბაზაში არშებული ავტომობილების, საშუალო ფასის გამოთვლა");
  let sum = 0;
  for(let i = 0; i < allCars.length; i++){
      sum += allCars[i].price;
  }
  let average = sum / allCars.length;
  return average;
}

function showCarsPriceAverage() {
  console.log("ბაზაში არშებული ავტომობილების, საშუალო ფასის დაბეჭდვა");
  let seachAveragePrice = document.getElementById("priceaverage");
  let priceaverage = carsPriceAverage(allCars);
  alert("ავტომობილების საშუალო ფასი არის" + " "+ priceaverage + "$");
}

///////////////button
function enableAllBuyButtons() {
  for (let i = 0; i < allCars.length; i++) {
    document.getElementById(allCars[i].id + "Button").disabled = false;
  }
}

////////////////////////////////cheap car

function cheapCar(allCars){
  console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე იაფიანი ავტომობილის პოვნა");
  let minCar = allCars[0];
  for(let i = 1; i < allCars.length; i++){
      if(allCars[i].price < minCar.price){
        minCar = allCars[i];
      }
  }
  return minCar;
}

let cheapCarsDate = cheapCar(allCars);

function getCheapCar(){
  console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე იაფიანი ავტომობილის კონკრეტული მახასიათებლების პოვნა");
  return `ჩვენს კატალოგში ყველაზე იაფიანი ავტომობილის მახასიათებლები არის:  
            მარკა: ${cheapCarsDate.manufacturer},
            მოდელი: ${cheapCarsDate.model},
            ფერი: ${cheapCarsDate.color}, 
            გამოშვების წელი: ${cheapCarsDate.DateOfIssue}, 
            ფასი: ${cheapCarsDate.price}$`;
            
            
}

function showCheapCar() {
  console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე იაფიანი ავტომობილის კონკრეტული მახასიათებლების ალერტში გამოტანა");
  let searchCheapCar = document.getElementById("cheapCar");
  let priceCheapcar = getCheapCar();
  alert(priceCheapcar)
}

/////////////////////////expensive car

function expensivepCar(allCars){
  console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე ძვირიანი ავტომობილის პოვნა");
  let maxCar = allCars[0];
  for(let i = 1; i < allCars.length; i++){
      if(allCars[i].price > maxCar.price){
        maxCar = allCars[i];
      }
  }
  return maxCar;
}
let expensiveCarDate = expensivepCar(allCars);

// console.log(expensiveCarDate);

function getExspensiveCar(){
  console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე ძვირიანი ავტომობილის კონკრეტული მახასიათებლების პოვნა");
  return `ჩვენს კატალოგში ყველაზე ძვიარიანი ავტომობილის მახასიათებლები არის:  
            მარკა: ${expensiveCarDate.manufacturer},
            მოდელი: ${expensiveCarDate.model},
            ფერი: ${expensiveCarDate.color}, 
            გამოშვების წელი: ${expensiveCarDate.DateOfIssue}, 
            ფასი: ${expensiveCarDate.price}$`;
}

function showExpensiveCar(){
  console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე ძვირიანი ავტომობილის კონკრეტული მახასიათებლების ალერტში გამოტანა");
  let searchExpensiveCar = document.getElementById("expensiveCar");
  let priceExpensiveCar = getExspensiveCar(); 
  alert(priceExpensiveCar);
}

///////////login function

function navigateToLogin() {
  window.location = "login.html";
}

let displayButton = () => {
    for(let i = 0; i < allCars.length; i++){
    let currenbutton = document.getElementById(allCars[i].id);
    currenbutton.querySelector(".by-button");
    alert("გთხოვთ დალოგინდეთ");
  }
}


// function ressetBuyButtonState() {
//   for(let i = 0; i < allCars.length; i++){
//     let currenDiv = document.getElementById(allCars[i].id);
//     currenDiv.querySelector("bt").disable = true;
//   }
// }














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


/////////////// როგორ ვქმნიდით ობიექტებს და მასივებს კლასებამდე დასასრული



// {
//   "name": "js_homework",
//   "version": "1.0.0",
//   "description": "",
//   "main": "app.js",
//   "scripts": {
//     "start": "http-server",
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "build": "webpack",
//     "watch": "webpack --watch"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://https://github.com/giokavto/js_homework"
//   },
//   "author": "",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://https://github.com/giokavto/js_homework/issues"
//   },
//   "homepage": "https://https://github.com/giokavto/js_homework#readme",
//   "devDependencies": {
//     "webpack": "^4.43.0",
//     "webpack-cli": "^3.3.11"
//   }
// }