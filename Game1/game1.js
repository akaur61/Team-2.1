let owlImage;

function game1Preload(){
  owlImage = loadImage("Game1/owlCarving.jpg");
}

function game1Setup(){
  drawingContext.setLineDash([6]);
  background('#fae');
  currentActivity = 1;
  
  // Hide the Game 1 button, show all the other navigation buttons
  menuButton.show();
  game1Button.hide();
  game2Button.show();
  game3Button.show();
  game4Button.show();
  
}

function game1Draw(){
  background('#fae');
  
  fill('black');
  text('Activity 1 goes here', 200, 200);
  fill('black');
  text('Jessica', 200, 200);
  //roof
  fill(168, 0, 10);
  triangle(75,150,327,152,200,40);
  //wall
  stroke(0);
  fill(225,220,0);
  rect(75,150,250,230);
  //door
  fill(0,700,520);
  rect(160,250,75,135);
  line(200,400);
}