"use strict"

let date = new Date();

let begroeting = document.getElementById("begroeting");

if (date.getHours() < 12) {
    begroeting.innerText = 'Goede morgen!';
}else{
    if (date.getHours() > 12 && date.getHours() < 18) {
        begroeting.innerText = 'Goede middag!';
    }else{
        begroeting.innerText = 'Goede avond!';
    }
}
