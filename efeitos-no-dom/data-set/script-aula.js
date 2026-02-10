//DATASET

//Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.
/** */


const h1 = document.querySelector('h1');
console.log(Object.prototype.toString.call(h1)); // [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

//'dataset' é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.

/** EX.:
 * Considerando o seguinte código html:
 * <div data-cor="azul" data-width="500">Uma Div</div>
<span data-anime="left" data-tempo="2000">Um Span</span>

// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000; // atribui um novo par de chave-valor ao dataset do elemento (div) selecionada.
delete div.dataset.width; // remove o par de chave-valor do dataset do elemento (div) selecionada
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

Os datasets servem para facilitar a comunicação do dom com JS e CSS.
//na seleção dos data attributes, a palavra-chave 'data-' some.e então em data-cor, nós faríamos a seleção com o 'cor' somente. Os hífens posteriores ao da palavra chave também somem e a chave se torna uma espécie de cammelCase: data-azul-escuro. na seleção, deve ser selecionado: 'azulEscuro'
 */