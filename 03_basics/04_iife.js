// Immediately Invoked Function Expression 

(function chai(){
    // named IFFE 
    console.log(`DB CONNECTED`);
})();

( ()=>{
    console.log(`DB CONNECTED TWO`);
    
}) ()

// wrap the whole function defination in one parenthesis
// second parenthesis is for function call
// treat it as a normal function 