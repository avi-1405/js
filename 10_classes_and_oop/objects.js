// javaScript default behaviour is prototypal behaviour. i.e. javascript try to do whatever you want to do and for that it goes form child to parent and parent to grand parent and so on until it finds what you are looking for or it gets null.
//prototype is responsible for the working of "new" keyword , concept of "classes", "this " keyword and (prototype inheritance)/inheritance in js.

// there are no parents of "object" all the properties present inside the "object" are the properties of "object" solely.
// hence the reference of prototype in case of object is null.
// in js, everything is consider as a object and the properties that is owned by object is also owned by all other elemet. 
// in js, function is "function" as well as it is also an "object" . function can behave as function and if we want it to behave as object then it will behave as a object.


function multipleBy5(num){
    return num*5
}

multipleBy5.power=2

console.log(multipleBy5(5)); // behave as a function
console.log(multipleBy5.power); // behave as an object
console.log(multipleBy5.prototype); // get empty object in node.js but not in browser.



//injecting a functionality/properties inside the function object.

function createUser(username, score){
    this.username=username
    this.score=score
}


createUser.prototype.increment= function(){
    this.score++
}
createUser.prototype.printMe= function(){
    console.log(`price is ${this.score}`)
}

const chai=new createUser("chai",25)
const tea= new createUser("tea", 250)

// no need to write ".prototype" everytime we access the properties of the object or element . this syntactical freedom is provided by js to us.

chai.printMe()
//without the use of "new" keyword the "createUser" function does not assign the newly created function/property to the "chai".and to do so we have to use the "new" keyword.



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
