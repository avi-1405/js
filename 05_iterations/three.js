// SPECIALIZED LOOP FOR ARRAY

// for of

// ["", "", ""] =>  array of strings
// [{}, {}, {}]   => array of objects


//+++++++++++++++++++++++++ For of Loop ++++++++++++++++++++++++++++++

const arr = [1, 2, 3, 4, 5]

// for (const iterator of object) {
//    =>  object can be anything : object, array
// }

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(greet);
}


// +++++++++++++++++++++++++ MAPS ++++++++++++++++++++++++++++++++++

const map = new Map()
// map is an object
//it store unique values
//it holds key-value pair
//remember the original insertion order of the keys.
//any value may be used as either key or a value

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('Fr',"France")  // => duplicate value is not added in the map

console.log(map); // print map as an object

for (const key of map) {
    console.log(key);
}
// in this the whole map is print as an array


// to print keys and values separately we use different syntax
for (const [key,value] of map) {
    // de-structuring of map
    console.log(key,  ':-',  value );
}

//+++++++++++++++++++++ For of Loop on Object +++++++++++++++++++++++++++++++++

const myObject = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }

// => objects are not iteratable like this that is for of not work on objects
