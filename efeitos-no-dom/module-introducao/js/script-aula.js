//MODULE
//Módulos são uma forma de organização do código de JS muito utlizada. 
/** A separação do código em módulos facilita:
 A MANUTENÇÃO: fica mais fácil saber onde está o problema
 O COMPARTILHAMENTO: fica mais fácil saber o que enviar para os outros
  
  
 Para fazer uso da função, basta adicionar a "type='module'" na tag 'script' do HTML.
 a partir daí nós podemos importar códigos para nossa página HTML ou exportar função que criamos em arquivos separados para o arquivo principal:
 <script type="module" src="js/script.js"></script>
 // arquivo scroll-suave.js
      export default function scrollSuave() {
        ...
      };
      // arquivo script.js
        import scrollSuave from './scroll-suave.js';
        scrollSuave();

 * NAMED EXPORT
 Além da exportação Default, usada para exportar apenas UMA função por módulo, podemos exportar mais de uma. Neste caso, nós colocamos 'export' antes de todas as funções que serão exportadas, porém, omitimos a palavra 'default'. 
  Para que esse tipo de funcione, na hora da importação, o nome da função deve estar exatamente igual ao nome usado no arquivo de exportação e deve estar entre { }. Quando usamos o DEFAULT, podemos usar o nome que quisermos, já que somente uma função está sendo exportada. Apesar disso, podemos modificar o nome da função importada da seguinte forma:

      // arquivo scroll.js
          export function scrollSuave() {
            ...
          };
          export function scrollAnimacao() {
            ...
          };

      // arquivo script.js
          import { scrollSuave, scrollAnimacao } from './scroll.js';
          scrollSuave();
          scrollAnimacao();

      // Importe todos os valores em um objeto
          import * as scroll from './scroll.js';
          scroll.scrollSuave();
          scroll.scrollAnimacao();
  EMBORA seja possível importar/exportar mais de uma função de um arquivo, a boa prática nos recomenda fazermos uma exportação por arquivo, ou seja, da forma mais modularizada possível.

  A exportação funciona, não somente para funções, mas para variáveis, classes, etc.
// arquivo configuracao.js
    export function scrollSuave() {};
    export const ano = 2000;
    export const obj = {nome: 'Ford'};
    export const str = 'Frase';
    export class Carro {};

// arquivo script.js
 

****** CARACTERÍSITICAS DO MODULE *******
STRICT MODE
'use strict' por padrão em todos os arquivos
VARIÁVEIS NO MODULE APENAS
As variávies somente têm escopo do módulo. Somente aquilo que é exportado é visível fora do módulo.

THIS FORA DE UM OBJETO FAZ REFEÊNCIA À UNDEFINIED AO INVÉS DE WINDOW

ASSÍNCRONO
Carrega todos os módulos ao mesmo tempo, não esperando que um carregue para carregar os demais.

*********USE STRICT**********
- Não permite o uso de variáveis globais
- Não permite apagar coisas que não podem ser apagadas ex.: delete Array.prototype
- Não permite a alteração de propriedades/métodos protegidos contra escrita
- Não permite a declaração de palavras reservadas como nomes de funções ou variáveis

 */
