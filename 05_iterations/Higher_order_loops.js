// 1) ***************  for of  ********************

//["" , "" , ""]
//[{} , {} , {}]

const arr = [1,2,3,4,5]

for(const num of arr){
     console.log(num);
}

const greetings = "Hello World!";
for(const greet of greetings){
    // if(greet == ' ')
   //     continue;
    console.log(`Each char is ${greet}`);
}

const map = new Map();
map.set('IN' , "india");
map.set('USA' , "United States of America");
map.set('Fr' , "France");
map.set('NI' , "india");

//console.log(map);

for(const [key, value] of map){
     console.log(key , ' :- ' , value);

}


const obj = {
    name : "santosh",
    role:"developer" , 
    salary:50000 
}
/*
for(const [key , value] of obj){
    console.log(key , ' :- ' , value)
} 
*/
// error
// to iterate over objects for of loop won't work.


// **************   2) for-in loop ************************ 

for(const key in obj){
    console.log(`${key} :  ${obj[key]}`)
}

// can this for-in loop also work in array

const lang = ['c' , 'c++' , 'ruby' , 'js']
for(const key in lang){
    console.log(`${lang[key]}`)
}
//key will hold the index


// ***********  3) for-each loop ******************

const coding =  ["js" , "ruby" , "java" , "python" , "c++"]

coding.forEach(function (item){
    console.log(item);
})


// using arrow function
coding.forEach((item)=>{
    console.log(item);
})


// paasing a function
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

// ********** A Array of Object **************

const myCoding = [
    {
        languageName: "javascript" , 
        languageFileName:"js" ,    
    } , 
    {
        languageName: "java" , 
        languageFileName:"java" ,    
    },
    {
        languageName: "python" , 
        languageFileName:"py" ,    
    }
]

myCoding.forEach((item)=>{
     console.log(`${item.languageName} : ${item.languageFileName}`);    
})