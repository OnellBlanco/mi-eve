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
        img.setAttribute('data-text', 'Creo que ese dia conociste a Nain, mi bro.');
    }

    if (i === 3) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'No recuerdo cuando fue, pero es de mis favoritas.');
    }

    if (i === 4) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Mi mujer, la mas hicha.');
    }

    if (i === 6) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Ame ese dia, gracias por llevarme amor.');
    }

    if (i === 8) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esta fue despues de una presentación. Me encanta verte bailar,ya te lo habia dicho antes?, creo que no, pero ahora lo sabes.');
    }

    if (i === 9) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Nuestro primer mes, maravilloso, nunca habia prendido velitas con nadie, ahora he prendido velitas contigo, fue una velita por nosotros, te amo.');
    }

    if (i === 10) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'MI FAVORITA, ESPECTACULAR, MARAVILLOSA, DESLUMBRANTE, PERFECTA, DIVINA, eso y mas pienso cada vez que te veo maquillada y con vestuario para una presentación y cuando te presentas, el corazón se me quiere salir, me emociona mucho verte bailar, me emociona mucho verte siempre. Mientras hago esto veo muchas fotos y digo, voy a poner esta de perfil en WhatsApp pero apenas veo esta foto, pienso en que es perfecta, no hace falta, luchare por salir contigo en via 40, hare lo que pueda para hacerlo, no bailando, ni sin culpa, pero si te quiero acompañar, mas si vas de garota, seras la mejor garota que ha pasado por esa comparsa mi amor. Gracias por todo, te amo.');
    }

    if (i === 11) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esta me recuerda a kiss you, con esa canción la subi a instagram.');
    }

    if (i === 13) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esa falda.');
    }

    if (i === 14) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Como si te fuera a comer, aunque ganas no me faltan.');
    }

    if (i === 16) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Desfile de niños, ese dia estabas preciosa, radiante, brillabas por todos lados.');
    }

    if (i === 18) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Dia de malecon, foto con sapitos, caminata y besos.');
    }

    if (i === 19) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Otro dia de malecon, mal dia por tus amigos, pero buen dia por tus amigas, me da risa como veo.');
    }

    if (i === 23) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'La primera vez que te pusiste mi camisa y la unica que la usaste para salir, pontela mas porfa, no la uses solo para sudarla.');
    }

    if (i === 24) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Te juro que segun yo te estaba agarrando la mano bien. Esa foto fue para Cristian, para ese momento ya le habia contado que conoci al amor de mi vida.');
    }

    if (i === 25) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'PRIMER DIA DE NOVIOS, EL HOMBRE MAS FELIZ DEL MUNDO Y A SU LADO LA MEJOR MUJER DEL MUNDO. TE AMO.');
    }

    if (i === 26) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Otro dia de malecon, dia de desfile y de parejas, todas las fotos de ese dia me gustaron.');
    }

    if (i === 27) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Nosotros estilo Ghibli.');
    }

    if (i === 33) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Me abandonaste ese dia. Esta foto es de mis favoritas, tu sonrisa siempre es muy linda.');
    }

    if (i === 36) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esta foto probablemente es donde peor he salido en mis 22 casi 23 años de vida, pero tu, eres la perfección en persona, yo soy un loquito del centro, afortunado.');
    }
    if (i === 38) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'De mis favoritas.');
    }

    if (i === 40) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'El 24, me fui a vivir tres dias contigo. El 25 fue de arrunchis, simplemente perfecto.');
    }

    if (i === 41) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Dia de verte bailar?, dia de felicidad.');
    }

    if (i === 43) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Fue el dia de los dibujos, ahi me di cuenta de el don que tengo para trazar lineas y realizar obras de arte. Que ventana tan cochina.');
    }

    if (i === 44) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Nosferatu, dia de despues de volver de San Onofre, tercer mes, todo bien planeado, todo bien hecho, un muy buen dia, no recuerdo mucho de la peli.');
    }

    if (i === 45) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Nuestro primer mundo.');
    }

    if (i === 46) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'UNI.');
    }

    if (i === 47) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'El señor Jairo nos saco el ultimo dia, me quede sin lentes, pero la pase de maravilla a tu lado. De mis fotos favoritas');
    }

    if (i === 51) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'No recuerdo que mes fue ese, pero que linda estas');
    }

    if (i === 52) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'AL TIBURON YO LO SIGO DONDE JUEGUE YO LO QUIERO DE VERDAD, el cumple de tu primito con tematica de junior, espectacular, me fui temprano, me hubiera gustado pasar mas tiempo contigo ese dia.');
    }

    if (i === 53) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Otra rueda de cumbia, pero muy meh, tu disfrutaste, yo te vi hacerlo.');
    }

    if (i === 57) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'De mis favoritas, mi primer fondon de pantalla de nosotros. Ni eramos novios, atrevida.');
    }

    if (i === 58) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'De mis favoritas, ni recuerdo que hicimos ese dia.');
    }

    if (i === 59) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', '7 de diciembre, dia de velitas, dia de mes, foto perfecta, mujer perfecta, dia perfecto, te amo con todo mi ser.');
    }

    if (i === 60) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'De este dia hay muchas que me gustan, recuerdo que fuiste a grabar un video, te veias preciosa a mas no poder.');
    }

    if (i === 61) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Creo que se la mande a Cristian jhakaja.');
    }


    if (i === 62) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Besito.');
    }


    if (i === 63) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Fotos para el cel, creo que tambien cumplimos mes ahi, hemos cumplidos muchos meses, que maravilla.');
    }


    if (i === 66) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'MI SEGUNDA FOTO FAVORITA, es perfecta.');
    }


    if (i === 67) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'La lectura del bando, buen dia, agradecido contigo por llevarme a verte. Sali en una foto con todos los padres y me felicitaron el dia del padre. Te voy a preñar.');
    }


    if (i === 72) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Ese dia te di los audifonos y tambien me di los mios.');
    }


    if (i === 73) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Yo porque me rio tanto?.');
    }


    if (i === 74) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'El de la toalla es cachaco.');
    }


    if (i === 76) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'La tercera vez que nos vimos, mas nunca te volvi a ver con esa camisa. Ese mismo dia conoci a tu mamá. Me dio miedo');
    }


    if (i === 82) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'No tiene precio, te emocionaste mas que yo por mi cumpleaños y lo hiciste un dia especial, siempre te voy a agradecer por eso. Pasamos todo el dia juntos, fue maravilloso, en mi mente queda como mi mejor cumpleaños.');
    }


    if (i === 84) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'No le hagas caso a mi cara, por dentro estaba mas feliz que 10.');
    }

    if (i === 85) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esta foto es muy tu, me encanta.');
    }

    if (i === 86) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Mi fondo de pantalla anterior y otra foto muy tu, me encanta.');
    }

    if (i === 87) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'No se si poner algo aca, fueron dias tristes.');
    }

    if (i === 89) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Me acuerdo de mi estado del 24 y me muero de risa hjahajshsakja. De mis fotos favoritas.');
    }

    if (i === 90) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Mi tercera foto favorita, fue mucho tiempo mi fondo de pantalla.');
    }

    if (i === 97) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Otra vez animados.');
    }

    if (i === 99) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Otra de mis fotos favoritas, tu sonrisa es perfecta.');
    }

    if (i === 100) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esa falda.');
    }

    if (i === 102) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Aqui sonrio, a veces siento tanta felicidad a tu lado que se desborda en una sonrisa.');
    }

    if (i === 103) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Divinas.');
    }

    if (i === 104) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Era un juego de pizzas. Recuerdo que me echabas de tu casa hashjajha.');
    }

    if (i === 106) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Onde Kevin.');
    }

    if (i === 107) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Zapatos.');
    }

    if (i === 108) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Tus zapatos, literalmente tus zapatos.');
    }

    if (i === 109) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Nuestros cultivos.');
    }

    if (i === 111) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esa falda.');
    }

    if (i === 113) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'CINEEEEEEEEEEE, que linda te veias viendo Lilo y Stich, una niña, mi niña. Gracias por llevarme contigo.');
    }

    if (i === 116) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Parezco un loquito.');
    }

    if (i === 122) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Esa falda.');
    }

    if (i === 121) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Mi mano jodio horriblemente esta foto.');
    }

    if (i === 125) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Recuerdo este dia, perdón.');
    }

    if (i === 127) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Dia de verte bailar.');
    }

    if (i === 130) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'La del super hombre, que buena peli, gracias por acompañarme amor.');
    }

    if (i === 131) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Osea desde ya se notaba que el idiota de tu novio tenia la camisa al reves y tu ni por ahi de decirle algo, OK.');
    }

    if (i === 135) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Asi deberiamos estar la mayor parte del tiempo, tranquilitos y sin que nadie nos diga algo.');
    }

    if (i === 141) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'De mis favoritas.');
    }

    if (i === 142) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'De mis favoritas, me encanta como en el malecon la brisa te revuelca el pelo.');
    }

    if (i === 143) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Pontela mas en serio porfa, no solo la uses para sudarla.');
    }

    if (i === 146) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Dia de gym con mi gymbro fav.');
    }

    if (i === 151) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Creo que este fue el dia de Lilo y Stich, entonces aca te agradezco por llevarme a ver Como entrenar a tu dragon, en serio gracias amor.');
    }

    if (i === 159) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Onde Kevin.');
    }

    if (i === 161) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Extraño los dias de hamaca.');
    }

    if (i === 163) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Onde Valentina.');
    }

    if (i === 164) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Otro mes.');
    }

    if (i === 165) {
        img.setAttribute('data-card', 'true');
        img.setAttribute('data-text', 'Amor mira nuestras sombras.');
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
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById("imageModal");
        // Cierra solo si el modal está visible.
        if (modal.classList.contains('show')) {
            closeModal();
        }
    }
});


