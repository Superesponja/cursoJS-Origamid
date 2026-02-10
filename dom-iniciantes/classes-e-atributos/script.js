// Adicione a classe ativo a todos os itens do menu
  const liMenu = document.querySelectorAll('.menu a'); //adicionar diretamente ao a e não ao li.

  liMenu.forEach( li => {
    li.classList.add('ativo');
  });
  console.log(liMenu);


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
  liMenu.forEach ((li, index)=> {
    if( index !=0){
      li.classList.toggle('ativo');
    }
  });
  console.log(liMenu);

// Verifique se as imagens possuem o atributo alt
  const animais = document.querySelectorAll('.animais img');
  animais.forEach((item, index) =>{
    console.log(`a imagem ${index+1} possui alt? ${item.hasAttribute('alt')}`);    
  });
  console.log(animais);

  // Modifique o href do link externo no menu
  const linkExterno = document.querySelector('.menu a[href^="h"]');
  linkExterno.setAttribute('href', 'http://www.google.com');
  console.log(linkExterno);


