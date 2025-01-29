//const obj1 = new Object(); // singleton object
//console.log(obj1);

const obj2 = {} // non - singleton

obj2.id = "123abc";
obj2.name = "sachin"
obj2.isLoggedIn = false;
///console.log(obj2);

const regularUser = {
    email : "some@gmail.com" ,
    fullname : {
        userfullname : {
            firstname : "hitesh" , 
            lastname : "choudhary"
        }
    }
}

//console.log(regularUser);

//console.log(regularUser.fullname);

//console.log(regularUser.fullname.userfullname);

 const o1 = {1:"a" , 2:"b"};
 const o2 = {3:"a" , 4:"b"};

// const o3 = o1;
// console.log(o3);

// const o4 = {o1 , o2};  // objects inside a object
// console.log(o4);

//const o5 = Object.assign({} , o1 , o2);
//console.log(o1);

//const o6 = Object.assign(o1 , o2); // in this the merge is actaully happens in o1 object then it is returned to o6 --> Object.assign(target , source)  --> that's the first syntax is better --> passing an empty object
//console.log(o1);


// easy way --> to combine two different objects

// const o7 = {...o1 , ...o2};
// console.log(o7);


const users = [
    {
        id : 1 , 
        email:"some@gmail.com"
    } , 
    {
        id : 2 , 
        email:"s@gmail.com" 
    } , 
    {
        id : 3 , 
        email:"at@gmail.com" 
    }
]

// console.log(users[1].email);

// console.log(Object.keys(obj2)); // will give a all keys in the object --> these keys will be stored in arrays
// console.log(Object.values(obj2)); // all values in a array 


 // Lecture : 18 :-> Object Destructuring


const course = {
    coursename : "js in hindi" , 
    price : "999" , 
    courseInstructor : "hitesh" , 

}

console.log(course.courseInstructor);

const {
         courseInstructor : instructor , 
         coursename : cname
      } = course;

console.log(instructor);
console.log(cname);

