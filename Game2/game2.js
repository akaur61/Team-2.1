let game2Photo1;
//hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii


function game2Preload(){
  //game2Photo1= loadImage("Game2/penguin.png");
}

function game2Setup(){
 // document.body.style.backgroundColor = "blue";
  background(178,255,255);
  drawingContext.setLineDash([5, 15]);
  // background('rgb(178,255,255)');
  currentActivity = 2;
  
  // Hide the Activity 2 button, show all the other buttons
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();
}

function game2Draw(){
  //background(178,255,255);
  line(20,150,20,300); //h
  line(120,150,120,300);//h
  line(220,150,160,300);//a
  line(220,150,280,300);//a
  line(340,150,340,300);//t
  if(mouseIsPressed) {
    fill(0);
  } else {
    noStroke();
    noFill();
  }
  ellipse(mouseX, mouseY, 5, 5);
  

}


function game2MousePressed(){
  
}