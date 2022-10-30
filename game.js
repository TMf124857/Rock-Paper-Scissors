console.log("hello World")

// Creating a function that return at random rock, paper or scissor
function getComputerChoice () {
    const play = ["Rock", "Paper", "Scissors"];
    let show = play[Math.floor(Math.random() * play.length)];
    return show
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if (player === computer) {
        result = `It is a tie`;
        return result
    } else {
        if (player === "rock") {
            if (computer === "paper") {
                result = `You Lose! ${computer} beats ${player}`;
                return result;
            } else {
                result = `You Win! ${player} beats ${computer}.`;
                return result;  
            }
        }

    }
    
        
}

function game () {
    // play five rounds
    let k = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        k++;
        
    
    }
    return k
}


console.log(game())

  
   
