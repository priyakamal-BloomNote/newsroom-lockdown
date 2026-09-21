// ===============================
// PLAYER.JS
// Handles the player's information
// ===============================

const player = {
    name: "Newsroom Analyst",

    // Player position
    x: 50,
    y: 50,

    // Player health
    health: 100,

    // Player status
    isAlive: true
};


// ===============================
// GET PLAYER
// ===============================

export function getPlayer() {
    return player;
}


// ===============================
// MOVE PLAYER
// ===============================

export function movePlayer(direction) {

    const movement = 5;

    if (direction === "up") {
        player.y -= movement;
    }

    if (direction === "down") {
        player.y += movement;
    }

    if (direction === "left") {
        player.x -= movement;
    }

    if (direction === "right") {
        player.x += movement;
    }

    console.log(
        `Player position: X=${player.x}, Y=${player.y}`
    );
}


// ===============================
// DAMAGE PLAYER
// ===============================

export function damagePlayer(amount) {

    player.health -= amount;

    if (player.health <= 0) {

        player.health = 0;
        player.isAlive = false;

        console.log("GAME OVER");
    }
}


// ===============================
// HEAL PLAYER
// ===============================

export function healPlayer(amount) {

    player.health += amount;

    if (player.health > 100) {
        player.health = 100;
    }
}


// ===============================
// RESET PLAYER
// ===============================

export function resetPlayer() {

    player.name = "Newsroom Analyst";

    player.x = 50;
    player.y = 50;

    player.health = 100;

    player.isAlive = true;
}