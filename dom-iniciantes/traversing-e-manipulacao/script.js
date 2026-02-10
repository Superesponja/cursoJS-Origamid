// Duplique o menu e adicione ele em copy
const novoMenu = document.querySelector('.menu').cloneNode(true);
const copy = document.querySelector('.copy');

copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq
const dlFaq = document.querySelector('.faq dl');  
const stDt = dlFaq.firstElementChild;
console.log(stDt);
// Selecione o DD referente ao primeiro DT
const stDd = stDt.nextElementSibling;
console.log(stDd);
// Substitua o conteúdo html de .faq pelo de .animais
const htmlAnimais = document.querySelector('.animais').innerHTML;
const faq = document.querySelector('.faq');
faq.innerHTML = htmlAnimais;