/* 
//CLASSLIST 
//a propriedade classList a que usamos para selecionar e manipular as classees dos elementos do DOM.
  const menu = document.querySelector('.menu');
  console.log(menu.classList);
// Ela possi as seguintes opções:
  menu.className; // string com o nome das classes do elemento; era o modo usado para manipular as classes, antigamente.
  menu.classList; // lista de classes
  menu.classList.add('ativo'); //adiciona uma classe ao elemento
  menu.classList.add('ativo', 'mobile'); // o comando add pode adicionar mais de uma classe.
  menu.classList.remove('ativo'); remove a(s) classe(s) passadas como argumento do elemento.
  menu.classList.toggle('ativo'); // adiciona/remove a classe
  menu.classList.contains('ativo'); // true ou false
  menu.classList.replace('ativo', 'inativo');

// ATTRIBUTES
// há também uma propriedade análoga, para a manipulação dos atributos de um elemento do DOM. trata-se da 'attributes'.
    const animais = document.querySelector('.animais');
    console.log(animais.attributes);
// Diferentemente das classes, os métodos para manipulação dos atributos não são usados na propriedade atributos; são passados diretamente, conforme segue:
  animais.getAttribute('src'); // recebe do elemento, seu valor do src
  animais.setAttribute('alt', 'Texto Alternativo'); // altera o valor do atributo 'alt' do elemento
  animais.hasAttribute('id'); // verifica a existência ou não de um atributo (true / false)
  animais.removeAttribute('alt'); // remove o atributo 'alt'
  animais.hasAttributes(); // true / false se tem algum atributo

// READ ONLY VS WRITABLE
// Na linguagem js, existem propriedades que não permitem a mudança de seus valores. Essas são consideraddas Read Only, ou seja, apenas leitura.
  const animais = document.querySelector('.animais');

  animais.className; // string com o nome das classes
  animais.className = 'azul'; // substitui completamente a string
  animais.className += ' vermelho'; // adiciona vermelho à string

  animais.attributes = 'class="ativo"'; // não funciona, read-only
  
    */
  const animais = document.querySelector('.animais');
  console.log(animais.attributes);