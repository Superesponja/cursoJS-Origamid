/* NÚMEROS
- A declaração de número no JS se dá pelo não uso de aspas.
- Os decimais se dão através do uso de ponto, como separador das casas decimais.
- a notação 2e3 indicaria 2 x 10³, ou seja, 2000.
- a notação 2e-3 indicaria 2 x 10-³, ou seja, 0.002

var idade = 35;
var pi = 3.14;
var exp = 2e10;
*/

/*OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150 
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100/2; // 50
var expoente = 2**4; // 16
var modulo = 14%5; // 4
*/

/*OPERADORES ARITMÉTICOS EM STRINGS:
+ : ele soma as strings:
    var soma = "10" + "14"; // 1014.
- : ele tentará subtrair as strings:
    var subtracao = "10" - "14"; // -4.
x : ele tentará multiplicar as strings:
    var multi = "10" x "14"; // 140.
/ : ele tentará dividir a string:
    var divisao = "10" / 2; // 5.

- Caso a operação matemática não seja possível, por não se tratar de um número 'reconhecível', o JS retornará NaN (not a number):
var divisaoFail = 'comprei 10' / 2; // NaN
- a função isNum pode ser usada para verificar se uma variável é do tipo Número ou não.
 */

/* OPERADORES UNÁRIOS
++ : Adiciona 1 ao valor;
-- : Subtrai 1 ao valor;
+ ou - : tenta transformar o valor seguinte em um número (positivo ou negativo).
*/

// Qual o resultado da seguinte expressão?
//var total = 10 + 5 * 2 / 2 + 20; R: 35

// Crie duas expressões que retornem NaN
var texto = "texto"*3; console.log(texto)
console.log(+'joao')

// Somar a string '200' com o número 50 e retornar 250
var numero250 = +'200' + 50;
console.log(numero250);
// Incremente o número 5 e retorne o seu valor incrementado
var numero5 = 5;
numero5++;
console.log(numero5);