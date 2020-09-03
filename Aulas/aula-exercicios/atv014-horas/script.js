function carregar() {
    var horario = document.querySelector('div#horas')
    var img = document.querySelector('img#image')
    var msg = document.querySelector('div#msg')
    var data = new Date()
    var hora = data.getHours()
    horario.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        msg.innerHTML = `Tenha um bom dia`
        img.src = "./imagens/manhã.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        msg.innerHTML = `Tenha uma ótima tarde`
        img.src = "./imagens/tarde.png"
        document.body.style.background = "#fac98e"
    } else {
        // Boa noite
        msg.innerHTML = `Tenha uma excelente noite`
        img.src = "./imagens/noite.png"
        document.body.style.background = "#081b1f"
        document.querySelector('p#rodape').style.color = 'white'
    }
}





