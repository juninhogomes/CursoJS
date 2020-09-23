function gerar() {
    let num = document.getElementById('number')
    let tab = document.getElementById('list')

    if (num.value.length == 0) {
        alert('Digite um número')
        let aviso = document.createElement('option')
        aviso.text = `Nenhum número digitado, tente novamente`
        aviso.value = `Erro`
        tab.appendChild(aviso)
    } else {

        tab.innerHTML = ``

        let n = Number(num.value)
        let c = 1

        for (c * n; c <= 10; c++) {
            // Criando um option dentro do select
            let item = document.createElement('option')
            item.value = `${n * c}`
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)

            /*  Alternativa para o for ()
                if (num.value.length == 0) {
                    alert('Por favor, digite um número')
                } else {
                    let n = Number(num.value)
                    let c = 1
                    tab.innerHTML = ``
                    while (c <= 10) {
                        // Criando o elemento Option
                        let item = document.createElement('option')
                         item.value = `${n * c}`
                         item.text = `${n} x ${c} = ${n * c}`
                        tab.appendChild(item)
                        c++
                    }
                }
            */
        }
    }
}

function limpar() {
    let tab = document.getElementById('list')
    tab.innerHTML = ``

    if (tab.length == 0) {
        let msg = document.createElement('option')
        msg.value = `msg`
        msg.text = `Digite um valor`
        msg.disabled = true
        tab.appendChild(msg)
    }
}


