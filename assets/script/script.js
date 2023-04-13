const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const possibleChoices = document.querySelectorAll('button')
const winDisplay = document.querySelector("#wins");
const lossDisplay = document.querySelector("#losses");
const tieDisplay = document.querySelector("#ties");
const rePlayToggle = document.querySelector("#rePlayBtn");
// const historyDisplay = document.querySelector("#match-history")

let playerScore = 0;
let computerScore = 0;
let win = 0;
let loss = 0;
let tie = 0;
let userChoice
let computerChoice
let result


// user choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    gameScore()
}))

// computer choice

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    
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
        tie++;
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!';
        playerScore++;
        win++;
        playerScoreElem.innerHTML = `Player: ${playerScore}`;
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!';
        computerScore++;
        loss++;
        computerScoreElem.innerHTML = `Computer: ${computerScore}`;
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!';
        computerScore++;
        loss++;
        computerScoreElem.innerHTML = `Computer: ${computerScore}`;
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!';
        playerScore++;
        win++;
        playerScoreElem.innerHTML = `Player: ${playerScore}`;
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!';
        computerScore++;
        loss++;
        computerScoreElem.innerHTML = `Computer: ${computerScore}`;
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!';
        playerScore++;
        win++;
        playerScoreElem.innerHTML = `Player: ${playerScore}`;
    }
    playerScoreElem.innerHTML = `Player: ${playerScore}`
    computerScoreElem.innerHTML = `Computer: ${computerScore}`
    winDisplay.innerHTML = win;
    lossDisplay.innerHTML = loss;
    tieDisplay.innerHTML = tie;
}
// events
rePlayBtn.addEventListener("click", reStartGame)



function reStartGame() {
    gameScore == 0;
    getResult == 0;
    win === 0;
    loss === 0;
    tie === 0;
    playerScore = 0;
    computerScore = 0;
    computerChoiceDisplay.innerHTML = 0;
    userChoiceDisplay.innerHTML = 0;
    resultDisplay.innerHTML = `Choose your tool!`;
    playerScoreElem.innerHTML = `Player: 0`;
    computerScoreElem.innerHTML = `Computer: 0`;
    winDisplay.innerHTML = 0;
    lossDisplay.innerHTML = 0;
    tieDisplay.innerHTML = 0; 
}

    // // match-history

    // // div history declaration
    // let historyMaker = document.querySelector(".historyMaker")


    // // events
    // historyMaker.addEventListener("click", startHistory)

   

    // function startHistory() {
    //      // append
    //     historyMaker.appendChild(itemDiv)
    //     itemDiv.appendChild(newSpan)

    //      // create elements
    //     let itemDiv = document.createElement("div");
    //     let newSpan = document.createElement("text");

    //     // attributes
    //     newSpan.setAttribute("type", "text")
    // }

