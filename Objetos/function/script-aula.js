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

//function.apply()
//O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
//Útil para uso em funções como a max ou a min, do objeto Math, onde os argumentos precisam ser passados separadamente. Com o apply(), podemos passa-los como um array e a função funcionará normalmente:
const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);
*/
// Podemos passar null para o valor  de this, caso a função não utilize o objeto principal para funcionar (uso em objetos nativos JS, por exemplo).


//funcition.bind()
//Diferente do call e apply, bind(this, arg1, arg2, ...) não irá executar a função, mas sim retornar a mesma com o novo contexto de 'this'. O primeiro parâmetro ainda é o contexto de 'this'.

const li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
}); // carregou a função com o contexto de 'this' no array-like 'li', na variável filtrarLi. 

filtrarLi(); //executou a função.
// útil para casos em que a função será reutilizada em algum momento. caso contrário, prefira call() ou apply() 

//Outro exemplo
const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo){
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'Honda'  
}

const acelerarHonda = carro.acelerar.bind(honda, 399);//aqui, passamos a aceleração como default. Útil para contextos em que o valor é fixo.
