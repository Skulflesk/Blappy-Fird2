// ================================================
// JavaScript Canvas Challenges
// ================================================

// Challenge 1: Set up your canvas
// Look for your <canvas> element to your html file, with id "myCanvas". See it?
// Change the size of the canvas to width = 500 and height = 400.
// In styles.css, give it a "gray" border of 5 pixels.

// No javascript for challenge 1, just adjust your style!
let canvas = document.getElementById("myCanvas2");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

// Challenge 2: Draw a rectangle
// Draw a filled rectangle at x=30, y=30 with width=100, height=50
// Fill it with the color "#"!
function drawSky(){
pencil.fillStyle = "#1f82f3ff";     // color to fill the rectangle
pencil.fillRect(0, 0, 600, 540); // x, y, width, height
}

function drawGrass(){
pencil.fillStyle = "#00AB16";     // color to fill the rectangle
pencil.fillRect(0, 300, 600, 100); // x, y, width, height
}

function drawSun(){
// Start a new path
pencil.beginPath(0,0);
pencil.beginPath();               // Start path
pencil.fillStyle = "#FCE33F";       // Set fill color
pencil.arc(50, 50, 50, 0, Math.PI * 2);  // Draw circle
pencil.closePath();               // Close path
pencil.fill();
}
// Move the "pencil" to the starting point (x=50, y=50)
//Start a new shape
function drawRock(){
pencil.beginPath();
pencil.strokeStyle = "grey";
pencil.lineWidth = 50;
// Move to the first point
pencil.moveTo(200, 320);

// Draw lines to additional points
pencil.lineTo(207, 300);
pencil.lineTo(212, 290);
pencil.lineTo(225, 280);
pencil.lineTo(240, 275);
pencil.lineTo(270, 280);
pencil.lineTo(300, 290);
pencil.lineTo(310, 300);
pencil.lineTo(320, 310);
pencil.lineTo(330, 320);

// Close the path (connects last point to first)
pencil.closePath();

pencil.stroke();
}
 document.getElementById("drawSky").addEventListener("click", drawSky);
  document.getElementById("drawSun").addEventListener("click", drawSun);
  document.getElementById("drawGrass").addEventListener("click", drawGrass);
  document.getElementById("drawRock").addEventListener("click", drawRock);



  



// Draw lines to additional points



// Close the path (connects last point to first)



// -----------------------------------------------


// Challenge 3: Draw an outlined rectangle
// Draw a rectangle outline at x=150, y=30 with width=200, height=250
// Make the outline color a nice red, and give it a thickness of 20 pixels.
// Careful! If you do it in the wrong order, you'll get...the default style...
//draw a filled rect






// -----------------------------------------------

// Challenge 4: Draw a circle
// Draw a circle at x=100, y=150 with radius 40
// Fill it with a minty green color, for freshness.





// -----------------------------------------------

// Challenge 5: Draw a line
// Draw a line from top-left (0,0) to bottom-right (canvas width, canvas height)
// Make it purple and 3 pixels thick.






// -----------------------------------------------

// Challenge 6: Draw a triangle
// Draw a filled triangle with points at (200,150), (250,250), and (150,250)
// Fill it with a calming pink color!





// -----------------------------------------------


// Challenge 7: We didn't teach this!
// Add a title to your picture, INSIDE the canvas (not using HTML)
// Use this website to figure it out:
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
// Ready, go!




// -----------------------------------------------
