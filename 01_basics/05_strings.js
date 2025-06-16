const name="Avinash"
const repoCount=10

// console.log(name+repoCount+" Value");


//  to concat string, in modern js we use 
//  backticks '' where string interpolation 
//  ${}   comes in play.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hiteshhc')
//declaration of string. By using new keyword we start using objects of js and i inside he constructor of string we put 'hiteshhc'


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const str=new String('hitesh-hc')
const newString=str.substring(0,4)
// start index include but last index doesn't
// in substring we cannot use negative value
console.log(newString);

const anotherString = str.slice(-8,4)
//in slice we can use negative value
console.log(anotherString);


const newStringOne= "   Avinash    "
console.log(newStringOne);
console.log(newStringOne.trim());



const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));


console.log(url.includes('hitesh'));


const str1=new String('hitesh-hc-com')
console.log(str1.split('-'));
