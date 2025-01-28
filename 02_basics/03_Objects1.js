
const mySym = Symbol("key1");
console.log(mySym);
console.log(typeof mySym);


const JsUser = {
    name : "Santosh" , 
    "full name" : "Santosh Kumar" , 
    [mySym] : "hello World" , 
    age : 18 , 
    location : "jaipur" , 
    email : "santosh@1480.com" , 
    isLoggedIn : false , 
    lastLoginDays : ["Monday" , "Saturday"]
}

// 1) --> to access 
// console.log(JsUser.email) ;

// // 2) --> method 2 to access
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);
// console.log(typeof mySym);


// JsUser.name = "sai";
// console.log(JsUser["name"]);


// Object.freeze(JsUser);  // freezes the object can be modified further
// JsUser.name  = "Kumar" ; 
// console.log(JsUser["name"]);

JsUser.greeting = function(){
    console.log("Hello ");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Good Morning , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

