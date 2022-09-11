"use strict";

// DOM ELEMENTS
const score0_ = document.querySelector(".player-0-score");
const score1_ = document.querySelector(".player-1-score");
const dice_ = document.querySelector(".dice");
const btnRoll_ = document.querySelector(".roll");
const btnNew_ = document.querySelector(".new");
const btnHold_ = document.querySelector(".hold");
const currScore0_ = document.querySelector(".player-0-currscore");
const currScore1_ = document.querySelector(".player-1-currscore");
const player0_ = document.querySelector(".player--0");
const player1_ = document.querySelector(".player--1");

const currScores_ = [currScore0_, currScore1_];
const scores_ = [score0_, score1_];
const players_ = [player0_, player1_];


// Players' score
let scores = [0, 0];
let currScore  = 0;
let currPlayer = 0;

initNewGame();
btnRoll_.addEventListener("click", rollDice);
btnHold_.addEventListener("click", hold);

function initNewGame() {
  scores [0] = 0;
  currScores_[0].textContent = "0";
  scores_[0].textContent = "0";
  scores [1] = 0;
  scores_[1].textContent = "0";
  currScores_[1].textContent = "0";
  dice_.classList.add("hidden");
}

function rollDice() {
  // Roll the dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display the dice
  dice_.src = `images/dice-${dice}.png`;
  dice_.classList.remove("hidden");

  //check if the rolled number is 1
  if (dice !== 1) {
    currScore += dice;
    currScores_[currPlayer].textContent = currScore;
    // TODO: check if the current player has won.
    if(scores[currPlayer] + currScore >= 100){
        // the current player has won.
        console.log(`Player number ${currPlayer + 1} has won`);
    }

  } else {
    // switch to the other player.
    switchPlayer();
  }
}

function switchPlayer(){
    players_[currPlayer].classList.toggle("active-player");
    players_[currPlayer].classList.toggle("player");
    currScores_[currPlayer].textContent = "0";
    currScore = 0;
    currPlayer  = Number(!currPlayer);
    players_[currPlayer].classList.toggle("active-player");
    players_[currPlayer].classList.toggle("player");
}

function hold(){
    // update the score then switch.
    scores[currPlayer] += currScore;
    scores_[currPlayer].textContent = scores[currPlayer];
    switchPlayer();
}