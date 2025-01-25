const score = 400; // by default js understands it's datatype as number

const balance = new Number(400) // ---> 100% it is number


const Balance_str = balance.toString();
console.log(typeof(Balance_str));
 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


//**************************** MATHS **************************************

console.log(Math);
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4 , 3 , 6 , 8));
console.log(Math.max(4 , 3 , 6 , 8));

console.log(Math.random());  // between 0 and 1

// to get number between 1 and 11

console.log(Math.random()*10 + 1);

// -- rounding off the random number

console.log(Math.floor(Math.random()*10)+1)

// to get an random number within a range

const min = 10;
const max = 20;

console.log(Math.round(Math.random()*(max - min + 1))+ min)