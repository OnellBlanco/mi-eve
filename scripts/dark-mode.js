document.addEventListener('DOMContentLoaded', () => {           // Espera a que el DOM esté completamente cargado
    const toggle = document.getElementById('darkModeToggle');   // Obtiene el botón de alternar modo oscuro por su ID
    const body = document.body;                                 // Referencia al elemento <body>
    const savedTheme = localStorage.getItem('theme');           // Obtiene el tema guardado en localStorage (si existe)
    if (savedTheme) body.classList.add(savedTheme);             // Si hay un tema guardado, lo aplica al body
    else body.classList.add('light-mode');                      // Si no hay tema guardado, aplica el modo claro por defecto

    toggle.addEventListener('click', () => {                    // Agrega un evento al botón para alternar el modo
        body.classList.toggle('dark-mode');                     // Alterna la clase 'dark-mode' en el body
        body.classList.toggle('light-mode');                    // Alterna la clase 'light-mode' en el body
        // Guarda el tema actual en localStorage ('dark-mode' o 'light-mode')
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    });
});
