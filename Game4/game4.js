let score = 0;
let colors = ['#FF6347', '#ADD8E6', '#90EE90', '#FFD700']; // Tomato, Light Blue, Light Green, Gold
let selectedColor = '#000000'; // Default color to indicate no color selected yet
let flowerParts = {
   petals: '#FFFFFF',
   center: '#FFFFFF',
   stem: '#FFFFFF'
};


let stemColored = 0;
let petalsColored = 0;
let centerColored = 0;
let level2Button; // Variable to hold the level 2 button
let congratulationsScreen = false; // Flag to track if congratulations screen is shown
let level2ScreenShown = false; // Flag to track if level 2 screen is shown
let currentLevel = 1;
const defaultColors = { ...flowerParts };

function game4Preload(){
}

function game4Setup(){
// background("white");
createCanvas(400, 400);
currentActivity = 4;
menuButton.show();
game1Button.show();
game2Button.show();
game3Button.show();
game4Button.hide();
//noLoop();
resetButton = createButton('Clear Flower');
resetButton.position(10, 350);
resetButton.mousePressed(resetFlower);
textSize(18);
textAlign(CENTER, CENTER);
level2Button = createButton('Level 2');
level2Button.position(200, 200);
//level2Button.position(width / 2 - 40, height / 2 + 50);
level2Button.mousePressed(goToLevel2);
level2Button.hide();
noLoop();
}




function game4Draw(){
   if (currentLevel === 1) {


       background(245); // Light gray background
       displayScore();
       drawColorBoxes();
       drawFlower();


   } else if (currentLevel === 2) {
       background(197, 179, 229); // Pretty lilac background color
       //resetFlower();
       displayScore();
       drawColorBoxes();
       drawFlower();
   } else {
       resetButton.hide();
       level2Button.hide();
   }
   checkCompletion();
}
function displayScore() {


   fill(0);


   noStroke();


   textSize(16);


   text(`Score: ${score}`, width - 80, 30);


}






function checkCompletion() {


   // Check if all flower parts are not white (i.e., colored)


   if (stemColored && petalsColored && centerColored) {


       congratulationsScreen = true;


       textSize(32);


       textAlign(CENTER, CENTER);






       level2Button.show();


       if (currentLevel === 2) {
//
           currentLevel = 1;
//
           resetButton.hide();
           level2Button.hide();
           fill('red'); // Make the text color red for visibility


           text('Game Over!', 0 , 0);


       } else {


           currentLevel += 1;


       }
   stemColored = petalsColored = centerColored = 0;


   }






}


function goToLevel2(){


   resetFlower();


   level2Button.hide();


   resetButton.show();


   selectedColor = "#FFFFFF";






}






function drawColorBoxes() {


   for (let i = 0; i < colors.length; i++) {


       fill(colors[i]);


       rect(50 + 100 * i, 150, 50, 50); // Draw color selection boxes


   }


}






function drawFlower() {


   resetMatrix(); // Reset transformations


   // Draw stem


   fill(flowerParts.stem);


   rect(190, 320, 20, 80);


   // Draw petals


   translate(width / 2, height - 100); // Adjust flower position


   fill(flowerParts.petals);


   for (let i = 0; i < 10; i++) {


       ellipse(0, -30, 20, 60);


       rotate(PI / 5);


   }


   // Draw center


   fill(flowerParts.center);


   ellipse(0, 0, 40, 40);


}


function mousePressed() {


   for (let i = 0; i < colors.length; i++) {


       if (mouseX > 50 + 100 * i && mouseX < 100 + 100 * i && mouseY > 150 && mouseY < 200) {


           selectedColor = colors[i];


           return;


       }


   }


   updateFlowerParts(mouseX, mouseY);


   redraw(); // Redraw to show color changes


}


function updateFlowerParts(x, y) {


   if (x > 370 && x < 430 && y > 350 && y < 380) {


       updatePartColor('stem');


       stemColored = 1;


   } else if (x > 190 && x < 210 && y > 320 && y < 400) {


       updatePartColor('stem');


       stemColored = 1;


   } else if (dist(x, y, 200, 250) < 75) {


       if (dist(x, y, 200, 300) < 25) {


           updatePartColor('center');


       centerColored = 1;


       } else {


           updatePartColor('petals');


       petalsColored = 1;


       }


   }


}






function updatePartColor(part) {


   if (flowerParts[part] === '#FFFFFF') { // Check if part is initially white


       flowerParts[part] = selectedColor; // Update color


       score += 10; // Increment score only if color changes from white


   }


}






function resetFlower() {


   if(currentLevel === 1) {


       flowerParts = { ...defaultColors };


       score = 0;


       stemColored = centerColored = petalsColored = 0;


       level2Button.hide();


       currentLevel = 1;


   } else {


       flowerParts = { ...defaultColors };


       stemColored = centerColored = petalsColored = 0;


       level2Button.hide();


       currentLevel = 2;


   }


      


   //redraw();


   //reset();


}
