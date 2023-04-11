"use strict";
const melding = document.getElementById("melding");
const alleLinks = document.querySelectorAll("#links a");
fetchJson();
async function fetchJson() {
    const response = await fetch("./geslachten.json");
    if(response.ok){
        const arrAllePersonen = await response.json();
        toonArray(arrAllePersonen,'a');
        let gekozengeslacht;
        for (const a of alleLinks) {
            a.onclick = function(){
                gekozengeslacht = a.dataset.geslacht;
                toonArray(arrAllePersonen,gekozengeslacht);
            }
        }
    }else{
        melding.innerText = 'Lijst van gebruikers kon niet worden opgehaald';
        melding.hidden = false;
    }
}
function toonArray(arrayVanPersonen,geslacht) {
    let teTonenArrayMetPersonen;
    let tabel = document.querySelector("tbody");
    tabel.innerHTML = `
    <tr>
        <th>Voornaam</th>
        <th>Familienaam</th>
        <th>Geslacht</th>
        <th>Foto</th>
    </tr>
    `;
    if (geslacht != 'a') {
       teTonenArrayMetPersonen = arrayVanPersonen.filter(persoon => persoon.geslacht ==  geslacht);
    }else{
        teTonenArrayMetPersonen = arrayVanPersonen;
    }
    for (const persoon of teTonenArrayMetPersonen) {
        tabel.appendChild(document.createElement("tr")).innerHTML = `
        <td>${persoon.voornaam}</td>
        <td>${persoon.familienaam}</td>
        <td><img src="./img/${persoon.geslacht}.png"></img></td>
        <td><img src="./img/${persoon.foto}"></img></td>
        `;
    }
}
