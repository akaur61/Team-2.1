/****
 * FSE100: examples for how to link multiple exercises together
 *****/

let currentActivity = 0;
let menuButton, game1Button, game2Button, game3Button, game4Button;
let photo1;
/***** 
  * If you want to load images or sounds into your application,
  * try using preload()
  * https://p5js.org/reference/#/p5/preload
  *****/
function preload(){
  game1Preload();
  game2Preload();
  game3Preload();
  game4Preload();
  photo1 = loadImage("Pic.png");
}


function switchToMM(){
  background(220);
  photo1.resize(400, 600);
  image(photo1,0,0)
  currentActivity = 0;
  
  // Hide the home page button, show the activity buttons
  menuButton.hide();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  game4Button.show();
}

function setup() {
  createCanvas(400, 600);
  background(220);
  menuButton = createButton('Home Page');
  menuButton.position(90, 100);
  menuButton.mousePressed(switchToMM);
  menuButton.hide();
  
  game1Button = createButton('Tracing Game');
  game1Button.position(50, 550);
  game1Button.mousePressed(game1Setup);
  game1Button.show();
  
  game2Button = createButton('Connect By Numbers');
  game2Button.position(30, 500);
  game2Button.mousePressed(game2Setup);
  game2Button.show();
  
  game3Button = createButton('Matching Game');
  game3Button.position(250, 550);
  game3Button.mousePressed(game3Setup);
  game3Button.show();
  
  game4Button = createButton('Color By Number');
  game4Button.position(250, 500);
  game4Button.mousePressed(game4Setup);
  game4Button.show();
}


function draw() {  
  switch(currentActivity){
    case 0: 
      mainMenu();
      break;
    case 1: 
      game1Draw();
      break;
    case 2: 
      game2Draw();
      break;
    case 3: 
      game3Draw();
      break;
    case 4: 
      game4Draw();
      break;
  }
}

function mainMenu(){
  background(220);
  photo1.resize(400, 600);
  image(photo1,0,0)
  
  fill('black');

}

/*****
* mousePressed() is a reserved function that is called whenever
* the user presses the mouse button in the application.
*****/
function mousePressed(){
  // Only game 4 uses the mousePressed function, but the switch statement
  // makes it easy to add the mousePressed functionality for other games.
  switch(currentActivity){
    case 2: 
      game2MousePressed();
      break;
    case 4: 
      game4MousePressed();
      break;
  }
}