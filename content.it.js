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
  }
};
