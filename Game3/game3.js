let exercise3x = 200;
let exercise3y = 200;

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
  fill("plum");
  rect(200,0, 200,200);
  fill("lightblue");
  rect(200,200, 200);
  fill("lightyellow");
  rect(0,200, 200,200);
  fill("deeppink");
  circle(100,300, 100);
  fill("lightgreen");
  rect(50,60,100,100);
  fill("steelblue");
  triangle(350, 150, 250, 150, 300,50);
  fill("coral");
  rect(230,250,150,100);
  
  noStroke();

  
}

function game3Draw(){
  
  exercise3x = exercise3x + random(4) - 2;
  exercise3y = exercise3y + random(4) - 2;
  
  fill(220);
  circle(exercise3x, exercise3y, 10);

  
}