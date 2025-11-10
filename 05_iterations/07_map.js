const nums=[1,2,3,4,5,6,7,8,9,10]

// let newNums=nums.map( (num) => {return num+10})

newNums = nums
            .map( (num) =>{return num*10})
            .map( (num) =>{return num+2})
            .filter((num) =>{return num>=40})
console.log(newNums);