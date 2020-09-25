let contador = 0
let res = document.querySelector("p#res")

function contar() {

    contador++
    res.innerHTML = `<mark>${contador}</mark> cliques`
}

function limpar() {
    contador = 0
    res.innerHTML = `<mark>${contador}</mark> cliques`
}