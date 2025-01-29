

if(true){
    let a = 10;
    const b = 20 ; 
    var c = 30;
    
}

//console.log(a) ; // error
//console.log(b);  // error
//console.log(c);  // ans -- 30

function one(){
    const username = "hitesh";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    //console.log(website); // website variable can't be accessed  outside it's scope
    two();
}
one();     // inner function can access variables declared in outer function.


// +++++++++++++++++ interesting +++++++++++++++++++++++


//1 --> function declaration type 1
console.log(addone(5)); 

function addone(num){
    return num + 1;
}

// in this type of declaration function can be called before declaration 




//2 --> function is stored in a variable


addTwo(5);  // this is not possible here
const addTwo = function(num){
    return num + 2;
}

