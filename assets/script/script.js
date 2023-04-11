const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const possibleChoices = document.querySelectorAll('button')

let playerScore = 0;
let computerScore = 0;
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
   gameScore()
}))
 
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!';
    }
    resultDisplay.innerHTML = result
}

function gameScore(result) {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!';
        playerScore++;
        playerScoreElem.innerHTML = `Player: ${playerScore}`;
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!';
        computerScore++;
        computerScoreElem.innerHTML = `Computer: ${computerScore}`;
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!';
        computerScore++;
        computerScoreElem.innerHTML = `Computer: ${computerScore}`;
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!';
        playerScore++;
        playerScoreElem.innerHTML = `Player: ${playerScore}`;
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!';
        computerScore++;
        computerScoreElem.innerHTML = `Computer: ${computerScore}`;
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!';
        playerScore++;
        playerScoreElem.innerHTML = `Player: ${playerScore}`;
    }
    playerScoreElem.innerHTML = `Player: ${playerScore}`
    computerScoreElem.innerHTML = `Computer: ${computerScore}`
}
