function game1Preload(){

}

function game1Setup(){
  background('#fae');
  currentActivity = 1;
  
  // Hide the Game 1 button, show all the other navigation buttons
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();

  /*game1Button = createButton("Done!");
  game1Button.position(175,490);
  game1Button.mousePressed(game1Setup);
  game1Button.show();*/
  
}

function game1Draw(){
  strokeWeight(1);
  drawingContext.setLineDash([5, 15]); 

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
  fill("skyblue");
  noStroke();
  triangle(84,197,311,197,200,75);

  //door
  fill("purple");
  noStroke();
  rect(179,333,43,88)

  //walls
  fill("pink")
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
}

function game1MousePressed(){

}