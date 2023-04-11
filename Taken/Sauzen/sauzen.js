"use strict";
console.clear();

leesSauzen();

//Haal de JSON op en geef een foutmelding als dit niet lukt
async function leesSauzen() {
    const response = await fetch("http://127.0.0.1:5501/Taken/Sauzen//sauzen.json");
    const arrSauzen = await response.json();
    if (!response.ok) {
        console.log('Probleem met ophalen JSON');
    } else {
        console.log('response ok');
        sauzen(arrSauzen);
    }
}


function sauzen(arrayMetSauzen) {
    //Verberg de foutmelding
    const foutmelding = document.getElementById("foutmelding");
    foutmelding.style.visibility = "hidden";
    const randomWoord = arrayMetSauzen[Math.floor(Math.random() * arrayMetSauzen.length)];
    console.log(randomWoord);
    const arrayMetPuntjes = [];

    //vul array met symbolen;
    for (const letter of randomWoord) {
        arrayMetPuntjes.push("_")
    }
    //Toon de Array in HTML document
    toonArrayInDocument(arrayMetPuntjes, document.getElementById("spanAantalLetters"));
    let aantalpogingen = 0;

    //Voeg onclick event toe aan de knop
    document.getElementById("btnRaden").onclick = function () {
        //Als het invoerveld meer of minder dan 1 letter bevat
        const ingevoerdeLetter = document.getElementById("inpLetter").value;
        if (ingevoerdeLetter.length != 1) {
            //Toon foutmelding
            foutmelding.innerText = 'Invoer moet 1 letter zijn';
            foutmelding.style.visibility = "visible";
        } else {
            //verberg de foutmelding 
            foutmelding.style.visibility = "hidden";
            //Als de letter ook in het randomwoord voorkomt:
            if (randomWoord.includes(ingevoerdeLetter)) {
                //Controleer dan op welke posities de letter voorkomt
                for (let i = 0; i < randomWoord.length; i++) {
                    if (ingevoerdeLetter == randomWoord[i]) {
                        //en vervang het teken in de ArrayMetPuntjes door de ingevoerde letter
                        arrayMetPuntjes[i] = ingevoerdeLetter;
                        toonArrayInDocument(arrayMetPuntjes, document.getElementById("spanAantalLetters"));
                    }
                }
            } else {
                aantalpogingen++;
                if (aantalpogingen <= 10) {
                    document.getElementById("afbeelding").src = `./img/${aantalpogingen}.png`
                    console.log("poging: ", aantalpogingen);

                } else {
                    foutmelding.innerText = `Verloren!! U hebt 10 foute pogingen gedaan. De saus was - ${randomWoord}`;
                    foutmelding.style.visibility = "visible"
                    document.getElementById("btnRaden").innerText = 'Opnieuw proberen';
                }
            }
        }
        console.log(arrayMetPuntjes);
    }
}
function toonArrayInDocument(arrayMetPuntjes, id) {
    let woord = "";
    for (const letter of arrayMetPuntjes) {
        woord += ` ${letter} `;
    }
    id.innerText = woord;
}
