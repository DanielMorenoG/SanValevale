let escalaBotonSi = 1;
let intentosRechazo = 0;

const mensajesDivertidos = [
    "¿Estás segura? 🥺",
    "Piénsalo otra vez... 💕",
    "El botón SÍ se ve mejor, ¿no crees? 😊",
    "Vamos, sabes que quieres decir que sí 💖",
    "¡Mira cómo crece el botón del SÍ! 😍",
    "Ya casi no puedes tocar el NO 🙈",
    "¡El SÍ está cada vez más cerca! 💝",
    "¿De verdad quieres seguir diciendo no? 🥹",
    "El botón SÍ te llama con amor 💗",
    "¡Solo di que síííí! 💕",
    "¿Cuántas veces más vas a decir no? 😅",
    "El SÍ está ganando terreno... 💘",
    "¡Ya no tienes escapatoria! 💖"
];

function rechazar() {
    const btnNo = document.getElementById('btnNo');
    const btnSi = document.getElementById('btnSi');
    const botonesContainer = document.getElementById('botonesContainer');
    const pregunta = document.getElementById('pregunta');
    
    intentosRechazo++;
    
    // ¡HACER EL BOTÓN SÍ MÁS Y MÁS GRANDE!
    escalaBotonSi += 0.5;
    btnSi.style.transform = `scale(${escalaBotonSi})`;
    
    // Cambiar el mensaje
    if (intentosRechazo <= mensajesDivertidos.length) {
        pregunta.textContent = mensajesDivertidos[intentosRechazo - 1];
    } else {
        pregunta.textContent = "¡Ya sabes que la respuesta es SÍ! 💕";
    }
    
    // Mover el botón NO a una posición aleatoria
    const containerRect = botonesContainer.getBoundingClientRect();
    const btnNoRect = btnNo.getBoundingClientRect();
    
    const maxX = containerRect.width - btnNoRect.width - 40;
    const maxY = containerRect.height - btnNoRect.height - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
    btnNo.style.transform = 'none';
    
    // Animación de sacudida
    btnNo.style.animation = 'shake 0.5s';
    setTimeout(() => {
        btnNo.style.animation = '';
    }, 500);
    
    // Después de varios intentos, ocultar el botón NO
    if (escalaBotonSi >= 7) {
        btnNo.style.opacity = '0';
        btnNo.style.pointerEvents = 'none';
        pregunta.textContent = "¡El botón SÍ te está esperando! 💕";
    }
}

function aceptar() {
    // Ocultar el contenido inicial
    document.getElementById('contenidoInicial').style.display = 'none';
    
    // Mostrar el mensaje de aceptación
    const mensajeSi = document.getElementById('mensajeSi');
    mensajeSi.style.display = 'block';
    
    // Crear confeti
    crearConfeti();
}

function crearConfeti() {
    const colores = ['#ff6b6b', '#ff69b4', '#ffd93d', '#6bcf7f', '#4ecdc4', '#a8e6cf', '#ff9ff3', '#feca57'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}   