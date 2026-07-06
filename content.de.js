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
      staffCue:"„Waren Sie eher für Sport zu begeistern oder für die Natur?“" }
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
        cue:"„Gibt es einen Ort oder einen Anblick, bei dem Sie zur Ruhe kommen?“" }
    ]
  }
};
