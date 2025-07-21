// --- SCRIPT DE LA GALERÍA ---

// Define el número total de imágenes que tienes.
const totalImages = 167; 
const gallery = document.getElementById('gallery');

// Bucle para crear y añadir cada imagen a la galería.
for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    
    // IMPORTANTE: Usa la ruta correcta a tus imágenes.
    img.src = `../assets/images/images-gallery/img-gallery-${i}.webp`; 
    img.alt = `photo ${i}`;
    img.setAttribute('loading', 'lazy'); // Mejora el rendimiento de carga.

    // Ejemplo para hacer que una imagen específica sea una "tarjeta" con texto.
    if (i === 1) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Nuestra primera foto nunca puede faltar. Lastima que se metio la sapa de la reina, envidiosa, ahí recortadita salimos bien.');
    }

        if (i === 2) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esta es una imagen especial con información destacada. ¡Puedes poner una descripción aquí!');
    }

        if (i === 3) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esta es una imagen especial con información destacada. ¡Puedes poner una descripción aquí!');
    }

    // Añade el evento de clic a cada imagen para abrir el modal.
    img.addEventListener('click', openModal);
    gallery.appendChild(img);
}

/**
 * Abre el modal y muestra la imagen en la que se hizo clic.
 * @param {Event} event - El evento de clic.
 */
function openModal(event) {
    const src = event.target.src;
    const isCard = event.target.dataset.card === "true";
    const text = event.target.dataset.text || "";

    // Obtiene los elementos del modal del HTML.
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");
    const modalContent = document.getElementById("modalContent");

    // Configura el contenido del modal.
    modalImg.src = src;
    modalText.textContent = text;
    
    // Muestra el modal añadiendo la clase 'show'.
    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // Desactiva el scroll y la interacción del fondo

    // Aplica o quita el estilo de "tarjeta".
    if (isCard) {
        modalContent.classList.add("card-style");
    } else {
        modalContent.classList.remove("card-style");
    }
}

/**
 * Cierra el modal.
 */
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("show");
    document.body.style.overflow = ""; // Restaura el scroll y la interacción del fondo
}

// === MEJORAS DE USABILIDAD PARA CERRAR EL MODAL ===

// 1. Cierra el modal si se hace clic en el fondo oscuro.
document.getElementById("imageModal").addEventListener("click", function (event) {
    // Si el elemento clickeado es el fondo del modal (y no su contenido).
    if (event.target.id === "imageModal") {
        closeModal();
    }
});

// 2. Cierra el modal si se presiona la tecla "Escape".
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById("imageModal");
        // Cierra solo si el modal está visible.
        if (modal.classList.contains('show')) {
            closeModal();
        }
    }
});


