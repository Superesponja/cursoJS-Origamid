// Liste 5 objetos nativos
Object
String
Number
Array
Function

// Liste 5 objetos do browser
Element
Window
NodeList
HTMLCollection
Document

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof document.webkitHidden !== "undefined")
  console.log("existe");
else
  console.log("não existe");

if(typeof document.webkitVisibilityState !== "undefined")
  console.log("existe");
else
  console.log("não existe");
