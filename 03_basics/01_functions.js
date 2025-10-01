function sayMyName(){
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("V");
}

// sayMyName(); //function call

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
    // let result=number1+number2
    // return result;
    return number1+number2;
}

const result=addTwoNumber(3,4);
// console.log("Result is : ",result);

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Atharv"));

function calculateCartPrice(val1,val2,...num1){ // ... is rest operater it gives the array of all the remaining parameters
    return num1
}

// console.log(calculateCartPrice(100,200,300,400,500,600,700));

const user={
    username:"Atharv",
    price:999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

// handleObject({
//     username:"Direct Object",
//     price:741
// })

const myNewArray=[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([1,2,3,4,5,6]));