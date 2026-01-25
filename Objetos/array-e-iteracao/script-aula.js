//ARRAY
/*
// Os métodos usados para percorrer um array, passando por todos os elementos são:


//FOREEACH()
// [].forEach(callback(itemAtual, index, array))

const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach(function(carro, index, array){
  array[index] = 'carro ' + carro;
  console.log(carro, index, array); 
})

//Arrow Function: uma forma mais compacta de escrever a função 
const li = document.querySelectorAll('li');

li.forEach(i=> i.classList.add('ativa'));

li.forEach(function(item){
  item.classList.add('ativa');
});


//MAP()
// [].map(callback(itemAtual, index, array))
//funciona exatamente como o forEach, porém enquanto o último retorna 'undefined', o primeiro retorna o vetor atualizado com as alterações de cada iteração.

const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map(function(carro, index, array){
  return carro.toUpperCase();
})
console.log(carros);
console.log(novaArray);

const numeros = [2,4,5,6,78];
const numertosX2 = numeros.map(n => n * 2 );
console.log(numertosX2);

//Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

//EXEMPLO DE MAP COM OBJETOS: Neste exemplo, desejamos retornar somente o valor de 'min' das aulas.

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
//a expressão acima é igual a:
/**
 * const puxarNomes = function(aula){
 * return aula.nome;
 * };

const nomesAulas = aulas.map(puxarNomes); // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

//a expressão acima é igual a:

const nomesAulas = aulas.map(function(aula){
  return puxarNomes(aula);
})

//a passagem de argumetos, aparentemente, é opcional no map, então passamos somente a função de callback, que receberá como argumento o objeto aula.


//REDUCE()
// [].reduce(callback(acumulador, valroAtual, index, array),  valorInicial)
//É um iterador de array semelhante ao map, porém o primero argumento passado ao callback é o 'acumulador', que traz o volor da última iteração. se passarmos o 'valorInicial' após o callback, o acumulador assumirá esse valor na primeira iteraçãoo; se não,  a primeira iteração será feita em sepaado, para definir o valor do acumulador. O valor retornado da função reduce() será o resultado da última iteração.

const aulas = [10,25,30]
const reduceAulas = aulas.reduce((acumulador, item, index, array)=>{  
  return item + acumulador;
},0); //0+10+25+30, onde '0' é o valor inicial passado.

const vetorNum = [10,25,60,5,35,10]; //maior: 60
const maior = vetorNum.reduce((anterior, item)=>{
  if(anterior>=item)    
    return anterior;
  else
    return item;
  //uma forma reduzida de se escrever esse calback, seria:
  // return acu < item ? atual : item;
});// 60

//REDUCE COM OBJETOS
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

//Retornaremos um vetor com somente os nomes das aulas.
const nomesAulas = aulas.reduce((acumulador,item, index)=>{
  console.log(acumulador);
  acumulador[index] = item.nome;  
  return acumulador;
},{} ) //nomesAulas = {"0": "HTML 1","1": "HTML 2","2": "CSS 1","3": "JS1"}

//reduceRight(): igual ao anterior, porém a iteração começa pelo fim ( da direita para a esquerda);
  

//SOME()
//[].some(): se pelo menos um retorn da iteração for truthy (verdadeiro, confiável), ele retorna true:

const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) =>{
  console.log(item + ' uva');
  return item.toLowerCase() === 'uva';
})
console.log(temUva); 


//EVERY()
//[].every(): se todas as iterações retornarem truthy (verdadeiro, confiável), ele retorna true:

const umAcinco = [1,2,3,4,5];
const pares = [2,4,6,8,10];

const resposta = umAcinco.every((num)=>{
  return num % 2 == 0 ? true : false;
}) // false

const resposta2 = pares.every(num => num % 2 == 0 ? true : false) // true - sintaxe reduda Arrow function



//FIND() e FINDINDEX
//[].find(): realiza a busca de acordo com os parâmetros especificados. retorna o primeiro valor que corresponder à busca;
const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find(x => x > 45); // 88

//[].findIndex(): realiza a busca de acordo com os parâmetros especificados. retorna o índice do primeiro valor que corresponder à busca;

const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2



//FILTER
//[].filter(): semelhante ao find(), porém ao invés de retornar somente um valor, retorna um array com todos os valores que corresponderem à busca:

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]

//Exemplo de filter em objetos:
// RETORNE TODAS AS AULAS QUE TIVEREM MAIS DE 15 MINUTOS.
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulas15 = aulas.filter(aula => aula.min > 15);
console.log(aulas15); // aulas15 = [{nome: 'CSS 1',min: 20}, {nome: 'JS 1', min: 25}]


DICA: Não esquecer de retornar valor nos métodos que demandam isso (map, reduce, some, every, etc)
*/