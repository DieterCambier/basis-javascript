"use strict";

let arrayMetBezoeken = JSON.parse(localStorage.getItem("array"));

if (arrayMetBezoeken == null) {
    arrayMetBezoeken = [new Date().toLocaleString("nl-BE")];
    ulMetBezoeken.innerHTML = `<li>${arrayMetBezoeken[0]}</li>`
}
else {
    if (arrayMetBezoeken.length === 10) {
        arrayMetBezoeken.shift();
    }
    arrayMetBezoeken.push(new Date().toLocaleString("nl-BE"));
    for (const item of arrayMetBezoeken) {
        const liElement = document.createElement("li");
        liElement.innerText = item;
        document.getElementById("bezoeken").appendChild(liElement);
        console.log(item);
    }
}
localStorage.setItem("array", JSON.stringify(arrayMetBezoeken));
