import { Auto } from "./auto";

// Creando los autos
let auto1 = new Auto("Fiat", "Mobi", 2016);
let auto2 = new Auto("Toyota", "Yaris Sedán", 2013);
let auto3 = new Auto("Citroën", "Basalt", 2024);
let auto4 = new Auto("Chevrolet", "Cruze", 2009);

// Testing
auto1.mostrarAuto();
auto1.acelerar();
auto1.frenar();

console.log("");

auto2.mostrarAuto();
auto2.acelerar();
auto2.frenar();

console.log("");

auto3.mostrarAuto();
auto3.acelerar();
auto3.frenar();

console.log("");

auto4.mostrarAuto();
auto4.acelerar();
auto4.frenar();
