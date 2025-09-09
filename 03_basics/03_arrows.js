// this => this keyword is used to refer the current context 


const user={
    username:"Avinash",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        //use this keyword while accessing current context

        console.log(this);
        //it represent all the current context .

    }

}


user.welcomeMessage()
user.username="Avi"
user.welcomeMessage()


console.log(this);  //  =>  {}

//whenever we are in node environment, the current context is empty ; here this refers to an empty object because there is no context in the global
// And if we console out this environment it prints an empty object.
//in browser it prints global objects that is window objects.


function chai(){
    let username="Avinash"
    console.log(this);
    // multiple data prints 

    console.log(this.username);  // =>undefined
    // this can't be used in function to refer varaibles
    //it is only used in objects

}
chai()


const chai2=function(){
    let username="Avinash"
    console.log(this);
    // multiple data prints 

    console.log(this.username);  // => undefined
}
chai2()


//+++++++++Arrow Function++++++++++++++++

const chai3 = () => {
    let username="Avinash"
    console.log(this);  //  => {}

    console.log(this.username);  //  => undefined
}
chai3()


// this can be used in normal functions but can't be used in arrow function because in arrow function this returns an empty objects

// basic syntax of arrow function
//    () => {}

//store arrow function in a variable
const addThree= () => {}

//parametric arrow function
const addFour= (num1,num2) => {
    return num1+num2
}
console.log(addFour(5,8));

//another way to use arrow function
// i.e. implicit return
//it is a one line function and it assumes tha no need to return anything ,it returns automatically

const addFive= (num1,num2) => num1+num2
console.log(addFive(4,7));

const addSix= (num1,num2) => (num1+num2)
console.log(addSix(4,7));

//implicit return: no need to return anything,implicit function are those where we use paranthesis
//explicit return: return explicitly that is use return keyword to return, explixit are those where we use curly braces.


//we uses parenthesis because it is used when we try to return an object without parenthesis we can't return an object

const addSeven= (num1,num2) => ({username:"Avinash"})
console.log(addSeven(4,7));

