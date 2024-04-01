// aparece pro usuario uma janela de alerta
alert("bom dia, bem vindo ao jogo")

//let é usado pra declarar uma variavel
let numeroSecreto = Math.floor(Math.random() *6)
//parceint para converter numero para inteiro, prompt para caixa do navegador

let numeroTentativas = 0;

//if eu uso para testar uma logica "==" para sinal, "> ou <" maior ou mneor ">="" ou "<="
//else é usado par ao se não, ou seja, quando um teste logico

    while (numeroTentativas <= 4) {
        let numeroEscolhido = parseInt(prompt("digite um numero de 0 a 5"));
        if(numeroSecreto == numeroEscolhido){
            alert(`parabéns você acertou o numero ${numeroSecreto} `)
            break
        }else if(numeroEscolhido > numeroSecreto) {
            alert(`voce digitou ${numeroEscolhido} que é um numero maior que o numero secreto`)
        }else{
            alert(`voce digitou ${numeroEscolhido} que é um numero menor que o numero secreto`)
        }
        numeroTentativas = numeroTentativas +1;
        if (numeroTentativas === 5){
            alert(`suas tentativas acabaram`)
        }else if (numeroTentativas <3) {
            alert(`voce ainda tem ${3 - numeroTentativas} tentativas `)
        }else{
            alert(`voce ainda tem ${3 - numeroTentativas} tentativas`)
        }
    }
    let palavraTentativa = numeroTentativas > 1 ? `tentativas` : `tentativas`
    if (numeroTentativas < 3) {
        alert(`voce descobriu o número secreto em ${numeroTentativas} ${palavraTentativa}`)
    }
