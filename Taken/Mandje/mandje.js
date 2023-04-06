"use strict";

const aBeschikbaar = document.querySelectorAll("#beschikbaar li a");
const spanAantal = document.getElementById("aantal");
const ulMandje = document.getElementById("mandje");

//Vul arrMandje met de items uit de localStorage.
let arrMandje = JSON.parse(localStorage.getItem("localMandje"));
/*
Als het lokale mandje niet bestaat bij het laden van de pagina.
Vul arrMandje met een lege array
*/
if (arrMandje == null) {
    arrMandje = [];
}
//Toon het aantal artikelen van arrMandje in spanAantal bij het laden van de pagina.
spanAantal.innerText = arrMandje.length;
//Toon alle artikelen in arrMandje in ulMandje bij het laden van de pagina.
for (const artikel of arrMandje) {
    ulMandje.appendChild(document.createElement("li")).innerText = artikel;
}

for (const a of aBeschikbaar) {
    //Bij het klikken op een a element.
    a.onclick = function () {
        //Voeg de innerText van het a element toe aan arrMandje.
        arrMandje.push(this.innerText);
        //Sla arrMandje op als localMandje in de localStorage.
        localStorage.setItem("localMandje", JSON.stringify(arrMandje));
        //Toon het aantal items in het mandje in spanAantal
        spanAantal.innerText = arrMandje.length;
        //Voeg het laatst toegevoegde item in arrMandje toe als li element aan ulMandje.
        ulMandje.appendChild(document.createElement("li")).innerText = arrMandje[arrMandje.length-1];
    }
}
