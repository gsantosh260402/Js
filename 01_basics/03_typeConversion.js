/*
let score = "33abc";
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);
*/

// ---------- After Conversion to number -----------------

// "33"  => 33
// "33abc" => NaN
//  true => 1;
//  false => 0
//  null => 0


/*

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

*/

// ----------- After conversion to boolean ------------------

// 1 => true ; 0 => false
// "" => false;
// "santosh" => true;

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

// *********************** Operations *************************

let value = 3;
let negValue = -value;
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello";
let str2 = "hitesh";

let str3 = str1 + str2;

console.log(str3);

console.log("1"+2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122

console.log(1 + 2 + "2"); // 32

console.log(3 + 4 * 5 % 3)


