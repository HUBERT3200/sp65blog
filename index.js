const title = document.getElementById('tytul')
const tresc = document.getElementById('tresc')
const form = document.getElementById('form')
const errorDiv = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (title.value === '' || title.value == null) {
        messages.push('Musisz nadać tytuł')
    }
    
    if (title.value.length >= 20) {
        messages.push('Nadaj krutszy tytuł')
    }
    
    
    
    
    if (messages.length > 0) {
        e.preventDefault()
        errorDiv.innerText = messages.join(', ')
    }
    e.preventDefault()
    setTimeout(function(){
        console.log("Wyczyszczono errorDiv")
        errorDiv.innerText = ' '
    }, 3000);
})
