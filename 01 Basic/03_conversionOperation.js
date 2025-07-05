let score = "33" // string
console.log (typeof score)
let valueInNumber = Number(score)
console.log(valueInNumber)


let string_score = "33abc"
let num_score = Number(string_score)
console.log(num_score);


let name = null
let num_name = Number(name)
console.log = (num_name)

let email = undefined
let num_email = Number(name)
console.log = (num_email)

// "33" => 33
// "33abc" => NaN (Not in Number) but it is a Number data type
// true => 1
// null => 0
// undefined => NaN

// 1 => true; 0 => false
// "" => false; "Iman" => true