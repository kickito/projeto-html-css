var idade = 19

if (idade < 16) {
    console.log(`Idade: ${idade} - Você não pode votar.`)
} else if (idade < 18 || idade > 70) {
    console.log(`Idade: ${idade} - Voto Opcional.`)
} else {
    console.log(`Idade: ${idade} - voto Obrigatório.`)
}