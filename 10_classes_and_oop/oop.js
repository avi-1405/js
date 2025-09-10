// object literals : In JavaScript, an object literal is a concise way to create an object and define its properties and methods directly within curly braces {}. It provides a simple and straightforward syntax for instantiating objects on the fly without needing to use a constructor function or class.
//Objects are collections of key-value pairs, where each key (known as property names) has a value.


const user = {
    // Properties of Objects
    username : "avinash",
    loginCount : 8,
    signedIn : true,

    //methods
    getUserDetails: function(){
        console.log(" Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
        //print the current context.
    }
}

console.log(user.username);
console.log(user.getUserDetails());

// this keyword -> it tells that we are talking about the current context.
// bcoz if we are accessing a method for different objects/method then how will we differentiate that for which object/method that method is called.

console.log(this) // -> here this reprsent to global context of node.js which is currently empty. But if we are in browser then the global context is filled with window object.



// ++++++++++++++++++++  CONSTRUCTOR FUNCTION ++++++++++++++++++++

// A constructor is a special function inside a class that is automatically called when an object (instance) is created.
//it provide a new instance for the object/class.a copy of the object.
// It is mainly used to initialize object properties.

// Summary:
// Constructor function = automatic initializer of objects.
// Eliminates the need to manually assign values after creating an object.
// Runs only once per object creation.

// Examples:
// ->  new (keyword) -> example of constructor function, it create multiple instances of single objects .

// The new keyword in JS is used to create an instance (object) of a function or class.
// When you call a constructor function or a class with new, four things happen under the hood:
// A new empty object is created.
// The object’s prototype is linked to the constructor’s prototype.
// The constructor function is called with this bound to the new object.
// If the constructor doesn’t explicitly return an object, the newly created object is returned.




function User(username, loginCount, loggedIn ){
    this.username=username
    this.loginCount=loginCount
    this.loggedIn=loggedIn


    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const userOne = User("hitesh", 13,true)
const userTwo = User("avinash", 33, false)

console.log(userOne);  // -> prints userTwo details because userTwo overwrite the details of userOne.


// to avoid overwrite of the instances we use new keyboard

const userThree =new User("adarsh",5, true)
const userFour = new User("aditya",7, false)

// in this case if we don't return anything then also all the details will printed.
console.log(userThree)
console.log(userFour)


// some points related to new keyword:

// 1. as soon we use new keyword a empty object will be created which is called "instance" 
// 2. a constructor function is called due to new keyword, it packs all the arguments and forward it to new object.
// 3. this keyword helps in assiging values to the variable.
// 4. we got the object.



//constructor :
// constructor property is a reference to itself.
console.log(userOne.constructor)
