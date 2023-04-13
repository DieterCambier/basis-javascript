"use strict";
const melding = document.getElementById("melding");
const selGroentenLijst = document.getElementById("selGroentenLijst");
const inpAantal = document.getElementById("inpAantal");
const btnToevoegen = document.getElementById("btnToevoegen");
const tbody = document.querySelector("tbody");
const arrMandje = [];

inpAantal.value = '';
fetchJSON();

async function fetchJSON() {
    const response = await fetch("./groenten.json");
    if (response.ok) {
        melding.hidden = true;
        const arrKeuzes = await response.json();
        vulKeuzemenu(arrKeuzes);
        maakKnop(arrKeuzes);
        selGroentenLijst.disabled = false;
    } else {
        melding.innerHTML = "Data kon niet worden opgehaald."
        selGroentenLijst.disabled = true;
        melding.hidden = false;
    }
}
function vulKeuzemenu(arrayMetKeuzes) {
    for (const keuze of arrayMetKeuzes) {
        const optionElement = document.createElement("option");
        optionElement.innerText = `${keuze.naam} (${keuze.prijs}${keuze.eenheid})`;
        optionElement.value = `${keuze.naam}`
        selGroentenLijst.appendChild(optionElement);
    }
}
function maakKnop(arrayMetKeuzes) {
    btnToevoegen.onclick = function () {
        if (!selGroentenLijst.checkValidity()) {
            melding.innerText = 'Kies eerst een groente!';
            melding.hidden = false;
        } else {
            if (!inpAantal.checkValidity()) {
                melding.innerText = 'Vul een geldig aantal in!';
                melding.hidden = false;
            } else {
                melding.innerText = '';
                melding.hidden = true;
                voegToeAanMandje(arrayMetKeuzes, selGroentenLijst.value, Number(inpAantal.value), arrMandje);
            }
        }
    }
}
function voegToeAanMandje(arrayMetKeuzes, gekozenProduct, aantal, arrayMandje) {
    const gekozenGroente = arrayMetKeuzes.find(keuze => keuze.naam == gekozenProduct);
    const komtAlVoor = arrayMandje.find(groenteUitMandje => groenteUitMandje.gekozenGroente == gekozenGroente);
    if (!komtAlVoor) {
        arrayMandje.push({ gekozenGroente, aantal });
    } else {
        komtAlVoor.aantal += aantal;
    }
    toonMandje(arrayMandje)
}
function toonMandje(arrayVanMandje) {
    for (const item of arrayVanMandje) {
        const trElement = document.querySelector(`[data-id="${arrayVanMandje.indexOf(item)}"]`);
        const trElementInnerHTML =`
        <td>${item.gekozenGroente.naam}</td>
        <td>${item.aantal}</td>
        <td>${item.gekozenGroente.prijs}</td>
        <td>${(item.aantal * Number(item.gekozenGroente.prijs)).toFixed(2)}</td>
        <td><a href="#" data-id="${arrayVanMandje.indexOf(item)}"><img src="./vuilbak.png" alt="Vuilbak"></a></td>
      `;
        if (!trElement) {
            const trElementVoorNieuw = document.createElement("tr");
            trElementVoorNieuw.dataset.id = `${arrayVanMandje.indexOf(item)}`;
            trElementVoorNieuw.innerHTML = trElementInnerHTML;
            tbody.appendChild(trElementVoorNieuw);
        } else {
            trElement.innerHTML = trElementInnerHTML;
        }
    }
    const alleTrElementen = document.querySelectorAll("tbody tr");
    for (const trElement of alleTrElementen) {
        const indexInArray = arrayVanMandje.findIndex((item) => `${arrayVanMandje.indexOf(item)}` === trElement.dataset.id);
        if (indexInArray === -1) {
            tbody.removeChild(trElement);
        }
    }
    const totaalprijs = arrayVanMandje.reduce((total, item) => total + (item.gekozenGroente.prijs * item.aantal), 0);
    document.getElementById("totaalprijs").innerHTML = totaalprijs.toFixed(2);
    maakVuilbakjes(arrayVanMandje);
}
function maakVuilbakjes(arrayVanMandje) {
    const alleVuilbakjes = document.querySelectorAll("tbody tr td a")
    for (const vuilbak of alleVuilbakjes) {
        vuilbak.onclick = function () {
            arrayVanMandje.splice(vuilbak.dataset.id, 1)
            toonMandje(arrayVanMandje);
        }
    }
}
