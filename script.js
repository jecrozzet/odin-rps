function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getPlayerChoice(){
    let keepGoing = true;

    while (keepGoing){
        let choice = prompt("Rock\/Paper\/Scissors").toLowerCase();

        if (choice === "rock") {
            return "Rock";
        } else if (choice === "paper") {
            return "Paper";
        } else if (choice === "scissors") {
            return "Scissors";
        } else {
            alert("False input, try again!");
        }
    }
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === "Rock") {
        switch (computerChoice) {
            case "Rock":
                return "Draw! Rock equals Rock";
            case "Paper":
                return "Lose! Rock covered by Paper";
            case "Scissors":
                return " Win! Rock beats Scissors";
        }
    } else if (playerChoice === "Paper") {
        switch (computerChoice) {
            case "Rock":
                return " Win! Paper covers Rock";
            case "Paper":
                return "Draw! Paper equals Paper";
            case "Scissors":
                return "Lose! Paper cut by Scissors";
        }
    } else if (playerChoice === "Scissors") {
        switch (computerChoice) {
            case "Rock":
                return "Lose! Scissors beaten by Rock";
            case "Paper":
                return " Win! Scissors cuts Paper";
            case "Scissors":
                return "Draw! Scissors equals Scissors";
        }
    }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));