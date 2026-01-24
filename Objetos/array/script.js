const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
let primeiroValor = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
let ultimoValor = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");

console.log(primeiroValor, ultimoValor, comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Inverta a ordem dos estudantes
estudantes.reverse();

console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
if(estudantes.includes("Joana"))
  console.log("Joana está entre os estudantes");
else
  console.log("Joana não está entre os estudantes");
// Verifique se Juliana faz parte dos estudantes
if(estudantes.includes("Juliana"))
  console.log("Juliana está entre os estudantes");
else
  console.log("Juliana não está entre os estudantes");


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section>');
html = html.join('ul>');
html = html.split('div>');
html = html.join('li>');
//também é possível se encadear todas as alterações em uma mesma linha, tendo em vista que os retornos de todos eles são os vetores modificados:
//html.split('section>').join('ul>').split('div>').join('li>');
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosOriginal = carros.slice();//assim, ele retorna uma cópia do vetor, sem apontar para o mesmo.
carros.pop();
console.log(carros);
console.log(carrosOriginal);