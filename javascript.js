console.log("Hello World")

function getComputerChoice() {
    //Generate a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    //Convert random number to 'rock', 'paper' or 'scissors'
    if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    } else {
        return "rock";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors:", "");
    if (humanChoice === "paper") {
        return "paper"; 
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        return "rock";
    }

}

function playRound() {
    
}

console.log(getComputerChoice());
console.log(getHumanChoice());