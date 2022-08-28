
const choices = ["Rock", "Paper", "Scissors"]
const question = "Pick rock, paper or scissors"


function getComputerChoice(list) {
    return list[Math.floor((Math.random()* list.length))];
}

function playRound(playerSelection, computerSelection) {
    
    
    switch(computerSelection == "Rock") {
        case playerSelection == "rock":
            return "It's a tie!";
        case playerSelection == "paper":
            return "Player gets that point";
        case playerSelection == "scissors":
            return "Computer gets a point";
    }
    switch(computerSelection == "Paper") {
        case playerSelection == "rock":
            return "Player gets a point!";
        case playerSelection == "paper":
            return "It's a tie";
        case playerSelection == "scissors":
            return "Computer gets a point";
    }
    switch(computerSelection == "Scissors") {
        case playerSelection == "rock":
            return "Player gets a point";
        case playerSelection == "paper":
            return "Computer gets that point";
        case playerSelection == "scissors":
            return "It's a tie!";
    } 
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt(question).toLowerCase();
        const computerSelection = getComputerChoice(choices);
        console.log(playRound(playerSelection, computerSelection));
    }
}

 game();
