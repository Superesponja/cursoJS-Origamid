// Existem 7 tipos de dados no JS:

/**/
var nome = "Renan"; // String
var idade = 35; //Number
var possuiFaculdade = true; //Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() //Symbol
var novoObjeto = {} // Object

//console.log(typeof novoObjeto);


/* SOBRE STRINGS....
- As Strings somadas, são concatenadas.

        
        console.log(nome+sobrenome);

- Os números escritos entre aspas ou aspas duplas são considerados strings.
- Ao se selecionar um delimitador para a string (aspas simples ou duplas), é possível usar o outro como texto dentro do texto delimitado;
- Além disso, se eu usar a barra invertida (/) antes de um caractere especial, ele é passado como string.
*/

/* TEMPLATE STRING (JS-ES6)
Antes do ES6, para se a declaração de strings era longa:
var = gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols;
Então, no ES6, surgiu a sintaxe Template string, para nos ajudar:
var frase2 = ´Romário fez ${gols} gols´; (basta usar '´' o acento agudo como delimitador e passar a variável entre chaves, iniciada com um cifrão)
 */

//***************EXERCÍCIOS************

// Declare uma variável contendo uma string
var estringue = "eu sou uma string";
console.log(estringue);
// Declare uma variável contendo um número dentro de uma string
var estringueComNumero = "sou uma string e possuo o número 86";
console.log(estringueComNumero);
// Declare uma variável com a sua idade
var idade_ = "35";
console.log(idade_);
// Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var nome = "Renan ";
var sobrenome = "Rodrigues Santana";
var nomeCompleto = nome+sobrenome;
console.log(nome);
console.log(sobrenome);
console.log(nomeCompleto);
// Coloque a seguinte frase em uma variável: It's time
var itistaime = "It's time";
console.log(itistaime);
// Verifique o tipo da variável que contém o seu nome
console.log("A variável 'nome' é do tipo: "+ typeof nome);