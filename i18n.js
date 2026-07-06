/*
 * 福祉サポーターズサポートアプリ・そよぎ（高齢者版） - i18n（画面の文言）
 * ============================================================================
 * ★このアプリは「従事者（介護・医療スタッフ）向けの実務ツール」です。
 *   スタッフが手元で、会話のネタ・答え・「スタッフ用カンペ」を素早く見るのが主目的。
 *   利用者に画面を見せる場面もあり得るので、見せても差し支えない作りにしています。
 *
 * ★このファイルは「UIの文言（ボタン・見出しなど）」だけを持ちます。
 *   会話の中身（花・今日は何の日・回想クイズ・アイスブレイク）は
 *   翻訳できません（文化ごとに“別物”）。中身は content.<code>.js に入れます。
 *
 * 言語を追加する手順（3ステップ）:
 *   1) この langs に {code, native, dir} を1行追加
 *   2) この ui に code:{...} ブロックを追加（下の en をコピーして訳す）
 *   3) content.<code>.js を作成（※翻訳ではなく、その文化の中身を新規に作る）
 * → アプリ側のコードは触らなくてOK。言語ボタンに自動で出ます。
 *
 * dir は文字方向。アラビア語など右→左は "rtl"。
 * reviewNote は「AI翻訳・要確認」の注記（原語=日本語は null）。
 * 文中の {n} は数字に置き換わります。
 * ============================================================================
 */
window.SOYOGI_WS_I18N = {
  // content.<code>.js が用意できた言語だけ並べる
  // ★content.<code>.js を用意できた言語だけをここに並べる（未完成は出さない）。
  //   UIブロック(ui:{...})は fr/it/es/ko/sv/nl も定義済みだが、コンテンツ完成時に langs へ追加する。
  langs: [
    { code:"ja", native:"日本語",   dir:"ltr" },
    { code:"en", native:"English",  dir:"ltr" },
    { code:"de", native:"Deutsch",  dir:"ltr" },
    { code:"fr", native:"Français", dir:"ltr" },
    { code:"it", native:"Italiano", dir:"ltr" },
    { code:"es", native:"Español",  dir:"ltr" },
    { code:"ko", native:"한국어",    dir:"ltr" },
    { code:"sv", native:"Svenska",  dir:"ltr" },
    { code:"nl", native:"Nederlands", dir:"ltr" }
  ],

  ui: {
    ja: {
      appTitle:"そよぎ",
      appSubtitle:"福祉サポーターズ・サポート（高齢者版）",
      tagline:"会話の、お守りに。🍃",

      // ボトムナビ（3タブ）
      tabTopic:"今日のネタ",
      tabQuiz:"回想クイズ",
      tabIce:"アイスブレイク",
      tabTopicIcon:"🌸",
      tabQuizIcon:"🧩",
      tabIceIcon:"☕",

      // タブ1：今日のネタ
      flowerHeading:"今月の花",
      gemHeading:"今月の宝石",
      flowerMeaning:"花言葉",
      onThisDayHeading:"今日は何の日？",
      peopleHeading:"今日の著名人",
      topicHint:"挨拶やちょっとした雑談のきっかけにどうぞ。",

      // タブ2：回想クイズ
      genreLabel:"ジャンル",
      genreAll:"おまかせ",
      quizHint:"問いかけて、答え合わせのあとカンペで会話を広げましょう。",
      tapToAnswer:"選択肢をタップで答え合わせ",
      revealNice:"なつかしいですね",
      triviaHeading:"豆知識",
      staffCueHeading:"スタッフ用カンペ",
      cueAskLabel:"たずねてみる",
      cueExpandLabel:"広げるコツ",
      cueCareLabel:"配慮",
      nextQuiz:"つぎのクイズ →",
      // ジャンル名（content側はコードだけ持つ）
      genres:{
        warmup:"肩ならし",
        price:"昔の物価",
        appliance:"ヒット家電",
        snack:"駄菓子・おやつ",
        tool:"仕事道具",
        fashion:"ファッション",
        hobby:"趣味・あそび"
      },

      // タブ3：アイスブレイク
      iceEitherOr:"どっち派？",
      iceColor:"色で気分診断",
      eoQuestion:"どっちが好き？",
      eoVs:"VS",
      colorPrompt:"今の気分に いちばん近い色は？",
      colorResultHeading:"診断結果",
      again:"もう一回",
      settings:"設定",
      bgm:"BGM（音楽）",
      sound:"効果音",

      chooseLang:"ことば / Language",
      credit:"アプリ開発：介護と支援の相談どころ・そよぎ",
      reviewNote:null
    },

    en: {
      appTitle:"Soyogi",
      appSubtitle:"Welfare Supporters' Support (Elder Edition)",
      tagline:"A little charm for conversation. 🍃",

      tabTopic:"Today",
      tabQuiz:"Reminisce",
      tabIce:"Ice-breaker",
      tabTopicIcon:"🌸",
      tabQuizIcon:"🧩",
      tabIceIcon:"☕",

      flowerHeading:"Flower of the month",
      gemHeading:"Gem of the month",
      flowerMeaning:"Meaning",
      onThisDayHeading:"On this day",
      peopleHeading:"Notable people today",
      topicHint:"Use it to open a greeting or a little small talk.",

      genreLabel:"Genre",
      genreAll:"Surprise me",
      quizHint:"Ask the question, reveal the answer, then use the cue to open up a chat.",
      tapToAnswer:"Tap a choice to reveal the answer",
      revealNice:"What a memory",
      triviaHeading:"Did you know?",
      staffCueHeading:"Staff cue",
      cueAskLabel:"Ask",
      cueExpandLabel:"Take it further",
      cueCareLabel:"Be mindful",
      nextQuiz:"Next quiz →",
      genres:{
        warmup:"Warm-up",
        price:"Old prices",
        appliance:"Classic gadgets",
        snack:"Sweets & snacks",
        tool:"Work tools",
        fashion:"Fashion",
        hobby:"Hobbies & play"
      },

      iceEitherOr:"This or that?",
      iceColor:"Color mood",
      eoQuestion:"Which do you like?",
      eoVs:"VS",
      colorPrompt:"Which color feels closest to your mood now?",
      colorResultHeading:"Result",
      again:"Again",
      settings:"Settings",
      bgm:"Music",
      sound:"Sound",

      chooseLang:"Language / ことば",
      credit:"Developed by Soyogi — Care & Support Consultation",
      reviewNote:"AI-assisted UI translation. Content is culturally re-authored, not translated."
    },

    de: {
      appTitle:"Soyogi",
      appSubtitle:"Unterstützung für Pflegekräfte (Senioren-Edition)",
      tagline:"Ein kleiner Talisman fürs Gespräch. 🍃",

      tabTopic:"Heute",
      tabQuiz:"Erinnern",
      tabIce:"Eisbrecher",
      tabTopicIcon:"🌸",
      tabQuizIcon:"🧩",
      tabIceIcon:"☕",

      flowerHeading:"Blume des Monats",
      gemHeading:"Stein des Monats",
      flowerMeaning:"Bedeutung",
      onThisDayHeading:"An diesem Tag",
      peopleHeading:"Bekannte Personen heute",
      topicHint:"Als Einstieg für einen Gruß oder einen kleinen Plausch.",

      genreLabel:"Kategorie",
      genreAll:"Überrasch mich",
      quizHint:"Stellen Sie die Frage, lösen Sie auf und knüpfen Sie mit dem Stichwort ein Gespräch an.",
      tapToAnswer:"Tippen Sie auf eine Antwort",
      revealNice:"Was für eine Erinnerung",
      triviaHeading:"Wussten Sie schon?",
      staffCueHeading:"Gesprächstipp",
      cueAskLabel:"Fragen Sie",
      cueExpandLabel:"Weiterführen",
      cueCareLabel:"Achten Sie darauf",
      nextQuiz:"Nächstes Quiz →",
      genres:{
        warmup:"Aufwärmen",
        price:"Alte Preise",
        appliance:"Klassische Geräte",
        snack:"Süßes & Snacks",
        tool:"Werkzeuge",
        fashion:"Mode",
        hobby:"Hobbys & Spiele"
      },

      iceEitherOr:"Dies oder das?",
      iceColor:"Farb-Stimmung",
      eoQuestion:"Was magst du lieber?",
      eoVs:"VS",
      colorPrompt:"Welche Farbe passt gerade am besten zu Ihrer Stimmung?",
      colorResultHeading:"Ergebnis",
      again:"Nochmal",
      settings:"Einstellungen",
      bgm:"Musik",
      sound:"Ton",

      chooseLang:"Sprache / Language",
      credit:"Entwickelt von Soyogi — Beratung für Pflege & Unterstützung",
      reviewNote:"KI-gestützte UI-Übersetzung. Inhalte sind kulturell neu verfasst, nicht übersetzt."
    },

    fr: {
      appTitle:"Soyogi",
      appSubtitle:"Soutien aux soignants (édition seniors)",
      tagline:"Un petit porte-bonheur pour la conversation. 🍃",

      tabTopic:"Aujourd'hui",
      tabQuiz:"Souvenirs",
      tabIce:"Brise-glace",
      tabTopicIcon:"🌸",
      tabQuizIcon:"🧩",
      tabIceIcon:"☕",

      flowerHeading:"Fleur du mois",
      gemHeading:"Pierre du mois",
      flowerMeaning:"Signification",
      onThisDayHeading:"Ce jour-là",
      peopleHeading:"Personnalités du jour",
      topicHint:"Pour lancer un bonjour ou un brin de causette.",

      genreLabel:"Catégorie",
      genreAll:"Au hasard",
      quizHint:"Posez la question, révélez la réponse, puis lancez la conversation avec l'astuce.",
      tapToAnswer:"Touchez une réponse",
      revealNice:"Quel souvenir",
      triviaHeading:"Le saviez-vous ?",
      staffCueHeading:"Astuce conversation",
      cueAskLabel:"À demander",
      cueExpandLabel:"Pour aller plus loin",
      cueCareLabel:"Point d'attention",
      nextQuiz:"Question suivante →",
      genres:{
        warmup:"Échauffement",
        price:"Prix d'antan",
        appliance:"Appareils d'époque",
        snack:"Douceurs & en-cas",
        tool:"Outils de travail",
        fashion:"Mode",
        hobby:"Loisirs & jeux"
      },

      iceEitherOr:"Ceci ou cela ?",
      iceColor:"Couleur du moment",
      eoQuestion:"Que préférez-vous ?",
      eoVs:"VS",
      colorPrompt:"Quelle couleur correspond le mieux à votre humeur ?",
      colorResultHeading:"Résultat",
      again:"Encore",
      settings:"Réglages",
      bgm:"Musique",
      sound:"Sons",

      chooseLang:"Langue / Language",
      credit:"Développé par Soyogi — Conseil en soins et accompagnement",
      reviewNote:"Traduction de l'interface assistée par IA. Le contenu est réécrit selon la culture, non traduit."
    },

    it: {
      appTitle:"Soyogi",
      appSubtitle:"Supporto per operatori socio-sanitari (edizione anziani)",
      tagline:"Un piccolo portafortuna per la conversazione. 🍃",

      tabTopic:"Oggi",
      tabQuiz:"Ricordi",
      tabIce:"Rompighiaccio",
      tabTopicIcon:"🌸",
      tabQuizIcon:"🧩",
      tabIceIcon:"☕",

      flowerHeading:"Fiore del mese",
      gemHeading:"Gemma del mese",
      flowerMeaning:"Significato",
      onThisDayHeading:"Accadde oggi",
      peopleHeading:"Personaggi di oggi",
      topicHint:"Per aprire un saluto o due chiacchiere.",

      genreLabel:"Categoria",
      genreAll:"A sorpresa",
      quizHint:"Fai la domanda, svela la risposta e apri il dialogo con lo spunto.",
      tapToAnswer:"Tocca una risposta",
      revealNice:"Che ricordo",
      triviaHeading:"Lo sapevi?",
      staffCueHeading:"Spunto per operatori",
      cueAskLabel:"Da chiedere",
      cueExpandLabel:"Per approfondire",
      cueCareLabel:"Attenzione",
      nextQuiz:"Prossimo quiz →",
      genres:{
        warmup:"Riscaldamento",
        price:"Prezzi di una volta",
        appliance:"Elettrodomestici storici",
        snack:"Dolci & merende",
        tool:"Attrezzi da lavoro",
        fashion:"Moda",
        hobby:"Hobby & giochi"
      },

      iceEitherOr:"Questo o quello?",
      iceColor:"Colore dell'umore",
      eoQuestion:"Cosa preferisci?",
      eoVs:"VS",
      colorPrompt:"Quale colore rispecchia meglio il tuo umore ora?",
      colorResultHeading:"Risultato",
      again:"Ancora",
      settings:"Impostazioni",
      bgm:"Musica",
      sound:"Suoni",

      chooseLang:"Lingua / Language",
      credit:"Sviluppato da Soyogi — Consulenza per cura e supporto",
      reviewNote:"Traduzione dell'interfaccia assistita dall'IA. I contenuti sono riscritti secondo la cultura, non tradotti."
    },

    es: {
      appTitle:"Soyogi",
      appSubtitle:"Apoyo para profesionales del cuidado (edición mayores)",
      tagline:"Un pequeño amuleto para la conversación. 🍃",

      tabTopic:"Hoy",
      tabQuiz:"Recuerdos",
      tabIce:"Rompehielos",
      tabTopicIcon:"🌸",
      tabQuizIcon:"🧩",
      tabIceIcon:"☕",

      flowerHeading:"Flor del mes",
      gemHeading:"Gema del mes",
      flowerMeaning:"Significado",
      onThisDayHeading:"Tal día como hoy",
      peopleHeading:"Personajes de hoy",
      topicHint:"Para empezar un saludo o una pequeña charla.",

      genreLabel:"Categoría",
      genreAll:"Sorpréndeme",
      quizHint:"Haz la pregunta, revela la respuesta y abre la charla con la pista.",
      tapToAnswer:"Toca una respuesta",
      revealNice:"Qué recuerdo",
      triviaHeading:"¿Sabías que…?",
      staffCueHeading:"Pista para el personal",
      cueAskLabel:"Pregunta",
      cueExpandLabel:"Para profundizar",
      cueCareLabel:"Ten en cuenta",
      nextQuiz:"Siguiente pregunta →",
      genres:{
        warmup:"Calentamiento",
        price:"Precios de antes",
        appliance:"Aparatos de antaño",
        snack:"Dulces y meriendas",
        tool:"Herramientas de trabajo",
        fashion:"Moda",
        hobby:"Aficiones y juegos"
      },

      iceEitherOr:"¿Esto o aquello?",
      iceColor:"Color del ánimo",
      eoQuestion:"¿Qué prefieres?",
      eoVs:"VS",
      colorPrompt:"¿Qué color se acerca más a tu ánimo ahora?",
      colorResultHeading:"Resultado",
      again:"Otra vez",
      settings:"Ajustes",
      bgm:"Música",
      sound:"Sonidos",

      chooseLang:"Idioma / Language",
      credit:"Desarrollado por Soyogi — Consultas de cuidado y apoyo",
      reviewNote:"Traducción de la interfaz asistida por IA. El contenido está reescrito según la cultura, no traducido."
    },

    ko: {
      appTitle:"소요기",
      appSubtitle:"복지 종사자 지원 앱 (어르신 편)",
      tagline:"대화를 위한 작은 부적. 🍃",

      tabTopic:"오늘",
      tabQuiz:"회상 퀴즈",
      tabIce:"아이스브레이크",
      tabTopicIcon:"🌸",
      tabQuizIcon:"🧩",
      tabIceIcon:"☕",

      flowerHeading:"이달의 꽃",
      gemHeading:"이달의 보석",
      flowerMeaning:"꽃말",
      onThisDayHeading:"오늘은 무슨 날?",
      peopleHeading:"오늘의 인물",
      topicHint:"인사나 가벼운 대화의 실마리로 활용하세요.",

      genreLabel:"장르",
      genreAll:"랜덤",
      quizHint:"질문하고 정답을 확인한 뒤, 힌트로 대화를 이어가세요.",
      tapToAnswer:"선택지를 눌러 정답 확인",
      revealNice:"그립네요",
      triviaHeading:"알고 계셨나요?",
      staffCueHeading:"직원용 힌트",
      cueAskLabel:"물어보기",
      cueExpandLabel:"대화 넓히기",
      cueCareLabel:"배려",
      nextQuiz:"다음 퀴즈 →",
      genres:{
        warmup:"몸풀기",
        price:"옛날 물가",
        appliance:"인기 가전",
        snack:"군것질·간식",
        tool:"일 도구",
        fashion:"패션",
        hobby:"취미·놀이"
      },

      iceEitherOr:"이것 저것?",
      iceColor:"색으로 보는 기분",
      eoQuestion:"어느 쪽이 좋아요?",
      eoVs:"VS",
      colorPrompt:"지금 기분에 가장 가까운 색은?",
      colorResultHeading:"결과",
      again:"다시",
      settings:"설정",
      bgm:"배경음악",
      sound:"효과음",

      chooseLang:"언어 / Language",
      credit:"개발: 돌봄과 지원 상담소 소요기",
      reviewNote:"AI 보조 UI 번역. 콘텐츠는 번역이 아니라 문화에 맞게 새로 작성되었습니다."
    },

    sv: {
      appTitle:"Soyogi",
      appSubtitle:"Stöd för vårdpersonal (seniorutgåva)",
      tagline:"En liten talisman för samtalet. 🍃",

      tabTopic:"Idag",
      tabQuiz:"Minnas",
      tabIce:"Isbrytare",
      tabTopicIcon:"🌸",
      tabQuizIcon:"🧩",
      tabIceIcon:"☕",

      flowerHeading:"Månadens blomma",
      gemHeading:"Månadens sten",
      flowerMeaning:"Betydelse",
      onThisDayHeading:"Denna dag",
      peopleHeading:"Kända personer idag",
      topicHint:"Att öppna med en hälsning eller lite småprat.",

      genreLabel:"Kategori",
      genreAll:"Överraska mig",
      quizHint:"Ställ frågan, avslöja svaret och öppna ett samtal med tipset.",
      tapToAnswer:"Tryck på ett svar",
      revealNice:"Vilket minne",
      triviaHeading:"Visste du?",
      staffCueHeading:"Samtalstips",
      cueAskLabel:"Fråga",
      cueExpandLabel:"Fördjupa",
      cueCareLabel:"Var lyhörd",
      nextQuiz:"Nästa fråga →",
      genres:{
        warmup:"Uppvärmning",
        price:"Gamla priser",
        appliance:"Klassiska prylar",
        snack:"Godis & tilltugg",
        tool:"Arbetsredskap",
        fashion:"Mode",
        hobby:"Hobbyer & lekar"
      },

      iceEitherOr:"Det här eller det där?",
      iceColor:"Färghumör",
      eoQuestion:"Vad föredrar du?",
      eoVs:"VS",
      colorPrompt:"Vilken färg passar bäst med ditt humör just nu?",
      colorResultHeading:"Resultat",
      again:"Igen",
      settings:"Inställningar",
      bgm:"Musik",
      sound:"Ljud",

      chooseLang:"Språk / Language",
      credit:"Utvecklad av Soyogi — rådgivning inom vård och stöd",
      reviewNote:"AI-assisterad översättning av gränssnittet. Innehållet är kulturellt nyskrivet, inte översatt."
    },

    nl: {
      appTitle:"Soyogi",
      appSubtitle:"Ondersteuning voor zorgmedewerkers (senioreneditie)",
      tagline:"Een klein houvast voor het gesprek. 🍃",

      tabTopic:"Vandaag",
      tabQuiz:"Herinneren",
      tabIce:"IJsbreker",
      tabTopicIcon:"🌸",
      tabQuizIcon:"🧩",
      tabIceIcon:"☕",

      flowerHeading:"Bloem van de maand",
      gemHeading:"Steen van de maand",
      flowerMeaning:"Betekenis",
      onThisDayHeading:"Op deze dag",
      peopleHeading:"Bekende personen vandaag",
      topicHint:"Om te openen met een groet of een praatje.",

      genreLabel:"Categorie",
      genreAll:"Verras me",
      quizHint:"Stel de vraag, onthul het antwoord en open een gesprek met de tip.",
      tapToAnswer:"Tik op een antwoord",
      revealNice:"Wat een herinnering",
      triviaHeading:"Wist u dat?",
      staffCueHeading:"Gesprekstip",
      cueAskLabel:"Vraag",
      cueExpandLabel:"Verder praten",
      cueCareLabel:"Wees attent",
      nextQuiz:"Volgende vraag →",
      genres:{
        warmup:"Opwarmen",
        price:"Oude prijzen",
        appliance:"Klassieke apparaten",
        snack:"Snoep & hapjes",
        tool:"Werkgereedschap",
        fashion:"Mode",
        hobby:"Hobby's & spelletjes"
      },

      iceEitherOr:"Dit of dat?",
      iceColor:"Kleurstemming",
      eoQuestion:"Wat heeft uw voorkeur?",
      eoVs:"VS",
      colorPrompt:"Welke kleur past nu het best bij uw stemming?",
      colorResultHeading:"Resultaat",
      again:"Opnieuw",
      settings:"Instellingen",
      bgm:"Muziek",
      sound:"Geluid",

      chooseLang:"Taal / Language",
      credit:"Ontwikkeld door Soyogi — advies voor zorg en ondersteuning",
      reviewNote:"AI-ondersteunde vertaling van de interface. De inhoud is cultureel opnieuw geschreven, niet vertaald."
    }
  }
};
