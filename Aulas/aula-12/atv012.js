var agora = new Date()
var hora = agora.getHours
console.log(`Agora são ${hora} horas`);

if (hora < 6) {
    console.log('Tenha uma boa madrugada')
} else if (hora >= 6 && hora < 12) {
    console.log('Tenha um bom dia')
} else if (hora <= 18) {
    console.log('Tenha uma boa tarde')
} else {
    console.log('Tenha uma boa noite')
}

//  Alternativa

// if (hora >= 06 && hora < 12) {
//     console.log('Tenha um bom dia!')
// } else if (hora >= 12 && hora <= 18) {
//     console.log('Tenha uma boa tarde!')
// } else if (hora > 18 && hora <= 23) {
//     console.log('Tenha uma boa noite!')
// } else {
//     console.log('Tenha uma boa madrugada')
// }