// ========================================
// NEWSROOM LOCKDOWN
// MAIN GAME CONTROLLER
// ========================================

import { startTimer, stopTimer } from "./timer.js";

import {
    generateRandomPuzzles,
    getPuzzle,
    checkPuzzle
} from "./puzzles.js";

import {
    addItem,
    getInventory,
    clearInventory
} from "./inventory.js";

import {
    playBackground,
    playClick,
    playSuccess,
    playAlarm
} from "./audio.js";


// ========================================
// GAME VARIABLES
// ========================================

let score = 1000;
let completedPuzzles = 0;

let gameStarted = false;


// ========================================
// HTML ELEMENTS
// ========================================

const timerElement =
    document.getElementById("timer");

const scoreElement =
    document.getElementById("score");

const messageBox =
    document.getElementById("message-box");

const modal =
    document.getElementById("puzzle-modal");

const puzzleTitle =
    document.getElementById("puzzle-title");

const puzzleContent =
    document.getElementById("puzzle-content");

const closeModal =
    document.getElementById("close-modal");


// ========================================
// START GAME
// ========================================

export function startGame() {

    // Generate a new random set of questions
    generateRandomPuzzles();

    score = 1000;

    completedPuzzles = 0;

    gameStarted = true;

    clearInventory();

    updateScore();

    updateInventory();

    messageBox.textContent =
        "SYSTEM: Find the clues and unlock the newsroom.";


    // Start background music
    playBackground();


    // Start 10 minute timer
    startTimer(
        600,
        timerElement,
        timeUp
    );

}


// ========================================
// TIMER ENDS
// ========================================

function timeUp() {

    gameStarted = false;

    playAlarm();

    messageBox.textContent =
        "SYSTEM: TIME EXPIRED. The newsroom has been locked permanently.";

}


// ========================================
// CLICK OBJECTS
// ========================================

document
    .querySelectorAll(".object")
    .forEach(object => {

        object.addEventListener("click", () => {

            if (!gameStarted) return;

            // Play click sound
            playClick();

            const objectName =
                object.dataset.object;

            handleObject(objectName);

        });

    });


// ========================================
// OBJECT LOGIC
// ========================================

function handleObject(objectName) {

    switch (objectName) {

        case "desk":

            openPuzzle(1);

            break;


        case "files":

            openPuzzle(2);

            break;


        case "computer":

            openPuzzle(3);

            break;


        case "server":

            openPuzzle(4);

            break;


        case "exit":

            openPuzzle(5);

            break;

    }

}


// ========================================
// OPEN PUZZLE
// ========================================

function openPuzzle(puzzleNumber) {

    const puzzle =
        getPuzzle(puzzleNumber);

    if (!puzzle) return;


    if (puzzle.completed) {

        messageBox.textContent =
            "SYSTEM: You already solved this puzzle.";

        return;

    }


    puzzleTitle.textContent =
        puzzle.title;


    puzzleContent.innerHTML = `

        <p class="puzzle-description">
            ${puzzle.description}
        </p>

        <input
            id="puzzle-answer"
            class="puzzle-input"
            placeholder="Enter your answer..."
        >

        <button
            id="submit-answer"
            class="puzzle-btn">

            SUBMIT

        </button>

    `;


    modal.classList.remove("hidden");


    document
        .getElementById("submit-answer")
        .addEventListener("click", () => {

            playClick();

            const answer =
                document
                    .getElementById("puzzle-answer")
                    .value
                    .trim();


            solvePuzzle(
                puzzleNumber,
                answer
            );

        });

}


// ========================================
// SOLVE PUZZLE
// ========================================

function solvePuzzle(
    puzzleNumber,
    answer
) {

    const result =
        checkPuzzle(
            puzzleNumber,
            answer
        );


    if (result.correct) {

        // Success sound
        playSuccess();


        completedPuzzles++;


        score += 100;


        // Add reward to inventory
        addItem(result.reward);


        updateScore();

        updateInventory();


        messageBox.textContent =
            `SYSTEM: ${result.message}`;


        modal.classList.add("hidden");


        // All 5 puzzles completed
        if (completedPuzzles === 5) {

            finishGame();

        }

    } else {

        // Wrong answer sound
        playAlarm();


        score -= 25;


        if (score < 0) {

            score = 0;

        }


        updateScore();


        messageBox.textContent =
            "SYSTEM: Incorrect answer. -25 points.";

    }

}


// ========================================
// UPDATE SCORE
// ========================================

function updateScore() {

    scoreElement.textContent =
        score;

}


// ========================================
// UPDATE INVENTORY
// ========================================

function updateInventory() {

    const inventory =
        getInventory();


    const inventoryElement =
        document.getElementById(
            "inventory-items"
        );


    if (inventory.length === 0) {

        inventoryElement.textContent =
            "Empty";

        return;

    }


    inventoryElement.innerHTML =
        inventory
            .map(item => {

                return `ðŸ”‘ ${item}`;

            })
            .join(" &nbsp; ");

}


// ========================================
// FINISH GAME
// ========================================

function finishGame() {

    console.log("FINISH GAME CALLED");

    gameStarted = false;

    stopTimer();

    const endScreen =
        document.getElementById("end-screen");

    const gameScreen =
        document.getElementById("game-screen");

    // Final score
    document.getElementById("final-score").textContent =
        score;

    // Puzzles solved
    document.getElementById("final-puzzles").textContent =
        completedPuzzles + "/5";

    // Time remaining
    document.getElementById("final-time").textContent =
        timerElement.textContent;

    // Clues collected
    document.getElementById("final-clues").textContent =
        getInventory().length;

    // Accuracy
    document.getElementById("final-accuracy").textContent =
        "100%";

    // Rewards earned
    document.getElementById("final-rewards").textContent =
        completedPuzzles + "/5";

    // Hide game
    gameScreen.style.display = "none";
    gameScreen.classList.remove("active");

    // Show victory screen
    endScreen.style.display = "block";
    endScreen.classList.add("active");

    console.log("VICTORY SCREEN SHOWN");
}


// ========================================
// CLOSE PUZZLE MODAL
// ========================================
// ========================================

closeModal.addEventListener(
    "click",
    () => {

        playClick();

        modal.classList.add("hidden");

    }
);


// ========================================
// RESTART GAME
// ========================================

export function restartGame() {

    console.log("PLAY AGAIN CLICKED");

    const endScreen = document.getElementById("end-screen");
    const gameScreen = document.getElementById("game-screen");

    // Hide victory screen
    endScreen.style.display = "none";
    endScreen.classList.remove("active");

    // Show game screen again
    gameScreen.style.display = "block";
    gameScreen.classList.add("active");

    // Clear previous game data
    clearInventory();

    // Start a fresh game
    startGame();

}

