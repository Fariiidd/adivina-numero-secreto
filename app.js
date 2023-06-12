const readlineSync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza");

const obtenerNumeroUsuario = () => {
  return readlineSync.question("Ingresa un número: ");
};

const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio();

  let numeroAdivinado = 0;

  while (numeroAdivinado != numeroSecreto) { 
      numeroAdivinado = obtenerNumeroUsuario();
      verificarAdivinanza(numeroSecreto, numeroAdivinado);
  } 
};

juegoAdivinanza();
