// In JavaScript, both properties and methods are members of an object, but they serve different purposes:
// Properties: Properties are named attributes of an object that store values. They represent the characteristics or state of an object. Think of them as variables associated with an object.

// Methods: Methods are functions that are associated with an object. They define actions or behaviors that an object can perform. Think of them as functions that belong to an object.



// want to build a method which can trim the extra space from the string for the given examples.

// let myName= "hitesh    "
// let myChannel="chai     "

// console.log(myName.truelength()) -> want to build this method

// it can be done by built in function and properties but want to learn .
// console.log(myName.trim().length)


let myHeros=["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    //method:
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


// declare the method in the base Object.hence available to all objects.
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}

// want to build a method for this function. and for that we have to inject this method in the prototype of the object. Rather than injecting in a particular object if we inject in the global object then it will be available to whole elements i.e. function,object,etc.
// heroPower.prototype.hitesh()=function(){} => not a good way
heroPower.hitesh()

// factory function : by default function of object which  is used to create it .
// example : Object.create.

myHeros.hitesh()// hitesh function is also available to array..




// if we inject a method to array then the property/method will not be available to the object(parent of array)
// in this the inheritance is transefered from parent to child but not from child to parent.

// injecting the method to array particularly
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

myHeros.heyHitesh() // array have the method function

// heroPower.heyHitesh() => the object don't have this method because inheritance is only possible from parent to child not vice-versa.




// ++++++++++++++++++++++++++ inheritance ++++++++++++++++++++++++

                    // Old Syntax

const User ={
    name: "chai",
    email: " chai@google.com"
}


const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport =  {
    makeAssignment : 'JS assignment',
    fullTime : true,

    // inheritance of other object to another
    __proto__: TeachingSupport
    // property of TeachingSupport is inherited in TASupport
}

// inheritance outside the class
Teacher.__proto__= User  // --> all User property is inherited inside the Teacher



                    // Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
//inheriting the property of Teacher inside the TeachingSupport(prototypal inheritance)
// same as in "classes" where " extend" is used to inherit the property . this are only the syntactical sugar of the language but the function behind the scene are same.




// solving the initial problem:

let anotherUsername = "ChaiAurCode         "

String.prototype.trueLength = function(){
    console.log(`${this}`); // o/p: ChaiAurCode, bcoz reference of ChaiAurCode is present in  anotherUsername 
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()



"hitesh".trueLength() // o/p: output of this is the referece and the refrence is hitesh
"iceTea".trueLength() // o/p: iceTea