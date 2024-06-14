console.log("domo des")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock 🪨, Paper 📃, or scissors ✂️?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        return;
    }
    if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log("You Win");
        humanScore++;
    }
    else {
        console.log("You lose")
        computerScore++;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore === computerScore) {
        alert("Match completed, It's a tie!")
    }
    else if (humanScore > computerScore) {
        alert("You got " + humanScore + " points, while the computer got " + computerScore + ", You win!")
    }
    if (humanScore < computerScore) {
        alert("You got " + humanScore + " points, while the computer got " + computerScore + ", better luck next time")
    }
}