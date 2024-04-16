
let colorValue = "deeppink";
let recValue = "pink";



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
  circle(100,300,100);
  fill("lightgreen");
  rect(50,60,100,100);
  fill("steelblue");
  triangle(350, 150, 250, 150, 300,50);
  fill("coral");
  rect(230,250,150,100);
  
  noStroke();
  


  
  //describe('coral 50-by-50 rect turns red with mouse click/press.');
}


function game3Draw(){
  fill('black');
  textSize(20);
  text('Where is the circle?',140,450);
  


fill(colorValue);
  circle(100,300,100);
  
  fill(recValue);
  rect(50,60,100,100);
}


function game3MousePressed(){
  if(mouseX > 50 && mouseX < 150
    && mouseY >60 && mouseY < 160){
     if(recValue == 'yellow')
      recValue = 'pink';
      else 
        recValue = "yellow";
  }


  if (colorValue == 'lightgreen') {
    colorValue = 'pink';
  } else {
    colorValue = 'lightgreen';
}
}