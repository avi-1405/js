let score =33

console.log(typeof score)
console.log(typeof (score));
 
let value="44"
console.log(typeof value);

let valueInNumber = Number(value) //first letter of Number(data type) must be capital
console.log(typeof valueInNumber);
console.log(valueInNumber);


let num="44abc"
console.log(typeof num);

let valueInNum = Number(num) //first letter of Number must be capital
console.log(typeof valueInNum);
console.log(valueInNum);


let test=null
console.log(typeof test);

let testInNumber = Number(test) //first letter of Number must be capital
console.log(typeof testInNumber);
console.log(testInNumber);


// Conversion
//"33" => 33
//"33abc" => Nan
// true => 1; false=>0


let isLoggedIn =1

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Conversion
// 1=>true
// 0=>false
//""=>false
//"Avinash"=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//****************Operations*****************
let valu=3
let negvalue=-valu
console.log(negvalue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2)
console.log(2%3 )

let str1="hello"
let str2=" Avinash"

let str3=str1+str2
console.log(str3);

console.log("1"+2)  // => 12
console.log(1+"2")   // => 12
console.log("1"+"2")   // => 12


console.log("1"+2+2) //  => 122   /*if string 1st all other element considered as string*/
console.log(1+2+"2") //  =>  32   /*if number 1st then perform arithmetic operation 1st then add string*/

console.log((3+4)*5%3);

console.log(+true);  //  => 1
//console.log(true+);  //not valid syntax
console.log(+""); //  => 0



let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
console.log(gameCounter);

++gameCounter
console.log(gameCounter);






