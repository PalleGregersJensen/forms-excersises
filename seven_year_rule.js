"use strict"

console.log("Js kører");

window.addEventListener("load", initApp);

function initApp() {
    document.querySelector("#submit_btn").addEventListener("click", myAgeDividedByTwoAndAddedSeven);    
}

function myAgeDividedByTwoAndAddedSeven(event) {
    event.preventDefault();
    console.log("myAge-function")

    let myAge = document.querySelector("#myAge").value;
    let ageYoungWoman = document.querySelector("#age_young_woman").value;

    // ----Turn myAge to numnber----
    // myAge * 1;

    let tooYoung = (myAge/2) + 7;
    
    if (tooYoung > ageYoungWoman) {
        document.querySelector("#output").textContent = "Too young";
    }
    else {
        document.querySelector("#output").textContent = "It is ok";
    }
    console.log(tooYoung);
    console.log(ageYoungWoman);

}