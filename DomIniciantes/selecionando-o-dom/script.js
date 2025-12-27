// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll('img');
console.log("todas as imagens");
console.log(imagensSite);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensIMAGEM = document.querySelectorAll('img[src^="img/imagem"]');
console.log("todas as imagens cujo nome começa com 'imagem'");
console.log(imagensIMAGEM);
// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log("todos os links internos");
console.log(linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log("Primeiro H2");
console.log(primeiroH2);
// Selecione o último p do site
const pS = document.querySelectorAll('p');
console.log("Ultimo elemento p");
const paragrafo = pS[pS.length -1];
console.log(paragrafo);
