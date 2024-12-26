console.log("Hello world! from external script.js");

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

let y = getComputerChoice(3);

console.log(y);