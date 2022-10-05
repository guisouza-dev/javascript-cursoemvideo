//RECURSIVIDADE
function calcularFatorial(num){
    if(num == 1){
        return 1
    } else {
        return num * calcularFatorial((num-1))
    }
}
console.log(calcularFatorial(5))


/*
5! == 5 * 4!
num! == num * (num-1)!
1! = 1
*/