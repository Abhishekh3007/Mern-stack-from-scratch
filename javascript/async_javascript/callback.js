// function greet(name, callback){
//     console.log("Hello " + name);

//     callback();
// }

// function bye(){
//     console.log("Bye");
// }

// greet("Abhishek", bye);
function  add(a,b,callback){
    console.log("operation fetch complete  re route to next function")
    cal(a,b);
}

function cal(a,b){
    let sum = a+b;
    console.log(sum);
}
add(10,12,cal);



//////////////////////////////

//call back hell  function

// login(function(){

//     profile(function(){

//         orders(function(){

//             payment(function(){

//                 logout();

//             });

//         });

//     });

// });