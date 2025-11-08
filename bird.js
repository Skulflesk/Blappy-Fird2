let birdImage = new Image();
birdImage.src = "https://static.vecteezy.com/system/resources/thumbnails/050/704/089/small/blue-bird-isolated-on-transparent-background-png.png";

export class Bird {
    
    x = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil;

    ySpeed = 1;
    maximumYSpeed = 20;

    constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
          this.birdImage = new Image();
        this.birdImage.src = "https://static.vecteezy.com/system/resources/thumbnails/050/704/089/small/blue-bird-isolated-on-transparent-background-png.png";
    }

    draw() {
        //top pipe
        // this.pencil.fillStyle = 'pink'; // Set the fill color
        // this.pencil.fillRect(
         this.pencil.drawImage(this.birdImage, this.x, this.y, this.width, this.height);
            // this.x, 
            // this.y, 
            // this.width, 
            // this.height
         // x, y, w, h
    }

    flap() {
        console.log("Flapped!")
        this.ySpeed = -15;
    }

    gravity() {
        this.y += this.ySpeed
        this.ySpeed += 2;

        if(this.ySpeed > this.maximumYSpeed) {
            this.ySpeed = this.maximumYSpeed;
        }

    }

    // isHitByPipe(pipeObstacle) {
        //this detects collisions for the top pipe
       
//     let isFarEnoughRight = this.x > pipeObstacle.topPipeTopLeft.x;
// let isLowEnough = this.y < pipeObstacle.topPipeBottomRight.y; // swapped
// let isFarEnoughLeft = this.x < pipeObstacle.topPipeBottomRight.x;
// let isHighEnough = this.y > pipeObstacle.topPipeTopLeft.y; // swapped

// if(isFarEnoughRight && isLowEnough && isFarEnoughLeft && isHighEnough)
//     return true;

// // Bottom pipe
// isFarEnoughRight = this.x > pipeObstacle.bottomPipeTopLeft.x;
// isLowEnough = this.y > pipeObstacle.bottomPipeTopLeft.y;
// isFarEnoughLeft = this.x < pipeObstacle.bottomPipeBottomRight.x;
// isHighEnough = this.y < pipeObstacle.bottomPipeBottomRight.y;

// if(isFarEnoughRight && isLowEnough && isFarEnoughLeft && isHighEnough)
//     return true;

// return false;
// }
   isHitByPipe(pipeObstacle) {
        // Detect collisions for the top pipe
        let isFarEnoughRight = this.x > pipeObstacle.topPipeTopLeft.x;
        let isLowEnough = this.y < pipeObstacle.topPipeBottomRight.y;
        let isFarEnoughLeft = this.x < pipeObstacle.topPipeBottomRight.x;
        let isHighEnough = this.y > pipeObstacle.topPipeTopLeft.y;

        if (isFarEnoughRight && isLowEnough && isFarEnoughLeft && isHighEnough) {
            console.log("Hit top pipe!");
            location.reload(); // 🔁 Reload page when hit
            return true;
        }

        // Detect collisions for the bottom pipe
        isFarEnoughRight = this.x > pipeObstacle.bottomPipeTopLeft.x;
        isLowEnough = this.y > pipeObstacle.bottomPipeTopLeft.y;
        isFarEnoughLeft = this.x < pipeObstacle.bottomPipeBottomRight.x;
        isHighEnough = this.y < pipeObstacle.bottomPipeBottomRight.y;

        if (isFarEnoughRight && isLowEnough && isFarEnoughLeft && isHighEnough) {
            console.log("Hit bottom pipe!");
            location.reload(); // 🔁 Reload page when hit
            return true;
        }
    if (this.y + this.height >= this.canvas.height || this.y <= 0) {
        console.log("Hit canvas edge!");
        location.reload();
        return true;
    }
        return false;
    }


}