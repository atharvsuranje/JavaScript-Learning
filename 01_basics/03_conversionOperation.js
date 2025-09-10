let score=undefined
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof(valueInNumber))

// "10" => 10
// "10aa" => NaN
// "true" => 1 "false" => 0
// null => 0
// undefined => NaN


let isLoggedIn = "literally anything"

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true 0 => false
// "" => false "literally anything" => true

let num=10
let stringNum = String(num)
console.log(stringNum);
console.log(typeof(stringNum));
