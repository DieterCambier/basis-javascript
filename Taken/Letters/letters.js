"use strict";

fetchAllUsers();

async function fetchAllUsers() {
    const response =  await fetch(" https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
        console.log("fetch all users = ok");
        toonGebruikers(await response.json());
        
    }else{
        console.log("fetch all users = Nok");
    }
}

function toonGebruikers(arrayMetUsers){
    document.getElementById("btnZoeken").onclick = function(){
        document.getElementById("ulUsers").innerHTML = '';
        for (const user of arrayMetUsers.filter(user => user.name.toLocaleLowerCase().includes(document.getElementById("ingevoerd").value.toLocaleLowerCase()))) {
            document.getElementById("ulUsers").appendChild(document.createElement("li")).innerHTML = `<a href="./resultaat.html" data-id="${user.id}">${user.name}</a>`;  
        }
        for (const link of document.querySelectorAll("#ulUsers li a")) {
            link.onclick = function () {
                sessionStorage.setItem("id",`${this.dataset.id}`);
            }
        }
    }   
}
