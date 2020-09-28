let res = document.querySelector('section#resultado')
function calcular() {
    let num1 = document.querySelector('input#txtnum1')
    let num2 = document.querySelector('input#txtnum2')

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    if (n1 > n2) {
        res.innerHTML = `Entre os números ${n1} e ${n2}, o maior número é ${n1}`
    } else if (n2 > n1) {
        res.innerHTML = `Entre os números ${n1} e ${n2}, o maior número é ${n2}`
    } else {
        res.innerHTML = `Os números são iguais`
    }
}