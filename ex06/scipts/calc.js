var resultado_soma = document.getElementById('resultado-soma')
var resultado_sub = document.getElementById('resultado-subtração ')

function somar () {
    var som1 = Number.parseInt(document.getElementById('som1').value)
    var som2 = Number.parseInt(document.getElementById('som2').value)
    resultado_som.innerHTML = `A soma entre ${som1} e ${som2} é: ${som1+som2}`
}

function subtrair() {
    var sub1 = Number.parseInt(document.getElementById('sub1').value)
    var sub2 = Number.parseInt(document.getElementById('sub2').value)
    resultado_sub.innerHTML = `A subtração entre ${sub1} e ${sub2} é: ${sub1+sub2}`
}