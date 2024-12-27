function getComputerChoice() { 
    let x = Math.floor(Math.random() * 3);
    return x;
}

function getHumanChoice() { 
    let input = prompt("Input your choice : (Rock[0], Paper[1], Scissors[2])");
    return input;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let result = "";
    let i = 0;
    while (i < 5) {
    humanInput = getHumanChoice();
    computerInput = getComputerChoice();
        function playRound(humanChoice, computerChoice) {
            if (humanChoice == computerChoice) {
                result = "Draw, you both picked the same hand";
                alert(result);
            } else if (humanChoice == 0) {
                if (computerChoice == 1) {
                    result = "You lose, Paper beat rock";
                    alert(result);
                    return computerScore++;
                } else {
                    result = "You win, Rock beat scissors";
                    alert(result);
                    return humanScore++;
                }
            } else if (humanChoice == 1) {
                if (computerChoice == 0) {
                    result = "You win, Paper beat rock";
                    alert(result);
                    return humanScore++;
                } else {
                    result = "You lose, Scissors beat paper";
                    alert(result)
                    return computerScore++;
                }
            } else if (humanChoice == 2) {
                if (computerChoice == 0) {
                    result = "You lose, rock beat scissors";
                    alert(result);
                    return computerScore++;
                } else {
                    result = "You win, Scissors beat paper";
                    alert(result);
                    return humanScore++;
                }
            }
        }
        playRound(humanInput, computerInput);
        console.log("Human Score : " + humanScore + " | " + "Computer Score : " + computerScore);
        // console.log("Human Choice : " + humanInput + " | " + "Computer Input : " + computerInput);
        i++
    }
}

// Console log
// console.log("Human Choice : " + humanInput);
// console.log("Computer Choice : " + computerInput);
// console.log("Human Score : " + humanScore + " | " + "Computer Score : " + computerScore);