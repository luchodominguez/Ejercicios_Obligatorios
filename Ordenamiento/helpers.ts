//Funcion para crear un numero ramdom entre 0 y numAzar
 function Azar(numAzar: number): number {
    return Math.floor(Math.random() * numAzar);
}

//Funcion para cargar el arreglo
export function cargar(arreglo: number[], cantidad: number, numAzar: number) {
    for (let i: number = 0; i < cantidad; i++) {
        arreglo[i] = Azar(numAzar);
    }
}

//En esta funcion mostramos los valores del arreglo
export function escribirEnUnaLinea(arreglo: number[], cantidad: number) {

    let vector: string = "";
    for (let i: number = 0; i < cantidad; i++) {
        vector += `${arreglo[i]} `;
    }
    console.log(vector);
}

//En esta funcion vamos a poder cambiar las posiciones "i" y "j"
export function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

//Compara los valores de las posiciones "i" y "j" del arreglo que pasamos por parametro
export function comparar(arreglo: number[], i: number, j: number): number {
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}
//Compara los valores de las posiciones "i" y "j" del arreglo que pasamos por parametro
export function compararDecre(arreglo: number[], i: number, j: number): number {
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] > arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}