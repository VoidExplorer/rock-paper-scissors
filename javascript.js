console.log("domo des")

let humanScore = 0;
let computerScore = 0;

const humanScoreIndicator = document.querySelector("#humanScore")
const computerScoreIndicator = document.querySelector("#computerScore")
const lastRoundResult = document.querySelector("#lastResult")

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
        lastRoundResult.textContent = "It's a tie!"
        return;
    }
    if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        humanScore++;
        humanScoreIndicator.textContent = humanScore
        lastRoundResult.textContent = "You win!"
    }
    else {
        computerScore++;
        computerScoreIndicator.textContent = computerScore
        lastRoundResult.textContent = "You lose."
    }
    if (computerScore == 5) {
        lastRoundResult.textContent = "Match Complete, you lose."
        computerScore = 0
        humanScore = 0
        computerScoreIndicator.textContent = 0
        humanScoreIndicator.textContent = 0
    }
    if (humanScore == 5) {
        lastRoundResult.textContent = "Match Complete, you win!"
        computerScore = 0
        humanScore = 0
        computerScoreIndicator.textContent = 0
        humanScoreIndicator.textContent = 0
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
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

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener("click", ()=> {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

paperButton.addEventListener("click", ()=> {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

scissorsButton.addEventListener("click", ()=> {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

