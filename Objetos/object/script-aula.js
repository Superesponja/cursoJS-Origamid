//OBJECT
//Todo objeto é criado com o construtor Object e por isso, herda as propriedades e métodos de seu prototype.
/**
const carro = {
  
  rodas: 4,
  
  init(ano, marca) { //outra forma de settar um valor para uma propriedade do objeto. Claramente, um proto construtor.
    this.ano = ano; 
    this.marca = marca;
    return this;
  },
  
  acelerar() {
    return this.marca + ' ' + this.ano + ' acelerou ';    
  },
  buzinar() {
    return 'bi bi'; 
  },
  
} //sintaxe com chaves

const pessoa = new Object({
  nome: 'Andre',
  idade: 28, // não tem problema, vírgula no último item
}) // sintaxe com o Obejct, diretamente


//OBJECT.CREATE()
//forma de criação de objetos que permite aproveitar os métodos e propriedades de um outro objeto já criado, através de seu protótipo.
//Caso sejam criados métodos ou propriedades conincidentes com os já existentes no protótipo, esses sobrescreverão estes.

const honda = Object.create(carro).init(2018, "Honda"); 

console.log(carro.acelerar());
console.log(honda.acelerar());

 
//OBJECT.ASSYGN()
//Object.assygn(alvo, obj1, obj2...) Possui um argumento obrigatório, o alvo. Os argumentos demais serão os objetos que proverão seus métodos e propriedades para o alvo.
//Os métodos e propriedades são assinalados diretamente no objeto e não no protótipo, como ocorre com o create() 
const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel); //recebeu acelerar() e buzinar()
Object.assign(carro, funcaoAutomovel); //recebeu acelerar() e buzinar()
*/

//OBJECT.DEFINEPROPERTIES()
//Object.defineProperties(alvo, propriedades) adiciona ao alvo, novas propriedades. A diferença aqui é a possibilidade de serem definidaas as características dessas propriedades:
//(Por exemplo, impedindo a modificação de uma propriedade)

const moto = {}
Object.defineProperties(moto, {
  rodas: {
    //value: 2,
    configurable: true, // impede deletar e mudança de valor
    //enumarable: true, // torna enumerável
    get() { //define o modo como a propriedade retornará seu valor.
      return this._rodas;
    },
    set(valor) { //define o modo como a propriedade alterará o seu valor, a partir da entrada do usuário.
      this._rodas = valor * 4;
    }
  },
  capacete: {    
    configurable: true,
    //writable: false, // impede mudança de valor    
  },
  
})

moto.rodas = 4;
delete moto.capacete;
moto;
// {rodas: 2}
