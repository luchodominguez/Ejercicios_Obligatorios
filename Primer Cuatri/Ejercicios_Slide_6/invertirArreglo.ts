/*
• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
*/

import * as fs from "readline-sync";
import { dibujarLinea } from "../Modulos/dibujarLinea";
console.clear();

const DIM: number = fs.questionInt("Ingrese la dimension del arreglo: ");
dibujarLinea(60);
const NUMEROS: number[] = new Array(DIM);

for (let i: number = 0; i < NUMEROS.length; i++) {
  NUMEROS[i] = fs.questionInt(`Ingrese un numero (#${i + 1} de ${DIM}): `);
}

dibujarLinea(60, true);
console.log("Array direccion correcta:");
console.log(NUMEROS);
dibujarLinea(60);

console.log("Array direccion invertida:");
console.log(NUMEROS.reverse());
dibujarLinea(60, true);
