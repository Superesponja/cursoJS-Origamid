// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.andar = function (){
    console.log(this.nome + " andou");
  }
}

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){  

  this.element = document.querySelectorAll(seletor);

  this.addClass = (classe) => {    
    this.element.forEach((elemento) =>{
      elemento.classList.add(classe);
    });    
  }

  this.removeClasse = (classe) =>{
    this.element.forEach((elemento) =>{
      elemento.classList.remove(classe);
    })
  }
}
const umaUl = new Dom('ul');
