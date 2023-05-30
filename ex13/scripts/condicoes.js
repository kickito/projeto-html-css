var date = new Date()
var hora = date.getHours()
var minutos = date.getMinutes()

console.log(`Agora são exatamente ${hora}:${minutos} horas.`)

if (hora >= 5 && hora < 12) {
    console.log(`Bom dia.`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde.`)
} else {
    console.log(`Boa Noite.`)
}