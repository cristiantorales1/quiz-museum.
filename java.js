function cambiarColor(boton) {
  boton.style.backgroundColor = "#357ab7"; // Cambia a azul oscuro
  boton.style.color = "white"; // Cambia color del texto
}
function verificarRespuesta(boton, correcta) {
  // Desmarca botones cada vez que se selecciona nuevo, para móvil y escritorio
  const botones = document.querySelectorAll('.options button');
  botones.forEach(b => {
    b.style.backgroundColor = '#e9e7f6'; // Quita color anterior
    b.style.color = '#07080f';
  });

  // Luego marca el botón seleccionado
  if (boton.innerText === correcta) {
    boton.style.backgroundColor = '#1cb33dff';
    boton.style.color = 'white';
    puntaje++;
  } else {
    boton.style.backgroundColor = '#d9534f';
    boton.style.color = 'white';
  }

  // Sigue lo que tienes para avanzar pregunta
  setTimeout(() => {
    indice++;
    mostrarPregunta();
  }, 1000);
}

