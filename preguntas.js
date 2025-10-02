const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Paraguay?",
        opciones: ["Asunción", "Buenos Aires", "Montevideo", "Lima"],
        respuesta: "Asunción"
    },
    {
        pregunta: "¿Cuál es 2 + 2?",
        opciones: ["3", "4", "5", "6"],
        respuesta: "4"
    }
];

const quizContainer = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', () => {
    quizContainer.innerHTML = '';
    preguntas.forEach((p, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${index+1}. ${p.pregunta}</p>`;
        p.opciones.forEach(opcion => {
            const btn = document.createElement('button');
            btn.textContent = opcion;
            btn.addEventListener('click', () => {
                alert(opcion === p.respuesta ? 'Correcto!' : 'Incorrecto!');
            });
            div.appendChild(btn);
        });
        quizContainer.appendChild(div);
    });
});
