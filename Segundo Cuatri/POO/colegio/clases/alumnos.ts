export class Alumno {
  private nombre: string;
  private apellido: string;
  private nota: number;
  private clase: number;

  constructor(pNombre: string, pApellido: string, pClase: number) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.clase = pClase;
    this.nota = 0;
  }

  public getNota() {
    console.log(`Tu nota es: ${this.nota}`);
  }

  public getNombre() {
    console.log(`${this.apellido} ${this.nombre}`);
  }

  public getClase() {
    console.log(`${this.clase}`);
  }
}
