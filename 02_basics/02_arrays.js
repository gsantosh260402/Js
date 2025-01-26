const marvel_heroes = ["thor" , "Ironman" , "spiderman"];
const dc_heroes = ["superman" , "flash" , "batman"];

//marvel_heroes.push(dc_heroes)

//onsole.log(marvel_heroes) // --> a array will go inside another array  , as array in js can take any datatype --> proved

const myArr = marvel_heroes.concat(dc_heroes); // combines two or more arrays and return a new array , the original array is not modified.
//console.log(myArr);

// more popular way to concatenate 
const newArr1 = [...marvel_heroes , ...dc_heroes]
//console.log(newArr1);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7,[4,5]]];

const another1 = another_array.flat(Infinity)
console.log(another1);

console.log(Array.isArray("Hitesh"));
