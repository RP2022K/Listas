const nevLista = document.querySelector("#nevLista");
const nameElem = document.querySelector("#name");
const addButton = document.querySelector("#addButton");

var nevTomb = ["Pista", "Mari", "Kari", "Joli", "Pali", "Gabi", "Józsi", "Teri"];

nevTomb.forEach((nev) => {
    var li = document.createElement("li");
    li.textContent = nev;
    li.className = 'list-group-item';
    nevLista.appendChild(li);
});

addButton.addEventListener('click', () =>{
    nevTomb.push(nameElem.value);
    //console.log(nevTomb);

    addLiElem(nameElem.value);
    nameElem.value = '';
});

function addLiElem(name){
    var li = document.createElement("li");
    li.textContent = name;
    li.className = 'list-group-item';
    nevLista.appendChild(li);
}