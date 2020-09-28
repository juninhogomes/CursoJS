function calcular() {
    let data = new Date()
    let nasc = document.querySelector('input#txtnum')
    let res = document.querySelector('section#resultado')
    let ano = data.getFullYear();

    let a = Number(nasc.value)
    let idade = ano - a

    if (nasc.value.length != 4) {
        alert('Digite o ano por completo')
    } else if (a > ano) {
        res.innerHTML = `O ano de ${a} ainda não chegou \u{1F937}`
    } else {
        res.innerHTML = `Nascidos em ${a}, em ${ano} tem ${idade} anos`
    }
}