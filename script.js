const choice1 = "rock";
const choice2 = "paper";
const choice3 = "scissors";
const answer1 = choice1;
const answer2 = choice2;
const answer3 = choice3;
let playerSelection = prompt('Choose your fate');


function random() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

let computerSelection = function computerPlay() {
  if (random() === 1) {
    return answer1;
} else if (random() === 2) {
    return answer2;
} else {
    return answer3;
}
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors' || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return 'You chose ' + playerSelection.toLowerCase() + ' computer chose ' + computerSelection + ', you lose!';
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock' || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return 'You chose ' + playerSelection.toLowerCase() + ' computer chose ' + computerSelection + ', you win!';
    }
    else {
        return 'You chose ' + playerSelection.toLowerCase() + ' and the computer chose ' + computerSelection + '. Its a tie!';
}
}

console.log(playRound(playerSelection, computerSelection()));
