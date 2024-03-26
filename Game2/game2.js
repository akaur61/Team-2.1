let game2Photo1;

function game2Preload(){
  game2Photo1= loadImage("Game2/penguin.png");
}

function game2Setup(){
  document.body.style.backgroundColor = "blue";
  // background('rgb(178,255,255)');
  currentActivity = 2;
  
  // Hide the Activity 2 button, show all the other buttons
  menuButton.show();
  game1Button.show();
  game2Button.hide();
  game3Button.show();
  game4Button.show();
}

function game2Draw(){
  background('rgb(178,255,255)');
  image(game2Photo1,50,140);
  
}

function game2MousePressed(){
  
  
}