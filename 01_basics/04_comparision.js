console.log(2>1);   // true
console.log(2>=1);  // true
console.log(2<1);   // false
console.log(2==1);  //false
console.log(2!=1);  // true


console.log("2">1); //true  // here 2 is auto converted to number
console.log("02">1);  //true  // here 02 is auto converted to number 

/* Sometimes the comparision of some expression are not predictable so avoid comparing in different data types only compare in same data type*/


console.log(null>0); //false
console.log(null==0);   //false
console.log(null>=0);   //true

/* The reason is that an equality check == and comparisions > < >= <= work differently.
Comparisions convert null to a number,treating it as 0.
That's why (3) null>=0 is true and (1) null>0 is false. */

console.log(undefined == 0);    // false
console.log(undefined > 0); // false`
console.log(undefined < 0); // false


// strict check
// ===
// it checks the data type 1st then the value
// if data type not matches return false else
// check value and return answer according
// to it.


console.log("2"===2);
