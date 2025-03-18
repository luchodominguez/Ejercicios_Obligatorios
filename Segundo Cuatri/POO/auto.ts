export class Auto {
  marca: string;
  modelo: string;
  anio: number;

  constructor(pMarca: string, pModelo: string, pAnio: number) {
    this.marca = pMarca;
    this.modelo = pModelo;
    this.anio = pAnio;
  }

  mostrarAuto(): void {
    console.log(
      `- Marca: '${this.marca}' - Modelo: '${this.modelo}' - Año: ${this.anio}`
    );
  }

  acelerar(): void {
    console.log(`El auto '${this.marca} ${this.modelo}' está acelerando...`);
  }

  frenar(): void {
    console.log(`El auto '${this.marca} ${this.modelo}' está frenando...`);
  }
}
