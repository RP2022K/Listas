const nevLista = document.querySelector("#nevLista");
var nevTomb = ["Pista", "Mari", "Kari", "Joli", "Pali", "Gabi", "Józsi", "Teri"];

nevTomb.forEach((nev) => {
    var li = document.createElement("li");
    li.textContent = nev;
    li.className = 'list-group-item';
    nevLista.appendChild(li);
});



