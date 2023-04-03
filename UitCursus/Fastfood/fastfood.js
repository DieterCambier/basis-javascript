"use strict";

const aantalHamburgers = document.getElementById("hamburgers").length;
const aantalFrieten = document.getElementsByName("friet").length;
const aantalDesserts = document.getElementsByName("dessert").length;
const frieten = document.getElementsByName("friet");
const desserts = document.getElementsByName("dessert");

document.getElementById("aantalHamburgers").innerText = aantalHamburgers;
document.getElementById("aantalFrieten").innerText = aantalFrieten;
document.getElementById("aantalDesserts").innerText = aantalDesserts;

document.getElementById("hamburgers").onchange = function(){
    const gekozenNummer = this.value;
    const gekozenNaam = this.options[this.selectedIndex].innerText;
    document.getElementById("keuzeBurger").innerText = `${gekozenNummer} - ${gekozenNaam}`
    
}


for (const friet of frieten) {
    friet.onchange= function(){
        const gekozenNummer = this.value;
        const gekozenNaam = this.parentElement.innerText;
        document.getElementById("keuzeFriet").innerText = `${gekozenNummer} - ${gekozenNaam}`;
    };
}
for (const dessert of desserts) {
    dessert.onchange = function(){
        let keuzes = '';
        for (const geselecteerdDessert of desserts) {
            if (geselecteerdDessert.checked) {
                keuzes += `${geselecteerdDessert.value} - ${geselecteerdDessert.parentElement.innerText},`
            }
        }
        document.getElementById("keuzeDessert").innerText= keuzes.slice(0,-1);
    }
}
