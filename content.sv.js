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
    },
    {
      id:"sv-warmup-03", genre:"warmup", emoji:"🍋", photo:null,
      question:"Vad är sötare — socker eller en citron?",
      choices:["Socker","Citron"], answerIndex:0,
      trivia:"Förr var sockret dyrbart; en kaka var en riktig fröjd på helg- och festdagar.",
      cue:{
        open:"«Sockret förstås!» — med ett leende, sedan vidare till det söta förr.",
        asks:["Bakade ni ofta hemma?","Vem stod för bakningen?","Vilken kaka tyckte du bäst om?"],
        expand:"Bakning och högtider väcker varma minnen. Att fråga om dofter — vanilj, kanel — gör scenen levande.",
        care:"Även om det söta var sällsynt, möt det med värme: «det var en annan tid»."
      }
    },
    {
      id:"sv-price-02", genre:"price", emoji:"🎬", photo:null,
      question:"Vad kostade ungefär en biobiljett på 1960-talet?",
      choices:["Ungefär 3 kronor","Ungefär 30 kronor","Ungefär 300 kronor"], answerIndex:0,
      trivia:"En kväll på bio var ett nöje för de flesta, för några få kronor.",
      cue:{
        open:"«På bio för några kronor — härliga tider, va?»",
        asks:["Gick du ofta på bio?","Vilka filmer eller stjärnor tyckte du om?","Vem gick du på bio med?"],
        expand:"Det är inte det exakta priset som räknas, utan minnet. Journalfilmen, glassen i pausen, första dejten — mycket att berätta.",
        care:"Vid tvekan hjälper ett exempel ur ditt eget liv att mana fram tiden tillsammans."
      }
    },
    {
      id:"sv-appliance-02", genre:"appliance", emoji:"☎️", photo:null,
      question:"Hur slog man ett nummer på de gamla telefonerna?",
      choices:["Med en fingerskiva","Med en pekskärm"], answerIndex:0,
      trivia:"Man vred en siffra i taget på skivan, med ett surrande ljud som var lätt att känna igen.",
      cue:{
        open:"«Fingerskivan — det tog sin tid att vrida runt, va?»",
        asks:["Hade ni telefon hemma tidigt?","Vem ringde du helst till?","Minns du ert gamla telefonnummer?"],
        expand:"Telefonen knyter an till familj och vänner. Surret från skivan tar en tillbaka i tiden.",
        care:"Många fick telefon först sent — det är helt normalt och ett fint samtalsämne."
      }
    },
    {
      id:"sv-snack-02", genre:"snack", emoji:"🍬", photo:null,
      question:"Vilken rödvit randig karamell är en klassisk svensk godsak från Gränna?",
      choices:["Polkagris","Marsipan"], answerIndex:0,
      trivia:"Polkagrisen, rödvit och randig, har tillverkats i Gränna sedan mitten av 1800-talet.",
      cue:{
        open:"«Polkagris — den där rödvita randiga!» Med ett leende, vidare till godiset förr.",
        asks:["Vilket godis fanns i affären i närheten?","Fick du veckopeng till godis?","Vilket var ditt favoritgodis?"],
        expand:"Affären i kvarteret och några ören i veckopeng är fina minnesankare.",
        care:"Om godis var sällsynt, hedra den sparsamma tiden med vänlighet, utan att döma."
      }
    },
    {
      id:"sv-tool-02", genre:"tool", emoji:"🧺", photo:null,
      question:"Vad tvättade man kläderna med för hand, innan tvättmaskinen fanns?",
      choices:["Med en tvättbräda","Med en dammsugare"], answerIndex:0,
      trivia:"Man gnuggade tvätten ren på brädan, ofta i tvättstugan — ett tungt arbete på tvättdagen.",
      cue:{
        open:"«Tvättbrädan — det var riktigt tungt, va?»",
        asks:["Var tvättdagen en bestämd dag hos er?","Vem skötte tvätten?","Var hängde ni tvätten på tork?"],
        expand:"Hushållsarbetet förr rymmer mycket klokskap. Ett «det var hårt arbete!» hedrar mödan.",
        care:"Erkännande gör gott: «du klarade allt det där» ger stolthet och öppnar samtalet."
      }
    },
    {
      id:"sv-fashion-02", genre:"fashion", emoji:"👗", photo:null,
      question:"Vilken vid, svängande kjol var på modet på 1950-talet, perfekt att dansa i?",
      choices:["Den vida kjolen","Utsvängda byxor"], answerIndex:0,
      trivia:"Den vida kjolen med underkjol svängde runt i danserna på 1950-talet.",
      cue:{
        open:"«Den vida kjolen — den svängde ju runt när man dansade!»",
        asks:["Tyckte du om att gå ut och dansa?","Vilket mode gillade du som ung?","Hade du en favoritklänning eller en fin kostym?"],
        expand:"Mode och dans väcker ungdomen. Första dansen, första kärleken — fina dörrar att öppna.",
        care:"Varje minne är värdefullt — även ett leende utan ord är ett fint resultat."
      }
    },
    {
      id:"sv-hobby-02", genre:"hobby", emoji:"🔵", photo:null,
      question:"Vad kallas de små färgade glaskulorna som barn lekte med på marken?",
      choices:["Kulor","Knappar"], answerIndex:0,
      trivia:"Man spelade kula på marken; de finaste kulorna sparades och byttes som skatter.",
      cue:{
        open:"«Kulor — de finaste sparade man som en skatt, va?»",
        asks:["Samlade eller bytte du kulor?","Vilka lekar lekte du ute?","Vem lekte du helst med?"],
        expand:"Att samla och byta väcker minnen av vänskap och grannskap.",
        care:"Om barndomen var svår, stanna varsamt vid de fina stunderna."
      }
    },
    {
      id:"sv-appliance-03", genre:"appliance", emoji:"🎵", photo:null,
      question:"Hur lyssnade man på sin favoritmusik hemma förr?",
      choices:["På en vinylskiva","På en smartphone"], answerIndex:0,
      trivia:"Skivan snurrade på skivspelaren; man lade försiktigt ner nålen i spåret.",
      cue:{
        open:"«Lägga på skivan och sänka nålen — en liten ritual, va?»",
        asks:["Vilken musik eller vilka sångare tyckte du om?","Hade ni en skivspelare hemma?","Till vilken musik dansade du?"],
        expand:"Musik är ett starkt minnesankare. En låttitel räcker ofta för att berättelserna ska komma.",
        care:"Om en sång rör till tårar är det fint — ge känslan gott om plats."
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
      staffCue:"«Trivs du bäst på sommaren eller vintern?»" },
    { id:"sv-eo-06", left:{label:"Radio", emoji:"📻"}, right:{label:"TV", emoji:"📺"},
      staffCue:"«Radio eller TV — vad lyssnade ni mest på hemma?»" },
    { id:"sv-eo-07", left:{label:"Stad", emoji:"🏙️"}, right:{label:"Landet", emoji:"🌾"},
      staffCue:"«Växte du upp mer i stan eller på landet?»" },
    { id:"sv-eo-08", left:{label:"Vår", emoji:"🌸"}, right:{label:"Höst", emoji:"🍂"},
      staffCue:"«Vår eller höst — vilken årstid tycker du bäst om?»" },
    { id:"sv-eo-09", left:{label:"Dansa", emoji:"💃"}, right:{label:"Sjunga", emoji:"🎤"},
      staffCue:"«Tyckte du mer om att dansa eller sjunga?»" },
    { id:"sv-eo-10", left:{label:"Bio", emoji:"🎬"}, right:{label:"Bok", emoji:"📖"},
      staffCue:"«En kväll på bio eller en god bok — vad föredrog du?»" },
    { id:"sv-eo-11", left:{label:"Cykel", emoji:"🚲"}, right:{label:"Till fots", emoji:"🚶"},
      staffCue:"«Var du mycket ute på cykeln eller helst till fots?»" },
    { id:"sv-eo-12", left:{label:"Jul", emoji:"🎄"}, right:{label:"Midsommar", emoji:"🌼"},
      staffCue:"«Jul eller midsommar — vilken högtid tyckte du mest om?»" },
    { id:"sv-eo-13", left:{label:"Soppa", emoji:"🍲"}, right:{label:"Stek", emoji:"🍖"},
      staffCue:"«En god soppa eller en söndagsstek?»" },
    { id:"sv-eo-14", left:{label:"Glass", emoji:"🍨"}, right:{label:"Varm choklad", emoji:"☕"},
      staffCue:"«Glass på sommaren eller varm choklad på vintern?»" },
    { id:"sv-eo-15", left:{label:"Morgonpigg", emoji:"🌅"}, right:{label:"Nattuggla", emoji:"🌙"},
      staffCue:"«Var du mer morgonpigg eller en nattuggla?»" }
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
        cue:"«Finns det en plats eller en utsikt där du känner dig lugn?»" },
      { key:"orange", label:"Orange", emoji:"🟠", color:"#e8934a",
        result:"Du är hjärtlig och sällskaplig — någon som för människor samman.",
        cue:"«Har vänner och grannar alltid betytt mycket för dig?»" },
      { key:"purple", label:"Lila", emoji:"🟣", color:"#8a6bd0",
        result:"Du är förfinad och känslig — stillsamt stark, med ett rikt inre liv.",
        cue:"«Finns det musik eller konst som alltid har rört dig?»" }
    ]
  },

  /* ---- Kända personer (födelsedag 🎂 / dödsdag 🕯️). Datum kontrollerade i ja-paketet. ---- */
  people: [
    { month:10, day:21, type:"birth", name:"Alfred Nobel",         note:"Svensk uppfinnare. Född 1833. Uppfann dynamiten och instiftade Nobelpriset." },
    { month:12, day:10, type:"death", name:"Alfred Nobel",         note:"Uppfinnare. Död 1896. Den 10 december delas Nobelprisen ut — hans dödsdag." },
    { month:8,  day:29, type:"birth", name:"Ingrid Bergman",       note:"Svensk skådespelerska. Född 1915. Känd för filmer som «Casablanca»." },
    { month:8,  day:29, type:"death", name:"Ingrid Bergman",       note:"Skådespelerska. Död 1982 — på sin egen födelsedag, den 29 augusti." },
    { month:4,  day:2,  type:"birth", name:"Hans Christian Andersen", note:"Dansk sagoberättare. Född 1805. Känd för «Den lilla sjöjungfrun» och «Flickan med svavelstickorna»." },
    { month:8,  day:4,  type:"death", name:"Hans Christian Andersen", note:"Sagoberättare. Död 1875. Hans sagor är älskade världen över." },
    { month:12, day:12, type:"birth", name:"Edvard Munch",         note:"Norsk målare. Född 1863. Känd över hela världen för «Skriet»." },
    { month:1,  day:23, type:"death", name:"Edvard Munch",         note:"Målare. Död 1944. En expressionist som skildrade oro och ensamhet." },
    { month:3,  day:26, type:"death", name:"Ludwig van Beethoven", note:"Tysk tonsättare. Född omkring 1770, död 1827. En mästare känd för sin nionde symfoni." },
    { month:1,  day:27, type:"birth", name:"Wolfgang Amadeus Mozart", note:"Österrikisk tonsättare. Född 1756. Ett musikaliskt geni med otaliga mästerverk." },
    { month:12, day:5,  type:"death", name:"Wolfgang Amadeus Mozart", note:"Tonsättare. Död 1791. En av de största inom Wienklassicismen." },
    { month:7,  day:28, type:"death", name:"Johann Sebastian Bach", note:"Tysk tonsättare. Född 1685, död 1750. «Musikens fader», en jätte inom barocken." },
    { month:10, day:17, type:"death", name:"Frédéric Chopin",      note:"Polsk tonsättare. Född 1810, död 1849. Han kallas «pianots poet»." },
    { month:3,  day:14, type:"birth", name:"Albert Einstein",      note:"Tyskfödd fysiker. Född 1879. Hans relativitetsteori förändrade världen." },
    { month:4,  day:18, type:"death", name:"Albert Einstein",      note:"Fysiker. Död 1955. En av 1900-talets största vetenskapsmän." },
    { month:5,  day:12, type:"birth", name:"Florence Nightingale", note:"Brittisk sjuksköterska. Född 1820. Grundare av modern omvårdnad; den 12 maj är sjuksköterskornas dag." },
    { month:8,  day:13, type:"death", name:"Florence Nightingale", note:"Sjuksköterska. Död 1910. Känd som «damen med lampan»." },
    { month:11, day:7,  type:"birth", name:"Marie Curie",          note:"Fysiker och kemist. Född 1867. Den första kvinnan som fick ett Nobelpris." },
    { month:7,  day:4,  type:"death", name:"Marie Curie",          note:"Vetenskapskvinna. Död 1934. Pionjär inom forskningen om radioaktivitet." },
    { month:2,  day:12, type:"birth", name:"Charles Darwin",       note:"Brittisk naturforskare. Född 1809. Skapade evolutionsteorin i «Om arternas uppkomst»." },
    { month:4,  day:19, type:"death", name:"Charles Darwin",       note:"Naturforskare. Död 1882. Han satte djupa spår i biologin." },
    { month:2,  day:11, type:"birth", name:"Thomas Edison",        note:"Amerikansk uppfinnare. Född 1847. Känd för glödlampan och fonografen." },
    { month:10, day:18, type:"death", name:"Thomas Edison",        note:"Uppfinnare. Död 1931. Kallades «trollkarlen från Menlo Park»." },
    { month:12, day:27, type:"birth", name:"Louis Pasteur",        note:"Fransk bakteriolog. Född 1822. Utvecklade vacciner och pastörisering." },
    { month:9,  day:28, type:"death", name:"Louis Pasteur",        note:"Bakteriolog. Död 1895. Räknas som den moderna mikrobiologins fader." },
    { month:8,  day:6,  type:"birth", name:"Alexander Fleming",    note:"Brittisk bakteriolog. Född 1881. Upptäckte det första antibiotikat, penicillin." },
    { month:3,  day:11, type:"death", name:"Alexander Fleming",    note:"Bakteriolog. Död 1955. Penicillinet räddade otaliga liv; Nobelpristagare." },
    { month:11, day:14, type:"birth", name:"Claude Monet",         note:"Fransk målare. Född 1840. Impressionismens mästare, känd för «Näckrosor»." },
    { month:12, day:5,  type:"death", name:"Claude Monet",         note:"Målare. Död 1926. «Impression, soluppgång» gav impressionismen dess namn." },
    { month:3,  day:30, type:"birth", name:"Vincent van Gogh",     note:"Nederländsk målare. Född 1853. Känd för «Solrosor» och «Stjärnenatt»." },
    { month:7,  day:29, type:"death", name:"Vincent van Gogh",     note:"Målare. Död 1890. En postimpressionismens mästare, hyllad efter sin död." },
    { month:10, day:25, type:"birth", name:"Pablo Picasso",        note:"Spansk målare. Född 1881. Kubismens grundare och en jätte inom modern konst." },
    { month:4,  day:8,  type:"death", name:"Pablo Picasso",        note:"Målare. Död 1973. Känd bland annat för «Guernica»." },
    { month:4,  day:16, type:"birth", name:"Charlie Chaplin",      note:"Engelsk skådespelare och regissör. Född 1889. Hans stumfilmskomedier fick hela världen att skratta." },
    { month:12, day:25, type:"death", name:"Charlie Chaplin",      note:"«Luffaren». Död 1977. Älskad för filmer som «Moderna tider»." },
    { month:6,  day:1,  type:"birth", name:"Marilyn Monroe",       note:"Amerikansk skådespelerska. Född 1926. En filmikon från 1950-talet." },
    { month:8,  day:4,  type:"death", name:"Marilyn Monroe",       note:"Skådespelerska. Död 1962. En av Hollywoods mest bestående stjärnor." },
    { month:1,  day:8,  type:"birth", name:"Elvis Presley",        note:"Amerikansk sångare. Född 1935. Känd som «rockens kung»." },
    { month:8,  day:16, type:"death", name:"Elvis Presley",        note:"Sångare. Död 1977. Han spred rock'n'roll över hela världen." },
    { month:6,  day:12, type:"birth", name:"Anne Frank",           note:"Författare till «Anne Franks dagbok». Född 1929. En flicka som skrev, gömd för nazisterna." }
  ]
};
