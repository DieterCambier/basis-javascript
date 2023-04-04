"use strict";
const date = new Date();


if (localStorage.getItem("date") == null) {
    localStorage.setItem("date",date.toLocaleString());
    document.getElementById("laatsteBezoek").innerText = `Laatste bezoek: ${localStorage.getItem("date")}`;
}else{
    document.getElementById("laatsteBezoek").innerText = `Laatste bezoek: ${localStorage.getItem("date")}`;
    localStorage.setItem("date",date.toLocaleString());
}
if (localStorage.getItem("aantal") == null) {
    localStorage.setItem("aantal",1)
}else{
    localStorage.setItem("aantal",Number(localStorage.getItem("aantal"))+1)
}
document.getElementById("aantalBezoeken").innerText = `Aantal bezoeken: ${localStorage.getItem("aantal")}`;





