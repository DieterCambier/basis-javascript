"use strict";
const inpGetal1 = document.getElementById("getal1");
const inpGetal2 = document.getElementById("getal2");
const btnDelen = document.getElementById("delen");


btnDelen.onclick = function () {
    verbergFoutmeldingen();
    let isValid = true;
    console.log(inpGetal1.checkValidity());
    if (!inpGetal1.checkValidity()) {
        document.getElementById("getal1Fout").hidden = false;
        isValid = false;
    }
    if (!inpGetal2.checkValidity() || inpGetal2.value <= 0) {
        document.getElementById("getal2Fout").hidden = false;
        isValid = false;
    }
    if (isValid) {
        document.getElementById("resultaat").innerText = `${inpGetal1.value/inpGetal2.value}`;
    }
}



function verbergFoutmeldingen() {
    for (const foutmelding of document.getElementsByClassName("fout")) {
        foutmelding.hidden = true;
    }
}
