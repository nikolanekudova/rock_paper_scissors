//test git
const outcomes = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;

function computerPlay() {
    return outcomes[Math.floor((Math.random() * outcomes.length))];
}

// console.log(computerPlay(outcomes));
let buttonArray = document.getElementsByClassName('btn');
console.log(buttonArray)

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function(clickEvent) {
        let playerSelection = clickEvent.target.value;
        let computerSelection = computerPlay();
        console.log(computerSelection);
        round(playerSelection, computerSelection);
    })
}

function displayResults (textResult, result) {
    const resultDiv = document.createElement("div");
    document.body.appendChild(resultDiv);
    resultDiv.innerHTML = textResult;
    updateScore(result);
}

function updateScore (result) {

    if (result === true) {
        scorePlayer = scorePlayer + 1;
    } else if (result === false) {
        scoreComputer = scoreComputer + 1;
    }

    const updatePlayer = document.getElementById("scorePlayer");
    updatePlayer.innerHTML = scorePlayer;

    const updateComputer = document.getElementById("scoreComputer");
    updateComputer.innerHTML = scoreComputer;

    checkAndDisplayWinner(scorePlayer, scoreComputer);
}

function checkAndDisplayWinner (scorePlayer, scoreComputer) {
    if (scorePlayer == 5) {
        alert("Player is winner!") 
    } else if (scoreComputer == 5) {
        alert("Computer is winner!") 
    }
}

function round(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        displayResults("It is a draw!", null);

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        displayResults("You lose! Paper beats rock.", false);

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        displayResults("You win! Rock beats scissors.", true);

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        displayResults("You win! Paper beats rock.", true)

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        displayResults("You lose! Scissors beats paper.", false)   

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        displayResults("You lose! Rock beats scissors.", false)   

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        displayResults("You win! Scissors beats paper.", true) 
    }
}
/*
let scorePlayer = 0;
let scoreComputer = 0;

for (let i = 0; i < 5; i++) {
    console.log("Round " + (i + 1))
    
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = computerPlay();

    console.log("Computer played " + computerSelection);
    console.log("You chose " + playerSelection);
    let resultRound = round(playerSelection, computerSelection);
    
    if (resultRound === true) {
        scorePlayer = scorePlayer + 1;
    } else if (resultRound === false) {
        scoreComputer = scoreComputer + 1;
    }
}

console.log("Player score is " + scorePlayer);
console.log("Computer score is " + scoreComputer)

if (scorePlayer > scoreComputer) {
    alert("Player wins!");
} else if (scorePlayer < scoreComputer) {
    alert("Computer wins!");
} else { 
    alert("It is a draw.");
}
*/

