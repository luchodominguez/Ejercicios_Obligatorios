/*
### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. 
Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta. 
Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate 
(no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, 
luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.
*/
import * as fs from "readline-sync";
console.clear();

let sabor: number = 0;
let presentacion: number = 0;
let dificultad: number = 0;
let resultado: number = 0;

// let aux: number = 0;
// let tortaPuntaje: number = 0;
// let aux2: number = 0;
// let tortaPuntaje2: number = 0;
// let puntajeMasAlto: number = 0;

const CANT_PARTICIPANTES: number = fs.questionInt(
  "Ingrese la cantidad de participantes: "
);

function dibujarLinea(cantidad: number, doble: boolean = false) {
  let linea: string = "";
  for (let i: number = 0; i <= cantidad; i++) {
    if (!doble) {
      linea += "-";
    } else {
      linea += "=";
    }
  }
  console.log(`\n${linea}\n`);
}

// Función que recibe 3 puntajes en 1 y 5, los suma y retorna el total
function calcularPuntaje(
  sabor: number,
  presentacion: number,
  dificultad: number
) {
  let total: number;
  total = sabor + presentacion + dificultad;
  return total;
}

// function determinarGanador(
//   torta1: number,
//   tortaPuntaje: number,
//   torta2: number,
//   tortaPuntaje2: number,
//   puntajeAlto: number = 0
// ) {
//   let resultado: number;
//   if (tortaPuntaje > tortaPuntaje2) {
//     if (tortaPuntaje > puntajeAlto) {
//       resultado = torta1;
//       return resultado;
//     } else {
//       return puntajeAlto;
//     }
//   } else {
//     if (torta2 > puntajeAlto) {
//       resultado = torta2;
//       return resultado;
//     } else {
//       return puntajeAlto;
//     }
//   }
// }

// Pidiendo las puntuaciones de sabor, presentación y dificultad.
while (sabor === 0 && presentacion === 0 && dificultad === 0) {
  for (let i: number = 1; i <= CANT_PARTICIPANTES; i++) {
    dibujarLinea(60, true);
    console.log(`Ingrese el puntaje de la torta numero ${i}`);

    console.log("");
    dibujarLinea(50);
    sabor = fs.questionInt("-> Inserte el puntaje del sabor: ");
    dibujarLinea(50);
    presentacion = fs.questionInt("-> Inserte el puntaje de la presentacion: ");
    dibujarLinea(50);
    dificultad = fs.questionInt("-> Inserte el puntaje de la dificultad: ");
    dibujarLinea(60);

    if (
      sabor < 1 ||
      sabor > 5 ||
      presentacion < 1 ||
      presentacion > 5 ||
      dificultad < 1 ||
      dificultad > 5
    ) {
      sabor = 0;
      presentacion = 0;
      dificultad = 0;
      continue;
    }
    resultado = calcularPuntaje(sabor, presentacion, dificultad);

    // if (i % 2 === 0) {
    //   aux2 = i;
    //   tortaPuntaje2 = resultado;
    // } else {
    //   aux = i;
    //   tortaPuntaje = resultado;
    // }

    // if (puntajeMasAlto != 0) {
    //   puntajeMasAlto = determinarGanador(
    //     aux,
    //     tortaPuntaje,
    //     aux2,
    //     tortaPuntaje2,
    //     puntajeMasAlto
    //   );
    // } else {
    //   puntajeMasAlto = determinarGanador(
    //     aux,
    //     tortaPuntaje,
    //     aux2,
    //     tortaPuntaje2
    //   );
    // }

    console.log(
      `\tEl puntaje total de la torta numero ${i} es: ${resultado} pts`
    );
    if (i === CANT_PARTICIPANTES) {
      // console.log(
      //   `El ganador del concurso es la Torta número ${puntajeMasAlto}`
      // );
      dibujarLinea(60, true);
    }
  }
}
