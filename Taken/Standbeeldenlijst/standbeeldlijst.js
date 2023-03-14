"use strict";
const link = document.getElementById("zonderOfMetAfbeeldingen");
const images = document.querySelectorAll("img");

link.onclick = function () {
    if (link.innerText.toLowerCase().includes('zonder')) {
        images.forEach(image => { image.hidden = true });
        link.innerText = 'Met afbeeldingen';
    } else {
        images.forEach(image => { image.hidden = false });
        link.innerText = 'Zonder afbeeldingen';
    };

}

