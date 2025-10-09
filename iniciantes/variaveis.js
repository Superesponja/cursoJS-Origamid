// Essas são as três atuais formas de criação de variáveis no JS: 'var', 'let' e 'const'. Elas possuem diferenças entre si, porém trataremos delas no futuro.
//var nome = "Renan";
//let idade = 35;
//const possuiFaculdade = true;
// Uma variável pode ser usada para fazer operações diversas, como matemáticas, por exemplo:
//var preco = 25
//var totalComprado = 5;
//var totalPreco = preco * totalComprado;
//console.log(totalPreco);

//é possível declarar várias variáveis de uma vez, evocando a palavra 'var' apenas uma vez. Apesar disso, nós é usual usar o ENTER mesmo assim
//var sobrenome = "Santana", 
    //cidade = "Tremembé", 
    //estado = "SP";

//também podemos criar variáveis vazias:
//var vazia;
//console.log(vazia);
// Em JS, os nomes das variáveis sempre devem começar com '$' ou com uma letra;
// o JS é case senstive;
// as palavras reservadas não podem ser usadas como variáveis.
// a convensão da língua é o camelCase.

//Ao contrario de outras linguagens, como o PHP, no JS não é possível chamar uma variável não definida anteriormente. Apesar disso, eu posso declarar a variável em qualquer lugar do código e ela será visível em todo o código, porém os valores atribuídos à ela só surtem efeito apartir da atribuição.

// Declarar uma variável com o seu nome
var nome = "Renan",
// Declarar uma variável com a sua idade
idade = 35,
// Declarar uma variável com a sua comida favorita e não atribuir valor
    comidaFavorita;
// Atribuir valor a sua comida favorita

// Declarar 5 variáveis diferentes sem valores
comidaFavorita = "Churrasco";
var um,
    dois,
    tres,
    quatro,
    cinco;

console.log(nome, idade, comidaFavorita, um, dois, tres, quatro, cinco);
