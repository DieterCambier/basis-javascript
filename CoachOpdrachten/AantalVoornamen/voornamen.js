"use strict";
const button = document.querySelector("button");


button.onclick = function(){
    const lijst = document.querySelector("ul");
    const ingevoerdeNaam = document.getElementById('ingevoerdeNaam');
    const foutmelding = document.getElementById("foutmelding");
    //Als de ingevoerdeNaam leeg is 
    if (ingevoerdeNaam.value == '') {
        //toon de foutmelding en focus terug op het invoerveld
        foutmelding.style.visibility = "visible";
        ingevoerdeNaam.focus();
    }
    //Als de ingevoerdeNaam niet leeg is
    else{
        //Maak een controlevariabele en zet deze op false
        let komtVoor = false;
        //Verberg de foutmelding
        foutmelding.style.visibility = "hidden";
        //Controleer of de ingevoerdeNaam al voorkomt in de lijst
        for (const item of lijst.children) {
            //Als de ingevoerdeNaam voorkomt in de lijst
            if (item.firstChild.innerHTML.toLowerCase() == ingevoerdeNaam.value.toLowerCase()) {
                //verhoog het aantal in de laatste span met 1 en zet de controlevariabele komtVoor op true
                item.lastChild.innerHTML = Number(item.lastChild.innerHTML) + 1;
                komtVoor = true;
                //Stop de iteratie
                break;
            }
        }
        //Als de ingevoerdeNaam nog niet voorkomt in de lijst (controlevariabele komtVoor is false)
        if (komtVoor == false) {
            //Maak een nieuw li element
            const lijstItem = document.createElement("li");
            //Voeg de ingevoerdeNaam toe aan het Li element met als aantal 1 (laatste span)
            lijstItem.innerHTML =`<span>${ingevoerdeNaam.value}</span>: <span>1</span>`;
            //Voeg het nieuwe li element toe aan de lijst
            lijst.appendChild(lijstItem);
        }
    }
    //Maak het invoerveld terug leeg en geef het de focus
    ingevoerdeNaam.value = '';
    ingevoerdeNaam.focus();
}
