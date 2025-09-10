// in call stack, every function brings their own execution context above of the other functional execution context.

//  function(){
//     callme()
// }


// here callme() is nested inside the function(). and we know that every function have it's own executional context . but there is an issue in js that who let know the callme() that "this" refers to whom (the parent function). Hence in this situation "this " refers to the global execution context.

//issues of Global Execution Context:

//in browser , window object is present in the global execution context , hence "this" of the nested function refers to the "window" object.
// But in Node environment , there is no such object like - window in the global execution context.the global execution context is empty. Therefore "this" of nested function refers to the empty object.


// use of call:

function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log("called")

}

function createUser(username, email, password){

    // NOT all the reference
    //SetUsername(username)

     // hold the reference
    SetUsername.call(this,username)
    // call: it helps in passing the current execution context to another function.
    // and to hold the passed execution , we need the "this" of the function where execution is passed.
    // "this" of the called function is removed from the stack hence that won't be useful.

    // here the functional context of this nested function will be different from the parent function. 
    // Technically speaking the "setusername" funtion is called here but it is of no use because after the call it is removed from the "CallStack" . so if we want to perform anything with "Setusername" function within "createUser" function is not possible.
    //here it looks like the function is called and technically it is called but it is considered as giving the reference of that function.
    //  to hold the reference/call of the given function we have separate method:
    // i.e. call, bind,etc.
    this.email=email
    this.password= password

   
}

const chai= new createUser("chai", "avi@gmail.com","23454")
console.log(chai)