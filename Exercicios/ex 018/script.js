let pcNum = Math.floor(Math.random() * 100 + 1)
let res = document.getElementById('resultado')
let msg = document.getElementById('msg')

res.innerHTML = `Eu pensei em um número e...<br><br>`

function gerar() {

    let chute = document.getElementById('tentativa')
    let chNum = Number(chute.value)



    if (chNum < pcNum) {
        res.innerHTML += `O número ${chNum} é menor.<br>`
    } else if (chNum > pcNum) {
        res.innerHTML += `O número ${chNum} é maior.<br>`
    } else {
        res.innerHTML += `<br>Você acertou! Eu pensei no número <b>${chNum}</b>`
    }
}