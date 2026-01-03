/*
OUTERHTML, INNERHTML E INNERTEXT
Propriedades que retornam uma string contendo o html ou o texto. É possível atribir um novo valor para as mesmas:

  const h1 = document.querySelector('h1');

  console.log(h1.outerHTML); //todo o html do elemento;
  console.log(h1.innerHTML); // html interno (dos filhos) do elemento;
  console.log(h1.innerText); // texto, sem tags. se não houver valor textual no elemento, ele retornará vazio. P

  // h1.outerHTML = '<p>Texto</p>';  //alteraria o valor do h1 para "<h1 class="titulo"><p>Texto</p></h1>"
  // h1.innerHTML = '<p>Texto</p>';  //alteraria o valor do h1 para "<p>Texto</p>", substituindo as antigas tags
  // h1.innerText = '<p>Texto</p>';  //alteraria o valor do h1 para "<h1 class="titulo">'<p>Texto</p>'</h1>", não interpretando os "<p>s"

TRAVERSING
//Navegar pelo DOM, selecionando elementos referenciando o atual.

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai, ou seja, o elemento um nível acima.
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento exatamente acima, no mesmo nível.
lista.nextElementSibling; // elemento exatamente abaixo, no mesmo nível.

lista.children; // HTMLCollection com os filhos, ou seja, um nível abaixo.
lista.children[0]; // primeiro filho. O HTMLCollection funciona como um array, então podemos acessar elementos específicos, através do seu índice.
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

ELEMENTS X NODES
Elements: as tags HTML. ignora os elementos de comentário, de identação, etc.
Nodes: todos os elementos textuais do documento. geralmente não é usado.
Para selecionar os nodes, usamos a seguinte sintaxe:

  const lista = document.querySelector('.animais-lista');
  console.log(lista.childNodes); //todos os nodes 'filhos' da lista;
  console.log(lista.previousSibling); // retorna o node exatametne anterior ao atual.

MANIPULAÇÃO DE ELEMENTOS
Com o js, podemos manipular os elementos HTML do nosso documento, movendo, por exemplo algo que está no rodapé ou no fim da página para o topo, e etc.
Para tal, usamos os seguintes comandos:

  const lista = document.querySelector('.animais-lista');
  const contato = document.querySelector('.contato');
  const titulo = contato.querySelector('.titulo');

  contato.appendChild(lista); // move lista para o final de contato
  contato.insertBefore(lista, titulo); // insere a lista antes de titulo
  contato.removeChild(titulo); // remove titulo de contato
  contato.replaceChild(lista, titulo); // substitui titulo por lista

NOVOS ELEMENTOS
Também podemos criar novos elementos com o js. para tal, usamos o método createElement():

  const contato = document.querySelector('.contato');
  const mapa = contato.querySelector('.mapa');
  const novoH1 = document.createElement('h1');

  novoH1.innerText = 'Novo Título';
  novoH1.classList.add('titulo'); 
  contato.insertBefore(novoH1, mapa);

CLONAR ELEMENTOS
Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode(o argumento aqui inserido é um boolean. True significa que os filhos serão clonados também; false, somente o elemento será clonado.);


const novoMenu = document.querySelector('.menu').cloneNode(false);
const faq = document.querySelector('.faq');
faq.appendChild(novoMenu);
  

*/
