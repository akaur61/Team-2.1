
let colorValue = "deeppink";
let recValue = "yellow";
let coralValue = "coral"
let triangleValue ="steelblue";

function game3Preload(){  
}

function game3Setup(){
  background(220);
  currentActivity = 3;
  
  // Hide the Activity 3 button, show all the other buttons
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();
  
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

  fill(coralValue);
  rect(230,250,150,100);

  fill(triangleValue);
  triangle(350, 150, 250, 150, 300,50);
}


function game3MousePressed(){
  if(mouseX > 50 && mouseX < 150
    && mouseY >60 && mouseY < 160){
     if(recValue == 'yellow')
      recValue = 'red';
      else 
        recValue = "yellow";
      fill('red');
      text('Try again!',50,50);
  }
  else if(dist(mouseX, mouseY, 100, 300) < 50 ){
    if (colorValue == 'lightgreen') {
      colorValue = 'deeppink';
    } else {
      colorValue = 'lightgreen';
     fill('Green');
      text('Great job!',50,240);

    }
  }
  else if(mouseX > 230 && mouseX < 380
    && mouseY > 250 && mouseY < 350){
     if(coralValue == 'coral')
      coralValue = 'red';
      else 
        coralValue = "coral";
      fill('red');
      text('Try again!',250,240);

  }
  else if (triPoint(350, 150, 250, 150, 300,50, mouseX, mouseY)){
    if(triangleValue == 'steelblue')
    triangleValue = 'red';
      else 
      triangleValue = "steelblue";
    fill('red');
    text('Try again!',250,40);
  }
}

function triPoint(x1, y1, x2, y2, x3, y3, px, py){
  let areaOrig = Math.abs((x2 - x1)*(y3 - y1) - (x3-x1)*(y2-y1));
  
  let area1 =    Math.abs( (x1-px)*(y2-py) - (x2-px)*(y1-py) );
  let area2 =    Math.abs( (x2-px)*(y3-py) - (x3-px)*(y2-py) );
  let area3 =    Math.abs( (x3-px)*(y1-py) - (x1-px)*(y3-py) );

  if (area1 + area2 + area3 == areaOrig) {
    return true;
  }
  return false;
}
