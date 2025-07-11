//objects can be declare by 2 ways
//  a) literal type       b)constructor type
// singleton objects are formed using constructor i.e. unique type of object but multiple instances formed using literal type

//there is no difference between objects due to their decalration method , it is only a type of declaration type.


//objects literals

//Declaration of symbols
const mySym=Symbol("key1")
console.log(typeof mySym);
console.log(mySym);

//without declaring symbol we cannot use it inside the object

const jsUser={}  
//curly braces is the object,here curly braces is empty hence it is an empty object.


const JsUser = {
    //in object there is keys and values.
    //in object we can define both the keys and the values
    //and the key can be anything,by default the system process the key as a string but we don't provide them as a string
    // and the value is also anything like:string,number, boolean,function,objects ,array,etc.

    name:"Avinash",
    age:18,

    //mySym:"mykey1",
    //if we print this it doesn't shows that key value is symbol 
    //this works fine and give output but this is not the correct way of definning symbol as key

    [mySym]:"mykey1",
    //if we pernt this it shows that key value is a symbol
    //this is the correct way of using symbol in object

    "full name":"Avinash Kumar",
    location:"jaipur",
    email:"avinash@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//how to access objects
// 2 ways to acces objects
console.log(JsUser.email);
console.log(JsUser["email"]);
//this method is useful when key value is given in form of string because .(dot) method is not gonna work there.
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


//change the value of object element
JsUser.email="avinash@yahoomail.com"
console.log(JsUser.email);

//if we don't want to change the elements of the objects then we freeze our object

//Object.freeze(JsUser)

JsUser.email="avinash@microsoft.com"
console.log(JsUser.email);
//from now onwards the element value remain same.
console.log(JsUser);


//in js functions are treated same as variables
//adding function to the object
JsUser.greeting=function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting);
//=>Function(anonymous)
// here function is not executed but recognise greeting as a function
//because greeting is a method ,so we need to add parenthesis at the end of the name greeting



//whenever we want to reference the same object we use [this.] keyword
JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());