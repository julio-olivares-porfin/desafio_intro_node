const { registrar, leer } = require("./operaciones");

// nombre, edad, animal, color, enfermedad
const operacion = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

// evaluar la operacion a realizar

if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Operación no reconocida");
}
