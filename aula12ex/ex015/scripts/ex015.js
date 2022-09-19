function carregar() {
    let agora = new Date()
    let horas = agora.getHours()
    let img = document.getElementById('imagem')
    const cordefundo = document.getElementById('cordefundo')
    document.getElementById('horas').innerHTML = `Agora são ${horas} horas.`
    if(horas >= 0 && horas < 12) {
        cordefundo.style.backgroundColor = '#e2cd9f'
        img.src = 'imagens/manha.png'
    } else if(horas >= 12 && horas < 18) {
        cordefundo.style.backgroundColor = '#b9846f'
        img.src = 'imagens/tarde.png'
    } else {
        cordefundo.style.backgroundColor = '#515154'
        img.src = 'imagens/noite.png'
    }
}

