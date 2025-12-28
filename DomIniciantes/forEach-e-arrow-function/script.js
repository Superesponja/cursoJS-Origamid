// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(function(item) {
  console.log(item);
});
console.log('QUEBRA!');
// Mostre o texto dos parágrafos no console
paragrafos.forEach(itens => {
  console.log(itens.innerText);
});
console.log('QUEBRA!');
// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( ()=> {
  console.log(i++);
});

imgs.forEach(() => i++);