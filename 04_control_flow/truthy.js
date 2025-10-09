const userEmail = "atharv@gmail.com"

if(userEmail)
    console.log("Got Email");
else 
    console.log("Didn't Got Email");


// Falsy Values

// false, 0, -0, BigInt 0n, "",null, undefined, NaN

// truthy Values

// All Except Falsy Values.
// some suprising truthy Values
// "0", 'false', " ", [], {}, function(){}

const users=[]
if(users.length === 0) console.log("Array is Empty");

const emptyObject={}
if(Object.keys(emptyObject).length === 0) console.log("Object is Empty");
