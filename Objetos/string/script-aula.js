//O Objeto String é o construtor das strings em JS. Sendo assim, as strings criadas recebem todos os métodos e propriedades deste objeto.
// as strings podem ser declaradas de duas formas:
const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

// Alguns dos métodos e propriedades deste objeto são:
//* LENGTH
// retorna o tamnho da string:
comida.length; //5
//costumeiramente, utilizamos ele para acessar a última letra de uma string da seguinte forma:
const ultimaLetra = comida[comida.length-1]; // 'a'

//* CHARAT
//usado para seleção de cada caractere da string, como um vetor (de 0 a length-1):
//console.log(comida.charAt(3)); // z

//* CONCAT
//usado para somar strings. podemos usar o método ou o sinal de "+"
const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';
const fraseFinal1 = frase + linguagem + '!';
const fraseFinal2 = frase.concat(linguagem, '!');

//* INCLUDES
// Procura uma string dentro da string, retornando um boolean com a resposta.
const frutas = 'Banana, Maçã, Morango';
const fruta = 'Banana'
frutas.includes(fruta) //true
frutas.includes(fruta,2) //false - podemos passar também a posição dentro ta string a partir da qual

//*STARTSWITH E ENDSWITH
// RETORNAM UM BOOLEAN SE A STRING COMEÇA COM (STARTSWITH) OU TERMINA COM (ENDSWITH) A STRING PASSADA COMO ARGUMENTO DA FUNÇÃO

console.log(frutas.startsWith('Ba')); //true
console.log(frutas.startsWith('ba')); //false
console.log(frutas.endsWith('ngo')); //true
console.log(frutas.endsWith('Ango')); //false

//SLICE
//Função que corta a string de acordo com os argumentos de começo e fim passados na função, caso hajam 2 argumentos. Caso seja passado somente um argumento, esse será o número de caracteres passados na função. Números negativos indicam os caracteres do final em direção ao começo. Este método NÃO altera a string original; ele só retorna uma cópia substring da string onde o método foi invocado. O SUBSTRING Funciona de forma muito semelhante, com a exceção de que não funciona bem como os valores negativos, então não farei uma seção própria para ele.

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

//INDEXOF e LASTINDEXOF
// Retorna a posição do caractere ou string passada como argumento. Ele retornará a posição do primeiro resultado positivo encontrato, despresando os demais.
transacao1.indexOf('De'); // 0
transacao1.indexOf('de'); // 9
transacao1.indexOf('e'); // 1
transacao1.lastIndexOf('e'); // 18

//PADSTART E PADEND 
// Aumentam, se possível, o valor da string com o argumento passado ('tamanho em caracteres final da string', caractere que preencherá as novas posições). PadStart preencherá a partir do começo da string, 'empurrando o conteúdo original; PadEnd, depois da string Caso não haja um segundo argumento, as posições serão preenchidas com espaços em branco
fruta.padStart(9);//    "   Banana"
fruta.padEnd(9);//      "Banana   "
fruta.padStart(9,".")// "...Banana"
fruta.padEnd(9,"as");// "Bananaasa"