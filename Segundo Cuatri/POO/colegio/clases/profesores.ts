import { Alumno } from "./alumnos";

export class Profesor {
  private nombre: string;
  private apellido: string;
  private claseEncargado: number;
  private alumnos: Alumno[];

  constructor(pNombre: string, pApellido: string, pClaseEncargado: number) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.claseEncargado = pClaseEncargado;
  }

  public verListaAlumnos() {
    console.log("===========================================");
    console.log(`      Listado de alumnos clase ${this.claseEncargado}`);
    for (let alumno in this.alumnos) {
      if (alumno["clase"] === this.claseEncargado) {
        console.log(
          `${alumno["apellido"]} ${alumno["nombre"]}, nota: ${alumno["nota"]}`
        );
      }
    }
    console.log("===========================================");
  }

  public getAlumno(apellidoAlumno: string) {
    if (apellidoAlumno in this.alumnos["apellido"]) {
      if (this.alumnos[apellidoAlumno]["clase"] === this.claseEncargado)
        console.log(`${this.alumnos[apellidoAlumno]}`);
    } else {
      console.log(`El alumno ${apellidoAlumno} no se encuentra en tu clase.`);
    }
  }

  public getNombre() {
    console.log(`${this.apellido} ${this.nombre}`);
  }
}
