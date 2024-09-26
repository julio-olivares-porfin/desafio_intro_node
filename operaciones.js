const fs = require("fs");

function registrar(nombre, edad, animal, color, enfermedad) {
  fs.readFile("./citas.json", "utf-8", (error, data) => {
    if (error) {
      console.error("error al leer el archivo:", error);
      return;
    }
    // convertir el json en un arreglo
    const citas = JSON.parse(data);

    // crear un nuevo objeto con los datos del vehiculo
    const nuevaCita = {
      nombre,
      edad,
      animal,
      color,
      enfermedad,
    };

    citas.push(nuevaCita);

    fs.writeFile("citas.json", JSON.stringify(citas), (error) => {
      if (error) {
        console.error("error al registrar cita:", error);
      } else {
        console.log("cita registrada con exito");
      }
    });
  });
}

const leer = () => {
  fs.readFile("./citas.json", "utf-8", (error, data) => {
    if (error) {
      console.error("error al leer archivo:", error);
      return;
    }
    try {
      //se convierte el contenido del archivo JSON a un arreglo
      const citas = JSON.parse(data);
      //mostrando listado en la consola
      console.log("Citas registradas");
      console.log(citas);
    } catch (parseError) {
      console.error("error al parsear el archivo JSON:", parseError);
    }
  });
};

module.exports = { registrar, leer };
