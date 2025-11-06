// for

for(let i=0;i<10;i++){
    const element = i;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop ${j} and inner loop ${i}`);
        // console.log(i+"*"+j+" = "+i*j);
    }    
}

let myArray= ["ironman",'batman',"superman","captain america"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log(`Detected ${i}`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`);
}