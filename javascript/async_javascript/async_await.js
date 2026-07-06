function fetchData(){

    return new Promise((resolve,reject)=>{

        
            if(true)
                resolve("Data Fetched Successfully");
            else
                reject("Failed to fetch data");
       

    });

}

// fetchData()
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// });

async function load(){
    //add try catch block to handle error

    let data = await fetchData();

    console.log(data);

}

load();