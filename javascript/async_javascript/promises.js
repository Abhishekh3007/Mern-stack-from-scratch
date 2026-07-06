let promise = new Promise((resolve,reject)=>{

    let success =false;

    if(success)
        resolve("Payment Successful");
    else
        reject("Payment Failed");

});

promise.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});



