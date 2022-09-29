let fatias = 8
let contador = 0
do {
    fatias--
    contador++
    if(contador > 1) {
        console.log(`Já comi ${contador} fatias.`)
    } else {
        console.log(`Já comi ${contador} fatia.`)
    }
} while(!fatias == 0)
console.log('Acabou a pizza!')

for (let gols = 1; gols < 3; gols++){
    console.log(`Fizemos um gol, agora faltam ${3 - gols} gols para nos classificarmos!`)
}
console.log('Estamos classificados :D')