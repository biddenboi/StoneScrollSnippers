const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function playGame(playerChoice, botChoice) {
    if (playerChoice == botChoice) return 0;
    if (playerChoice < botChoice || playerChoice == SCISSORS && botChoice == ROCK) return -1;
    return 1;
}

function getRandomChoice() {
    let val;
    return (val = Math.floor(Math.round() * 3) == 3) ? 2 : val;
}

const optionsButton = document.querySelector(".optionArea > button");
const displayBox = document.querySelector(".result");
const playerInputBox = document.querySelector(".playerChoice");
const computerInputBox = document.querySelector(".computerChoice");



const currPlayerSelection = 
const currPlayerSelection = 