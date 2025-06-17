//dates

let myDate= new Date()
// data type of DATE is an object.
// here date is object and myDate is instance of it.

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


//create a particular date
let myCreatedDate = new Date(2023 , 0, 23)
//in js month is start with 0.
console.log(myCreatedDate.toDateString());

//create particular date with another format
let myCreated = new Date(2023,0,23,5,3)
console.log(myCreated.toLocaleString());

//create a particular date with a particular format

//let myParticularDate = new Date("2023-01-24")
let myParticularDate = new Date("01-24-2025")
//here month is of 2 digit hence it start from 1
console.log(myParticularDate.toLocaleString());



let myTimeStamp=Date.now()
//gives current date time

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
//it gives seconds not milliseconds


let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth());
//this gives the month values in 0 starting .
console.log(newDate.getMonth()+1);
//to get month in 1 starting value
console.log(newDate.getDay());
//gives day value starting from monday as 1


//in toLocaleString the parameter is defined as objects
//to get the recommendation of a particular method we use ctrl+space

// to customized date further more we use below technique
console.log(newDate.toLocaleString("default",{
    weekday: "long"

}))







