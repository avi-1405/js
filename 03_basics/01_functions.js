function sayMyName(){
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("S");
    console.log("H");
}

sayMyName
//this is reference of function

sayMyName()
//this is execution of function


function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
//in js no need to provide datatype to the parameters of functions
addTwoNumbers(3,4)

//parameters=>whenever we define our function then the value present in the parenthesis is called parameters.
//arguments=>the value passed to the function while calling the function is called arguments

const result=addTwoNumbers(4,78)
console.log(result); // => undefined
// answer is undefined because addTwoNumber function doesn't return anything.there is no return type to that function,it only prints.


        //return type function

function addTwoNumbers2(number1,number2){
    let result=number1+number2
    return result
    //return number1+ number2
}

const answer=addTwoNumbers2(6534,36)
console.log(answer);


function loginUserMessage(username){
    return `${username} just logged in`
}

loginUserMessage("Avinash")
// not print anything because the function return  something which is not stored anywhere neither print.



console.log(loginUserMessage("Avinash"));
console.log(loginUserMessage(""));
//if empty string is passed then nothing goes to function.
// just logged in

console.log(loginUserMessage());
//if nothing is passed then undefined comes at the place of passed arguments
// => undefined just logged in



function loginUserMessage2(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage2());




function loginUserMessage3(username="sam"){
    //here username can't be undefined because if nothing is passed as argument then "sam" is considered as username and if something is passed then that's overwrite sam.
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage3());
console.log(loginUserMessage3("Avinash"));

//+++++++++++++++++++++++++++++++++++++++++++

//when we are unaware about number of arguments that is passed to the function the we use 
// rest operator [...]
//it bundles everything and returns the bundle
// it returns in  form of array

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200,746,782));



function calculateCartPrice2(val1,val2,...num){
    return num
}

console.log(calculateCartPrice2(100,74,200,746,782));
//here first 2 values are assigned to 1st 2 variable that is var1 and var2 and the rest are assigned to num.
//=> [200,746,782]


//passing of object in function

const user={
    username:"Avinash",
    price:99
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

// we can also pass the object directly without creating it
handleObject({
    username:"Avi",
    price:399
}) 


//passing of array in function

const myNewArray=[200,400,76326,68234]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([56423,76324,634,673]));
