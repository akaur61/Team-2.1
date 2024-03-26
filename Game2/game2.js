let game2Photo1;

function game2Preload(){
  game2Photo1= loadImage("Game2/penguin.jpg");
}

function game2Setup(){
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
  image(game2Photo1,30,20);
  
}

function game2MousePressed(){
  
  
}