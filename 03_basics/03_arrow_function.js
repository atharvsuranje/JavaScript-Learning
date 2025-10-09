const user={
    username:"Atharv",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Another"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username="Atharv"
//     console.log(this.username);  //will give undefined
    
// }
// chai();


// Another way of declaring function
// Here a function is stored in a constant variable called chai

// const chai =function () {
//     let username="Atharv"
//     console.log(this.username);
// }

// const chai = () => {
//     let username="Atharv"
//     console.log(this);
// }

// chai()

// Basic Arrow Function

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// Arrow function with implicit return 
// no need for return 

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"Atharv"})

console.log(addTwo(3,2));
