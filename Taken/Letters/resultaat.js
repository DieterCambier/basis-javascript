"use strict";

fetchDetails();

async function fetchDetails(params) {
    const detailsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${sessionStorage.getItem("id")}`)
    if (detailsResponse.ok) {
        const details = await detailsResponse.json();
        console.log(details);
        document.getElementById("spanName").innerHTML = `<b>${details.name}</b>`;
        document.getElementById("spanCity").innerHTML = `<b>${details.address.city}</b>`;
    }
    const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${sessionStorage.getItem("id")}`)
    if (todoResponse.ok) {
        const arrTodo = await todoResponse.json();
        for (const item of arrTodo) {
            if (item.completed) {
                document.getElementById("ulCompleted").appendChild(document.createElement("li")).innerHTML = item.title;
                console.log(item);
            }else{
                document.getElementById("ulUncompleted").appendChild(document.createElement("li")).innerHTML = item.title;
            }
        }
    }
}
