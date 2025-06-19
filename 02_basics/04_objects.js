//objects constructor
// Object.create

const tinderUser=new Object()
//constructor type of object

// const tinderUser={}
//litereal type of object


console.log(tinderUser); // =>empty object


tinderUser.id="123abc"
tinderUser.name="Avi"
tinderUser.isLoggedIn=false

console.log(tinderUser); 

//nesting of objects
const regularUser={
    email:"avi@google.com",
    fullname:{
        userfullname:{
            firstname:"Avinash",
            lastname:"Kumar"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


        //optional chaining

// console.log(regularUser.fullname?.userfullname);

// this is used when there is doubt whether full name exist in the object or not.The ? behave as if else conditionals like if full name exist it will execute something other and if not exist then it execute something other.


        //combining objects

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}


const obj3= {obj1,obj2}
//not a goodway of concatinating objects 


const obj4= Object.assign(obj1,obj2)
// in this all other are copied to obj1
const obj5= Object.assign({},obj1,obj2)
// in this all other are copied to empty object  i.e in the curly braces

//obj4 AND obj5 both returns same value but obj5 is the best way to concate 2 objects

console.log(obj3);
console.log(obj4);
console.log(obj5);


const obj6={6:"a",7:"b"}
const obj7={8:"a",9:"b"}

//spread operator
//best way to concatinate objects
const obj8={...obj6,...obj7}

console.log(obj8);


// whenever values came from database
// the data mainly came in form of arrays of object

const users=[
    {
        id:1,
        email:"avi@gmail.com"
    },
     {
        id:1,
        email:"avi@gmail.com"
    },
     {
        id:1,
        email:"avi@gmail.com"
    },
     {
        id:1,
        email:"avi@gmail.com"
    }
]

//print array of objects
console.log(users[1])
console.log(users[1].email)


//to get only keys or values of an object
//it returns array of keys or values according to our query

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
//array of array //pair key and value

//to check whether a property/value exist in a object or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//++++++++++++++++++++++++++++++++++++++++++++++++

//de-structuring can occur of objects as well as arrays also

        // de-structuring of objects

const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor : "hiteshSir"
}

// different way of accessing elements

//course.courseInstructor

const {courseInstructor }=course
const {courseInstructor:Instructor}=course

console.log(courseInstructor);
console.log(Instructor);

// this is the de-structuring of objects

//++++++++++++++++++++++++++++++++++++++++++++++

                // APIs

//Application programming interface
//whenever we give our responsibilites to others that is called APIs.APIs perform our work.

//APIs is how we write the values that came from backend
//previously values came in XML format
// but now it came in JSON format
//JSON is same as of objects
// the only thing that is different is there is no name of that object and the keys and values both are in string format

        //JSON format
// {
//     "name":"Avinash",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// sometime JSON is in form of ARRAY of OBJECTS

// [
//     {},
//     {},
//     {}
// ]
//we use it by looping it.

// JSON=>javascript object notation