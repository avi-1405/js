const userEmail="avi@google.com"

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}

/*

falsy : anything that is assumed false,not strictly false

=> false, 0, -0, BigINT 0n(zero n), "", null, undefined, NaN


truthy : anything that is assumed true,not strictly true

=>true, "0", "false", " ", [], {}, function(){}

*/

const userArray=[]
// to check empty array

if(userArray.length===0){
    console.log("empty array");
}

const emptyObj={}
// to check empty array

if(Object.keys(emptyObj).length===0){
    console.log("empty object");
}

/*

false == 0  => true

false == '' => true

0 == '' => true

*/



// Nullish Coalescing Operator(??): null undefined
// used for null and undefined

let val1,val2,val3;

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = undefined ?? 15 ?? 48 // first numeric value is assinged

val5 = undefined ?? null    //  => null (WHEN both are null and undefined then later value used)
val6 = null ?? undefined    //  => undefined


console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);




//Terniary Operator

//condition ? true: false

const iceTeaPrice =100

iceTeaPrice>=80 ? console.log("more than 80") : console.log("less than 80");