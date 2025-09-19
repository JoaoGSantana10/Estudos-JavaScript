function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero ="Homem"
            if (idade >=0 && idade < 10){
                //  Criança
                img.setAttribute('src', 'foto-bebe1.webp')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem.webp')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto1.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso.webp')
            }
    } else if (fsex[1].checked) {
        gênero = "Mulher"
        if (idade >=0 && idade < 10) {
            //  Criança
            img.setAttribute('src', 'foto-bebe.webp')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'foto-jovem1.jpg')
        } else if (idade < 50) {
            // Adulta
            img.setAttribute('src', 'foto-adulto.webp')
        } else {
            // Idosa

        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
}