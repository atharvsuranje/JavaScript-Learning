// object literals

const mySym = Symbol("key1")

const JsUser ={
    name:"Atharv",
    age:22,
    location:"Pune",
    [mySym]:"myKey1",          // used symbol in the object
    email:"atharv@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Wednesday","Friday"]
}

// name cam be accessed in 2 ways
// console.log(JsUser.name)
// console.log(JsUser["name"]) 

// console.log(JsUser[mySym])    //accessed symbol of the object

JsUser.location="Amravati"   //changed values

// console.log(JsUser);

// Object.freeze(JsUser)       //freezes the object no one can change it now

JsUser.location="Pune"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting);   //only greeting fun is referred

console.log(JsUser.greeting());   // greeting fun is called
