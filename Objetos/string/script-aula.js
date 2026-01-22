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


//* REPEAT 
// repete a string que invocou o método, o número de vezes passado como argumento
fruta.repeat(4); // "BananaBananaBananaBanana"

//*REPLACE
//Substitu o termo um pelo termo 2 em uma string; str.replace(gexp|substr, newstr|function) o primeiro argumento pode ser uma substrign ou uma regular Expression (veremos isso mais tarde) e o segundo, uma outra string ou uma função. Caso o primeiro argumento seja uma subtring, ele substituirá somente a primeira ocorrência da mesma; para substituir todas, será necessário recorrer às 'regular expressions'
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.');
console.log(preco);

//*SPLIT
//'Quebra' a string, de acordo com o delimitador passado como argumento, retornando um array com as substrings separadas, cada uma em uma posição. Caso o argumento seja uma string vazia (""), o retorno será um array com a string original quebrada caractere por caractere.
listaItens = listaItens.split(', ');
console.log(listaItens);

//* TOLOWERCASE e TOUPPERCASE
// Usados para converter a string nela mesma, com todos os caracteres maiúsculos ou minúsculos.
fruta.toLocaleLowerCase(); // 'banana'
fruta.toLocaleUpperCase(); // 'BANANA'

//* TRIM, TRIMSTART TRIMEND
//Remove espaços em branco no começo ou no final de uma string
const valor = ' R$ 23.00   ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); //R$ 23.00   ';
valor.trimEnd();//' R$ 23.00'