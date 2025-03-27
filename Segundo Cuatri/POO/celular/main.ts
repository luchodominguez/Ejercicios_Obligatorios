import { Celular } from "./celular";

let celular1 = new Celular("Motorola", "G54", "Android");

let celular2 = new Celular(
  "Xiaomi",
  "Note 14 4G",
  "Xiaomi HyperOS",
  "8GB",
  "256GB"
);

let celular3 = new Celular("Apple", "iPhone 15", "iOS", "6GB");

console.log("\n------------- Celular 1 - Motorola G54 -------------\n");

celular1.mostrarInfo();
celular1.encenderApagar();
celular1.mostrarInfo();
celular1.subirVolumen();

console.log("");

celular1.setRam("8GB");
celular1.encenderApagar();
celular1.setRam("8GB");
celular1.setAlmacenamiento("256GB");

console.log("");

celular1.encenderApagar();
celular1.getAlmacenamiento();
celular1.getRam();

celular1.encenderApagar();

console.log("\n\n---------- Celular 2 - Xiaomi Note 14 4G ----------\n");

celular2.encenderApagar();
celular2.bajarVolumen();
celular2.mostrarInfo();

console.log("\n\n----------- Celular 3 - Apple Iphone 15 -----------\n");

celular3.setAlmacenamiento("128GB");
celular3.encenderApagar();
celular3.mostrarInfo();
celular3.subirVolumen();
celular3.encenderApagar();
