// at any moment we create an object from the class (or to say , when the new keyword is used) the constructor comes into play.


// Creating objects using Class syntax:

class User {
    constructor(username, email, password){
        this.username=username
        this.email= email
        this.password= password
    }

    //method
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new User("chai","chai@gmail.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());



// behind the scene : means if we don't use class syntax

function User1 (username, email, password){
    this.username=username
    this.email= email
    this.password= password
}

//adding prototype function :
User1.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User1.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new User("tea","tea@gmail.com","123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());