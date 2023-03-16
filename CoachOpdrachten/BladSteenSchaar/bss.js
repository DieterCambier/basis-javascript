"use strict";

//Maak array met keuzes gebaseerd op hun data attribuut
const keuzes = document.querySelectorAll("a[data-keuze]");

//Itereer over alle keuzes
for (let keuze = 0; keuze < keuzes.length; keuze++) {
    //Voeg de afbeeldingen toe aan de a elementen
    const img = document.createElement("img");
    img.src = `./img/${keuzes[keuze].dataset.keuze}.png`;
    img.alt = keuzes[keuze].dataset.keuze;
    keuzes[keuze].appendChild(img);
    //Voeg de onclick events toe aan de a elementen
    keuzes[keuze].onclick = function () {
        //Bepaal de spelerskeuze
        const spelersKeuze = keuze;
        //bepaal de computerkeuze en toon de afbeelding
        const computerKeuze = Math.floor(Math.random() * keuzes.length);
        document.getElementById("computerkeuze").src = `./img/${keuzes[computerKeuze].dataset.keuze}.png`
        //Toon Resultaat
        const resultaat = document.getElementById("resultaat");
        if (computerKeuze == spelersKeuze) {
            resultaat.innerText = 'Gelijkspel'
            resultaat.parentElement.style.backgroundColor = "gray";
        } else {
            if ((spelersKeuze == 0 && computerKeuze == 1) ||
                (spelersKeuze == 1 && computerKeuze == 2) ||
                (spelersKeuze == 3 && computerKeuze == 0)) {
                resultaat.innerText = 'De speler wint';
                resultaat.parentElement.style.backgroundColor = "green";
            } else {
                resultaat.innerText = 'De computer wint';
                resultaat.parentElement.style.backgroundColor = "red"
            }
        }
    };
};

