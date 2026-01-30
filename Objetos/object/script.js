// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce

const p = document.querySelectorAll('p'); //seleciona os parágrafos da section
console.log(p);

let somaChar = Array.prototype.reduce.call(p, (somatorio,paragrafo) => {  
  
  return somatorio + paragrafo.innerText.length; //soma os caracteres
},0); //1343

console.log(`O número total de caracteres é: ${somaChar}.`)


// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.
function retornaHTML(tag, classe, conteudo){
  const elementoHTML = document.createElement(tag);
  classe ? elementoHTML.classList.add(classe) : '';
  conteudo ? elementoHTML.innerHTML = conteudo : null;
  return elementoHTML;
};

// Crie uma nova função utilizando a anterior como base. Essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico
const retornaH1 = retornaHTML.bind(null,"h1","titulo");
