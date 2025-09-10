class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }


    // there are many situations in which we don't want to give access to a method to each object instantiated from  the class. so to prevent thaat we use "static"
    // static prohibit the method to get access from every Object
    static createId(){
        return `124`
    }
}

const hitesh = new User("hitesh")

// show errors

//console.log(hitesh.createId());

//after adding static keyword it prohibit accessing the method


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email= email
    }
}

const iphone = new Teacher ("iphone", "i@iphone.com")
iphone.logMe()

// show error: because static function not get inherited

// console.log(iphone.createId())
