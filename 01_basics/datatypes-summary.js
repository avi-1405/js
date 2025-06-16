/*
Data Type:
          1) Primitive:
             -> 7 types:String,Number,Boolean, Null,Undefined,Symbol,BigInt 
          2) Reference(Non-primitive)
             -> 3 types: Array, Objects, Functions



=>JavaScript is a dynamically typed language. This means that the type of a variable is checked during runtime, not during compile time. In contrast, statically typed languages like Java require you to declare the data type of a variable before using it.
*/


const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId); // false
//bcoz Even if the values are same the Symbol datatype assume them different

const bigNumber=3873523975923507757n



//array
const heros=["shaktiman","naagraj","doga"];
//objects
let myObj = {
    name: "Avinash",
    age: 23,
}

//functions
const myFunction =function(){
   console.log("Hello world");
   
}

console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction);//function or  object funtion




//+++++++++++++++++++++++++++++++++++++++++++


//memory:stack & heap

// stack(primitive)   & heap(non-primitive)

let myYoutubename="avinashkumardotcom"

let anothername=myYoutubename
anothername="chai aur code"
 
console.log(myYoutubename);
console.log(anothername);

//to acces object element we uses dot(.)

let userOne={
   email:"user@google.com",
   upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="avinash@google.com"

console.log(userOne.email);
console.log(userTwo.email);



// in stack whatever change takes place in the copy value
// in heap whatever changes takes place it occurs in the referenced value.