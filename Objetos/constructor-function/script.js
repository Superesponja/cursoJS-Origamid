// Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade
function Pessoas(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;  
}
// Crie um método no protótipo que retorne o nome completo da pessoa
Pessoas.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
  }
// Liste os métodos acessados por dados criados com NodeList,
// HTMLCollection, Document
console.log("*****NODELIST*****");
Object.getOwnPropertyNames(NodeList.prototype).forEach((prop) => {
  console.log(prop);
});

console.log("*****HTMLCollection*****");
Object.getOwnPropertyNames(HTMLAllCollection.prototype).forEach((prop) => {
  console.log(prop);
});

console.log("*****Document*****");
Object.getOwnPropertyNames(Document.prototype).forEach((prop) => {
  console.log(prop);
});

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
console.log(li.constructor.name);
li.click;
console.log(li.click.constructor.name);
li.innerText;
console.log(li.innerText.constructor.name);
li.value;
console.log(li.value.constructor.name);
li.hidden;
console.log(li.hidden.constructor.name);
li.offsetLeft;
console.log(li.offsetLeft.constructor.name);
li.click();
// quebrou o código console.log(li.click().constructor.name);

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
//RESPOSTA: string