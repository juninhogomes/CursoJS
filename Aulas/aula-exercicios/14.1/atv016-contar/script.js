function contar() {
    let start = document.getElementById('inicio')
    let end = document.getElementById('fim')
    let step = document.getElementById('passo')
    let msg = document.getElementById('mensagem')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        alert('Por favor preencha todos os campos')
    } else if (step.value <= 0) {
        alert('O valor minimo para os passos é "1"')
    } else {
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(step.value)

        if (i < f) {
            // Contagem crescente
            msg.innerHTML = 'Os números são: '
            for (let c = i; c <= f; c += p) {
                msg.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            msg.innerHTML = 'Os números são: '
            for (let c = i; c >= f; c -= p) {
                msg.innerHTML += `${c} \u{1F449} `
            }
        }
        msg.innerHTML += `\u{1F6A9}`
    }
}



