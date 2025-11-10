const nums=[1,2,3,4,5,6,7,8,9,10]

// const total=nums.reduce(function (acc,curr) {
//     console.log(`Accuma: ${acc} and curr:${curr}`);
//     return acc+curr
// },0)

const total = nums.reduce((acc,curr)=>{return acc+curr},0)
console.log(total);