"use strict";
const spanMeldingOpties = document.getElementById("meldingOpties");
const divMeldingPersonen = document.getElementById("meldingPersonen");
const btnFilter = document.getElementById("btnFilter");
const selAlleOpties = document.getElementById("options");

initialisatie();
async function initialisatie() {
    selAlleOpties.firstElementChild.selected = true;

    const arrAllePersonen = await initialiseerPersonen();
    const arrAlleOpties = await initialiseerOpties();
    //Als zowel arrAlleOpties als arrAllePersonen konden worden opgehaald, activeer de knop om te filteren.
    btnFilter.disabled = arrAlleOpties.length === 0 || arrAllePersonen.length === 0;
    //Bij het klikken op de knop
    btnFilter.onclick = function () {
        handleClick(arrAllePersonen);
    }
}

function handleClick(arrAllePersonen) {
  //als er een optie werd gekozen in het keuzemenu.
  if (selAlleOpties.checkValidity()) {
      spanMeldingOpties.hidden = true;
      //Voer de functie uit om de waarden te tonen in de tabel.
      toonArray(arrAllePersonen, selAlleOpties.value);
      //Als er geen optie werd gekozen in het keuzemenu.
  } else {
      //Toon een foutmelding.
      spanMeldingOpties.innerText = 'Maak eerst een geldige keuze uit de lijst.';
      spanMeldingOpties.hidden = false;
  }
}

async function initialiseerPersonen() {
    let arrAllePersonen = [];
    //Vul arrAllePersonen met de waarden uit het JSON bestand.
    const responseGeslachten = await fetch("./geslachten.json");
    if (responseGeslachten.ok) {
        //Voer de functie uit die alle personen zal tonen in de tabel.
        arrAllePersonen = await responseGeslachten.json();
        toonArray(arrAllePersonen, "a");
        divMeldingPersonen.hidden = true;
        //Als het JSON bestand niet kan worden opgehaald
    } else {
        //Toon dan een foutmelding
        divMeldingPersonen.innerText = 'Lijst van gebruikers kon niet worden opgehaald.';
        divMeldingPersonen.hidden = false;
    }
    return arrAllePersonen;
}

async function initialiseerOpties() {
    //Vul array arrAlleOpties met de waarden uit het Json bestand.
    let arrAlleOpties = [];
    const responseOpties = await fetch("./opties.json");
    if (responseOpties.ok) {
        arrAlleOpties = await responseOpties.json();
        //Toon alle opties in het keuzemenu
        for (const optie of arrAlleOpties) {
            const optionElement = document.createElement("option");
            optionElement.innerText = optie.tekst;
            optionElement.value = optie.geslacht;
            selAlleOpties.appendChild(optionElement);
        }
        spanMeldingOpties.hidden = true;
        //Als het JSON bestand niet kan worden opgehaald.
    } else {
        //Toon een foutmelding
        spanMeldingOpties.innerText = 'Lijst met opties kon niet worden opgehaald.';
        spanMeldingOpties.hidden = false;
    }
    return arrAlleOpties;
}

//De functie om de geselecteerde waarden te tonen in de tabel.
function toonArray(arrayVanPersonen, geslacht) {
    let teTonenArrayMetPersonen;
    let tabel = document.querySelector("tbody");
    //maak de tabel eerst leeg
    tabel.innerHTML = ``;
    //Als het gekozen geslacht niet 'a' is dan filter je de array op het gekozen geslacht.
    teTonenArrayMetPersonen = geslacht === 'a' ? arrayVanPersonen : arrayVanPersonen.filter(persoon => persoon.geslacht == geslacht);
    //Toon de array.
    for (const persoon of teTonenArrayMetPersonen) {
        tabel.appendChild(document.createElement("tr")).innerHTML = `
        <td>${persoon.voornaam}</td>
        <td>${persoon.familienaam}</td>
        <td><img src="./img/${persoon.geslacht}.png"></img></td>
        <td><img src="./img/${persoon.foto}"></img></td>
        `;
    }
}
