// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

function funcAtivo(evento){
  
  linksInternos.forEach((item) =>{
    
    if(item == evento.target){
      item.classList.add('ativo');

    } else {
      item.classList.remove('ativo');
    }
    evento.preventDefault();
  });
};

linksInternos.forEach((item, index) =>{
  item.addEventListener('click', funcAtivo);
});


// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados


const todosElementos = document.querySelectorAll( 'body *');
console.log(todosElementos);
function mostraElemento(evento) {
  console.log(evento.currentTarget);
};

todosElementos.forEach(elemento => {
  elemento.addEventListener('click', mostraElemento);
});



// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

/*
const todosElementos = document.querySelectorAll( 'body *');
console.log(todosElementos);
function mostraElemento(evento) {
  evento.currentTarget.remove();
};

todosElementos.forEach(elemento => {
  elemento.addEventListener('click', mostraElemento);
});
*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function aumentaFonte(event){
  if(event.key === 't'){
    document.documentElement.classList.toggle('fontaum');
  }
  
}

window.addEventListener('keydown', aumentaFonte);