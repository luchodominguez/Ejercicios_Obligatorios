/*
Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar
 */
import { dibujarLinea } from "../modulos/dibujarLinea";
console.clear();

// * Array con resultado impar:
// const NUMEROS: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16, 87];

// * Array con resultado par:
const NUMEROS: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

let resultado: string = "";
let resolucion: number = 0;
let esPar: boolean = false;

function parImpar(numero: number): boolean {
  return numero % 2 === 0;
}

function numeroMasGrande(): number {
  let masGrande: number = 0;
  let esPar: boolean = false;
  for (let i: number = 0; i < NUMEROS.length; i++) {
    if (NUMEROS[i] > masGrande) {
      masGrande = NUMEROS[i];
    }
  }
  return masGrande;
}

resolucion = numeroMasGrande();

esPar = parImpar(resolucion);

if (esPar) {
  resultado = `\t  El numero mas grande es el ${resolucion}, el cual es un numero par.`;
} else {
  resultado = `\t  El numero mas grande es el ${resolucion}, el cual es un numero impar.`;
}

dibujarLinea(80, true);
console.log(resultado);
dibujarLinea(80, true);
