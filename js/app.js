// Enemies our player must avoid
var Enemy = function () {
    this.speed = Math.ceil(Math.random() * 5);
    console.log(this.speed);
    this.x = 0;
    this.y = -40 + Math.ceil(Math.random() * 3)  * 83;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    var difficulty = 101;
    this.x = this.x + (this.speed*dt)*difficulty;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Player Class
var Player = function () {
    //todo: write me!
    this.x = 202;
    this.y = -40 + 5 * 83;
    this.sprite = 'images/char-pink-girl.png';
};

Player.prototype.update = function () {

    //todo: write me!

};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
Player.prototype.handleInput = function (input) {
    switch (input) {
        case "left":
            (this.x > 50 ) ? this.x = this.x - 101 : console.log('oob');
            break;
        case "up":
            (this.y > 50 ) ? this.y = this.y - 83 : window.alert("YOU WIN!");
            break;
        case "right":
            (this.x < 404 ) ? this.x = this.x + 101 : console.log('oob');
            break;
        case "down":
            (this.y < 334 ) ? this.y = this.y + 83 : console.log('oob');
            break;
        default:
            console.log('false input');
            break;
    }
    //todo: write me!

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [enemy1 = new Enemy()];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
