const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

//  for of Loop not work on objects
// for in Loop works on objects


//+++++++++++++++++++++ For in Loop ++++++++++++++++++++++++++++++++++++


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


for (const key in myObject) {
    console.log(key);
}



for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}` );
}


//+++++++++++++++++++ For in Loop in array ++++++++++++++++++++++++++++++++++

const programming=["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(`${key}  and thier value :-  ${programming[key]}`);
}


//+++++++++++++++++++ For in Loop in MAP ++++++++++++++++++++++++++++++++++

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('Fr',"France")  // => duplicate value is not added in the map


for (const key in map) {
    console.log(key);
}

// MAPS are not iteratable in For In Loop