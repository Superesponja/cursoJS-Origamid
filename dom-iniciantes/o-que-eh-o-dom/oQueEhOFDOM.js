// O DOM, 'Document Object Model' é uma representação de uma página HTML ou XML em formato de objetos.
// é através dele que manipulamos a estrutura (tabelas, botões, etc), estilos (CSS) e o conteúdo (textos e imagens) de nossa página via JS.
//O objeto 'Window' é o objeto mais abrangente do DOM e representa o browser todo.
// Abaixo dele, temos o objeto 'Doocument' que também é muito importante.
//Na Sequência, temos o objeto 'HTML', pai dos objetos 'Head' e 'Body' e cada um terá os seus objetos filhos, de acordo com a complexidade e estrutura do site.


//A classe 'Element' também é uma das classes base do JS, da qual a maioria das clases herda atributos e métodos.
//Através dela, podemos listar todas as classes (tags) atribuídas a um elemento (nomeDoElemento.classlist); Eles são listados em formato de array, sendo possível selecioná-los por meio de seus índices.
/* Os atributos herdados da classe element são poderosas ferramentasque temos para acessar elementos do DOM, sendo alguns exemplos:
  - .innertext // retorna o texto;
  - .classlist // retornas as classes;
  - .id // retorna o id;
  - .offsetHeight // retorna a altura do elemento.
  - .addEventListner // permite criar um gatilho que ao ser acionado, executa uma funçao.
  */

/*
***************EXEMPLOS**********************
console.log(window); //exibe as propriedades do obejto 'window';
window.alert("este é um alert!"); // cria um alert;
alert("Outro!"); // cria outro um alert;
// Como o objeto 'window' é o mais global, em muitos casos ele pode ser omitido: 

// Para selecionar um elemento dentro de nossa página, por exemplo o h1, utlizamos o método query selector:
const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;
//a partir daí, manipula-lo conforme nossa necessidade:
h1Selecionado.style.color="333231";
function callbackH1(){
  console.log('clicou em ', h1Selecionado.innerText);
}
h1Selecionado.addEventListener('click', callbackH1);
*/



// Retorne o url da página atual utilizando o objeto window
console.log('URL: ', location.href);
// Seleciona o primeiro elemento da página que possua a classe ativo
const classAtivo = document.querySelectorAll(".ativo");
console.log('classe ativo', classAtivo[0]);
// Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language;
console.log('Linguagem do navegador: ', linguagemNavegador);
// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
console.log('Largura da Janela: ', larguraJanela, 'px');