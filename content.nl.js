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
    },
    {
      id:"nl-warmup-03", genre:"warmup", emoji:"🍋", photo:null,
      question:"Wat is zoeter — suiker of een citroen?",
      choices:["Suiker","Citroen"], answerIndex:0,
      trivia:"Vroeger was suiker kostbaar; een gebakje was een echte traktatie op feestdagen.",
      cue:{
        open:"«De suiker natuurlijk!» — met een glimlach, en dan naar het zoets van vroeger.",
        asks:["Werd er bij u thuis vaak gebakken?","Wie bakte er?","Welk gebak vond u het lekkerst?"],
        expand:"Bakken en feestdagen roepen warme herinneringen op. Vraag naar geuren — vanille, kaneel — en het beeld leeft op.",
        care:"Ook als zoetigheid schaars was, erken dat met warmte: «het was een andere tijd»."
      }
    },
    {
      id:"nl-price-02", genre:"price", emoji:"🎬", photo:null,
      question:"Wat kostte rond de jaren 60 ongeveer een bioscoopkaartje?",
      choices:["Ongeveer 2 gulden","Ongeveer 20 gulden","Ongeveer 200 gulden"], answerIndex:0,
      trivia:"Een avondje bioscoop was voor de meesten betaalbaar, voor een paar gulden.",
      cue:{
        open:"«Naar de film voor een paar gulden — mooie tijden, hè?»",
        asks:["Ging u vaak naar de bioscoop?","Welke films of sterren vond u leuk?","Met wie ging u naar de film?"],
        expand:"Het gaat niet om de exacte prijs, maar om de herinnering. Het journaal, het ijsje in de pauze, het eerste afspraakje — genoeg om over te vertellen.",
        care:"Bij twijfel helpt een voorbeeld uit uw eigen leven om die tijd samen op te roepen."
      }
    },
    {
      id:"nl-appliance-02", genre:"appliance", emoji:"☎️", photo:null,
      question:"Hoe draaide je een nummer op de oude telefoons?",
      choices:["Met een draaischijf","Met een aanraakscherm"], answerIndex:0,
      trivia:"Je draaide elk cijfer apart op de schijf, met een kenmerkend snorrend geluid.",
      cue:{
        open:"«De draaischijf — dat draaien duurde nogal, hè?»",
        asks:["Had u vroeg een eigen telefoon in huis?","Wie belde u het liefst?","Weet u uw oude telefoonnummer nog?"],
        expand:"De telefoon verbindt met familie en vrienden. Het gesnor van de schijf haalt die tijd terug.",
        care:"Velen kregen pas laat een telefoon — dat is heel gewoon en een fijn gespreksonderwerp."
      }
    },
    {
      id:"nl-snack-02", genre:"snack", emoji:"🍬", photo:null,
      question:"Welk snoepje veranderde van kleur terwijl je erop zoog?",
      choices:["De toverbal","De stroopwafel"], answerIndex:0,
      trivia:"De toverbal wisselde laag na laag van kleur — kinderen haalden hem uit hun mond om te kijken welke kleur er nu was.",
      cue:{
        open:"«De toverbal — je haalde hem er steeds uit om de kleur te zien, hè?»",
        asks:["Welk snoep was er in het winkeltje in de buurt?","Kreeg u zakgeld voor snoep?","Wat was uw lievelingssnoep?"],
        expand:"Het buurtwinkeltje en een paar centen zakgeld zijn mooie ankerpunten.",
        care:"Als snoep schaars was, eer die zuinige tijd met vriendelijkheid, zonder oordeel."
      }
    },
    {
      id:"nl-tool-02", genre:"tool", emoji:"🧺", photo:null,
      question:"Waarmee waste men vroeger de was met de hand, vóór de wasmachine?",
      choices:["Met een wasbord","Met een stofzuiger"], answerIndex:0,
      trivia:"Je boende de was schoon op het wasbord in een teil — zwaar werk, op de vaste wasdag.",
      cue:{
        open:"«Het wasbord — dat was flink zwaar werk, hè?»",
        asks:["Was de wasdag bij u een vaste dag?","Wie deed de was?","Waar hing u de was te drogen?"],
        expand:"Het huishoudwerk van vroeger getuigt van veel kunde. Een «dat was zwaar werk!» eert de moeite.",
        care:"Erkenning doet goed: «u heeft dat allemaal gedaan» geeft trots en opent het gesprek."
      }
    },
    {
      id:"nl-fashion-02", genre:"fashion", emoji:"👗", photo:null,
      question:"Welke wijde, zwierige rok was in de jaren 50 in de mode, ideaal om in te dansen?",
      choices:["De wijde rok","De broek met olifantspijpen"], answerIndex:0,
      trivia:"De wijde rok met petticoat zwierde rond bij het dansen in de jaren 50.",
      cue:{
        open:"«De wijde rok — die zwierde helemaal rond bij het dansen!»",
        asks:["Ging u graag dansen?","Welke mode vond u mooi als jongere?","Had u een lievelingsjurk of een mooi pak?"],
        expand:"Mode en dans roepen de jeugd op. De eerste dans, de eerste liefde — mooie deuren om te openen.",
        care:"Elke herinnering is waardevol — ook een glimlach zonder woorden is een mooi resultaat."
      }
    },
    {
      id:"nl-hobby-02", genre:"hobby", emoji:"🔵", photo:null,
      question:"Hoe heten de kleine gekleurde glazen balletjes waarmee kinderen op de grond speelden?",
      choices:["Knikkers","Knopen"], answerIndex:0,
      trivia:"Je knikkerde op de grond; de mooiste knikkers bewaarde en ruilde je als schatten.",
      cue:{
        open:"«Knikkers — de mooiste bewaarde je als een schat, hè?»",
        asks:["Verzamelde of ruilde u knikkers?","Welke spelletjes speelde u buiten?","Met wie speelde u het liefst?"],
        expand:"Verzamelen en ruilen roepen herinneringen op aan vriendschap en de buurt.",
        care:"Als de kindertijd zwaar was, blijf dan zacht bij de mooie momenten."
      }
    },
    {
      id:"nl-appliance-03", genre:"appliance", emoji:"🎵", photo:null,
      question:"Hoe luisterde men vroeger thuis naar de favoriete muziek?",
      choices:["Op een grammofoonplaat","Op een smartphone"], answerIndex:0,
      trivia:"De plaat draaide op de platenspeler; je legde voorzichtig de naald in de groef.",
      cue:{
        open:"«De plaat opleggen en de naald erop — een klein ritueel, hè?»",
        asks:["Welke muziek of welke zangers vond u mooi?","Had u een platenspeler thuis?","Op welke muziek danste u?"],
        expand:"Muziek is een sterk ankerpunt. Eén liedtitel is vaak genoeg en de verhalen komen los.",
        care:"Als een lied ontroert, is dat mooi — geef het gevoel alle ruimte."
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
      staffCue:"«Ging u er liever op uit met de fiets of te voet?»" },
    { id:"nl-eo-06", left:{label:"Radio", emoji:"📻"}, right:{label:"Televisie", emoji:"📺"},
      staffCue:"«Radio of televisie — waar luisterde u thuis het meest naar?»" },
    { id:"nl-eo-07", left:{label:"Stad", emoji:"🏙️"}, right:{label:"Platteland", emoji:"🌾"},
      staffCue:"«Bent u meer in de stad of op het platteland opgegroeid?»" },
    { id:"nl-eo-08", left:{label:"Lente", emoji:"🌸"}, right:{label:"Herfst", emoji:"🍂"},
      staffCue:"«Lente of herfst — welk seizoen vindt u het mooist?»" },
    { id:"nl-eo-09", left:{label:"Dansen", emoji:"💃"}, right:{label:"Zingen", emoji:"🎤"},
      staffCue:"«Hield u meer van dansen of van zingen?»" },
    { id:"nl-eo-10", left:{label:"Bioscoop", emoji:"🎬"}, right:{label:"Boek", emoji:"📖"},
      staffCue:"«Een avondje bioscoop of een goed boek — wat had u liever?»" },
    { id:"nl-eo-11", left:{label:"Kerst", emoji:"🎄"}, right:{label:"Sinterklaas", emoji:"🎁"},
      staffCue:"«Kerst of Sinterklaas — welk feest vond u als kind het leukst?»" },
    { id:"nl-eo-12", left:{label:"Soep", emoji:"🍲"}, right:{label:"Braadstuk", emoji:"🍖"},
      staffCue:"«Een lekkere soep of een zondags braadstuk?»" },
    { id:"nl-eo-13", left:{label:"IJsje", emoji:"🍨"}, right:{label:"Warme chocola", emoji:"☕"},
      staffCue:"«Een ijsje in de zomer of warme chocolademelk in de winter?»" },
    { id:"nl-eo-14", left:{label:"Schaatsen", emoji:"⛸️"}, right:{label:"Zwemmen", emoji:"🏊"},
      staffCue:"«Ging u liever schaatsen in de winter of zwemmen in de zomer?»" },
    { id:"nl-eo-15", left:{label:"Vroege vogel", emoji:"🌅"}, right:{label:"Nachtbraker", emoji:"🌙"},
      staffCue:"«Was u meer een vroege vogel of een nachtbraker?»" }
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
        cue:"«Is er een plek of een uitzicht waar u zich rustig voelt?»" },
      { key:"orange", label:"Oranje", emoji:"🟠", color:"#e8934a",
        result:"U bent hartelijk en gezellig — iemand die mensen samenbrengt.",
        cue:"«Zijn vrienden en buren altijd belangrijk voor u geweest?»" },
      { key:"purple", label:"Paars",  emoji:"🟣", color:"#8a6bd0",
        result:"U bent verfijnd en gevoelig — stil sterk, met een rijk innerlijk leven.",
        cue:"«Is er muziek of kunst die u altijd heeft geraakt?»" }
    ]
  },

  /* ---- Beroemde personen (verjaardag 🎂 / sterfdag 🕯️). Data gecontroleerd in het ja-pakket. ---- */
  people: [
    { month:3,  day:30, type:"birth", name:"Vincent van Gogh",     note:"Nederlandse schilder. Geboren in 1853. Beroemd om «Zonnebloemen» en «De sterrennacht»." },
    { month:7,  day:29, type:"death", name:"Vincent van Gogh",     note:"Schilder. Overleden in 1890. Een meester van het postimpressionisme, pas na zijn dood geroemd." },
    { month:6,  day:12, type:"birth", name:"Anne Frank",           note:"Schrijfster van «Het Achterhuis». Geboren in 1929. Een meisje dat schreef, verscholen voor de nazi's." },
    { month:3,  day:26, type:"death", name:"Ludwig van Beethoven", note:"Duitse componist. Rond 1770 geboren, in 1827 overleden. Een meester, bekend om zijn Negende symfonie." },
    { month:1,  day:27, type:"birth", name:"Wolfgang Amadeus Mozart", note:"Oostenrijkse componist. Geboren in 1756. Een muzikaal genie met talloze meesterwerken." },
    { month:12, day:5,  type:"death", name:"Wolfgang Amadeus Mozart", note:"Componist. Overleden in 1791. Een van de grootsten van de Weense klassiek." },
    { month:7,  day:28, type:"death", name:"Johann Sebastian Bach", note:"Duitse componist. Geboren in 1685, overleden in 1750. De «vader van de muziek», reus van de barok." },
    { month:10, day:17, type:"death", name:"Frédéric Chopin",      note:"Poolse componist. Geboren in 1810, overleden in 1849. Hij wordt de «dichter van de piano» genoemd." },
    { month:11, day:14, type:"birth", name:"Claude Monet",         note:"Franse schilder. Geboren in 1840. Meester van het impressionisme, bekend om zijn «Waterlelies»." },
    { month:12, day:5,  type:"death", name:"Claude Monet",         note:"Schilder. Overleden in 1926. «Impressie, zonsopgang» gaf het impressionisme zijn naam." },
    { month:10, day:25, type:"birth", name:"Pablo Picasso",        note:"Spaanse schilder. Geboren in 1881. Medegrondlegger van het kubisme en reus van de moderne kunst." },
    { month:4,  day:8,  type:"death", name:"Pablo Picasso",        note:"Schilder. Overleden in 1973. Bekend onder meer om «Guernica»." },
    { month:3,  day:14, type:"birth", name:"Albert Einstein",      note:"In Duitsland geboren natuurkundige. Geboren in 1879. Zijn relativiteitstheorie veranderde de wereld." },
    { month:4,  day:18, type:"death", name:"Albert Einstein",      note:"Natuurkundige. Overleden in 1955. Een van de grootste wetenschappers van de 20e eeuw." },
    { month:5,  day:12, type:"birth", name:"Florence Nightingale", note:"Britse verpleegkundige. Geboren in 1820. Grondlegster van de moderne verpleging; 12 mei is de Dag van de Verpleging." },
    { month:8,  day:13, type:"death", name:"Florence Nightingale", note:"Verpleegkundige. Overleden in 1910. Bekend als «de dame met de lamp»." },
    { month:11, day:7,  type:"birth", name:"Marie Curie",          note:"Natuur- en scheikundige. Geboren in 1867. De eerste vrouw die een Nobelprijs ontving." },
    { month:7,  day:4,  type:"death", name:"Marie Curie",          note:"Wetenschapster. Overleden in 1934. Pionier van het onderzoek naar radioactiviteit." },
    { month:2,  day:12, type:"birth", name:"Charles Darwin",       note:"Britse natuuronderzoeker. Geboren in 1809. Grondlegger van de evolutietheorie met «Over het ontstaan van soorten»." },
    { month:4,  day:19, type:"death", name:"Charles Darwin",       note:"Natuuronderzoeker. Overleden in 1882. Hij drukte een diepe stempel op de biologie." },
    { month:2,  day:11, type:"birth", name:"Thomas Edison",        note:"Amerikaanse uitvinder. Geboren in 1847. Bekend om de gloeilamp en de fonograaf." },
    { month:10, day:18, type:"death", name:"Thomas Edison",        note:"Uitvinder. Overleden in 1931. Men noemde hem de «tovenaar van Menlo Park»." },
    { month:12, day:27, type:"birth", name:"Louis Pasteur",        note:"Franse bacterioloog. Geboren in 1822. Ontwikkelde vaccins en de pasteurisatie." },
    { month:9,  day:28, type:"death", name:"Louis Pasteur",        note:"Bacterioloog. Overleden in 1895. Geldt als grondlegger van de moderne microbiologie." },
    { month:8,  day:6,  type:"birth", name:"Alexander Fleming",    note:"Britse bacterioloog. Geboren in 1881. Ontdekte het eerste antibioticum, penicilline." },
    { month:3,  day:11, type:"death", name:"Alexander Fleming",    note:"Bacterioloog. Overleden in 1955. Penicilline redde talloze levens; Nobelprijswinnaar." },
    { month:10, day:21, type:"birth", name:"Alfred Nobel",         note:"Zweedse uitvinder. Geboren in 1833. Vond het dynamiet uit en stelde de Nobelprijs in." },
    { month:12, day:10, type:"death", name:"Alfred Nobel",         note:"Uitvinder. Overleden in 1896. Op 10 december worden de Nobelprijzen uitgereikt — zijn sterfdag." },
    { month:4,  day:16, type:"birth", name:"Charlie Chaplin",      note:"Engelse acteur en regisseur. Geboren in 1889. Zijn stille komedies deden de hele wereld lachen." },
    { month:12, day:25, type:"death", name:"Charlie Chaplin",      note:"«De Zwerver». Overleden in 1977. Geliefd om films als «Moderne tijden»." },
    { month:6,  day:1,  type:"birth", name:"Marilyn Monroe",       note:"Amerikaanse actrice. Geboren in 1926. Een filmicoon uit de jaren 50." },
    { month:8,  day:4,  type:"death", name:"Marilyn Monroe",       note:"Actrice. Overleden in 1962. Een van Hollywoods meest blijvende sterren." },
    { month:1,  day:8,  type:"birth", name:"Elvis Presley",        note:"Amerikaanse zanger. Geboren in 1935. Bekend als de «king of rock-'n-roll»." },
    { month:8,  day:16, type:"death", name:"Elvis Presley",        note:"Zanger. Overleden in 1977. Hij bracht rock-'n-roll over de hele wereld." },
    { month:4,  day:2,  type:"birth", name:"Hans Christian Andersen", note:"Deense sprookjesschrijver. Geboren in 1805. Bekend om «De kleine zeemeermin» en «Het meisje met de zwavelstokjes»." },
    { month:8,  day:4,  type:"death", name:"Hans Christian Andersen", note:"Sprookjesschrijver. Overleden in 1875. Zijn sprookjes worden wereldwijd geliefd." },
    { month:12, day:12, type:"birth", name:"Edvard Munch",         note:"Noorse schilder. Geboren in 1863. Wereldberoemd om «De schreeuw»." },
    { month:1,  day:23, type:"death", name:"Edvard Munch",         note:"Schilder. Overleden in 1944. Een expressionist die angst en eenzaamheid verbeeldde." }
  ]
};
