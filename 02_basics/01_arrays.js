
const myArr = [0 , 1 , 2 , 3 , 4 , 5 , true , "hitesh"]

//Javascript arrays are resizable
//can contains a mix of different datatypes

console.log(myArr[0]);

// 0 based indexing;

const myHeros = ["santosh" , "kumar"];

// Arrays Method

myArr.push(6);  // Add elements at end of the array
console.log(myArr);

myArr.pop(); // remove last element in the array
console.log(myArr);

myArr.unshift(9) // Add element at the beginning
console.log(myArr);

myArr.shift(); // remove element from the start
console.log(myArr);

console.log(myArr.includes(9));  // returns a true if the value in present in the array

console.log(myArr.indexOf(3)); // if that element is present gives it's index else returns -1

const newArr = myArr;
console.log(newArr);
console.log(myArr);

const newArr2 = myArr.join(); //data will be stored but the datatype of new array will be String
console.log(typeof newArr2);
console.log(typeof myArr);

// slice , splice

console.log("A " , myArr);
const myn1 = myArr.slice(1 , 3);
console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1 , 3);
console.log(myn2);
console.log("C" , myArr);

// In splice the changes(removal) made to original string
