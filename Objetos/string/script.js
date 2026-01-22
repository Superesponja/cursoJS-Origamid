// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let totalTaxas = 0;
let totalRecebimentos = 0;

transacoes.forEach((transacao) =>{
  
  if(transacao.descricao.toLocaleLowerCase().includes('recebimento'))
    totalRecebimentos += parseFloat(transacao.valor.slice(3).trim(),2);

  if(transacao.descricao.toLocaleLowerCase().includes('taxa'))
    totalTaxas += +transacao.valor.slice(3).trim(),2; // o "+" antes de uma variável string que contenha um número dentro, converte essa string em número de fato.
})

console.log(totalTaxas.toFixed(2));
console.log(totalRecebimentos.toFixed(2));



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

let novoHtml = html.split("span>");
novoHtml = novoHtml.join("a>");
console.log(novoHtml);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length-1]);

// Retorne o total de taxas
const transacoess = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let contadorTaxa = 0;
transacoess.forEach((item)=>{
  if(item.toLowerCase().includes('taxa'))
    contadorTaxa +=1;
})
console.log(contadorTaxa);


