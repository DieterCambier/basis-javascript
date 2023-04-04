"use strict";
const links = document.getElementById("links");
const rechts = document.getElementById("rechts");

const allesNaarRechts = document.getElementById("allesNaarRechts");
const eenNaarRechts = document.getElementById("eenNaarRechts");
const eenNaarLinks = document.getElementById("eenNaarLinks");
const allesNaarLinks = document.getElementById("allesNaarLinks");

pasKnoppenAan();

allesNaarRechts.onclick = function(){
    verplaatsAlleElementen(links,rechts);
}
allesNaarLinks.onclick = function () {
    verplaatsAlleElementen(rechts,links);
}
eenNaarRechts.onclick = function(){
    const optionElement = document.createElement("option");
    optionElement.innerText = links.options[links.selectedIndex].innerText;
    rechts.appendChild(optionElement);
    links.options.remove(links.selectedIndex);
    pasKnoppenAan();
}
eenNaarLinks.onclick = function(){
    const optionElement = document.createElement("option");
    optionElement.innerText = rechts.options[rechts.selectedIndex].innerText;
    links.appendChild(optionElement);
    rechts.options.remove(rechts.selectedIndex);
    pasKnoppenAan();
}

function verplaatsAlleElementen(van,naar) {
    for (const item of van) {
        const optionElement = document.createElement("option");
        optionElement.innerText = item.innerText;
        naar.appendChild(optionElement);
    }
    van.innerHTML = '';
    pasKnoppenAan();
}


function pasKnoppenAan() {
    if (rechts.children.length == 0) {
        allesNaarLinks.disabled = true;
        eenNaarLinks.disabled = true;
    }else{
        allesNaarLinks.disabled = false;
        eenNaarLinks.disabled = false;
    }

    if (links.children.length == 0) {
        allesNaarRechts.disabled = true;
        eenNaarRechts.disabled = true;
    }else{
        allesNaarRechts.disabled = false;
        eenNaarRechts.disabled = false;
    }
}
