const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100);
};

// console.log(generarNumeroAleatorio(), "numero");

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else if (numeroAdivinado < numeroSecreto) {
    console.log("El número secreto es mayor. ¡Sigue intentando!"); 
  } else {
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  }
};

module.exports = {
  verificarAdivinanza,
  generarNumeroAleatorio,
};
