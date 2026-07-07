/*
 * Soyogi (Edición mayores) — content.es.js
 * Contenidos de conversación en español (escritos para la cultura española).
 * ============================================================================
 * ★NO es una traducción de content.ja.js. Los recuerdos dependen de la cultura;
 *   este paquete se escribe en torno a recuerdos que una persona mayor en España
 *   suele compartir (las pesetas, el Seiscientos, Barcelona '92…). Esquema igual
 *   que ja (ver la cabecera de content.ja.js; pista: cue = {open, asks[], expand, care}).
 *
 * ✅ FECHAS VERIFICADAS (2026-07-06) con WebSearch: TVE 28-10-1956, Expo '92 20-04-1992,
 *    apertura de los JJOO de Barcelona 25-07-1992, Mundial 11-07-2010. Idioma activo en langs.
 * ============================================================================
 */
window.SOYOGI_WS_CONTENT = window.SOYOGI_WS_CONTENT || {};
window.SOYOGI_WS_CONTENT["es"] = {

  /* ---- Pestaña 1: flor del día (por mes; significados positivos) ---- */
  flowers: [
    { month:1,  name:"Campanilla de invierno", emoji:"🌼", photo:null, meaning:"Esperanza", note:"Asoma valiente entre la nieve en pleno invierno." },
    { month:2,  name:"Violeta",           emoji:"🌸", photo:null, meaning:"Modestia y fidelidad", note:"Una florecilla perfumada que anuncia la primavera." },
    { month:3,  name:"Narciso",           emoji:"🌼", photo:null, meaning:"Renacer", note:"Con su amarillo abre la primavera." },
    { month:4,  name:"Tulipán",           emoji:"🌷", photo:null, meaning:"Amor", note:"Llena de color los jardines y los jarrones." },
    { month:5,  name:"Lirio de los valles", emoji:"🌷", photo:null, meaning:"Regreso de la felicidad", note:"Pequeñas campanitas blancas de aroma delicado." },
    { month:6,  name:"Rosa",              emoji:"🌹", photo:null, meaning:"Amor y gratitud", note:"La flor clásica del verano." },
    { month:7,  name:"Girasol",           emoji:"🌻", photo:null, meaning:"Alegría y admiración", note:"Vuelve su cara hacia el sol del verano." },
    { month:8,  name:"Jazmín",            emoji:"🌸", photo:null, meaning:"Dulzura y amabilidad", note:"Perfuma las noches de verano." },
    { month:9,  name:"Dalia",             emoji:"🌸", photo:null, meaning:"Dignidad y gratitud", note:"Generosa, florece hasta los primeros fríos." },
    { month:10, name:"Áster",             emoji:"🌸", photo:null, meaning:"Paciencia y elegancia", note:"Una estrella que lleva el verano al otoño." },
    { month:11, name:"Camelia",           emoji:"🌺", photo:null, meaning:"Fidelidad y admiración", note:"Florece cuando casi todo descansa." },
    { month:12, name:"Flor de Pascua",    emoji:"🌺", photo:null, meaning:"Alegría navideña", note:"El rojo y el verde de las fiestas." }
  ],

  /* ---- Pestaña 1: tal día como hoy (fechas verificadas + fiestas year:null) ---- */
  onThisDay: [
    { month:10, day:28, year:1956, text:"Televisión Española (TVE) emite por primera vez.", emoji:"📺" },
    { month:4,  day:20, year:1992, text:"Se inaugura la Exposición Universal (Expo '92) en Sevilla.", emoji:"🌍" },
    { month:7,  day:25, year:1992, text:"Se inauguran los Juegos Olímpicos de Barcelona.", emoji:"🏅" },
    { month:7,  day:11, year:2010, text:"España se proclama campeona del mundo de fútbol por primera vez.", emoji:"⚽" },
    { month:1,  day:1,  year:null, text:"Hoy es Año Nuevo — el comienzo de un año nuevo.", emoji:"🎉" },
    { month:1,  day:6,  year:null, text:"Hoy es el Día de Reyes. Los Reyes Magos traen regalos a los niños.", emoji:"👑" },
    { month:10, day:12, year:null, text:"Hoy es el Día de la Hispanidad, fiesta nacional de España.", emoji:"🇪🇸" },
    { month:12, day:25, year:null, text:"Hoy es Navidad — un día de familia, regalos y buenos deseos.", emoji:"🎄" },
    { month:12, day:31, year:null, text:"Hoy es Nochevieja. Se toman doce uvas con las campanadas para recibir el año.", emoji:"🍇" }
  ],

  /* ---- Pestaña 2: quiz de recuerdos (lo sabías + pista para el personal) ---- */
  quizzes: [
    {
      id:"es-warmup-01", genre:"warmup", emoji:"🍉", photo:null,
      question:"¿Qué es más grande y más pesado — una sandía o una manzana?",
      choices:["Una sandía","Una manzana"], answerIndex:0,
      trivia:"Una sandía grande puede pesar más de 10 kilos — un placer del verano de toda la vida.",
      cue:{
        open:"«Esta era fácil, ¿verdad?» — con una sonrisa, y luego hacia los recuerdos del verano.",
        asks:[
          "¿Comía sandía en verano?",
          "¿Hacían excursiones o meriendas al aire libre?",
          "¿Con quién pasaba los veranos?"
        ],
        expand:"Importa más disfrutar del momento que acertar. Compartir un pequeño recuerdo suyo («en mi casa siempre…») ayuda a que la persona se abra.",
        care:"Si duda, no pasa nada — «¡las dos están buenísimas!» mantiene el ambiente ligero. Una sonrisa ya es un éxito."
      }
    },
    {
      id:"es-warmup-02", genre:"warmup", emoji:"🥔", photo:null,
      question:"¿Qué pesa más — un saco de patatas o una pluma?",
      choices:["Un saco de patatas","Una pluma"], answerIndex:0,
      trivia:"Un saco de patatas pesa enseguida varios kilos. La patata ha sido durante mucho tiempo un alimento básico.",
      cue:{
        open:"«Las patatas, claro — ¡pesan lo suyo!» Y luego hacia la cocina de antes.",
        asks:[
          "¿Cultivaba o recogía patatas?",
          "¿Cuál era su plato preferido de niño?",
          "¿Quién cocinaba en casa?"
        ],
        expand:"La comida despierta recuerdos intensos. Pregunte por los olores y la comida del domingo — la escena cobra vida.",
        care:"Si la comida es un tema delicado, quédese en el recuerdo, no en la comida en sí."
      }
    },
    {
      id:"es-price-01", genre:"price", emoji:"💰", photo:null,
      question:"¿Con qué moneda se pagaba en España antes del euro?",
      choices:["La peseta","El euro","El franco"], answerIndex:0,
      trivia:"Hasta 2002 se pagaba en pesetas. El euro en monedas y billetes llegó el 1 de enero de 2002.",
      cue:{
        open:"«¡Ah, las pesetas de siempre!» — muchos las recuerdan con cariño.",
        asks:[
          "¿Se acuerda bien de las pesetas?",
          "¿Qué se podía comprar con unas pocas pesetas?",
          "¿Cómo ahorraba la paga cuando era niño?"
        ],
        expand:"El dinero abre la puerta a la vida de antes — los precios, las primeras compras, los pequeños placeres. Siga el hilo del recuerdo.",
        care:"Algunos tuvieron poco. Mantenga un tono de asombro compartido, nunca de comparación."
      }
    },
    {
      id:"es-appliance-01", genre:"appliance", emoji:"📺", photo:null,
      question:"Antes de los mandos a distancia, ¿cómo se cambiaba de canal en la televisión?",
      choices:["Girando el botón del aparato","Dando palmadas","Silbando a la pantalla"], answerIndex:0,
      trivia:"Alguien tenía que levantarse a girar el botón — ¡muchas veces el más pequeño de la casa!",
      cue:{
        open:"«¡Alguien tenía que levantarse a girar el botón!» — con una sonrisa.",
        asks:[
          "¿Qué programas veían en familia?",
          "¿Quién decidía el canal?",
          "¿Recuerda el primer televisor en casa?"
        ],
        expand:"El «primer televisor» es un recuerdo alegre y fácil, a menudo ligado a toda la familia. Pregunte quién estaba en la sala.",
        care:"No todas las casas tuvieron pronto un televisor. Pregunte «¿recuerda cuándo llegó?» en lugar de darlo por hecho."
      }
    },
    {
      id:"es-snack-01", genre:"snack", emoji:"🍭", photo:null,
      question:"¿Cómo se llama la golosina de feria hecha de azúcar hilado y rosa?",
      choices:["El algodón de azúcar","El turrón","El regaliz"], answerIndex:0,
      trivia:"Ligero y dulcísimo, el algodón de azúcar era la alegría de las ferias y las verbenas del pueblo.",
      cue:{
        open:"«¡Aquella golosina rosa y esponjosa de la feria!»",
        asks:[
          "¿Iba a la feria o a la verbena del pueblo?",
          "¿Cuál era su golosina preferida de niño?",
          "¿Había una tienda o confitería cerca de casa?"
        ],
        expand:"Las golosinas de la infancia son recuerdos alegres y fáciles de contar. Los nombres de lugares y amigos los hacen vivos.",
        care:"Para algunos, la posguerra fue dura. No dé nada por hecho y vaya al ritmo de la persona."
      }
    },
    {
      id:"es-tool-01", genre:"tool", emoji:"⌨️", photo:null,
      question:"Antes de los ordenadores, ¿qué máquina de oficina golpeaba la tinta sobre el papel?",
      choices:["La máquina de escribir","La caja registradora","La máquina de coser"], answerIndex:0,
      trivia:"El tecleo y el timbrecito al final de cada línea eran sonidos de cada día en la oficina.",
      cue:{
        open:"«¡Aquel tecleo — y el timbrecito al final de la línea!»",
        asks:[
          "¿A qué se dedicaba?",
          "¿Qué herramientas o máquinas usaba a diario?",
          "¿En qué era especialmente bueno en su trabajo?"
        ],
        expand:"Hablar del trabajo y de lo que uno sabía hacer refuerza el orgullo. «¡Sería usted rápido!» siempre agrada.",
        care:"Para quien no trabajó fuera de casa, pregunte por las habilidades que usaba en el hogar."
      }
    },
    {
      id:"es-fashion-01", genre:"fashion", emoji:"👖", photo:null,
      question:"¿Qué pantalones muy acampanados por abajo estuvieron de moda en los años 70?",
      choices:["Los pantalones de campana","El mono de trabajo","Las bermudas"], answerIndex:0,
      trivia:"Los pantalones «de campana» iban de la mano con la música y el ambiente de aquellos años.",
      cue:{
        open:"«¿Seguía la moda de entonces?» — con un guiño.",
        asks:[
          "¿Qué estilos se llevaban cuando era joven?",
          "¿Tenía una prenda preferida?",
          "¿Qué se ponía para salir o para una cita?"
        ],
        expand:"Los recuerdos de moda son los de la juventud radiante — a menudo ligados a los amores. Las caras se iluminan.",
        care:"Para quien ha perdido a su pareja, estos recuerdos pueden traer melancolía. Observe el rostro y no insista."
      }
    },
    {
      id:"es-hobby-01", genre:"hobby", emoji:"🔢", photo:null,
      question:"¿A qué juego se dibujan casillas en el suelo para saltar a la pata coja?",
      choices:["La rayuela","Las canicas","El escondite"], answerIndex:0,
      trivia:"La rayuela se dibujaba con tiza y se saltaba de casilla en casilla — un clásico de los patios.",
      cue:{
        open:"«¿Se le daba bien la rayuela?»",
        asks:[
          "¿A qué jugaba de niño?",
          "¿En qué juego era especialmente bueno?",
          "¿Dónde se juntaba con los amigos para jugar?"
        ],
        expand:"Los recuerdos de juegos van de la mano con los amigos y los lugares. Los juegos de movimiento devuelven la sensación de ser joven y estar lleno de energía.",
        care:"Algunos preferían estar solos. Deje la pregunta abierta: «¿cómo le gustaba pasar el tiempo?»"
      }
    },
    {
      id:"es-warmup-03", genre:"warmup", emoji:"🍋", photo:null,
      question:"¿Qué es más dulce — el azúcar o un limón?",
      choices:["El azúcar","El limón"], answerIndex:0,
      trivia:"Antes el azúcar era preciado; un dulce era un verdadero placer de los días de fiesta.",
      cue:{
        open:"«¡El azúcar, claro!» — con una sonrisa, y luego hacia los dulces de antes.",
        asks:["¿Se hacían dulces a menudo en su casa?","¿Quién hacía los postres?","¿Cuál era su dulce preferido?"],
        expand:"La repostería y las fiestas despiertan recuerdos tiernos. Preguntar por los olores — canela, anís — hace revivir la escena.",
        care:"Aunque los dulces fueran escasos, reconózcalo con cariño: «eran otros tiempos»."
      }
    },
    {
      id:"es-price-02", genre:"price", emoji:"🎬", photo:null,
      question:"¿Cuánto costaba más o menos una entrada de cine en los años 60?",
      choices:["Unas 10 pesetas","Unas 100 pesetas","Unas 1.000 pesetas"], answerIndex:0,
      trivia:"Una tarde de cine era una diversión al alcance de todos, por unas pocas pesetas.",
      cue:{
        open:"«Al cine por unas pocas pesetas — ¡qué tiempos!, ¿verdad?»",
        asks:["¿Iba mucho al cine?","¿Qué películas o artistas le gustaban?","¿Con quién iba al cine?"],
        expand:"No importa el precio exacto, sino el recuerdo. El NO-DO, el descanso, la primera cita — hay mucho que contar.",
        care:"Si duda, un ejemplo de su propia vida ayuda a hacer revivir juntos aquella época."
      }
    },
    {
      id:"es-appliance-02", genre:"appliance", emoji:"☎️", photo:null,
      question:"¿Cómo se marcaba un número en los teléfonos antiguos?",
      choices:["Con un disco giratorio","Con una pantalla táctil"], answerIndex:0,
      trivia:"Se giraba cada cifra en el disco, con un zumbido característico.",
      cue:{
        open:"«El disco — tardaba lo suyo en girar, ¿verdad?»",
        asks:["¿Tenían teléfono en casa desde pronto?","¿A quién llamaba con más gusto?","¿Recuerda su antiguo número?"],
        expand:"El teléfono une con la familia y los amigos. El zumbido del disco devuelve aquellos tiempos.",
        care:"Muchos tuvieron teléfono solo tarde — es normal y es un buen motivo de conversación."
      }
    },
    {
      id:"es-snack-02", genre:"snack", emoji:"🍭", photo:null,
      question:"¿Qué caramelo con palo, inventado en España, se hizo famoso en todo el mundo?",
      choices:["El Chupa Chups","El turrón"], answerIndex:0,
      trivia:"El Chupa Chups, el caramelo con palo, nació en España a finales de los años 50 y conquistó el mundo.",
      cue:{
        open:"«¡El Chupa Chups!» Con una sonrisa, hacia las golosinas de antes.",
        asks:["¿Qué golosinas había en la tienda del barrio?","¿Tenía paga para las chucherías?","¿Cuál era su golosina preferida?"],
        expand:"La tienda del barrio y unas monedas de paga son bonitos puntos de anclaje.",
        care:"Si los dulces eran escasos, honre aquellos tiempos de austeridad con amabilidad, sin juzgar."
      }
    },
    {
      id:"es-tool-02", genre:"tool", emoji:"🧺", photo:null,
      question:"¿Con qué se lavaba la ropa a mano, antes de las lavadoras?",
      choices:["Con una tabla de lavar","Con una aspiradora"], answerIndex:0,
      trivia:"Se frotaba la ropa en la tabla, muchas veces en el lavadero — un trabajo duro, el día de la colada.",
      cue:{
        open:"«La tabla de lavar — era bien duro, ¿verdad?»",
        asks:["¿El día de la colada era un día fijo en su casa?","¿Quién se ocupaba de la ropa?","¿Dónde tendía la ropa a secar?"],
        expand:"Las tareas de antes muestran mucho saber hacer. Un «¡era un trabajo duro!» honra el esfuerzo.",
        care:"El reconocimiento sienta bien: «lo sacó usted todo adelante» da orgullo y abre la conversación."
      }
    },
    {
      id:"es-fashion-02", genre:"fashion", emoji:"👗", photo:null,
      question:"¿Qué falda amplia y con vuelo, ideal para bailar, se llevaba en los años 50?",
      choices:["La falda de vuelo","Los pantalones de campana"], answerIndex:0,
      trivia:"La falda de vuelo, ancha y ligera, giraba al ritmo de los bailes de los años 50.",
      cue:{
        open:"«La falda de vuelo — ¡cómo giraba al bailar!»",
        asks:["¿Le gustaba ir a bailar?","¿Qué moda le gustaba de joven?","¿Tenía un vestido preferido o un buen traje?"],
        expand:"La moda y el baile despiertan la juventud. El primer baile, el primer amor — bonitas puertas que abrir.",
        care:"Cada recuerdo es valioso — incluso una sonrisa sin palabras es un buen resultado."
      }
    },
    {
      id:"es-hobby-02", genre:"hobby", emoji:"🔵", photo:null,
      question:"¿Cómo se llaman las bolitas de cristal de colores con las que jugaban los niños en el suelo?",
      choices:["Las canicas","Los botones"], answerIndex:0,
      trivia:"Se jugaba a las canicas en el suelo; las más bonitas se guardaban y se cambiaban como tesoros.",
      cue:{
        open:"«Las canicas — las más bonitas se guardaban como un tesoro, ¿verdad?»",
        asks:["¿Coleccionaba o cambiaba canicas?","¿A qué jugaba en la calle?","¿Con quién le gustaba jugar?"],
        expand:"Coleccionar e intercambiar despiertan los recuerdos de amistad y de vecindario.",
        care:"Si la infancia fue difícil, quédese con delicadeza en los buenos momentos."
      }
    },
    {
      id:"es-appliance-03", genre:"appliance", emoji:"🎵", photo:null,
      question:"¿Cómo se escuchaba la música preferida en casa antiguamente?",
      choices:["En un disco de vinilo","En un teléfono móvil"], answerIndex:0,
      trivia:"El disco giraba en el tocadiscos; se posaba con cuidado la aguja sobre el surco.",
      cue:{
        open:"«Poner el disco y la aguja — todo un pequeño ritual, ¿verdad?»",
        asks:["¿Qué música o qué cantantes le gustaban?","¿Tenían tocadiscos en casa?","¿Con qué música bailaba?"],
        expand:"La música es un ancla poderosa. Basta el título de una canción para que lleguen las historias.",
        care:"Si una canción emociona, es valioso — deje todo el espacio a la emoción."
      }
    }
  ],

  /* ---- Pestaña 3: ¿esto o aquello? (ligero — basta una frase) ---- */
  eitherOr: [
    { id:"es-eo-01", left:{label:"Café", emoji:"☕"}, right:{label:"Té", emoji:"🍵"},
      staffCue:"«¿Es usted más de café o de té? ¿Cómo lo toma?»" },
    { id:"es-eo-02", left:{label:"Mar", emoji:"🌊"}, right:{label:"Montaña", emoji:"⛰️"},
      staffCue:"«¿Adónde iba de vacaciones — al mar o a la montaña?»" },
    { id:"es-eo-03", left:{label:"Perro", emoji:"🐕"}, right:{label:"Gato", emoji:"🐈"},
      staffCue:"«¿Tuvo alguna vez una mascota? ¿Cómo se llamaba?»" },
    { id:"es-eo-04", left:{label:"Dulce", emoji:"🍰"}, right:{label:"Salado", emoji:"🥨"},
      staffCue:"«¿Más de dulce o de salado? ¿A qué no podía resistirse?»" },
    { id:"es-eo-05", left:{label:"Paella", emoji:"🥘"}, right:{label:"Tortilla", emoji:"🍳"},
      staffCue:"«¿Paella o tortilla de patatas? ¿Cuál era el plato de los domingos?»" },
    { id:"es-eo-06", left:{label:"Radio", emoji:"📻"}, right:{label:"Televisión", emoji:"📺"},
      staffCue:"«¿Radio o televisión — qué se escuchaba más en su casa?»" },
    { id:"es-eo-07", left:{label:"Ciudad", emoji:"🏙️"}, right:{label:"Campo", emoji:"🌾"},
      staffCue:"«¿Se crió más en la ciudad o en el campo?»" },
    { id:"es-eo-08", left:{label:"Primavera", emoji:"🌸"}, right:{label:"Otoño", emoji:"🍂"},
      staffCue:"«¿Primavera u otoño — qué estación prefiere?»" },
    { id:"es-eo-09", left:{label:"Bailar", emoji:"💃"}, right:{label:"Cantar", emoji:"🎤"},
      staffCue:"«¿Le gustaba más bailar o cantar?»" },
    { id:"es-eo-10", left:{label:"Cine", emoji:"🎬"}, right:{label:"Libro", emoji:"📖"},
      staffCue:"«¿Una tarde de cine o un buen libro — qué prefería?»" },
    { id:"es-eo-11", left:{label:"Bicicleta", emoji:"🚲"}, right:{label:"A pie", emoji:"🚶"},
      staffCue:"«¿Se movía mucho en bicicleta o más bien a pie?»" },
    { id:"es-eo-12", left:{label:"Navidad", emoji:"🎄"}, right:{label:"Semana Santa", emoji:"🕯️"},
      staffCue:"«¿Navidad o Semana Santa — qué le gustaba más de niño?»" },
    { id:"es-eo-13", left:{label:"Sopa", emoji:"🍲"}, right:{label:"Asado", emoji:"🍖"},
      staffCue:"«¿Un buen cocido o un asado del domingo?»" },
    { id:"es-eo-14", left:{label:"Helado", emoji:"🍨"}, right:{label:"Chocolate", emoji:"☕"},
      staffCue:"«¿Un helado en verano o un chocolate caliente en invierno?»" },
    { id:"es-eo-15", left:{label:"Madrugador", emoji:"🌅"}, right:{label:"Noctámbulo", emoji:"🌙"},
      staffCue:"«¿Era más madrugador o noctámbulo?»" }
  ],

  /* ---- Pestaña 3: color del ánimo (siempre positivo) ---- */
  colorTest: {
    prompt:null,
    options:[
      { key:"red",    label:"Rojo",     emoji:"🔴", color:"#e0655e",
        result:"Es usted cálido/a y lleno/a de energía — como un sol que anima a quienes le rodean.",
        cue:"«¿A qué se dedicó con todo el corazón cuando era joven?»" },
      { key:"blue",   label:"Azul",     emoji:"🔵", color:"#4a86c9",
        result:"Es usted tranquilo/a y atento/a — alguien en quien los demás confían y se apoyan.",
        cue:"«¿Era a menudo la persona a quien acudían en busca de consejo?»" },
      { key:"yellow", label:"Amarillo", emoji:"🟡", color:"#eab52f",
        result:"Es usted alegre y curioso/a — llena de vida cualquier habitación.",
        cue:"«¿Hay un recuerdo feliz que todavía le hace sonreír?»" },
      { key:"green",  label:"Verde",    emoji:"🟢", color:"#4a9d6f",
        result:"Es usted amable y sereno/a — una presencia que tranquiliza a los demás.",
        cue:"«¿Hay un lugar o un paisaje donde se sienta en paz?»" },
      { key:"orange", label:"Naranja",  emoji:"🟠", color:"#e8934a",
        result:"Es usted cordial y sociable — alguien que sabe unir a la gente.",
        cue:"«¿Han contado siempre mucho para usted los amigos y los vecinos?»" },
      { key:"purple", label:"Morado",   emoji:"🟣", color:"#8a6bd0",
        result:"Es usted refinado/a y sensible — de una fuerza serena, con una rica vida interior.",
        cue:"«¿Hay una música o un arte que siempre le haya conmovido?»" }
    ]
  },

  /* ---- Personajes célebres (cumpleaños 🎂 / aniversario 🕯️). Fechas verificadas en el paquete ja. ---- */
  people: [
    { month:10, day:25, type:"birth", name:"Pablo Picasso",        note:"Pintor español. Nacido en 1881. Cofundador del cubismo y gigante del arte moderno." },
    { month:4,  day:8,  type:"death", name:"Pablo Picasso",        note:"Pintor. Fallecido en 1973. Conocido también por «Guernica»." },
    { month:5,  day:11, type:"birth", name:"Salvador Dalí",        note:"Pintor español. Nacido en 1904. Representante del surrealismo, famoso por sus relojes derretidos." },
    { month:1,  day:23, type:"death", name:"Salvador Dalí",        note:"Pintor. Fallecido en 1989. Conocido por su ingenio y su bigote." },
    { month:3,  day:26, type:"death", name:"Ludwig van Beethoven", note:"Compositor alemán. Nacido hacia 1770, fallecido en 1827. Maestro conocido por su Novena sinfonía." },
    { month:1,  day:27, type:"birth", name:"Wolfgang Amadeus Mozart", note:"Compositor austriaco. Nacido en 1756. Un genio musical con innumerables obras maestras." },
    { month:12, day:5,  type:"death", name:"Wolfgang Amadeus Mozart", note:"Compositor. Fallecido en 1791. Uno de los más grandes del clasicismo vienés." },
    { month:7,  day:28, type:"death", name:"Johann Sebastian Bach", note:"Compositor alemán. Nacido en 1685, fallecido en 1750. El «padre de la música», gigante del barroco." },
    { month:10, day:17, type:"death", name:"Frédéric Chopin",      note:"Compositor polaco. Nacido en 1810, fallecido en 1849. Llamado el «poeta del piano»." },
    { month:5,  day:7,  type:"birth", name:"Chaikovski",           note:"Compositor ruso. Nacido en 1840. Conocido por «El lago de los cisnes» y «El cascanueces»." },
    { month:11, day:6,  type:"death", name:"Chaikovski",           note:"Compositor. Fallecido en 1893. Autor de bellísima música para ballet." },
    { month:10, day:10, type:"birth", name:"Giuseppe Verdi",       note:"Compositor italiano. Nacido en 1813. Célebre por óperas como «La traviata» y «Aida»." },
    { month:1,  day:27, type:"death", name:"Giuseppe Verdi",       note:"Compositor. Fallecido en 1901. Maestro de la ópera italiana." },
    { month:12, day:22, type:"birth", name:"Giacomo Puccini",      note:"Compositor italiano. Nacido en 1858. Célebre por «Madama Butterfly» y «Tosca»." },
    { month:11, day:29, type:"death", name:"Giacomo Puccini",      note:"Compositor. Fallecido en 1924. Uno de los grandes de la ópera italiana." },
    { month:11, day:14, type:"birth", name:"Claude Monet",         note:"Pintor francés. Nacido en 1840. Maestro del impresionismo, célebre por «Los nenúfares»." },
    { month:12, day:5,  type:"death", name:"Claude Monet",         note:"Pintor. Fallecido en 1926. «Impresión, sol naciente» dio nombre al impresionismo." },
    { month:3,  day:30, type:"birth", name:"Vincent van Gogh",     note:"Pintor neerlandés. Nacido en 1853. Célebre por «Los girasoles» y «La noche estrellada»." },
    { month:7,  day:29, type:"death", name:"Vincent van Gogh",     note:"Pintor. Fallecido en 1890. Maestro del postimpresionismo reconocido tras su muerte." },
    { month:2,  day:25, type:"birth", name:"Auguste Renoir",       note:"Pintor francés. Nacido en 1841. Maestro del impresionismo, de estilo luminoso y alegre." },
    { month:12, day:3,  type:"death", name:"Auguste Renoir",       note:"Pintor. Fallecido en 1919. Siguió pintando pese al reuma." },
    { month:3,  day:14, type:"birth", name:"Albert Einstein",      note:"Físico nacido en Alemania. Nacido en 1879. Su teoría de la relatividad cambió el mundo." },
    { month:4,  day:18, type:"death", name:"Albert Einstein",      note:"Físico. Fallecido en 1955. Uno de los mayores científicos del siglo XX." },
    { month:5,  day:12, type:"birth", name:"Florence Nightingale", note:"Enfermera británica. Nacida en 1820. Fundadora de la enfermería moderna; el 12 de mayo es el Día de la Enfermería." },
    { month:8,  day:13, type:"death", name:"Florence Nightingale", note:"Enfermera. Fallecida en 1910. Conocida como «la dama de la lámpara»." },
    { month:11, day:7,  type:"birth", name:"Marie Curie",          note:"Física y química. Nacida en 1867. La primera mujer en recibir un premio Nobel." },
    { month:7,  day:4,  type:"death", name:"Marie Curie",          note:"Científica. Fallecida en 1934. Pionera del estudio de la radiactividad." },
    { month:2,  day:12, type:"birth", name:"Charles Darwin",       note:"Naturalista británico. Nacido en 1809. Autor de «El origen de las especies» y la teoría de la evolución." },
    { month:4,  day:19, type:"death", name:"Charles Darwin",       note:"Naturalista. Fallecido en 1882. Marcó profundamente la biología." },
    { month:2,  day:11, type:"birth", name:"Thomas Edison",        note:"Inventor estadounidense. Nacido en 1847. Conocido por la bombilla y el fonógrafo." },
    { month:10, day:18, type:"death", name:"Thomas Edison",        note:"Inventor. Fallecido en 1931. Lo llamaban el «mago de Menlo Park»." },
    { month:12, day:27, type:"birth", name:"Louis Pasteur",        note:"Bacteriólogo francés. Nacido en 1822. Desarrolló las vacunas y la pasteurización." },
    { month:9,  day:28, type:"death", name:"Louis Pasteur",        note:"Bacteriólogo. Fallecido en 1895. Considerado padre de la microbiología moderna." },
    { month:8,  day:6,  type:"birth", name:"Alexander Fleming",    note:"Bacteriólogo británico. Nacido en 1881. Descubrió el primer antibiótico, la penicilina." },
    { month:3,  day:11, type:"death", name:"Alexander Fleming",    note:"Bacteriólogo. Fallecido en 1955. La penicilina salvó innumerables vidas; premio Nobel." },
    { month:4,  day:16, type:"birth", name:"Charlie Chaplin",      note:"Actor y director inglés. Nacido en 1889. Sus comedias mudas hicieron reír al mundo entero." },
    { month:12, day:25, type:"death", name:"Charlie Chaplin",      note:"El «Charlot». Fallecido en 1977. Querido por películas como «Tiempos modernos»." },
    { month:6,  day:1,  type:"birth", name:"Marilyn Monroe",       note:"Actriz estadounidense. Nacida en 1926. Un icono del cine de los años 50." },
    { month:8,  day:4,  type:"death", name:"Marilyn Monroe",       note:"Actriz. Fallecida en 1962. Una de las estrellas más perdurables de Hollywood." },
    { month:1,  day:8,  type:"birth", name:"Elvis Presley",        note:"Cantante estadounidense. Nacido en 1935. Conocido como el «rey del rock and roll»." },
    { month:8,  day:16, type:"death", name:"Elvis Presley",        note:"Cantante. Fallecido en 1977. Difundió el rock and roll por todo el mundo." },
    { month:4,  day:2,  type:"birth", name:"Hans Christian Andersen", note:"Escritor danés de cuentos. Nacido en 1805. Célebre por «La sirenita» y «La vendedora de fósforos»." },
    { month:8,  day:4,  type:"death", name:"Hans Christian Andersen", note:"Escritor de cuentos. Fallecido en 1875. Sus cuentos son queridos en todo el mundo." },
    { month:6,  day:12, type:"birth", name:"Ana Frank",            note:"Autora del «Diario de Ana Frank». Nacida en 1929. Una niña que escribía, escondida de los nazis." },
    /* ---- Traslado de personalidades mundiales (datos independientes del idioma) — Lote 1 ---- */
    { month:7,  day:6,  type:"birth", name:"Frida Kahlo",           note:"Pintora mexicana. Nacida en 1907. Conocida en todo el mundo por sus autorretratos de colores vivos." },
    { month:7,  day:6,  type:"birth", name:"Sylvester Stallone",    note:"Actor estadounidense. Nacido en 1946. Conocido por las películas «Rocky» y «Rambo»." },
    { month:7,  day:6,  type:"death", name:"Louis Armstrong",       note:"Músico de jazz estadounidense. Fallecido en 1971. Querido por «What a Wonderful World»." },
    { month:7,  day:6,  type:"death", name:"Odilon Redon",          note:"Pintor francés. Fallecido en 1916. Conocido por su estilo onírico." },
    { month:5,  day:4,  type:"birth", name:"Audrey Hepburn",        note:"Actriz. Nacida en 1929. Conocida por «Vacaciones en Roma»; en sus últimos años se dedicó a obras benéficas." },
    { month:1,  day:20, type:"death", name:"Audrey Hepburn",        note:"Actriz. Fallecida en 1993. Querida por películas como «Vacaciones en Roma»." },
    { month:10, day:9,  type:"birth", name:"John Lennon",           note:"Músico británico. Nacido en 1940. Conocido como miembro de los Beatles." },
    { month:8,  day:26, type:"birth", name:"Madre Teresa",          note:"Religiosa católica. Nacida en 1910. Ayudó a los pobres y recibió el Premio Nobel de la Paz." },
    { month:9,  day:5,  type:"death", name:"Madre Teresa",          note:"Religiosa. Fallecida en 1997. Venerada como «la madre de los pobres»." },
    { month:10, day:2,  type:"birth", name:"Mahatma Gandhi",        note:"Líder de la independencia de la India. Nacido en 1869. Dirigió la resistencia no violenta." },
    { month:6,  day:27, type:"birth", name:"Helen Keller",          note:"Activista estadounidense. Nacida en 1880. Sorda y ciega, dio ánimo al mundo entero." },
    { month:6,  day:1,  type:"death", name:"Helen Keller",          note:"Activista social. Fallecida en 1968. Actuó más allá de su discapacidad." },
    { month:2,  day:12, type:"birth", name:"Abraham Lincoln",       note:"16.º presidente de Estados Unidos. Nacido en 1809. Impulsó la abolición de la esclavitud." },
    { month:8,  day:29, type:"birth", name:"Michael Jackson",       note:"Cantante estadounidense. Nacido en 1958. Lo llamaban el «rey del pop»." },
    { month:12, day:5,  type:"birth", name:"Walt Disney",           note:"Autor de dibujos animados y empresario estadounidense. Nacido en 1901. Creador de Mickey Mouse." },
    { month:12, day:15, type:"death", name:"Walt Disney",           note:"Autor de dibujos animados. Fallecido en 1966. Fundador de Disneyland." },
    { month:7,  day:21, type:"birth", name:"Ernest Hemingway",      note:"Novelista estadounidense. Nacido en 1899. Premio Nobel, conocido por «El viejo y el mar»." },
    { month:5,  day:29, type:"birth", name:"John F. Kennedy",       note:"35.º presidente de Estados Unidos. Nacido en 1917. Presidente desde joven, cautivó a la gente." },
    { month:11, day:30, type:"birth", name:"Winston Churchill",     note:"Estadista británico. Nacido en 1874. Primer ministro durante la Segunda Guerra Mundial, célebre por sus discursos." },
    { month:1,  day:24, type:"death", name:"Winston Churchill",     note:"Primer ministro británico. Fallecido en 1965. También recibió el Premio Nobel de Literatura." },
    { month:2,  day:6,  type:"birth", name:"Babe Ruth",             note:"Beisbolista estadounidense. Nacido en 1895. Un bateador legendario." },
    { month:8,  day:16, type:"death", name:"Babe Ruth",             note:"Beisbolista. Fallecido en 1948. Un icono del béisbol estadounidense." },
    { month:1,  day:31, type:"birth", name:"Franz Schubert",        note:"Compositor austriaco. Nacido en 1797. «Rey del lied», conocido por «El rey de los elfos»." },
    { month:11, day:19, type:"death", name:"Franz Schubert",        note:"Compositor. Fallecido en 1828 con solo 31 años. Dejó la «Sinfonía inacabada»." },
    { month:6,  day:29, type:"birth", name:"Antoine de Saint-Exupéry", note:"Escritor y aviador francés. Nacido en 1900. Autor de «El principito»." },
    { month:5,  day:7,  type:"birth", name:"Johannes Brahms",       note:"Compositor alemán. Nacido en 1833. Uno de las «tres B» junto a Bach y Beethoven." },
    { month:4,  day:3,  type:"death", name:"Johannes Brahms",       note:"Compositor. Fallecido en 1897. Querido por su «Canción de cuna»." },
    { month:5,  day:22, type:"birth", name:"Richard Wagner",        note:"Compositor alemán. Nacido en 1813. Célebre por sus grandes dramas musicales." },
    { month:2,  day:13, type:"death", name:"Richard Wagner",        note:"Compositor. Fallecido en 1883. Dejó «El anillo del nibelungo»." },
    { month:11, day:30, type:"birth", name:"Mark Twain",            note:"Escritor estadounidense. Nacido en 1835. Conocido por «Las aventuras de Tom Sawyer»." },
    { month:4,  day:21, type:"death", name:"Mark Twain",            note:"Escritor. Fallecido en 1910. Sus obras llenas de humor e ironía aún se disfrutan." },
    { month:12, day:31, type:"birth", name:"Henri Matisse",         note:"Pintor francés. Nacido en 1869. «Mago del color» y maestro del fovismo." },
    { month:11, day:3,  type:"death", name:"Henri Matisse",         note:"Pintor. Fallecido en 1954. En su vejez exploró también el arte del recorte de papel." },
    { month:1,  day:19, type:"birth", name:"Paul Cézanne",          note:"Pintor francés. Nacido en 1839. «Padre de la pintura moderna»." },
    { month:10, day:23, type:"death", name:"Paul Cézanne",          note:"Pintor. Fallecido en 1906. Sus manzanas y montañas influyeron en el arte del siglo XX." },
    { month:2,  day:8,  type:"birth", name:"James Dean",            note:"Actor estadounidense. Nacido en 1931. Conocido por «Al este del Edén» — un ídolo de la juventud." },
    { month:9,  day:8,  type:"birth", name:"Antonín Dvořák",        note:"Compositor checo. Nacido en 1841. Conocido por la sinfonía «Del Nuevo Mundo»." },
    { month:5,  day:1,  type:"death", name:"Antonín Dvořák",        note:"Compositor. Fallecido en 1904. Entretejió en sus obras las melodías de su tierra." },
    { month:3,  day:4,  type:"birth", name:"Antonio Vivaldi",       note:"Compositor italiano. Nacido en 1678. Conocido por los conciertos «Las cuatro estaciones»." },
    { month:7,  day:28, type:"death", name:"Antonio Vivaldi",       note:"Compositor. Fallecido en 1741. Uno de los grandes maestros del barroco." },
    { month:2,  day:26, type:"birth", name:"Victor Hugo",           note:"Escritor francés. Nacido en 1802. Autor de «Los miserables»." },
    { month:5,  day:22, type:"death", name:"Victor Hugo",           note:"Escritor. Fallecido en 1885. Un maestro del romanticismo despedido con funeral de Estado." },
    { month:8,  day:28, type:"birth", name:"Goethe",                note:"Gran escritor alemán. Nacido en 1749. Conocido por «Fausto» y «Las penas del joven Werther»." },
    { month:3,  day:22, type:"death", name:"Goethe",                note:"Escritor. Fallecido en 1832. Un poeta y autor emblemático de Alemania." },
    { month:10, day:21, type:"birth", name:"Alfred Nobel",          note:"Inventor sueco. Nacido en 1833. Inventó la dinamita e instituyó los Premios Nobel." },
    { month:12, day:10, type:"death", name:"Alfred Nobel",          note:"Inventor. Fallecido en 1896. El 10 de diciembre sigue siendo el día de entrega de los Nobel." },
    { month:3,  day:3,  type:"birth", name:"Alexander Graham Bell", note:"Inventor. Nacido en 1847. Inventó el primer teléfono práctico." },
    { month:8,  day:2,  type:"death", name:"Alexander Graham Bell", note:"Inventor. Fallecido en 1922. Con el teléfono cambió el mundo." },
    { month:8,  day:29, type:"birth", name:"Ingrid Bergman",        note:"Actriz sueca. Nacida en 1915. Conocida por «Casablanca»." },
    { month:8,  day:29, type:"death", name:"Ingrid Bergman",        note:"Actriz. Fallecida en 1982, justo el día de su cumpleaños, el 29 de agosto." },
    { month:11, day:12, type:"birth", name:"Grace Kelly",           note:"Actriz estadounidense. Nacida en 1929. De actriz de Hollywood pasó a ser princesa de Mónaco." },
    { month:5,  day:26, type:"birth", name:"John Wayne",            note:"Actor estadounidense. Nacido en 1907. Una gran estrella del wéstern." },
    { month:6,  day:11, type:"death", name:"John Wayne",            note:"Actor. Fallecido en 1979. Apodado cariñosamente «Duke»." },
    { month:12, day:12, type:"birth", name:"Frank Sinatra",         note:"Cantante y actor estadounidense. Nacido en 1915. Conocido por «My Way»." },
    { month:5,  day:14, type:"death", name:"Frank Sinatra",         note:"Cantante y actor. Fallecido en 1998. Un artista emblemático del siglo XX." },
    { month:6,  day:7,  type:"birth", name:"Paul Gauguin",          note:"Pintor francés. Nacido en 1848. Pintó las gentes y paisajes de Tahití." },
    { month:5,  day:8,  type:"death", name:"Paul Gauguin",          note:"Pintor. Fallecido en 1903. Conocido también por su amistad con van Gogh." },
    { month:11, day:20, type:"death", name:"Lev Tolstói",           note:"Escritor ruso. Fallecido en 1910. Conocido por «Guerra y paz» y «Ana Karénina»." },
    { month:2,  day:9,  type:"death", name:"Fiódor Dostoyevski",    note:"Escritor ruso. Fallecido en 1881. Conocido por «Crimen y castigo» y «Los hermanos Karamázov»." },
    { month:10, day:4,  type:"birth", name:"Jean-François Millet",  note:"Pintor francés. Nacido en 1814. Conocido por «Las espigadoras» y «El Ángelus»." },
    { month:1,  day:20, type:"death", name:"Jean-François Millet",  note:"Pintor. Fallecido en 1875. Un maestro de la pintura de campesinos de la escuela de Barbizon." },
    { month:7,  day:19, type:"birth", name:"Edgar Degas",           note:"Pintor francés. Nacido en 1834. Conocido por sus cuadros de bailarinas." },
    { month:9,  day:27, type:"death", name:"Edgar Degas",           note:"Pintor. Fallecido en 1917. Un impresionista que captó el instante del movimiento." },
    { month:7,  day:14, type:"birth", name:"Gustav Klimt",          note:"Pintor austriaco. Nacido en 1862. Conocido por «El beso», realzado con pan de oro." },
    { month:2,  day:6,  type:"death", name:"Gustav Klimt",          note:"Pintor. Fallecido en 1918. Encabezó la Secesión de Viena." },
    { month:12, day:12, type:"birth", name:"Edvard Munch",          note:"Pintor noruego. Nacido en 1863. Famoso en todo el mundo como autor de «El grito»." },
    { month:1,  day:23, type:"death", name:"Edvard Munch",          note:"Pintor. Fallecido en 1944. Un expresionista que pintó la angustia y la soledad." },
    { month:2,  day:7,  type:"birth", name:"Charles Dickens",       note:"Escritor inglés. Nacido en 1812. Conocido por «Canción de Navidad» y «Oliver Twist»." },
    { month:6,  day:9,  type:"death", name:"Charles Dickens",       note:"Escritor. Fallecido en 1870. Un autor nacional atento a los más débiles." }
  ]
};
