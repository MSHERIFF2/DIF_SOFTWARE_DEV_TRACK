const resetButton = document.getElementById("resetButton");
const rgbValue = document.getElementById("rgbValue");
const colorBoxe = document.querySelectorAll("#colorBoxes .squareBox");
const result = document.getElementById("result");
let colors = [];
let selectedColor;
// Function to generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
// Function to generate an array of random colors
function generateColors(num) {
    const colorArray = [];
    for (let i = 0; i < num; i++) {
        colorArray.push(generateRandomColor());
    }
    return colorArray;
}
// Function to set the colors in the color boxes
function setColors() {
    colors = generateColors(colorBoxe.length);
    selectedColor = colors[Math.floor(Math.random() * colors.length)];
    rgbValue.textContent = selectedColor;
    colorBoxe.forEach((box, index) => {
        box.style.backgroundColor = colors[index];
        box.addEventListener("click", checkColor);
    });
}
// Function to check if the clicked color matches the selected color
function checkColor(event) {
    const clickedColor = event.target.style.backgroundColor;
    if (clickedColor === selectedColor) {
        result.textContent ="Correct! You selected the right color.";
        resetButton.style.display = "block";
    } else {
       result.textContent = "Wrong! Try again.";
        event.target.style.backgroundColor = "#f0f0f0"; // Change to a neutral color
    }
}
// Function to reset the game
function resetGame() {
    resetButton.style.display = "none";
    setColors();
}
// Initial setup
setColors();
// Event listener for the reset button
resetButton.addEventListener("click", resetGame);
// Hide the reset button initially
resetButton.style.display = "none";
