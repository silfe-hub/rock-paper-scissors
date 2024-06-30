
function getComputerChoice() {
    //Generate a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    //Convert random number to 'rock', 'paper' or 'scissors'
}

let computerChoiceConverter; 

if (getComputerChoice === 1) {
    computerChoiceConverter ="paper";
} else if (getComputerChoice === 2) {
    computerChoiceConverter = "scissors";
} else {
    computerChoiceConverter = "rock";
}

console.log("Computer chose: " + computerChoiceConverter);

function getHumanChoice() {
    let humanInput = prompt("Choose rock, paper or scissors:", ""); 
    if (humanInput === "paper") {
        return "paper";
    } else if (humanInput === "scissors") {
        return "scissors";
    } else if (humanInput === "rock") {
        return "rock";
    } else {
        return "Invalid input";
    }
}

let humanChoice = getHumanChoice();

console.log("Human chose: " + humanChoice);

function convertHumanInput(humanChoice) {
    let humanInputConverter
    
    if (humanChoice === "paper") {
        humanInputConverter = 1;
    } else if (humanChoice === "scissors") {
        humanInputConverter = 2;
    } else if (humanChoice === "rock") {
        humanInputConverter = 3;
    } else {
        return "Invalid input";
    }

    return humanInputConverter;

    }

console.log(convertHumanInput(humanChoice));


/*
let computerChoiceConverter = 
    if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    } else {
        return "rock";
    }


function getHumanChoice() {
    let getHumanChoice = prompt("Choose rock, paper or scissors:", "");
    if (getHumanChoice === "paper") {
        return 1; 
    } else if (getHumanChoice === "scissors") {
        return 2;
    } else {
        return 3;
    }
}


function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log("Human choice:", getHumanChoice())
    console.log("Computer choice:", computerChoice)

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === (computerChoice && 3) + 1) {
        return "Human wins!";
    } else {
        return "Computer wins!";
    }    
}



console.log(playRound()); */