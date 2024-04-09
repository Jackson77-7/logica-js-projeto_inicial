
let listNumeroDigitado =  [1, 2, 3,]

for(let j = 0; j < 5; j++){
    let numeroDigitado = parseInt(prompt("digite um número"));
    listNumeroDigitado.push(numeroDigitado)
    alert (listNumeroDigitado[j])

}
alert('seus numeros digitados são' + listNumeroDigitado.join('- '))