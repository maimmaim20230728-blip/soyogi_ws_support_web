/*
 * Soyogi (Édition seniors) — content.fr.js
 * Contenus de conversation en français (écrits pour la culture française).
 * ============================================================================
 * ★PAS une traduction de content.ja.js. Les souvenirs sont propres à chaque
 *   culture ; ce paquet est écrit autour de souvenirs qu'une personne âgée en
 *   France est susceptible de partager (le franc, la Coupe du monde 98, le
 *   muguet du 1er mai…). Schéma identique à ja (voir l'en-tête de content.ja.js ;
 *   astuce conversation : cue = {open, asks[], expand, care}).
 *   Les dates historiques sont vérifiées et sourcées. Vérifier aussi tout ajout.
 * ============================================================================
 */
window.SOYOGI_WS_CONTENT = window.SOYOGI_WS_CONTENT || {};
window.SOYOGI_WS_CONTENT["fr"] = {

  /* ---- Onglet 1 : fleur du jour (par mois ; significations positives) ---- */
  flowers: [
    { month:1,  name:"Perce-neige",      emoji:"🌼", photo:null, meaning:"Espoir & consolation", note:"Ose sortir de la neige au cœur de l'hiver." },
    { month:2,  name:"Violette",         emoji:"🌸", photo:null, meaning:"Modestie & fidélité", note:"Une petite fleur parfumée qui annonce le printemps." },
    { month:3,  name:"Jonquille",        emoji:"🌼", photo:null, meaning:"Renouveau", note:"Son jaune éclatant ouvre le printemps." },
    { month:4,  name:"Tulipe",           emoji:"🌷", photo:null, meaning:"Amour tendre", note:"Met de la couleur dans les jardins et les vases." },
    { month:5,  name:"Muguet",           emoji:"🌷", photo:null, meaning:"Retour du bonheur", note:"On s'en offre un brin le 1er mai, pour porter chance." },
    { month:6,  name:"Rose",             emoji:"🌹", photo:null, meaning:"Amour & reconnaissance", note:"La fleur classique de l'été." },
    { month:7,  name:"Lavande",          emoji:"🪻", photo:null, meaning:"Calme & sérénité", note:"Le parfum bleu-violet de l'été en Provence." },
    { month:8,  name:"Tournesol",        emoji:"🌻", photo:null, meaning:"Admiration & chaleur", note:"Tourne son visage vers le soleil d'été." },
    { month:9,  name:"Dahlia",           emoji:"🌸", photo:null, meaning:"Dignité & gratitude", note:"Généreux, il fleurit jusqu'aux premiers frimas." },
    { month:10, name:"Aster",            emoji:"🌸", photo:null, meaning:"Patience & élégance", note:"Une étoile qui prolonge l'été dans l'automne." },
    { month:11, name:"Camélia",          emoji:"🌺", photo:null, meaning:"Fidélité & admiration", note:"Fleurit quand presque tout se repose." },
    { month:12, name:"Étoile de Noël",   emoji:"🌺", photo:null, meaning:"Joie de Noël", note:"Le rouge et le vert des fêtes de fin d'année." }
  ],

  /* ---- Onglet 1 : ce jour-là (événements joyeux et vérifiés) ---- */
  onThisDay: [
    { month:3,  day:2,  year:1969, text:"Le Concorde effectue son tout premier vol, à Toulouse.", emoji:"✈️" },
    { month:6,  day:24, year:1982, text:"Jean-Loup Chrétien devient le premier Français dans l'espace.", emoji:"🚀" },
    { month:7,  day:12, year:1998, text:"La France devient championne du monde de football (3-0 contre le Brésil).", emoji:"⚽" },
    { month:9,  day:20, year:1946, text:"La toute première édition du Festival de Cannes s'ouvre.", emoji:"🎬" },
    { month:9,  day:27, year:1981, text:"Le TGV entre en service commercial entre Paris et Lyon.", emoji:"🚄" },
    { month:10, day:6,  year:1955, text:"La Citroën DS est dévoilée au Salon de l'automobile de Paris.", emoji:"🚗" }
  ],

  /* ---- Onglet 2 : quiz souvenirs (le saviez-vous + astuce conversation) ---- */
  quizzes: [
    {
      id:"fr-warmup-01", genre:"warmup", emoji:"🍉", photo:null,
      question:"Qu'est-ce qui est plus gros et plus lourd — une pastèque ou une pomme ?",
      choices:["Une pastèque","Une pomme"], answerIndex:0,
      trivia:"Une grosse pastèque peut peser plus de 10 kilos — un plaisir d'été depuis toujours.",
      cue:{
        open:"« C'était facile, n'est-ce pas ? » — avec le sourire, puis vers les souvenirs d'été.",
        asks:[
          "Mangiez-vous de la pastèque l'été ?",
          "Faisiez-vous des pique-niques ou des sorties ?",
          "Avec qui passiez-vous vos étés ?"
        ],
        expand:"L'important est de profiter du moment plutôt que de la bonne réponse. Partager un petit souvenir à vous (« chez nous, il y avait toujours… ») aide la personne à se confier.",
        care:"Une hésitation n'est pas grave — « les deux sont délicieuses ! » garde l'ambiance légère. Un sourire, c'est déjà réussi."
      }
    },
    {
      id:"fr-warmup-02", genre:"warmup", emoji:"🥖", photo:null,
      question:"Qu'est-ce qui est le plus long — une baguette ou un petit pain ?",
      choices:["Une baguette","Un petit pain"], answerIndex:0,
      trivia:"La baguette accompagne les repas français depuis des générations, achetée fraîche chaque jour.",
      cue:{
        open:"« La baguette, bien sûr ! » Puis on parle du pain et des repas d'autrefois.",
        asks:[
          "Alliez-vous chercher le pain à la boulangerie ?",
          "Quel plat de votre enfance préfériez-vous ?",
          "Qui cuisinait à la maison ?"
        ],
        expand:"La nourriture réveille des souvenirs puissants. Demandez les odeurs, le repas du dimanche — la scène reprend vie.",
        care:"Si manger est un sujet délicat pour la personne, restez sur le souvenir, pas sur la nourriture elle-même."
      }
    },
    {
      id:"fr-price-01", genre:"price", emoji:"💰", photo:null,
      question:"Avec quelle monnaie payait-on en France avant l'euro ?",
      choices:["Le franc","L'euro","Le mark"], answerIndex:0,
      trivia:"Jusqu'en 2002, on payait en francs. L'euro en pièces et billets est arrivé le 1er janvier 2002.",
      cue:{
        open:"« Ah, le bon vieux franc ! » — beaucoup s'en souviennent avec tendresse.",
        asks:[
          "Vous souvenez-vous bien des francs ?",
          "Que pouvait-on acheter pour quelques francs ?",
          "Comment économisiez-vous votre argent de poche, enfant ?"
        ],
        expand:"L'argent ouvre la porte à la vie d'autrefois — les prix, les premiers achats, les petits plaisirs. Suivez le fil du souvenir.",
        care:"Certains ont eu peu. Gardez un ton d'émerveillement partagé, jamais de comparaison."
      }
    },
    {
      id:"fr-appliance-01", genre:"appliance", emoji:"📺", photo:null,
      question:"Avant les télécommandes, comment changeait-on de chaîne à la télévision ?",
      choices:["En tournant le bouton de l'appareil","En tapant dans les mains","En sifflant devant l'écran"], answerIndex:0,
      trivia:"Quelqu'un devait se lever pour tourner le bouton — souvent le plus jeune de la famille !",
      cue:{
        open:"« Quelqu'un devait se lever pour tourner le bouton ! » — avec un sourire.",
        asks:[
          "Quelles émissions regardiez-vous en famille ?",
          "Qui réglait la télévision ?",
          "Vous souvenez-vous de la première télévision à la maison ?"
        ],
        expand:"La « première télé » est un souvenir joyeux et facile, souvent lié à toute la famille. Demandez qui était dans la pièce.",
        care:"Toutes les maisons n'ont pas eu la télé tôt. Demandez « vous souvenez-vous de son arrivée ? » plutôt que de le supposer."
      }
    },
    {
      id:"fr-snack-01", genre:"snack", emoji:"🍭", photo:null,
      question:"Comment appelle-t-on la gourmandise de fête foraine, faite de sucre filé tout rose ?",
      choices:["La barbe à papa","La guimauve","Le nougat"], answerIndex:0,
      trivia:"Toute légère et sucrée, la barbe à papa était le plaisir des fêtes foraines et des kermesses.",
      cue:{
        open:"« Cette gourmandise toute rose et sucrée ! »",
        asks:[
          "Alliez-vous à la fête foraine ?",
          "Quelle friandise préfériez-vous, enfant ?",
          "Y avait-il une épicerie ou une confiserie près de chez vous ?"
        ],
        expand:"Les gourmandises d'enfance sont des souvenirs gais et faciles à raconter. Les noms des lieux et des amis les rendent vivants.",
        care:"Pour certains, l'après-guerre a été rude. Ne présumez de rien et avancez au rythme de la personne."
      }
    },
    {
      id:"fr-tool-01", genre:"tool", emoji:"⌨️", photo:null,
      question:"Avant les ordinateurs, quelle machine de bureau frappait l'encre sur le papier ?",
      choices:["La machine à écrire","La caisse enregistreuse","La machine à coudre"], answerIndex:0,
      trivia:"Le cliquetis des touches et le petit tintement en fin de ligne rythmaient les bureaux.",
      cue:{
        open:"« Ce cliquetis des touches — et le petit tintement en fin de ligne ! »",
        asks:[
          "Quel métier avez-vous exercé ?",
          "Quels outils ou machines utilisiez-vous chaque jour ?",
          "En quoi étiez-vous particulièrement doué(e) dans votre travail ?"
        ],
        expand:"Parler du travail et du savoir-faire nourrit la fierté. « Vous deviez être rapide ! » fait toujours plaisir.",
        care:"Pour qui n'a pas travaillé à l'extérieur, demandez plutôt les savoir-faire utilisés à la maison."
      }
    },
    {
      id:"fr-fashion-01", genre:"fashion", emoji:"👖", photo:null,
      question:"Quel pantalon très évasé vers le bas était à la mode dans les années 1970 ?",
      choices:["Le pantalon pattes d'éléphant","Le pantacourt","La salopette"], answerIndex:0,
      trivia:"Le « pattes d'eph' » accompagnait la musique et l'air du temps de ces années-là.",
      cue:{
        open:"« Suiviez-vous la mode à l'époque ? » — avec un clin d'œil.",
        asks:[
          "Quels styles étaient à la mode quand vous étiez jeune ?",
          "Aviez-vous une tenue préférée ?",
          "Que portiez-vous pour sortir ou pour un rendez-vous ?"
        ],
        expand:"Les souvenirs de mode sont ceux de la jeunesse rayonnante — souvent liés aux amours. Les visages s'illuminent.",
        care:"Pour qui a perdu son conjoint, ces souvenirs peuvent être teintés de tristesse. Observez le visage et n'insistez pas."
      }
    },
    {
      id:"fr-hobby-01", genre:"hobby", emoji:"🔢", photo:null,
      question:"À quel jeu dessine-t-on des cases par terre pour sauter à cloche-pied ?",
      choices:["La marelle","Les billes","La corde à sauter"], answerIndex:0,
      trivia:"On dessinait la marelle à la craie et on poussait un palet de case en case — un grand classique des cours de récré.",
      cue:{
        open:"« Étiez-vous fort(e) à la marelle ? »",
        asks:[
          "À quoi jouiez-vous, enfant ?",
          "À quel jeu étiez-vous particulièrement doué(e) ?",
          "Où retrouviez-vous vos amis pour jouer ?"
        ],
        expand:"Les souvenirs de jeux vont de pair avec les amis et les lieux. Les jeux actifs raniment la sensation d'être jeune et plein d'énergie.",
        care:"Certains étaient plutôt solitaires. Gardez la question ouverte : « comment aimiez-vous passer votre temps ? »"
      }
    }
  ],

  /* ---- Onglet 3 : ceci ou cela ? (léger — une phrase suffit) ---- */
  eitherOr: [
    { id:"fr-eo-01", left:{label:"Café", emoji:"☕"}, right:{label:"Thé", emoji:"🍵"},
      staffCue:"« Êtes-vous plutôt café ou thé ? Comment le prenez-vous ? »" },
    { id:"fr-eo-02", left:{label:"Mer", emoji:"🌊"}, right:{label:"Montagne", emoji:"⛰️"},
      staffCue:"« Où partiez-vous en vacances — à la mer ou à la montagne ? »" },
    { id:"fr-eo-03", left:{label:"Chien", emoji:"🐕"}, right:{label:"Chat", emoji:"🐈"},
      staffCue:"« Avez-vous eu un animal ? Comment s'appelait-il ? »" },
    { id:"fr-eo-04", left:{label:"Sucré", emoji:"🍰"}, right:{label:"Salé", emoji:"🥨"},
      staffCue:"« Plutôt bec sucré ou salé ? Quelle gourmandise ne pouviez-vous pas refuser ? »" },
    { id:"fr-eo-05", left:{label:"Baguette", emoji:"🥖"}, right:{label:"Croissant", emoji:"🥐"},
      staffCue:"« Baguette ou croissant au petit-déjeuner ? Où achetiez-vous votre pain ? »" }
  ],

  /* ---- Onglet 3 : couleur du moment (toujours positif) ---- */
  colorTest: {
    prompt:null,
    options:[
      { key:"red",    label:"Rouge", emoji:"🔴", color:"#e0655e",
        result:"Vous êtes chaleureux(se) et plein(e) d'énergie — comme un soleil qui réconforte les autres.",
        cue:"« À quoi vous êtes-vous consacré(e) de tout cœur dans votre jeunesse ? »" },
      { key:"blue",   label:"Bleu",  emoji:"🔵", color:"#4a86c9",
        result:"Vous êtes calme et bienveillant(e) — quelqu'un à qui l'on fait confiance et sur qui l'on s'appuie.",
        cue:"« Étiez-vous souvent la personne vers qui on venait chercher conseil ? »" },
      { key:"yellow", label:"Jaune", emoji:"🟡", color:"#eab52f",
        result:"Vous êtes gai(e) et curieux(se) — vous mettez de la vie dans chaque pièce.",
        cue:"« Avez-vous un souvenir joyeux qui vous fait encore sourire ? »" },
      { key:"green",  label:"Vert",  emoji:"🟢", color:"#4a9d6f",
        result:"Vous êtes doux(ce) et posé(e) — une présence apaisante qui fait du bien.",
        cue:"« Y a-t-il un lieu ou un paysage où vous vous sentez en paix ? »" }
    ]
  }
};
