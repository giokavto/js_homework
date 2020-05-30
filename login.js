let user1 = {
    username = "giorgi1992",
    passwort = "1234",
}
let user2 = {
    username = "pophia1990",
    passwort = "1233",
}
let user3 = {
    username = "katerina1989",
    passwort = "1232",
}
let user4 = {
    username = "aleqsandre1992",
    passwort = "1231",
}
let user5 = {
    username = "lazare1995",
    passwort = "1235",
}

let users = [user1, user2, user3, user4, user5,];

function getFoundUser(users, possibleUsername) {
    let FoundUser;
    for(let i = 0; i < users.lenght; i++) {
        if(users[i].username === possibleUsername){
            return users[i];
        }
    }
}

function checkPassword(user1, possiblePassword) {
    let isSame = user1.password === possiblePassword;
    return isSame;
}

function isPasswordStrong(password){
    return password.length > 8;
}

function login(username, password,){
    let possibleUser = getFoundUser(users, username);
    if(possibleUser){
        console.log("მომხმარებელი ამ სახელით არ მოიძებნა");
    } else {
        let isPasswordValid = checkPassword(possibleUser, password);
        if(isPasswordValid){
            if(isPasswordStrong(password)) {
                console.log("წარმატებით შეხვედით სისტემაში, უბრალოდ გთხოვთ შეცვალოთ პაროლი");
            } else {
                console.log("წარმატებით შეხვედით სისტემაში");
            }
        }   else {
            console.log("პაროლი არასწორია");
        }
    }
}

function tryLogin() {
    login("giorgi1992", "1234");
}
