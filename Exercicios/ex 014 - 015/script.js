function informacao() {
    let semana = [
        'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
    let meses = ['dezembro', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro']

    let data = new Date();
    let hoje = semana[data.getDay()];
    let dia = data.getDate();
    let mes = meses[data.getMonth()];
    let ano = data.getFullYear();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let res = document.querySelector('section#resultado')

    res.innerHTML = `Informações no momento do clique:<br><br>Hoje é ${hoje}, ${dia} de ${mes} de ${ano}, às ${hora} hora ${minutos} minutos e ${segundos} segundos.`
}