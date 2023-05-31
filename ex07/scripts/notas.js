function media() {
    var nome = prompt(`Qual é o nome do aluno?`)
    var nota1 = Number.parseInt(prompt(`Qual foi a primeira nota do aluno ${nome}`))
    var nota2 = Number.parseInt(prompt(`Qual foi a primeira nota do aluno ${nome}`))

    var media = (nota1 + nota2) / 2
    var situação = ``

    if (media >=7){
        situação = 'Aprovado'      
    } else if (media < 5.5) {
        situação = 'Reprovado'
    } else {
        situação = 'Recuperação'
    }

    resutaldo.innerHTML = ``
    resutaldo.innerHTML +=
    resutaldo.innerHTML +=
    resutaldo.innerHTML +=

}