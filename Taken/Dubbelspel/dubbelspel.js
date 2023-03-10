"use strict";

const invoervelden = document.querySelectorAll("#invoer input");
const foutmelding = document.getElementById("foutmelding");

for(const invoerveld of invoervelden){
    invoerveld.onblur = function(){
        foutmelding.style.visibility = this.value == '' ? "visible" : "hidden";
    }
};
