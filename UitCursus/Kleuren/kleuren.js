"use strict";

const achtergrondKnoppen = document.querySelectorAll("button[data-achtergrondkleur]");
const tekstKnoppen = document.querySelectorAll("button[data-tekstkleur");
const resetKnop = document.getElementById("vergeet");
const body = document.querySelector("body");

if (localStorage.getItem("achtergrondKleur") != null) {
    body.style.backgroundColor = localStorage.getItem("achtergrondkleur");
}
if (localStorage.getItem("tekstKleur") != null) {
    body.style.backgroundColor = localStorage.getItem("achtergrondkleur");
}

for (const knop of achtergrondKnoppen) {
    knop.onclick = function () {
        localStorage.setItem("achtergrondKleur", knop.dataset.achtergrondkleur);
        body.style.backgroundColor = localStorage.getItem("achtergrondKleur")
    }
}
for (const knop of tekstKnoppen) {
    knop.onclick = function () {
        localStorage.setItem("tekstKleur", knop.dataset.tekstkleur);
        body.style.color = localStorage.getItem("tekstKleur");
    }
}
resetKnop.onclick = function () {
    localStorage.clear();
    body.style.backgroundColor="";
    body.style.color="";
}
