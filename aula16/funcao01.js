console.log("\n-=-=-=-=-=-= Par ou Ímpar? -=-=-=-=-=-=\n")
function par_ou_ímpar(valor){
    if(valor%2){
        return `${valor} é ímpar\n`
    } else {
        return `${valor} é par\n`
    }
}
console.log(par_ou_ímpar(8))