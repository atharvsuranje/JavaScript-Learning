const marvel_heros = ["Thor","IronMan","SpiderMan"];
const dc_heros = ["Flash","SuperMan","BatMan"];

// marvel_heros.push(dc_heros) //here it makes an array inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc_heros)  //joins two arrays
// console.log(allHeros);

const allNewHeros = [...marvel_heros,...dc_heros] // ... called as spread operator
console.log(allNewHeros);

const anotherArray= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)  // converts these nested array into a single 1-D array
console.log(realAnotherArray);

console.log(Array.isArray("Hello")) //checks if it is array
console.log(Array.from("Hello"))    //makes it array

let score1=100,score2=110,score3=120

console.log(Array.of(score1,score2,score3))