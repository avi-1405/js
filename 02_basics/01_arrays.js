//Array

const myArr = [0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]

const myArr2= new Array(1,2,3,4)
console.log(myArr[0]);

//Array methods

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
//add elements in the beginning by shifting all elements by 1 position in right,it is very slow process for large array
console.log(myArr);

myArr.shift()
//it remove the element from the beginning by removing the 1st element and shift all element to its left by 1 position
console.log(myArr);


console.log(myArr.includes(9))
console.log(myArr.indexOf(4));


const newArr=myArr.join()
//join binds the array elements together and convert them to a string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice, splice 

console.log("A", myArr);

const myn1=myArr.slice(1,3)
console.log(myn1)

console.log("B", myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);

console.log("c", myArr);

//in slice=>it does not change the original array
//in splice=>it changes the original array

//in slice=>it return the element from start index to end index minus 1
//in splice=>it return the element from start index to end index