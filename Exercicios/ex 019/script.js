function iniciar() {
    let numb1 = document.querySelector('input#n1')
    let numb2 = document.querySelector('input#n2')
    let res = document.querySelector('section#msg')

    let n1 = Number(numb1.value)
    let n2 = Number(numb2.value)

    var escolha = Number(prompt(`Valores informados ${n1} e ${n2}. \nO quer deseja fazer com esses valores? \n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))

    res.innerHTML = `<h3>Resultado<h3>`
    switch (escolha) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
        case 1:
            res.innerHTML += `<p><strong>Soma</strong> | ${n1} + ${n2} = ${n1+n2}</p>`
            break //O break serve para encerrar o operação. Sem isso ele vai continuar executando todos os outros case
        case 2:
            res.innerHTML += `<p><strong>Subtração</strong> | ${n1} - ${n2} = ${n1-n2} </p>`
            break
        case 3:
            res.innerHTML += `<p><strong>Multiplicação</strong> | ${n1} * ${n2} = ${n1*n2}</p>`
            break
        case 4:
            res.innerHTML += `<p><strong>Divisão</strong> | ${n1} / ${n2} = ${(n1/n2).toLocaleString('pt-BR')}</p>` // O toLocaleString transforma o resultado para um padrão brasileiro.
            break
        default:
            res.innerHTML += `<strong>OPÇÃO INVÁLIDA!</strong> | Você não digitou uma operação possível de ser realizada.`
    }
}