"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("JS kører");
      document.querySelector("#submit").addEventListener("click", calculateBMI);;
}

function calculateBMI(event) {
    event.preventDefault();
    console.log("Udregnes BMI?")
    
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value; 

    let bmiCalculation = weight/(height*height);

    console.log(bmiCalculation);

    if (bmiCalculation > 30) {
      document.querySelector("#output").textContent =
        `Dit BMI er: ${bmiCalculation.toFixed(2)} Dit BMI indikerer svær overvægt`;
    } else if (bmiCalculation < 30 && bmiCalculation >= 25) {
      document.querySelector(
        "#output"
      ).textContent = `Dit BMI er: ${bmiCalculation.toFixed(
        2
      )} Dit BMI indikerer overvægt`;
    } else if (bmiCalculation < 25 && bmiCalculation >= 20) {
      document.querySelector(
        "#output"
      ).textContent = `Dit BMI er: ${bmiCalculation.toFixed(
        2
      )} Dit BMI indikerer normalvægt`;
    } else if (bmiCalculation < 18.5) {
      document.querySelector(
        "#output"
      ).textContent = `Dit BMI er: ${bmiCalculation.toFixed(
        2
      )} Dit BMI indikerer undervægt`;
    }
    console.log("Udskrives BMI ikke?")
}