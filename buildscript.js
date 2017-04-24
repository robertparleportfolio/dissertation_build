// This code is written by Robert Parle, a third year computer science student at Edge Hill University. If there are questions regarding this code please email me at: newrobertparLe@hotmail.co.uk

/*
Make sure that the functions arent ran until the DOM has loaded.
This was line of code was implemented to prevent any of this code affecting the DOM before the user wants to change
any of their own content.
*/
window.onload=function(){

//This console log is used to make sure that the JavaScript file has been loaded successfully and asks them to input a value into the prompt
console.log("Build loaded, please input a value into the prompt.");

//This function is used to gather the users chosen perspesctive and deliver the correct simulation.
function promptUserBox() {
  //This line of code stores the user inputted value into a variable, that can the be validated to see which decision the user made.
  var developersChosenPerspective = prompt("Please type what perspective you would like, either:\n'Colour-blind', 'Motor-function-loss' or 'Blindness'. \nPlease refresh the page to reset or choose another perspective.", "Enter here!");

  //This if else statement is used to check what the user inputted into the prompt. Then calls the relevant function depedent on what was chosen.
  //The first condition checks if the user wrote "Colour-blind", if so it calls colourBlindSim();
  if (developersChosenPerspective == "Colour-blind") {
    colourBlindSim();
  //The next condition checks if the user wrote "Motor-function-loss", if so it calls motorFunctionLossSim();
  } else if (developersChosenPerspective == "Motor-function-loss") {
    motorFunctionLossSim();
  //The next condition checks if the user wrote "Blindness", if so it calls BlindnessSim();
  } else if (developersChosenPerspective == "Blindness") {
    blindnessSim();
  }
}

/*
The below function - colourBlindSim() is called if the user inputs "Colour-blind" into the prompt.
This function changes the colour of all text on the page into white.
*/
function colourBlindSim() {
  console.log("Colour-blindness simulation is running.");
  document.getElementById("body").style.color = "#fff";
}

/*
The below function - motorFunctionLossSim is called if the user inputs "Motor-function-loss" into the prompt.
This function disables the use of mouse clicks for the user. Therefore the only form of navigation for the user
is a keyboard, this is decided as often people with Motor neuron disease cannot use a mouse and have to use a keyboard to navigate through a website.
*/
function motorFunctionLossSim() {
  console.log("Loss of motor functions simulation is running.");
  document.getElementById("body").style.pointerEvents = 'none';
}

/*
The below function - blindnessSim() is called if the user inputs "Blindness" into the prompt.
This function makes it so whenever the mouse is moved it makes the webpage hidden (using the visibility property). Therefore what effect this
has is mimics how a user with poor eyesight or partial vision cannot always see the webpage. Therefore showing how hard navigation can be when it is
not simple for a user.
*/
function blindnessSim() {
  console.log("Blindness simulation is running.");

  document.getElementById("body").addEventListener("mouseover", mouseOver);
  document.getElementById("body").addEventListener("mouseout", mouseOut);

  function mouseOver() {document.getElementById("body").style.visibility = 'hidden';}
  function mouseOut() {document.getElementById("body").style.visibility = 'visible';}
}

//This line of code calls the function, therefore when the page loads the function will load.
promptUserBox();
}
