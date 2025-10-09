//************** ESCOPO ********************
/* Uma variável declarada dentro de uma função, ó pode ser acessada e utilizada dentro da função:
function mostrarCarro{
var carro = 'Fusca';
console.log(carro)
}
mostrarCarro(); //funciona!
console.log(carro); // erro

Por outro lado, uma variável declarada fora da função, pode ser acessada tanto dentro, como fora da função. No exemplo passado, se a variável estivesse declarada antes da função, ambas os comandos funcionariam.

O escopo visa evitar conflitos de nomes. Assim, é possível se utilizar vários arquivos JS (até mesmo importados de outras fontes), sem se preocupar se no outro arquivo uma variável já foi declarada com o mesmo nome e dará conflito com o seu código principal.

Variáveis criadas sem as palavras reservadas 'const' 'let' ou 'var' são variáveis globais, acessáveis em todo o código (e isso é um erro TERRÍVEL!).
Para evitar isso, utilizamos a expressão (com aspas simples mesmo) "'use strict'" no ínicio do código. Ela previne esse tipo de problema, limitando a forma de escrita do código.

//Escopo de FUNÇÃO
O Escopo em JS funciona de forma hierárquica: variáveis declaradas no escopo 'pai' são acessáveis nos escopos filhos, mas o contrário não ocorre.
// Escopo de BLOCO
Variáveis declaradas dentro de {} em estruturas 'if else', 'loop', etc, só são acessáveis dentro destas estruturas. Essa condição não é aplicada para a palavra reservada 'var'; ela vaza o bloco, sendo visível para todo o escopo de função no qual ela está inserida; Por esta razão, neste tipo de estruturas (if else, while, etc), utiliza-se as palavras reservadas 'const' e 'let' na declaração de variáveis. Ela não é visível fora do bloco.

{
var mes = dezembro;
let mes2 = janeiro;
const mes3 = fevereiro;
} // o próprio abrir e fechar de chaves, já cria um contexto de bloco isolado do resto do código.
console.log(mes); // funciona, porém não deveria.
console.log(mes2); // não funciona, como deveria ser.
console.log(mes3); // não funciona, como deveria ser.

Considerando isso tudo, a partir de agora, utilizaremos 'const' e 'let' a partir de agora.

//DIFERENÇA ENTRE CONST E LET
Const:
 - Impede redeclaração;
 - Respeita contexto de bloco;
 - Se const for um objeto (talvez uma função também), é possivel alterar seus atributos  e métodos, porém não o objeto em si (muda-lo para string, por exemplo)
 {
 const mes = 'dezembro';
 mes = 'janeiro'; //erro!! o valor de 'mes' não pode ser alterado (redeclarado)!
 const semana; // erro!! não é possível dedlarar 'const' sem valor.
}
- Utilizado para valores que não mudam. Será a palavra reservada mais usada no contexto do curso.

Let:
- Impede redeclaração;
- Respetia contexto de bloco;
- Permite posterior alteração do valor;
let ano = 2025;
ano++; // funciona!!
let ano = 2027; // ERRO! não permite redeclaração.



"Const" deve ser usada com padrão, pois via de regra (no contexto do JS para frontend), as varáveis não mudam de valor; Quando for necessário mudar o valor, então substituiremos o 'const' por 'let'. Para contadores de loop, também utilizaremos o 'let'.
*/


//**********************EXERCÍCIOS********************************

// Por qual motivo o código abaixo retorna com erros?
/*
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(var, marca, portas);

//RESPOSTA: Por conta do contexto de bloco; as palavras declaradas 'let' e 'const' respeitam o contexto de bloco e, por isso, não podem ser utilizadas fora das {} nas quais elas foram declaradas; a palavra 'var' é visível e por isso, 'cor' pode ser utlizada fora do bloco ({}). Além disso, o console.log está tentando exibir o 'var' ao invés da variável 'cor'.
*/

// Como corrigir o erro abaixo?
/*
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

//RESPOSTA: A palavra reservada 'const' respeita o contexto de função; por conta disso, o atribuito 'dois' somente pode ser usado dentro da função onde foi declarada; Acredito que a melhor solução seja declara-la fora das funções, de modo a torna-la visível por ambas as funções. (além disso, o operador da segunda função está incorreto.):

const dois = 2;
function somarDois(x) {  
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);
*/

// O que fazer para total retornar 500?
//substituir as palavras reservadas por let.
/*
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
*/