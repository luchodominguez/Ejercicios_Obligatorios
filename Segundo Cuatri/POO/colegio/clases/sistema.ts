import { Profesor } from "./profesores";
import { Alumno } from "./alumnos";

export class Sistema {
  private profesores: Profesor[];
  private alumnos: Alumno[];

  constructor() {}

  public setNotaAlumno(apellidoAlumno: string, pNota: number) {
    for (let alumno in this.alumnos) {
      if (alumno["apellido"] === apellidoAlumno) {
        alumno["nota"] = pNota;
        console.log(
          `La nota del alumno ${alumno["apellido"]} ${alumno["nombre"]} se ha actualizado!`
        );
        return;
      }
    }
  }

  public getAlumnos() {
    console.log("Lista de alumnos:");
    for (let alumno in this.alumnos) {
      console.log(alumno["apellido"], alumno["nombre"]);
    }
  }

  public getProfesores() {
    console.log("Lista de profesores:");
    for (let profesor in this.profesores) {
      console.log(`${profesor["apellido"]} ${profesor["nombre"]}`);
      return;
    }
  }

  public getNotaAlumno(apellidoAlumno: string) {
    for (let alumno in this.alumnos) {
      if (alumno["apellido"] === apellidoAlumno)
        console.log(`${alumno["nota"]}`);
    }
  }

  public matricularAlumno(
    nombreAlumno: string,
    apellidoAlumno: string,
    clase: number
  ) {
    new Alumno(nombreAlumno, apellidoAlumno, clase);
    console.log(
      `El alumno ${apellidoAlumno} ${nombreAlumno} fue matriculado con éxito y asignado a la clase #${clase}!`
    );
  }

  public contratarProfesor(
    nombreProfesor: string,
    apellidoProfesor: string,
    ClaseEncargado: number
  ) {
    new Profesor(nombreProfesor, apellidoProfesor, ClaseEncargado);
    console.log(
      `El profesor ${apellidoProfesor} ${nombreProfesor} ha sido contratado y asignado a la clase #${ClaseEncargado}!`
    );
  }
}
