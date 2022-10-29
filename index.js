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

//let movies = []


document.addEventListener('submit', (e)=>{
    let formularz = {
        id: Date.now(),
        title: (tytul.value + '<br>' + tresc.value)
    }
    e.preventDefault();
    fetch("./data.json").response.json().push(formularz)
    alert("Dodano treść");
    
})