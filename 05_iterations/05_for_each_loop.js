const num=[1,2,3,4,5]

// num.forEach(function (item) {
//     console.log(item);
// })

// num.forEach((element) => {
//     console.log(element);
// })

function double(item){
    console.log(item*2);
}

// num.forEach(double)

// num.forEach( (item,index) =>{
//     console.log(`${index} --> ${item}`)
// })

const students = [
    {
        rollNo:101,
        name:"Stud1",
    },   
    {
        rollNo:102,
        name:"Stud2",
    },
    {
        rollNo:103,
        name:"Stud3",
    }
]

students.forEach( (item) =>{
    console.log(`${item.rollNo} --> ${item.name}`);
    
})