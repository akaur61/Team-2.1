function game1Preload(){

}

function game1Setup(){
  background('#fae');
  currentActivity = 1;
  
  // Hide the Game 1 button, show all the other navigation buttons
  menuButton.show();
  game1Button.hide();
  game2Button.show();
  game3Button.show();
  game4Button.show();

  /*fill("black");
  stroke(1);
  line(75,200,320,200)//bottom
  line(320,200,200,70)//right
  line(200,70,75,200)//left
  //rectangle
  line(75,200,75,425)//left
  line(75,425,320,425)//bottom
  line(320,425,320,200)//right
  //door
  line(175,330,175,425)//left
  line(225,330,225,425)//right
  line(175,330,225,330)//top*/
  
}

function game1Draw(){
  strokeWeight(1);
  drawingContext.setLineDash([5, 15]); 

  if (mouseIsPressed) {
    fill(0);
  } else {
    noStroke();
    noFill();
  }
  ellipse(mouseX, mouseY, 5, 5);

  //triangle
  line(75,200,320,200)//bottom
  line(320,200,200,70)//right
  line(200,70,75,200)//left
  //rectangle
  line(75,200,75,425)//left
  line(75,425,320,425)//bottom
  line(320,425,320,200)//right
  //door
  line(175,330,175,425)//left
  line(225,330,225,425)//right
  line(175,330,225,330)//top
}