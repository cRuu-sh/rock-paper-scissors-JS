let humanInput = getHumanChoice();
let computerInput = getComputerChoice(3);

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max) { 
    let x = Math.floor(Math.random() * max);
    if (x == 0) {
        x = "rock"; 
    } else if (x == 1) {
        x = "paper";
    } else if (x == 2) {
        x = "scissors";
    } else {
        x = "anomaly";
    }
    return x;
}

function getHumanChoice() { 
    let input = prompt("Input your choice : (Rock, Paper, Scissors)").toLowerCase();
    return input;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper" ) {
        return alert("Human wins!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        return alert("Computer wins!");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return alert("Human wins!");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        return alert("Computer wins!");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        return alert("Human wins!");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        return alert("Computer wins!");
    } else if (humanChoice == computerChoice) {
        return alert("Draw, you both picked the same hand!");
    } else {
        return alert("Hold on! Try again!");
    }   
}

playRound(humanInput, computerInput)


// Console log
console.log("Human Choice : " + humanInput);
console.log("Computer Choice : " + computerInput);