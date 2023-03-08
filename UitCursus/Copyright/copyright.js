
let datum = new Date();

const vdabHyperlink = document.getElementById("vdab").innerText;
console.log(vdabHyperlink);

const jaarSpan = document.getElementById("jaar");
jaarSpan.innerText = datum.getFullYear();
