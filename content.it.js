/*
 * Soyogi (Edizione anziani) — content.it.js
 * Contenuti di conversazione in italiano (scritti per la cultura italiana).
 * ============================================================================
 * ★NON è una traduzione di content.ja.js. I ricordi sono legati alla cultura;
 *   questo pacchetto è scritto attorno a ricordi che un anziano in Italia può
 *   condividere volentieri (le lire, i Mondiali dell'82, la Fiat 500…). Schema
 *   uguale a ja (vedi l'intestazione di content.ja.js; spunto: cue = {open, asks[], expand, care}).
 *   Le date storiche sono verificate e citate. Verificare anche ogni aggiunta.
 * ============================================================================
 */
window.SOYOGI_WS_CONTENT = window.SOYOGI_WS_CONTENT || {};
window.SOYOGI_WS_CONTENT["it"] = {

  /* ---- Scheda 1: fiore del giorno (per mese; significati positivi) ---- */
  flowers: [
    { month:1,  name:"Bucaneve",         emoji:"🌼", photo:null, meaning:"Speranza", note:"Spunta coraggioso dalla neve nel cuore dell'inverno." },
    { month:2,  name:"Viola",            emoji:"🌸", photo:null, meaning:"Modestia e fedeltà", note:"Un piccolo fiore profumato che annuncia la primavera." },
    { month:3,  name:"Narciso",          emoji:"🌼", photo:null, meaning:"Rinascita", note:"Con il suo giallo apre la primavera." },
    { month:4,  name:"Tulipano",         emoji:"🌷", photo:null, meaning:"Amore", note:"Porta colore nei giardini e nei vasi." },
    { month:5,  name:"Mughetto",         emoji:"🌷", photo:null, meaning:"Ritorno della felicità", note:"Piccole campanelle bianche dal profumo delicato." },
    { month:6,  name:"Rosa",             emoji:"🌹", photo:null, meaning:"Amore e gratitudine", note:"Il fiore classico dell'estate." },
    { month:7,  name:"Girasole",         emoji:"🌻", photo:null, meaning:"Allegria e ammirazione", note:"Volge il volto verso il sole d'estate." },
    { month:8,  name:"Gelsomino",        emoji:"🌸", photo:null, meaning:"Dolcezza e amabilità", note:"Profuma le sere d'estate." },
    { month:9,  name:"Dalia",            emoji:"🌸", photo:null, meaning:"Dignità e gratitudine", note:"Generosa, fiorisce fino ai primi freddi." },
    { month:10, name:"Astro",            emoji:"🌸", photo:null, meaning:"Pazienza ed eleganza", note:"Una stella che porta l'estate nell'autunno." },
    { month:11, name:"Camelia",          emoji:"🌺", photo:null, meaning:"Fedeltà e ammirazione", note:"Fiorisce quando quasi tutto riposa." },
    { month:12, name:"Stella di Natale", emoji:"🌺", photo:null, meaning:"Gioia del Natale", note:"Il rosso e il verde delle feste." }
  ],

  /* ---- Scheda 1: accadde oggi (eventi lieti e verificati) ---- */
  onThisDay: [
    { month:1,  day:3,  year:1954, text:"La RAI inizia le trasmissioni televisive ufficiali in Italia.", emoji:"📺" },
    { month:6,  day:2,  year:1946, text:"L'Italia diventa una Repubblica con il referendum: nasce la Festa della Repubblica.", emoji:"🇮🇹" },
    { month:7,  day:4,  year:1957, text:"La Fiat presenta al pubblico la \"Nuova 500\", con una sfilata per le vie di Torino.", emoji:"🚗" },
    { month:7,  day:9,  year:2006, text:"L'Italia è campione del mondo di calcio, battendo la Francia ai rigori.", emoji:"⚽" },
    { month:7,  day:11, year:1982, text:"L'Italia è campione del mondo di calcio, battendo la Germania Ovest 3-1.", emoji:"⚽" },
    { month:8,  day:25, year:1960, text:"Si aprono a Roma i Giochi Olimpici estivi.", emoji:"🏅" }
  ],

  /* ---- Scheda 2: quiz dei ricordi (lo sapevi + spunto per operatori) ---- */
  quizzes: [
    {
      id:"it-warmup-01", genre:"warmup", emoji:"🍉", photo:null,
      question:"Cosa è più grande e più pesante — un'anguria o una mela?",
      choices:["L'anguria","La mela"], answerIndex:0,
      trivia:"Un'anguria grande può superare i 10 chili — un piacere d'estate da sempre.",
      cue:{
        open:"«Questa era facile, vero?» — con un sorriso, poi verso i ricordi d'estate.",
        asks:[
          "Mangiavate l'anguria d'estate?",
          "Facevate gite o scampagnate?",
          "Con chi passavate le estati?"
        ],
        expand:"Conta più il piacere del momento che la risposta giusta. Un vostro piccolo ricordo («da noi c'era sempre…») aiuta la persona ad aprirsi.",
        care:"Se esita, nessun problema — «sono buone entrambe!» mantiene tutto leggero. Un sorriso è già un successo."
      }
    },
    {
      id:"it-warmup-02", genre:"warmup", emoji:"🥔", photo:null,
      question:"Cosa pesa di più — un sacco di patate o una piuma?",
      choices:["Un sacco di patate","Una piuma"], answerIndex:0,
      trivia:"Un sacco di patate pesa in fretta diversi chili. Le patate sono state a lungo un alimento base.",
      cue:{
        open:"«Le patate, di sicuro — pesano parecchio!» Poi verso la cucina di una volta.",
        asks:[
          "Coltivavate o raccoglievate le patate?",
          "Qual era il vostro piatto preferito da bambini?",
          "Chi cucinava in casa?"
        ],
        expand:"Il cibo risveglia ricordi forti. Chiedete dei profumi e del pranzo della domenica — la scena torna viva.",
        care:"Se il cibo è un tema delicato, restate sul ricordo, non sul cibo in sé."
      }
    },
    {
      id:"it-price-01", genre:"price", emoji:"💰", photo:null,
      question:"Con quale moneta si pagava in Italia prima dell'euro?",
      choices:["La lira","L'euro","Il franco"], answerIndex:0,
      trivia:"Fino al 2002 si pagava in lire. L'euro in monete e banconote è arrivato il 1º gennaio 2002.",
      cue:{
        open:"«Ah, le vecchie lire!» — molti le ricordano con affetto.",
        asks:[
          "Ricordate bene le lire?",
          "Cosa si poteva comprare con poche lire?",
          "Come mettevate da parte la paghetta da bambini?"
        ],
        expand:"I soldi aprono la porta alla vita di una volta — i prezzi, i primi acquisti, i piccoli piaceri. Seguite il filo del ricordo.",
        care:"Alcuni hanno avuto poco. Mantenete un tono di stupore condiviso, mai di confronto."
      }
    },
    {
      id:"it-appliance-01", genre:"appliance", emoji:"📺", photo:null,
      question:"Prima dei telecomandi, come si cambiava canale alla televisione?",
      choices:["Girando la manopola dell'apparecchio","Battendo le mani","Fischiando allo schermo"], answerIndex:0,
      trivia:"Qualcuno doveva alzarsi e girare la manopola — spesso il più piccolo di casa!",
      cue:{
        open:"«Qualcuno doveva alzarsi e girare la manopola!» — con un sorriso.",
        asks:[
          "Quali programmi guardavate in famiglia?",
          "Chi decideva il canale?",
          "Ricordate il primo televisore in casa?"
        ],
        expand:"Il «primo televisore» è un ricordo lieto e facile, spesso legato a tutta la famiglia. Chiedete chi c'era nella stanza.",
        care:"Non tutte le case ebbero presto un apparecchio. Chiedete «ricordate quando arrivò?» invece di darlo per scontato."
      }
    },
    {
      id:"it-snack-01", genre:"snack", emoji:"🍭", photo:null,
      question:"Come si chiama la golosità da luna park fatta di zucchero filato tutto rosa?",
      choices:["Lo zucchero filato","Il torrone","La liquirizia"], answerIndex:0,
      trivia:"Leggero e dolcissimo, lo zucchero filato era la gioia del luna park e delle sagre di paese.",
      cue:{
        open:"«Quel dolce rosa e soffice del luna park!»",
        asks:[
          "Andavate al luna park o alla sagra del paese?",
          "Qual era la vostra golosità preferita da bambini?",
          "C'era una bottega o un negozio di dolci vicino a casa?"
        ],
        expand:"Le golosità d'infanzia sono ricordi allegri e facili da raccontare. I nomi dei luoghi e degli amici li rendono vivi.",
        care:"Per alcuni il dopoguerra fu duro. Non date nulla per scontato e andate al ritmo della persona."
      }
    },
    {
      id:"it-tool-01", genre:"tool", emoji:"⌨️", photo:null,
      question:"Prima dei computer, quale macchina da ufficio batteva l'inchiostro sulla carta?",
      choices:["La macchina da scrivere","Il registratore di cassa","La macchina da cucire"], answerIndex:0,
      trivia:"Il ticchettio dei tasti e il campanello a fine riga erano suoni di tutti i giorni in ufficio.",
      cue:{
        open:"«Quel ticchettio dei tasti — e il campanello a fine riga!»",
        asks:[
          "Che lavoro facevate?",
          "Quali strumenti o macchine usavate ogni giorno?",
          "In cosa eravate particolarmente bravi nel vostro lavoro?"
        ],
        expand:"Parlare del lavoro e delle proprie capacità rafforza l'autostima. «Sarete stati veloci!» fa sempre piacere.",
        care:"Per chi non ha lavorato fuori casa, chiedete delle capacità usate in casa."
      }
    },
    {
      id:"it-fashion-01", genre:"fashion", emoji:"👖", photo:null,
      question:"Quali pantaloni molto svasati in fondo erano di moda negli anni '70?",
      choices:["I pantaloni a zampa d'elefante","I pantaloni alla zuava","La salopette"], answerIndex:0,
      trivia:"I pantaloni «a zampa d'elefante» andavano di pari passo con la musica e lo spirito di quegli anni.",
      cue:{
        open:"«Seguivate la moda a quei tempi?» — con un sorriso.",
        asks:[
          "Quali stili andavano di moda quando eravate giovani?",
          "Avevate un capo preferito?",
          "Cosa indossavate per uscire o per un appuntamento?"
        ],
        expand:"I ricordi di moda sono quelli della gioventù splendente — spesso legati agli amori. I volti si illuminano.",
        care:"Per chi ha perso il coniuge, questi ricordi possono avere una nota di malinconia. Osservate il volto e non insistete."
      }
    },
    {
      id:"it-hobby-01", genre:"hobby", emoji:"🔢", photo:null,
      question:"A quale gioco si disegnano caselle per terra e si salta su un piede solo?",
      choices:["La campana","Le biglie","Il nascondino"], answerIndex:0,
      trivia:"La «campana» si disegnava col gesso e si saltava di casella in casella — un grande classico dei cortili.",
      cue:{
        open:"«Eravate bravi a giocare a campana?»",
        asks:[
          "A cosa giocavate da bambini?",
          "In quale gioco eravate particolarmente bravi?",
          "Dove vi trovavate con gli amici per giocare?"
        ],
        expand:"I ricordi dei giochi vanno a braccetto con gli amici e i luoghi. I giochi di movimento riportano la sensazione di essere giovani e pieni di energia.",
        care:"Alcuni preferivano stare da soli. Tenete la domanda aperta: «come vi piaceva passare il tempo?»"
      }
    }
  ],

  /* ---- Scheda 3: questo o quello? (leggero — basta una frase) ---- */
  eitherOr: [
    { id:"it-eo-01", left:{label:"Caffè", emoji:"☕"}, right:{label:"Tè", emoji:"🍵"},
      staffCue:"«Siete più da caffè o da tè? Come lo prendete?»" },
    { id:"it-eo-02", left:{label:"Mare", emoji:"🌊"}, right:{label:"Montagna", emoji:"⛰️"},
      staffCue:"«Dove andavate in vacanza — al mare o in montagna?»" },
    { id:"it-eo-03", left:{label:"Cane", emoji:"🐕"}, right:{label:"Gatto", emoji:"🐈"},
      staffCue:"«Avete mai avuto un animale? Come si chiamava?»" },
    { id:"it-eo-04", left:{label:"Dolce", emoji:"🍰"}, right:{label:"Salato", emoji:"🥨"},
      staffCue:"«Più goloso di dolce o di salato? A cosa non sapevate resistere?»" },
    { id:"it-eo-05", left:{label:"Pasta", emoji:"🍝"}, right:{label:"Pizza", emoji:"🍕"},
      staffCue:"«Meglio la pasta o la pizza? Qual era il piatto della domenica?»" }
  ],

  /* ---- Scheda 3: colore dell'umore (sempre positivo) ---- */
  colorTest: {
    prompt:null,
    options:[
      { key:"red",    label:"Rosso", emoji:"🔴", color:"#e0655e",
        result:"Siete calorosi e pieni di energia — come un sole che rincuora chi vi sta intorno.",
        cue:"«A cosa vi siete dedicati con tutto il cuore da giovani?»" },
      { key:"blue",   label:"Blu",   emoji:"🔵", color:"#4a86c9",
        result:"Siete calmi e premurosi — una persona di cui gli altri si fidano e su cui si appoggiano.",
        cue:"«Eravate spesso voi la persona a cui gli altri chiedevano consiglio?»" },
      { key:"yellow", label:"Giallo", emoji:"🟡", color:"#eab52f",
        result:"Siete allegri e curiosi — portate vita in ogni stanza.",
        cue:"«C'è un ricordo felice che vi fa ancora sorridere?»" },
      { key:"green",  label:"Verde", emoji:"🟢", color:"#4a9d6f",
        result:"Siete gentili e sereni — una presenza che mette gli altri a proprio agio.",
        cue:"«C'è un luogo o un panorama dove vi sentite in pace?»" }
    ]
  },

  /* ---- Personaggi celebri (compleanno 🎂 / anniversario 🕯️). Date verificate nel pacchetto ja. ---- */
  people: [
    { month:10, day:10, type:"birth", name:"Giuseppe Verdi",       note:"Compositore italiano. Nato nel 1813. Celebre per opere come «La traviata» e «Aida»." },
    { month:1,  day:27, type:"death", name:"Giuseppe Verdi",       note:"Compositore. Morto nel 1901. Maestro dell'opera italiana." },
    { month:12, day:22, type:"birth", name:"Giacomo Puccini",      note:"Compositore italiano. Nato nel 1858. Celebre per «Madama Butterfly» e «Tosca»." },
    { month:11, day:29, type:"death", name:"Giacomo Puccini",      note:"Compositore. Morto nel 1924. Tra i più grandi dell'opera italiana." },
    { month:3,  day:4,  type:"birth", name:"Antonio Vivaldi",      note:"Compositore italiano. Nato nel 1678. Celebre per il concerto «Le quattro stagioni»." },
    { month:7,  day:28, type:"death", name:"Antonio Vivaldi",      note:"Compositore. Morto nel 1741. Tra i grandi della musica barocca." },
    { month:2,  day:29, type:"birth", name:"Gioachino Rossini",    note:"Compositore italiano. Nato nel 1792, un 29 febbraio bisestile. Celebre per «Il barbiere di Siviglia»." },
    { month:11, day:13, type:"death", name:"Gioachino Rossini",    note:"Compositore. Morto nel 1868. Amato per le sue opere brillanti." },
    { month:3,  day:26, type:"death", name:"Ludwig van Beethoven", note:"Compositore tedesco. Nato intorno al 1770, morto nel 1827. Celebre per la Nona sinfonia." },
    { month:1,  day:27, type:"birth", name:"Wolfgang Amadeus Mozart", note:"Compositore austriaco. Nato nel 1756. Un genio musicale dalle innumerevoli opere." },
    { month:12, day:5,  type:"death", name:"Wolfgang Amadeus Mozart", note:"Compositore. Morto nel 1791. Tra i più grandi del classicismo viennese." },
    { month:7,  day:28, type:"death", name:"Johann Sebastian Bach", note:"Compositore tedesco. Nato nel 1685, morto nel 1750. Il «padre della musica», gigante del barocco." },
    { month:10, day:17, type:"death", name:"Frédéric Chopin",      note:"Compositore polacco. Nato nel 1810, morto nel 1849. È chiamato il «poeta del pianoforte»." },
    { month:5,  day:7,  type:"birth", name:"Pëtr Čajkovskij",      note:"Compositore russo. Nato nel 1840. Celebre per «Il lago dei cigni» e «Lo schiaccianoci»." },
    { month:11, day:6,  type:"death", name:"Pëtr Čajkovskij",      note:"Compositore. Morto nel 1893. Autore di splendida musica per balletto." },
    { month:11, day:14, type:"birth", name:"Claude Monet",         note:"Pittore francese. Nato nel 1840. Maestro dell'impressionismo, celebre per le «Ninfee»." },
    { month:12, day:5,  type:"death", name:"Claude Monet",         note:"Pittore. Morto nel 1926. «Impressione, levar del sole» diede il nome all'impressionismo." },
    { month:3,  day:30, type:"birth", name:"Vincent van Gogh",     note:"Pittore olandese. Nato nel 1853. Celebre per «I girasoli» e «Notte stellata»." },
    { month:7,  day:29, type:"death", name:"Vincent van Gogh",     note:"Pittore. Morto nel 1890. Maestro del postimpressionismo apprezzato dopo la morte." },
    { month:10, day:25, type:"birth", name:"Pablo Picasso",        note:"Pittore spagnolo. Nato nel 1881. Cofondatore del cubismo e gigante dell'arte moderna." },
    { month:4,  day:8,  type:"death", name:"Pablo Picasso",        note:"Pittore. Morto nel 1973. Celebre anche per «Guernica»." },
    { month:3,  day:14, type:"birth", name:"Albert Einstein",      note:"Fisico nato in Germania. Nato nel 1879. La sua teoria della relatività cambiò il mondo." },
    { month:4,  day:18, type:"death", name:"Albert Einstein",      note:"Fisico. Morto nel 1955. Tra i più grandi scienziati del XX secolo." },
    { month:5,  day:12, type:"birth", name:"Florence Nightingale", note:"Infermiera britannica. Nata nel 1820. Fondatrice dell'assistenza moderna; il 12 maggio è la Giornata degli infermieri." },
    { month:8,  day:13, type:"death", name:"Florence Nightingale", note:"Infermiera. Morta nel 1910. Nota come «la signora della lampada»." },
    { month:11, day:7,  type:"birth", name:"Marie Curie",          note:"Fisica e chimica. Nata nel 1867. La prima donna a ricevere un premio Nobel." },
    { month:7,  day:4,  type:"death", name:"Marie Curie",          note:"Scienziata. Morta nel 1934. Pioniera degli studi sulla radioattività." },
    { month:2,  day:12, type:"birth", name:"Charles Darwin",       note:"Naturalista britannico. Nato nel 1809. Autore de «L'origine delle specie» e della teoria dell'evoluzione." },
    { month:4,  day:19, type:"death", name:"Charles Darwin",       note:"Naturalista. Morto nel 1882. Ha segnato profondamente la biologia." },
    { month:2,  day:11, type:"birth", name:"Thomas Edison",        note:"Inventore americano. Nato nel 1847. Celebre per la lampadina e il fonografo." },
    { month:10, day:18, type:"death", name:"Thomas Edison",        note:"Inventore. Morto nel 1931. Era chiamato il «mago di Menlo Park»." },
    { month:12, day:27, type:"birth", name:"Louis Pasteur",        note:"Batteriologo francese. Nato nel 1822. Sviluppò i vaccini e la pastorizzazione." },
    { month:9,  day:28, type:"death", name:"Louis Pasteur",        note:"Batteriologo. Morto nel 1895. Considerato padre della microbiologia moderna." },
    { month:8,  day:6,  type:"birth", name:"Alexander Fleming",    note:"Batteriologo britannico. Nato nel 1881. Scoprì il primo antibiotico, la penicillina." },
    { month:3,  day:11, type:"death", name:"Alexander Fleming",    note:"Batteriologo. Morto nel 1955. La penicillina salvò innumerevoli vite; premio Nobel." },
    { month:4,  day:16, type:"birth", name:"Charlie Chaplin",      note:"Attore e regista inglese. Nato nel 1889. Le sue comiche mute fecero ridere il mondo." },
    { month:12, day:25, type:"death", name:"Charlie Chaplin",      note:"Il «Charlot». Morto nel 1977. Amato per film come «Tempi moderni»." },
    { month:6,  day:1,  type:"birth", name:"Marilyn Monroe",       note:"Attrice americana. Nata nel 1926. Un'icona del cinema degli anni '50." },
    { month:8,  day:4,  type:"death", name:"Marilyn Monroe",       note:"Attrice. Morta nel 1962. Una delle stelle più durature di Hollywood." },
    { month:1,  day:8,  type:"birth", name:"Elvis Presley",        note:"Cantante americano. Nato nel 1935. Noto come il «re del rock'n'roll»." },
    { month:8,  day:16, type:"death", name:"Elvis Presley",        note:"Cantante. Morto nel 1977. Diffuse il rock'n'roll in tutto il mondo." },
    { month:4,  day:2,  type:"birth", name:"Hans Christian Andersen", note:"Scrittore danese di fiabe. Nato nel 1805. Celebre per «La sirenetta» e «La piccola fiammiferaia»." },
    { month:8,  day:4,  type:"death", name:"Hans Christian Andersen", note:"Scrittore di fiabe. Morto nel 1875. Le sue fiabe sono amate in tutto il mondo." },
    { month:2,  day:26, type:"birth", name:"Victor Hugo",          note:"Scrittore francese. Nato nel 1802. Autore de «I miserabili»." },
    { month:5,  day:22, type:"death", name:"Victor Hugo",          note:"Scrittore. Morto nel 1885. Figura del romanticismo, ebbe funerali di Stato." },
    { month:6,  day:12, type:"birth", name:"Anne Frank",           note:"Autrice del «Diario di Anne Frank». Nata nel 1929. Una ragazza che scriveva, nascosta dai nazisti." }
  ]
};
