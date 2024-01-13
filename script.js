const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const WIN = 1;
const TIE = 0;
const LOSE = -1;


function playGame(playerChoice, botChoice) {
    if (playerChoice == botChoice) return TIE;
    if (playerChoice < botChoice || playerChoice == SCISSORS && botChoice == ROCK) return LOSE;
    return WIN;
}

//if val is equal to 3, set as 2.
function getRandomChoice() {
    let val;
    return (val = Math.floor(Math.round() * 3) == 3) ? SCISSORS : val;
}

function getChosenImage(choice) {
    if (choice == ROCK) return "./public/rock.png";
    if (choice == SCISSORS) return "./public/scissors.png";
    if (choice == PAPER) return "./public/paper.png";
}

const optionsButton = document.querySelector(".optionArea > button");
const displayBox = document.querySelector(".result");
const playerInputBox = document.querySelector(".playerChoice");
const computerInputBox = document.querySelector(".computerChoice");

let currPlayerSelection = getRandomChoice();
let currComputerSelection = getRandomChoice();

/**
 * player can change their selection anytime -> on eventlistener of playeth, then we compare and 
 * execute
 */

playerInputBox.addEventListener("click", (event) => {
    currPlayerSelection += 1;
    currPlayerSelection %= 3;

    
})