import * as fs from "readline-sync";
console.clear();

let sabor: number = 0;
let presentacion: number = 0;
let dificultad: number = 0;
let resultado: number = 0;

/*
* Variables creadas para intentar realizar la verificación del puntaje mayor con determinarGanador()

let aux: number = 0;
let tortaPuntaje: number = 0;
let aux2: number = 0;
let tortaPuntaje2: number = 0;
let puntajeMasAlto: number = 0;
*/

const CANT_PARTICIPANTES: number = fs.questionInt(
  "Ingrese la cantidad de participantes: "
);

function dibujarLinea(cantidad: number, doble: boolean = false) {
  /*
  * Función que dibuja una linea a partir de una cantidad ingresada.
  - También se le puede ingresar "true" para crear una línea doble (=) en vez de simple (-). 
  - (agregué un parámetro ya pre-asignado, algo que no explicaron, pero lo hice ya que es algo únicamente decorativo)
  */
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

function calcularPuntaje(
  sabor: number,
  presentacion: number,
  dificultad: number
) {
  // * Función que recibe 3 puntajes entre 1 y 5, los suma y retorna el total
  let total: number;
  total = sabor + presentacion + dificultad;
  return total;
}

function validarPuntos(puntaje: number) {
  /*
  * Función que recibe un puntaje y verifica si está en el rango entre 1 y 5.
  - Si está en el rango, retorna el mismo puntaje que tenía. Si no está en el rango, retorna 0.
  */
  if (puntaje <= 5 && puntaje >= 1) {
    return puntaje;
  } else {
    puntaje = 0;
    return puntaje;
  }
}

/*
* Intento de crear la función determinarGanador()

function determinarGanador(
  torta1: number,
  tortaPuntaje: number,
  torta2: number,
  tortaPuntaje2: number,
  puntajeAlto: number = 0
) {
  let resultado: number;
  if (tortaPuntaje > tortaPuntaje2) {
    if (tortaPuntaje > puntajeAlto) {
      resultado = torta1;
      return resultado;
    } else {
      return puntajeAlto;
    }
  } else {
    if (torta2 > puntajeAlto) {
      resultado = torta2;
      return resultado;
    } else {
      return puntajeAlto;
    }
  }
}
*/

/*
* Pidiendo las puntuaciones de sabor, presentación y dificultad, verificando que estén en el rango de 1 y 5 para luego imprimir el total de cada uno
- Sé que no era lo pedido, pero quería retornar algo ya que no pude resolver el ejercicio.
*/
for (let i: number = 1; i <= CANT_PARTICIPANTES; i++) {
  dibujarLinea(120, true);
  console.log(`Ingrese el puntaje de la torta numero ${i}`);

  console.log("");
  dibujarLinea(50);
  sabor = fs.questionInt("-> Inserte el puntaje del sabor: ");
  dibujarLinea(50);
  presentacion = fs.questionInt("-> Inserte el puntaje de la presentacion: ");
  dibujarLinea(50);
  dificultad = fs.questionInt("-> Inserte el puntaje de la dificultad: ");
  dibujarLinea(60);

  sabor = validarPuntos(sabor);
  presentacion = validarPuntos(presentacion);
  dificultad = validarPuntos(dificultad);

  if (sabor === 0 || presentacion === 0 || dificultad === 0) {
    dibujarLinea(120, true);
    console.log(
      `Uno de los puntajes ingresados no está en el rango de 1 y 5. Ingrese nuevamente los puntajes de la torta numero ${i}.`
    );
    i--;
    sabor = 0;
    presentacion = 0;
    dificultad = 0;
    continue;
  }

  resultado = calcularPuntaje(sabor, presentacion, dificultad);

  /*
  * Intento de llamar a la función determinarGanador() intentando separar los puntajes totales de los participantes y verificando el más alto

  if (i % 2 === 0) {
    aux2 = i;
    tortaPuntaje2 = resultado;
  } else {
    aux = i;
    tortaPuntaje = resultado;
  }

  if (puntajeMasAlto != 0) {
    puntajeMasAlto = determinarGanador(
      aux,
      tortaPuntaje,
      aux2,
      tortaPuntaje2,
      puntajeMasAlto
    );
  } else {
    puntajeMasAlto = determinarGanador(
      aux,
      tortaPuntaje,
      aux2,
      tortaPuntaje2
    );
  }
  */

  console.log(
    `\tEl puntaje total de la torta numero ${i} es: ${resultado} pts`
  );
  if (i === CANT_PARTICIPANTES) {
    /*
    console.log(
      `El ganador del concurso es la Torta número ${puntajeMasAlto}`
    );
    */
    dibujarLinea(60, true);
  }
}
