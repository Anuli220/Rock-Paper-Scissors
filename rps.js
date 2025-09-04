let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;
const winningScore = 3;
let gameActive = true;

const choices = ["rock","paper","scissor"];

function play(playerChoice){
    if(gameActive === false){
        return;
    }
    const computerChoice = choices[Math.floor(Math.random*3)];
    const roundResult = "";
    if(playerChoice === computerChoice){
        roundResult = "draw";
    }else if(playerChoice === "rock" && computerChoice === "scissor") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissor" && computerChoice ==="paper"){
        playerScore++;
        roundResult = "player wins this round.";
    }else{
        computerScore++;
        roundResult = "computer wins this round.";
    }roundsPlayed++;

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("result").textContent = `rounds: ${roundsPlayed} | player: ${playerChoice} | computer: ${computerChoice} results: ${roundResult}<br>`   
}

function endGame(){
    gameActive = false;
    let winner = "draw";
    if(computerScore >= playerScore){
        if(playerScore >= computerScore){
            winner = "player wins the game!"
        }else if(computerScore >= playerScore){
            winner = "computer wins the game!"
        }
        document.getElementById("winningMsg").textContent = winner;
    }}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    gameActive = true;

    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("history").innerHTML = "";
    document.getElementById("winningMsg").textContent = "";
}