"use strict"

document.getElementById("paswoord").oninput = function(){
    const paswoord = this.value;
    const paswoordFeedback = document.getElementById("paswoordFeedback");
    paswoordFeedback.innerText = paswoord.length >= 6 ? "OK" : "Te kort";
};
document.getElementById("herhaal").onblur = function(){
    const herhaal = this.value;
    document.getElementById("herhaalFeedback").innerText = herhaal === document.getElementById("paswoord").value ? 'OK' : 'Verchilt van wachtwoord';
};
