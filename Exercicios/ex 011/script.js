let contador = 0
let res = document.querySelector("section#resultado")
let msg = document.querySelector("section#msg")

function calcular() {
    let nome = document.querySelector("input#txtnome").value
    let nota1 = document.querySelector("input#txtn1")
    let nota2 = document.querySelector("input#txtn2")

    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)

    let soma = n1 + n2
    let media = soma / 2

    if (nome.length == 0) {
        alert('Por favor, preencha o nome')
    } else {
        contador++
        if (contador <= 1) {
            res.innerHTML = `
        <table>
            <tr>
                <th>Nome</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Média Final</th>
            <tr>
            <tr>
                <td>${nome}</td>
                <td>${n1}</td>
                <td>${n2}</td>
                <td>${media}</td>
            </tr>
    </table >`
            if (media >= 6) {
                msg.innerHTML = `Parabéns, resultados positivos até agora`
            } else {
                msg.innerHTML = `Aconselho você a tentar melhorar um pouco mais`
            }
        }
    }
}

function limpar() {
    if (contador >= 1) {
        res.innerHTML = ``
        msg.innerHTML = ``
        contador = 0
    }
}