"use strict";
const date = new Date().getFullYear();
const textNode = document.createTextNode(` ${date}`);
const spanCopyright = document.createElement("span");
spanCopyright.innerText = `Copyright ©️`;
spanCopyright.appendChild(textNode);
const body = document.querySelector("body");
body.appendChild(spanCopyright);

document.getElementById("toevoegen").onclick = function(){
const liElement = document.createElement("li");
const ingevoerdeVoornaam = document.createTextNode(`${document.getElementById("voornaam").value}`);
liElement.appendChild(ingevoerdeVoornaam);
document.getElementById("voornamen").appendChild(liElement);
document.getElementById("voornaam").value = '';
document.getElementById("voornaam").focus();
};
