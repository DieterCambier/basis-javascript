"use strict";
const btnZoek = document.getElementById("btnZoek");

btnZoek.onclick = function () {
    const teZoekenId = document.getElementById("inpNummer").value;
    leesUser(teZoekenId);
}


async function leesUser(id) {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    if (response.status != 200 || id == '') {
        document.getElementById("nietGevonden").hidden = false;
    } else {
        const user = await response.json();
        document.getElementById("nietGevonden").hidden = true;
        document.getElementById("nummer").innerText = user.data.id;
        document.getElementById("voornaam").innerText = user.data.first_name;
        document.getElementById("familienaam").innerText = user.data.last_name;
        document.getElementById("emailAdres").innerText = user.data.email;
        document.getElementById("avatar").src = user.data.avatar;
    }
}

