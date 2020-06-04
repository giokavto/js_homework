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
    let possibleE = getFoundEmail(users, email);
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!possibleE ?? !mailformat) {
      console.log("ამ მეილით მომხმარებელი ვერ მოიძებნა ან მეილი არასწორ ფორმატში გაქვთ შეყვანილი");
      alert("ამ მეილით მომხმარებელი ვერ მოიძებნა ან მეილი არასწორ ფორმატში გაქვთ შეყვანილი");
    } else {
      let isPasswordValid = checkPassword(possibleE, password,);
      if (isPasswordValid) {
        console.log("წარმატებით შეხვედით სისტემაში .");
        alert("წარმატებით შეხვედით სისტემაში .");
        window.location = "index.html";
        if (!passwordStrong) {
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


