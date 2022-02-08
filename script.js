const choice1 = "rock";
const choice2 = "paper";
const choice3 = "scissors";
const answer1 = choice1;
const answer2 = choice2;
const answer3 = choice3;
let playerSelection = prompt('Choose your fate');
let redWins = 0; 
let blueWins = 0;
let noWins = 0;
let round = 0;


function random() { //RNG(randomNumberGnereator) 1-3(values)//
    return Math.floor(Math.random() * (4 - 1) + 1);
}

let computerSelection = function computerPlay() { //picks rock-paper-scissors for computer based on RNG//
if (random() === 1) {
    return answer1;
    } else if (random() === 2) {
    return answer2;
    } else {
    return answer3;
    }
}
function checkScore(redWins, blueWins) { //checks score//
    if (round < 5) {

    } else if (round === 5 && redWins > blueWins) {
        alert('Computer wins, you lose!');
        console.log('Computer wins, you lose!')
    } else if (round === 5 && blueWins > redWins) {
        alert('You have been victorious!')
        console.log('You have been victorious!')
    } else if (round === 5 && redWins === blueWins) {
        alert('There has been a tie!')
        console.log('There has been a tie!');
    }
}
function game() { //plays one round//

    function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors' || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        redWins++;
        round++;
        return console.log('You chose ' + playerSelection.toLowerCase() + ' computer chose ' + computerSelection + ', you lose!');
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors' || playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock' || playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        blueWins++;
        round++;
        return console.log('You chose ' + playerSelection.toLowerCase() + ' computer chose ' + computerSelection + ', you win!');
    }
    else {
        noWins++;
        round++;
        return console.log('You chose ' + playerSelection.toLowerCase() + ' and the computer chose ' + computerSelection + '. Its a tie!');
    }
}return playRound(playerSelection,  computerSelection());//this is needeed to access the variable from the outside of this function scope//
}

//i have not officially learned loops yet, so i will come back and make the end of this a loop when i add html and css to the page.//
game();
checkScore(redWins, blueWins);
playerSelection = prompt('Choose your fate');

game();
checkScore(redWins, blueWins);
playerSelection = prompt('Choose your fate');


game();
checkScore(redWins, blueWins);
playerSelection = prompt('Choose your fate');

game();
checkScore(redWins, blueWins);
playerSelection = prompt('Choose your fate');

game();
checkScore(redWins, blueWins);
