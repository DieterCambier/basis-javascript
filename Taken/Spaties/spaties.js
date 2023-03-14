const ingevoerdeTekst = document.getElementById("ingevoerdeTekst");

document.getElementById("btnToonSpaties").disabled = true;

ingevoerdeTekst.oninput = function() {
    document.getElementById("btnToonSpaties").disabled = this.value == '' ? true : false;
    
}
document.getElementById("btnToonSpaties").onclick = function () {
    console.clear();
    let aantalSpaties = 0;
    let teControlerenTekst = ingevoerdeTekst.value;
    for (letter = 0; letter < teControlerenTekst.length; letter++) {
        if (teControlerenTekst[letter] == ' ') {
            aantalSpaties = aantalSpaties + 1
        }
    }
    document.getElementById("spanAantalSpaties").innerText = aantalSpaties;
}


