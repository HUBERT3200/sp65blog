async function start() {
    const responese = await fetch("https://www.schoolblog65.ml/data.json")
    const data = await responese.json()
    console.log(data)
    createList(data.title)
}

start()

function createList(breedList) {
  document.getElementById("content").innerHTML = `
        ${Object.keys(breedList).map(function (breed) {
          return `<p1>${breed}</p1>`
        }).join('')}
  `
}