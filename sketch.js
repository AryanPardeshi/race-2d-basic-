var form, player, game;
var gameState = 0;
var playerCount;
var database;
var allPlayers;
var distance = 0;
var runner1, runner2, runner3, runner4, runners;



function setup() {
    createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database()
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    if (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play()
    }
    if (gameState===2) {
        game.end();
    }
}
