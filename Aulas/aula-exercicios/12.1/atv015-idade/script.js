function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //  Criar uma TAG HTML com JS.
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // fsex se refere a um formulário de múltipla escolha.
        // fsex[n] é referente a cada label do formulário.
        if (fsex[0].checked) {
            genero = 'Masculino'

            if (idade <= 4) {
                // Bebe
                img.setAttribute('src', './images/babyboy.png')
            } else if (idade <= 12) {
                // Criança
                img.setAttribute('src', './images/kidboy.png')
            } else if (idade <= 22) {
                // Jovem
                img.setAttribute('src', './images/youngboy.png')
            } else if (idade <= 53) {
                // Adulto
                img.setAttribute('src', './images/man.png')
            } else {
                // Idoso
                img.setAttribute('src', './images/oldman.png')
            }
        }

        else if (fsex[1].checked) {
            genero = 'Feminino'

            if (idade <= 4) {
                // Bebe
                img.setAttribute('src', './images/babygirl.png')
            } else if (idade <= 12) {
                // Criança
                img.setAttribute('src', './images/kidgirl.png')
            } else if (idade <= 22) {
                // Jovem
                img.setAttribute('src', './images/younggirl.png')
            } else if (idade <= 53) {
                // Adulto
                img.setAttribute('src', './images/woman.png')
            } else {
                // Idoso
                img.setAttribute('src', './images/oldwoman.png')
            }
        }
    }

    res.style.textAlign = "center"
    res.innerHTML = `Idade ${idade} anos e sexo ${genero}`
    res.appendChild(img).style.marginTop = "1em";
}





