/*
 * Soyogi (Senioren-Edition) — content.de.js
 * Deutschsprachige Gesprächsinhalte (kulturell für Deutschland verfasst).
 * ============================================================================
 * ★KEINE Übersetzung von content.ja.js. Erinnerungen sind kulturspezifisch;
 *   dieses Paket ist um Erinnerungen herum geschrieben, die ältere Menschen in
 *   Deutschland gern teilen (D-Mark, Wunder von Bern, Mauerfall…). Schema wie ja
 *   (siehe Kopf von content.ja.js; Gesprächstipp: cue = {open, asks[], expand, care}).
 *   Historische Daten sind belegt und geprüft. Erweiterungen bitte ebenfalls prüfen.
 * ============================================================================
 */
window.SOYOGI_WS_CONTENT = window.SOYOGI_WS_CONTENT || {};
window.SOYOGI_WS_CONTENT["de"] = {

  /* ---- Tab 1: Blume des Tages (nach Monat; positive Bedeutungen) ---- */
  flowers: [
    { month:1,  name:"Schneeglöckchen", emoji:"🌼", photo:null, meaning:"Hoffnung & Trost", note:"Schaut schon im tiefsten Winter mutig aus dem Schnee." },
    { month:2,  name:"Veilchen",        emoji:"🌸", photo:null, meaning:"Treue & Bescheidenheit", note:"Ein kleiner, duftender Frühlingsbote." },
    { month:3,  name:"Narzisse (Osterglocke)", emoji:"🌼", photo:null, meaning:"Neubeginn", note:"Läutet mit ihrem Gelb den Frühling ein." },
    { month:4,  name:"Tulpe",           emoji:"🌷", photo:null, meaning:"Frühlingsfreude", note:"Bringt bunte Farbe in Gärten und Vasen." },
    { month:5,  name:"Maiglöckchen",    emoji:"🌷", photo:null, meaning:"Rückkehr des Glücks", note:"Zarte weiße Glöckchen mit feinem Duft." },
    { month:6,  name:"Rose",            emoji:"🌹", photo:null, meaning:"Liebe & Dankbarkeit", note:"Die klassische Blume des Sommers." },
    { month:7,  name:"Sonnenblume",     emoji:"🌻", photo:null, meaning:"Wärme & Bewunderung", note:"Wendet sich der Sonne zu — ein Bild der Fröhlichkeit." },
    { month:8,  name:"Kornblume",       emoji:"🌸", photo:null, meaning:"Zuversicht", note:"Leuchtet blau an sommerlichen Feldrändern." },
    { month:9,  name:"Aster",           emoji:"🌸", photo:null, meaning:"Geduld & Anmut", note:"Trägt die Farben des Sommers in den Herbst." },
    { month:10, name:"Chrysantheme",    emoji:"🌼", photo:null, meaning:"Fülle & langes Leben", note:"Eine robuste, lang blühende Herbstblume." },
    { month:11, name:"Christrose",      emoji:"🌺", photo:null, meaning:"Hoffnung im Winter", note:"Blüht, wenn fast alles andere ruht." },
    { month:12, name:"Weihnachtsstern", emoji:"🌺", photo:null, meaning:"Weihnachtsfreude", note:"Rot und grün — die Farben der Festtage." }
  ],

  /* ---- Tab 1: An diesem Tag (belegte, freudige Ereignisse) ---- */
  onThisDay: [
    { month:7,  day:4,  year:1954, text:"„Wunder von Bern“: Deutschland wird zum ersten Mal Fußball-Weltmeister.", emoji:"⚽" },
    { month:7,  day:8,  year:1990, text:"Deutschland wird in Rom zum dritten Mal Fußball-Weltmeister.", emoji:"⚽" },
    { month:8,  day:26, year:1978, text:"Sigmund Jähn fliegt als erster Deutscher ins All.", emoji:"🚀" },
    { month:10, day:3,  year:1990, text:"Deutschland wird wiedervereinigt — der erste Tag der Deutschen Einheit.", emoji:"🇩🇪" },
    { month:11, day:9,  year:1989, text:"Die Berliner Mauer fällt.", emoji:"🧱" }
  ],

  /* ---- Tab 2: Erinnerungs-Quiz (Wissenswertes + strukturierter Gesprächstipp) ---- */
  quizzes: [
    {
      id:"de-warmup-01", genre:"warmup", emoji:"🍉", photo:null,
      question:"Was ist größer und schwerer — eine Wassermelone oder ein Apfel?",
      choices:["Wassermelone","Apfel"], answerIndex:0,
      trivia:"Eine große Wassermelone kann über 10 Kilo wiegen — ein beliebter Sommergenuss.",
      cue:{
        open:"„Das war leicht, nicht wahr?“ — mit einem Lächeln, dann zu Sommererinnerungen.",
        asks:[
          "Gab es bei Ihnen im Sommer Wassermelone?",
          "Haben Sie früher Ausflüge oder Picknicks gemacht?",
          "Mit wem haben Sie die Sommertage verbracht?"
        ],
        expand:"Der Genuss des Augenblicks zählt mehr als die richtige Antwort. Eine kleine eigene Erinnerung („Bei uns gab es immer…“) macht das Erzählen leichter.",
        care:"Zögern ist kein Problem — „beide schmecken gut!“ hält es leicht. Ein Lächeln ist das eigentliche Ziel."
      }
    },
    {
      id:"de-warmup-02", genre:"warmup", emoji:"🥔", photo:null,
      question:"Was ist schwerer — ein Sack Kartoffeln oder eine Feder?",
      choices:["Ein Sack Kartoffeln","Eine Feder"], answerIndex:0,
      trivia:"Ein Sack Kartoffeln wiegt schnell mehrere Kilo. Kartoffeln waren lange ein Grundnahrungsmittel.",
      cue:{
        open:"„Natürlich die Kartoffeln — die sind ganz schön schwer!“ Dann zum Essen von früher.",
        asks:[
          "Haben Sie früher selbst Kartoffeln angebaut oder geerntet?",
          "Was war Ihr liebstes Kartoffelgericht?",
          "Wer hat bei Ihnen zu Hause gekocht?"
        ],
        expand:"Essen weckt starke Erinnerungen. Fragen Sie nach Gerüchen und dem Sonntagstisch — so wird die Szene lebendig.",
        care:"Wenn Essen ein heikles Thema ist, bleiben Sie bei der Erinnerung, nicht beim Essen selbst."
      }
    },
    {
      id:"de-price-01", genre:"price", emoji:"💰", photo:null,
      question:"Womit hat man in Deutschland vor dem Euro bezahlt?",
      choices:["Mit der D-Mark","Mit dem Euro","Mit dem Gulden"], answerIndex:0,
      trivia:"Bis Anfang 2002 war die Deutsche Mark („D-Mark“) das Zahlungsmittel, dann kam das Euro-Bargeld.",
      cue:{
        open:"„Die gute alte D-Mark!“ — an sie erinnern sich viele gern.",
        asks:[
          "Erinnern Sie sich noch gut an die D-Mark?",
          "Was konnte man früher für eine Mark kaufen?",
          "Wie haben Sie als Kind Ihr Taschengeld gespart?"
        ],
        expand:"Geld öffnet die Tür zum Alltag von früher — Preise, erste Anschaffungen, kleine Freuden. Folgen Sie, wohin die Erinnerung führt.",
        care:"Manche hatten wenig. Halten Sie den Ton beim gemeinsamen Staunen, nie beim Vergleichen."
      }
    },
    {
      id:"de-appliance-01", genre:"appliance", emoji:"📺", photo:null,
      question:"Bevor es Fernbedienungen gab — wie stellte man den Fernsehsender um?",
      choices:["Am Gerät den Knopf drehen","In die Hände klatschen","Das Gerät anpusten"], answerIndex:0,
      trivia:"Meist musste jemand aufstehen und am Gerät drehen — oft das jüngste Familienmitglied!",
      cue:{
        open:"„Da musste noch jemand aufstehen und am Gerät drehen!“ — mit einem Schmunzeln.",
        asks:[
          "Welche Sendungen hat Ihre Familie zusammen geschaut?",
          "Wer durfte den Sender einstellen?",
          "Erinnern Sie sich an den ersten Fernseher zu Hause?"
        ],
        expand:"Der „erste Fernseher“ ist eine schöne, leichte Erinnerung — oft mit der ganzen Familie verbunden. Fragen Sie, wer noch dabei war.",
        care:"Nicht jeder Haushalt hatte früh ein Gerät. Fragen Sie „Erinnern Sie sich, als der Fernseher kam?“ statt es vorauszusetzen."
      }
    },
    {
      id:"de-snack-01", genre:"snack", emoji:"🍬", photo:null,
      question:"Welches prickelnde Pulver ließ man sich als Kind gern auf der Zunge zergehen?",
      choices:["Brausepulver","Backpulver","Waschpulver"], answerIndex:0,
      trivia:"Brausepulver kribbelte auf der Zunge — ein beliebter Groschen-Spaß für Kinder.",
      cue:{
        open:"„Das hat so schön auf der Zunge geprickelt!“",
        asks:[
          "Welche Süßigkeiten mochten Sie als Kind am liebsten?",
          "Gab es einen Tante-Emma-Laden in der Nähe?",
          "Wofür haben Sie Ihr Taschengeld ausgegeben?"
        ],
        expand:"Kindheitsleckereien sind fröhliche, leicht erzählbare Erinnerungen. Namen von Läden und Freunden machen sie lebendig.",
        care:"Für manche waren die Nachkriegsjahre karg. Setzen Sie nichts voraus und gehen Sie im Tempo der Person."
      }
    },
    {
      id:"de-tool-01", genre:"tool", emoji:"⌨️", photo:null,
      question:"Bevor es Computer gab, nutzte man im Büro ein Gerät, dessen Tasten Farbe aufs Papier schlugen. Was war das?",
      choices:["Eine Schreibmaschine","Eine Registrierkasse","Eine Nähmaschine"], answerIndex:0,
      trivia:"Das Klackern der Tasten und das Klingeln am Zeilenende gehörten zum Büroalltag.",
      cue:{
        open:"„Dieses Klack-Klack — und das Klingeln am Zeilenende!“",
        asks:[
          "Was haben Sie beruflich gemacht?",
          "Welche Geräte haben Sie täglich benutzt?",
          "Worin waren Sie in Ihrer Arbeit besonders gut?"
        ],
        expand:"Über Arbeit und Können zu sprechen stärkt das Selbstwertgefühl. „Da waren Sie sicher schnell!“ wirkt Wunder.",
        care:"Wer nicht außer Haus gearbeitet hat: Fragen Sie nach den Fähigkeiten, die zu Hause gebraucht wurden."
      }
    },
    {
      id:"de-fashion-01", genre:"fashion", emoji:"👖", photo:null,
      question:"Welche Hose mit weit ausgestelltem Bein war in den 1970ern bei jungen Leuten beliebt?",
      choices:["Die Schlaghose","Die Kniebundhose","Die Latzhose"], answerIndex:0,
      trivia:"Die Schlaghose gehörte zur Musik und zum Lebensgefühl jener Jahre.",
      cue:{
        open:"„Haben Sie die Moden damals mitgemacht?“ — mit einem Grinsen.",
        asks:[
          "Welche Kleidung war modern, als Sie jung waren?",
          "Hatten Sie ein Lieblingsstück?",
          "Was haben Sie zum Ausgehen oder für ein Rendezvous getragen?"
        ],
        expand:"Mode-Erinnerungen sind Erinnerungen an die junge, strahlende Zeit — oft mit Verliebtsein verbunden. Die Gesichter hellen sich auf.",
        care:"Wer den Partner verloren hat, für den können diese Erinnerungen auch wehmütig sein. Achten Sie auf die Mimik und drängen Sie nicht."
      }
    },
    {
      id:"de-hobby-01", genre:"hobby", emoji:"🪢", photo:null,
      question:"Welches Sprungspiel mit einem langen Gummiband war auf dem Schulhof beliebt?",
      choices:["Gummitwist","Himmel und Hölle","Blinde Kuh"], answerIndex:0,
      trivia:"Beim Gummitwist sprang man nach Reimen über ein gespanntes Gummiband — vor allem auf dem Schulhof.",
      cue:{
        open:"„Konnten Sie beim Gummitwist gut mithüpfen?“",
        asks:[
          "Was haben Sie als Kind gespielt?",
          "Welches Spiel konnten Sie besonders gut?",
          "Wo haben Sie sich mit Ihren Freunden zum Spielen getroffen?"
        ],
        expand:"Spielerinnerungen kommen zusammen mit Freunden und Orten. Bewegungsspiele bringen das Gefühl zurück, jung und voller Energie zu sein.",
        care:"Manche waren lieber allein. Halten Sie die Frage offen: „Wie haben Sie Ihre Zeit gern verbracht?“"
      }
    },
    {
      id:"de-warmup-03", genre:"warmup", emoji:"🍋", photo:null,
      question:"Was ist süßer — Zucker oder eine Zitrone?",
      choices:["Zucker","Zitrone"], answerIndex:0,
      trivia:"Zucker war früher kostbar; an Feiertagen war Kuchen ein besonderer Genuss.",
      cue:{
        open:"„Natürlich der Zucker!“ — mit einem Schmunzeln, dann zu Süßem von früher.",
        asks:["Gab es bei Ihnen zu Hause oft Kuchen?","Wer hat gebacken?","Welchen Kuchen mochten Sie am liebsten?"],
        expand:"Backen und Feiertage wecken warme Erinnerungen. Nach Düften wie Vanille oder Zimt zu fragen macht die Szene lebendig.",
        care:"Auch wenn wenig Süßes da war — würdigen Sie das mit „Das war eine andere Zeit“ und Wärme."
      }
    },
    {
      id:"de-price-02", genre:"price", emoji:"🎬", photo:null,
      question:"Was kostete in den 1960er-Jahren ungefähr eine Kinokarte?",
      choices:["Etwa 2 Mark","Etwa 20 Mark","Etwa 200 Mark"], answerIndex:0,
      trivia:"Ein Kinobesuch war ein beliebtes Vergnügen und für wenige Mark zu haben.",
      cue:{
        open:"„Für ein paar Mark ins Kino — schöne Zeiten, nicht wahr?“",
        asks:["Sind Sie früher oft ins Kino gegangen?","Welche Filme oder Stars mochten Sie?","Mit wem sind Sie ins Kino gegangen?"],
        expand:"Nicht der genaue Preis zählt, sondern die Erinnerung. Von der Wochenschau, dem Eis in der Pause und dem ersten Rendezvous lässt sich viel erzählen.",
        care:"Bei Unsicherheit hilft ein Beispiel aus dem eigenen Leben, um die Zeit gemeinsam heraufzubeschwören."
      }
    },
    {
      id:"de-appliance-02", genre:"appliance", emoji:"☎️", photo:null,
      question:"Womit wählte man früher am Telefon eine Nummer?",
      choices:["Mit einer Wählscheibe","Mit einem Touchscreen"], answerIndex:0,
      trivia:"Bei der Wählscheibe drehte man jede Ziffer einzeln — mit einem charakteristischen Surren.",
      cue:{
        open:"„Die Wählscheibe — das Drehen dauerte ganz schön, oder?“",
        asks:["Hatten Sie früh ein eigenes Telefon zu Hause?","Wen haben Sie am liebsten angerufen?","Erinnern Sie sich an Ihre alte Telefonnummer?"],
        expand:"Das Telefon verbindet mit Familie und Freunden. Das Surren und Klicken der Scheibe holt die Zeit zurück.",
        care:"Manche hatten lange kein eigenes Telefon — das ist normal und ein guter Gesprächsanlass."
      }
    },
    {
      id:"de-snack-02", genre:"snack", emoji:"🍬", photo:null,
      question:"Welche Süßigkeit ist schwarz und schmeckt herb-süß?",
      choices:["Lakritz","Marzipan"], answerIndex:0,
      trivia:"Lakritz gab es als Schnecke, Stange oder Taler — nicht jeder mochte den kräftigen Geschmack.",
      cue:{
        open:"„Lakritz — das mochte man oder gar nicht!“ Mit einem Lächeln zu Naschereien von früher.",
        asks:["Welche Süßigkeiten gab es beim Kaufmann um die Ecke?","Bekamen Sie Taschengeld zum Naschen?","Was war Ihre liebste Nascherei?"],
        expand:"Der Tante-Emma-Laden und ein paar Pfennige Taschengeld sind schöne Erinnerungsanker.",
        care:"Falls Süßes selten war, würdigen Sie die sparsame Zeit freundlich und ohne Wertung."
      }
    },
    {
      id:"de-tool-02", genre:"tool", emoji:"🧺", photo:null,
      question:"Womit wusch man die Wäsche von Hand, bevor es Waschmaschinen gab?",
      choices:["Mit einem Waschbrett","Mit einem Staubsauger"], answerIndex:0,
      trivia:"Am Waschbrett rubbelte man die Wäsche sauber — harte Arbeit, oft am festen Waschtag.",
      cue:{
        open:"„Das Waschbrett — das war ganz schön anstrengend, nicht wahr?“",
        asks:["War der Waschtag bei Ihnen ein fester Tag?","Wer hat die Wäsche gemacht?","Wo wurde die Wäsche zum Trocknen aufgehängt?"],
        expand:"Hausarbeit von früher zeigt viel Lebensklugheit. Ein „Das war harte Arbeit!“ würdigt die Mühe.",
        care:"Anerkennung tut gut: „Das haben Sie alles gestemmt.“ macht stolz und öffnet das Gespräch."
      }
    },
    {
      id:"de-fashion-02", genre:"fashion", emoji:"👗", photo:null,
      question:"Welcher weite, schwingende Rock war in den 1950ern der letzte Schrei?",
      choices:["Der Petticoat","Die Schlaghose"], answerIndex:0,
      trivia:"Zum Petticoat gehörten Tanzabende und Rock’n’Roll — ein Lebensgefühl der Wirtschaftswunderjahre.",
      cue:{
        open:"„Der Petticoat — da schwang alles beim Tanzen!“",
        asks:["Sind Sie gern tanzen gegangen?","Welche Mode mochten Sie als junger Mensch?","Gab es ein Lieblingskleid oder einen guten Anzug?"],
        expand:"Mode und Tanz wecken Jugenderinnerungen. Nach dem ersten Tanzabend oder der ersten Liebe zu fragen bringt Leben ins Gespräch.",
        care:"Jede Erinnerung ist wertvoll — auch ein Lächeln ohne viele Worte ist ein schönes Ergebnis."
      }
    },
    {
      id:"de-hobby-02", genre:"hobby", emoji:"🔵", photo:null,
      question:"Wie hießen die kleinen bunten Glaskugeln, mit denen Kinder auf dem Boden spielten?",
      choices:["Murmeln","Knöpfe"], answerIndex:0,
      trivia:"Mit Murmeln (auch „Klicker“) spielte man auf dem Boden; die schönsten wurden getauscht und gesammelt.",
      cue:{
        open:"„Murmeln — die schönsten hat man gehütet wie einen Schatz, oder?“",
        asks:["Haben Sie Murmeln gesammelt oder getauscht?","Welche Spiele haben Sie draußen gespielt?","Mit wem haben Sie am liebsten gespielt?"],
        expand:"Sammeln und Tauschen wecken Erinnerungen an Freundschaften und die Nachbarschaft.",
        care:"Falls die Kindheit schwer war, bleiben Sie behutsam bei den schönen Momenten."
      }
    },
    {
      id:"de-appliance-03", genre:"appliance", emoji:"🎵", photo:null,
      question:"Wie hörte man früher zu Hause seine Lieblingsmusik?",
      choices:["Auf einer Schallplatte","Auf dem Smartphone"], answerIndex:0,
      trivia:"Die Schallplatte drehte sich auf dem Plattenspieler; die Nadel legte man vorsichtig auf.",
      cue:{
        open:"„Die Platte auflegen und die Nadel ansetzen — ein kleines Ritual, oder?“",
        asks:["Welche Musik oder welche Sänger mochten Sie?","Hatten Sie einen Plattenspieler zu Hause?","Zu welcher Musik haben Sie getanzt?"],
        expand:"Musik ist ein starker Erinnerungsanker. Ein Liedtitel genügt oft, und schon kommen die Geschichten.",
        care:"Wenn ein Lied Rührung auslöst, ist das schön — geben Sie dem Gefühl ruhig Raum."
      }
    }
  ],

  /* ---- Tab 3: Dies oder das? (leicht — ein Satz genügt) ---- */
  eitherOr: [
    { id:"de-eo-01", left:{label:"Kaffee", emoji:"☕"}, right:{label:"Tee", emoji:"🍵"},
      staffCue:"„Sind Sie ein Kaffee- oder Teetrinker? Wie trinken Sie ihn am liebsten?“" },
    { id:"de-eo-02", left:{label:"Berge", emoji:"⛰️"}, right:{label:"Meer", emoji:"🌊"},
      staffCue:"„Wohin ging es in den Urlaub — in die Berge oder ans Meer?“" },
    { id:"de-eo-03", left:{label:"Hund", emoji:"🐕"}, right:{label:"Katze", emoji:"🐈"},
      staffCue:"„Hatten Sie ein Haustier? Wie hieß es?“" },
    { id:"de-eo-04", left:{label:"Süß", emoji:"🍰"}, right:{label:"Herzhaft", emoji:"🥨"},
      staffCue:"„Naschkatze oder herzhaft? Was konnten Sie nie ablehnen?“" },
    { id:"de-eo-05", left:{label:"Fußball", emoji:"⚽"}, right:{label:"Wandern", emoji:"🥾"},
      staffCue:"„Waren Sie eher für Sport zu begeistern oder für die Natur?“" },
    { id:"de-eo-06", left:{label:"Radio", emoji:"📻"}, right:{label:"Fernsehen", emoji:"📺"},
      staffCue:"„Radio oder Fernsehen — was lief bei Ihnen zu Hause am häufigsten?“" },
    { id:"de-eo-07", left:{label:"Stadt", emoji:"🏙️"}, right:{label:"Land", emoji:"🌾"},
      staffCue:"„Sind Sie eher in der Stadt oder auf dem Land aufgewachsen?“" },
    { id:"de-eo-08", left:{label:"Frühling", emoji:"🌸"}, right:{label:"Herbst", emoji:"🍂"},
      staffCue:"„Frühling oder Herbst — welche Jahreszeit mögen Sie lieber?“" },
    { id:"de-eo-09", left:{label:"Brot", emoji:"🍞"}, right:{label:"Kartoffeln", emoji:"🥔"},
      staffCue:"„Was kam bei Ihnen öfter auf den Tisch — Brot oder Kartoffeln?“" },
    { id:"de-eo-10", left:{label:"Fahrrad", emoji:"🚲"}, right:{label:"Zu Fuß", emoji:"🚶"},
      staffCue:"„Waren Sie viel mit dem Rad unterwegs oder lieber zu Fuß?“" },
    { id:"de-eo-11", left:{label:"Tanzen", emoji:"💃"}, right:{label:"Singen", emoji:"🎤"},
      staffCue:"„Haben Sie früher gern getanzt oder lieber gesungen?“" },
    { id:"de-eo-12", left:{label:"Kino", emoji:"🎬"}, right:{label:"Buch", emoji:"📖"},
      staffCue:"„Ein Kinobesuch oder ein gutes Buch — was war Ihnen lieber?“" },
    { id:"de-eo-13", left:{label:"Weihnachten", emoji:"🎄"}, right:{label:"Ostern", emoji:"🐰"},
      staffCue:"„Weihnachten oder Ostern — welches Fest mochten Sie als Kind mehr?“" },
    { id:"de-eo-14", left:{label:"Suppe", emoji:"🍲"}, right:{label:"Braten", emoji:"🍖"},
      staffCue:"„Eine deftige Suppe oder ein schöner Sonntagsbraten?“" },
    { id:"de-eo-15", left:{label:"Frühaufsteher", emoji:"🌅"}, right:{label:"Nachteule", emoji:"🌙"},
      staffCue:"„Waren Sie ein Frühaufsteher oder eher eine Nachteule?“" }
  ],

  /* ---- Tab 3: Farb-Stimmung (immer positiv) ---- */
  colorTest: {
    prompt:null,
    options:[
      { key:"red",    label:"Rot",   emoji:"🔴", color:"#e0655e",
        result:"Sie sind voller Wärme und Energie — wie Sonnenschein, der andere aufrichtet.",
        cue:"„Wofür haben Sie sich in jungen Jahren mit ganzem Herzen eingesetzt?“" },
      { key:"blue",   label:"Blau",  emoji:"🔵", color:"#4a86c9",
        result:"Sie sind ruhig und fürsorglich — jemand, dem andere vertrauen und sich anlehnen.",
        cue:"„Waren Sie oft die Person, zu der andere um Rat kamen?“" },
      { key:"yellow", label:"Gelb",  emoji:"🟡", color:"#eab52f",
        result:"Sie sind heiter und neugierig — Sie bringen Leben in jeden Raum.",
        cue:"„Gibt es eine schöne Erinnerung, über die Sie heute noch lachen?“" },
      { key:"green",  label:"Grün",  emoji:"🟢", color:"#4a9d6f",
        result:"Sie sind sanft und ausgeglichen — eine beruhigende Gegenwart, die anderen guttut.",
        cue:"„Gibt es einen Ort oder einen Anblick, bei dem Sie zur Ruhe kommen?“" },
      { key:"orange", label:"Orange", emoji:"🟠", color:"#e8934a",
        result:"Sie sind herzlich und umgänglich — jemand, der Menschen zusammenbringt.",
        cue:"„Haben Ihnen Freunde und Nachbarn immer viel bedeutet?“" },
      { key:"purple", label:"Lila",  emoji:"🟣", color:"#8a6bd0",
        result:"Sie sind anmutig und feinsinnig — still stark, mit einer reichen Innenwelt.",
        cue:"„Gibt es Musik oder Kunst, die Sie schon immer berührt hat?“" }
    ]
  },

  /* ---- Berühmte Persönlichkeiten (Geburtstag 🎂 / Todestag 🕯️). Daten im ja-Pack geprüft. ---- */
  people: [
    { month:3,  day:26, type:"death", name:"Ludwig van Beethoven", note:"Deutscher Komponist. Um 1770 geboren, 1827 gestorben. Ein Meister, bekannt für die 9. Sinfonie und „Für Elise“." },
    { month:7,  day:28, type:"death", name:"Johann Sebastian Bach", note:"Deutscher Komponist. 1685 geboren, 1750 gestorben. Als „Vater der Musik“ gilt er als Gigant des Barock." },
    { month:1,  day:27, type:"birth", name:"Wolfgang Amadeus Mozart", note:"Österreichischer Komponist. Geboren 1756. Ein musikalisches Genie mit Werken wie „Die Zauberflöte“." },
    { month:12, day:5,  type:"death", name:"Wolfgang Amadeus Mozart", note:"Komponist. Gestorben 1791. Einer der größten Komponisten der Wiener Klassik." },
    { month:1,  day:31, type:"birth", name:"Franz Schubert",        note:"Österreichischer Komponist. Geboren 1797. Als „König des Liedes“ bekannt, u. a. „Der Erlkönig“." },
    { month:11, day:19, type:"death", name:"Franz Schubert",        note:"Komponist. 1828 mit nur 31 Jahren gestorben. Hinterließ die „Unvollendete“ Sinfonie." },
    { month:5,  day:7,  type:"birth", name:"Johannes Brahms",       note:"Deutscher Komponist. Geboren 1833. Neben Bach und Beethoven einer der „drei großen B“." },
    { month:4,  day:3,  type:"death", name:"Johannes Brahms",       note:"Komponist. Gestorben 1897. Bekannt u. a. für sein „Wiegenlied“." },
    { month:5,  day:22, type:"birth", name:"Richard Wagner",        note:"Deutscher Komponist. Geboren 1813. Berühmt für Musikdramen wie „Der Ring des Nibelungen“." },
    { month:2,  day:13, type:"death", name:"Richard Wagner",        note:"Komponist. 1883 in Venedig gestorben. Schuf gewaltige Opernwerke." },
    { month:2,  day:3,  type:"birth", name:"Felix Mendelssohn",     note:"Deutscher Komponist. Geboren 1809. Bekannt für den „Hochzeitsmarsch“ und „Ein Sommernachtstraum“." },
    { month:11, day:4,  type:"death", name:"Felix Mendelssohn",     note:"Komponist. Gestorben 1847. Ein bedeutender Vertreter der Romantik." },
    { month:6,  day:8,  type:"birth", name:"Robert Schumann",       note:"Deutscher Komponist. Geboren 1810. Bekannt für Klavierstücke wie „Träumerei“." },
    { month:7,  day:29, type:"death", name:"Robert Schumann",       note:"Komponist. Gestorben 1856. Ein Dichter der romantischen Musik." },
    { month:8,  day:28, type:"birth", name:"Johann Wolfgang von Goethe", note:"Deutscher Dichter. Geboren 1749. Bekannt für „Faust“ und „Die Leiden des jungen Werther“." },
    { month:3,  day:22, type:"death", name:"Johann Wolfgang von Goethe", note:"Dichter. Gestorben 1832. Der wohl größte deutsche Dichterfürst." },
    { month:3,  day:14, type:"birth", name:"Albert Einstein",       note:"In Deutschland geborener Physiker. Geboren 1879. Seine Relativitätstheorie veränderte die Welt." },
    { month:4,  day:18, type:"death", name:"Albert Einstein",       note:"Physiker. Gestorben 1955. Einer der größten Wissenschaftler des 20. Jahrhunderts." },
    { month:7,  day:14, type:"birth", name:"Gustav Klimt",          note:"Österreichischer Maler. Geboren 1862. Bekannt für „Der Kuss“ mit Blattgold." },
    { month:2,  day:6,  type:"death", name:"Gustav Klimt",          note:"Maler. Gestorben 1918. Führte die Wiener Secession an." },
    { month:6,  day:12, type:"birth", name:"Anne Frank",            note:"Verfasserin des „Tagebuch der Anne Frank“. Geboren 1929. Ein Mädchen, das im Versteck vor den Nazis schrieb." },
    { month:5,  day:12, type:"birth", name:"Florence Nightingale",  note:"Britische Krankenschwester. Geboren 1820. Begründerin der modernen Pflege; der 12. Mai ist Tag der Pflege." },
    { month:8,  day:13, type:"death", name:"Florence Nightingale",  note:"Krankenschwester. Gestorben 1910. Bekannt als „die Dame mit der Lampe“." },
    { month:11, day:7,  type:"birth", name:"Marie Curie",           note:"Physikerin und Chemikerin. Geboren 1867. Die erste Frau, die einen Nobelpreis erhielt." },
    { month:7,  day:4,  type:"death", name:"Marie Curie",           note:"Wissenschaftlerin. Gestorben 1934. Pionierin der Radioaktivitätsforschung." },
    { month:2,  day:12, type:"birth", name:"Charles Darwin",        note:"Britischer Naturforscher. Geboren 1809. Begründete mit „Über die Entstehung der Arten“ die Evolutionstheorie." },
    { month:4,  day:19, type:"death", name:"Charles Darwin",        note:"Naturforscher. Gestorben 1882. Prägte die Biologie nachhaltig." },
    { month:2,  day:11, type:"birth", name:"Thomas Edison",         note:"Amerikanischer Erfinder. Geboren 1847. Bekannt für Glühbirne und Phonograph." },
    { month:10, day:18, type:"death", name:"Thomas Edison",         note:"Erfinder. Gestorben 1931. Man nannte ihn den „Zauberer von Menlo Park“." },
    { month:12, day:27, type:"birth", name:"Louis Pasteur",         note:"Französischer Bakteriologe. Geboren 1822. Entwickelte Impfungen und die Pasteurisierung." },
    { month:9,  day:28, type:"death", name:"Louis Pasteur",         note:"Bakteriologe. Gestorben 1895. Gilt als Begründer der modernen Mikrobiologie." },
    { month:8,  day:6,  type:"birth", name:"Alexander Fleming",     note:"Britischer Bakteriologe. Geboren 1881. Entdeckte das erste Antibiotikum, Penicillin." },
    { month:3,  day:11, type:"death", name:"Alexander Fleming",     note:"Bakteriologe. Gestorben 1955. Rettete mit Penicillin unzählige Leben; Nobelpreisträger." },
    { month:3,  day:30, type:"birth", name:"Vincent van Gogh",      note:"Niederländischer Maler. Geboren 1853. Bekannt für „Sonnenblumen“ und „Sternennacht“." },
    { month:7,  day:29, type:"death", name:"Vincent van Gogh",      note:"Maler. Gestorben 1890. Ein erst nach seinem Tod berühmter Meister des Postimpressionismus." },
    { month:10, day:25, type:"birth", name:"Pablo Picasso",         note:"Spanischer Maler. Geboren 1881. Mitbegründer des Kubismus und Gigant der modernen Kunst." },
    { month:4,  day:8,  type:"death", name:"Pablo Picasso",         note:"Maler. Gestorben 1973. Bekannt u. a. für „Guernica“." },
    { month:11, day:14, type:"birth", name:"Claude Monet",          note:"Französischer Maler. Geboren 1840. Meister des Impressionismus, bekannt für „Seerosen“." },
    { month:12, day:5,  type:"death", name:"Claude Monet",          note:"Maler. Gestorben 1926. „Impression, Sonnenaufgang“ gab dem Impressionismus den Namen." },
    { month:4,  day:16, type:"birth", name:"Charlie Chaplin",       note:"Englischer Schauspieler und Regisseur. Geboren 1889. Seine Stummfilm-Komödien brachten die Welt zum Lachen." },
    { month:12, day:25, type:"death", name:"Charlie Chaplin",       note:"Der „Tramp“. Gestorben 1977. Beliebt für Filme wie „Moderne Zeiten“." },
    { month:6,  day:1,  type:"birth", name:"Marilyn Monroe",        note:"Amerikanische Schauspielerin. Geboren 1926. Eine Leinwand-Ikone der 1950er Jahre." },
    { month:8,  day:4,  type:"death", name:"Marilyn Monroe",        note:"Schauspielerin. Gestorben 1962. Einer der beständigsten Stars Hollywoods." },
    { month:1,  day:8,  type:"birth", name:"Elvis Presley",         note:"Amerikanischer Sänger. Geboren 1935. Bekannt als „King of Rock ’n’ Roll“." },
    { month:8,  day:16, type:"death", name:"Elvis Presley",         note:"Sänger. Gestorben 1977. Er brachte den Rock ’n’ Roll in die Welt." },
    { month:4,  day:2,  type:"birth", name:"Hans Christian Andersen", note:"Dänischer Märchendichter. Geboren 1805. Bekannt für „Die kleine Meerjungfrau“." },
    { month:8,  day:4,  type:"death", name:"Hans Christian Andersen", note:"Märchendichter. Gestorben 1875. Seine Märchen werden weltweit geliebt." },
    { month:10, day:17, type:"death", name:"Frédéric Chopin",       note:"Polnischer Komponist. 1810 geboren, 1849 gestorben. Er wird „Dichter am Klavier“ genannt." },
    { month:5,  day:7,  type:"birth", name:"Pjotr Tschaikowski",    note:"Russischer Komponist. Geboren 1840. Bekannt für „Schwanensee“ und „Der Nussknacker“." },
    { month:11, day:6,  type:"death", name:"Pjotr Tschaikowski",    note:"Komponist. Gestorben 1893. Schuf wunderschöne Ballettmusik." }
  ]
};
