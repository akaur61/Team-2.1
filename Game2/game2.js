function game2Preload(){
  
}

function game2Setup(){
  drawingContext.setLineDash([6]);
  background('rgba(0,255,0, 0.25)');
  currentActivity = 2;
  
  // Hide the Activity 2 button, show all the other buttons
  menuButton.show();
  game1Button.show();
  game2Button.hide();
  game3Button.show();
  game4Button.show();
}

function game2Draw(){
  background('rgba(0,255,0, 0.25)');
  
  text('Jessica', 200, 200);
  //roof
  triangle(75,150,327,152,200,40);
  //walls
  stroke(0);
  rect(75,150,250,230);
  //door
  rect(160,250,75,135);
}

function game2MousePressed(){
  
}