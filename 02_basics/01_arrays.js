// Arrays
const myArr=[0,1,2,3,4,5]
const myArr1=["abc",'xyz'];
const myArr2=new Array(1,2,3,4)

// console.log(myArr[1]);

// Array Method

// myArr.push(6);  //adds at the end
// myArr.push(7)
// myArr.pop()     //removes from last

// myArr.unshift(9)   //adds at the start
// myArr.shift();     // removes from start

// console.log(myArr.includes(9));   // tells if element exist or not
// console.log(myArr.indexOf(4));    //gives index of element

// const newArr=myArr.join()  //converts into string

// console.log(myArr);
// console.log(newArr);

const myn1=myArr.slice(1,3);  //returns a portion of array ending not included
console.log(myn1);
console.log(myArr);

const myn2=myArr.splice(1,3); //returns a portion of array ending included 
console.log(myn2);            //and remove the returned elements form original
console.log(myArr);
