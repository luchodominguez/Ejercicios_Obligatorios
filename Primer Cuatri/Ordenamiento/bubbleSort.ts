import {
  cargar,
  escribirEnUnaLinea,
  intercambiar,
  compararDecre,
} from "./helpers";
console.clear();

//Aplica el algoritmo Bubble sort
function burbuja(arreglo: number[], cantidad: number) {
  for (let i: number = 0; i < cantidad; i++) {
    for (let j: number = 0; j < cantidad - 1; j++) {
      if (compararDecre(arreglo, j, j + 1) == 1) {
        intercambiar(arreglo, j, j + 1);
      }
    }
  }
}

let limite: number = 10;
let arreglo: number[] = new Array(limite);
cargar(arreglo, limite, 100);
escribirEnUnaLinea(arreglo, limite);
burbuja(arreglo, limite);
escribirEnUnaLinea(arreglo, limite);

// console.log("Ordenado con el metodo sort") //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// let arregloNum:number[] = new Array(10);
// cargar(arregloNum, limite, 100);
// escribirEnUnaLinea(arregloNum, limite);
// arregloNum.sort();
// escribirEnUnaLinea(arregloNum, limite);
