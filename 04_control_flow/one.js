// if

const isUserLoggedIn=true

if(isUserLoggedIn){
    //execute this conditional
}

// <, >, <=, >=, =, ==(this only check  value) , !=, , ===(this check value as well as data type also)
// !==(strict negation check: when the value and the data type are not same then this returns true )

if(2=="2"){
    console.log("if statement executed using double equals to");
}

if(2==="2"){
    console.log("if statement executed using tripple equals to");
}

if(2!==2){
    console.log("if statement executed using strict negation");
}

const score=200

if(score>100){
    let power="fly"
    console.log(`User power: ${power}`);
}

//  console.log(`User power: ${power}`);  =>show error bcz power is defined inside the if scope.

//++++++++++++++++++++++++++++SHORT HAND NOTATION ++++++++++++++++++++++++++++++++++++++++++++++++

const  balance=1000

if(balance>500) console.log("test");
// implicit scope => that is only one line works for if statement
// comma is mandatory to end the implicit code scope


if(balance>500) console.log("test"),
console.log("test2");
//implicit scope can also be written in 2 line by using comma but this is a very bad practice never use it



