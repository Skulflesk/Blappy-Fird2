import { PipeObstacle } from "./pipeObstacle.js";
import { Bird } from "./bird.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

let itemSprite = document.getElementById("coin");

let item = {
    x: 400,
    y: 300,
    width: 50,
    height: 50,
    draw: function() {
        pencil.drawImage(itemSprite, this.x, this.y, this.width, this.height);
    }
};

function getDistance(a, b) {
    let dx = (a.x + a.width/2) - (b.x + b.width/2);
    let dy = (a.y + a.height/2) - (b.y + b.height/2);
    return Math.sqrt(dx * dx + dy * dy);
}




function gameLoop() {
    
    //erase the canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);

   
    testPipe.move();
    testPipe.draw();

    bird.gravity();
    bird.draw();

    let wasHit = bird.isHitByPipe(testPipe);
    if(wasHit) {
        console.log("you're dead, comrade!");
    }
}

setInterval(gameLoop, 50);

let score = 0;

//score goes up every second
function raiseScore() {
    score += 1;
    let scoreElement = document.getElementById("scoreDisplay");
    scoreElement.innerHTML = "SCORE:" + score;
} 
setInterval(raiseScore, 1000);




function detectClick() {
    bird.flap();
}

function detectKey() {
    bird.flap();

}

canvas.addEventListener("click", detectClick);
document.addEventListener("keypress", detectKey)

let testPipe = new PipeObstacle(canvas, pencil);
testPipe.draw();

let bird = new Bird(canvas, pencil);

