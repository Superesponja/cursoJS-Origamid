//NUMBER
//É o construtor de números. todo número possui as propriedades e métodos do prototype de Number; A classe Number também possui alguns métodos.
const ano = 2018;
const preco = new Number(99);

//* INNAN e ISINT
//Verificam se a variável não é um número (isNaN = Not A Number) ou se a variável é um inteiro (isInteger);
const cinco = 5;
const palavra = 'palavra';
const quatroEMeio = 4.5;
console.log(Number.isNaN(cinco)); //false
console.log(Number.isNaN(palavra)); //false
console.log(Number.isInteger(cinco)); //true
console.log(Number.isInteger(quatroEMeio)); //false

//*PARSEFLOAT E PARSEINT
//Convertem uma string em número ponto flutuante (parseFloat) ou inteiro (parseInt). O parseInt ainda, pode receber um segundo argumento além da string que se deseja converter, que será a base em que o número será convertido (10, 8, 2, 16...);
const vinteEtres = '23';
const vinteDoisEMeio = '22.5';
Number.parseFloat(vinteDoisEMeio);// 22.5
Number.parseFloat(vinteEtres);// 23
Number.parseInt(vinteDoisEMeio);// 22
Number.parseInt(vinteEtres);// 23

//* TOFIXED
// Formata o número com a quantidade de casas decimais passadas como argumento; se não for passada nenhuma, ele retorna um inteiro arredondado (diferentemente do parseInt, que simplesmente despreza as casas decimais, sem fazer o arredondamento).IMPORTANTE: o retorno da função toFixed() é uma string!

const carro = 1000.455
carro.toFixed(2); // 1000.46

const precos = 2.99
precos.toFixed(); // 3

//TOSTRING
// Transforma um número em uma string. Pode-se passar, a base do número como argumento (default 10);
preco.toString(); // "2.99";

//TOLOCALESTRING
// Foprmata o número de acordo como a língua e opções passadas; recebe dois argumentos: o idioma ('en-US', 'pt-BR', etc) e as opções, que são um objeto com duas variáveis: style: (o que será número; currency, seria o dinheor, por exemplo) e currency: (variará de acordo com a primeira opção; como eu selecionei 'currency', poderei passar como argumeto a moeda que desejo ('USD', 'BRL', etc))
const valor = 54.20;
valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $ 54.20
valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 54.20

//*MATH
//Math, deferentemente dos outros que vimos, é um objeto e não um construtor. Ele possui vários métodos que nos auxiliam a fazer operações matemáticas

Math.PI; //3.14.....
Math.abs(-5.5); // 5.5 retorna o valor absoluto
Math.ceil(4.8334); // 5 arredonda valor inteiro, para cima
Math.ceil(4.3); // 5 arerdonda valor inteiro, para cima
Math.floor(4.8334); // 4 arredonda valor inteiro, para baixo
Math.floor(4.3); // 4 arredonda valor inteiro, para baixo
Math.round(4.8334); // 5 arredonda valor inteiro
Math.round(4.3); // 4 arredonda  valor inteiro

Math.max(5,3,10,42,2); // 42 retorna o maior valor
Math.min(5,3,10,42,2); // 2 retorna o menor valor

Math.random(); // 0.XXX retorna um número aleatório entre 0 e 1; 
Math.random() * 100; // entre 0 e 100. Caso eu deseje um outr intervalo, basta multiplicar a função pelo valor desejado
Math.floor(Math.random() * 500);  // entre 0 e 500. Podemos ainda, arredondar para baixo, para termos números inteiros

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * ('max' - 'min' + 1)) + 'min'; //para intervalos personalizados, basta executar essa função

