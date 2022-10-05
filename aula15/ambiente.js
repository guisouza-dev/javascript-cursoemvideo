let num = [5, 8, 9, 2, 3]
num[5] = 7
num.push(6)
console.log(`\nNosso vetor é o ${num}`)
console.log(`Para saber o comprimento da Array é só usar o atributo length que no nosso caso é ${num.length}.`)
console.log(`Para ordenar a Array usamos o método sort(): que vai organizar de forma crescente a Array ${num.sort()}.`)
console.log(`Para mostrá-la sem a formatação padrão com chaves [], usamos as estruturas de repetição.`)
for(let element in num){
    console.log(`A posição ${element} tem o valor ${num[element]}`)
}
console.log(`\nPara buscar valores dentro de Arrays utilizamos o método indexOf(), no caso vamos verificar onde no nosso Array está o valor 2 -> ${num.indexOf(2)}, no nosso caso está na posição 0, que é a primeira posição em JavaScript.`)
console.log(`Caso o valor que estivermos procurando não esteja na Array ele irá retornar -1.\n`)