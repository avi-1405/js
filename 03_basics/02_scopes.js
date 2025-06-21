let a=10
const b=20
var c=30

console.log(a);
console.log(b);
console.log(c);

{}
// this is called scope


//Global Scope=> anything written outside the block ; and those variables are accesible inside and outside the curly braces.
//local/block scope => written inside the curly braces ; accesible only inside the block

// local scope overwrite the global scope


if(true){
    console.log(a);

    // console.log(b); => this shows error because it is reinitialized in the scope after the console.
    
    const b=100
    console.log(b);
    
    const d=687
    let e=786
    var f= 56
}

// console.log(d); =>not accesed outside the block

// console.log(e); => not accesed outside the block

console.log(f); // => accesed outside the block ; this leads in scoping problem

//++++++++++++++++++++++++++++++++++++++++++//

// scopes in node environment are differ than scopes in window/browser environment.

//++++++++++++++++++++++++++++++++++++++++++//

function one(){
    const username="Avinash"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    //console.log(website);  =>can't access outside the block

    two()
}
one

if(true){
    const username="Avinash"
    if(username=="Avinash"){
        const website="youtube"
        console.log(username+" "+website);
        
    }
    //console.log(website); =>error due to scope limitations
    
}
// console.log(username); => error due to scope limitations


//++++++++++++ interesting concept +++++++++++

console.log(addone(67)) // => returns 68, it doesn't show any errors , in this type of function declaration :we can access function before as well as after function definition

//it is a basic function
function addone(num){
    return num+1
}

addone(6)

//it is also a function,but sometimes it is called as expression
// in js variables can store anything :JSON values, functions , objects ,etc


// addTwo(4) 

// =>it shows error because in this type of function definition we can only access the function after the function declaration

// this is a concept of hoisting

const addTwo=function(num){
    return num+2
}

addTwo(6)