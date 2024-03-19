

function game3Preload(){
  
}

function game3Setup(){
  background(220);
  currentActivity = 3;
  
  // Hide the Activity 3 button, show all the other buttons
  menuButton.show();
  game1Button.show();
  game2Button.show();
  game3Button.hide();
  game4Button.show();
  
  stroke(0);
  fill("pink");
  rect(0,0, 200);
  fill("blue");
  rect(200,0, 200,200);
  fill("lightblue");
  rect(200,200, 200);
  fill("yellow");
  rect(0,200, 200,200);
  noStroke();
}

function game3Draw(){
  

  
  fill(220);
  circle(exercise3x, exercise3y, 10);

  text("carsyn", 100, 100);
}