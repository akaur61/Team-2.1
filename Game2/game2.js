let game2Photo1;
//hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
function game2Preload(){
  game2Photo1= loadImage("Game2/penguin.png");
}

function game2Setup(){
 // document.body.style.backgroundColor = "blue";
  background(178,255,255);
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
  //background(178,255,255);
  image(game2Photo1,50,140);

 
  if(mouseIsPressed) {
    fill(0);
  } else {
    noStroke();
    noFill();
  }
  ellipse(mouseX, mouseY, 5, 5);
}

// function draw() {
//   if (mouseIsPressed) {
//     fill(255,255,255);
//   } else {
    
//     fill(28,89)
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }

function game2MousePressed(){
  
}