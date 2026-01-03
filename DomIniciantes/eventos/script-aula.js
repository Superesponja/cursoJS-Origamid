/*
// Eventos são atividades de interação com nossa página. Para manipular os eventos, utilizamos o método 'addEventListener(event, callback, options)', com a sintaxe demonstrada no texto.


  const img = document.querySelector('img');

  img.addEventListener('click', function(){
    console.log("clicou"); 
  })
  console.log(img);

Uma boa prática, é escrever a função fora do evento e somente passar o nome dela, como argumento .

  const img = document.querySelector('img');
  function callback(){
    console.log('clicou');
  }

  img.addEventListener('click', callback);
  console.log(img);

Falando especificamente da função callback passada dentro de um evento, seus argumentos são fixos, podendo ser nomeados conforme interesse do programador.
O primeiro deles, é o próprio evento (event) disparado.
  const img = document.querySelector('img');
  function callback(evento){
    console.log(evento);
  }  

const animaisLista = document.querySelector('.animais-lista');
  function callback(evento){
  const currentTarget = evento.currentTarget; // this (o próprio elemento que recebeu o evento)
  const target = evento.target; // o exato elemento que recebeu o evento (no caso, temos uma lista de animais. então seria exatamente a imagem que recebeu o click)
  const type = evento.type; //retorna uma string com o nome do evento.
  }    
    
  function handleLinkExterno (evento){
    evento.preventDefault(); // o método preventDefault é usado para evitar que o comportamento padrão de um evento seja acionado, encaminhando o comportamento do evento para outra ação. neste exemplo, ao invés de o link externo abrir sair do site e ir para o endereço do href, o preventDefaul encaminha o comportamento do click para somente exibir no console.log, os dados do evento.
    console.log(evento);
  }

  const linkExterno = document.querySelector('a[href^="http"]');
  linkExterno.addEventListener('click', handleLinkExterno);2


  THIS
  A palavra reservada 'this' é usada em js para referenciar diferentes alvos, dependendo do contexto. No caso de eventos, ela servirá para referenciar o objeto em que o evento ocorreu (mais ou menos como o target?)

    const img = document.querySelector('img');
    function callback(event) {
      console.log(this); // retornará a imagem.
      //console.log(this.getAttribute('src'));
    }
    img.addEventListener('click', callback);  


  DIFERENTES TIPOS DE EVENTOS
  Existem inúmeros eventos, como por exemplo, 'click'(clique do mouse), 'scroll'(scroll do mouse), 'resize'(redimensionamento da página), 'keydown'(quando a tecla é apertada), 'keyup'(quando a tecla é 'desapertada'), 'mouseenter'(quando passa o mouse por cima), etc. Os eventos podem ser adicionados a diferentes elementos, como o 'window' e o 'document'.
  Os eventos podem ser consultados em: https://developer.mozilla.org/en-US/docs/Web/Events

  const h1 = document.querySelector('h1');
function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent);
window.addEventListener('keyup', handleEvent);

KEYBOARD
É possivel também utilizar os eventos para se criar atalhos de teclado, facilitando a navegação do usuário final.

function handleKeyboard(evento) {
  if(evento.key === 'a')
    document.body.classList.toggle('azul');
  else if(evento.key === 'v')
    document.key.classList.toggle('vermelho');
}

FOREACH E EVENTOS
// Como o método addEventListener é adiconada a um único elemento, para faze-lo em 'lote', precisamos usar um loop:

  const imgs = document.querySelectorAll('img');
  function handleImg(event) {
    console.log(event.target);
  }

  imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
  });

*/

