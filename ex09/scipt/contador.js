var cliques = 0

function contar() {
    cliques ++
    resultado.innerHTML =`<p>O contador está com ${cliques} cliques.</p>`
}

function zerar() {
    cliques = 0
    resultado.innerHTML =`<p>O contador está com ${cliques} cliques.</p>`
}