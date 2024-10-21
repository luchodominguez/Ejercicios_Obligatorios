/*
1) Crear un arreglo de letras e imprimirlo
2) Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él.
*/

import * as fs from "readline-sync";
import { dibujarLinea } from "../modulos/dibujarLinea";
console.clear();

const CANT: number = 5;
let usuario: string = "";
let resultado: string = "";

const NOMBRES: string[] = new Array(CANT);

function validarNombre(nombre: string): string {
  let seEncuentra: string = "";

  for (let i: number = 0; i < NOMBRES.length; i++) {
    if (NOMBRES[i] === nombre) {
      seEncuentra = `El nombre "${
        nombre[0].toUpperCase() + nombre.substring(1)
      }" se encuentra en la lista ingresada.`;
      break;
    }
    if (i + 1 === NOMBRES.length) {
      seEncuentra = `El nombre "${
        nombre[0].toUpperCase() + nombre.substring(1)
      }" no se encuentra en la lista ingresada.`;
      break;
    }
  }
  return seEncuentra;
}

//   NOMBRES.forEach((elemento) => {
//     if (nombre === elemento) {
//       seEncuentra = `El nombre "${
//         nombre[0].toUpperCase() + nombre.substring(1)
//       }" se encuentra en la lista ingresada.`;
//     } else {
//       seEncuentra = `El nombre "${
//         nombre[0].toUpperCase() + nombre.substring(1)
//       }" no se encuentra en la lista ingresada.`;
//     }
//   });

for (let i: number = 0; i < NOMBRES.length; i++) {
  NOMBRES[i] = fs
    .question(`Ingrese un nombre [${i + 1} de ${CANT}]: `)
    .toLowerCase();
}

while (usuario != "salir") {
  if (resultado === "") {
    dibujarLinea(60);
  }
  console.log(NOMBRES);
  dibujarLinea(60);

  console.log("Ingrese 'salir' para finalizar el programa");

  usuario = fs
    .question("Ingrese un nombre para validar si se encuentra en la lista: ")
    .toLowerCase();

  resultado = validarNombre(usuario);

  dibujarLinea(60, true);
  console.log(resultado);
  dibujarLinea(60, true);
}
