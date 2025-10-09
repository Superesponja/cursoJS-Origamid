/* OPERADORES DE ATRIBUIÇÃO

Os operadoes de atribuição são caracteres (ou combinação de caracteres) utilizados para atribuir valores a variáveis, tornando o código menor;
var x = 5; // igual: atribui o valor à variável;
var y = 10;
x += y //soma ao valor de x, y;
x -= y //subtrai ao valor de x, y;
x /= y //divide o valor de x por y;
x *= y //multiplica o valor de x por y;
x **= y //eleva o valor de x à y;
x %= y //retorna o módulo (resto) da divisão de x por y;
*/

/* OPERADOR TERNÁRIO (? e :)
São uma abreviação dos operadores 'if' e 'else'
var idade = 19;
var podeDirigir = (idade<=18) ? 'Pode dirigir' : 'Não pode dirigir';
O operador se torna útil, caso a abribuiçõoes não se tratem de valores booleanos; neste caso, vale mais a pena utilizar a operação booleana normal, que já retornará true ou false: var podeDirigir = (idade<=18)

************ Os operadores If e else, se retornarão somente uma linha, podem ser escritos sem as chaves {}
*/


//*******************************EXERCÍCIOS!*************************************

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll +=500; // 1500

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
// darCredito = (possuiCarro && possuiCasa) ? true : false; Assim também funcionaria.