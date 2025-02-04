const user = {
    username : "santosh" , 
    loginCount : 8 , 
    signedIn : true ,
    getuserDetails : function(){
        //console.log("Got user details from database");
        //console.log(`Username : ${this.username}`);
        console.log(this);
    } 

}

console.log(user.username);
console.log(user.getuserDetails);