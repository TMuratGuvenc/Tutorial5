
var numCircles = 6;

var colours = [];


var pickedColor;

let defaultColour = "#582c99";

var circles;
var colourToGuess;
var resultMessage;
var banner;
var resetButton;

init();


function init() {
    colours = []; 
    reset();
}


document.getElementById("restart").addEventListener("click", reset);


function clickCircle(event) {
    const clickedColor = event.target.style.backgroundColor;

    if (clickedColor === pickedColor) {
        resultMessage.textContent = "YOU WIN!";
        resetButton.textContent = "Play Again";
        changeColors(pickedColor);
    } else {
        event.target.style.backgroundColor = defaultColour;
        resultMessage.textContent = "TRY AGAIN!";
    }
}


function reset() {
    genRandomColours(); 
    pickedColor = chooseColor(); 
    colourToGuess.textContent = `RGB(${pickedColor.r}, ${pickedColor.g}, ${pickedColor.b})`;
    
    
    banner.style.backgroundColor = defaultColour;
    resultMessage.textContent = "";
    resetButton.textContent = "Restart";

    
    circles.forEach((circle, index) => {
        circle.style.backgroundColor = `rgb(${colours[index].r}, ${colours[index].g}, ${colours[index].b})`;
        circle.addEventListener("click", clickCircle);
    });
}


function makeColour() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}


function genRandomColours() {
    for (let i = 0; i < numCircles; i++) {
        colours.push(makeColour()); 
    }
}


function chooseColor() {
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex]; 
}



