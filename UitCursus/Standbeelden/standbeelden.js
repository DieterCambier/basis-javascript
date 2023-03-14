"use strict";
const afbeelding = document.getElementById("afbeelding");


for(const link of document.querySelectorAll("#standbeelden a")){
    link.onclick = function(){
        afbeelding.src = `./img/${this.dataset.img}.jpg`
        afbeelding.title= this.dataset.title;
    };
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

for(const child of document.querySelector("#standbeelden").children){
    console.log(child);
}
