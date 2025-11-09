// for of

const arr =[1,2,3,4,5]

// for (const element of arr) {
//     console.log(element);
// }

const greetings ="Hello"
// for (const i of greetings) {
//     console.log(`char is ${i}`);
// }

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,"-->",value);
// }

const myObj={
    'game1' : 'Hollow Knight',
    'game2' : 'Elden Rings'
}

// Error
// myObj is not iterable
// for (const [key,value] of myObj) {
//     console.log(key,"-->",value);
// }

