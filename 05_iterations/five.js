// FOR EACH LOOP => properties of arrays

const coding = ["js", "ruby", "java", "python", "CPP"]

// call back function don't have any name

coding.forEach( function(val){
    console.log(val);
} )


// for each loop by arrow function

coding.forEach( (item) => {
    console.log(item);
} )

// for each loop when function is declared separately

function printMe(item1){
    console.log(item1);
}

coding.forEach(printMe)  // here give the function reference only , don't try to execute it



// using for each loop print the values, indexes and the full array

coding.forEach( (item,index,arr) => {
    console.log(item, index, arr);
} )


//++++++++++++++++++++++++++ FOR EACH LOOP on ARRAY of OBJECTS ++++++++++++++++++++++++++

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName );
} )