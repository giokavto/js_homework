//Lesson 03

/**
 * 03.js
 * authot: Meto
 * Date: 05,20,2020
 */
/////////////////////////////////////////////
//chalenge 3
///////////////////////////////////////////////

let user1 = {
  username: "meto55",
  password: "123",
};

let user2 = {
  username: "meto11",
  password: "1234",
};

let user3 = {
  username: "meto54",
  password: "1334",
};

let user4 = {
  username: "meto77",
  password: "1234567",
};

let user5 = {
  username: "meto52",
  password: "1567",
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
  } else {
    let isPasswordValid = checkPassword(possibleUser, password);
    if (isPasswordValid) {
      console.log("წარმატებით შეხვედით სისტემაში .");
      if (password.length < 8) {
        console.log(
          "მაგრამ თქვენ გაქვთ მარტივი პაროლი , გთხოვთ შეცვალოთ პაროლი"
        );
      }
    } else {
      console.log("პაროლი არასწორია");
    }
  }
}

login("meto77", "1234567");
