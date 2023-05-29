function situação() {
    var media = Number.parseInt(document.getElementById('media').value)
    var situação = document.getElementById('resultado')
    var resultado = media>=7?'APROVADO':'REPROVADO'
    console.log(resultado)

    situação.innerHTML =`${resultado}`
}