// Array é uma estrutura de dados que permite armazenar vários valores, geralmente relacionados, em uma única variável.
var videogame = ["Switch", "PS5", "Xbox", "3DS"];
videogame[1]; // PS5
videogame[2]; // Xbox
// o método 'push' adiciona um item ao final do array; o método pop remove o último item de um array e o retorna;

// Loop é uma estrutura lógica que permite realizar a execução de um determinado código ínumeras vezes.

/*
FOR
for(var i = 0; i<10;i++){
  console.log(`Executei pela via for ${i+1} vez`);
}

WHILE
var i = 0;
while(i<10){
  console.log(`Executei via while pela ${i+1} vez`);
  i++;
}
*/

/*Interagindo com arrays através de loops:

for (var item = 0; item<videogame.length; item++){
  console.log(videogame[item]);
  // o 'break' é uma palavra reservada utilizada para interromper laços de repetição
  if(videogame[item] === 'PS5'){
    break;
  }
}
  */

// foreeach é uma estrutura de repetição própria para uso em arrays (array-like). Ela permite a interação direta, passando com cada um dos elementos de um array
/* videogame.forEach((item, index, array)=>{
item = "console " + item;
console.log(item, index, array);
});
// Neste exemplo, o forEach percorre todo o array 'videogame' e executa um comando para cada posição do array (item); O primeiro argumento, é o item de cada posição; o segundo, a posição do array em que a execução está; o último, retorna o array inteiro. Os segundo e terceiro argumentos são opcionais.
*/
//*************** EXERCÍCIOS***********************

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1958, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i < brasilCampeao.length; i++){
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var i = 0;
while(1){
  console.log(frutas[i]);
  if (frutas[i]==="Pera"){
    break;
  }
  i++;
};

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log("ultimaFruta");
console.log(ultimaFruta);