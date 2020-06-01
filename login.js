let user1 = {
    username: "giorgi1994",
    password: "1423",
  };
  
  let user2 = {
    username: "spophia1990",
    password: "12374",
  };
  
  let user3 = {
    username: "meto54",
    password: "1334",
  };
  
  let user4 = {
    username: "katerina1989",
    password: "123884567",
  };
  
  let user5 = {
    username: "lazare1995",
    password: "157467",
  };
  
  let users = [user1, user2, user3, user4, user5];
  
  function getFoundUser(users, possibleUsername) {
    for (i = 0; i < users.length; i++) {
      if (users[i].username === possibleUsername) {
        return users[i];
      }
    }
  }
  
  function checkPassword(user, possiblePassword) {
    let isSame = user.password === possiblePassword;
    return isSame;
  }
  
  function login(username, password) {
    let possibleUser = getFoundUser(users, username);
    if (!possibleUser) {
      console.log("მომხმარებელი ამ სახელით არ მოიძებნა");
      alert("მომხმარებელი ამ სახელით არ მოიძებნა");
    } else {
      let isPasswordValid = checkPassword(possibleUser, password);
      if (isPasswordValid) {
        console.log("წარმატებით შეხვედით სისტემაში .");
        alert("წარმატებით შეხვედით სისტემაში .");
        if (password.length < 8) {
          console.log(
            "მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი"
          );
          alert("მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი");
        }
      } else {
        console.log("პაროლი არასწორია");
        alert("პაროლი არასწორია");
      }
    }
  }
  
function tryLogin() {
    login("katerina1989", "123884567");
}
  


// let username = "giorgi1994";
// let password = "1234";


// let user1 = {
//     username = "giorgi1994",
//     password = "1234",
// };
// let user2 = {
//     username = "spophia1990",
//     password = "1233",
// };
// let user3 = {
//     username = "katerina1989",
//     password = "1232",
// };
// let user4 = {
//     username = "aleqsandre1992",
//     password = "1231",
// };
// let user5 = {
//     username = "lazare1995",
//     password = "1235",
// };

// let users = [user1, user2, user3, user4, user5,];



// function getFoundUser(users, possibleUsername) {
//     // let FoundUser;
//     for(let i = 0; i < users.lenght; i++) {
//         if(users[i].username === possibleUsername){
//             return users[i];
//         }
//     }
// }

// function checkPassword(user, possiblePassword) {
//     let isSame = user.password === possiblePassword;
//     return isSame;
// }

// function isPasswordStrong(password){
//     return password.length > 8;
// }

// function login(username, password){
//     let possibleUser = getFoundUser(users, username);
//     if(!possibleUser){
//         console.log("მომხმარებელი ამ სახელით არ მოიძებნა");
//     } else {
//         let isPasswordValid = checkPassword(possibleUser, password);
//         if(isPasswordValid){
//             if(isPasswordStrong(password)) {
//                 console.log("წარმატებით შეხვედით სისტემაში, უბრალოდ გთხოვთ შეცვალოთ პაროლი");
//             } else {
//                 console.log("წარმატებით შეხვედით სისტემაში");
//             }
//         }   else {
//             console.log("პაროლი არასწორია");
//         }
//     }
// }

// function tryLogin() {
//     login("giorgi1994", "1234");
// }
// login("giorgi1994", "1234");