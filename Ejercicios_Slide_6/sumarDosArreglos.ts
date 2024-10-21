/*
• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/
import * as fs from "readline-sync";
import { dibujarLinea } from "../modulos/dibujarLinea";
console.clear();

const DIM: number = 6;
const ARREGLO_1: number[] = new Array(DIM);
const ARREGLO_2: number[] = new Array(DIM);
const RESULTADOS: number[] = new Array(DIM);

let arreglo1: boolean = false;
let arreglo2: boolean = false;

for (let i: number = 0; i < ARREGLO_1.length; i++) {
  ARREGLO_1[i] = fs.questionInt(
    `Ingrese un numero para el arreglo 1 [${i + 1} de ${DIM}]: `
  );
}

dibujarLinea(60);

for (let i: number = 0; i < ARREGLO_2.length; i++) {
  ARREGLO_2[i] = fs.questionInt(
    `Ingrese un numero para el arreglo 2 [${i + 1} de ${DIM}]: `
  );
}

for (let i: number = 0; i < RESULTADOS.length; i++) {
  RESULTADOS[i] = ARREGLO_1[i] + ARREGLO_2[i];
}
dibujarLinea(60, true);
console.log("Arreglo 1:");
console.log(ARREGLO_1);
dibujarLinea(60);

console.log("Arreglo 2:");
console.log(ARREGLO_2);
dibujarLinea(60);

console.log("Resultado de la suma entre ARREGLO_1 y ARREGLO_2:");
console.log(RESULTADOS);
dibujarLinea(60, true);
