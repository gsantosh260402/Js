// const name = "santosh"
// const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Santosh');

// for(let i = 0 ; i<name.length ; i++){
//     console.log(name[i]);
// }

// for(let i = 0 ; i<gameName.length ; i++){
//     console.log(gameName[i]);
// }


// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

// const newString = gameName.substring(0 , 2);
// console.log(newString);

const anotherString = gameName.slice(-3 , -1);  // (starIndex , endIndex) ---> endIndex is not included
console.log(anotherString);

const newStringone = "    hitesh      ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20' , "-"));

console.log(url.includes('hit'));  // tells whether it includes that part or not -- true/false

