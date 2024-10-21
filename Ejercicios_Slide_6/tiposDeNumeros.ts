/*
• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
 */
import * as fs from "readline-sync";
import { dibujarLinea } from "../modulos/dibujarLinea";
console.clear();

const DIM: number = fs.questionInt("Ingrese la dimension del arreglo: ");
dibujarLinea(60);
const NUMEROS: number[] = new Array(DIM);

for (let i: number = 0; i < NUMEROS.length; i++) {
  NUMEROS[i] = fs.questionInt(`Ingrese un numero [#${i + 1} de ${DIM}]: `); // 0, -7, -9, 1, 0, 0
}

function positivosNegativosCeros() {
  let resultado: string = "";
  let positivos: number = 0;
  let negativos: number = 0;
  let ceros: number = 0;
  for (let i: number = 0; i < NUMEROS.length; i++) {
    if (NUMEROS[i] < 0) {
      negativos++;
    } else if (NUMEROS[i] === 0) {
      ceros++;
    } else {
      positivos++;
    }
  }
  resultado = `\t\t    - Positivos: ${positivos}
  \t\t    - Negativos: ${negativos}
  \t\t    - Ceros: ${ceros}`;
  return resultado;
}

dibujarLinea(60, true);
console.log(positivosNegativosCeros());
dibujarLinea(60, true);
