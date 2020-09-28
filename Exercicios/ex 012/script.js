function calcular() {
    let num = document.querySelector('input#txtnum')
    let res = document.querySelector('section#resultado')

    let n = Number(num.value)

    if (n % 2 == 0) {
        res.innerHTML = `O número ${n} é <mark><u>Par</u></mark>`
    } else {
        res.innerHTML = `O número ${n} é <mark><u>Ímpar</u></mark>`
    }
}