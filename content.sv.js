/*
 * Soyogi (Seniorutgåva) — content.sv.js
 * Svenskt samtalsinnehåll (skrivet för svensk kultur).
 * ============================================================================
 * ★INTE en översättning av content.ja.js. Minnen är kulturbundna; detta paket
 *   är skrivet kring minnen som en äldre person i Sverige gärna delar
 *   (öre, lördagsgodis, hoppa hage…). Samma schema som ja (se content.ja.js;
 *   tips: cue = {open, asks[], expand, care}).
 *
 * ✅ DATUM VERIFIERADE (2026-07-06, WebSearch): ABBA i Eurovision 06-04-1974, Björn Borgs
 *    femte Wimbledon 05-07-1980, VM-final på hemmaplan 29-06-1958. "sv" är aktivt i langs.
 * ============================================================================
 */
window.SOYOGI_WS_CONTENT = window.SOYOGI_WS_CONTENT || {};
window.SOYOGI_WS_CONTENT["sv"] = {

  /* ---- Flik 1: dagens blomma (per månad; positiva betydelser) ---- */
  flowers: [
    { month:1,  name:"Snödroppe",   emoji:"🌼", photo:null, meaning:"Hopp", note:"Vågar sig upp ur snön mitt i vintern." },
    { month:2,  name:"Krokus",      emoji:"🌷", photo:null, meaning:"Glädje", note:"Lyser upp marken i det tidiga vårljuset." },
    { month:3,  name:"Påsklilja",   emoji:"🌼", photo:null, meaning:"Ny början", note:"Med sitt gula sken öppnar den våren." },
    { month:4,  name:"Vitsippa",    emoji:"🌸", photo:null, meaning:"Vår och förnyelse", note:"Täcker skogsbacken som en vit matta." },
    { month:5,  name:"Liljekonvalj", emoji:"🌷", photo:null, meaning:"Lyckan återvänder", note:"Små vita klockor med fin doft." },
    { month:6,  name:"Ros",         emoji:"🌹", photo:null, meaning:"Kärlek och tacksamhet", note:"Sommarens klassiska blomma." },
    { month:7,  name:"Prästkrage",  emoji:"🌼", photo:null, meaning:"Oskuld och glädje", note:"Ängens vita blomma — fin i midsommarkransen." },
    { month:8,  name:"Solros",      emoji:"🌻", photo:null, meaning:"Värme och beundran", note:"Vänder ansiktet mot sommarsolen." },
    { month:9,  name:"Aster",       emoji:"🌸", photo:null, meaning:"Tålamod och elegans", note:"Bär sommaren in i hösten." },
    { month:10, name:"Ljung",       emoji:"🌸", photo:null, meaning:"Tur och beundran", note:"Färgar hedarna lila på sensommaren." },
    { month:11, name:"Amaryllis",   emoji:"🌺", photo:null, meaning:"Skönhet och stolthet", note:"En favorit i fönstret under adventstiden." },
    { month:12, name:"Julstjärna",  emoji:"🌺", photo:null, meaning:"Julglädje", note:"Röd och grön — julens färger." }
  ],

  /* ---- Flik 1: denna dag (verifierade datum + högtider year:null) ---- */
  onThisDay: [
    { month:4,  day:6,  year:1974, text:"ABBA vinner Eurovision Song Contest med \"Waterloo\".", emoji:"🎵" },
    { month:6,  day:29, year:1958, text:"Sverige spelar fotbolls-VM-final på hemmaplan.", emoji:"⚽" },
    { month:7,  day:5,  year:1980, text:"Björn Borg vinner Wimbledon för femte året i rad.", emoji:"🎾" },
    { month:1,  day:1,  year:null, text:"Idag är det nyårsdagen — början på ett nytt år.", emoji:"🎉" },
    { month:4,  day:30, year:null, text:"Idag är det Valborg — våren välkomnas med brasor och sång.", emoji:"🔥" },
    { month:6,  day:24, year:null, text:"Midsommar firas med blomsterkrans, dans kring midsommarstången och sill.", emoji:"🌼" },
    { month:12, day:13, year:null, text:"Idag är det Lucia — ljus, sång och lussekatter i vintermörkret.", emoji:"🕯️" },
    { month:12, day:24, year:null, text:"Idag är det julafton — den stora dagen för julfirande i Sverige.", emoji:"🎄" }
  ],

  /* ---- Flik 2: minnesquiz (visste du + samtalstips) ---- */
  quizzes: [
    {
      id:"sv-warmup-01", genre:"warmup", emoji:"🍉", photo:null,
      question:"Vad är större och tyngre — en vattenmelon eller ett äpple?",
      choices:["En vattenmelon","Ett äpple"], answerIndex:0,
      trivia:"En stor vattenmelon kan väga över 10 kilo — en sommarfavorit i alla tider.",
      cue:{
        open:"«Den var lätt, va?» — med ett leende, sedan vidare till sommarminnen.",
        asks:[
          "Åt du vattenmelon på sommaren?",
          "Var du ute på utflykter eller picknickar?",
          "Vem tillbringade du somrarna med?"
        ],
        expand:"Det viktiga är att njuta av stunden mer än att svara rätt. Ett litet eget minne («hemma hos oss fanns det alltid…») gör det lättare för personen att öppna sig.",
        care:"Om personen tvekar gör det inget — «båda är goda!» håller stämningen lätt. Ett leende är redan en framgång."
      }
    },
    {
      id:"sv-warmup-02", genre:"warmup", emoji:"🥔", photo:null,
      question:"Vad väger mest — en säck potatis eller en fjäder?",
      choices:["En säck potatis","En fjäder"], answerIndex:0,
      trivia:"En säck potatis väger snabbt flera kilo. Potatisen har länge varit en trygg vardagsmat.",
      cue:{
        open:"«Potatisen förstås — den väger en hel del!» Sedan vidare till maten förr.",
        asks:[
          "Odlade eller skördade du potatis?",
          "Vilken var din favoriträtt som barn?",
          "Vem lagade maten hemma?"
        ],
        expand:"Mat väcker starka minnen. Fråga om dofter och söndagsmiddagen — scenen blir levande.",
        care:"Om mat är ett känsligt ämne, håll dig till minnet, inte till maten i sig."
      }
    },
    {
      id:"sv-price-01", genre:"price", emoji:"💰", photo:null,
      question:"Vad hette de små svenska mynten, en hundradel av en krona?",
      choices:["Öre","Cent","Penni"], answerIndex:0,
      trivia:"Hundra öre gick på en krona. Öresmynten hörde vardagen till i många år.",
      cue:{
        open:"«Öre, ja — dem minns nog många.»",
        asks:[
          "Minns du öre-mynten?",
          "Vad kunde man köpa för några ören?",
          "Hur sparade du din veckopeng som barn?"
        ],
        expand:"Pengar öppnar dörren till vardagen förr — priser, första inköpen, små glädjeämnen. Följ minnets tråd.",
        care:"En del hade det knapert. Håll en ton av gemensam förundran, aldrig av jämförelse."
      }
    },
    {
      id:"sv-appliance-01", genre:"appliance", emoji:"📺", photo:null,
      question:"Innan fjärrkontrollen fanns — hur bytte man kanal på TV:n?",
      choices:["Vred på ratten på apparaten","Klappade händerna","Visslade åt skärmen"], answerIndex:0,
      trivia:"Någon fick resa sig och vrida på ratten — ofta den yngsta i familjen!",
      cue:{
        open:"«Någon fick resa sig och vrida på ratten!» — med ett leende.",
        asks:[
          "Vilka program såg ni på tillsammans i familjen?",
          "Vem bestämde kanalen?",
          "Minns du den första TV:n hemma?"
        ],
        expand:"Den «första TV:n» är ett glatt och lätt minne, ofta kopplat till hela familjen. Fråga vem som var i rummet.",
        care:"Alla hem hade inte TV tidigt. Fråga «minns du när TV:n kom?» i stället för att ta det för givet."
      }
    },
    {
      id:"sv-snack-01", genre:"snack", emoji:"🍬", photo:null,
      question:"Vad kallas den svenska traditionen att spara godiset till just lördagen?",
      choices:["Lördagsgodis","Fredagsmys","Fika"], answerIndex:0,
      trivia:"Lördagsgodis blev en vana i många svenska hem — sött sparades till helgen.",
      cue:{
        open:"«Lördagsgodis — en riktig klassiker!»",
        asks:[
          "Fick du lördagsgodis som barn?",
          "Vilket var ditt favoritgodis?",
          "Fanns det en affär eller kiosk i närheten?"
        ],
        expand:"Barndomens godsaker är glada minnen som är lätta att berätta om. Namn på platser och kompisar gör dem levande.",
        care:"Ta inget för givet — gå i personens takt."
      }
    },
    {
      id:"sv-tool-01", genre:"tool", emoji:"⌨️", photo:null,
      question:"Innan datorerna fanns — vilken kontorsmaskin slog bläck på papperet?",
      choices:["Skrivmaskinen","Kassaapparaten","Symaskinen"], answerIndex:0,
      trivia:"Knattret från tangenterna och den lilla klingan vid radslut hörde kontoret till.",
      cue:{
        open:"«Det där knattret — och den lilla klingan vid radslut!»",
        asks:[
          "Vad arbetade du med?",
          "Vilka verktyg eller maskiner använde du varje dag?",
          "Vad var du särskilt duktig på i ditt arbete?"
        ],
        expand:"Att prata om arbete och skicklighet stärker stoltheten. «Du måste ha varit snabb!» gör alltid gott.",
        care:"För den som inte arbetade utanför hemmet — fråga om det man var skicklig på hemma."
      }
    },
    {
      id:"sv-fashion-01", genre:"fashion", emoji:"👖", photo:null,
      question:"Vilka byxor med vida ben nertill var populära på 1970-talet?",
      choices:["Utsvängda byxor","Knickers","Hängselbyxor"], answerIndex:0,
      trivia:"De utsvängda byxorna hörde ihop med musiken och tidsandan på 70-talet.",
      cue:{
        open:"«Följde du modet på den tiden?» — med en blinkning.",
        asks:[
          "Vilka stilar var moderna när du var ung?",
          "Hade du ett favoritplagg?",
          "Vad hade du på dig när du gick ut eller på dejt?"
        ],
        expand:"Modeminnen är minnen av den unga, strålande tiden — ofta kopplade till kärlek. Ansiktena lyser upp.",
        care:"För den som mist sin partner kan minnena bära på vemod. Se på ansiktet och pressa inte."
      }
    },
    {
      id:"sv-hobby-01", genre:"hobby", emoji:"🔢", photo:null,
      question:"I vilken lek ritar man rutor på marken och hoppar på ett ben?",
      choices:["Hoppa hage","Kula","Kurragömma"], answerIndex:0,
      trivia:"Hagen ritades med krita och man hoppade ruta för ruta — en klassiker på skolgården.",
      cue:{
        open:"«Var du bra på att hoppa hage?»",
        asks:[
          "Vad lekte du som barn?",
          "Vilken lek var du särskilt bra på?",
          "Var träffades ni kompisar för att leka?"
        ],
        expand:"Lekminnen hör ihop med kompisar och platser. Rörelselekar väcker känslan av att vara ung och full av energi.",
        care:"En del var hellre för sig själva. Håll frågan öppen: «hur tyckte du om att fördriva tiden?»"
      }
    }
  ],

  /* ---- Flik 3: det här eller det där? (lätt — en mening räcker) ---- */
  eitherOr: [
    { id:"sv-eo-01", left:{label:"Kaffe", emoji:"☕"}, right:{label:"Te", emoji:"🍵"},
      staffCue:"«Är du mer för kaffe eller te? Hur tar du det?»" },
    { id:"sv-eo-02", left:{label:"Hav", emoji:"🌊"}, right:{label:"Fjäll", emoji:"⛰️"},
      staffCue:"«Vart åkte ni på semester — till havet eller till fjället?»" },
    { id:"sv-eo-03", left:{label:"Hund", emoji:"🐕"}, right:{label:"Katt", emoji:"🐈"},
      staffCue:"«Har du haft något husdjur? Vad hette det?»" },
    { id:"sv-eo-04", left:{label:"Sött", emoji:"🍰"}, right:{label:"Salt", emoji:"🥨"},
      staffCue:"«Är du mer för sött eller salt? Vad kunde du inte motstå?»" },
    { id:"sv-eo-05", left:{label:"Sommar", emoji:"☀️"}, right:{label:"Vinter", emoji:"❄️"},
      staffCue:"«Trivs du bäst på sommaren eller vintern?»" }
  ],

  /* ---- Flik 3: färghumör (alltid positivt) ---- */
  colorTest: {
    prompt:null,
    options:[
      { key:"red",    label:"Röd",  emoji:"🔴", color:"#e0655e",
        result:"Du är varm och full av energi — som en sol som muntrar upp andra.",
        cue:"«Vad ägnade du dig åt med hela ditt hjärta när du var ung?»" },
      { key:"blue",   label:"Blå",  emoji:"🔵", color:"#4a86c9",
        result:"Du är lugn och omtänksam — någon som andra litar på och lutar sig mot.",
        cue:"«Var du ofta den som andra kom till för råd?»" },
      { key:"yellow", label:"Gul",  emoji:"🟡", color:"#eab52f",
        result:"Du är glad och nyfiken — du sätter liv i varje rum.",
        cue:"«Finns det ett glatt minne som får dig att le än idag?»" },
      { key:"green",  label:"Grön", emoji:"🟢", color:"#4a9d6f",
        result:"Du är mild och trygg — en lugnande närvaro som gör gott.",
        cue:"«Finns det en plats eller en utsikt där du känner dig lugn?»" }
    ]
  }
};
