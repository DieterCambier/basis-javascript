"use strict";

const alleKnoppen = document.getElementsByTagName("div");

for (const knop of alleKnoppen) {
    knop.onclick = function(){
        console.log(knop.innerText);
    }
    
}


