"use strict"

document.getElementById("toevoegen").onclick = function(){
const tableBody = document.querySelector("tbody");
const tr = tableBody.insertRow();
const voornaamTd = tr.insertCell();
const familienaamTd = tr.insertCell();
const voornaamInput = document.getElementById("voornaam");
const familienaamInput = document.getElementById("familienaam");
voornaamTd.innerText = voornaamInput.value;
familienaamTd.innerText = familienaamInput.value;
console.log(tableBody);
voornaamInput.value = '';
familienaamInput.value = '';
}
