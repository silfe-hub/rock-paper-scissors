function getComputerInput() {
    //Generate a random number between 1 and 3
    let computerInput = Math.floor(Math.random() * 3) + 1;  
    // convert random number to string
    if (computerInput === 1) {
        return "paper";
    } else if (computerInput === 2) {
        return "scissors";
    } else if (computerInput === 3) {
        return "rock";
    }
}

let computerChoice = getComputerInput()

console.log("Computer chose: " + computerChoice);

//Convert computerChoice back to integer
function convertComputerChoice(computerChoice) {
    let computerInputConverter;

    if (computerChoice === "paper") {
        computerInputConverter = 1;
    } else if (computerChoice === "scissors") {
        computerInputConverter = 2;
    } else {
        computerInputConverter = 3;
    }

    return computerInputConverter;
}

console.log(convertComputerChoice(computerChoice));



//Function for human choice
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

//Convert humanChoice to integer
function convertHumanInput(humanChoice) {
    let humanInputConverter;
    
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


