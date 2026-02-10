/*
//LIDANDO COM DIMENSÕES E DISTANCIAS
//HEIGHT E WIDTH 
// Estas são propriedades e métodos dos objetos Element e HTMLElement. a maioria delas são Read Only.

  const section = document.querySelector('.animais');
  section.clientHeight; // recebe o valor da altura do elemento, mais seu padding.
  section.offsetHeight; // recebe o valor da altura do elemento, mais seu padding e mais a borda.
  section.scrollHeight; // recebe o valor da altura do elemento, mais seu padding, sua borda e o tamnho dele incluindo o valor ocultado pelo scroll, caso tenha.
// os mesmos comandos (client, offset e scrool) funcionam para capturar as larguras, substituindo-se o 'height' pelo 'width'.
//Também é possível aferir a distância entre um elemento e o topo da página, ou a margem esquerda, através dos comandos offsetTop e offsetLeft.

//Método getBoundingClientRect()
// método usado em um elemento, para se receber um objeto, contendo diversas medidas do mesmo, como por exemplo:
  const primeiroH2 = document.querySelector('h2');
  const rect = primeiroH2.getBoundingClientRect();
  console.log(rect.height); //retorna a altura do elemento.
  console.log(rect.width); // retorna a largura do elemento.
  console.log(rect.left); // retorna a distância do elemento para a margem esquerda da área útil da página. Coincide com o rect.x, que retorna a cordenada x do elemento.
  console.log(rect.right); // retorna a distância do elemento para a margem direta.
  console.log(rect.top); // retorna a distância do topo do elemento para o topo da área útil da página. Coincide com o rect.y, que retorna a cordenada y do elemento.
  console.log(rect.bottom); // retorna a distância da borda inferior do elemento para o topo da área útil da página.

//WINDOW
// elemento usado para se saber dados sobre o tamanho da tela do usuário.
  window.innerWidth // retorna o valor da largura da tela de exibição da página do usuário;
  window.outerWidth // retorna o valor da largura da tela totol do usuário, incluindo a aba de console, por exemplo;
  window.innerHeight // retorna o valor da altura da tela de exibição da página do usuário;
  window.outerHeight // retorna o valor da altura da tela totol do usuário, incluindo a barra de navegação, as abas e a borda do navegador, por exemplo;

  window.pageYOffset // retorna a distância total (px) do scroll vertical
  window.pageXOffset // retorna a distância total (px) do scroll horizontal

// matchMedia();
// Utilizado para verificar a largura do browser.
  const small = window.matchMedia('(max-width: 600px)').matches; //  O argumento passado é um 'Media Query' do CSS. Retorna uma propriedade booleana matches.
  if(small){
    console.log('tela menor que 600px');
  } else {
    console.log('tela maior que 600px');
  }

DICAS:
- Selecione o elemento no inspetor (dom) (do navegador)
- Abra o console e digite $0 para selecionar o mesmo
- Os elementos selecionados anteriormente são $1, $2 ...
*/