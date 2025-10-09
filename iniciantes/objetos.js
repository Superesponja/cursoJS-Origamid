// Um objeto é um conjunto de variáveis e funções. Ele serve para organizar o código em pequenas partes relacionadas e reutilizáveis.
// Em um objeto, as variáveis são chamadas de propriedades e as funções, de métodos.


/*
var pessoa = {
  nome: 'André', //propriedade
  idade: 28, //propriedade
  profissao: 'Designer', //propriedade
  possuiFaculdade: true, //propriedade
}

var quadrado = {
  lados: 4, //propriedade
  area: function (lado){ //método
    return lado * lado;
  },
  perimetro: function(lado){ //método
    return lado * this.lados;
  }
}
  */


/*
A declaração de um objeto se dá através da palavra var (const ou let), seguida de um par de chaves. 
As propriedades declaradas dentro de um objeto são declaradas da seguinte forma
nomeDapropriedade: valor; as propriedades e métodos declarados são separados por vírgulas.
Os métodos, seguem o mesmo formato: nomeMetodo: function() {}. Ainda sobre os métodos, a palavra 'function' pode ser omitida, ficando somente: nomeMetodo(){}
a palavra reservada 'this' serve para acessar propriedades globais do objeto.
*/
/*
O JS tem objetos nativos, como o 'Math', que possui métodos e propriedades matemáticas prontas; outro objeto nativo bastante usado neste curso, é o 'console' e seu método 'log'
 */

/*
Para se acessar um método ou propriedade de um objeto, nós utilizamos  a dot notation, que nada mais é do que usar o nomeDoMetodo.funcaoOuPropriedade
essa funcionalidade pode ser usada tanto para:
- acessar valores das propriedades ou métodos (get): var x = quadrado.lado
- alterar o valor das propriedades já existentes ou criar novas propriedades e métodos (set): quadrado.cor = "verde".
*/


// ***************************************EXERCÍCIOS*********************************

// Crie um objeto com os seus dados pessoais
var pessoa = {
  nome: "Renan",
  idade: 35,
  casado: true,
  profissao: "Assistente de Informática"
}
// Deve possui pelo menos duas propriedades nome e sobrenome
pessoa.sobrenome = "Rodrigues Santana";
// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.getNomeCompleto = function (){
 return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(viuHomem){
    if(viuHomem === true){
      return "au au au";      
    };
    return"";    
  }
}

