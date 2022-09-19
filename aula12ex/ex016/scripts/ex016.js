function verificar() {
    let agora = new Date()
    let ano = agora.getFullYear()
    let fnascimento = document.getElementById('nascimento')
    let nascimento = Number(fnascimento.value) 
    const res = document.getElementById('res')

    if(nascimento < 1920 || nascimento > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('sexo')
        let idade = ano - nascimento
        let gênero = ''
        let fase = ''
        const img = document.createElement("img")
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade <=3) {
                //bebê
                fase = 'bebê'
                img.setAttribute('src', 'imagens/bebe-m.png')
            }

            else if (idade > 3 && idade <= 12) {
                //criança
                fase = 'criança'
                img.setAttribute('src', 'imagens/crianca-m.png')
            }

            else if (idade > 12 && idade < 20) {
                //adolescente
                fase = 'adolescente'
                img.setAttribute('src', 'imagens/adolescente-m.png')
            }

            else if (idade >= 20 && idade < 60) {
                //adulto
                fase = 'adulto'
                img.setAttribute('src', 'imagens/adulto-m.png')
            }

            else if (idade >= 60) {
                //idoso
                fase = 'idoso'
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }

        if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade <=3) {
                //bebê
                fase = 'bebê'
                img.setAttribute('src', 'imagens/bebe-f.png')
            }

            else if (idade > 3 && idade <= 12) {
                //criança
                fase = 'criança'
                img.setAttribute('src', 'imagens/crianca-f.png')
            }

            else if (idade > 12 && idade < 20) {
                //adolescente
                fase = 'adolescente'
                img.setAttribute('src', 'imagens/adolescente-f.png')
            }

            else if (idade >= 20 && idade < 60) {
                //adulto
                fase = 'adulta'
                img.setAttribute('src', 'imagens/adulta-f.png')
            }
            
            else if (idade >= 60) {
                //idoso
                fase = 'idosa'
                img.setAttribute('src', 'imagens/idosa-f.png')
            }
        }

        res.innerHTML = `Detectamos  um(a) ${gênero} ${fase} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}