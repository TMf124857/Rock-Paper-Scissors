console.log("hello World")

// Creating a function that return at random rock, paper or scissor
function getComputerChoice () {
    const play = ["Rock", "Paper", "Scissors"];
    let show = play[Math.floor(Math.random() * play.length)];
    return show
}