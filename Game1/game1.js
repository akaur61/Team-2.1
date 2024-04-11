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

 

  //triangle
  fill(168, 0, 10);
  triangle(75,200,320,200,200,70);
  line(75,200,320,200)//bottom
  line(320,200,200,70)//right
  line(200,70,75,200)//left
  //rectangle
  stroke(0)
  fill("yellow")
  rect(75,200,245,225)
  fill("pink")
  rect(75,200,100,225)//left recatangle
  rect(225,200,95,225)//right rectangle
  rect(200,220,95)//middle rectangle
  line(75,200,75,425)//left
  line(75,425,320,425)//bottom
  line(320,425,320,200)//right
  //door
  fill(0,700,520);
  rect(175,330,50,96)
  line(175,330,175,425)//left
  line(225,330,225,425)//right
  line(175,330,225,330)//top

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