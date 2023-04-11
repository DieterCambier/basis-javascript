"use strict";


fetchUsers();

async function fetchUsers() {
    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const arrUsers = await usersResponse.json();
    if (usersResponse.ok) {
        voegUsersToeAanUl(arrUsers);
        
    }else{
        console.log('No response');
    }
}

function voegUsersToeAanUl(arrayMetUsers) {
    //Toon users.name in Ul als a elementen
    const ulUsers = document.getElementById("ulUsers");
    for (const user of arrayMetUsers) {
        ulUsers.appendChild(document.createElement("li")).innerHTML = `<a href="#" data-id = ${user.id}>${user.name}</a>`
    }
    //Voeg clickevents toe aan de a elementen in de ulUsers
    const alleLinks = document.querySelectorAll("#ulUsers li a");
    for (const link of alleLinks) {
        link.onclick = function () {
            document.getElementById("spanUserName").innerText = this.innerText;
            document.getElementById("secAlbums").hidden = false;
            fetchEnToonAlbums(this.dataset.id);
        }
    }
}
async function fetchEnToonAlbums(userId) {
    const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    if (albumsResponse.ok) {
        const arrAlbums = await albumsResponse.json();
        document.getElementById("ulAlbums").innerHTML = '';
        for (const album of arrAlbums) {
            document.getElementById("ulAlbums").appendChild(document.createElement("li")).innerText = album.title;
        }
    }
}
