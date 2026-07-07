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
    { month:11, day:6,  type:"death", name:"Pjotr Tschaikowski",    note:"Komponist. Gestorben 1893. Schuf wunderschöne Ballettmusik." },
    /* ---- Übertragung weltbekannter Persönlichkeiten (aus der jap. Datenbasis, Daten sprachunabhängig) — Charge 1 ---- */
    { month:7,  day:6,  type:"birth", name:"Frida Kahlo",           note:"Mexikanische Malerin. Geboren 1907. Weltbekannt für ihre farbenprächtigen Selbstporträts." },
    { month:7,  day:6,  type:"birth", name:"Sylvester Stallone",    note:"US-amerikanischer Schauspieler. Geboren 1946. Bekannt aus den Filmen „Rocky“ und „Rambo“." },
    { month:7,  day:6,  type:"death", name:"Louis Armstrong",       note:"US-amerikanischer Jazzmusiker. Gestorben 1971. Beliebt für „What a Wonderful World“." },
    { month:7,  day:6,  type:"death", name:"Odilon Redon",          note:"Französischer Maler. Gestorben 1916. Bekannt für seine traumhaften Bilder." },
    { month:5,  day:4,  type:"birth", name:"Audrey Hepburn",        note:"Schauspielerin. Geboren 1929. Bekannt aus „Ein Herz und eine Krone“; später als Wohltäterin aktiv." },
    { month:1,  day:20, type:"death", name:"Audrey Hepburn",        note:"Schauspielerin. Gestorben 1993. Geliebt für Filme wie „Ein Herz und eine Krone“." },
    { month:10, day:9,  type:"birth", name:"John Lennon",           note:"Britischer Musiker. Geboren 1940. Bekannt als Mitglied der Beatles." },
    { month:8,  day:26, type:"birth", name:"Mutter Teresa",         note:"Katholische Ordensschwester. Geboren 1910. Sie half den Armen und erhielt den Friedensnobelpreis." },
    { month:9,  day:5,  type:"death", name:"Mutter Teresa",         note:"Ordensschwester. Gestorben 1997. Verehrt als „Mutter der Armen“." },
    { month:10, day:2,  type:"birth", name:"Mahatma Gandhi",        note:"Führer der indischen Unabhängigkeit. Geboren 1869. Er führte den gewaltlosen Widerstand an." },
    { month:6,  day:27, type:"birth", name:"Helen Keller",          note:"US-amerikanische Aktivistin. Geboren 1880. Taub und blind, ermutigte sie die ganze Welt." },
    { month:6,  day:1,  type:"death", name:"Helen Keller",          note:"Sozialaktivistin. Gestorben 1968. Sie wirkte trotz ihrer Behinderung weltweit." },
    { month:2,  day:12, type:"birth", name:"Abraham Lincoln",       note:"16. Präsident der USA. Geboren 1809. Er trieb die Abschaffung der Sklaverei voran." },
    { month:8,  day:29, type:"birth", name:"Michael Jackson",       note:"US-amerikanischer Sänger. Geboren 1958. Er wurde „King of Pop“ genannt." },
    { month:7,  day:21, type:"birth", name:"Ernest Hemingway",      note:"US-amerikanischer Schriftsteller. Geboren 1899. Nobelpreisträger, bekannt für „Der alte Mann und das Meer“." },
    { month:5,  day:29, type:"birth", name:"John F. Kennedy",       note:"35. Präsident der USA. Geboren 1917. Er wurde jung Präsident und begeisterte die Menschen." },
    { month:11, day:30, type:"birth", name:"Winston Churchill",     note:"Britischer Staatsmann. Geboren 1874. Premierminister im Zweiten Weltkrieg, bekannt für seine Reden." },
    { month:1,  day:24, type:"death", name:"Winston Churchill",     note:"Britischer Premierminister. Gestorben 1965. Er erhielt auch den Nobelpreis für Literatur." },
    { month:2,  day:6,  type:"birth", name:"Babe Ruth",             note:"US-amerikanischer Baseballspieler. Geboren 1895. Ein legendärer Schlagmann." },
    { month:8,  day:16, type:"death", name:"Babe Ruth",             note:"Baseballspieler. Gestorben 1948. Eine Ikone des amerikanischen Baseballs." },
    { month:2,  day:25, type:"birth", name:"Auguste Renoir",        note:"Französischer Maler. Geboren 1841. Ein Meister des Impressionismus voller Licht und Lebensfreude." },
    { month:12, day:3,  type:"death", name:"Auguste Renoir",        note:"Maler. Gestorben 1919. Im Alter malte er trotz schwerer Gicht weiter." },
    { month:6,  day:29, type:"birth", name:"Antoine de Saint-Exupéry", note:"Französischer Schriftsteller und Flieger. Geboren 1900. Autor von „Der kleine Prinz“." },
    { month:10, day:10, type:"birth", name:"Giuseppe Verdi",        note:"Italienischer Komponist. Geboren 1813. Bekannt für Opern wie „La Traviata“ und „Aida“." },
    { month:1,  day:27, type:"death", name:"Giuseppe Verdi",        note:"Komponist. Gestorben 1901. Ein Meister der italienischen Oper." },
    { month:11, day:30, type:"birth", name:"Mark Twain",            note:"US-amerikanischer Schriftsteller. Geboren 1835. Bekannt für „Die Abenteuer des Tom Sawyer“." },
    { month:4,  day:21, type:"death", name:"Mark Twain",            note:"Schriftsteller. Gestorben 1910. Seine Werke voller Humor und Ironie sind bis heute beliebt." },
    { month:12, day:31, type:"birth", name:"Henri Matisse",         note:"Französischer Maler. Geboren 1869. „Magier der Farbe“ und Meister des Fauvismus." },
    { month:11, day:3,  type:"death", name:"Henri Matisse",         note:"Maler. Gestorben 1954. Im Alter schuf er kunstvolle Scherenschnitte." },
    { month:5,  day:11, type:"birth", name:"Salvador Dalí",         note:"Spanischer Maler. Geboren 1904. Bekannt für zerfließende Uhren – ein Meister des Surrealismus." },
    { month:1,  day:23, type:"death", name:"Salvador Dalí",         note:"Maler. Gestorben 1989. Berühmt auch für seinen markanten Schnurrbart." },
    { month:1,  day:19, type:"birth", name:"Paul Cézanne",          note:"Französischer Maler. Geboren 1839. „Vater der modernen Malerei“." },
    { month:10, day:23, type:"death", name:"Paul Cézanne",          note:"Maler. Gestorben 1906. Seine Äpfel und Berge prägten die Kunst des 20. Jahrhunderts." },
    { month:2,  day:8,  type:"birth", name:"James Dean",            note:"US-amerikanischer Schauspieler. Geboren 1931. Bekannt aus „Jenseits von Eden“ – ein Idol der Jugend." },
    { month:12, day:22, type:"birth", name:"Giacomo Puccini",       note:"Italienischer Komponist. Geboren 1858. Bekannt für Opern wie „Madama Butterfly“ und „Tosca“." },
    { month:11, day:29, type:"death", name:"Giacomo Puccini",       note:"Komponist. Gestorben 1924. Ein herausragender Meister der italienischen Oper." },
    { month:9,  day:8,  type:"birth", name:"Antonín Dvořák",        note:"Tschechischer Komponist. Geboren 1841. Bekannt für die Sinfonie „Aus der Neuen Welt“." },
    { month:5,  day:1,  type:"death", name:"Antonín Dvořák",        note:"Komponist. Gestorben 1904. Er verwob die Melodien seiner Heimat in seine Werke." },
    { month:3,  day:4,  type:"birth", name:"Antonio Vivaldi",       note:"Italienischer Komponist. Geboren 1678. Bekannt für die Violinkonzerte „Die vier Jahreszeiten“." },
    { month:7,  day:28, type:"death", name:"Antonio Vivaldi",       note:"Komponist. Gestorben 1741. Einer der bedeutendsten Barockkomponisten." },
    { month:2,  day:26, type:"birth", name:"Victor Hugo",           note:"Französischer Schriftsteller. Geboren 1802. Autor von „Die Elenden“ (Les Misérables)." },
    { month:5,  day:22, type:"death", name:"Victor Hugo",           note:"Schriftsteller. Gestorben 1885. Ein mit Staatsbegräbnis geehrter Dichter der Romantik." },
    { month:12, day:5,  type:"birth", name:"Walt Disney",           note:"US-amerikanischer Trickfilmpionier und Unternehmer. Geboren 1901. Schöpfer von Micky Maus." },
    { month:12, day:15, type:"death", name:"Walt Disney",           note:"Trickfilmpionier. Gestorben 1966. Gründer von Disneyland." },
    { month:10, day:21, type:"birth", name:"Alfred Nobel",          note:"Schwedischer Erfinder. Geboren 1833. Er erfand das Dynamit und stiftete den Nobelpreis." },
    { month:12, day:10, type:"death", name:"Alfred Nobel",          note:"Erfinder. Gestorben 1896. Der 10. Dezember ist bis heute der Tag der Nobelpreisverleihung." },
    { month:3,  day:3,  type:"birth", name:"Alexander Graham Bell", note:"Erfinder. Geboren 1847. Er erfand das erste praxistaugliche Telefon." },
    { month:8,  day:2,  type:"death", name:"Alexander Graham Bell", note:"Erfinder. Gestorben 1922. Mit dem Telefon veränderte er die Welt." },
    { month:8,  day:29, type:"birth", name:"Ingrid Bergman",        note:"Schwedische Schauspielerin. Geboren 1915. Bekannt aus „Casablanca“." },
    { month:8,  day:29, type:"death", name:"Ingrid Bergman",        note:"Schauspielerin. Gestorben 1982 – an ihrem eigenen Geburtstag, dem 29. August." },
    { month:11, day:12, type:"birth", name:"Grace Kelly",           note:"US-amerikanische Schauspielerin. Geboren 1929. Von Hollywood zur Fürstin von Monaco." },
    { month:5,  day:26, type:"birth", name:"John Wayne",            note:"US-amerikanischer Schauspieler. Geboren 1907. Ein großer Star des Westernfilms." },
    { month:6,  day:11, type:"death", name:"John Wayne",            note:"Schauspieler. Gestorben 1979. Liebevoll „Duke“ genannt." },
    { month:12, day:12, type:"birth", name:"Frank Sinatra",         note:"US-amerikanischer Sänger und Schauspieler. Geboren 1915. Bekannt für „My Way“." },
    { month:5,  day:14, type:"death", name:"Frank Sinatra",         note:"Sänger und Schauspieler. Gestorben 1998. Ein Entertainer des 20. Jahrhunderts." },
    { month:6,  day:7,  type:"birth", name:"Paul Gauguin",          note:"Französischer Maler. Geboren 1848. Er malte die Menschen und Landschaften Tahitis." },
    { month:5,  day:8,  type:"death", name:"Paul Gauguin",          note:"Maler. Gestorben 1903. Bekannt auch für seine Freundschaft mit van Gogh." },
    { month:11, day:20, type:"death", name:"Leo Tolstoi",           note:"Russischer Schriftsteller. Gestorben 1910. Bekannt für „Krieg und Frieden“ und „Anna Karenina“." },
    { month:2,  day:9,  type:"death", name:"Fjodor Dostojewski",    note:"Russischer Schriftsteller. Gestorben 1881. Bekannt für „Schuld und Sühne“ und „Die Brüder Karamasow“." },
    { month:10, day:4,  type:"birth", name:"Jean-François Millet",  note:"Französischer Maler. Geboren 1814. Bekannt für „Die Ährenleserinnen“ und „Das Angelusläuten“." },
    { month:1,  day:20, type:"death", name:"Jean-François Millet",  note:"Maler. Gestorben 1875. Ein Meister der Bauernmalerei der Schule von Barbizon." },
    { month:7,  day:19, type:"birth", name:"Edgar Degas",           note:"Französischer Maler. Geboren 1834. Bekannt für seine Bilder von Balletttänzerinnen." },
    { month:9,  day:27, type:"death", name:"Edgar Degas",           note:"Maler. Gestorben 1917. Ein Impressionist, der den Augenblick der Bewegung einfing." },
    { month:12, day:12, type:"birth", name:"Edvard Munch",          note:"Norwegischer Maler. Geboren 1863. Weltbekannt als Schöpfer von „Der Schrei“." },
    { month:1,  day:23, type:"death", name:"Edvard Munch",          note:"Maler. Gestorben 1944. Ein Expressionist, der Angst und Einsamkeit malte." },
    { month:2,  day:7,  type:"birth", name:"Charles Dickens",       note:"Englischer Schriftsteller. Geboren 1812. Bekannt für „Eine Weihnachtsgeschichte“ und „Oliver Twist“." },
    { month:6,  day:9,  type:"death", name:"Charles Dickens",       note:"Schriftsteller. Gestorben 1870. Ein Volksdichter, der die Schwachen in den Blick nahm." },
    { month:10, day:22, type:"birth", name:"Franz Liszt",           note:"Ungarischer Komponist. Geboren 1811. Bekannt für die „Ungarischen Rhapsodien“ – ein „Zauberer am Klavier“." },
    { month:7,  day:31, type:"death", name:"Franz Liszt",           note:"Komponist. Gestorben 1886. Auch als virtuoser Pianist berühmt." },
    { month:8,  day:22, type:"birth", name:"Claude Debussy",        note:"Französischer Komponist. Geboren 1862. Bekannt für „Clair de Lune“ und „La Mer“." },
    { month:3,  day:25, type:"death", name:"Claude Debussy",        note:"Komponist. Gestorben 1918. Ein Hauptvertreter des musikalischen Impressionismus." },
    /* ---- Charge 2 ---- */
    { month:1,  day:4,  type:"birth", name:"Louis Braille",         note:"Französischer Erfinder der Blindenschrift. Geboren 1809. Selbst erblindet, schuf er die Punktschrift." },
    { month:1,  day:6,  type:"death", name:"Louis Braille",         note:"Erfinder der Blindenschrift. Gestorben 1852. Er brachte blinden Menschen weltweit das Lesen." },
    { month:2,  day:4,  type:"birth", name:"Rosa Parks",            note:"US-amerikanische Bürgerrechtlerin. Geboren 1913. Ihr Sitzenbleiben im Bus löste eine Bewegung aus." },
    { month:10, day:24, type:"death", name:"Rosa Parks",            note:"Bürgerrechtlerin. Gestorben 2005. „Mutter der Bürgerrechtsbewegung“ genannt." },
    { month:2,  day:2,  type:"birth", name:"James Joyce",           note:"Irischer Schriftsteller. Geboren 1882. Autor von „Ulysses“, einem Hauptwerk der Moderne." },
    { month:1,  day:13, type:"death", name:"James Joyce",           note:"Schriftsteller. Gestorben 1941. Er prägte die moderne Literatur mit neuen Erzählformen." },
    { month:8,  day:15, type:"birth", name:"Napoleon Bonaparte",    note:"Kaiser der Franzosen. Geboren 1769. Er führte Frankreich in der Revolutionszeit und prägte Europa." },
    { month:5,  day:5,  type:"death", name:"Napoleon Bonaparte",    note:"Kaiser der Franzosen. Gestorben 1821 in der Verbannung. Bekannt für den Satz, „unmöglich“ sei kein französisches Wort." },
    { month:2,  day:29, type:"birth", name:"Gioachino Rossini",     note:"Italienischer Komponist. Geboren 1792 am Schalttag. Bekannt für „Der Barbier von Sevilla“." },
    { month:11, day:13, type:"death", name:"Gioachino Rossini",     note:"Komponist. Gestorben 1868. Beliebt für seine heiteren Opern." },
    { month:3,  day:24, type:"birth", name:"Harry Houdini",         note:"US-amerikanischer Entfesselungskünstler. Geboren 1874. Als „König der Entfesselung“ verblüffte er die Welt." },
    { month:10, day:31, type:"death", name:"Harry Houdini",         note:"Zauberkünstler. Gestorben 1926 – ausgerechnet an Halloween, dem 31. Oktober." },
    { month:5,  day:31, type:"birth", name:"Clint Eastwood",        note:"US-amerikanischer Schauspieler und Regisseur. Geboren 1930. Bekannt aus Western und „Dirty Harry“." },
    { month:8,  day:9,  type:"birth", name:"Jean Piaget",           note:"Schweizer Psychologe. Geboren 1896. Er erforschte die geistige Entwicklung von Kindern." },
    { month:2,  day:23, type:"birth", name:"Georg Friedrich Händel", note:"In Deutschland geborener Komponist. Geboren 1685. Bekannt für das Oratorium „Der Messias“." },
    { month:4,  day:14, type:"death", name:"Georg Friedrich Händel", note:"Komponist. Gestorben 1759. Er wirkte in England und schuf erhabene Chorwerke." },
    { month:3,  day:31, type:"birth", name:"Joseph Haydn",          note:"Österreichischer Komponist. Geboren 1732. „Vater der Sinfonie“ mit unzähligen Werken." },
    { month:5,  day:31, type:"death", name:"Joseph Haydn",          note:"Komponist. Gestorben 1809. Er prägte Streichquartett und Sinfonie." },
    { month:7,  day:7,  type:"birth", name:"Gustav Mahler",         note:"Österreichischer Komponist und Dirigent. Geboren 1860. Bekannt für seine gewaltigen Sinfonien." },
    { month:5,  day:18, type:"death", name:"Gustav Mahler",         note:"Komponist. Gestorben 1911. Er verband die Musik des 19. und 20. Jahrhunderts." },
    { month:6,  day:15, type:"birth", name:"Edvard Grieg",          note:"Norwegischer Komponist. Geboren 1843. Bekannt für die „Peer-Gynt“-Suite." },
    { month:9,  day:4,  type:"death", name:"Edvard Grieg",          note:"Komponist. Gestorben 1907. Er trug die Melodien Norwegens in die Welt." },
    { month:12, day:8,  type:"birth", name:"Jean Sibelius",         note:"Finnischer Komponist. Geboren 1865. Bekannt für die Tondichtung „Finlandia“." },
    { month:9,  day:20, type:"death", name:"Jean Sibelius",         note:"Komponist. Gestorben 1957. Finnlands großer Nationalkomponist." },
    { month:10, day:9,  type:"birth", name:"Camille Saint-Saëns",   note:"Französischer Komponist. Geboren 1835. Bekannt für „Der Karneval der Tiere“." },
    { month:12, day:16, type:"death", name:"Camille Saint-Saëns",   note:"Komponist. Gestorben 1921. Er schuf auch für Orgel und Konzert schöne Werke." },
    { month:10, day:25, type:"birth", name:"Georges Bizet",         note:"Französischer Komponist. Geboren 1838. Bekannt für die Oper „Carmen“." },
    { month:6,  day:3,  type:"death", name:"Georges Bizet",         note:"Komponist. Gestorben 1875. „Carmen“ wird bis heute weltweit geliebt." },
    { month:4,  day:15, type:"birth", name:"Leonardo da Vinci",     note:"Italienischer Künstler und Wissenschaftler. Geboren 1452. Schöpfer der „Mona Lisa“ und des „Abendmahls“." },
    { month:5,  day:2,  type:"death", name:"Leonardo da Vinci",     note:"Universalgenie. Gestorben 1519. Er hinterließ Spuren in Kunst, Wissenschaft und Technik." },
    { month:3,  day:6,  type:"birth", name:"Michelangelo",          note:"Italienischer Künstler. Geboren 1475. Bekannt für den „David“ und die Sixtinische Kapelle." },
    { month:2,  day:18, type:"death", name:"Michelangelo",          note:"Künstler. Gestorben 1564. Ein Meister von Bildhauerei, Malerei und Architektur." },
    { month:7,  day:15, type:"birth", name:"Rembrandt",             note:"Niederländischer Maler. Geboren 1606. Ein Meister von Licht und Schatten im Goldenen Zeitalter." },
    { month:10, day:4,  type:"death", name:"Rembrandt",             note:"Maler. Gestorben 1669. Bekannt auch für seine vielen Selbstbildnisse." },
    { month:11, day:12, type:"birth", name:"Auguste Rodin",         note:"Französischer Bildhauer. Geboren 1840. Bekannt für „Der Denker“ – Vater der modernen Plastik." },
    { month:11, day:17, type:"death", name:"Auguste Rodin",         note:"Bildhauer. Gestorben 1917. Er stellte den menschlichen Körper lebendig dar." },
    { month:6,  day:25, type:"birth", name:"Antoni Gaudí",          note:"Spanischer Architekt. Geboren 1852. Er entwarf die Sagrada Família." },
    { month:6,  day:10, type:"death", name:"Antoni Gaudí",          note:"Architekt. Gestorben 1926. Mit fantasievollen Bauten schmückte er Barcelona." },
    { month:12, day:18, type:"birth", name:"Paul Klee",             note:"In der Schweiz geborener Maler. Geboren 1879. Bekannt für poetische, farbenreiche Werke." },
    { month:6,  day:29, type:"death", name:"Paul Klee",             note:"Maler. Gestorben 1940. Er hinterließ rund 9000 Werke." },
    { month:7,  day:10, type:"birth", name:"Nikola Tesla",          note:"Erfinder. Geboren 1856. Er trug zur Nutzung des Wechselstroms bei." },
    { month:1,  day:7,  type:"death", name:"Nikola Tesla",          note:"Erfinder. Gestorben 1943. Er legte Grundlagen der modernen Stromtechnik." },
    { month:9,  day:22, type:"birth", name:"Michael Faraday",       note:"Britischer Wissenschaftler. Geboren 1791. Er entdeckte die elektromagnetische Induktion." },
    { month:8,  day:25, type:"death", name:"Michael Faraday",       note:"Wissenschaftler. Gestorben 1867. Seine Forschung zu Strom und Magnetismus veränderte die Welt." },
    { month:4,  day:25, type:"birth", name:"Guglielmo Marconi",     note:"Italienischer Erfinder. Geboren 1874. „Vater des Funks“ und Nobelpreisträger." },
    { month:7,  day:20, type:"death", name:"Guglielmo Marconi",     note:"Erfinder. Gestorben 1937. Er verwirklichte die drahtlose Nachricht über das Meer." },
    { month:3,  day:27, type:"birth", name:"Wilhelm Conrad Röntgen", note:"Deutscher Physiker. Geboren 1845. Er entdeckte die Röntgenstrahlen und erhielt den ersten Physik-Nobelpreis." },
    { month:2,  day:10, type:"death", name:"Wilhelm Conrad Röntgen", note:"Physiker. Gestorben 1923. Seine Strahlen sind aus der Medizin nicht wegzudenken." },
    { month:2,  day:8,  type:"birth", name:"Jules Verne",           note:"Französischer Schriftsteller. Geboren 1828. „Vater der Science-Fiction“, bekannt für „20.000 Meilen unter dem Meer“." },
    { month:3,  day:24, type:"death", name:"Jules Verne",           note:"Schriftsteller. Gestorben 1905. Seine Abenteuergeschichten begeistern bis heute." },
    { month:12, day:16, type:"birth", name:"Jane Austen",           note:"Englische Romanautorin. Geboren 1775. Bekannt für „Stolz und Vorurteil“." },
    { month:7,  day:18, type:"death", name:"Jane Austen",           note:"Romanautorin. Gestorben 1817. Sie schilderte das englische Leben mit feinem Blick." },
    { month:4,  day:23, type:"death", name:"William Shakespeare",   note:"Englischer Dramatiker. Gestorben 1616. Er schuf „Hamlet“ und „Romeo und Julia“." },
    { month:10, day:16, type:"birth", name:"Oscar Wilde",           note:"Irischer Schriftsteller. Geboren 1854. Bekannt für „Der glückliche Prinz“." },
    { month:11, day:30, type:"death", name:"Oscar Wilde",           note:"Schriftsteller. Gestorben 1900. Er hinterließ geistreiche Stücke und Geschichten." },
    { month:9,  day:15, type:"birth", name:"Agatha Christie",       note:"Englische Schriftstellerin. Geboren 1890. „Königin des Krimis“ und Schöpferin von Hercule Poirot." },
    { month:1,  day:12, type:"death", name:"Agatha Christie",       note:"Schriftstellerin. Gestorben 1976. Eine der meistgelesenen Krimiautorinnen der Welt." },
    { month:1,  day:4,  type:"birth", name:"Jacob Grimm",           note:"Deutscher Gelehrter. Geboren 1785. Mit seinem Bruder sammelte er die „Grimms Märchen“." },
    { month:9,  day:20, type:"death", name:"Jacob Grimm",           note:"Gelehrter. Gestorben 1863. Bedeutend für Sprachwissenschaft und Märchenforschung." },
    { month:2,  day:24, type:"birth", name:"Wilhelm Grimm",         note:"Deutscher Schriftsteller. Geboren 1786. Mit seinem Bruder gab er die „Grimms Märchen“ heraus." },
    { month:12, day:16, type:"death", name:"Wilhelm Grimm",         note:"Schriftsteller. Gestorben 1859. „Rotkäppchen“ und „Schneewittchen“ leben bis heute." },
    { month:7,  day:20, type:"birth", name:"Gregor Mendel",         note:"Österreichischer Mönch und Wissenschaftler. Geboren 1822. Er entdeckte mit Erbsen die Vererbungsgesetze." },
    { month:1,  day:6,  type:"death", name:"Gregor Mendel",         note:"Wissenschaftler. Gestorben 1884. „Vater der Genetik“ genannt." },
    { month:4,  day:20, type:"birth", name:"Joan Miró",             note:"Spanischer Maler. Geboren 1893. Bekannt für heitere Bilder voller Zeichen und Sterne." },
    { month:12, day:25, type:"death", name:"Joan Miró",             note:"Maler. Gestorben 1983. Ein Meister des Surrealismus." },
    { month:6,  day:28, type:"birth", name:"Peter Paul Rubens",     note:"Flämischer Maler. Geboren 1577. Ein Meister der schwungvollen Barockmalerei." },
    { month:5,  day:30, type:"death", name:"Peter Paul Rubens",     note:"Maler. Gestorben 1640. Er war auch als Diplomat tätig." },
    { month:3,  day:30, type:"birth", name:"Francisco de Goya",     note:"Spanischer Maler. Geboren 1746. Hofmaler mit scharfem Blick für den Menschen." },
    { month:4,  day:16, type:"death", name:"Francisco de Goya",     note:"Maler. Gestorben 1828. Er gilt als Wegbereiter der modernen Malerei." },
    { month:1,  day:23, type:"birth", name:"Édouard Manet",         note:"Französischer Maler. Geboren 1832. Mit „Das Frühstück im Grünen“ ebnete er den Weg zum Impressionismus." },
    { month:4,  day:30, type:"death", name:"Édouard Manet",         note:"Maler. Gestorben 1883. Einer der Väter der modernen Malerei." },
    { month:11, day:24, type:"birth", name:"Henri de Toulouse-Lautrec", note:"Französischer Maler. Geboren 1864. Bekannt für Plakate mit Pariser Cabarets und Tänzerinnen." },
    { month:9,  day:9,  type:"death", name:"Henri de Toulouse-Lautrec", note:"Maler. Gestorben 1901. Er prägte die Plakatkunst nachhaltig." },
    { month:7,  day:12, type:"birth", name:"Amedeo Modigliani",     note:"Italienischer Maler. Geboren 1884. Bekannt für Bildnisse mit langen Hälsen." },
    { month:1,  day:24, type:"death", name:"Amedeo Modigliani",     note:"Maler. Gestorben 1920. Ein Vertreter der „École de Paris“." },
    { month:3,  day:7,  type:"birth", name:"Maurice Ravel",         note:"Französischer Komponist. Geboren 1875. Bekannt für den „Boléro“." },
    { month:12, day:28, type:"death", name:"Maurice Ravel",         note:"Komponist. Gestorben 1937. Bekannt für seine feine, farbige Orchestermusik." },
    { month:9,  day:26, type:"birth", name:"George Gershwin",       note:"US-amerikanischer Komponist. Geboren 1898. Bekannt für „Rhapsody in Blue“." },
    { month:7,  day:11, type:"death", name:"George Gershwin",       note:"Komponist. Gestorben 1937. Er verband Klassik und Jazz." },
    { month:11, day:6,  type:"birth", name:"John Philip Sousa",     note:"US-amerikanischer Komponist. Geboren 1854. „Marschkönig“, bekannt für „The Stars and Stripes Forever“." },
    { month:3,  day:6,  type:"death", name:"John Philip Sousa",     note:"Komponist. Gestorben 1932. Er schuf viele beliebte Märsche." },
    { month:6,  day:2,  type:"birth", name:"Edward Elgar",          note:"Englischer Komponist. Geboren 1857. Bekannt für „Pomp and Circumstance“." },
    { month:2,  day:23, type:"death", name:"Edward Elgar",          note:"Komponist. Gestorben 1934. Ein führender Komponist Englands." },
    { month:1,  day:27, type:"birth", name:"Lewis Carroll",         note:"Englischer Schriftsteller und Mathematiker. Geboren 1832. Bekannt für „Alice im Wunderland“." },
    { month:1,  day:14, type:"death", name:"Lewis Carroll",         note:"Schriftsteller. Gestorben 1898. Er war auch Mathematiker und Fotograf." },
    { month:5,  day:22, type:"birth", name:"Arthur Conan Doyle",    note:"Britischer Schriftsteller. Geboren 1859. Schöpfer des Detektivs Sherlock Holmes." },
    { month:7,  day:7,  type:"death", name:"Arthur Conan Doyle",    note:"Schriftsteller. Gestorben 1930. Er war auch Arzt." }
  ]
};
