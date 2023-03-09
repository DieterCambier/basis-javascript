"use strict";
const afbeelding = document.getElementById("afbeelding");
const standbeeldenLijst = document.getElementById("standbeelden");

for(const link of standbeeldenLijst.getElementsByTagName("a")){
    link.onclick = function(){afbeelding.src = `./img/${this.id}.jpg`};
}

document.getElementById("isHetWeekend").onclick = isHetWeekend;

function isHetWeekend() {
    const dagVanDeWeek = new Date().getDay();
    const spanFeedback = document.getElementById("weekend");
    if (dagVanDeWeek === 6 || dagVanDeWeek === 0) {
        spanFeedback.innerText = "Het is Weekend";
    } else {
        spanFeedback.innerText = "Het is geen Weekend";
    }
}

