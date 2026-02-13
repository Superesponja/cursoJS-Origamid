export default function initScrollSuave(){
  const linksinternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"');

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