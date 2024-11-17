// Lista de canciones con las rutas locales de los archivos MP3
const canciones = [
    { nombre: "Sparks", url: "Coldplay - Sparks.mp3" },
    { nombre: "Yellow", url: "Coldplay - Yellow.mp3" },
    { nombre: "La Incondicional", url: "canciones/la-incondicional.mp3" },
    { nombre: "Vivir lo Nuestro", url: "canciones/vivir-lo-nuestro.mp3" },
    { nombre: "Amiga Mía", url: "canciones/amiga-mia.mp3" },
    { nombre: "Para Tu Amor", url: "canciones/para-tu-amor.mp3" }
];

// Seleccionamos el contenedor de la lista
const playlistContainer = document.getElementById('playlist');

// Función para crear la lista de canciones
function cargarCanciones() {
    canciones.forEach((cancion) => {
        const li = document.createElement('li');
        li.className = 'cancion-item'; // Clase CSS para un diseño uniforme
        li.innerHTML = `
            <span>${cancion.nombre}</span>
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
