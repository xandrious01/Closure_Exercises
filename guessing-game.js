function guessingGame(num) {
    let gameWon = false;
    let numGuesses = 0;
    const targetNum = Math.floor(Math.random()*100);
    return function guess(num) {
        if (gameWon) return "The game is over, you already won!";
        numGuesses++;
        if (num === targetNum) {
            gameWon = true;
            return `You win! You found ${num} in ${numGuesses} guesses.`;
        }
        if (num < targetNum) return `${num} is too low!`;
        if (num > targetNum) return `${num} is too high!`;
    };
}


module.exports = { guessingGame };
