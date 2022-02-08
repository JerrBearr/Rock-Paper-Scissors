# Rock-Paper-Scissors

Start a new Git repo for your project.
Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

    Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

    You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
    At this point you should be using console.log() to display the results of each round and the winner at the end.
    Use prompt() to get input from the user. Read the docs here if you need to.
    Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
    Feel free to create more “helper” functions if you think it would be useful.



I am having a hard time with Javascript but it has been starting to really click in the last few days. I will be making a paper and pen template of my ideas with psuedocode(which i need some pratice with) before starting to code anything.

This challenge was a lot of fun. I enjoyed struggling at the beginning and and by the end knowing for the most part what each different pice of my code did, and how it interacted with the global and local scopes. I spent a total of about 6-8 hours to get the Javascript up to this point, and this was my frist real interactive project. I am please with how it came out.

As a side note, I showed my wife and the first thing she did was enter scissors, which brought up a bug becuase it told her that scissors tied with paper. This was a hilarious way to have to go through my entire if statements one by one and making sure I wrote down each possible combination of win/losses, and then made sure to mark them off in the apropriate statements.

After taking a break and coming back, i ended up fixing a few pieces and adding a loop instead of calling the function 5 times. The code is shorter, and looks better now.