//OBJETOS NATIVOS, HOSTS E USERS
// EM JS, os objetos podem ser de três tipos: Nativo, Host e User.

//OBJETOS NATIVOS
//São os objetos definidos pela própria linguagem, essenciais ao seu funcionamento. Todo browser ou executar de JS reconhecerá esses objetos, pois eles são inerentes à linguagem.
//Ex.: Object //native code

//OBJETOS HOST
// Objetos que dependendo do host (local onde o JS está sendo executado), existirão por default ou não. 
// Ex.: NodeList;
// - Se o código for executado em um navegador, ele aparecerá como "native code"; isso porquê o host (browser) implementa este objeto por default;
// - Se o código, porém, for executado em um terminal node JS, você receberá o erro: "NodeList is not defined", pois este host (nodeJS) não implementa este objeto por default.
// Em geral, os objetos relacionados à HTML (NodeList, HTMLCollection, Element, etc) serão implementados HOST, quando o js rodar em um navegador

//OBJETOS USER
//São objetos definidos pelo próprio usuário, sendo ele mesmo escrevendo o objeto "na unha", ou importando de bibliotecas externas
//Ex.: 
//const Pessoa = {
//  nome: "Renan"
//} // Objeto User 

//Este entendimento é importante para se programar em diferentes ambientes. Nem sempre todos os objetos estarão disponíveis.
//Além disso, mesmo considerando diferentes versões do mesmo host, pode haver diferenças de objetos suportados;
//Ex.:
// - Browsers diferentes: eventualmente os browser com motor chromium implementam coisas que os da Mozilla não implementam, e vice-versa
// - Versões de Browsers: Browser mais antigos podem não possuir todos os métodos, objetos e propriedades dos mais novos
//Host e Native Objects
//Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6), não possuem o método find de Array.

/*
//Versões de JavaScript
ECMA
Organização responsável por definir padrões para tecnologias. ECMAScript é o padrão de JavaScript.

ECMAScript 2015 ou ES6
ES é uma abreviação de ECMAScript, ES6 é a sexta versão do ECMAScript, que foi lançada em 2015. Por isso ECMAScript 2015 é igual a ES6. A partir da ES6, existe uma tendência anual de atualizações. ECMAScript 2015, 2016, 2017, 2018 e Next.

//Engine
Existem diversas engines que implementam o ECMAScript como V8, SpiderMonkey, Chakra, JavaScriptCore e mais.


Bibliotecas
Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar
funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.

Verificar se Existe
O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined.
Ou seja, quando não for undefined quer dizer que existe.
if (typeof Array.from !== "undefined")
if (typeof NodeList !== "undefined");


API
Application Programming Interface, é uma interface de software criada para a interação com outros softwares.
Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser.

* */
