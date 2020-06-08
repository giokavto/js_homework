// use strict-თ ჯავასკრიპტი იმოქმედებს მკაცრად განსაზღვრული პირობით
// "use strict";

  class User {
    constructor(email, username, password,){
      this.email = email;
      this.username = username;
      this.password = password;
    }
  }

  const user1 = new User("giorgi1994@gmail.com", "giorgi1994", "1423AR$",);
  const user2 = new User("spophia1990@gmail.com", "spophia1990", "f12374G&",);
  const user3 = new User("joni1988@gmail.com", "joni1988", "e1334LJ*",);
  const user4 = new User("katerina1989@gmail.com", "katerina1989", "123884567",);
  const user5 = new User("lazare1995@gmail.com", "lazare1995", "4548415121",);

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


