function getComputerChoice() { 
    let x = Math.floor(Math.random() * 3);
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

function playGame() {
    humanInput = getHumanChoice();
    computerInput = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper" ) {
            console.log("Computer wins! Rock lose to paper");
            computerScore++;
            return alert("Computer wins! Rock lose to paper");
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You wins! Rock beat scissors");
            humanScore++;
            return alert("You wins! Rock beat scissors");
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You wins! Paper beat rock");
            humanScore++;
            return alert("You wins! Paper beat rock");
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("Computer wins! Paper lose to scissors");
            computerScore++;
            return alert("Computer wins! Paper lose to scissors");
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You wins! Scissors beat paper");
            humanScore++;
            return alert("You wins! Scissors beat paper");
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("Computer wins! Scissors lose to rock");
            computerScore++;
            return alert("Computer wins! Scissors lose to rock");
        } else if (humanChoice == computerChoice) {
            console.log("Draw, you both picked the same hand!");
            return alert("Draw, you both picked the same hand!");
        } else {
            console.log("Hold on! Try again!");
            return alert("Hold on! Try again!");
        }   
    }
    playRound(humanInput, computerInput);
    console.log("Human Score : " + humanScore + " | " + "Computer Score : " + computerScore);
    console.log("Human Choice : " + humanInput + " | " + "Computer Input : " + computerInput);
}

// Console log
// console.log("Human Choice : " + humanInput);
// console.log("Computer Choice : " + computerInput);
// console.log("Human Score : " + humanScore + " | " + "Computer Score : " + computerScore);