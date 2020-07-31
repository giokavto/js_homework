// let a = 5;
// let b = 5;

// let s = "hi";

// let c = a == s;

// console.log(c);

// const price = 50;

// console.log(price);

// let t = 42;

// if(t > 40){
//     console.log("It's too hot");
// } else if (t == 40){
//     console.log("it's normal weather")
// } else{
//     console.log("this wather is ok");
// }

// let price;
// price = 12;
// let IsExpensive = price > 10; 
// if (IsExpensive){
//     console.log("expensive");
// } else {
//     console.log("cheap");
// }

// let message = IsExpensive ? "it's to expensive" : "it is cheap";

// console.log(message);

/*
let z = 10;
let y = 5;

let sum = 0;

IsEven = z % 2 == 0;

console.log(IsEven);
ეს ნიშნავს რიცხვის თუ უნაშთოდ იყოფა 2-ზე ამ შემთხვევაში (z) მაშინ დააბრუნებს thrue, 
თუ არ იყოფა 2-ზე უნაშთოდ (y) მაშინ დააბრუნებს false;
*/

// let i = 1;
// let sum = 0;
// while(i < 10) {
//    if (i % 2 == 0) {
//       sum = sum + i;
//    }
//    i = i + 1;
   
// }
// console.log(sum);

// let sum = 0;

// for(let i = 1; i < 10; i++){
//     if(i % 2 ==0){
//         sum = sum + i;
//     }
// }
// console.log(sum);

// end firs lesson by sopshi

// start first lesson by levan


// string
// let name = "geolab";

/*
let x = 123;
let ab = `geolab2 &{x}`;
consol-ში დააბრუნებს ორი სტრინგის გაერთიანებას: geolab 123
gamoiyeneba im shemtxvevashi tu stringshi gvinda 
cvladis chawera, sxva shemtxvevashi "" igive funqcia aqvs.
*/

// nuber
// let g = 123; 

// bulian tipis cvladi, romelsac mxolod ori mnisjvnelobis migeba sheudzlia
// let h = thrue;
// let j = false;


// null როდესაც ცვლადს არ აქვს მნიშვნელობა, ცვლადი შექმნილია მაგრამ არ აქვს მნიშვნელობა.
// აქვს ცარეიელი მნიშვნელობა
// let k = null;

// თუ ცვლადს არანაირ მნიშვნელობას არ ვანიჭებთ, დეფაუტად არის ანდეფაინდი.
// let l;

// პრიმიტიული მნიშვნელობები end

// ყველა დანარჩენი არის ობიექტი

// როდესაც გვინდა ცვლადის ტიპის გაგება:  string, number.... ვიყენებთ
// ვთქვათ მნიშვნელობა წამოღებულია ბაზიდან და გვაინტერესებს რა ტიპის არის.

// let m = 123;
// console.log(typeof m);
// მხოლოდ tyeof null აბრუნებს objeckt, ნალი არ არის ობიექტი, მაგრამ შემოწმებისას აბრუნებს ამს შედეგს


// objeckt ოთკუთხედი ფრჩხილების შიგნით შეგვიძლია რამდენიმე ობიექტის ჩაწერა გამოყოფა მძიმით
// ნებისმიერი პრიმიტიული ან არაპრიმიტიული მნიშვნელობა, შეგვიძლია მასივის ელემენტი გავხადოთ
// ნებისმიერ დროს შეგვიძლია დავამატოთ ან მოვაკლოთ ელემენტი, ან გავიგოთ რა ელემენტებია.
// let names = ["giorgi", "levani"];
// let coordinates = [2.4, 342.5, "test", null,];

// "მასივი" ნებისმიერ მნიშვნელობას ენიჭება თავისი ინდეხსი qi;
// რომელიც უნიკალურად განსაზღვრავს ამ ელემენტის მისამართს ამ მასივში
// გადამომრვა იწყება 0-დან, ყვენა მნიშვნელობა არის n-ს მინუს 1;
// let namess = [1, 2, 3];
// namess [0] = "test";
// როდესაც მასივში რამის დამატება გვინდა, სწორი ვარიანტია
// ასევე შეგვიძლია მისი რამდენიმეჯერ გამოძახება.
// namess.push(7);
// namess.push(9);
// ნეიმის გვერდით არსებული ფიგურილი ფრჩხილით ვეუბნებით, 
// ამ მასივიდან რომელი ელემენტის ამღება გვინდა
// console.log(namess [2]);
// console.log(namess);

// ობიექტი, ობიექტშიც შეიძლება იყოს ცარიელი, შეიძლება რამდენიმე ცვლადის (მნიშვნელიბა) რომ იყოს გაერთიანებული
// ამ შემთხვევაში მნიშვნელობას მე უნდა დავარქვა სახელი
// let user = {
//     name = "george",
//     age = 27
// };

// console.log(user["name"]);
// console.log(user.name);

// მნიშვნელობის გაგების ორი ვარიანტია, cvlades saxelis shemdeg davwerot პროფერთი


// lesson 2

let arr = [10, 23, 45, 35, 5, 40, 64];

let min = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
        min = arr[i];
    }
}
// console.log(min);