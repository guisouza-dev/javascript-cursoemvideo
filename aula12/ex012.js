let idade = 15
if(idade < 16) {
    console.log(`Você tem ${idade} anos, portanto, não vota.`)
} else if(idade < 18) {
        console.log(`Você já pode votar, mas seu voto é opcional.`)
    } else if(idade >= 67){
        console.log(`Você ja chegou aos ${idade} anos, portanto, seu voto volta a ser opcional.`)
} else {
    console.log(`Você tem ${idade} anos, seu voto é obrigatório.`)
}

