
let colorValue = "deeppink";
let recValue = "yellow";
let coralValue = "coral";
let triangleValue = "steelblue";
let doneButtonX, doneButtonY, doneButtonSize;
let level2 = false;

let level2ColorValue = "lightpink";
let level2RecValue = "blue";
let level2CoralValue = "orange";
let level2TriangleValue = "purple";

let circleFeedback1 = '';
let recFeedback1 = '';
let coralFeedback1 = '';
let triangleFeedback1 = '';

// Feedback messages for level 2
let circleFeedback2 = '';
let recFeedback2 = '';
let coralFeedback2 = '';
let triangleFeedback2 = '';

let timerInterval; // Timer interval variable
let timer = 60; // Timer duration in seconds
let points = 0;



function game3Preload() {}

function game3Setup() {
  createCanvas(400, 1100);
  background(220);
  currentActivity = 3;



  // Hide the Activity 3 button, show all the other buttons
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();

  doneButtonSize = 80;
  doneButtonX = width / 2 - doneButtonSize / 2;
  doneButtonY = height / 2 - doneButtonSize / 2;




  stroke(0);
  noLoop();

  startTimer();
}

function game3Draw() {
  if (!level2) {
    drawLevel1();
  } else {
    drawLevel2();
  }


  
}

function drawLevel1() {
  fill('black');
  textSize(25);
  text('Where is the circle?', 120, 450);

  stroke(0);
  fill("pink");
  rect(0, 0, 200);
  fill("plum");
  rect(200, 0, 200, 200);
  fill("lightblue");
  rect(200, 200, 200);
  fill("lightyellow");
  rect(0, 200, 200, 200);

  fill(colorValue);
  circle(100, 300, 100);

  fill(recValue);
  rect(50, 60, 100, 100);

  fill(coralValue);
  rect(230, 250, 150, 100);

  fill(triangleValue);
  triangle(350, 150, 250, 150, 300, 50);

  
  fill('black');
  textSize(15);
  text(circleFeedback1, 70, 240);
  text(recFeedback1, 60, 50);
  text(coralFeedback1, 265, 235);
  text(triangleFeedback1, 270, 40);
  
  fill('deeppink');
  textSize(20);
  

  let timerText = 'Time: ' + timer + 's';
  let timerTextWidth = textWidth(timerText);
  text(timerText, 150, 40); // Adjusted position

  // Adjust position based on the length of the points value
  let pointsText = 'Points: ' + points;
  let pointsTextWidth = textWidth(pointsText);
  text(pointsText, 155, 70);


  noStroke();

  fill('pink');
  rect(doneButtonX, doneButtonY, doneButtonSize, doneButtonSize);
  fill('black');
  textSize(20);
  text('level 2', doneButtonX + 13, doneButtonY + 45);

  

}

function drawLevel2() {
  background("pink");
  fill('green');
  textSize(30);
  textAlign(CENTER, CENTER)
  text("level2", width / 2, height / 2);

  stroke(0);
  fill("cyan");
  rect(0, 0, 200);
  fill("turquoise");
  rect(200, 0, 200, 200);
  fill("teal");
  rect(200, 200, 200);
  fill("lightblue");
  rect(0, 200, 200, 200);

  fill(level2ColorValue);
  circle(100, 300, 100);
  fill(level2RecValue);
  rect(50, 60, 100, 100);
  fill(level2CoralValue);
  rect(230, 250, 150, 100);
  fill(level2TriangleValue);
  triangle(350, 150, 250, 150, 300, 50);

  fill('black');
  textSize(15);
  text(circleFeedback2, 95, 240);
  text(recFeedback2, 100, 50);
  text(coralFeedback2, 295, 235);
  text(triangleFeedback2, 295, 40);

  fill('deeppink');
  textSize(20);

  let timerText = 'Time: ' + timer + 's';
  let timerTextWidth = textWidth(timerText);
  text(timerText, 85 + (timerTextWidth < 70 ? 0 : 70 - timerTextWidth), 500);

  // Adjust position based on the length of the points value
  let pointsText = 'Points: ' + points;
  let pointsTextWidth = textWidth(pointsText);
  text(pointsText, 85 + (pointsTextWidth < 70 ? 0 : 70 - pointsTextWidth), 550);


  noStroke();

  fill('black');
  textSize(25);
  text('Where is the triangle?', 200, 450);
}

function game3MousePressed() {
  if (!level2 && mouseX > doneButtonX && mouseX < doneButtonX + doneButtonSize &&
    mouseY > doneButtonY && mouseY < doneButtonY + doneButtonSize) {

    level2 = true;
    redraw();

  

   

  } else {
    if (!level2) {
      updateColorsLevel1();
    } else {
      updateColorsLevel2();
    }
  }

  
}



function updateColorsLevel1() {
  if (mouseX > 50 && mouseX < 150 && mouseY > 60 && mouseY < 160) {
    recValue = (recValue === 'yellow') ? 'red' : 'yellow';
    recFeedback1 = 'Try Again!';
   
  } else if (dist(mouseX, mouseY, 100, 300) < 50) {
    colorValue = (colorValue === 'deeppink') ? 'lightgreen' : 'deeppink';
    circleFeedback1 = 'Great Job!';
    points++;

  } else if (mouseX > 230 && mouseX < 380 && mouseY > 250 && mouseY < 350) {
    coralValue = (coralValue === 'coral') ? 'red' : 'coral';
    coralFeedback1 = 'Try Again!';
    
  } else if (triPoint(350, 150, 250, 150, 300, 50, mouseX, mouseY)) {
    triangleValue = (triangleValue === 'steelblue') ? 'red' : 'steelblue';
    triangleFeedback1 = 'Try Again!';
    

  }
  
  redraw();
}

function updateColorsLevel2() {
  if (mouseX > 50 && mouseX < 150 && mouseY > 60 && mouseY < 160) {
    level2RecValue = (level2RecValue === 'blue') ? 'red' : 'blue';
    recFeedback2 = 'Try Again!'
    
  } else if (dist(mouseX, mouseY, 100, 300) < 50) {
    level2ColorValue = (level2ColorValue === 'lightpink') ? 'red' : 'lightpink';
    circleFeedback2 = 'Try Again!';
    
  } else if (mouseX > 230 && mouseX < 380 && mouseY > 250 && mouseY < 350) {
    level2CoralValue = (level2CoralValue === 'orange') ? 'red' : 'orange';
    coralFeedback2 = 'Try Again!';
    
  } else if (triPoint(350, 150, 250, 150, 300, 50, mouseX, mouseY)) {
    level2TriangleValue = (level2TriangleValue === 'purple') ? 'lightgreen' : 'purple';
    triangleFeedback2 = 'Good Job!';
    points++;
  }
 
  redraw();
}

function triPoint(x1, y1, x2, y2, x3, y3, px, py) {
  let areaOrig = Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));
  let area1 = Math.abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py));
  let area2 = Math.abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py));
  let area3 = Math.abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py));

  return area1 + area2 + area3 === areaOrig;
}
function startTimer() {
  timerInterval = setInterval(function() {
    timer--; // Decrement timer
    if (timer <= 0) {
      clearInterval(timerInterval); // Stop the timer when it reaches zero
      // Add your logic here for what happens when time runs out
    }
    redraw(); 
  }, 1000); // Update every second
}

