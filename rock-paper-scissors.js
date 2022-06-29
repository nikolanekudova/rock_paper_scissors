//test git
const outcomes = ["rock", "paper", "scissors"];

function computerPlay() {
    return outcomes[Math.floor((Math.random() * outcomes.length))];
}

// console.log(computerPlay(outcomes));

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("It is a draw!");
        return null;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock.");
        return false;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors.");
        return true;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock.");
        return true;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats paper.");
        return false;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats scissors.");
        return false;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper.");
        return true;
    }
}

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


