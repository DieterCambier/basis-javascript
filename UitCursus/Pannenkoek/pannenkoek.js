"use-strict";

document.querySelectorAll("#ingrediënten, #werkwijze").forEach(element => {
    element.onclick = function(){
        element.classList.toggle("opvallend")
    };
});

document.querySelectorAll("a[data-teVerbergenId]").forEach(element => {
    element.onclick = function(){
        const teVerbergenId = element.dataset.teverbergenid;
        if (element.innerHTML.toLowerCase().includes('verberg')) {
            element.innerHTML = `Toon ${teVerbergenId}`
            document.getElementById(`${teVerbergenId}`).hidden=true
        }else{
            element.innerHTML = `Verberg ${teVerbergenId}`
            document.getElementById(`${teVerbergenId}`).hidden=false
        }
    }
});
