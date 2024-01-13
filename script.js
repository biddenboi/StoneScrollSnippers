const optionsButton = document.querySelector(".optionArea > button");
const displayBox = document.querySelector(".result");
const playerInputBox = document.querySelector(".playerChoice");
const computerInputBox = document.querySelector(".computerChoice");

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;


const WIN = 1;
const TIE = 0;
const LOSE = -1;


function playGame(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) return TIE;
    if ((playerChoice + 1) % 3 === computerChoice) return LOSE;
    return WIN;
}

//if val is equal to 3, set as 2.
function getRandomChoice() {
    let val = Math.floor(Math.random() * 3);
    return val === 3 ? SCISSORS : val;
}

function getChosenImage(choice) {
    if (choice === ROCK) return "./public/rock.png";
    if (choice === SCISSORS) return "./public/scissors.png";
    if (choice === PAPER) return "./public/paper.png";
}

let currPlayerSelection = getRandomChoice();
let currComputerSelection = getRandomChoice();
let scoreCount = 0;


function calculateResults() {
    let results = playGame(currPlayerSelection, currComputerSelection);
    if (results === WIN) {
        scoreCount++;
        displayBox.textContent = "Congrats thee winneth, the sc're is anon ";
    }else if (results === TIE) {
        displayBox.textContent = "Alas t is but a tieth, the sc're is anon ";
    }else {
        scoreCount--;
        displayBox.textContent = "Aww thee hath lost, bett'r luck next timeth, thy points art ";
    }
    displayBox.textContent += scoreCount;
}



/**
 * player can change their selection anytime -> on eventlistener of playeth, then we compare and 
 * execute
 */

function updateChoice(recipient) {
    if (recipient === playerInputBox) {
        currPlayerSelection = (currPlayerSelection + 1) % 3;
        playerInputBox.src = getChosenImage(currPlayerSelection);
    }
    if (recipient === computerInputBox) {
        currComputerSelection = getRandomChoice();
        computerInputBox.src = getChosenImage(currComputerSelection);
    }
}

playerInputBox.addEventListener("click", () => updateChoice(playerInputBox));
optionsButton.addEventListener("click", () => {
    updateChoice(computerInputBox);
    calculateResults();
});


