const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)
//here dc_heros is added as a single element (array) to marvel_heros

console.log(marvel_heros);
console.log(marvel_heros[3][1]);
//not a good way to access element

const heros=["thor","ironman","spiderman"]
const allHeros=heros.concat(dc_heros)
console.log(allHeros);

//push works on the existing array
//but concat creates a new array hence require new array variable to store the created array


// another way to concat elements
// spread operator
const allHeros2=[...heros,...dc_heros]
console.log(allHeros2);


const another_array=[1,2,3,[4,5,6],7,[8,9,10,[11,12,13]]]
//to convert in one dimensional array i.e in single array elements
const flat_array=another_array.flat(Infinity)
console.log(flat_array);


console.log(Array.isArray("Avinash"));
//check whether the given thing is array or not
console.log(Array.from("Avinash"));
//convert the given thing in array


console.log(Array.from({name:"Avinash"}));
//it returns empty array(whenever it can't convert it into array it returns empty array) and it can't convert into array because it is confused to which one convert into array :the value or the key.


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));
//it convert the given elements into arrays