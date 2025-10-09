// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll('img');
console.log(imagensSite);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensIMAGEM = document.querySelectorAll('[img^="img/imagem"]');
console.log(imagensIMAGEM);
// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao

// Selecione o último p do site