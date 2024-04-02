function iniciar() {
    // aparece pro usuario uma janela de alerta
alert("bom dia, bem vindo ao jogo")

//let é usado pra declarar uma variavel
let numeroDePosições = parseInt(prompt(`quantos numeros você quer aleatorizar`))

//parceint para converter numero para inteiro, prompt para caixa do navegador

function numeroAleatorio(index){

   return Math.floor(Math.random() *index + 1)

}

let numeroSecreto = numeroAleatorio(numeroDePosições)

for(let numeroTentativas = 0; contador++; numeroTentativas--){

    let numeroEscolhido = parseInt(prompt(`digite um numero de 1 a ${numeroDePosições}`));
7
    if(numeroSecreto == numeroEscolhido){
            alert(`parabéns você acertou o numero ${numeroSecreto} `)
            break
        }else if(numeroEscolhido > numeroSecreto) {

            alert(`voce digitou ${numeroEscolhido} que é um numero maior que o numero secreto`)
        }else{
            alert(`voce digitou ${numeroEscolhido} que é um numero menor que o numero secreto`)
        }
        if (numeroTentativas === 3){
            alert(`voce digitou ${contador} para acertar o número secreto`)
        }
}

}