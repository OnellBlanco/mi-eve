// --- SCRIPT DE IMAGEN ALEATORIA CON OBJETO ---

const btn = document.getElementById('btn');
const picture = document.querySelector('.picture');
const tituloElemento = document.querySelector('.title-main');
const descripcionElemento = document.querySelector('.description');
const totalImages = 123; // Ajusta según la cantidad real

// Objeto con títulos y descripciones personalizados
const infoImagenes = {
    1: { titulo: "Nuestra primera imagen.", descripcion: "toco recortarla pq salio la reina de sapa." },
    2: { titulo: "Dia de abandono.", descripcion: "Me abandonaste, pobre yo, pero que rica tu, siempre igual de presiosa, cada parte de ti es arte." },
    3: { titulo: "Estos estados.", descripcion: "Siempre que me subes a tu estado diciendo cosas como estas se me hacen agua los ojos." },
    4: { titulo: "Que linda.", descripcion: "Muy linda amor, me encanta esta foto." },
    5: { titulo: "No estoy seguro.", descripcion: "Creo que esta fue una de las fotos que vi en la aplicacion esa, precioso ese pelo, divino." },
    6: { titulo: "El fondo de pantalla perfecto.", descripcion: "Es mi fondo de pantalla, mis dos amores, nada mas que agregar." },
    7: { titulo: "Mi 31.", descripcion: "La mejor parte de mi 31 fue todo el rato que pase hablando contigo. Entre tantos intentos pude sacarte la foto sonriendo, ya te he dicho que tu sonrisa es perfecta?, la amo. Que apetecibles se te veian las tetas en esa llamada, nada recordar siento como se me para." },
    8: { titulo: "Capturas random.", descripcion: "Se que no te gustan, a mi me fascinan." },
    9: { titulo: "Mis dos amores.", descripcion: "Mirate la carita jsakjsakja. De mis fotos favoritas" },
    10: { titulo: "El chuerk.", descripcion: "JAJAJAJAJAJAAJAJAJ de mis favoritas, no es real amor, no debes preocuparte." },
    11: { titulo: "Yo.", descripcion: "La mejor parte de ese dia fue verte reir tanto, recuerdo todo perfectamente, la pasamos bien hasta que me abandonaste." },
    12: { titulo: "Mas del dia de abandono.", descripcion: "Comestible, que mujer tan preciosa." },
    13: { titulo: "Distraida.", descripcion: "Me gusta tomarte fotos asi, tu piensas que te ves mal, todo lo contrario, sales bien, bien linda." },
    14: { titulo: "QUE CARITA DIOS MIO.", descripcion: "Son fotos donde tienes una carita tan linda que solo quiero levantarte a besos." },
    15: { titulo: "Baile.", descripcion: "Yo las tome, no tienes idea de lo feliz que me hace verte bailar, es que no puedo ni explicarlo, no se como." },
    16: { titulo: "Donde el señor Jairo.", descripcion: "Te lo dije una vez, ese dia nos dejaban solos y te preñaba, tenias unas ganas terribles. Gracias a dios al dia siguiente nos dequitamos esas ganas, verte brincando y moviendote de espalda fue simplemente maravilloso, hay que repetir." },
    17: { titulo: "Soy ese.", descripcion: "Solo me da risa que las fotos contigo salgo serio y con el bolso feliz. Tu me haces mas feliz que el bolso amor, ten eso siempre presente." },
    18: { titulo: "Perfecta.", descripcion: "Perfecta, asi te ves antes mis ojos." },
    19: { titulo: "Bando.", descripcion: "Fue la lectura del bando si no estoy mal, yo te vi, lo hiciste bien amor, siempre lo haces bien." },
    20: { titulo: "Noche de comparsa.", descripcion: "No pudimos entrar, igual te vi, bailaste como debias y lo hiciste de maravilla, tu novio fue testigo." },
    21: { titulo: "Borrosita.", descripcion: "Sales bien amor, divina como siempre." },
    22: { titulo: "Arbolito.", descripcion: "Me encantan ambas fotos, en las dos sales preciosa." },
    23: { titulo: "Un machete y un bocadillo.", descripcion: "Sabra dios a quien le diste el bocadillo ese porque a mi no fue." },
    24: { titulo: "Pq te tapas?.", descripcion: "pq te tapas?." },
    25: { titulo: "Camara con filtro.", descripcion: "Buenas fotos, me gustan." },
    26: { titulo: "Segunda vez.", descripcion: "Segunda vez que nos encontrabamos y ya andabas con las lisuras de coger buzo y tomarte fotos en cel ajeno, lisa." },
    27: { titulo: "Ese dia.", descripcion: "La del espejo es de mis favoritas, me encanta cuando te pones esa camisa con la cosita esa encima, ademas el maquillaje hace que te veas mas hermosa todavia." },
    28: { titulo: "Malteada.", descripcion: "Soy feliz tomandote fotitos. Ese dia cumplimos mes y fuimos a la heladeria americana, las trencitas complementan la sonrisa." },
    29: { titulo: "Oreo.", descripcion: "Gracias a ti tuve la motivación para tener un gato, gracias. Sabra dios que nombre le hubiera puesto, lo mas probable es que alguno de un jugador del united, maginate. Garnacho" },
    30: { titulo: "Like.", descripcion: "Estas fotos me encantan, la de arriba a la izquierda recuerdoo que te la pedi, te las hiciste mientras hablabamos por videollamada, quedaron lindas. La foto del centro es simplemente espectacular, quisiera verte algun dia asi." },
    31: { titulo: "A donde todo empezo.", descripcion: "Ese dia volvimos a Snapchat, no se cuantas horas fueron pero la pase de maravilla, luego me abandonaste." },
    32: { titulo: "Fotos viejas.", descripcion: "Me gustan mucho, si fuera por mi tuviera todas tus fotos viejitas, me encantan." },
    33: { titulo: "Mimida", descripcion: "Que linda te ves dormida amor, ojala algun dia al levantarme verte dormidita sea lo que inicie mis mañanas. Un sueño." },
    34: { titulo: "Mas fotos en el espejo.", descripcion: "En serio me encantan." },
    35: { titulo: "Dia de piscina.", descripcion: "El tiempo nos jodio una parte del dia, aun asi la pase de maravilla. El culazo que se te veia ese dia, me la ponia como ladrillo." },
    36: { titulo: "Rabiosa.", descripcion: "Tu cara de no tengo nada es esta amor, siempre tienes esa cara cuando te pregunto que tienes y todavia me dices que nada, ok." },
    37: { titulo: "Espejoooo.", descripcion: "Las fotos viejas me encantan, sobretodo las dos del body, me encantan, el peinado es perfecto. Ahora que hablo body, creo que nunca te he visto solo con el body puesto, tambien te confieso que desde hace rato quiero una foto tuya asi como las que te tomaste en traje de baño azul, pero con el body." },
    38: { titulo: "MAS FOTOESPEJO.", descripcion: "Que linda te ves en las fotos del 24. En la ultima foto estas como para ahorcarte y meterte los dedos." },
    39: { titulo: "FOTOSFOTOS en el espejito.", descripcion: "En la foto con la blusa roja, te ves sexy, no se ve igual a la mayoria, es unica, me encanta. Que rica te ves en pijama, por esta foto fue que te lo dije hace un tiempo, simplemente te ves riquisima." },
    40: { titulo: "Grosera.", descripcion: "Sabes por donde te lo puedes meter, pero como se que no lo vas a hacer, yo lo hare por ti." },
    41: { titulo: "Despues de pichar.", descripcion: "Fotitos despues de hacerlo cochinadas, en este momento llevamos al menos un mes sin hacerlo, no se, perdi la cuenta, cuando vuelvas a esta cama vas a sentir todo ese tiempo adentro." },
    42: { titulo: "Piscina.", descripcion: "Me hace muy feliz verte feliz. No me gustan las piscinas, pero me gustas tu, ese dia la pase de maravilla contigo, estabas muy contenta." },
    43: { titulo: "FOTOBESOS.", descripcion: "MIS FAVORITAS, Cada vez que me llega una foto tirandome un beso se reproduce la del lobo domesticado en mi cabeza." },
    44: { titulo: "DIOS.", descripcion: "Dios mio, es que estas buenisima. A esas fotos solo le falta mi mano encima." },
    45: { titulo: "Subiendo y arriba.", descripcion: "Nos echo la lluvia, aunque igual volvimos." },
    46: { titulo: "Mi falda favorita.", descripcion: "Mi favorita y la que mas detesto, desde que te vi aqui acostada y con medio culo al aire me di cuenta que si te quedaba corta. Que rico verte ensayar con esa falda, que fastidio que todo el que pase te vea ensayar con esa falda." },
    47: { titulo: "Siete.", descripcion: "Fue el siete, tenias el sosten rojo, ese me gusta mucho, todo lo rojo te queda perfecto, blusas, labiales, maquillaje, uñas, todo amor. El pelo no porfis, eso si no me gusta." },
    48: { titulo: "Bando.", descripcion: "Esperar para verte bailar y luego esperar para verte a mi lado, siempre pendiente a donde estabas y por donde venias. Me hubiera gustado saber bailar en ese momento, tu tenias muchas ganas de bailar y yo ni para moverme, perdon." },
    49: { titulo: "Ensayos.", descripcion: "Esos dias de ensayos eran largos, terminaban muy tarde." },
    50: { titulo: "Que mujer.", descripcion: "Que mujer dios mio." },
    51: { titulo: "Esa cara.", descripcion: "Esa cara de reflexión." },
    52: { titulo: "Brilla.", descripcion: "No es mentira cuando digo que brillabas por todos lados, estabas radiante amor. Lo naranja del maquillaje sobre el ojo, perfecto. Recuerdo que me dijiste que tu mama te dijo algo porque segun yo tenia mi cabeza casi entre tus tetas, que yo recuerde eso no paso, ojala y si, que las haya mirado con ganas de comermelas, puede ser, pero ya de meter la cabeza estando ella ahi, puede que tambien, no recuerdo amor." },
    53: { titulo: "La reina de mi carnaval.", descripcion: "Mi foto favorita, fue una foto que te mandaste asi derepente, yo la vi y quede maravillado mientras esperaba a que salieras. Solo mira, que mirada, que sonrisa, que carita, cada que veo la foto me produce calma, entro en un estado de relajo, me siento embobado y hasta me hace sonreir, es perfecta, encantadora." },
    54: { titulo: "Trencitas.", descripcion: "Yo te pedi esa foto, la mandaste en una sola vez, yo insisti para que la mandaras normal. En serio me gusta mucho cuando tienes trencitas, te ves muy bonita amor. Que lastima no poder darles uso cuando te tengo en 4, me va a tocar apreder a hacerlas para poder desbaratarlas." },
    55: { titulo: "Solo se que fue carnavales.", descripcion: "De mis fotos favoritas, la iluminacion es perfecta, el pelo se ve espectacular y esa sonrisa con lengua afuera me mata, es muy tu." },
    56: { titulo: "Fotobeso.", descripcion: "Muy linda esta foto, el trabajo que hay detras de ese hermoso pelo, lo vale todo. Lo unico malo de las fotobeso es que me entran ganas de comerte esa boca, pero entonces tu por alla lejos de mi, como si me odiaras y yo por aca lejos de ti, deseandote." },
    57: { titulo: "Mascota de Ecopetrol.", descripcion: "JSKAJKAJKAJAJAJJA de los dias mas random. Tu solo debias pasar caminando." },
    58: { titulo: "Pintora.", descripcion: "La que mas pinta. Ese dia ibamos a culiar y no pudimos pq tu madre nos iba a acompañar al unico y al malecon tambien y nunca aparecio. Me quede con los condones en el bolso. La verdad pasamos un dia bonito en el malecon, hay una foto donde me estas dando un beso, me encanta esa foto, fue de ese dia, tambien se subieron un monton de hormigas encima jaksjakja." },
    59: { titulo: "Pesadas.", descripcion: "Aqui se te ven las tetas pesadas, o no se, son la 1:52am, estoy alucinando del sueño. Cafecito." },
    60: { titulo: "Radiante.", descripcion: "Asi te ves en esta foto, radiante." },
    61: { titulo: "Foto vieja.", descripcion: "Una foto vieja donde lo que mas me gusta es el peinado, antes te hacias muchos peinados, me gusta este." },
    62: { titulo: "Presa.", descripcion: "JAJAJAJSJAJAJA joa yulian." },
    63: { titulo: "Ojitos.", descripcion: "Creo que era para una gala, no recuerdo, me encanta esta foto, de mis favoritas." },
    64: { titulo: "Tan linda.", descripcion: "Te animaste, me encanta." },
    65: { titulo: "Ni idea.", descripcion: "No tengo contexto y no se pq la puse, todas las fotos que estan aqui es pq me generaron algun pensamiento cuando las vi, no recuerdo nada de esta." },
    66: { titulo: "Holawin.", descripcion: "Es tarde el sueño no me deja acordarme de como escribir las cosas.Te veias encantadora ese dia. Ese vestido me genera pensamientos impuros, me encargue de que lo supieras." },
    67: { titulo: "Besitos.", descripcion: "Desconozco las razones, simplemente me encanta darte besitos ahi, y si no te molesta seguire haciendolo." },
    68: { titulo: "La favorita del dia de abandono.", descripcion: "Me abandonaste pero verte reir en esta foto hace que se me oldive, cuentame que te hizo reir." },
    69: { titulo: "Gorrito.", descripcion: "Estoy mas o menos en la mitad, ultima que comento. Me fascina verte con el gorrito puesto. Pienso que vas a cocinar algo. Me encanta. Siempre que me mandas fotos con ese gorrito, tienes una carita tan inocente que me provoca mucha ternura. Solo mirate, dios mio que linda mi niña preciosa, para agarrar y levantarla a besitos por esos cachetes y esa carita tan linda." },
    70: { titulo: ".", descripcion: "." },
    71: { titulo: ".", descripcion: "." },
    72: { titulo: ".", descripcion: "." },
    73: { titulo: ".", descripcion: "." },
    74: { titulo: ".", descripcion: "." },
    75: { titulo: ".", descripcion: "." },
    76: { titulo: ".", descripcion: "." },
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
    114: { titulo: "MIO.", descripcion: "Dios mio que culote tienes amor, es perfecto. La proxima foto va a ser sin nada encima, solo yo y ese pedazo de culo al natural para mi solito." },
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
