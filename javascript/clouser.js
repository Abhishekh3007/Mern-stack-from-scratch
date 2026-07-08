// function outer(){

//     let message = "Hello";

//     function inner(){

//         console.log(message);


//     }

//     return inner;

// }

// const fun = outer();

// fun();
























function bank() {
  let balance = 100;              // Father's locker
  function checkBalance() {       // Son (closure)
    return balance;
  }
  balance += 50;                  // locker contents change AFTER son got the key
  return checkBalance;
}

const son = bank();   // father "leaves" — function already returned
console.log(son());   // 150, not 100 — proves it's a reference, not a snapshot










// function counter(){

//     let count = 0;

//     return function(){

//         count++;

//         console.log(count);

//     }

// }

// const increment = counter();

// increment();

// increment();

// increment();