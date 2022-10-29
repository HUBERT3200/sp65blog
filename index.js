async function start() {
    const responese = await fetch("https://www.schoolblog65.ml/data.json")
    const data = await responese.json()
    console.log(data)
    createList(data.title)
}

start()

function createBreedList(breedList) {
  document.getElementById("content").innerHTML = `
  <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function (breed) {
          return `<option>${breed}</option>`
        }).join('')}
      </select>
  `
}