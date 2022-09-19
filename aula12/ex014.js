let agora = new Date()
let Weekday = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
switch (Weekday) {
    case 0:
        console.log("Domingo")
        break // <--Obrigatório!(com exceção do default)
    case 1:
        console.log("Segunda-feira")
        break // <--Obrigatório!(com exceção do default)
    case 2:
        console.log("Terça-feira")
        break // <--Obrigatório!(com exceção do default)
    case 3:
        console.log("Quarta-feira")
        break // <--Obrigatório!(com exceção do default)
    case 4:
        console.log("Quinta-feira")
        break // <--Obrigatório!(com exceção do default)
    case 5:
        console.log("Sexta-feira")
        break // <--Obrigatório!(com exceção do default)
    case 6:
        console.log("Sábado")
        break // <--Obrigatório!(com exceção do default)
    default:
        console.log("ERROR: Dia Inválido!")       
}