function count(){
    let start = document.querySelector("input#inicio").value
    let end = document.querySelector("input#fim").value
    const step= document.querySelector("input#passo").value
    let res = document.querySelector("div#res")

    if(start.length === 0 || end.length === 0 || step.length === 0){
        alert("Reveja os dados e corrija-os")
    } else {
        res.innerHTML = 'Contando...'
        let startNumber = parseInt(start)
        let endNumber = parseInt(end)
        let stepNumber = parseInt(step)
        if (stepNumber === 0){
            alert("Não consigo identificar o passo, portanto, vou considerá-lo como 1")
            stepNumber = 1
        }
        if (startNumber < endNumber){
            for(let count = startNumber; count <= endNumber; count += stepNumber){
                res.innerHTML += `  👉${count}`
            }
            } else if (startNumber > endNumber){
            for(let count = startNumber; count >= endNumber; count -= stepNumber){
                res.innerHTML += ` 👉${count}`
            }
        }
        res.innerHTML += ` 🏁`
    }
}