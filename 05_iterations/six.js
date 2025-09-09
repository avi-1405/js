const coding = ["js","ruby","java","python","cpp"]

// try to return values from For each loop

const values=coding.forEach( (item) => {
    console.log(item);
} )

//try to return manually.

// const values=coding.forEach( (item) => {
//     console.log(item);
//     return item;
// } )

console.log(values);   // => undefined
// for each loop never return any value , even if we try to return manually it shows undefined.



// +++++++++++++++++++  return values, using different mehtod (like : filters, for each)  +++++++++++++++++

const myNums =[1,2,3,4,5,6,7,8,9,10]

// filter method is used to return object from the array.

const newNums=myNums.filter(  (num) => num>4 )
// if we write arrow function in this way that is without starting scope then it return implicitly.
console.log(newNums);  // => return  [5,6,7,8,9,10]

 

// if we started a scope in arrow function then we need to return things explicitly otherwise it returns empty value.
const newNums1=myNums.filter(  (num) => {
    num>4
} )
console.log(newNums1);  // => [] =>empty array is returned


// need to return explicitly if a scope is started
const newNums2=myNums.filter(  (num) => {
    return num>4
} )
console.log(newNums2);   //  => [5,6,7,8,9,10]


// returns implicitily..
const newNums3=myNums.filter(  (num) => (
    num>4
) )
console.log(newNums3);   //  => [5,6,7,8,9,10]


                             // using for each loop

const newNums4=[]

myNums.forEach( (nums) => {
    if (nums>4) {
       newNums4.push(nums) ;
    }
})
console.log(newNums4);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks =books.filter( (bk) => bk.genre==='History')
console.log(userBooks);

const userBooks1 =books.filter( (bk) => {
    return bk.publish>=1995 && bk.genre==='History'
})
console.log(userBooks1);