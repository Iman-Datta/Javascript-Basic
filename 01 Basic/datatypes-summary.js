//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// let score: Number = 10 it show error
const id = Symbol("123"); // unique
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 3456543576654356754n; //BigInt data type

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array

let myObj = {
  // Object => kye: value
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  // function is store as a variable
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack => Primitive; Heap => Non-Primitive

let myEmaillName = "imandatta@gmail.com" // myEmaillName this store in stack memory and "imandatta" store in heap memory

let myYoutubeName = "imandattayoutube.com"
let anotherName = myEmaillName
anotherName = "codewithiman"

console.log(myEmaillName)
console.log(anotherName)

let userOne = {
  email : "user@gmail.com",
  upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "iman@google.com"

console.log(userOne.email)
console.log(userTwo.email)