console.log("hello World")

// Creating a function that return at random rock, paper or scissor
function getComputerChoice () {
    const play = ["Rock", "Paper", "Scissors"];
    let show = play[Math.floor(Math.random() * play.length)];
    return show
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            return result;
        } else {
            result = `You Win! '${playerSelection} beats ${computerSelection}.`;
            return result;  
        }
    }
        
}

  
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));