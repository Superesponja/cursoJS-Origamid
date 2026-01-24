//ARRAY
// Os arrays são estruturas que nos permitem guardar multiplos valores. Os valores podem ser de quaisquer tipos, inclusive, no mesmo array os elementos não precisam ser todos do mesmo tipo

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];
const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];
Array.of(10);// [10];
Array.of(1,2,3,4);//[1,2,3,4]
new Array(5); [,,,,]
Array(5);//  [,,,,]
Array(1,2,3,4,5);//[1,2,3,4,5]

dados[2]('Ford');
dados[1][2].cor; // azul

// Toda array herda os métodos e propriedades do protótipo do construtor Array.

const instrumentoss = ['Guitarra', 'Baixo', 'Violão']; //construção normal de um array
const carros = new Array('Corola', 'Mustang', 'Honda'); // construção de array pelo construtor do obj Array

carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11

// MÉTODOS DO OBJETO ARRAY

//Array.from(): cria um array com estruturas semelhantes a arrays
let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array

const carros = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4, //campo obrigatório para que um objeto array-like seja convertido em array. ele não fará parte do array. 
}
const carrosArray = Array.from(carros);

//Array.isArray(): verificar se uma variável é array

//MÉTODOS DO PROTOTYPE DE ARRAY
//[].length retorna número de itens (tamanho) do array (de 0 a tamanho -1);

//[].sort() - método modificador do array. Organiza o array em ordem alfabética; Não ordena números em ordem numérica, mas alfabética

//[].unshift() e [].push(): - método modificador do array. Adicionam elementos no início (unshift) ou no final (push) do array, retornando o  tamanho após a modificação.

//[].shift() e [].pop(): - método modificador do array. Removem o primeiro (shift) ou o último (pop) elemento do array, retornando o mesmo.

//[].reverse(): - método modificador do array. reverte o array, retornando o próprio array invertido.

//[].splice(iindex, remover, item1, item2,...): - método modificador do array. adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang'); // []
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

//[].copyWithin(alvo, inicio, final): - método modificador do array. a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

//[].fill(): - método modificador do array. Preenche o array com o valor passado como argumento; caso haja um segundo argumento, númerico, o mesmo será a posição a partir da qual o preenchimento ocorrerá. Caso haja um terceiro argumento, numérico, o mesmo será a posição final do preenchimento.

//[].concat(): método de acesso ao array. Concatena arrays, retornando o concatenado e não modificando os arrays originais.

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

//[].includes(): Verifica se um determinado valor está presente no array. não vê substrings; somente os valores exatos. Retorna boolean
//[].indexOf(): Verifica se um determinado valor está presente no array e retorna o index da primeira ocorrência; se não existir, retorna '-1'
//[].lastIndexOf(): Verifica se um determinado valor está presente no array e retorna o index da última ocorrência; se não existir, retorna '-1'

//[].join(separador): retorna uma string com todos os valores do array, separados pelo argumento fornecido. Se passamos uma string vazia, ele vai com todos os itens grudados; se não passarmos argumentos, ele separa com vírgulas.

const linguagenss = ['html', 'css', 'js', 'php', 'python'];
linguagens.join(); // 'html,css,js,php,python'
linguagens.join(' '); // 'html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>


//[].slice(inicio, final): retorna os itens do array começando pelo "início" e indo até o "final".
const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();
