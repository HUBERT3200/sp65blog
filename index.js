async function start() {
    const responese = await fetch("https://www.schoolblog65.ml/data.json")
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