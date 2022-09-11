"use strict";

// DOM ELEMENTS
const score1_ = document.querySelector('.player-1-score');
const score2_ = document.querySelector('.player-2-score');
const dice_   = document.querySelector('.dice'); 


initNewGame();

function initNewGame(){
    score1_.textContent = '0';
    score2_.textContent = '0';
    dice_.classList.add('hidden');
}




