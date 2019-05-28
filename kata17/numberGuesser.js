/*jshint esversion:6*/

let prompt = require("prompt-sync")();

let alreadyAnswer = [];
let attempts = 0;
let correct = false;
let guess;
let message = "";
let targetNumber = Math.ceil(Math.random()*10);

function checkAnswer(answer){

  if (isNaN(answer)){
    message = "*** that input is not a number... ***";
  }

    if (answer === targetNumber){
      message = "*** *** YAY! You got it! It took " + attempts + " attempts! *** ***";
      correct = true;
    }

    if (alreadyAnswer.includes(answer)){
      message = "*** Already guessed! ***";
    }

    if (answer > targetNumber){
      message = "*** Too high! ***";
    }

    if (answer < targetNumber){
      message = "*** Too low! ***";
    }

  // if (answer !== (1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10) ){
  //   message = "Not a number! Try Again!";
  // }



  alreadyAnswer.push(guess);
  attempts += 1;


return message;

} //end of checkAnswer


while (!correct) {

  if (attempts === 0) {
    guess = parseInt(prompt("Guess a number from 1 - 10: "));
    } else {
        guess = parseInt(prompt("Guess a number: "));
      }

console.log(checkAnswer(guess));


}//end of while loop








/*** SAMPLE OUTPUT ***/

// Guess a number:
// > 12
// Too Low!
// Guess a number:
// > 65
// Too High!
// Guess a number:
// > 65
// Already Guessed!
// Guess a number:
// > asdf
// Not a number! Try again!
// Guess a number:
// > 42
// You got it! You took 3 attempts!
