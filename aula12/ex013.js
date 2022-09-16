let agora = new Date()
let horário = agora.getHours()
console.log(`Agora são exatamente ${horário} horas!`)
if(horário < 12 && horário >= 6) {
    console.log("Bom dia!")
} else if(horário >= 12 && horário < 18) {
    console.log("Boa tarde!")
} else if(horário >= 18) {
    console.log("Boa noite!")
} else {
    console.log("Está de madrugada, mas mesmo assim, bom dia, ou se preferir boa noite!")
}