let res = document.querySelector('section#resultado')
res.innerHTML = ``

function gerar() {
    let num = Math.floor(Math.random() * 100 + 1)

    res.innerHTML += `<span style='line-height:1.8em'> Número gerado foi ${num}<br></span`
}

function limpar() {
    res.innerHTML = ``
}