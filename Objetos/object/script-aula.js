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


//OBJECT.GETOWNPROPERTYDESCRIPTORS()
//Object.getOwnPropertyDescriptors(obj) Lista todos os métodos e propriedades de um objeto, com suas devidas configurações.
//Object.getOwnPropertyDescriptors(obj.prototype) Lista todos os métodos e propriedades de um objeto, com suas devidas configurações. 
//Object.getOwnPropertyDescriptors(obj, pro/meth): faz o mesmo que o anterior, porém, para um só método/propriedade do obejto passado no primeiro argumetno.


//OBJECT.KEYS(obj), OBJECT.VALUES(obj) OBJECT.ENTRIES(obj)
//Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.
//Object.values(obj) retorna uma array com os valores do objeto.
// Object.entries(obj) retorna uma array com array's contendo a chave e o valor.


//OBJECT.GETOWNPROPERTYNAMES()
//Object.getOwnPropertyNames(obj): Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).


//Object.getPrototypeOf() e Object.is()
//Object.getPrototypeOf(), retorna o protótipo do objeto.
// Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.


//OBJECT. FREEZY(), OBJECT.SEAL() e OBJECT.PREVENTEXTENSIONS()
//Object.freezy(): impede qualquer mudança nas propriedaes.
//Object.seal(): impede a adição de novas propriedaes, não impedindo a alterçaão das já existentes. Também não permite a exclusão das já existentes.
//Object.preventExtensions(): impede a adição de novas propriedaes, permitindo a exclusão das já existentes.
//Oject.isFrozen(obj), Object.isExtensible(obj) Object.isSealed(obj) verificam os referidos métodos foram usados sobre o obj em questão.


//PROPRIEDADES E MÉTODOS DO PROTÓTIPO DE OBJ
//TODO objeto em JS herda o protótipo de Object e, portanto, tem acesso aos seus métodos e propriedades:

//{}.constrctor: retorna o constutor do objeto.
//{}.hasownProperty('prop'): Verifica se o objeto possui a propriedade alvo. Nâo inclui as herdadas. 
//{}.propertyIsEnumerable('prop'): Verifica se a propriedade alvo é enumerável no objeto.
//{}.isPrototypeOf(valor): Verifica se é o prototipo do valor passado.
//{}.toString(): retorna uma string. Seu funcionamento dependerá do objeto que invocou o método.

const frutas = ['Banana', 'Uva'];
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

const frase = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

const carro = {marca: 'Ford'};
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
*/