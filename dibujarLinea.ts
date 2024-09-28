export function dibujarLinea(cantidad: number, doble: boolean = false) {
  /*
  * Función que dibuja una linea a partir de una cantidad ingresada.
  - También se le puede ingresar "true" para crear una línea doble (=) en vez de una simple (-). 
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
