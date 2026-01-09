function activeTab(){
  /*
  O primeiro passo para criarmos a navegação por tabs será a criação de uma forma de referenciar o html com o js, que seja desvinculada das classes css. Essas classes serão sempre inicadas com 'js', indicando sua finalidade.
  */

  // Em seguida, selecionamos os elementos que serão manipulados
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  //As ações seguintes serão envoltas em um 'if', que verificará se as tabs existem na página atual.
  if (tabContent.length && tabMenu.length){
    //Tornaremos a primeira section ativa, para o conteúdo relacionado à priemira foto seja exibido por padrão.
    tabContent[0].classList.add('ativo');
    //O próximo passo, será criar uma função que adicione uma tag à section correspondente ao número ao item selecionado, permitindo identifica-lo e destaca-lo dos demais 
    function activeTab(index){
      tabContent.forEach((section)=>{
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo');
    }

    //Agora, vamos criar um evento de click nas imagens, que gatilhará a função criada acima com o argumento do número correspondente:
    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', () => {//como vimos, o argumento de um addEventListener, é uma função callback, que não recebe argumentos personalizados. sendo assim, usaremos essa função vazia para acionar a função que desejamos, transimitindo o argumento necessário.
        activeTab(index);
      });
    });
  }
  //o próximo ajuste será no css, que ocultará o conteúdo sem a classe 'ativo' e só exibirá o conteúdo com a tag 'ativo'.
  //foi criada um stilo para js-tabcontent, tornando seu conteúdo 'none' e um para o js-tabcontent.ativo, que torna o conteúdo visível. Além disso, também foi
  //criada uma animação de transição entre eles.

  //por fim, criaremos um script no head da index, que verificará se o javascript está ativado no dispositivo do usuário. Caso o js esteja ativo, o site funcionará normalmente como programado. Caso contrário, os estilos que ocultam o conteúdo serão omitidos do site, permitindo ao usuário, minimamente ver os textos, ainda que com aparência quebrada.
}

function initAccordeon(){
  
  /* ACCORDEON LIST
  Accordeon list é o tipo de navegação onde um conteúdo (geralmente, uma resposta) fica até que se clique em um outro conteúdo (geralmente, uma pergunta), que o invoca. Comumente utilzado em FAQs, como no nosso exemplo.
*/
  //Primeiramente, adicionaremos a classe 'js-accordeon' à 'dl' 'faq', para que consigamos referencia-lo.
  //Então, criamos uma função para que ao clicar nas 'dts' do fac, se adicione a tag 'ativo', tanto nas dts, quanto nas dls.
  const accordeonList = document.querySelectorAll('.js-accordeon dt');
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
//SCROLL SUAVE E LINKS INTERNOS
/** O próximo passo, nesse módulo do curso, será criar uma rolagem suave do menu aos seus itens na mesma página, ou seja, os links internos.
 * Isso é útil pois a transição brusca que é o funcionamento padrão dos links passa a impressão de que fomos redirecionados para outra página. A rolagem suave acaba com isso, realizando uma transição lenta e perseptível 
 * 
 */

function initScrollSuave(){
  const linksinternos = document.querySelectorAll('.js-menu a[href^="#"');

  function scrollToSection(event){
    //nesta função, nós selecionamos todos os links internos e removemos o comportamento padrão deles.
    // Além disso, selecionamos as sections correspondesdes ao link clicado.
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
      
    /**FORMA ALTERNATIVA
     * Esse método rola a tela, no eixo (x,y), permitindo a opção de behavior.
     * const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    })*/

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    console.log(section);
  } 

  linksinternos.forEach((link)=>{
    link.addEventListener('click', scrollToSection);
  })
}
//ANIMAÇÃO AO SCROLL
/**
 * O último passo, neste módulo, será animar as sections após a rolagem para determinada secction
 */
function initAnimacaoScroll(){

  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length){
    const windowMetade = window.innerHeight * 0.6;
    
    function animaScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade)<0;
        
        if(isSectionVisible)
          section.classList.add('ativo');
        else
          section.classList.remove('ativo');    
      })
    }  

    window.addEventListener('scroll', animaScroll);
    animaScroll();
  }
}


activeTab();
initAccordeon();
initScrollSuave();
initAnimacaoScroll();