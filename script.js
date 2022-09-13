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

console.log(getPlayerChoice());