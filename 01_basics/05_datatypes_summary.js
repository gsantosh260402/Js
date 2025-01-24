// types of datatypes 
        // 1) Primitive
        //          7 types :
        //                    1) String
        //                    2) Number
        //                    3) Boolean 
        //                    4) null
        //                    5) undefined
        //                    6) Symbol
        //                    7) BigInt

        // 2) Reference (Non Primitive)
        //               1) Array
        //               2) Objects
        //               3) functions                  


        // ---> It is a Dynamically typed language --> no need to mention datatype of variable used 


const id = Symbol('123') 
const anotherId = Symbol('123')

console.log(id === anotherId)  // false


//Array

const heros = ["santosh" , "kumar"]

// object

let myobj = {
    name : "santosh" ,
    age : 22
}


// storing a function in a variable

const myFunction = function(){

}

console.log(typeof myobj) // to know the datatype 
