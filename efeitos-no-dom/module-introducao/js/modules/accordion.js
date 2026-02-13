export default function initAccordeon(){
  
  /* ACCORDEON LIST
  Accordeon list é o tipo de navegação onde um conteúdo (geralmente, uma resposta) fica até que se clique em um outro conteúdo (geralmente, uma pergunta), que o invoca. Comumente utilzado em FAQs, como no nosso exemplo.
*/
  //Primeiramente, adicionaremos a classe 'js-accordeon' à 'dl' 'faq', para que consigamos referencia-lo.
  //Então, criamos uma função para que ao clicar nas 'dts' do fac, se adicione a tag 'ativo', tanto nas dts, quanto nas dls.
  const accordeonList = document.querySelectorAll('[data-anime="accordeon"] dt');
  const activeClass = 'ativo';
  if(accordeonList.length){
    accordeonList[0].classList.add(activeClass);
    accordeonList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordeon() {
      this.nextElementSibling.classList.toggle(activeClass);
      this.classList.toggle(activeClass);
    }

    accordeonList.forEach((item)=>{
      item.addEventListener('click', activeAccordeon);
    })
  }
}