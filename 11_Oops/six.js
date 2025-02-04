//*****************  inheritance **************

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username , email , password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const c = new Teacher("chai" , "chai@.com" , "123");
const tea = new User("masalaChai");
tea.logMe();
c.logMe();
console.log(c instanceof Teacher);