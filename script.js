// Lista de canciones con las rutas locales de los archivos MP3
const canciones = [
    { nombre: "Sparks", url: "Coldplay - Sparks.mp3" }, // Ruta relativa del archivo MP3
    { nombre: "Yellow", url: "Coldplay - Yellow.mp3" },
    { nombre: "La Incondicional", url: "canciones/la-incondicional.mp3" },
    { nombre: "Vivir lo Nuestro", url: "canciones/vivir-lo-nuestro.mp3" },
    { nombre: "Amiga Mía", url: "canciones/amiga-mia.mp3" },
    { nombre: "Para Tu Amor", url: "canciones/para-tu-amor.mp3" },
    { nombre: "Amiga Mía", url: "canciones/amiga-mia.mp3" },
    { nombre: "Para Tu Amor", url: "canciones/para-tu-amor.mp3" },
    
];

// Seleccionamos el contenedor de la lista
const playlistContainer = document.getElementById('playlist');

// Función para crear la lista de canciones
function cargarCanciones() {
    canciones.forEach((cancion, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${cancion.nombre}
            <audio controls>
                <source src="${cancion.url}" type="audio/mp3">
                Tu navegador no soporta el elemento de audio.
            </audio>
        `;
        playlistContainer.appendChild(li);
    });
}

// Llamamos a la función para cargar las canciones cuando se carga la página
cargarCanciones();

// Control para reproducir solo una canción a la vez
let audioReproduciendo = null;

document.querySelectorAll('audio').forEach((audio, index) => {
    // Cuando se inicia la reproducción de una canción
    audio.addEventListener('play', function () {
        // Detener la canción anterior si está reproduciéndose
        if (audioReproduciendo && audioReproduciendo !== this) {
            audioReproduciendo.pause();
            audioReproduciendo.currentTime = 0;
        }
        audioReproduciendo = this;
    });

    // Cuando la canción termina, reproducir la siguiente
    audio.addEventListener('ended', function () {
        // Reproducir la siguiente canción si no es la última
        if (index + 1 < canciones.length) {
            const siguienteAudio = document.querySelectorAll('audio')[index + 1];
            siguienteAudio.play();
        }
    });
});
