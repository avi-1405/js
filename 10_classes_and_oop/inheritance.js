class User {
    constructor(username){
        this.username=username
    }

    //method
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}


class Teacher extends User{
    //overwriting the constructor
    constructor(username,email, password){
        super(username)
        // here the "super" keyword give the syntactic sugar for not writing such a lengthy code: using call() method and passing "this" along with call()
        // it goes to the called function and assign all properties of called fucntion in its  "this"
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Chai = new Teacher("chai","chai@teacher.com","1123")

Chai.addCourse()
Chai.logMe()

const masalaChai= new User("masalaChai")

masalaChai.logMe()
// masalaChai.addCourse() => parent can't inherit the property of child



console.log(chai === masalaChai);  // false both are instance of different classes
console.log(chai === Teacher) // false; bcoz chai is an instance of Teacher
console.log(chai instanceof Teacher); // true; yes chai is an instance of Teacher
console.log(chai instanceof User); // true; yes chai is an instance of User bcoz chai is an instance of Teacher and Teacher inherited from User.
