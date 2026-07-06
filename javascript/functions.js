function greet(){

console.log("Welcome");

}

greet();

//function with parameters
function greet(name){

console.log("Hello " + name);

}

greet("Abhishek");

//function with multiple parameters
function add(a,b){

console.log(a+b);

}

add(10,20);

//return statement
function multiply(a,b){

return a*b;

}

let result = multiply(5,4);

console.log(result);


//function with expression
const greet = function(){

console.log("Hello");

};

greet();

// arrow function
const greet = () => {
console.log("Hello");
}   
greet();

//arrow function with parameters
const square = (num)=>{

return num*num;

};

console.log(square(5));

//iife 
(function(){

console.log("Executed Immediately");

})();

//anonymous function
setTimeout(function(){

console.log("Hello");

},2000);