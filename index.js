const title = document.getElementById('tytul')
const tresc = document.getElementById('tresc')
const form = document.getElementById('form')
const errorDiv = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (title.value === '' || title.value == null) {
        messages.push('Musisz nadać tytuł')
    }
    e.preventDefault()
})
