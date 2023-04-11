"use strict";

const btnToevoegen = document.getElementById("toevoegen");

btnToevoegen.onclick = async function(){
    const persoon = {
        first_name: document.getElementById("voornaam").value,
        last_name: document.getElementById("familienaam").value
    };
    const response = await fetch("https://reqres.in/api/users",{
        method:"POST",body:JSON.stringify(persoon)
    }
    )
    const foutmelding = document.getElementById("fout");
    if (response.ok) {
        foutmelding.hidden=true;
        const data = await response.json();
        document.getElementById("nummer").innerText = data.id;
        document.getElementById("toegevoegd").hidden = false;
    }else{
        foutmelding.hidden = false;
    }
    
}

