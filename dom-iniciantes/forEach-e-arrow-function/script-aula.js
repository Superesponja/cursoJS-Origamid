/* 
//FOREACH
// ForEach é uma estrutura de iteração do js, que permite percorrer todos os elementos de uma lista, arraylike, array, etc.
// sua estrutura e funcionamento é assim: 
const imgs = document.querySelectorAll('img');
let i=0; 
imgs.forEach(function(){ //o argumento obrigatório de um foreach é uma função, denominada callback; ela será executada para todos os elementos da lista. Pode ser uma função vazia.
  console.log(i++);
}); 

imgs.forEach(function(item, index, arrei){ //A função de callback pode ter parâmetros também. Eles são padronizados, sendo o primeiro deles, o próprio item da iteração. O segundo, é o index, ou seja a posição do elemento atual, na lista. O último item é o próprio array. os nomes das variáveis definidos aqui na function, são de escolha do programador, não interferindo no funcionamento do código.  
  console.log(item, index, arrei);
});


// o forEach é um método do objeto Array, e alguns objetos do tipo array-like também  podem utliza-lo, mas não todos (o nodelist, possui; o HTML collection, não, por exemplo). Caso o objeto que estamos manipulando não possua o método, devemos transforma-lo em array, da seguinte forma:
const titulos = document.getElementsByClassName('titulo');
const  titulosArray = Array.from(titulos);
titulosArray.forEach(function(item){
console.log(item);
})

//ARROW FUNCTIONS
// As arrow functions são uma nova sintaxe para as funções de callback, tornando a sua grafia mais simplificada. 
const imgs = document.querySelectorAll('img');
let i=0; 
imgs.forEach((item)=>{
console.log(item); 
});
//particularidades da sintaxe arrow funcion:
//  - em casos em que há somente um atributo, o parênteses pode ser omitido:
    const imgs = document.querySelectorAll('img');
    let i = 0;
    imgs.forEach(item => {
      console.log(item);
    });
//  - em casos em que não há atributo, o parênteses é obrigatório. (sendo assim, usaremos o parêntese em todos os cassos). 

    const imgs = document.querySelectorAll('img');
    let i = 0;
    imgs.forEach(() => {
      console.log(i++);
    });

    // - quando a função tiver somente uma linha, podemos escreve-la sem utilizar as chaves:
    const imgs = document.querySelectorAll('img');
    let i = 0;
    imgs.forEach(() => console.log(i++));
    */