"use strict";
const btnToonPrijs = document.getElementById("toonPrijs");
const spnPrijs = document.getElementById("prijs");
const selectBurgers = document.getElementById("burgers");

selectBurgers.onchange = function(){
    btnToonPrijs.disabled = false;
}
btnToonPrijs.onclick = function(){
    const gekozenBurger = selectBurgers.options[selectBurgers.selectedIndex];
    spnPrijs.innerText = `${gekozenBurger.dataset.prijs}€`; 
}
