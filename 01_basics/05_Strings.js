const name="Atharv";
const repoCount = 10;

console.log(name +repoCount+" Values");

console.log(`Hello my name is ${name} and repos Count is ${repoCount}`);

const gameName = new String('God of War');
console.log(gameName);
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString=gameName.substring(0,5);
console.log(newString);

const anotherString=gameName.slice(0,3);
console.log(anotherString);

const newStringOne="       abc         ";
console.log(newStringOne);
console.log(newStringOne.trim());

const text="aabbccdd";
console.log(text.replace("b","x"));

console.log(text.includes("axy"));

console.log(gameName.split(" "));
