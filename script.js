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
    let input = prompt("Input your choice : (Rock, Paper, Scissors)");
    return input;
}

let humanScore = 0;
let computerScore = 0;

let y = getComputerChoice(3);

console.log(y);
console.log(getHumanChoice());