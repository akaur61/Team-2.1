let doneButton; // Variable to hold the "Done" button
let game1level2Button; // Variable to hold the level 2 button
let game1congratulationsScreen = false; // Flag to track if congratulations screen is shown
let game1level2ScreenShown = false; // Flag to track if level 2 screen is shown


function game1Preload(){

}

function game1Setup(){
  background('#fae');
  currentActivity = 1;


  strokeWeight(1);
  drawingContext.setLineDash([5, 15]);


   // Hide the Game 1 button, show all the other navigation buttons
   menuButton.show();
   game1Button.hide();
   game2Button.hide();
   game3Button.hide();
   game4Button.hide();


  // Create the "Done" button
  doneButton = createButton('Done');
  doneButton.position(width / 2 - 92, height - 60); // Adjust position to fit in canvas
  doneButton.size(80, 30); // Set smaller button size
  doneButton.mousePressed(congratulations); // Call the congratulations function when pressed


}


function game1Draw(){
  if (!game1congratulationsScreen && !game1level2ScreenShown) { // Draw only if neither congratulations nor level 2 screen is shown


  //roof
  line(75,200,320,200)//bottom
  line(320,200,200,70)//right
  line(200,70,75,200)//left


  //door
  line(175,330,175,425)//left
  line(225,330,225,425)//right
  line(175,330,225,330)//top


  //rectangle
  line(75,200,75,425)//left
  line(75,425,320,425)//bottom
  line(320,425,320,200)//right


  //roof
  fill("steelblue");
  noStroke();
  triangle(84,197,311,197,200,75);


  //door
  fill("purple");
  noStroke();
  rect(179,333,43,88)


  //walls
  fill("deeppink")
  noStroke();
  rect(78,205,94,215)//left recatangle
  rect(230,205,87,215)//right rectangle
  rect(165,205,70,123)//middle rectangle


  if (mouseIsPressed) {
    fill(0);
  } else {
    noStroke();
    noFill();
  }
  ellipse(mouseX, mouseY, 5, 5);


  } else {
    if (mouseIsPressed) {
      fill(0);
    } else {
      noStroke();
      noFill();
    }
    ellipse(mouseX, mouseY, 5, 5);
  }
}


function congratulations() {
  // Display congratulations message
  game1congratulationsScreen = true;
  background("Skyblue");
  textSize(48);
  textAlign(CENTER, CENTER);
  fill(255); // White text color
  textStyle(BOLD); // Apply bold font style
  text("Congratulations!", width / 2, height / 2);
  doneButton.hide();


  // Create the level 2 button
  game1level2Button = createButton('Level 2');
  game1level2Button.position(width / 2 - 60, height / 2 + 50); // Adjust position
  game1level2Button.size(80, 30); // Set button size
  game1level2Button.mousePressed(goTogame1Level2); // Call the goToLevel2 function when pressed
}


function goTogame1Level2() {
  // Display level 2 screen
  game1level2ScreenShown = true;
  if (mouseIsPressed) {
    fill(0);
  } else {
    noStroke();
    noFill();
  }
  ellipse(mouseX, mouseY, 5, 5);

  background("skyblue");


  stroke(3)
  //upper petal
  line(215,330,215,600)
  line(215,420,305,400)
  line(215,470,305,400)
  line(215,470,305,400)
  //lower petal
  line(215,530,105,480)
  line(215,480,105,480)
  //grass
  fill("green")
  triangle(210, 485, 120, 483, 213, 526);
  triangle(220, 462, 295, 405, 218, 425);


  //petals
 fill('yellow')
 circle(200,200,125);
 fill('deeppink')
 circle(125,100,125)
 fill('deeppink')
 circle(75,215,125)
 fill('deeppink')
 circle(250,85,125)
 fill('deeppink')
 circle(325,185,125)
 fill('deeppink')
 circle(325,185,125)
 fill('deeppink')
 circle(275,300,125)
 fill('deeppink')
 circle(150,315,125)
 fill('#fae')


 game1level2Button.hide();


  doneButton = createButton('Done');
  doneButton.position(width / 2 - 92, height - 60); // Adjust position to fit in canvas
  doneButton.size(80, 30); // Set smaller button size
  doneButton.mousePressed(congratulations2); // Call the congratulations function when pressed

  if (mouseIsPressed) {
    fill(0);
  } else {
    noStroke();
    noFill();
  }
  ellipse(mouseX, mouseY, 5, 5);
}


  function congratulations2() {
    // Display congratulations message
    game1congratulationsScreen = true;
    background("Pink"); // Pretty lilac background color
    textSize(48);
    textAlign(CENTER, CENTER);
    fill(255); // White text color
    textStyle(BOLD); // Apply bold font style
    text("Congratulations!", width / 2, height / 2);
    doneButton.hide();
  }
