// const appUser = new Object()       //singleton object
const appUser = {}              //non singleton object

appUser.id = "101"
appUser.name="Atharv"
appUser.isLoggedIn=false

// console.log(appUser);

const regularUser= {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Atharv",
            lastName: "Suranje"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}   //makes object inside an object
// const obj3 = Object.assign({},obj1,obj2)  //combines obj1 and ibj2 into an empty object 

const obj3 ={...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty('isLoggedIn'));


const course ={
    cousrseName : "Javascript",
    price: "999",
    courseInstructor: "Abc"
}

// console.log(course.courseInstructor); //Totally write but just lengthy to type

//destructuring
const{courseInstructor : instructor} =course;

console.log(instructor);

