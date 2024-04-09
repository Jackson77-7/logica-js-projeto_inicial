function gerarTabela() {
    let linhas = parseInt(prompt("digite o numero de linhas da sua tabela"))


    let colunas = parseInt(prompt("digite o numero de colunas da sua tabela"))

    let tabela = []

    for (let i = 0; i < linhas; i++) {
        tabela[i] = [];
        for (let j = 0; j < colunas; j++) {
            tabela[i][j] = gerarNumeroAleatorio(100)

        }
    }
    return tabela
}
let tabelaTresPorTres = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
function aleatorizarTabela(tabela) {
    for (let i = 0; i < tabela.length; i++) {
        for (let j = 0; j < tabela[i].length; j++) {
            tabela[i][j] = gerarNumeroAleatorio(100);
        }
    }
    return tabela;
}

function gerarNumeroAleatorio(range) {

    return Math.floor(Math.random() * range + 1);

}
console.table(gerarTabela());