console.log("hello World")

// Creating a function that return at random rock, paper or scissor
function getComputerChoice () {
    const play = ["Rock", "Paper", "Scissors"];
    let show = play[Math.floor(Math.random() * play.length)];
    return show
}

function getPlayerSelection () {
    const playerSelection = prompt("Choose from rock, paper, scissors?");
    return playerSelection;
}

let p = 0;
let c = 0;

function playRound(playerSelection, computerSelection) {
    // your code here!
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    let c = 0;
    let p = 0;
    if (player === computer) {
        result = `It is a tie`;
        return result
    } else {
        if (player === "rock") {
            if (computer === "paper") {
                result = `You Lose! ${computer} beats ${player}`;
                c++;
                return result;
            } else {
                result = `You Win! ${player} beats ${computer}.`;
                p++;
                return result;  
            }
        }

        if (player === "paper") {
            if (computer === "scissors") {
                result = `You Lose! ${computer} beats ${player}`;
                c++;
                return result;
            } else {
                result = `You Win! ${player} beats ${computer}.`;
                p++;
                return result;  
            }
        }

        if (player === "scissors") {
            if (computer === "rock") {
                result = `You Lose! ${computer} beats ${player}`;
                c++;
                return result;
            } else {
                result = `You Win! ${player} beats ${computer}.`;
                p++;
                return result;  
            }
        }

    }
    
    
        
}



function game () {
    
    let p = 0;
    let c = 0;
    // play five rounds
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        // temporariy solution for counting the wins and loss
        if (result[4] === 'L') {
            c++;
        }
        if (result[4] === 'W') {
            p++;
        }
        console.log(result);
    
    }

    console.log(`the pc with ${c}`);
    console.log(`you with ${p}`);
    if (p == c) {
        result = `It is a Draw`;
        return result;
    } else {
        if (p > c) {
            result = `You Won!!`;
            return result;
        } else {
            result = `You Loss!!`;
            return result;
        }
    }
}


console.log(game())

  
   
