// function addTwoNumbers(number1 , number2)  // --> Parameters
// { 
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3 , 4); // (3,4) --> arguments
// console.log("Result:" , result); // undefined

//  why?? --> because return statement is not given


function addTwoNumbers(number1 , number2){
    //let result = number1 + number2;
    //return result; 
    return number1 + number2 ;  
}



const result  = addTwoNumbers(3 , 8);
console.log("Result : " , result);

function loginUserMessage(username = "sam")    //--> default it is sam if another argument is passed then it will be rewrited.
{
    if(username === undefined) // if(!usename) --> username is empty string or undefined evaluates to true
    {
        console.log("Please enter a use name"); 
    }
    return `${username} just logged in`;
}

const temp = loginUserMessage("Santosh");
console.log(temp);
console.log(typeof temp);

function calculateCartPrice(...num1){
     return num1;
}

console.log(calculateCartPrice(200 , 400 , 500)); // gives us a array [ 200 , 400 , 500 ]


function calculateCartPrice2(val1 , val2 , ...num1){
    return num1;
}

console.log(calculateCartPrice2(200 , 400 , 500 , 2000)); // gives us a array [ 500 , 2000] 
                         // 200 goes to val1 , 400 goes to val2 --> remaining goes to array.


const user = {
    username : "hitesh" , 
    price : 199
}   

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

handleObject({
    username : "sam" , 
    price : 399
});


const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[0];
}

console.log(returnSecondValue(myNewArray));








