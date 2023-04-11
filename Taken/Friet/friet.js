"use strict";

const ulDeuren = document.getElementById("ulDeuren");
let winDeur = Math.floor(Math.random()*7)+1;
console.log(winDeur);

for (let deurNummer = 1; deurNummer <= 7; deurNummer++) {
    ulDeuren.appendChild(document.createElement("li")).innerHTML=`<a href="#"><img src="./img/deurtoe.png" alt="" data-id="${deurNummer}"></a>`
}

let aantalbeurten = 0;
for (const li of ulDeuren.children) {
    li.firstChild.onclick = function(){
        if (this.firstChild.dataset.id == winDeur) {
            this.firstChild.src="./img/gevonden.png";
        }else{
            this.firstChild.src="./img/deuropen.png";
        }
        aantalbeurten++;
        console.log(aantalbeurten);
    };
    
}

