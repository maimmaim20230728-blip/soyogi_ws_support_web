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
      staffCue:"«¿Paella o tortilla de patatas? ¿Cuál era el plato de los domingos?»" }
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
        cue:"«¿Hay un lugar o un paisaje donde se sienta en paz?»" }
    ]
  }
};
