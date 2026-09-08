const accountId = 12345;
let accountEmail = "Harshit@gmail.com";
var accountPassword = "3265";
accountCity = "Delhi";
let accountState;

// accountId = 100000 cannot be changed because it is constant

accountEmail = "mahalharshit@google.com";
accountPassword = "8587";
accountCity = "Haryana";

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and fucntional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);