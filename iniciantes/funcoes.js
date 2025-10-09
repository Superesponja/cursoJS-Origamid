/*
DECLARAÇÃO DE FUNÇÕES:
function nomeDaFuncao (parametrosDeEntrada){
Bloco de Código
return valorASerRetornado
}

function areaQuadrado(lado){
  
  return lado*lado;
  
}
console.log('A área do quadrado é:'); 
console.log(areaQuadrado(2));
*/


/* 
*****************Diferença entre Parâmetros e Argumentos**************
- Ao criar uma função, você pode definir parâmetros.
- Ao executar uma função, você pode passar argumentos.

function imc (sexo, peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc("m", 80, 1.8));
*/

/*
*****************PARENTESES EXECUTAM A FUNÇÃO *********************
sempre que o nome da função é citado, sucedido de parenteses (com argumentos ou não), a função é invocada e executada.


function corFavorita(cor){
  if(cor==='azul'){
    return "Eu gosto do céu";
  } else if(cor==='verde'){
    return "Eu gosto de mato";
  }else{
    return "Eu não gosto de cores";
  }
}
 */

/*
 *******************ARGUMENTOS PODEM SER FUNÇÕES******************
 No JS, todos os tipos de dados podem ser argumentos, inclusive as funções.
 
 addEventListener('click', () => {
console.log('clicou');
 });

 funções anônimas pode ser declaradas como acima, function(){}, ou da forma implementada pelo ES6: () => {}
*/

/*
***********************AS FUNÇOES PODEM OU NÃO RETORNAR VALORES. MAS SE RETORNAREM, É SOMENTE 1 VALOR**********************

  
function imc2(peso, altura){
  console.log(peso/(altura*altura));
}

Na verdade, as funções sem retorno retornam undefined.

*/

/**
 * ***********************VALORES RETORNADOS***********************
 Uma função pode retornar qualquer tipo de dado, inclusive outras funções.
 
 function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return "Digite um número";
  } else if(idade<60){
    return false;
  } else {
    return true; 
  }
 }

 */

 /**
  ***************ESCOPO******************
  Variáveis e funções definidades dentro do bloco, não podem ser viustas/utilziadas fora dele.
  

  function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Faltam Visitar ${totalPaises - paisesVisitados} países`;
  }

  //console.log(totalPaises) retornará um erro, opis a variável foi criada dentro do bloco da função e não pode ser usada fora dela. Variáveis fora do bloco da função são visíveis dentro da função.

  */

  
  /* 
  ******************************************ESCOPO LÉXICO************************
  Funções conseguem acessar variáveis criadas no contexto PAI.
  
  function dados() {
    var nome = 'André';
    var idade = 28;
    function outrosDados() {
      var endereco = 'Rio de Janeiro';
      var idade = 29;
      return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
  }
  Neste exemplo, se chamarmos outrosDados(), o valor de idade será o de dentro da própria função, e não o do pai. Havendo ambiguidades (como neste caso), o caso mais específico será o selecionado.
  */

  // Crie uma função para verificar se um valor é Truthy
function isTruth (valor){
  return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado1){
  let perimetro = lado1 * 4;  
  return perimetro;
}



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){

  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function par(numero){
  if(numero%2 == 0){
    return true;
  }
  return false;
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(variavel){
  return typeof(variavel);
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener ('click',()=>{
  console.log(nomeCompleto("Renan","Santana"));
});

//Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
