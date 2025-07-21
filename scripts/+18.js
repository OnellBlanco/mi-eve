// Espera a que todo el DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la referencia al elemento de la imagen principal por su ID
    const img = document.getElementById('imagenPrincipal');
    // Si no existe la imagen, termina la ejecución del script
    if (!img) return;

    // Función que actualiza la imagen según la hora y el modo oscuro
    function updateImage() {
        // Obtiene la fecha y hora actual
        const now = new Date();
        // Obtiene la hora actual (0-23)
        const hour = now.getHours();
        // Determina si la hora está entre la 1am y las 4am
        const isLate = hour >= 1 && hour < 4;
        // Verifica si el modo oscuro está activo (clase en el body)
        const isDark = document.body.classList.contains('dark-mode');
        // Si es entre la 1am y las 4am
        if (isLate) {
            // Si el modo oscuro está activo, muestra la imagen "de-ella.webp"
            if (isDark) {
                img.src = 'assets/images/+18/de-ella.webp';
                // Si no, muestra la imagen "ella-2.webp"
            } else {
                img.src = 'assets/images/+18/ella-2.webp';
            }
            // Si no es entre la 1am y las 4am, muestra la imagen "ella.webp"
        } else {
            img.src = 'assets/images/ella.webp';
        }
    }

    // Llama a la función para actualizar la imagen justo después de cargar la página
    setTimeout(updateImage, 0);

    // Obtiene el botón de alternar modo oscuro por su ID
    const darkModeToggle = document.getElementById('darkModeToggle');
    // Si existe el botón
    if (darkModeToggle) {
        // Agrega un evento para actualizar la imagen cuando se haga clic en el botón
        darkModeToggle.addEventListener('click', function () {
            // Espera un breve momento para que la clase dark-mode se aplique antes de actualizar la imagen
            setTimeout(updateImage, 10);
        });
    }
});