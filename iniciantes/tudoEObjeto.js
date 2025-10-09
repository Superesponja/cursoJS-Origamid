/* Em JS, praticamente tudo o que vemos é um objeto:
 var nome = "Renan";
console.log(nome.length); // tamanho da string
console.log(nome.charAt(1)); // retorna o caractere da posição digitada
console.log(nome.replace("nan","nato")); // altera os caracteres digitados, pelos segundo argumento da função.
Isso acontece, pois os objetos strings herdam propriedades e métoodos da classe string, através do seu construtor.
 */



/** O mesmo acontece com números: 
var numero = 13.3;
console.log(typeof(numero.toString()));
console.log(numero.toFixed());

Se utilizarmos o typeOf em variáveis primitivas, veremos que as mesmas não são do tipo objeto; nos exemplos acima, elas seriam do tipo string e Number, respectivamente.
Então como é possível utilizar métodos e acessar propriedades de variáveis primitivas? O JS envolve o valor da variável em um objeto (ação denominada 'coerção'), tendo assim, acesso a suas propriedades e métodos.
*/



/** Funções também possuem métodos e propriedaes:
 function areaQuadrado(lado){
  return area*area;
}

console.log(areaQuadrado.toString()); //converte a função em string
console.log(areaQuadrado.length); // retorna o número de argumentos da função
 */



/* MANIPULANDO ELEMENTOS DO DOM
O js considera a página como um objeto também: o Document. Para acessar seus elementos, utilizamos o seu método 'querySelector', utilizando o seletor css como argumento:
var btn = document.querySelector('.btn');
*/

/*
O conceito de Objetos revolucionou a programação web, tornando simples a manipulação dos elementos da página. A possibilidade de uso de métodos e atributos em elementos da web é denominada WEB API.
*/

// **********************EXERÍCIOS *************************

// nomeie 3 propriedades ou métodos de strings
var umaString = "length: retorna o tamnha, em caracteres, da string";
var outraString = "charAt: retorna o caracter posicionado no índice passado como argumento";
var maisOutraString = "concat: soma strings";


// nomeie 5 propriedades ou métodos de elementos do DOM
/*var dom_1 = document.querySelector();
var dom_2 = document.cookie();
var dom_3 = document.URL;
var dom_5 = document.characterSet;
var dom_4 = document.contentType;*/

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
var btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
  console.log("copiei o texto: 'esse texto aqui' para o seu ctrl+c; use o 'ctrl+v' para ver se deu tudo certo");
  navigator.clipboard.writeText("esse texto aqui");
});
