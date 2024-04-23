let game2Photo1;
let game2Photo2;
let doneButton; // Variable to hold the "Done" button
let level2Button; // Variable to hold the level 2 button
let congratulationsScreen = false; // Flag to track if congratulations screen is shown
let level2ScreenShown = false; // Flag to track if level 2 screen is shown

function game2Preload() {
  game2Photo1 = loadImage("Game2/hat.jpg");
  game2Photo2 = loadImage("Game2/fox.jpg");
}

function game2Setup() {
  createCanvas(400, 600); // Adjust canvas size
  background(178, 255, 255);
  drawingContext.setLineDash([5, 15]);
  currentActivity = 2;

  // Create the "Done" button
  doneButton = createButton('Done');
  doneButton.position(width / 2 - 60, height - 265); // Adjust position to fit in canvas
  doneButton.size(80, 30); // Set smaller button size
  doneButton.mousePressed(congratulations); // Call the congratulations function when pressed

  // Hide the "Done" button in other games
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();
}

function game2Draw() {
  if (!congratulationsScreen && !level2ScreenShown) { // Draw only if neither congratulations nor level 2 screen is shown
  

    line(20, 150, 20, 300); //h
    line(120, 150, 120, 300); //h
    line(20, 225, 120, 225);
    line(220, 150, 160, 300); //a
    line(190, 225, 250, 225);
    line(220, 150, 280, 300); //a
    line(340, 150, 340, 300); //t
    line(340, 150, 340, 300);
    line(380, 150, 290, 150);
    if (mouseIsPressed) {
      fill(0);
    } else {
      noStroke();
      noFill();
    }
    ellipse(mouseX, mouseY, 5, 5);



    image(game2Photo1, 100, 390);
  
    
  
 } else if (level2ScreenShown && !congratulationsScreen) { // Draw only if level 2 screen is shown and not the congratulations screen
    //background(224, 240, 233); // Sage green background color//level 2 screen
   
    // Add your level 2 content here
    if(!congratulationsScreen){
      if (mouseIsPressed) {
        fill(0);
        ellipse(mouseX, mouseY, 5, 5);
      } else {
        noStroke();
        noFill();
        ellipse(mouseX, mouseY, 5, 5);
      }
    }
    // Hide level 2 button
    level2Button.hide();
  }
}

function congratulations() {
  // Display congratulations message
  congratulationsScreen = true;
  background(197, 179, 229); // lilac background color

  textSize(48);
  textAlign(CENTER, CENTER);
  fill(255); // White text color
  textStyle(BOLD); // Apply bold font style
  text("Congratulations!", width / 2, height / 2);
  doneButton.hide();

  // Create the level 2 button
  level2Button = createButton('Level 2');
  level2Button.position(width / 2 - 60, height / 2 + 50); // Adjust position
  level2Button.size(80, 30); // Set button size
  level2Button.mousePressed(game2goToLevel2); // Call the goToLevel2 function when pressed
}

function game2goToLevel2() {
  // Display level 2 screen
  level2ScreenShown = true;
  congratulationsScreen = false;
  background(224, 240, 233); // Sage green background color//level 2 screen
  image(game2Photo2, 100, 390);
  stroke(3)
  line(20, 150, 140, 150);
  line(20, 210, 100, 210);
  line(20, 150, 20, 350);
  ellipse(210,250,120,190);
  line(310,150,390,350);
  line(390,150,310,350);
  
  level2Button.hide()
}