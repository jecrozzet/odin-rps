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

function calculateRound(playerChoice, computerChoice){
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

function stopGame() {
        buttons.forEach(button => button.disabled = true);

        if (playerScore > computerScore) {
            gameResult.textContent = "Player Wins!";
        } else {
            gameResult.textContent = "Computer Wins!";
        }

        const resultContainer = document.querySelector(".result-container");
        const replayButton = document.createElement("button");
        replayButton.textContent = "Play Again";
        replayButton.id = "replay-button";
        replayButton.addEventListener("click", function () {
            playerScore = 0;
            computerScore = 0;

            roundResult.textContent = "First to 5 Wins!";
            gameResult.textContent = "";
            divPlayerScore.textContent = playerScore;
            divComputerScore.textContent = computerScore;

            resultContainer.removeChild(replayButton);
            buttons.forEach(button => button.disabled = false);
        });

        resultContainer.appendChild(replayButton);
}

function playRound(playerChoice) {
    //reset animation using reflow and class toggling
    roundResult.classList.remove("pop");
    roundResult.offsetHeight;
    
    roundResult.textContent = calculateRound(playerChoice, getComputerChoice());
    roundResult.classList.add("pop");

    divPlayerScore.textContent = playerScore;
    divComputerScore.textContent = computerScore;

    if (playerScore >= 5 || computerScore >= 5) stopGame();
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
const gameResult = document.querySelector("#game-result")
const divPlayerScore = document.querySelector("#player");
const divComputerScore = document.querySelector("#computer");

buttons.forEach(button => button.addEventListener("click", function () {
    playRound(button.id);
}));