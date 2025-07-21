// --- SCRIPT DE IMAGEN ALEATORIA CON OBJETO ---

const btn = document.getElementById('btn');
const picture = document.querySelector('.picture');
const tituloElemento = document.querySelector('.title-main');
const descripcionElemento = document.querySelector('.description');
const totalImages = 123; // Ajusta según la cantidad real

// Objeto con títulos y descripciones personalizados
const infoImagenes = {
    1: {titulo: "Nuestra primera imagen", descripcion: "toco recortarla pq salio la reina de sapa."},
    2: {titulo: "Imagen especial 2", descripcion: "Descripción destacada para la imagen 2."},
    3: {titulo: "Imagen especial 3", descripcion: "Descripción destacada para la imagen 3."},
    4: { titulo: "Fiesta de colores", descripcion: "Una explosión de colores y alegría."},
    5: { titulo: "Paisaje nocturno", descripcion: "Un paisaje sereno bajo la luz de la luna."},
    6: { titulo: "Ciudad futurista",descripcion: "Rascacielos y luces en un mundo del mañana."},
    7: { titulo: "Imagen 7", descripcion: "Descripción de la imagen 7" },
    8: { titulo: "Imagen 8", descripcion: "Descripción de la imagen 8" },
    9: { titulo: "Imagen 9", descripcion: "Descripción de la imagen 9" },
    10: { titulo: "Imagen 10", descripcion: "Descripción de la imagen 10" },
    11: { titulo: "Imagen 11", descripcion: "Descripción de la imagen 11" },
    12: { titulo: "Imagen 12", descripcion: "Descripción de la imagen 12" },
    13: { titulo: "Imagen 13", descripcion: "Descripción de la imagen 13" },
    14: { titulo: "Imagen 14", descripcion: "Descripción de la imagen 14" },
    15: { titulo: "Imagen 15", descripcion: "Descripción de la imagen 15" },
    16: { titulo: "Imagen 16", descripcion: "Descripción de la imagen 16" },
    17: { titulo: "Imagen 17", descripcion: "Descripción de la imagen 17" },
    18: { titulo: "Imagen 18", descripcion: "Descripción de la imagen 18" },
    19: { titulo: "Imagen 19", descripcion: "Descripción de la imagen 19" },
    20: { titulo: "Imagen 20", descripcion: "Descripción de la imagen 20" },
    21: { titulo: "Imagen 21", descripcion: "Descripción de la imagen 21" },
    22: { titulo: "Imagen 22", descripcion: "Descripción de la imagen 22" },
    23: { titulo: "Imagen 23", descripcion: "Descripción de la imagen 23" },
    24: { titulo: "Imagen 24", descripcion: "Descripción de la imagen 24" },
    25: { titulo: "Imagen 25", descripcion: "Descripción de la imagen 25" },
    26: { titulo: "Imagen 26", descripcion: "Descripción de la imagen 26" },
    27: { titulo: "Imagen 27", descripcion: "Descripción de la imagen 27" },
    28: { titulo: "Imagen 28", descripcion: "Descripción de la imagen 28" },
    29: { titulo: "Imagen 29", descripcion: "Descripción de la imagen 29" },
    30: { titulo: "Imagen 30", descripcion: "Descripción de la imagen 30" },
    31: { titulo: "Imagen 31", descripcion: "Descripción de la imagen 31" },
    32: { titulo: "Imagen 32", descripcion: "Descripción de la imagen 32" },
    33: { titulo: "Mimida", descripcion: "Que linda te ves dormida amor, ojala algun dia al levantarme verte dormidita sea lo que inicie mis mañanas. Un sueño."},
    34: { titulo: "Imagen 34", descripcion: "Descripción de la imagen 34" },
    35: { titulo: "Imagen 35", descripcion: "Descripción de la imagen 35" },
    36: { titulo: "Imagen 36", descripcion: "Descripción de la imagen 36" },
    37: { titulo: "Imagen 37", descripcion: "Descripción de la imagen 37" },
    38: { titulo: "Imagen 38", descripcion: "Descripción de la imagen 38" },
    39: { titulo: "Imagen 39", descripcion: "Descripción de la imagen 39" },
    40: { titulo: "Imagen 40", descripcion: "Descripción de la imagen 40" },
    41: { titulo: "Imagen 41", descripcion: "Descripción de la imagen 41" },
    42: { titulo: "Imagen 42", descripcion: "Descripción de la imagen 42" },
    43: { titulo: "Imagen 43", descripcion: "Descripción de la imagen 43" },
    44: { titulo: "Imagen 44", descripcion: "Descripción de la imagen 44" },
    45: { titulo: "Imagen 45", descripcion: "Descripción de la imagen 45" },
    46: { titulo: "Imagen 46", descripcion: "Descripción de la imagen 46" },
    47: { titulo: "Imagen 47", descripcion: "Descripción de la imagen 47" },
    48: { titulo: "Imagen 48", descripcion: "Descripción de la imagen 48" },
    49: { titulo: "Imagen 49", descripcion: "Descripción de la imagen 49" },
    50: { titulo: "Imagen 50", descripcion: "Descripción de la imagen 50" },
    51: { titulo: "Imagen 51", descripcion: "Descripción de la imagen 51" },
    52: { titulo: "Imagen 52", descripcion: "Descripción de la imagen 52" },
    53: { titulo: "Imagen 53", descripcion: "Descripción de la imagen 53" },
    54: { titulo: "Imagen 54", descripcion: "Descripción de la imagen 54" },
    55: { titulo: "Imagen 55", descripcion: "Descripción de la imagen 55" },
    56: { titulo: "Imagen 56", descripcion: "Descripción de la imagen 56" },
    57: { titulo: "Imagen 57", descripcion: "Descripción de la imagen 57" },
    58: { titulo: "Imagen 58", descripcion: "Descripción de la imagen 58" },
    59: { titulo: "Imagen 59", descripcion: "Descripción de la imagen 59" },
    60: { titulo: "Imagen 60", descripcion: "Descripción de la imagen 60" },
    61: { titulo: "Imagen 61", descripcion: "Descripción de la imagen 61" },
    62: { titulo: "Imagen 62", descripcion: "Descripción de la imagen 62" },
    63: { titulo: "Imagen 63", descripcion: "Descripción de la imagen 63" },
    64: { titulo: "Imagen 64", descripcion: "Descripción de la imagen 64" },
    65: { titulo: "Imagen 65", descripcion: "Descripción de la imagen 65" },
    66: { titulo: "Imagen 66", descripcion: "Descripción de la imagen 66" },
    67: { titulo: "Imagen 67", descripcion: "Descripción de la imagen 67" },
    68: { titulo: "Imagen 68", descripcion: "Descripción de la imagen 68" },
    69: { titulo: "Imagen 69", descripcion: "Descripción de la imagen 69" },
    70: { titulo: "Imagen 70", descripcion: "Descripción de la imagen 70" },
    71: { titulo: "Imagen 71", descripcion: "Descripción de la imagen 71" },
    72: { titulo: "Imagen 72", descripcion: "Descripción de la imagen 72" },
    73: { titulo: "Imagen 73", descripcion: "Descripción de la imagen 73" },
    74: { titulo: "Imagen 74", descripcion: "Descripción de la imagen 74" },
    75: { titulo: "Imagen 75", descripcion: "Descripción de la imagen 75" },
    76: { titulo: "Imagen 76", descripcion: "Descripción de la imagen 76" },
    77: { titulo: "Sanguche", descripcion: "Mi linda novia comiendose un emparedado." },
    78: { titulo: "Imagen 78", descripcion: "Descripción de la imagen 78" },
    79: { titulo: "Imagen 79", descripcion: "Descripción de la imagen 79" },
    80: { titulo: "Imagen 80", descripcion: "Descripción de la imagen 80" },
    81: { titulo: "Imagen 81", descripcion: "Descripción de la imagen 81" },
    82: { titulo: "Imagen 82", descripcion: "Descripción de la imagen 82" },
    83: { titulo: "Imagen 83", descripcion: "Descripción de la imagen 83" },
    84: { titulo: "Imagen 84", descripcion: "Descripción de la imagen 84" },
    85: { titulo: "Imagen 85", descripcion: "Descripción de la imagen 85" },
    86: { titulo: "Imagen 86", descripcion: "Descripción de la imagen 86" },
    87: { titulo: "Imagen 87", descripcion: "Descripción de la imagen 87" },
    88: { titulo: "Imagen 88", descripcion: "Descripción de la imagen 88" },
    89: { titulo: "Imagen 89", descripcion: "Descripción de la imagen 89" },
    90: { titulo: "Imagen 90", descripcion: "Descripción de la imagen 90" },
    91: { titulo: "Imagen 91", descripcion: "Descripción de la imagen 91" },
    92: { titulo: "Imagen 92", descripcion: "Descripción de la imagen 92" },
    93: { titulo: "Imagen 93", descripcion: "Descripción de la imagen 93" },
    94: { titulo: "Imagen 94", descripcion: "Descripción de la imagen 94" },
    95: { titulo: "Imagen 95", descripcion: "Descripción de la imagen 95" },
    96: { titulo: "Imagen 96", descripcion: "Descripción de la imagen 96" },
    97: { titulo: "Tia Maribel", descripcion: "Tengo una foto con mi tia maribel" },
    98: { titulo: "Imagen 98", descripcion: "Descripción de la imagen 98" },
    99: { titulo: "...", descripcion: "Tres puntos suspensivos jakjskaj. Ese dia es para haberte dejado todo el cuerpo marcado." },
    100: { titulo: "Imagen 100", descripcion: "Descripción de la imagen 100" },
    101: { titulo: "Imagen 101", descripcion: "Descripción de la imagen 101" },
    102: { titulo: "Fotitos en el espejos, como me encantan", descripcion: "Te ves divina en todas, te amo, nunca dejes de mandarme fotos en el espejo." },
    103: { titulo: "Imagen 103", descripcion: "Descripción de la imagen 103" },
    104: { titulo: "Imagen 104", descripcion: "Descripción de la imagen 104" },
    105: { titulo: "Imagen 105", descripcion: "Descripción de la imagen 105" },
    106: { titulo: "Imagen 106", descripcion: "Descripción de la imagen 106" },
    107: { titulo: "Imagen 107", descripcion: "Descripción de la imagen 107" },
    108: { titulo: "Imagen 108", descripcion: "Descripción de la imagen 108" },
    109: { titulo: "Imagen 109", descripcion: "Descripción de la imagen 109" },
    110: { titulo: "Imagen 110", descripcion: "Descripción de la imagen 110" },
    111: { titulo: "Imagen 111", descripcion: "Descripción de la imagen 111" },
    112: { titulo: "Imagen 112", descripcion: "Descripción de la imagen 112" },
    113: { titulo: "Imagen 113", descripcion: "Descripción de la imagen 113" },
    114: { titulo: "MIO,", descripcion: "Imagenes muy necesarias, que culote tienes dios mio, la proxima va a ser sin nada encima, solo yo y ese pedazo de culo recibiendo mi beso." },
    115: { titulo: "Imagen 115", descripcion: "Descripción de la imagen 115" },
    116: { titulo: "Imagen 116", descripcion: "Descripción de la imagen 116" },
    117: { titulo: "Imagen 117", descripcion: "Descripción de la imagen 117" },
    118: { titulo: "Imagen 118", descripcion: "Descripción de la imagen 118" },
    119: { titulo: "Imagen 119", descripcion: "Descripción de la imagen 119" },
    120: { titulo: "Imagen 120", descripcion: "Descripción de la imagen 120" },
    121: { titulo: "Imagen 121", descripcion: "Descripción de la imagen 121" },
    122: { titulo: "Imagen 122", descripcion: "Descripción de la imagen 122" },
    123: { titulo: "Imagen 123", descripcion: "Descripción de la imagen 123" },
    124: { titulo: "Imagen 124", descripcion: "Descripción de la imagen 124" },
    125: { titulo: "Imagen 125", descripcion: "Descripción de la imagen 125" },
    126: { titulo: "Imagen 126", descripcion: "Descripción de la imagen 126" },
    127: { titulo: "Imagen 127", descripcion: "Descripción de la imagen 127" },
    128: { titulo: "Imagen 128", descripcion: "Descripción de la imagen 128" },
    129: { titulo: "Imagen 129", descripcion: "Descripción de la imagen 129" },
    130: { titulo: "Imagen 130", descripcion: "Descripción de la imagen 130" },
    131: { titulo: "Imagen 131", descripcion: "Descripción de la imagen 131" },
    132: { titulo: "Imagen 132", descripcion: "Descripción de la imagen 132" },
    133: { titulo: "Imagen 133", descripcion: "Descripción de la imagen 133" },
    134: { titulo: "Imagen 134", descripcion: "Descripción de la imagen 134" },
    135: { titulo: "Imagen 135", descripcion: "Descripción de la imagen 135" },
    136: { titulo: "Imagen 136", descripcion: "Descripción de la imagen 136" }
};


btn.addEventListener('click', () => {
    let randIndex;

    // Evitar repetir siempre la imagen 1
    do {
        randIndex = Math.floor(Math.random() * totalImages) + 1;
    } while (randIndex === 1); // Omitimos la primera ya que está por defecto

    const imgPath = `../assets/images/images-random-picture/img-random-${randIndex}.webp`;
    const info = infoImagenes[randIndex] || {
        titulo: `Imagen ${randIndex}`,
        descripcion: `Descripción de la imagen ${randIndex}`
    };

    picture.src = imgPath;
    picture.title = info.titulo;
    picture.alt = info.descripcion;
    tituloElemento.textContent = info.titulo;
    descripcionElemento.textContent = info.descripcion;
});

///////////////////////////////////////////////////
const selectorImagen = document.getElementById('selectorImagen');

// Generar opciones del 1 al totalImages
for (let i = 1; i <= totalImages; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `Imagen ${i}`;
    selectorImagen.appendChild(option);
}

// Manejar selección directa de imagen
selectorImagen.addEventListener('change', (e) => {
    const index = parseInt(e.target.value);
    const imgPath = `../assets/images/images-random-picture/img-random-${index}.webp`;
    const info = infoImagenes[index] || {
        titulo: `Imagen ${index}`,
        descripcion: `Descripción de la imagen ${index}`
    };

    picture.src = imgPath;
    picture.title = info.titulo;
    picture.alt = info.descripcion;
    tituloElemento.textContent = info.titulo;
    descripcionElemento.textContent = info.descripcion;
});
