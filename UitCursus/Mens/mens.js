"use strict";

const btnToevoegen = document.getElementById("toevoegen");
const inpVoornaam = document.getElementById("voornaam");
const inpKinderen = document.getElementById("kinderen");
const inpGeslacht = document.getElementById("geslacht")

verbergAlleFoutmeldingen();

btnToevoegen.onclick = function () {
    verbergAlleFoutmeldingen();
    const spanVoornaamFout = document.getElementById("voornaamFout");
    if (!inpVoornaam.checkValidity()) {
        spanVoornaamFout.hidden = false;
    }
    const spanKinderenFout = document.getElementById("kinderenFout");
    if (!inpKinderen.checkValidity()) {
        spanKinderenFout.hidden = false;
    }
    const spanGeslachtFout = document.getElementById("geslachtFout");
    if (!inpGeslacht.checkValidity()) {
        spanGeslachtFout.hidden=false;
    }
}
function verbergAlleFoutmeldingen() {
    const alleFoutmeldingen = document.getElementsByClassName("fout")
    for (const foutmelding of alleFoutmeldingen) {
        foutmelding.hidden = true;
    }

}
