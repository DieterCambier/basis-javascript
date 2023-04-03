"use strict";
const byTagNameOption = document.getElementsByTagName("option");
const byQuerySelectorAll = document.querySelectorAll("option");

const aantalHamburgers = document.getElementById("aantalHamburgers");
const aantalFrieten = document.getElementById("aantalFrieten");
const aantalDesserts = document.getElementById("aantalDesserts");

aantalHamburgers.innerText = document.getElementById("hamburgers").length;
aantalFrieten.innerText = document.getElementsByName("friet").length;
aantalDesserts.innerText = document.getElementsByName("dessert").length

document.getElementById("hamburgers").onchange = function(){
    document.getElementById("keuzeBurger").innerText = `${this.value} - ${this.options[this.selectedIndex].innerText}`;
}

for (const gekozenFriet of document.getElementsByName("friet")) {
    gekozenFriet.onchange = function(){
        document.getElementById("keuzeFriet").innerText = `${gekozenFriet.value} - ${gekozenFriet.parentElement.innerText} friet`;
    }
}
for (const gekozenDessert of document.getElementsByName("dessert")) {
    gekozenDessert.onchange = function(){
        let dessertKeuzes = ""
        for (const keuzeMogelijkheid of document.getElementsByName("dessert")) {
            if (keuzeMogelijkheid.checked == true) {
                dessertKeuzes += `${keuzeMogelijkheid.value} - ${keuzeMogelijkheid.parentElement.innerText}<br> ` 
            }
        }
    document.getElementById("keuzeDessert").innerHTML = dessertKeuzes;
    }
}
