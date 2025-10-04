function cambiarColor(boton) {
  boton.style.backgroundColor = "#357ab7"; // Cambia a azul oscuro
  boton.style.color = "white"; // Cambia color del texto
}
function verificarRespuesta(boton, correcta) {
  // Elimina foco para móviles
  boton.blur();

  // Limpia todos los botones
  const botones = document.querySelectorAll('.options button');
  botones.forEach(b => {
    b.style.backgroundColor = '#e9e7f6';
    b.style.color = '#07080f';
  });

  // Marca la respuesta
  if(boton.innerText === correcta) {
    boton.style.backgroundColor = '#2aa34eff';
    boton.style.color = 'white';
    puntaje++;
  } else {
    boton.style.backgroundColor = '#d9534f';
    boton.style.color = 'white';
  }

  // Avanza a la siguiente pregunta después de 1s
  setTimeout(() => {
    indice++;
    mostrarPregunta();
  }, 1000);
}


function mostrarPregunta() {
  if(indice >= preguntas.length) {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").innerHTML = `✅ Tu puntaje final es: ${puntaje}/${preguntas.length}`;
    document.getElementById("retry-btn").style.display = "inline-block";
    document.getElementById("back-btn").style.display = "none";
    return;
  }

  document.getElementById("retry-btn").style.display = "none";
  document.getElementById("back-btn").style.display = (indice > 0) ? "inline-block" : "none";

  const q = preguntas[indice];
  let html = `<div class="question">${q.pregunta}</div><div class="options">`;
  q.opciones.forEach(op => {
    html += `<button onclick="verificarRespuesta(this,'${q.respuesta}')">${op}</button>`;
  });
  html += "</div>";
  document.getElementById("quiz").innerHTML = html;
  document.getElementById("result").innerHTML = "";

  // ❌ Limpia cualquier foco anterior
  const botones = document.querySelectorAll('.options button');
  botones.forEach(b => {
    b.blur();
    b.style.backgroundColor = '#e9e7f6';
    b.style.color = '#07080f';
  });
}

