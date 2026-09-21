import { startGame, restartGame } from "./game.js";

const startScreen =
    document.getElementById("start-screen");

const gameScreen =
    document.getElementById("game-screen");

const startButton =
    document.getElementById("start-btn");


// Initial screen
startScreen.style.display = "flex";
gameScreen.style.display = "none";


// START GAME
startButton.addEventListener("click", function () {

    console.log("START GAME clicked");

    startScreen.style.display = "none";

    gameScreen.style.display = "block";
    gameScreen.classList.add("active");

    startGame();

    console.log("GAME SCREEN opened");
});


// ========================================
// PLAY AGAIN BUTTON
// ========================================

const restartButton =
    document.getElementById("restart-btn");

if (restartButton) {

    restartButton.addEventListener("click", function () {

        console.log("PLAY AGAIN CLICKED");

        restartGame();

    });

}