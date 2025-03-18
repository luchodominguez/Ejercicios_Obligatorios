import * as fs from "readline-sync";
import { dibujarLinea } from "../Modulos/dibujarLinea";
console.clear();

let user: string;
let cantidad: number;

const paragraph: string = `
  Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. 
  Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? 
  ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? 
  Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. 
  A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. 
  Las cosas cambiaron después, claro. Cambiaron tanto.`;

//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
  return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

//completar la funcion para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {
  let resultado: any;
  fullText = fullText.toLowerCase();
  resultado = fullText.split(searchTerm.toLowerCase());
  return resultado.length - 1;
}
console.log(paragraph);

dibujarLinea(160, true);

user = fs.question(
  "Ingrese una palabra a buscar dentro del texto previamente mostrado: "
);

if (isTextInPara(paragraph.toLowerCase(), user)) {
  cantidad = howManyTextInPara(paragraph, user);
  console.log(
    `\n\nLa palabra "${user}" se encuentra en el texto un total de`,
    cantidad,
    "veces."
  );
} else {
  console.log(`\n\nLa palabra "${user}" no se encuentra en el texto.`);
}
