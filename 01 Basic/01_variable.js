const accountId = 144553;
let accountEmail = "example@gmail.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity]);
// accountId = 2 // Not allowed: TypeError: Assignment to constant variable.

accountEmail = "hc@hc.com";
accountPassword = "212121";
accountCity = "Bardhaman";

console.log("New data");
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/