function contar(){
    let ini = String(document.getElementById('inicio'))
    let fim = String(document.getElementById('fim'))
    let passo = String(document.getElementById('passo'))
    let res =  document.getElementById("res")

    if (ini === "" || fim === "" || passo === ""){
        alert('Error! dados faltando!')
    } else {
        res.innerHTML = 'Contando...'
        let i = +ini
        let p = +passo
        let f = +fim
        if(i > f) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += `👉${c} `
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `👉${c} `
            }
        }
    }
        res.innerHTML += `${ini}`
}
