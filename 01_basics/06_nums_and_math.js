const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
//to precise the decimal value to a certain number we use toFixed method

console.log(balance.toFixed(2));
//toFixed also returns a string 

const otherNumber=123.564
console.log(otherNumber.toPrecision(4));
//it returns a string type and give significant digits according to given number


const hundreds=1000000
console.log(hundreds.toLocaleString());
//represent number with commas and return string type according to US standard

console.log(hundreds.toLocaleString('en-IN'));
//according to indian standard



//++++++++++++++++ MATHs +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(3.6));
console.log(Math.ceil(3.2));
console.log(Math.floor(5.2));
console.log(Math.min(2,5,3,2,5,6,7,5,1));
console.log(Math.max(5,6,7,3,5,9,0,3));


console.log(Math.random());
//give random value and  0<=value<=1
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));
//give value between 1 and 10

const min=1
const max=6

console.log(Math.floor((Math.random()*(max-min+1))+min));
//use this formula to get the number between the given range