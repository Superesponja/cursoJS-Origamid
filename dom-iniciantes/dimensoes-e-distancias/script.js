// Verifique a distância da primeira imagem em relação ao topo da página
const primeiraImagem = document.querySelector('.animais img');
console.log(primeiraImagem.getBoundingClientRect().top);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
  const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);
let totalWidth = 0;
todasImagens.forEach(element => {
  totalWidth += element.clientWidth;
});
console.log(totalWidth);
}
window.onload = function(){
  somaImagens(); //o js é carregado antes do html. sendo assim, o script não consegue pegar a largura das imagens que ainda não foram carregadas, o que prejudica a medida correta. Para corrigir isso, usamos a função 'onload' do elemento 'window', que recebe uma função de callback. Essa função somente será executada quando a página for carregada completamente. 
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const linksPagina = document.querySelectorAll('a');
console.log(linksPagina);

class oLink {
  constructor(textoLink, hrefLink, alturaLink, larguraLink){
    this.textoLink = textoLink;
    this.hrefLink = hrefLink;
    this.alturaLink = alturaLink;
    this.larguraLink = larguraLink;
  };
}
  
var vetorLinks = [];

linksPagina.forEach(function(item, index){
  vetorLinks.push(new oLink(
    item.innerText,
    item.href,
    item.clientHeight,
    item.clientWidth,
  ));    
});

vetorLinks.forEach(item => {
  if(item.alturaLink < 48 || item.larguraLink < 48 ){
    console.log (`o link ${item.textoLink} não está dentro dos padrões para uso em mobile ${item.alturaLink}x${item.larguraLink}px`);
  } else {
    console.log (`o link ${item.textoLink} está dentro dos padrões para uso em mobile ${item.alturaLink}x${item.larguraLink}px`);
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const telaMobile = window.matchMedia('(max-width: 720px)').matches;
const menuSite = document.querySelector('.menu');
console.log(menuSite);
if (telaMobile){
menuSite.classList.add("menu-mobile");
}
