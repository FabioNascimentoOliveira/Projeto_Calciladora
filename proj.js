let prompt = require('prompt-sync')();
//console.log("Digite um valor")
//var num = prompt();
//console.log('Você digitou: '+ num);
var resultado;
var num;
var valor1;
var valor2;
console.log(' ')
console.log('*********************Calculadra.JS*********************')
console.log(' ')
console.log('Selecione o número da operação desejada.')
console.log(' ')
console.log('1 - Soma')
console.log('2 - Subtração')
console.log('3 - Multiplicação')
console.log('4 - Divisão')
console.log(' ')
num = prompt('Digite sua opção (1/2/3/4): ')
num = parseInt(num)
var num1 = (num <= 4) && (num > 0)
//console.log(num1)
if (num1 == true) {
    valor1 = prompt('Digite o primeiro número: ')
    valor1 = parseInt(valor1);
    valor2 = prompt('Digite o segundo número: ')
    valor2 = parseInt(valor2);
    //console.log(valor1)
    //console.log(valor2)
    if (num == 1) {
        resultado = valor1 + valor2;
        console.log('O resultado da soma é igual a ' + resultado)
        console.log(' ')
    } else if (num == 2) {
        resultado = valor1 - valor2;
        console.log('O resultado da subtração é igual a ' + resultado)
        console.log(' ')
    } else if (num == 3) {
        resultado = valor1 * valor2;
        console.log('O resultado da multiplicação é igual a ' + resultado)
        console.log(' ')
    } else if (num == 4) {
        resultado = valor1 / valor2;
        console.log('O resultado da divisão é igual a ' + resultado)
        console.log(' ')
    }
    console.log('FIM!')
    console.log(' ')
} else {
    console.log(' ')
    console.log('Opção inválida!')
    console.log(' ')
}