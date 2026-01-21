// OBJETOS
/* 
Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

const carro = {
  marca: "Marca",
  preco: 0
}

const honda = carro;
honda.marca = 'honda';
honda.preco = 2000;

const fiat = carro;
honda.marca = 'fiat';
honda.preco = 1000;

console.log(carro);
console.log(honda);
console.log(fiat);
A sintaxe tentada acima não funciona, pois a cada vez que tentamos criar um novo "objeto = carro", nós estamos na verdade, referenciando o objeto carro e não criando uma cópia dele. Da forma como fizemos, nós sobrescrevemos todos os objetos com os dados do objeto 'fiat'.
A forma correta de fazer é com uma função construtora:
 

function Carro() {
  this.marca = 'Marca'; //a palavra reservada 'this' serve para referenciar o próprio escopo da função. 
  this.preco = 0;
}

const honda = new Carro(); // por padrão, as funções construtoras são escritas em PascalCase, ou seja, a primeira letra maiúscla, seguida do cammelCase normal.
honda.marca = "Honda";
honda.preco = '4000';

const fiat = new Carro(); // a palavra resevada 'new' executa uma ´serie de passos para criar o objeto:
*/
/**
  const honda = new Carro();

  // 1 Cria um novo objeto
  honda = {};

  // 2 Define o protótipo
  honda.prototype = Carro.prototype;

  // 3 Aponta a variável this para o objeto
  this = honda;

  // 4 Executa a função, substituindo this pelo objeto
  honda.marca = 'Marca';
  honda.preco = 0;

  // 5 Retorna o novo objeto
  return honda = {
    marca: 'Marca',
    preco: 0,
  }

fiat.marca = 'Fiat';
fiat.preco = 3000;

console.log(honda);
console.log(fiat);

Outra possibilidade, é passar os atributos a serem preenchidos, como parâmetros da função contrutora: 
  function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
  }
  *** NOTA: ainda assim, caso alguém tente "honda = carro();", isso funcionará. os atributos do obeto estarão vazios.
  const honda = new Carro('honda, 3000);

Um objeto pode também ter variáveis somente visíveis dentro do contexto do próprio objeto: 
  function Carro2(marca, precoInicial){
    const taxa = 1.2; //invisível
    const precoFinal = precoInicial * taxa; //invisível
    this.marca = marca; //visível externamente
    this.preco = precoFinal; //visível externamente
  }

  EXEMPLO PRÁTICO DE FRONTEND

  const Dom = {
  seletor: 'li',
  element: function(){
    return document.querySelector(this.seletor);    
  },
    ativar(){ //outra sintaxe para criação de métodos no JS
    //jeito burro de fazer; daria para usar o método que retorna o element, criado anteriormente: const elementoSelecionado = document.querySelector(this.seletor);
    
    this.element().classList.add('ativar');
    } 
  }

  O objeto acima está funcional, todavia, nós frequentemente desejamos reutilizar um objeto criado. sendo assim, muito mais funcional é criar transforma-lo em uma função construtora, para que ele se torne reutilizável.
 */
/**
function Dom(seletor) {  
  this.element = function(){
    return document.querySelector(seletor);    
  }
  this.ativar = () => {    
      this.element().classList.add('ativar');
  } 
}

const li = new Dom('li'); 
const ul = new Dom('ul'); 
const lastLi = new Dom('li:last-child'); 
 */


