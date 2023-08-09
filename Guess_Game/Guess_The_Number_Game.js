let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber > randomNumber) {
        gameResult.textContent = "It's Too High! Try Again";
        gameResult.style.backgroundColor = "blue";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "It's Too Low! Try Again";
        gameResult.style.backgroundColor = "blue";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "It's Correct! Play Again";
        gameResult.style.backgroundColor = "green";
        randomNumber = Math.ceil(Math.random() * 100);
        console.log(randomNumber);
    }

}