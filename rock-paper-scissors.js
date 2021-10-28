//computer randomly returns 'rock', 'paper' or 'scissors'
function computerPlay() {
    var playableOptions = ["rock", "paper", "scissors"];
    randomSelection = Math.floor(Math.random() * playableOptions.length);
    computerSelection = playableOptions[randomSelection];
    return computerSelection;
}
//prompt for player selection
function getPlayerInput() {
    var playerSelection = prompt("Please make a selection");
    return playerSelection;
}


//match computer selection to player selection and declare winner
function playRound(computerSelection, playerSelection) {
    console.log(computerSelection, playerSelection);
    if (computerSelection === playerSelection) {
        console.log("It's a tie!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") || 
        (computerSelection == "scissors" && playerSelection == "paper") || 
        (computerSelection == "paper" && playerSelection == "rock")
     ) {
         console.log("You lose!");
    } else if (
        (computerSelection == "rock" && playerSelection == "paper") || 
        (computerSelection == "scissors" && playerSelection == "rock") || 
        (computerSelection == "paper" && playerSelection == "scissors")
    ) {
        console.log("You win!");
    }
} 

//play the game for 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerInput();
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
    }
}

game();