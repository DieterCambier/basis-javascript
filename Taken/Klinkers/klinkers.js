const klinkers = 'aeiou';

document.getElementById('ingevoerdeTekst').oninput = function(){
    let aantalKLinkers = 0;
    console.clear();
    for(let letter of this.value){
        if (klinkers.includes(letter)){
            aantalKLinkers++
        }
        document.getElementById("feedbackAantalKlinkers").innerText = aantalKLinkers;
        
    }
};

