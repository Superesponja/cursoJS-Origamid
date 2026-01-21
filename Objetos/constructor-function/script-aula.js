//A propriedade prototype é um Objeto adicionado a uma função quando a mesma é criada.
/* */
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.nadar = function(){
    return "Pessoa nadou, mas não pelo prototype; pela própria função";
  }
  return 1+1;
}

const renan = new Pessoa("Renan", 36);

//console.log(renan.prototype);
//console.log(Pessoa.prototype);

// É possível adicionar novas propriedades e métodos ao objeto prototype. Os métodos adicionados à função construtora podem ser acessados por todos os objetos criados a partir da função e também pela própria função, sem necessidade de instanciar um objeto.

Pessoa.prototype.andar = function(){
  return 'Pessoa andou';
}
Pessoa.prototype.nadar = function(){
  return 'Pessoa nadou  ';
}
// se a função existir criada na função construtora e no prototype (ou ainda diretamente em um objeto instanciado pela função construtora), a executada sempre será a mais específica (no caso, na da função construtora): Para acessar ao método (função) mais genérico, será necessário incluir o .__proto__.funçãoDesejada na chamada:

//console.log(renan.nadar());
//console.log(renan.__proto__.nadar());

// o __proto__ é encadeado, ou seja, se eu observar o que há dentro de renan.__proto__ (que foi herdado da função construtroa 'Pessoa'), verei que há um outro '__proto__' lá, desta vez, herdado da função construtora 'Object', contendo todos os métodos desta. Esse tipo de acesso (renan.__proto__) não é algo usual na prática da programação.
console.log(renan.toString());
console.log(renan.isPrototypeOf());
console.log(renan.valueOf());

// O Object é o construtor mais fundamental do JavaScript, o que é usado para criar todos os demais.