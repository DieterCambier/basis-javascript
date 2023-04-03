"use strict";

const burgers = document.getElementById("burgers");
for (const option of burgers) {
    console.log(option.innerText);
}
burgers.onchange = function(){
    console.log(this.selectedIndex);
    burgers.remove(this.selectedIndex)
}
