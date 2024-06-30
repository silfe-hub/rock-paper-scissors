// Function to get the computer's choice 
function getComputerInput() {
    //Generate a random number between 1 and 3
    let computerInput = Math.floor(Math.random() * 3) + 1;  
    // convert random number to string
    if (computerInput === 1) {
        return "paper";
    } else if (computerInput === 2) {
        return "scissors";
    } else {
        return "rock";
    }
}

// Variable that stores the computer's choice
let computerChoice = getComputerInput()
console.log("Computer chose: " + computerChoice);

//Convert computerChoice back to integer
function convertComputerChoice(computerChoice) {
    if (computerChoice === "paper") {
        return 1;
    } else if (computerChoice === "scissors") {
        return 2;
    } else {
        return 3;
    }
}

console.log(convertComputerChoice(computerChoice));



//Function to get human choice
function getHumanChoice() {
    let humanInput = prompt("Choose rock, paper or scissors:", "").toLowerCase(); 
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
    
    if (humanChoice === "paper") {
        return 1;
    } else if (humanChoice === "scissors") {
        return 2;
    } else if (humanChoice === "rock") {
        return 3;
    } else {
        return "Invalid input";
    }
}

console.log(convertHumanInput(humanChoice));

let humanChoiceInt = convertHumanInput(humanChoice);
let computerChoiceInt = convertComputerChoice(computerChoice);


//Function to play game
function playRound(humanChoiceInt, computerChoiceInt) {
    let roundResult; 

    if (humanChoiceInt === computerChoiceInt) {
        roundResult = "It's a tie!";
    } else if (
        (humanChoiceInt === 1 && computerChoiceInt === 2) || //paper vs scissors
        (humanChoiceInt === 2 && computerChoiceInt === 3) || //scissors vs rock
        (humanChoiceInt === 3 && computerChoiceInt === 1) // rock vs paper
    ) {
        roundResult = "The computer wins!";
    } else {
        roundResult = "Human wins!";
    }
        
    return roundResult;
}

console.log(playRound(humanChoiceInt, computerChoiceInt));