/*SELEÇÃO POR ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');
//console.log(animaisSection);

//ELEÇÃO POR CLASSE OU TAG
// getElementsByClassName retorna uma lista com todos os elementos que contenham a classe;
// getElementsByTagName retorna uma lista com todos os elementos que contenham a classe;
const gridSection = document.getElementsByClassName('grid-section');
//console.log(gridSection[1]);

//SELETOR GERAL ÚNICO

//querySelectior: retorna o primeiro elemento que combinar com o seu seletor CSS:

const primeiraLI = document.querySelector('li');
//console.log(primeiraLI);

const linkInterno = document.querySelector('[href^="#"]');
// no comando acima, o argumento entre parênteses será um celetor css. Além dele, podemos passar também um atributo  do seletor, entre colchetes, filtrando ainda mais a opção. Por alguma razão, no caso de links, não precisamos passar o seletor css (a sintaxe completa seria "('a[href^="#"]')"). No exemplo document.querySelector('a[href^="#"]'):
//  'a' é o seletor css;
// [href] é o atributo;
// ^= indica que queremos os elementos que "comecem com ..."
// # é o valor do atributo. neste caso, os links internos do nosso site.
//console.log(linkInterno);

//querySelector: retorna TODOS os elementos que combinarem com o seu seletor CSS:

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

- o getElementByClassName retornará uma HTML Collection;
- o getSelectorAll retornará uma NodeList; esta segunda é mais completa e possui mais métodos que a anterior. 
Em contrapartida, o HTML Collection é ao vivo, ou seja, no momento em que houver alguma alteração nos itens da páginas elegíveis para seleção, os mesmos serão akteradods também na HTMLCollection; no caso da NodeList, os itens selecionados no em determinado momento são estáticos, não sendo alterados após o snapshot de sua seleção.
Ambos os elementos (HTMLColecction e Nodelist) são 'ArrysLike', ou seja, tem algumas propriedades de um array, mas não são um array propriamente dito; para converterlos em arrays, nós podemos usar o seguinte método: Array.from(), onde o argumento passado será o arraylike cujo queeremos converter em array.
const arrayVerdadeiro = Array.from(arrayLike);
*/
