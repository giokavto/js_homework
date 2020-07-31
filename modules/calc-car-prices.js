export function carsPriceAverage(allCars) {
    console.log("ბაზაში არშებული ავტომობილების, საშუალო ფასის გამოთვლა");
    let sum = 0;
    for(let i = 0; i < allCars.length; i++){
        sum += allCars[i].price;
    }
    let average = sum / allCars.length;
    return average;
  }
////////////////////
  export function cheapCar(allCars){
    console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე იაფიანი ავტომობილის პოვნა");
    let minCar = allCars[0];
    for(let i = 1; i < allCars.length; i++){
        if(allCars[i].price < minCar.price){
          minCar = allCars[i];
        }
    }
    return minCar;
  }
/////////////////////////
  export function expensivepCar(allCars){
    console.log("კატალოგში არსებული ავტომობილებიდან, ყველაზე ძვირიანი ავტომობილის პოვნა");
    let maxCar = allCars[0];
    for(let i = 1; i < allCars.length; i++){
        if(allCars[i].price > maxCar.price){
          maxCar = allCars[i];
        }
    }
    return maxCar;
  }
  