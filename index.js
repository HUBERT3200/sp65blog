async function start() {
    const responese = await fetch("./data.json")
    const data = await responese.json()
    console.log(data)
    createList(data.title)
}

start()

function createList(breedList) {
  document.getElementById("content").innerHTML = `
    <ul>
        ${Object.keys(breedList).map(function (breed) {
          return `<li>${breed}</p1><li>`
        }).join('')}
    </ul>
  `
}



// część submit

const tytul = document.getElementById("tytul");
const tresc = document.getElementById("tresc");


function submitForm() {
    alert("Dodano treść" + '\n' + tytul.value + '\n' + tresc.value);
    
}