const buttons = document.querySelectorAll('.button');

const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click' , function(e){
        console.log(e); 
        console.log(e.target); // gives the html element on which the click is occurred;
        body.style.backgroundColor = e.target.id; // id in html tags  is same as the color hence using directly

        // we can also use if-else ladder
        
    })
});