const score=400;
//console.log(score); //javascript automatically detects it is anumber

const balance=new Number(100);
//console.log(balance); //we explicitly use Number to make it a number

const hundreds = 1000000;
//console.log(hundreds.toLocaleString()); //gives 1,000,000
//console.log(hundreds.toLocaleString('en-IN')); //gives 10,00,000

// ++++++++++++++++++++++++++Maths++++++++++++++++++++++++++

// console.log(Math); //Math is an object which has many inbuilt methods
// console.log(Math.abs(-10)); //gives 10
// console.log(Math.round(4.5)); //rounds off
// console.log(Math.ceil(4.2)); // 5  gives ceil ie top value
// console.log(Math.floor(4.9)); // 4  gives floor ie base value

console.log(Math.random()); //gives random value between 0 and 1

// for getting a random value in a range
const min=10,max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min);
