"use strict"

for (let aantalDagen = 1; aantalDagen <=10; aantalDagen++) {
const dateOfToday = new Date();
const tBody= document.getElementById("tablebody");
const tr = tBody.insertRow();
const tdDate = tr.insertCell();
dateOfToday.setDate(dateOfToday.getDate()+aantalDagen);
tdDate.innerText = dateOfToday.toLocaleDateString();
const tdTodo = tr.insertCell();
tdTodo.appendChild(document.createElement("input"));
const tdVerwijderLink = tr.insertCell();
const verwijderLink = document.createElement("a");
verwijderLink.href = "#";
verwijderLink.innerText = "Verwijder"
tdVerwijderLink.appendChild(verwijderLink);
verwijderLink.onclick = function(){
    const parentTr = verwijderLink.parentElement.parentElement;
    parentTr.remove();
    }
}
document.querySelector("tbody input").focus();
