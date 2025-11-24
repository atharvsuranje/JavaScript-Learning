const promiseOne = new Promise(function(resolve,reject){
    //Do an async tasks
    // 1. DB calls
    // 2. Cryptography
    // 3. Network 
    
    setTimeout(function(){
        console.log("Async Task Executed.");
        resolve()
    },1000)   
}) 

promiseOne.then(function(){
    console.log("Promise Consumed")
})


new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2 Executed.");
        resolve()
    },1000)  
}).then(function(){
    console.log("Async 2 Resolved")
})

const promiseThree=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Atharv",email:"atharv@gmail.com"})
    },1000)  
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:"Atharv",email:"atharv@gmail.com",password:"1234"})
        }
        else{
            reject("Error")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName);
    
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The Promised is either Resolved OR Rejected");
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:"javascript",email:"js@gmail.com",password:"1234"})
        }
        else{
            reject("JS Went Wrong")
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response=await promiseFive
        console.log(response)
    } 
    catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response= await fetch("https://jsonplaceholder.typicode.com/users")
//         const data=await response.json()
//         console.log(data);
//     } 
//     catch (error) {
//         console.log("E : ",error);
//     }
// }
//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("E : ",error);
})