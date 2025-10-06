let a=300
if(true){
    let a=10
    const b=20
    // console.log("inside",a);   
}

// console.log(a);
// console.log(b);  //will give error as b is not avaliable globally
// console.log(c); //will give you c as 30 even the scope of c is only inside if

function one(){
    const username ="Atharv"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); //NOT Accessible outside function two
    two();
}
// one()

// ++++++++++++++++++++ Interesting ++++++++++++++++++++


console.log(addOne(5));  //can be accessed even before its declared

function addOne(num){
    return num+1
}


console.log(addTwo(5)); //cannot be accessed before its declared

const addTwo = function(num){
    return num+2
}
