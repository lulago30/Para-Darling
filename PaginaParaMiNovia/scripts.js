const preguntas = [
    {
        pregunta: "Juego Favorito:",
        opciones: ["Grand Theft Auto V (GTA V)", "The Witcher 3: Wild Hunt", "Red Dead Redemption 2", "The Legend of Zelda: Breath of the Wild"],
        correcta: 0
    },
    {
        pregunta: "Color Favorito:",
        opciones: ["Rojo", "Azul", "Verde", "Negro"],
        correcta: 0
    },
    {
        pregunta: "Comida Favorita:",
        opciones: ["Pizza", "Sushi", "Tacos", "Pasta"],
        correcta: 0
    },
    {
        pregunta: "Película Favorita:",
        opciones: ["Avengers: Infinity War", "Inception", "The Shawshank Redemption", "The Dark Knight"],
        correcta: 0
    },
    {
        pregunta: "Deporte Favorito:",
        opciones: ["Fútbol", "Baloncesto", "Tenis", "Natación"],
        correcta: 0
    },
    {
        pregunta: "Estilo de Música Favorito:",
        opciones: ["Pop", "Rock", "Jazz", "Electrónica"],
        correcta: 0
    },
    {
        pregunta: "Tipo de Vacaciones Favorito:",
        opciones: ["Montaña", "Playa", "Ciudad", "Campo"],
        correcta: 0
    }
];

function generarPreguntas() {
    const contenedorPreguntas = document.getElementById('preguntas');
    preguntas.forEach((pregunta, index) => {
        const divPregunta = document.createElement('div');
        divPregunta.classList.add('pregunta');
        divPregunta.innerHTML = `<h3>${pregunta.pregunta}</h3>`;
        pregunta.opciones.forEach((opcion, i) => {
            divPregunta.innerHTML += `
                <label>
                    <input type="radio" name="pregunta${index}" value="${i}">
                    ${opcion}
                </label><br>
            `;
        });
        contenedorPreguntas.appendChild(divPregunta);
    });
}

function verificarRespuestas() {
    let aciertos = 0;
    preguntas.forEach((pregunta, index) => {
        const opciones = document.getElementsByName(`pregunta${index}`);
        opciones.forEach(opcion => {
            if (opcion.checked && parseInt(opcion.value) === pregunta.correcta) {
                aciertos++;
            }
        });
    });
    const resultado = document.getElementById('resultado');
    if (aciertos === preguntas.length) {
        resultado.textContent = "¡Te mereces muchos besos! 😘";
    } else {
        resultado.textContent = "Igual te daré besos. 😘";
    }
}

function mostrarCarta(tipo) {
    const cartas = {
        aburrida: "Hola, hermosa. Sé que estás aburrida, pero recuerda que cada momento es una oportunidad para descubrir algo nuevo. ¡Te reto a hacer algo diferente hoy! ❤️",
        triste: "Lamento que te sientas así. Quiero que sepas que aquí estoy para ti, y aunque no puedo abrazarte físicamente ahora, siempre puedes contar conmigo. Eres increíble, nunca lo olvides.",
        enojadaConmigo: "Sé que he cometido errores y lo lamento. Mi intención nunca es lastimarte. Te prometo que haré lo mejor para que te sientas amada y comprendida.",
        molestaConFamilia: "Entiendo que las cosas con la familia pueden ser difíciles a veces. Tómate tu tiempo y recuerda que está bien sentir lo que sientes. Estoy contigo.",
        motivarte: "Eres capaz de lograr todo lo que te propongas. Hoy puede ser difícil, pero recuerda todas las veces que has superado cosas complicadas. ¡Tú puedes! 💪",
        feliz: "Me encanta verte feliz, tu sonrisa ilumina mi día. Sigue brillando como lo haces siempre. Eres mi sol. ☀️",
        recuerdasAmor: "Te amo más de lo que las palabras pueden expresar. Cada día contigo es un regalo y siempre quiero que recuerdes eso.",
        abrazo: "Cierra los ojos e imagina que te estoy abrazando fuerte. Estoy aquí, contigo, en pensamiento y corazón. ❤️"
    };

    document.getElementById("contenidoCarta").innerText = cartas[tipo];
    document.getElementById("modalCarta").style.display = "block";
}

function cerrarCarta() {
    document.getElementById("modalCarta").style.display = "none";
}

window.onload = generarPreguntas;
