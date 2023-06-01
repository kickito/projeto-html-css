function fotos() {
    var galeria = document.getElementById(`galeria`)

    galeria.innerHTML = '<p> Isso aqui vocês já sabem fazer. </p>'
    galeria.innerHTML += '<img id="imagem" height="150" src="imagens/chocolate.jpg">'

    var img = document.createElement(`img`)
    img.setAttribute('src','imagens/pastel.jfif')
    img.setAttribute('alt','imagens/coxinha.jfif')
    img.setAttribute('height','150')

    galeria.appendChild(img)
}