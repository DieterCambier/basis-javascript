"use strict";

vulUlMetLinks();

async function vulUlMetLinks() {
    const ulHyperlinks = document.getElementById("hyperlinks");
    const ulgegevens = document.getElementById("gegevens");
    const apiAlleUsers = await fetch("https://reqres.in/api/users?page=1&per_page=20");
    const objAlleUsers = await apiAlleUsers.json();
    for (const user of objAlleUsers.data) {
        ulHyperlinks.appendChild(document.createElement("li")).innerHTML = `<a href="#" data-userid="${user.id}">${user.first_name} ${user.last_name}</a>`;
        console.log(user);
    }
    for (const li of ulHyperlinks.children) {
        li.firstChild.onclick = function(){
            ulgegevens.innerHTML='';
            const geselecteerdeUser = objAlleUsers.data.filter(user => user.id == this.dataset.userid)[0];
            ulgegevens.appendChild(document.createElement("li")).innerText = `ID: ${geselecteerdeUser.id}`;
            ulgegevens.appendChild(document.createElement("li")).innerText = `Name: ${geselecteerdeUser.first_name} ${geselecteerdeUser.last_name}`;
            ulgegevens.appendChild(document.createElement("li")).innerText = `Email: ${geselecteerdeUser.email}`;
            ulgegevens.appendChild(document.createElement("img")).src = `${geselecteerdeUser.avatar}`; 
        }
    }
}
