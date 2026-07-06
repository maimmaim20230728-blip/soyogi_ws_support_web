/*
 * Soyogi (Senioreneditie) — content.nl.js
 * Nederlandstalige gespreksinhoud (geschreven voor de Nederlandse cultuur).
 * ============================================================================
 * ★GEEN vertaling van content.ja.js. Herinneringen zijn cultuurgebonden; dit
 *   pakket is geschreven rond herinneringen die een oudere in Nederland graag
 *   deelt (de gulden, hagelslag, hinkelen…). Zelfde schema als ja (zie de kop van
 *   content.ja.js; tip: cue = {open, asks[], expand, care}).
 *
 * ✅ DATA GEVERIFIEERD (2026-07-06, WebSearch): EK-finale 25-06-1988, Zoetemelk wint de Tour
 *    20-07-1980, laatste Elfstedentocht 04-01-1997. "nl" staat actief in langs.
 * ============================================================================
 */
window.SOYOGI_WS_CONTENT = window.SOYOGI_WS_CONTENT || {};
window.SOYOGI_WS_CONTENT["nl"] = {

  /* ---- Tabblad 1: bloem van de dag (per maand; positieve betekenissen) ---- */
  flowers: [
    { month:1,  name:"Sneeuwklokje", emoji:"🌼", photo:null, meaning:"Hoop", note:"Durft midden in de winter uit de sneeuw te komen." },
    { month:2,  name:"Krokus",       emoji:"🌷", photo:null, meaning:"Vreugde", note:"Kleurt de grond in het eerste voorjaarslicht." },
    { month:3,  name:"Narcis",       emoji:"🌼", photo:null, meaning:"Nieuw begin", note:"Opent met haar geel het voorjaar." },
    { month:4,  name:"Tulp",         emoji:"🌷", photo:null, meaning:"Volmaakte liefde", note:"Hét Hollandse voorjaar — de tulpenvelden en de Keukenhof." },
    { month:5,  name:"Lelietje-van-dalen", emoji:"🌷", photo:null, meaning:"Terugkeer van geluk", note:"Kleine witte klokjes met een fijne geur." },
    { month:6,  name:"Roos",         emoji:"🌹", photo:null, meaning:"Liefde en dankbaarheid", note:"De klassieke bloem van de zomer." },
    { month:7,  name:"Zonnebloem",   emoji:"🌻", photo:null, meaning:"Warmte en bewondering", note:"Draait haar gezicht naar de zomerzon." },
    { month:8,  name:"Hortensia",    emoji:"🌸", photo:null, meaning:"Dankbaarheid", note:"Vult de tuinen met volle bollen bloemen." },
    { month:9,  name:"Aster",        emoji:"🌸", photo:null, meaning:"Geduld en elegantie", note:"Draagt de zomer de herfst in." },
    { month:10, name:"Dahlia",       emoji:"🌸", photo:null, meaning:"Waardigheid", note:"Bloeit gul door tot de eerste vorst." },
    { month:11, name:"Camelia",      emoji:"🌺", photo:null, meaning:"Trouw en bewondering", note:"Bloeit als bijna alles rust." },
    { month:12, name:"Kerstster",    emoji:"🌺", photo:null, meaning:"Kerstvreugde", note:"Het rood en groen van de feestdagen." }
  ],

  /* ---- Tabblad 1: op deze dag (geverifieerde data + feestdagen year:null) ---- */
  onThisDay: [
    { month:6,  day:25, year:1988, text:"Nederland wint het EK voetbal.", emoji:"🏆" },
    { month:7,  day:20, year:1980, text:"Joop Zoetemelk wint de Tour de France.", emoji:"🚴" },
    { month:1,  day:4,  year:1997, text:"De laatste Elfstedentocht wordt gereden.", emoji:"⛸️" },
    { month:1,  day:1,  year:null, text:"Vandaag is het Nieuwjaarsdag — het begin van een nieuw jaar.", emoji:"🎉" },
    { month:4,  day:27, year:null, text:"Vandaag is het Koningsdag — oranje, vrijmarkten en feest door het hele land.", emoji:"👑" },
    { month:12, day:5,  year:null, text:"Vandaag is het pakjesavond (Sinterklaas) — cadeautjes en pepernoten.", emoji:"🎁" },
    { month:12, day:25, year:null, text:"Vandaag is het Kerstmis — een tijd van familie en warmte.", emoji:"🎄" },
    { month:12, day:31, year:null, text:"Vandaag is het oudjaarsdag — met oliebollen het jaar afsluiten.", emoji:"🎆" }
  ],

  /* ---- Tabblad 2: herinneringsquiz (wist u dat + gesprekstip) ---- */
  quizzes: [
    {
      id:"nl-warmup-01", genre:"warmup", emoji:"🍉", photo:null,
      question:"Wat is groter en zwaarder — een watermeloen of een appel?",
      choices:["Een watermeloen","Een appel"], answerIndex:0,
      trivia:"Een grote watermeloen kan meer dan 10 kilo wegen — al generaties lang een zomerfavoriet.",
      cue:{
        open:"«Die was makkelijk, hè?» — met een glimlach, en dan naar zomerherinneringen.",
        asks:[
          "At u 's zomers weleens watermeloen?",
          "Ging u op stap of picknicken?",
          "Met wie bracht u de zomers door?"
        ],
        expand:"Het gaat meer om het genieten van het moment dan om het juiste antwoord. Een kleine eigen herinnering («bij ons was er altijd…») helpt de ander op gang.",
        care:"Twijfelen is niet erg — «ze zijn allebei lekker!» houdt het licht. Een glimlach is al geslaagd."
      }
    },
    {
      id:"nl-warmup-02", genre:"warmup", emoji:"🥔", photo:null,
      question:"Wat weegt meer — een zak aardappelen of een veertje?",
      choices:["Een zak aardappelen","Een veertje"], answerIndex:0,
      trivia:"Een zak aardappelen weegt zo een paar kilo. De aardappel was lange tijd een vaste basis op tafel.",
      cue:{
        open:"«De aardappelen natuurlijk — die wegen aardig wat!» En dan naar het eten van vroeger.",
        asks:[
          "Verbouwde of rooide u aardappelen?",
          "Wat was uw lievelingsgerecht als kind?",
          "Wie kookte er bij u thuis?"
        ],
        expand:"Eten roept sterke herinneringen op. Vraag naar geuren en het zondagse eten — het beeld komt tot leven.",
        care:"Is eten een gevoelig onderwerp, blijf dan bij de herinnering, niet bij het eten zelf."
      }
    },
    {
      id:"nl-price-01", genre:"price", emoji:"💰", photo:null,
      question:"Waarmee betaalde men in Nederland vóór de euro?",
      choices:["De gulden","De euro","De frank"], answerIndex:0,
      trivia:"Tot 2002 betaalde men met de gulden. De euro (munten en biljetten) kwam op 1 januari 2002.",
      cue:{
        open:"«Ach, de goeie oude gulden!» — veel mensen denken er met warmte aan terug.",
        asks:[
          "Herinnert u zich de gulden nog goed?",
          "Wat kon je voor een paar gulden kopen?",
          "Hoe spaarde u vroeger uw zakgeld?"
        ],
        expand:"Geld opent de deur naar het dagelijks leven van vroeger — prijzen, eerste aankopen, kleine pleziertjes. Volg de draad van de herinnering.",
        care:"Sommigen hadden weinig. Houd een toon van gedeelde verwondering, nooit van vergelijken."
      }
    },
    {
      id:"nl-appliance-01", genre:"appliance", emoji:"📺", photo:null,
      question:"Vóór de afstandsbediening — hoe wisselde je van tv-kanaal?",
      choices:["Aan de knop van het toestel draaien","In de handen klappen","Naar het scherm fluiten"], answerIndex:0,
      trivia:"Iemand moest opstaan om aan de knop te draaien — vaak de jongste van het huis!",
      cue:{
        open:"«Iemand moest opstaan om aan de knop te draaien!» — met een glimlach.",
        asks:[
          "Welke programma's keek u samen met het gezin?",
          "Wie bepaalde de zender?",
          "Herinnert u zich de eerste tv in huis?"
        ],
        expand:"De «eerste tv» is een blije, makkelijke herinnering, vaak verbonden met het hele gezin. Vraag wie er in de kamer was.",
        care:"Niet elk huis had vroeg een tv. Vraag «weet u nog wanneer de tv kwam?» in plaats van het aan te nemen."
      }
    },
    {
      id:"nl-snack-01", genre:"snack", emoji:"🍫", photo:null,
      question:"Welke chocolade- of suikerkorreltjes strooit men in Nederland op de boterham?",
      choices:["Hagelslag","Drop","Stroopwafel"], answerIndex:0,
      trivia:"Hagelslag op een geboterde boterham is echt Hollands — voor jong en oud.",
      cue:{
        open:"«Hagelslag op de boterham — echt Hollands!»",
        asks:[
          "At u vroeger hagelslag op brood?",
          "Wat was uw lievelingssnoep als kind?",
          "Was er een winkeltje of snoepwinkel in de buurt?"
        ],
        expand:"Snoep uit de kindertijd zijn vrolijke, makkelijk te vertellen herinneringen. Namen van plekken en vriendjes maken ze levend.",
        care:"Neem niets aan en ga mee in het tempo van de persoon."
      }
    },
    {
      id:"nl-tool-01", genre:"tool", emoji:"⌨️", photo:null,
      question:"Vóór de computer — welke kantoormachine sloeg inkt op papier?",
      choices:["De schrijfmachine","De kassa","De naaimachine"], answerIndex:0,
      trivia:"Het getik van de toetsen en het belletje aan het eind van de regel hoorden bij het kantoor.",
      cue:{
        open:"«Dat getik — en dat belletje aan het eind van de regel!»",
        asks:[
          "Wat voor werk deed u?",
          "Welke apparaten of machines gebruikte u dagelijks?",
          "Waar was u bijzonder goed in op uw werk?"
        ],
        expand:"Praten over werk en vakmanschap versterkt de trots. «U was vast snel!» doet altijd goed.",
        care:"Voor wie niet buitenshuis werkte — vraag naar de vaardigheden die thuis nodig waren."
      }
    },
    {
      id:"nl-fashion-01", genre:"fashion", emoji:"👖", photo:null,
      question:"Welke broek met wijd uitlopende pijpen was populair in de jaren 70?",
      choices:["De broek met olifantspijpen","De tuinbroek","De korte broek"], answerIndex:0,
      trivia:"De wijd uitlopende «olifantspijpen» hoorden bij de muziek en de sfeer van de jaren 70.",
      cue:{
        open:"«Deed u mee met de mode van toen?» — met een knipoog.",
        asks:[
          "Welke stijlen waren in de mode toen u jong was?",
          "Had u een lievelingskledingstuk?",
          "Wat trok u aan om uit te gaan of voor een afspraakje?"
        ],
        expand:"Mode-herinneringen zijn die van de jonge, stralende tijd — vaak verbonden met de liefde. Gezichten klaren op.",
        care:"Voor wie de partner verloor, kunnen deze herinneringen weemoedig zijn. Let op het gezicht en dring niet aan."
      }
    },
    {
      id:"nl-hobby-01", genre:"hobby", emoji:"🔢", photo:null,
      question:"Bij welk spel teken je vakken op de grond en hink je op één been?",
      choices:["Hinkelen","Knikkeren","Verstoppertje"], answerIndex:0,
      trivia:"De vakken werden met krijt getekend en je hinkelde van vak naar vak — een klassieker op straat en schoolplein.",
      cue:{
        open:"«Was u goed in hinkelen?»",
        asks:[
          "Wat speelde u als kind?",
          "In welk spel was u bijzonder goed?",
          "Waar kwam u met vriendjes samen om te spelen?"
        ],
        expand:"Spelherinneringen horen bij vriendjes en plekken. Bewegingsspelletjes brengen het gevoel terug van jong en vol energie zijn.",
        care:"Sommigen waren liever alleen. Houd de vraag open: «hoe bracht u uw tijd graag door?»"
      }
    }
  ],

  /* ---- Tabblad 3: dit of dat? (licht — één zin is genoeg) ---- */
  eitherOr: [
    { id:"nl-eo-01", left:{label:"Koffie", emoji:"☕"}, right:{label:"Thee", emoji:"🍵"},
      staffCue:"«Bent u meer van koffie of thee? Hoe drinkt u het?»" },
    { id:"nl-eo-02", left:{label:"Zee", emoji:"🌊"}, right:{label:"Bos", emoji:"🌳"},
      staffCue:"«Ging u op vakantie liever naar zee of naar het bos?»" },
    { id:"nl-eo-03", left:{label:"Hond", emoji:"🐕"}, right:{label:"Kat", emoji:"🐈"},
      staffCue:"«Heeft u ooit een huisdier gehad? Hoe heette het?»" },
    { id:"nl-eo-04", left:{label:"Zoet", emoji:"🍰"}, right:{label:"Hartig", emoji:"🥨"},
      staffCue:"«Bent u meer van zoet of hartig? Waar kon u geen nee tegen zeggen?»" },
    { id:"nl-eo-05", left:{label:"Fiets", emoji:"🚲"}, right:{label:"Wandelen", emoji:"🚶"},
      staffCue:"«Ging u er liever op uit met de fiets of te voet?»" }
  ],

  /* ---- Tabblad 3: kleurstemming (altijd positief) ---- */
  colorTest: {
    prompt:null,
    options:[
      { key:"red",    label:"Rood",   emoji:"🔴", color:"#e0655e",
        result:"U bent warm en vol energie — als een zon die anderen opvrolijkt.",
        cue:"«Waar zette u zich vroeger met hart en ziel voor in?»" },
      { key:"blue",   label:"Blauw",  emoji:"🔵", color:"#4a86c9",
        result:"U bent kalm en zorgzaam — iemand op wie anderen vertrouwen en steunen.",
        cue:"«Was u vaak degene bij wie anderen om raad kwamen?»" },
      { key:"yellow", label:"Geel",   emoji:"🟡", color:"#eab52f",
        result:"U bent vrolijk en nieuwsgierig — u brengt leven in elke kamer.",
        cue:"«Is er een fijne herinnering waar u nog om moet glimlachen?»" },
      { key:"green",  label:"Groen",  emoji:"🟢", color:"#4a9d6f",
        result:"U bent zacht en evenwichtig — een rustgevende aanwezigheid die goed doet.",
        cue:"«Is er een plek of een uitzicht waar u zich rustig voelt?»" }
    ]
  }
};
