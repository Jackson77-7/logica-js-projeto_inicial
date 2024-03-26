alert("bom dia, bem vindo ao jogo")

let numeroSecreto = 33;
let numeroEscolhido = parseInt(prompt("digite um numero de 1' a 50"));

if(numeroSecreto == numeroEscolhido){
    alert("parabens voce acertou")
    }else if(numeroEscolhido > numeroSecreto){
        alert("este numero é maior do que o numero secreto")
    }else{
        alert("Este numero é menor do que o numero secreto")
    };