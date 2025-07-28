// --- SCRIPT DE IMAGEN ALEATORIA CON OBJETO ---

const btn = document.getElementById('btn');
const picture = document.querySelector('.picture');
const tituloElemento = document.querySelector('.title-main');
const descripcionElemento = document.querySelector('.description');
const totalImages = 107; // Ajusta según la cantidad real

// Objeto con títulos y descripciones personalizados
const infoImagenes = {
    1: { titulo: "Nuestra primera imagen.", descripcion: "toco recortarla pq salio la reina de sapa." },
    2: { titulo: "Dia de abandono.", descripcion: "Me abandonaste, pobre yo, pero que rica tu, siempre igual de presiosa, cada parte de ti es arte." },
    3: { titulo: "Estos estados.", descripcion: "Siempre que me subes a tu estado diciendo cosas como estas se me hacen agua los ojos." },
    4: { titulo: "Que linda.", descripcion: "Muy linda amor, me encanta esta foto." },
    5: { titulo: "No estoy seguro.", descripcion: "Creo que esta fue una de las fotos que vi en la aplicacion esa, precioso ese pelo, divino." },
    6: { titulo: "El fondo de pantalla perfecto.", descripcion: "Es mi fondo de pantalla, mis dos amores, nada mas que agregar." },
    7: { titulo: "Mi 31.", descripcion: "La mejor parte de mi 31 fue todo el rato que pase hablando contigo, y en eso mismo se resumio mi semana en San Onofre. Entre tantos intentos pude sacarte la foto sonriendo, ya te he dicho que tu sonrisa es perfecta?, la amo. Que apetecibles se te veian las tetas en esa llamada, nada recordar siento como se me para." },
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
    70: { titulo: "Otra del dia de abandono.", descripcion: "Si voy a un cumpleaños con mis amigos y llego con que seguí a unas mujeres porque nos cayeron bien, como te sentirias?. La verdad nunca pregunte que hiciste donde Samuel porque no se que me vayas a decir, yo con cualquier cosa que me disguste, me pongo raro y casi siempre prefiero ahorrarme eso. Yo se que fuiste a pasar un buen rato en el cumpleaños de tu amigo con tus amigas, pero aja. No entiendo que es eso de estar siguiendo a unos manes que conociste un dia disque porque cayeron bien, cual es la finalidad de eso?, que tiene que hacer un hombre como para que tu aceptes seguirlo en instagram?, no se no entiendo. Me siento estupido quejandome aqui por quien te sigue o a quien sigues, que pereza. No me prestes atención. Por cierto, que rica estas mujer." },
    71: { titulo: "Mi novia en pijama.", descripcion: "Simplemente no puedo explicar porque me gusta tanto verte en pijama. Verte al natural es simplemente espectacular." },
    72: { titulo: "Machete.", descripcion: "Un machete." },
    73: { titulo: "Ojo.", descripcion: "Ojo." },
    74: { titulo: "Grosera.", descripcion: "Pq eres tan grosera?." },
    75: { titulo: "Tan tu.", descripcion: "Esta foto es muy tu amor, te adoro." },
    76: { titulo: "Gracias por la foto en HD.", descripcion: "JSAKJAKJAJAJ gracias chatgpt, hiciste exactamente lo que te pedi." },
    77: { titulo: "Sanguche", descripcion: "Mi linda novia comiendose un emparedado." },
    78: { titulo: "Tabio.", descripcion: "Ahi ya eras mujer mia, de hecho eras mujer mia desde el primer dia que te hable, solo que no lo sabias. Preciosa mi amor, siempre igual de preciosa." },
    79: { titulo: "Creo que esta ya la comente.", descripcion: "No recuerdo, se la mande a Cristian, parecia un loquito." },
    80: { titulo: "Año nuevo.", descripcion: "QUE MUJER, MI MUJER. Lo que te extrañe todo el tiempo que estuve lejos de ti." },
    81: { titulo: "QUE RICO.", descripcion: "Que culote amor, que rico cuando se te subia, ni mas te lo vuelvas a poner." },
    82: { titulo: "????.", descripcion: "Esta foto que???." },
    83: { titulo: "Un dia de piscina.", descripcion: "No se tomar fotos, pero todas me gustaron." },
    84: { titulo: "Ojo de persona lisa.", descripcion: "Ojo de persona lisa." },
    85: { titulo: "Yo feliz.", descripcion: "Yo feliz viendo a mi mujer bailar, viendo a mi mujer bailar soy feliz." },
    86: { titulo: "La primera foto.", descripcion: "La primera foto que tome yo, es de mis favoritas." },
    87: { titulo: "No se.", descripcion: "Ni idea, pero si esta aqui me recuerdo a algo, seguro fue un buen día. Se que subiste esa foto a mi estado y fue nuestra mi primera foto en mi estado. Que linda foto." },
    88: { titulo: "Una sonrisa.", descripcion: "Una sonrisa y cualquier mal desaparece, esa sonrisa la quiero para el resto de mi vida." },
    89: { titulo: "Pregunta seria.", descripcion: "Amor pero es que quien se cae de una hamaca?. Te amo mi reina<3." },
    90: { titulo: "Y ese filtro?.", descripcion: "Esta como raro ese filtro amor." },
    91: { titulo: "La sonrisa mas linda de este planeta.", descripcion: "No hay sonrisa mas linda que esta, la amo y te amo con todo mi corazón." },
    92: { titulo: "Esas uñas.", descripcion: "Hay unas fotos con esas uñas que me traen muy buenos recuerdos, cuando veas esto mandame una porfis, quiero recordar cositas." },
    93: { titulo: "Fetival cacorro.", descripcion: "Me llevaste a la vaina de los cacorros." },
    94: { titulo: "El loquito con la lindota.", descripcion: "Un loquito del centro junto a una preciosa de sonrisa bonita." },
    95: { titulo: "Que linda.", descripcion: "Que linda amor, me gusta mucho esta foto, de mis favoritas." },
    96: { titulo: "Me gusta.", descripcion: "." },
    97: { titulo: "Tia Maribel.", descripcion: "Tengo una foto con mi tia maribel" },
    98: { titulo: "Efectivamente.", descripcion: "Este dia conociste a nain jaskjak." },
    99: { titulo: "...", descripcion: "Tres puntos suspensivos jakjskaj. Ese dia es para haberte dejado todo el cuerpo marcado." },
    100: { titulo: "La 100.", descripcion: "Esta es la imagen 100 amor, es de mis fotos favoritas, te ves supertierna jksajka me encanta. Perdon por mostrarsela a Valentina." },
    101: { titulo: "Cubana.", descripcion: "Que rabia cuando subes fotos sin mandarmelas." },
    102: { titulo: "Fotitos en el espejos, como me encantan", descripcion: "Te ves divina en todas, te amo, nunca dejes de mandarme fotos en el espejo." },
    103: { titulo: "ME ENCANTA.", descripcion: "Tu chiquita es lo mas lindo y tierno que hay dios mio." },
    104: { titulo: "Raiba", descripcion: "Que rabia cuando subes fotos sin mandarmelas." },
    105: { titulo: "Mas baile.", descripcion: "Verte bailar es fascinante." },
    106: { titulo: "Primer dia de novios.", descripcion: "Aunque ya eras mujer mia desde el primer hola, ya aqui lo empezaste a saber. Gracias por darme la oportunidad de ser tu novio. Hoy son 8, casi 9 meses que llevamos juntos, hemos compartido mucho tiempo y siempre estoy agradecido por haberte conocido. Eres una buena mujer y no entiendo como nadie te supo valorar, aunque siempre te lo digo, aqui te lo repito, mereces todo lo bueno de este mundo y yo me esfuerzo por dartelo. Me esforzare por ser el mejor hombre para ti, vere que no te falte nada, te ayudare a ser una mujer fuerte y capaz de cualquier cosa que se proponga. Propondre muchas metas para mi, para ti y para nuestro crecimiento como personas y como pareja. Te amo." },
    107: { titulo: "MIRATE.", descripcion: "PERO MIRATE, divina mujer, me encanta como resaltas aqui. Que morena bella dios." },
    108: { titulo: "Me odias.", descripcion: "Me odias." },
    109: { titulo: ".", descripcion: "." },
    110: { titulo: ".", descripcion: "." },
    111: { titulo: ".", descripcion: "." },
    112: { titulo: ".", descripcion: "." },
    113: { titulo: ".", descripcion: "." },
    114: { titulo: "MIO.", descripcion: "Dios mio que culote tienes amor, es perfecto. La proxima foto va a ser sin nada encima, solo yo y ese pedazo de culo al natural para mi solito." },
    115: { titulo: ".", descripcion: "." },
    116: { titulo: ".", descripcion: "." },
    117: { titulo: ".", descripcion: "." },
    118: { titulo: ".", descripcion: "." },
    119: { titulo: ".", descripcion: "." },
    120: { titulo: ".", descripcion: "." },
    121: { titulo: ".", descripcion: "." },
    122: { titulo: ".", descripcion: "." },
    123: { titulo: ".", descripcion: "." },
    124: { titulo: ".", descripcion: "." },
    125: { titulo: ".", descripcion: "." },
    126: { titulo: ".", descripcion: "." },
    127: { titulo: ".", descripcion: "." },
    128: { titulo: ".", descripcion: "." },
    129: { titulo: ".", descripcion: "." },
    130: { titulo: ".", descripcion: "." },
    131: { titulo: ".", descripcion: "." },
    132: { titulo: ".", descripcion: "." },
    133: { titulo: ".", descripcion: "." },
    134: { titulo: ".", descripcion: "." },
    135: { titulo: ".", descripcion: "." },
    136: { titulo: ".", descripcion: "." }
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
