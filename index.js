// getComputerChoice -> return computerSelection
// get userSelection
// compare computerSelection to userSelection
// if computerSelection = rock && userSelection = rock
//      return tie
//      else if computerSelection = rock && userSelection = scissors
//          return you lost
//      else if computerSelection = rock && userSelection = paper
//          return you won
//      else if computerSelection = paper && userSelection = paper
//          return tie
//      else if computerSelection = paper && userSelection = rock
//          return you lost
//      else if computerSelection = paper && userSelection = scissors
//          return you won
//      else if computerSelection = scissors && userSelection = scissors
//          return tie
//      else if computerSelection = scissors && userSelection = paper
//          return you lost
//      else if computerSelection = scissors && userSelection = rock
//          return you won


let userScore = 0;
let computerScore = 0;

//start game
gameStart();

function getComputerChoice(choices) {
    choices = ['rock', 'paper', 'scissors']
    function randomInt(min, max){
        return i = Math.floor(Math.random() * (max - min) + min)
    }
    randomInt(0, 3)
    return computerSelection = choices[i];
}

function getUserSelection(){
do { userChoice = prompt("Rock, Paper, Scissors?")
} while (userChoice.toLowerCase() != 'rock' && userChoice != 'paper' && userChoice != 'scissors');
return userSelection = userChoice.toLowerCase();
}

function findWinner() {
    if (computerSelection == 'rock' && userSelection == 'rock'){
        console.log("It's a tie! :|  ")
        return;
    } else if (computerSelection == 'rock' && userSelection == 'paper'){
        console.log("You win! :) ")
        return userScore++;
    } else if (computerSelection == 'rock' && userSelection == 'scissors'){
        console.log("You lose! :(")
        return computerScore++;
    } else if (computerSelection == 'paper' && userSelection == 'rock'){
        console.log("You lose! :( ")
        return computerScore++;
    } else if (computerSelection == 'paper' && userSelection == 'paper'){
        console.log("It's a tie! :| ")
        return;
    } else if (computerSelection == 'paper' && userSelection == 'scissors'){
        console.log("You win! :) ")
        return userScore++;
    } else if (computerSelection == 'scissors' && userSelection == 'rock'){
        console.log("You win! :) ")
        return userScore++;
    } else if (computerSelection == 'scissors' && userSelection == 'paper'){
        console.log("You lose! :( ")
        return computerScore++;
    } else if (computerSelection == 'scissors' && userSelection == 'scissors'){
        console.log("It's a tie! :| ")
        return;
    }
}

function getScore(){
    console.log("Your score: " + userScore + " ||  Computer score: " + computerScore)
}


function playRound() {
    getComputerChoice();
    console.log(computerSelection);
    getUserSelection();
    console.log(userSelection);
    findWinner();
    getScore();
    return;
}


function gameStart(){
    for (let i=0; i<5; i++){
        playRound();
    }

    if (userScore > computerScore){
        alert("Winner winner chicken dinner!")
    } else alert("Loser loser chicken loser!")
}