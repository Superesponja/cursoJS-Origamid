//FUNCION
/**Toda função é criada com o construtor Function e por isso herda suas propriedades e métodos.
 * 
 
function areaQuadrado(lado){
  return lado * lado;  
}

const perimetroQuadrado = new Function('lado', 'return lado * 4'); // criação de função a partir do objeto; todos os argumentos passados serão dados de entrada, exceto o último, que será o funcionamento e retorno da função. Os argumentos serão strings.
//As propriedades padrão do prototype de Function são:
//length: retorna o número de argumenos da função.
//name: retorna o nome da função.

//Os métodos padrão do prototype de Function são:
//function.call(): executa a função. Ao executar com call, porém, nós podemos passar argumentos extras para a função, sendo o primeiro, padrão, e os demais, os do construtor definido. O argumento padrão que passamos é um valor alternativo para o 'this' da função. ele pode ser 'null' ou um outro objeto que que servirá de constituição à estrutura da função.

const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018

//O método call serve para ser utilizado em qualquer função, então, podemos alterar o objeto referenciado por qualquer função com ele:
const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta

//EXEMPLO PRÁTICO: 
function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);
*/
//CALL EM ARRAYS
const frutas = ['Banana', 'Pêra', 'Uva'];
Array.prototype.pop.call(frutas); //mesma coisa que frutas.pop(); . Então porquê usar isso???

//ARRAY-LIKE
//Esse tipo de sintaxe é usada para se usar métodos de array em objetos arrays-like, visto que eles não possuem todos os métodos de um array.
//A estrutura de um objeto array like é a seguinte:
const arrayLike = {
  0: 'item0',
  1: 'item1',
  2: 'item2',
  length: 3 //obrigatório!!
}
// Na prática da programação web, o nodeList é um objeto array-like que frequentemente se beneficia do Array.prototipe.metotdo().call(nodeList);
const li = document.querySelectorAll('li');
const filtro = Array.prototype.filter.call(li, (item)=>{  
  return item.classList.contains('ativo');
});
console.log(filtro);
