// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso
const cursos = document.querySelectorAll('section');
const vetorCursos = Array.from(cursos);

const objCursos = vetorCursos.map((curso)=>{  
    const titulo = curso.querySelector('h1').innerText; // Título
    const descricao = curso.querySelector('p').innerText; // Descrição
    const aulas = curso.getElementsByClassName('aulas')[0].innerText; // Aulas
    const horas = curso.getElementsByClassName('horas')[0].innerText //Horas

  return {    
      titulo,
      descricao,
      aulas,
      horas
  }  
}); //DICA: se você quer retornar um valor, USE MAP ao invés de forEach!!! 
console.log(objCursos);


// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

console.log(numeros.filter(num => num > 100));


// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

let temBaixo = instrumentos.some((instrumento)=>{  
  return instrumento.toLowerCase() === 'baixo';  
});
console.log(temBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let somaValores = compras.reduce((acumulador, item)=>{  
  return acumulador += +item.preco.toUpperCase().replace('R$',"").replace(',','.').trim();  
},0); // R$ 49,42
console.log(somaValores);