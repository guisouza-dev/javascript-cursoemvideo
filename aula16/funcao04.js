function calcularFatorial(num){
    let fatorial = 1
    for(let contador = num; contador > 1; contador--){
        fatorial *= contador
    }
    return fatorial
}

console.log(calcularFatorial(5))

//5! = 5*4*3*2*1