
function somar (js, ph){

    let soma = js + ph;
    alert(`a soma dos valores ${js} é ${ph}`)
    alert(`o valor é ${soma}`)
}

let primeiroNumero = parseInt(prompt(`digite o primeiro numero`))
let segundoNumero = parseInt(prompt(`digite o segundo numero`))

somar (primeiroNumero, segundoNumero)
