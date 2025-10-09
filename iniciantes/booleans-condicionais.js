/* var possuiDoutorado = true;
var possuiGraduacao = true;

if('possuiDoutorado') {
  console.log('Possui Doutorado');
} else if(possuiGraduacao) {
    console.log('Não possui doutorado, mas possui graduação');
} else {
  console.log('Não possui nem doutorado, nem graduação');
}
*/


/* 
O CONDICIONAL 'IF' SEMPRE TENTARÁ FAZER A VERIFICAÇÃO 'VERDADEIRO/FALSO', INDEPENDENTE DA VARIÁVEL SER BOOLEAN OU NÃO.
OS CASOS CONHECIDOS COMO FALSO SÃO:
if (false);
if(0) \\ ou -0
if(NaN);
if(null);
if(undefined)
if('') // string vazia
*/
/*
OPERADORES DE NEGAÇÃO, DE COMPARAÇÃO E 'E' 'OU'
- NEGAÇÃO
  o ponto de exclamação '!' é um operador lógico de negação;
- COMPARAÇÃO
< MENOR QUE;
> MAIOR QUE;
<= MENOR IGUAL;
>= MAIOR IGUAL;
= ATRIBUI VALOR A UMA VARIÁVEL
== FAZ UMA COMPARAÇÃO NÃO ESTRITA (VERIFICA SE SÃO OS MESMOS VALORES, INDENDENTENTEMENTE DO TIPO DO VALOR )
=== FAZ UMA COMPARAÇÃO ESTRITA ( COMPARA O VALOR E O TIPO DO VALOR)
!= DIFERENTE; VERIFICA SE DOIS VALORES SÃO 'NÃO IGUAIS';
&&  OPERADOR LÓGICO 'E'
|| OPERADOR LÓGICO 'OU'
* Sempre que o os operadores lógicos && e || comparam valores não booleanos (números, textos, etc), caso a resposta seja verdadeira, eles retornarão o valor, e não 'true'. Ex.: 10 && 6 = 6; 'cão' || 'gato' = cão;
* O operador && retorna o ultimo valor, se ambos  verdadeiro; o operador || retorna o primeiro se ambos forem verdadeiros ou o verdadeiro, caso um deles o seja

*/

// EXERCÍCIOS!!


// Verifique se a sua idade é maior do que a de algum parente
var idadeRenan = 35;
var idadeMama = 69;
if (idadeRenan > idadeMama) {
  console.log('Renan é mais velho');
} else if(idadeRenan == idadeMama) {
  console.log('Renan e a pessoa têm a mesma idade') } else {
  console.log('Renan é mais novo');
}

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
// feito!
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//console.log(expressao); // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // verdadeiro
if(nome) {
console.log(nome);
}
var idade = 28; // verdadeiro
if(idade) {
  console.log(idade);
  }
var possuiDoutorado = false; // falso
if(!possuiDoutorado) {
  console.log(possuiDoutorado);
  }
var empregoFuturo; // falso
if(!empregoFuturo) {
  console.log(empregoFuturo);
  }
var dinheiroNaConta = 0; // falso
if(!dinheiroNaConta) {
  console.log(dinheiroNaConta);
  }

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if(brasil == china){
  console.log('mesma população')
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); //falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // cão
} else {
  console.log('Falso');
}