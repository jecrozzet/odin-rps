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
        let choice = prompt("Rock\/Paper\/Scissors");
        if (choice){
            choice = choice.toLowerCase();
        }

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
                computerScore++;
                return "You Lose! Rock covered by Paper";
            case "Scissors":
                playerScore++;
                return "You Win! Rock beats Scissors";
        }
    } else if (playerChoice === "Paper") {
        switch (computerChoice) {
            case "Rock":
                playerScore++;
                return "You Win! Paper covers Rock";
            case "Paper":
                return "Draw! Paper equals Paper";
            case "Scissors":
                computerScore++;
                return "You Lose! Paper cut by Scissors";
        }
    } else if (playerChoice === "Scissors") {
        switch (computerChoice) {
            case "Rock":
                computerScore++;
                return "You Lose! Scissors beaten by Rock";
            case "Paper":
                playerScore++;
                return "You Win! Scissors cuts Paper";
            case "Scissors":
                return "Draw! Scissors equals Scissors";
        }
    }
}

function game() {
    for(let i = 0; i < 5 ; i++) {
        alert("Round " + (i + 1));
        alert(playRound(getPlayerChoice(), getComputerChoice()));
    }

    alert("Your Score: " + playerScore + ", Computer Score: " + computerScore);

    if (playerScore > computerScore) {
        alert("You Win!");
    } else if (playerScore < computerScore) {
        alert("You Lose!");
    } else {
        alert("Draw!");
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const divPlayerScore = document.querySelector("#player");
const divComputerScore = document.querySelector("#computer");

buttons.forEach(button => button.addEventListener("click", function () {
    result.textContent = playRound(button.id, getComputerChoice());

    divPlayerScore.textContent = playerScore;
    divComputerScore.textContent = computerScore;

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            result.textContent += "\n Player Wins!";
        } else {
            result.textContent += "\n Computer Wins";
        }
    }
}));

