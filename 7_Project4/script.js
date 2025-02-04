const randomNumber = parseInt(Math.random()*100+1);
const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const startNewGame = document.createElement('button');
let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submitButton.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(guess < 1 || guess > 100  || guess === '' || isNaN(guess)){
        alert('please enter a valid number');
    }
    else
    {
        
        prevGuess.push(guess);
        if(numGuesses === 11){
           displayMessage(`Game over. Random number was ${randomNumber}`);
           displayGuess(guess)
           endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){

    if(guess === randomNumber){
        displayMessage("You guessed it right");
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage("Number is too low");
    }
    else
    {
        displayMessage("Number is too high"); 
    }
    
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML+=`${guess} , `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    startNewGame.classList.add('button')
    startNewGame.innerHTML = 'Start New Game';
    startOver.appendChild(startNewGame);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' , function(e){
        
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild();
        playGame = true;
    })
}