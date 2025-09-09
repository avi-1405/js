// in js , if we want a instance of an object then it's process is same as taking an instance of an class in other languages.
// in js, Promise is already an object.

//Before ES6 there is no in built Promise in js , at that time people use Q or BlueBird Libraries for asych process
//But later it is included in js as people appriciated it lot and hence there is a in-built Promise concept now a days.

//Promise has two parts :       1st- Promise creation
                            //  2nd- Promise Consumption


// ++++++++++++++++++++++++++++ Promise 1st +++++++++++++++++++++++++

                            //Promise Creation

const promiseOne = new Promise(function(resolve, reject){
    // Promise do an Async task
    // Async task - DataBase Calls , Cryptography, network

    setTimeout(function(){
        console.log('Async task is complete')

        // to connect the resolve and .then , we need to call the resolve() method

        resolve()
    },1000)
})

                            //Promise Consumpion

// resolve and .then are directly related/connected to each other 
promiseOne.then(function(){
    console.log("Promise consumed")
})



// +++++++++++++++++++++++++++++ Promise 2nd +++++++++++++++++++++++++++++++++

                    // Promise Creation and Consumption together

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 1000);
}).then(function (){
    console.log("Async 2 resolved")
})                    


// +++++++++++++++++++++++++++++ Promise 3rd +++++++++++++++++++++++++++++++++

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        //pass the value through resolve parameters: it can come from any network , any DB or from anywhere
        //we can pass anything but mostly object
        resolve({username: "Chai" , email : " chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


// +++++++++++++++++++++++++++++ Promise 4th +++++++++++++++++++++++++++++++++

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        
        // check weather error is occur or not
        if(!error){
            resolve({username:"hitesh", password:'123'})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

                    //writing .then  and .catch 

// promiseFour
// .then(function(user){
//     console.log(user)
// })
// .catch(function(user){
//     console.log(user)
// })


                    // multiple .then and .catch : chaining
                
// in chaining : the value is passed or returned from previous chain to next one.

promiseFour
.then((user) => {
    console.log(user)

    // if we want a certain part of the user then we need to extract it . for that we need to return that value to next chain .

    return user.username
})
.then((username) => {
    console.log ( username )
})
.catch(function ( error){
    console.log(error)
})
.finally(() => console.log("The promise if either resolved or rejected"))

// here the finally part always execute, it execute when our task is finished.
// every Promise have a time limit under which it has to be resolved or rejected otherwise it automatically reject the promise.



// +++++++++++++++++++++++++++++ Promise 5th +++++++++++++++++++++++++++++++++

const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =true
        
        // check weather error is occur or not
        if(!error){
            resolve({username:"JavaScript", password:'123'})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

// not use .then and .catch

// using another approach : async await
//it is similar to .then and .catch , in this the function wait for sometime to resolve the work. if the work is resolved then only move forward otherwise it shows error at that point and stop runniing further.
// in this catch is not handled gracefully
// it is necessary in some cases like - if database is not connected then show error at that poinnt.
//to handle error gracefully we need to use try catch block

async function consumePromiseFive(){
    try{
        const response = await promiseFive // promise is object so it should called like this. Not with parenthesis.
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()



//++++++++++++++++++++++++++ FETCH() ++++++++++++++++++++++++++++++++++++

//In JavaScript, fetch() is a modern, promise-based API used to make network requests, primarily for fetching resources (like data or files) from servers over the web. It provides a cleaner and more powerful way to handle asynchronous HTTP requests compared to older methods like XMLHttpRequest.


                // +++++++++++ CALLBACK +++++++++++++

// Callback hell, also known as the "Pyramid of Doom," is a term used in asynchronous programming, particularly in JavaScript, to describe a situation where multiple nested callback functions lead to code that is difficult to read, understand, and maintain. 
// This phenomenon arises when asynchronous operations depend on the completion of previous asynchronous operations. Instead of executing sequentially, each subsequent operation is placed inside the callback of the preceding one, creating a deeply indented structure.

// jsonplaceholder.typicode.com/users  =>array of many users ( just a json format )


// using fetch () with try and catch 

async function getAllUsers(){
    try{
        // fetch is an object and it's return type is promise, which takes some time hence use "await"
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        
        const data = await response.json()
        //converting a string format to json is also a time taking process therefore use "await" for conversion


        console.log( data )
    }
    catch(error){
        console.log("E:" , error)
    }
}
getAllUsers()


// fetch() using then and catch

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error) =>console.log(error))



// a fetch() promise only rejects when a network error is encountered ( which is usually when there's permissions issue or similar). A fetch() promise does not reject on HTTP errors(404,etc). Instead , a then() handler must check the response.ok and/or response.status properties. 