import { Profesor } from "./clases/profesores";
import { Alumno } from "./clases/alumnos";
import { Sistema } from "./clases/sistema";

// Alumnos

interface AlumnoInterface {
  nombre: string;
  apellido: string;
  clase: number;
}

let alumnos: AlumnoInterface[] = [
  {
    apellido: "Pérez",
    nombre: "Juan",
    clase: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "Gómez",
    nombre: "María",
    clase: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "Fernández",
    nombre: "Carlos",
    clase: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "Martínez",
    nombre: "Laura",
    clase: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "López",
    nombre: "Pedro",
    clase: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "Sánchez",
    nombre: "Ana",
    clase: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "Ramírez",
    nombre: "Diego",
    clase: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "Torres",
    nombre: "Lucía",
    clase: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "Díaz",
    nombre: "Gabriel",
    clase: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "Molina",
    nombre: "Sofía",
    clase: Math.floor(Math.random() * 2) + 1,
  },
];

let alumno1 = new Alumno(
  alumnos[0]["apellido"],
  alumnos[0]["nombre"],
  alumnos[0]["clase"]
);

let alumno2 = new Alumno(
  alumnos[1]["apellido"],
  alumnos[1]["nombre"],
  alumnos[1]["clase"]
);

let alumno3 = new Alumno(
  alumnos[2]["apellido"],
  alumnos[2]["nombre"],
  alumnos[2]["clase"]
);

let alumno4 = new Alumno(
  alumnos[3]["apellido"],
  alumnos[3]["nombre"],
  alumnos[3]["clase"]
);

let alumno5 = new Alumno(
  alumnos[4]["apellido"],
  alumnos[4]["nombre"],
  alumnos[4]["clase"]
);

let alumno6 = new Alumno(
  alumnos[5]["apellido"],
  alumnos[5]["nombre"],
  alumnos[5]["clase"]
);
let alumno7 = new Alumno(
  alumnos[6]["apellido"],
  alumnos[6]["nombre"],
  alumnos[6]["clase"]
);

let alumno8 = new Alumno(
  alumnos[7]["apellido"],
  alumnos[7]["nombre"],
  alumnos[7]["clase"]
);

let alumno9 = new Alumno(
  alumnos[8]["apellido"],
  alumnos[8]["nombre"],
  alumnos[8]["clase"]
);

let alumno10 = new Alumno(
  alumnos[9]["apellido"],
  alumnos[9]["nombre"],
  alumnos[9]["clase"]
);

// Profesores

interface ProfesorInterface {
  nombre: string;
  apellido: string;
  claseEncargado: number;
}

let profesores: ProfesorInterface[] = [
  {
    apellido: "Fernández",
    nombre: "Roberto",
    claseEncargado: Math.floor(Math.random() * 2) + 1,
  },
  {
    apellido: "Giménez",
    nombre: "Marcela",
    claseEncargado: Math.floor(Math.random() * 2) + 1,
  },
];

let profe1 = new Profesor(
  profesores[0]["apellido"],
  profesores[0]["nombre"],
  profesores[0]["claseEncargado"]
);

let profe2 = new Profesor(
  profesores[1]["apellido"],
  profesores[1]["nombre"],
  profesores[1]["claseEncargado"]
);

// Sistema

let sistema = new Sistema();

// Test

sistema.getAlumnos();
