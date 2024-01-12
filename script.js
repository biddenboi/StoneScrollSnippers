const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function playGame(playerChoice, botChoice) {
    if (playerChoice == botChoice) return 0;
    if (playerChoice < botChoice || playerChoice == SCISSORS && botChoice == ROCK) return -1;
    return 1;
}

