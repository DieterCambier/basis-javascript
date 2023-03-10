"use strict";

const alleNavLinks = document.querySelectorAll("header nav ul li a");

for(const link of alleNavLinks){
    link.onclick = function(){
        for(const link of alleNavLinks){
            link.classList.remove("active")
        }
        link.classList.add("active");
        document.querySelector("main section h2").innerText = link.innerText;
        document.querySelector("#hoofdstad").innerText = link.dataset.hoofdstad;
        document.querySelector("#oppervlakte").innerText = link.dataset.oppervlakte;
    }
}
