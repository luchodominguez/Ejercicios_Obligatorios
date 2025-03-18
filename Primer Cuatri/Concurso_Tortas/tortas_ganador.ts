import * as fs from "readline-sync";
console.clear();

let sabor: number = 0;
let presentacion: number = 0;
let dificultad: number = 0;
let resultado: number = 0;

let ganador: number = 0;
let puntajeGanador: number = 0;
let ganadorEmpate: number = 0;
let puntajeEmpate: number = 0;

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
  numeroTorta: number,
  sabor: number,
  presentacion: number,
  dificultad: number
) {
  /*
   * Función que recibe 3 puntajes entre 1 y 5, los suma, analiza si es el más alto que el
   * puntaje total almacenado y retorna el total
   */
  let total: number;
  total = sabor + presentacion + dificultad;
  validarGanador(numeroTorta, total);
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

function validarGanador(numeroTorta: number, total: number) {
  /*
   * Verifico si el puntaje de los nuevos puntajes agregados es más alto que el que está guardado.
   * Si es así, re-asigno las variables, si hay empate, las almaceno en otras variables
   */
  if (total > puntajeGanador) {
    puntajeGanador = total;
    ganador = numeroTorta;
  } else if (total === puntajeGanador) {
    ganadorEmpate = numeroTorta;
    puntajeEmpate = total;
  }
}

function validarEmpate() {
  // * Verifico si hubo un empate y retorno el string a imprimir al final
  let retorno: string;
  if (puntajeGanador != puntajeEmpate) {
    retorno = `\t\t\tEl ganador del concurso es la torta número ${ganador} con un puntaje de ${puntajeGanador}`;
  } else {
    retorno = `\t\tDebido a un empate, las tortas ganadoras son la numero ${ganador} y la numero ${ganadorEmpate} con un puntaje de ${puntajeGanador}`;
  }
  return retorno;
}

/*
 * Pidiendo las puntuaciones de sabor, presentación y dificultad, verificando que estén en el rango de 1 y 5 para luego imprimir el/los ganadores
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
  console.log();

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

  resultado = calcularPuntaje(i, sabor, presentacion, dificultad);

  if (i === CANT_PARTICIPANTES) {
    let validacion = validarEmpate();
    dibujarLinea(120, true);
    console.log(validacion);
    dibujarLinea(120, true);
  }
}
