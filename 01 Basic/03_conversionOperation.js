let score = "33"; // string
console.log(typeof score);
let valueInNumber = Number(score);
console.log(valueInNumber);

let string_score = "33abc";
let num_score = Number(string_score);
console.log(num_score);

let name = null;
let num_name = Number(name);
console.log(num_name);

let email = undefined;
let num_email = Number(email);
console.log(num_email);

// "33" => 33
// "33abc" => NaN (Not in Number) but it is a Number data type
// true => 1
// null => 0
// undefined => NaN

// 1 => true; 0 => false
// "" => false; "Iman" => true

// ********************************** Operations *******************************************************

let value = 3;
let ng_value = -value;
console.log(ng_value);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 2);
console.log(3 % 2);

let str1 = "Hello";
let str2 = "Iman";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(3 + ((4 * 5) % 3));

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion