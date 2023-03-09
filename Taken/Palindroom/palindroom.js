
document.getElementById("ingevoerdeTekst").onblur = function(){
    const ingevoerdeTekst = this.value;
    let palindroom = true;
    
    for (letter = 0; letter < ingevoerdeTekst.length / 2 && palindroom === true; letter++) {
        if (ingevoerdeTekst[ingevoerdeTekst.length - 1 - letter] != ingevoerdeTekst[letter]) {
            palindroom = false;
        }
    };
    document.getElementById("feedbackPalindroom").innerText = palindroom ? 'Dit is een palindroom' : 'dit is geen palindroom';;
}




