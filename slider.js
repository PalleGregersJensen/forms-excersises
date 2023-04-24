"use strict"

const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");
const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");
const colorBox = document.getElementById("colorBox");

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;
  colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  redValue.innerText = red;
  greenValue.innerText = green;
  blueValue.innerText = blue;
}
