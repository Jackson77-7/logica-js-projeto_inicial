// aparece pro usuario uma janela de alerta
alert("bom dia, bem vindo ao jogo")

//let é usado pra declarar uma variavel
let numeroSecreto = Math.floor(Math.random() *51)
//parceint para converter numero para inteiro, prompt para caixa do navegador

let numeroTentativas = 0;

//if eu uso para testar uma logica "==" para sinal, "> ou <" maior ou mneor ">="" ou "<="
//else é usado par ao se não, ou seja, quando um teste logico

    while (numeroTentativas <= 3) {
        let numeroEscolhido = parseInt(prompt("digite um numero de 0 a 50"));
        if(numeroSecreto == numeroEscolhido){
            alert(`parabéns você acertou o numero ${numeroSecreto} `)
        }else if(numeroEscolhido > numeroSecreto) {
            alert(`voce digitou ${numeroEscolhido} que é um numero maior que o numero secreto`)
        }else{
            alert(`voce digitou ${numeroEscolhido} que é um numero menor que o numero secreto`)
        }
        numeroTentativas = numeroTentativas +1;
    }