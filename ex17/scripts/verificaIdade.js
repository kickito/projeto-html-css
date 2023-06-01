function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoUsuario = Number(document.getElementById('input_ano').value)
    var resultado = document.getElementById('resultado')
    var idade = anoAtual - anoUsuario

    resultado.innerHTML = `<p>Você está com ${idade} anos.</p>`

    var input_radio = document.getElementsByName('radsex')
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(input_radio[0].checked) {
        genero = 'homem'

        if (idade >= 0 && idade < 12){
            img.setAttribute('src', 'imagens/criança homem.jfif')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/homem jovem.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/homem adulto.jpg')
        } else {
            img.setAttribute('src', 'imagens/homem idoso.jpg')
        }

    } else {
        genero = 'Mulher'

        if (idade >= 0 && idade < 12){
            img.setAttribute('src', 'imagens/criança mulher.jfif')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/mulher jovem.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/mulher adulta.jpg')
        } else {
            img.setAttribute('src', 'imagens/mulher idosa.jpg')
        }
    }

    resultado.appendChild(img)
    
}