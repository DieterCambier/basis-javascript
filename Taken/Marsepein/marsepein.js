"use strict";

const ingredientenEnWerkwijzes = document.getElementsByTagName("li");

for(const li of ingredientenEnWerkwijzes){
    li.onclick = function(){
        verwijderOpmaakAnderElementen(li);
        li.classList.add("opvallend");
    }
}
function verwijderOpmaakAnderElementen(li) {
    for (const child of li.parentElement.children){
        child.classList.remove("opvallend");
    }
}   
