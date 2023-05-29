var area = document.getElementById('item-1')

function clique() {
    area.innerHTML = 'Você clicou aqui'
    area.style.backgroundColor = 'red'
}

function entrar() {
    area.innerHTML = 'Você está com o mouse dentro da div'
}

function sair() {
    area.innerHTML = 'Você tirou o mouse de dentro da div'
}