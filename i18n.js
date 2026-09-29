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
      iceColor:"色で気分チェック",
      eoQuestion:"どっちが好き？",
      eoVs:"VS",
      colorPrompt:"今の気分に いちばん近い色は？",
      colorResultHeading:"結果",
      again:"もう一回",
      settings:"設定",
      bgm:"BGM（音楽）",
      sound:"効果音",

      chooseLang:"ことば / Language",
      credit:"アプリ開発：介護と支援の相談どころ・そよぎ",
      reviewNote:null,

      // はじめての 使い方（初回の案内・2026-09-30）。本文の {キー} は、この言語の画面の文字に置きかわる（ボタン名を画面と同じにするため）
      guide:{
        title:"使い方", step:"{n} / {m}", prev:"← まえ", next:"つぎ →", start:"はじめる", again:"使い方を もう一度 見る",
        heads:[
          "{appSubtitle}へ ようこそ",
          "まず、ここから",
          "{tabTopic}",
          "{tabQuiz}",
          "{tabIce}",
          "この端末の中だけ",
          "音・ことば・この案内"
        ],
        bodies:[
          "介護・医療のスタッフが、高齢の方との会話のきっかけを、手元ですぐに見つけるための道具です。\n点数や勝ち負けはありません。答えが合っているかより、そのあとの会話を大切にしています。\n利用者の方に画面を見せても大丈夫な作りです。\nことばは、上で選べます。あとから右上の 🌐 でも変えられます。",
          "画面の下に「{tabTopic}」「{tabQuiz}」「{tabIce}」の3つがあります。\nあいさつや声かけの前に、「{tabTopic}」で今日の話題をひとつ見つけておきます。\n話が弾みそうなときは「{tabQuiz}」、初対面のときや場をなごませたいときは「{tabIce}」が向いています。",
          "今日の日付に合わせた話題が出ます。\n「{flowerHeading}」と「{gemHeading}」は、花言葉・石言葉つきです。\n「{onThisDayHeading}」と「{peopleHeading}」は、今日に当てはまるものだけが出ます。無い日は、そのカードは出ません。\nいちばん上には、今日の六曜も出ます。",
          "上のジャンル（「{genreAll}」「{genres.price}」など）を選んで、問いかけます。\n選択肢をタップすると答え合わせです。「{triviaHeading}」と「{staffCueHeading}」が出ます。\nカンペの「{cueAskLabel}」「{cueExpandLabel}」「{cueCareLabel}」を見ながら、思い出話を広げましょう。\n「{nextQuiz}」で次の問題へ。",
          "上で「{iceEitherOr}」と「{iceColor}」を切り替えます。\n「{iceEitherOr}」は、2つのうち好きなほうをタップすると「{staffCueHeading}」が出ます。\n「{iceColor}」は、今の気分に近い色を選ぶと、前向きな「{colorResultHeading}」とカンペが出ます。\nどちらも「{again}」で、別の問いや選び直しができます。",
          "このアプリには、名前などを書く欄はありません。登録もいりません。\nこの端末に残るのは、選んだことば・音の大きさ・最後に開いた画面・この案内を読んだことだけです。どこにも送られません。",
          "右上の ⚙️ で「{settings}」が開きます。「{bgm}」と「{sound}」の大きさを変えられます。いちばん左にすると鳴りません。\nBGM は、この案内を閉じたあと、画面にふれると流れ始めます。\nことばは、右上の 🌐 で変えられます。\nこの案内は、「{settings}」の「{guide.again}」で、いつでも もう一度 見られます。"
        ]
      }
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
      reviewNote:"AI-assisted UI translation. Content is culturally re-authored, not translated.",

      guide:{
        title:"How to use", step:"{n} / {m}", prev:"← Back", next:"Next →", start:"Start", again:"Show how to use again",
        heads:[
          "Welcome to {appSubtitle}",
          "Start here",
          "{tabTopic}",
          "{tabQuiz}",
          "{tabIce}",
          "Only on this device",
          "Sound, language and this guide"
        ],
        bodies:[
          "A tool for care and medical staff to find conversation starters with older people, right at hand.\nThere are no scores and no winners. What matters is not whether an answer is right, but the conversation that follows.\nThe screens are fine to show to the people you support.\nChoose a language above. You can change it later with 🌐 at the top right.",
          "At the bottom of the screen there are three tabs: “{tabTopic}”, “{tabQuiz}” and “{tabIce}”.\nBefore you greet someone, open “{tabTopic}” and pick one topic for the day.\nWhen the conversation is flowing, try “{tabQuiz}”. When you meet someone for the first time or want to ease the mood, “{tabIce}” works well.",
          "Topics that match today's date.\n“{flowerHeading}” and “{gemHeading}” come with their meanings.\n“{onThisDayHeading}” and “{peopleHeading}” only show what fits today. On days with nothing to show, those cards do not appear.",
          "Choose a genre at the top (“{genreAll}”, “{genres.price}” and more) and ask the question.\nTap a choice to reveal the answer. “{triviaHeading}” and the “{staffCueHeading}” appear.\nUse “{cueAskLabel}”, “{cueExpandLabel}” and “{cueCareLabel}” in the cue to bring memories into the conversation.\nTap “{nextQuiz}” for the next question.",
          "Switch between “{iceEitherOr}” and “{iceColor}” at the top.\nIn “{iceEitherOr}”, tap the one you like and the “{staffCueHeading}” appears.\nIn “{iceColor}”, choose the color closest to how you feel now to see a positive “{colorResultHeading}” and a cue.\nIn both, “{again}” gives you a new question or a new choice.",
          "This app has no place to write names or other personal details. No sign-up is needed.\nThe only things kept on this device are the language you chose, the sound levels, the last screen you opened and whether you have read this guide. Nothing is sent anywhere.",
          "Tap ⚙️ at the top right to open “{settings}”. You can change the level of “{bgm}” and “{sound}”. All the way to the left turns it off.\nThe music starts when you touch the screen after closing this guide.\nChange the language with 🌐 at the top right.\nYou can see this guide again at any time with “{guide.again}” in “{settings}”."
        ]
      }
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
      reviewNote:"KI-gestützte UI-Übersetzung. Inhalte sind kulturell neu verfasst, nicht übersetzt.",

      guide:{
        title:"Anleitung", step:"{n} / {m}", prev:"← Zurück", next:"Weiter →", start:"Los geht's", again:"Anleitung noch einmal ansehen",
        heads:[
          "Willkommen bei {appSubtitle}",
          "So fangen Sie an",
          "{tabTopic}",
          "{tabQuiz}",
          "{tabIce}",
          "Nur auf diesem Gerät",
          "Ton, Sprache und diese Anleitung"
        ],
        bodies:[
          "Ein Werkzeug für Pflege- und Gesundheitspersonal, um im Gespräch mit älteren Menschen schnell einen Einstieg zu finden.\nEs gibt keine Punkte und keine Gewinner. Wichtiger als die richtige Antwort ist das Gespräch danach.\nDie Bildschirme können Sie den Menschen, die Sie begleiten, ruhig zeigen.\nWählen Sie oben eine Sprache. Später können Sie sie oben rechts mit 🌐 ändern.",
          "Unten auf dem Bildschirm gibt es drei Bereiche: „{tabTopic}“, „{tabQuiz}“ und „{tabIce}“.\nSuchen Sie sich vor der Begrüßung unter „{tabTopic}“ ein Thema für den Tag.\nWenn das Gespräch in Gang kommt, passt „{tabQuiz}“. Beim ersten Kennenlernen oder um die Stimmung zu lockern, passt „{tabIce}“.",
          "Themen passend zum heutigen Datum.\n„{flowerHeading}“ und „{gemHeading}“ zeigen auch ihre Bedeutung.\n„{onThisDayHeading}“ und „{peopleHeading}“ zeigen nur, was zu heute passt. An Tagen ohne Eintrag erscheinen diese Karten nicht.",
          "Wählen Sie oben eine Kategorie („{genreAll}“, „{genres.price}“ und weitere) und stellen Sie die Frage.\nTippen Sie auf eine Antwort, um sie aufzulösen. Dann erscheinen „{triviaHeading}“ und der „{staffCueHeading}“.\nMit „{cueAskLabel}“, „{cueExpandLabel}“ und „{cueCareLabel}“ im Tipp kommen Erinnerungen ins Gespräch.\nMit „{nextQuiz}“ geht es zur nächsten Frage.",
          "Oben wechseln Sie zwischen „{iceEitherOr}“ und „{iceColor}“.\nBei „{iceEitherOr}“ tippen Sie auf das, was Ihnen lieber ist. Dann erscheint der „{staffCueHeading}“.\nBei „{iceColor}“ wählen Sie die Farbe, die Ihrer Stimmung am nächsten ist. Dann erscheinen ein positives „{colorResultHeading}“ und ein Tipp.\nMit „{again}“ gibt es jeweils eine neue Frage oder eine neue Wahl.",
          "In dieser App gibt es kein Feld für Namen oder andere persönliche Angaben. Eine Anmeldung ist nicht nötig.\nAuf diesem Gerät bleiben nur die gewählte Sprache, die Lautstärke, der zuletzt geöffnete Bereich und ob Sie diese Anleitung gelesen haben. Nichts davon wird irgendwohin gesendet.",
          "Oben rechts öffnet ⚙️ die „{settings}“. Dort stellen Sie die Lautstärke von „{bgm}“ und „{sound}“ ein. Ganz nach links geschoben ist der Ton aus.\nDie Musik beginnt, wenn Sie nach dem Schließen dieser Anleitung den Bildschirm berühren.\nDie Sprache ändern Sie oben rechts mit 🌐.\nDiese Anleitung sehen Sie jederzeit wieder mit „{guide.again}“ in den „{settings}“."
        ]
      }
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
      reviewNote:"Traduction de l'interface assistée par IA. Le contenu est réécrit selon la culture, non traduit.",

      guide:{
        title:"Mode d'emploi", step:"{n} / {m}", prev:"← Retour", next:"Suivant →", start:"Commencer", again:"Revoir le mode d'emploi",
        heads:[
          "Bienvenue dans {appSubtitle}",
          "Pour commencer",
          "{tabTopic}",
          "{tabQuiz}",
          "{tabIce}",
          "Uniquement sur cet appareil",
          "Son, langue et ce guide"
        ],
        bodies:[
          "Un outil pour les soignants et le personnel médical, pour trouver vite de quoi engager la conversation avec des personnes âgées.\nIl n'y a ni points ni gagnant. Plus que la bonne réponse, c'est la conversation qui suit qui compte.\nVous pouvez sans problème montrer les écrans aux personnes que vous accompagnez.\nChoisissez une langue ci-dessus. Vous pourrez la changer plus tard avec 🌐 en haut à droite.",
          "En bas de l'écran, il y a trois onglets : « {tabTopic} », « {tabQuiz} » et « {tabIce} ».\nAvant de saluer quelqu'un, ouvrez « {tabTopic} » et choisissez un sujet du jour.\nQuand la conversation prend, essayez « {tabQuiz} ». Pour une première rencontre ou pour détendre l'ambiance, « {tabIce} » convient bien.",
          "Des sujets liés à la date du jour.\n« {flowerHeading} » et « {gemHeading} » sont accompagnés de leur signification.\n« {onThisDayHeading} » et « {peopleHeading} » ne montrent que ce qui correspond à aujourd'hui. Les jours sans rien, ces cartes n'apparaissent pas.",
          "Choisissez une catégorie en haut (« {genreAll} », « {genres.price} », etc.) et posez la question.\nTouchez une réponse pour la révéler. « {triviaHeading} » et l'« {staffCueHeading} » apparaissent.\nAvec « {cueAskLabel} », « {cueExpandLabel} » et « {cueCareLabel} », faites revenir les souvenirs dans la conversation.\n« {nextQuiz} » passe à la question suivante.",
          "En haut, passez de « {iceEitherOr} » à « {iceColor} ».\nDans « {iceEitherOr} », touchez ce que vous préférez : l'« {staffCueHeading} » apparaît.\nDans « {iceColor} », choisissez la couleur la plus proche de votre humeur : un « {colorResultHeading} » positif et une astuce apparaissent.\nDans les deux cas, « {again} » propose une autre question ou un nouveau choix.",
          "Cette appli n'a aucun champ pour écrire un nom ou d'autres données personnelles. Aucune inscription n'est nécessaire.\nSeuls restent sur cet appareil la langue choisie, le volume du son, le dernier onglet ouvert et le fait d'avoir lu ce guide. Rien n'est envoyé nulle part.",
          "En haut à droite, ⚙️ ouvre les « {settings} ». Vous y réglez le volume de « {bgm} » et de « {sound} ». Tout à gauche, le son est coupé.\nLa musique démarre quand vous touchez l'écran après avoir fermé ce guide.\nChangez la langue avec 🌐 en haut à droite.\nVous pouvez revoir ce guide à tout moment avec « {guide.again} » dans les « {settings} »."
        ]
      }
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
      reviewNote:"Traduzione dell'interfaccia assistita dall'IA. I contenuti sono riscritti secondo la cultura, non tradotti.",

      guide:{
        title:"Come si usa", step:"{n} / {m}", prev:"← Indietro", next:"Avanti →", start:"Inizia", again:"Rivedi come si usa",
        heads:[
          "Benvenuti in {appSubtitle}",
          "Per iniziare",
          "{tabTopic}",
          "{tabQuiz}",
          "{tabIce}",
          "Solo su questo dispositivo",
          "Suoni, lingua e questa guida"
        ],
        bodies:[
          "Uno strumento per chi lavora nell'assistenza e nella sanità, per trovare subito uno spunto di conversazione con le persone anziane.\nNon ci sono punteggi né vincitori. Più della risposta giusta conta la conversazione che segue.\nPuoi mostrare le schermate anche alle persone che assisti.\nScegli la lingua qui sopra. Potrai cambiarla dopo con 🌐 in alto a destra.",
          "In basso ci sono tre schede: «{tabTopic}», «{tabQuiz}» e «{tabIce}».\nPrima di salutare, apri «{tabTopic}» e trova un argomento del giorno.\nQuando la conversazione si anima, prova «{tabQuiz}». Al primo incontro o per sciogliere l'atmosfera, va bene «{tabIce}».",
          "Argomenti legati alla data di oggi.\n«{flowerHeading}» e «{gemHeading}» riportano anche il loro significato.\n«{onThisDayHeading}» e «{peopleHeading}» mostrano solo ciò che riguarda oggi. Nei giorni senza voci, queste schede non compaiono.",
          "Scegli una categoria in alto («{genreAll}», «{genres.price}» e altre) e fai la domanda.\nTocca una risposta per svelarla. Compaiono «{triviaHeading}» e lo «{staffCueHeading}».\nCon «{cueAskLabel}», «{cueExpandLabel}» e «{cueCareLabel}» fai riaffiorare i ricordi nella conversazione.\n«{nextQuiz}» passa alla domanda successiva.",
          "In alto passi da «{iceEitherOr}» a «{iceColor}».\nIn «{iceEitherOr}», tocca quello che preferisci e compare lo «{staffCueHeading}».\nIn «{iceColor}», scegli il colore più vicino al tuo umore: compaiono un «{colorResultHeading}» positivo e uno spunto.\nIn entrambi, «{again}» dà una nuova domanda o una nuova scelta.",
          "In questa app non c'è nessun campo per scrivere nomi o altri dati personali. Non serve registrarsi.\nSu questo dispositivo restano solo la lingua scelta, il volume dei suoni, l'ultima scheda aperta e se hai letto questa guida. Niente viene inviato da nessuna parte.",
          "In alto a destra, ⚙️ apre le «{settings}». Lì regoli il volume di «{bgm}» e «{sound}». Tutto a sinistra, il suono è spento.\nLa musica parte quando tocchi lo schermo dopo aver chiuso questa guida.\nCambia la lingua con 🌐 in alto a destra.\nPuoi rivedere questa guida quando vuoi con «{guide.again}» nelle «{settings}»."
        ]
      }
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
      reviewNote:"Traducción de la interfaz asistida por IA. El contenido está reescrito según la cultura, no traducido.",

      guide:{
        title:"Cómo se usa", step:"{n} / {m}", prev:"← Atrás", next:"Siguiente →", start:"Empezar", again:"Ver de nuevo cómo se usa",
        heads:[
          "Te damos la bienvenida a {appSubtitle}",
          "Para empezar",
          "{tabTopic}",
          "{tabQuiz}",
          "{tabIce}",
          "Solo en este dispositivo",
          "Sonido, idioma y esta guía"
        ],
        bodies:[
          "Una herramienta para el personal de cuidados y de salud, para encontrar enseguida un tema de conversación con personas mayores.\nNo hay puntos ni ganadores. Más que acertar, importa la conversación que viene después.\nPuedes mostrar las pantallas sin problema a las personas que atiendes.\nElige el idioma aquí arriba. Luego podrás cambiarlo con 🌐 arriba a la derecha.",
          "Abajo hay tres pestañas: «{tabTopic}», «{tabQuiz}» y «{tabIce}».\nAntes de saludar, abre «{tabTopic}» y busca un tema del día.\nCuando la conversación fluye, prueba «{tabQuiz}». En un primer encuentro o para relajar el ambiente, va bien «{tabIce}».",
          "Temas que coinciden con la fecha de hoy.\n«{flowerHeading}» y «{gemHeading}» incluyen su significado.\n«{onThisDayHeading}» y «{peopleHeading}» solo muestran lo que corresponde a hoy. Los días sin nada, esas tarjetas no aparecen.",
          "Elige una categoría arriba («{genreAll}», «{genres.price}» y otras) y haz la pregunta.\nToca una respuesta para descubrirla. Aparecen «{triviaHeading}» y la «{staffCueHeading}».\nCon «{cueAskLabel}», «{cueExpandLabel}» y «{cueCareLabel}», haz que los recuerdos entren en la conversación.\n«{nextQuiz}» pasa a la siguiente pregunta.",
          "Arriba cambias entre «{iceEitherOr}» y «{iceColor}».\nEn «{iceEitherOr}», toca lo que prefieres y aparece la «{staffCueHeading}».\nEn «{iceColor}», elige el color más cercano a tu ánimo: aparecen un «{colorResultHeading}» positivo y una pista.\nEn los dos, «{again}» trae otra pregunta u otra elección.",
          "Esta app no tiene ningún campo para escribir nombres u otros datos personales. No hace falta registrarse.\nEn este dispositivo solo quedan el idioma elegido, el volumen, la última pestaña abierta y si has leído esta guía. No se envía nada a ningún sitio.",
          "Arriba a la derecha, ⚙️ abre los «{settings}». Ahí ajustas el volumen de «{bgm}» y «{sound}». Del todo a la izquierda, se apaga.\nLa música empieza cuando tocas la pantalla después de cerrar esta guía.\nCambia el idioma con 🌐 arriba a la derecha.\nPuedes volver a ver esta guía cuando quieras con «{guide.again}» en los «{settings}»."
        ]
      }
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
      reviewNote:"AI 보조 UI 번역. 콘텐츠는 번역이 아니라 문화에 맞게 새로 작성되었습니다.",

      guide:{
        title:"사용법", step:"{n} / {m}", prev:"← 이전", next:"다음 →", start:"시작하기", again:"사용법 다시 보기",
        heads:[
          "{appSubtitle}에 오신 것을 환영합니다",
          "먼저 여기부터",
          "{tabTopic}",
          "{tabQuiz}",
          "{tabIce}",
          "이 기기 안에만",
          "소리·언어·이 안내"
        ],
        bodies:[
          "돌봄·의료 스태프가 어르신과의 대화 실마리를 손안에서 바로 찾기 위한 도구입니다.\n점수나 승패는 없습니다. 정답인지보다 그다음 이어지는 대화를 소중히 합니다.\n이용자분께 화면을 보여 드려도 괜찮게 만들었습니다.\n언어는 위에서 고를 수 있습니다. 나중에 오른쪽 위의 🌐 로도 바꿀 수 있습니다.",
          "화면 아래에 “{tabTopic}” “{tabQuiz}” “{tabIce}” 세 가지가 있습니다.\n인사나 말을 걸기 전에 “{tabTopic}”에서 오늘의 화제를 하나 찾아 두세요.\n이야기가 무르익을 것 같으면 “{tabQuiz}”, 처음 만났을 때나 분위기를 풀고 싶을 때는 “{tabIce}”가 잘 맞습니다.",
          "오늘 날짜에 맞춘 화제가 나옵니다.\n“{flowerHeading}”과 “{gemHeading}”은 꽃말·보석의 의미가 함께 나옵니다.\n“{onThisDayHeading}”과 “{peopleHeading}”은 오늘에 해당하는 것만 나옵니다. 없는 날에는 그 카드가 나오지 않습니다.",
          "위의 장르(“{genreAll}” “{genres.price}” 등)를 골라 질문합니다.\n선택지를 탭하면 정답이 나옵니다. “{triviaHeading}”와 “{staffCueHeading}”가 나옵니다.\n힌트의 “{cueAskLabel}” “{cueExpandLabel}” “{cueCareLabel}”를 보면서 추억 이야기를 넓혀 보세요.\n“{nextQuiz}”로 다음 문제로 넘어갑니다.",
          "위에서 “{iceEitherOr}”과 “{iceColor}”을 바꿉니다.\n“{iceEitherOr}”은 둘 중 좋아하는 쪽을 탭하면 “{staffCueHeading}”가 나옵니다.\n“{iceColor}”은 지금 기분에 가까운 색을 고르면 긍정적인 “{colorResultHeading}”와 힌트가 나옵니다.\n둘 다 “{again}”로 다른 질문을 보거나 다시 고를 수 있습니다.",
          "이 앱에는 이름 등을 적는 칸이 없습니다. 가입도 필요 없습니다.\n이 기기에 남는 것은 고른 언어, 소리 크기, 마지막으로 연 화면, 이 안내를 읽었는지뿐입니다. 어디에도 보내지 않습니다.",
          "오른쪽 위의 ⚙️ 로 “{settings}”이 열립니다. “{bgm}”과 “{sound}”의 크기를 바꿀 수 있습니다. 맨 왼쪽으로 하면 소리가 나지 않습니다.\n배경음악은 이 안내를 닫은 뒤 화면을 터치하면 흐르기 시작합니다.\n언어는 오른쪽 위의 🌐 로 바꿀 수 있습니다.\n이 안내는 “{settings}”의 “{guide.again}”로 언제든 다시 볼 수 있습니다."
        ]
      }
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
      reviewNote:"AI-assisterad översättning av gränssnittet. Innehållet är kulturellt nyskrivet, inte översatt.",

      guide:{
        title:"Instruktioner", step:"{n} / {m}", prev:"← Tillbaka", next:"Nästa →", start:"Börja", again:"Visa instruktionerna igen",
        heads:[
          "Välkommen till {appSubtitle}",
          "Börja här",
          "{tabTopic}",
          "{tabQuiz}",
          "{tabIce}",
          "Bara på den här enheten",
          "Ljud, språk och de här instruktionerna"
        ],
        bodies:[
          "Ett verktyg för vård- och omsorgspersonal att snabbt hitta något att prata om med äldre personer.\nDet finns inga poäng och inga vinnare. Viktigare än rätt svar är samtalet som följer.\nSkärmarna går bra att visa för de personer du stöttar.\nVälj språk här ovanför. Du kan ändra det senare med 🌐 uppe till höger.",
          "Längst ner finns tre flikar: ”{tabTopic}”, ”{tabQuiz}” och ”{tabIce}”.\nInnan du hälsar, öppna ”{tabTopic}” och hitta ett ämne för dagen.\nNär samtalet flyter, prova ”{tabQuiz}”. Vid ett första möte eller för att lätta upp stämningen passar ”{tabIce}”.",
          "Ämnen som passar dagens datum.\n”{flowerHeading}” och ”{gemHeading}” visas med sin betydelse.\n”{onThisDayHeading}” och ”{peopleHeading}” visar bara det som hör till i dag. På dagar utan något att visa syns inte de korten.",
          "Välj en kategori högst upp (”{genreAll}”, ”{genres.price}” med flera) och ställ frågan.\nTryck på ett svar för att visa rätt svar. Då visas ”{triviaHeading}” och ”{staffCueHeading}”.\nAnvänd ”{cueAskLabel}”, ”{cueExpandLabel}” och ”{cueCareLabel}” i tipset för att föra in minnen i samtalet.\n”{nextQuiz}” går till nästa fråga.",
          "Högst upp växlar du mellan ”{iceEitherOr}” och ”{iceColor}”.\nI ”{iceEitherOr}” trycker du på det du gillar mest, så visas ”{staffCueHeading}”.\nI ”{iceColor}” väljer du färgen som ligger närmast ditt humör. Då visas ett positivt ”{colorResultHeading}” och ett tips.\nI båda ger ”{again}” en ny fråga eller ett nytt val.",
          "Appen har inget fält för namn eller andra personuppgifter. Ingen registrering behövs.\nDet enda som sparas på den här enheten är valt språk, ljudnivåerna, den senast öppnade fliken och om du har läst de här instruktionerna. Inget skickas någonstans.",
          "Uppe till höger öppnar ⚙️ ”{settings}”. Där ställer du in nivån för ”{bgm}” och ”{sound}”. Längst till vänster är ljudet av.\nMusiken börjar när du rör vid skärmen efter att ha stängt de här instruktionerna.\nByt språk med 🌐 uppe till höger.\nDu kan se instruktionerna igen när som helst med ”{guide.again}” i ”{settings}”."
        ]
      }
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
      reviewNote:"AI-ondersteunde vertaling van de interface. De inhoud is cultureel opnieuw geschreven, niet vertaald.",

      guide:{
        title:"Uitleg", step:"{n} / {m}", prev:"← Terug", next:"Volgende →", start:"Beginnen", again:"Uitleg opnieuw bekijken",
        heads:[
          "Welkom bij {appSubtitle}",
          "Hier begint u",
          "{tabTopic}",
          "{tabQuiz}",
          "{tabIce}",
          "Alleen op dit apparaat",
          "Geluid, taal en deze uitleg"
        ],
        bodies:[
          "Een hulpmiddel voor zorg- en medisch personeel om snel een gespreksonderwerp te vinden met ouderen.\nEr zijn geen punten en geen winnaars. Belangrijker dan het goede antwoord is het gesprek dat volgt.\nU kunt de schermen gerust laten zien aan de mensen die u ondersteunt.\nKies hierboven een taal. Later kunt u die wijzigen met 🌐 rechtsboven.",
          "Onderaan staan drie tabbladen: “{tabTopic}”, “{tabQuiz}” en “{tabIce}”.\nOpen voordat u iemand begroet “{tabTopic}” en zoek een onderwerp voor vandaag.\nAls het gesprek op gang komt, probeer dan “{tabQuiz}”. Bij een eerste ontmoeting of om de sfeer luchtiger te maken, past “{tabIce}”.",
          "Onderwerpen die passen bij de datum van vandaag.\n“{flowerHeading}” en “{gemHeading}” tonen ook hun betekenis.\n“{onThisDayHeading}” en “{peopleHeading}” tonen alleen wat bij vandaag hoort. Op dagen zonder iets verschijnen die kaarten niet.",
          "Kies bovenaan een categorie (“{genreAll}”, “{genres.price}” en meer) en stel de vraag.\nTik op een antwoord om het goede antwoord te zien. Dan verschijnen “{triviaHeading}” en de “{staffCueHeading}”.\nGebruik “{cueAskLabel}”, “{cueExpandLabel}” en “{cueCareLabel}” in de tip om herinneringen in het gesprek te brengen.\nMet “{nextQuiz}” gaat u naar de volgende vraag.",
          "Bovenaan wisselt u tussen “{iceEitherOr}” en “{iceColor}”.\nBij “{iceEitherOr}” tikt u op wat u het liefst hebt. Dan verschijnt de “{staffCueHeading}”.\nBij “{iceColor}” kiest u de kleur die het dichtst bij uw stemming ligt. Dan verschijnen een positief “{colorResultHeading}” en een tip.\nIn beide geeft “{again}” een nieuwe vraag of een nieuwe keuze.",
          "Deze app heeft geen veld voor namen of andere persoonlijke gegevens. Registreren is niet nodig.\nOp dit apparaat blijven alleen de gekozen taal, het geluidsniveau, het laatst geopende tabblad en of u deze uitleg hebt gelezen. Er wordt niets verstuurd.",
          "Rechtsboven opent ⚙️ de “{settings}”. Daar stelt u het niveau van “{bgm}” en “{sound}” in. Helemaal naar links staat het geluid uit.\nDe muziek begint als u na het sluiten van deze uitleg het scherm aanraakt.\nWijzig de taal met 🌐 rechtsboven.\nU kunt deze uitleg altijd opnieuw bekijken met “{guide.again}” in de “{settings}”."
        ]
      }
    }
  }
};
