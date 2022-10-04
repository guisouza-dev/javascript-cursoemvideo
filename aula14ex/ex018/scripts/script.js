function tabuada(){
    let txtnum = document.querySelector("input#txtn")
    let tab = document.querySelector("select#seltab")

    if(txtnum.length === 0){
        alert("Não reconheço o número :/")
    } else {
        let num = Number(txtnum.value)
        tab.innerHTML = ''
        for(let counter = 1; counter <= 10; counter++){
            let item = document.createElement('option')
            item.text = `${num} X ${counter} = ${num*counter}`
            item.value = `tab${counter}`
            tab.appendChild(item)
        }
    }
}