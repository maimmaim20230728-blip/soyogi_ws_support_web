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
    },
    {
      id:"fr-warmup-03", genre:"warmup", emoji:"🍋", photo:null,
      question:"Qu'est-ce qui est plus sucré — le sucre ou un citron ?",
      choices:["Le sucre","Le citron"], answerIndex:0,
      trivia:"Le sucre était précieux autrefois ; un gâteau, c'était un vrai plaisir des jours de fête.",
      cue:{
        open:"« Le sucre, bien sûr ! » — avec un sourire, puis vers les douceurs d'autrefois.",
        asks:["Faisait-on souvent des gâteaux chez vous ?","Qui pâtissait à la maison ?","Quel gâteau préfériez-vous ?"],
        expand:"La pâtisserie et les fêtes réveillent des souvenirs tendres. Demander les parfums — vanille, fleur d'oranger — fait revivre la scène.",
        care:"Même si les douceurs étaient rares, saluez cela avec chaleur : « c'était une autre époque »."
      }
    },
    {
      id:"fr-price-02", genre:"price", emoji:"🎬", photo:null,
      question:"Combien coûtait environ une place de cinéma dans les années 1960 ?",
      choices:["Environ 3 francs","Environ 30 francs","Environ 300 francs"], answerIndex:0,
      trivia:"Une sortie au cinéma était un plaisir accessible, pour quelques francs.",
      cue:{
        open:"« Une place pour quelques francs — quelle belle époque, n'est-ce pas ? »",
        asks:["Alliez-vous souvent au cinéma ?","Quels films ou quelles vedettes aimiez-vous ?","Avec qui y alliez-vous ?"],
        expand:"Ce n'est pas le prix exact qui compte, mais le souvenir. Les actualités, l'entracte, le premier rendez-vous — tout cela fait parler.",
        care:"En cas d'hésitation, un exemple de votre propre vie aide à faire renaître l'époque ensemble."
      }
    },
    {
      id:"fr-appliance-02", genre:"appliance", emoji:"☎️", photo:null,
      question:"Comment composait-on un numéro sur les anciens téléphones ?",
      choices:["Avec un cadran rotatif","Avec un écran tactile"], answerIndex:0,
      trivia:"On tournait chaque chiffre sur le cadran, avec un petit ronronnement caractéristique.",
      cue:{
        open:"« Le cadran — c'était long à faire tourner, n'est-ce pas ? »",
        asks:["Aviez-vous le téléphone à la maison de bonne heure ?","Qui appeliez-vous le plus volontiers ?","Vous souvenez-vous de votre ancien numéro ?"],
        expand:"Le téléphone relie à la famille et aux amis. Le ronronnement du cadran ramène l'époque.",
        care:"Beaucoup n'ont eu le téléphone que tard — c'est normal et cela fait un bon sujet."
      }
    },
    {
      id:"fr-snack-02", genre:"snack", emoji:"🍬", photo:null,
      question:"Quelle friandise se léchait au fond d'un petit coquillage en plastique ?",
      choices:["Le roudoudou","Le nougat"], answerIndex:0,
      trivia:"Le roudoudou, ce bonbon dur au fond d'une coquille, faisait le bonheur des enfants pour quelques centimes.",
      cue:{
        open:"« Le roudoudou — on le léchait jusqu'au bout ! » Avec un sourire, vers les bonbons d'antan.",
        asks:["Quels bonbons trouvait-on à l'épicerie du coin ?","Aviez-vous de l'argent de poche pour les friandises ?","Quelle était votre gourmandise préférée ?"],
        expand:"L'épicerie du quartier et quelques sous de poche sont de jolis points d'ancrage.",
        care:"Si les douceurs étaient rares, honorez cette époque frugale avec bienveillance, sans jugement."
      }
    },
    {
      id:"fr-tool-02", genre:"tool", emoji:"🧺", photo:null,
      question:"Avec quoi lavait-on le linge à la main, avant les machines à laver ?",
      choices:["Avec une planche à laver","Avec un aspirateur"], answerIndex:0,
      trivia:"On frottait le linge sur la planche, souvent au lavoir — un vrai travail, le jour de lessive.",
      cue:{
        open:"« La planche à laver — c'était bien fatigant, n'est-ce pas ? »",
        asks:["Le jour de lessive était-il un jour fixe chez vous ?","Qui s'occupait du linge ?","Où faisiez-vous sécher le linge ?"],
        expand:"Les tâches d'autrefois montrent beaucoup de savoir-faire. Un « c'était un travail difficile ! » honore la peine.",
        care:"La reconnaissance fait du bien : « vous avez tout tenu à bout de bras » rend fier et ouvre la parole."
      }
    },
    {
      id:"fr-fashion-02", genre:"fashion", emoji:"👗", photo:null,
      question:"Quelle silhouette à taille fine et jupe ample, lancée par Dior, a marqué l'après-guerre ?",
      choices:["Le New Look","Le pantalon pattes d'éléphant"], answerIndex:0,
      trivia:"Le « New Look » de Christian Dior, présenté en 1947, a redonné de l'élégance et de l'ampleur aux robes.",
      cue:{
        open:"« Le New Look — ces jupes qui tournoyaient à la danse ! »",
        asks:["Aimiez-vous aller danser ?","Quelle mode aimiez-vous, jeune ?","Aviez-vous une robe préférée ou un beau costume ?"],
        expand:"La mode et la danse réveillent la jeunesse. Le premier bal, le premier amour — de belles portes à ouvrir.",
        care:"Chaque souvenir compte — même un sourire sans mots est un joli résultat."
      }
    },
    {
      id:"fr-hobby-02", genre:"hobby", emoji:"🔵", photo:null,
      question:"Comment appelle-t-on les petites boules de verre colorées avec lesquelles jouaient les enfants par terre ?",
      choices:["Les billes","Les boutons"], answerIndex:0,
      trivia:"On jouait aux billes par terre ; les plus belles se gardaient et s'échangeaient comme des trésors.",
      cue:{
        open:"« Les billes — on gardait les plus belles comme un trésor, n'est-ce pas ? »",
        asks:["Collectionniez-vous ou échangiez-vous des billes ?","À quels jeux jouiez-vous dehors ?","Avec qui aimiez-vous jouer ?"],
        expand:"Collectionner et échanger réveillent les souvenirs d'amitié et de voisinage.",
        care:"Si l'enfance a été difficile, restez tout en douceur sur les beaux moments."
      }
    },
    {
      id:"fr-appliance-03", genre:"appliance", emoji:"🎵", photo:null,
      question:"Comment écoutait-on sa musique préférée à la maison autrefois ?",
      choices:["Sur un disque vinyle","Sur un smartphone"], answerIndex:0,
      trivia:"Le disque tournait sur l'électrophone ; on posait délicatement le saphir sur le sillon.",
      cue:{
        open:"« Poser le disque et l'aiguille — un vrai petit rituel, n'est-ce pas ? »",
        asks:["Quelle musique ou quels chanteurs aimiez-vous ?","Aviez-vous un tourne-disque à la maison ?","Sur quelle musique dansiez-vous ?"],
        expand:"La musique est un ancrage puissant. Un titre de chanson suffit souvent à faire venir les histoires.",
        care:"Si une chanson émeut, c'est précieux — laissez toute sa place à l'émotion."
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
      staffCue:"« Baguette ou croissant au petit-déjeuner ? Où achetiez-vous votre pain ? »" },
    { id:"fr-eo-06", left:{label:"Radio", emoji:"📻"}, right:{label:"Télévision", emoji:"📺"},
      staffCue:"« Radio ou télévision — qu'écoutait-on le plus chez vous ? »" },
    { id:"fr-eo-07", left:{label:"Ville", emoji:"🏙️"}, right:{label:"Campagne", emoji:"🌾"},
      staffCue:"« Avez-vous plutôt grandi en ville ou à la campagne ? »" },
    { id:"fr-eo-08", left:{label:"Printemps", emoji:"🌸"}, right:{label:"Automne", emoji:"🍂"},
      staffCue:"« Printemps ou automne — quelle saison préférez-vous ? »" },
    { id:"fr-eo-09", left:{label:"Danser", emoji:"💃"}, right:{label:"Chanter", emoji:"🎤"},
      staffCue:"« Aimiez-vous plutôt danser ou chanter ? »" },
    { id:"fr-eo-10", left:{label:"Cinéma", emoji:"🎬"}, right:{label:"Lecture", emoji:"📖"},
      staffCue:"« Une séance de cinéma ou un bon livre — que préfériez-vous ? »" },
    { id:"fr-eo-11", left:{label:"Vélo", emoji:"🚲"}, right:{label:"À pied", emoji:"🚶"},
      staffCue:"« Vous déplaciez-vous beaucoup à vélo ou plutôt à pied ? »" },
    { id:"fr-eo-12", left:{label:"Noël", emoji:"🎄"}, right:{label:"Pâques", emoji:"🐰"},
      staffCue:"« Noël ou Pâques — quelle fête aimiez-vous le plus, enfant ? »" },
    { id:"fr-eo-13", left:{label:"Soupe", emoji:"🍲"}, right:{label:"Rôti", emoji:"🍖"},
      staffCue:"« Une bonne soupe ou un rôti du dimanche ? »" },
    { id:"fr-eo-14", left:{label:"Fromage", emoji:"🧀"}, right:{label:"Dessert", emoji:"🍮"},
      staffCue:"« En fin de repas, plutôt fromage ou dessert ? »" },
    { id:"fr-eo-15", left:{label:"Lève-tôt", emoji:"🌅"}, right:{label:"Couche-tard", emoji:"🌙"},
      staffCue:"« Étiez-vous plutôt lève-tôt ou couche-tard ? »" }
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
        cue:"« Y a-t-il un lieu ou un paysage où vous vous sentez en paix ? »" },
      { key:"orange", label:"Orange", emoji:"🟠", color:"#e8934a",
        result:"Vous êtes chaleureux(se) et sociable — quelqu'un qui rassemble les gens autour de lui.",
        cue:"« Vos amis et vos voisins ont-ils toujours beaucoup compté pour vous ? »" },
      { key:"purple", label:"Violet", emoji:"🟣", color:"#8a6bd0",
        result:"Vous êtes raffiné(e) et sensible — d'une force tranquille, avec une riche vie intérieure.",
        cue:"« Y a-t-il une musique ou un art qui vous a toujours touché(e) ? »" }
    ]
  },

  /* ---- Personnalités célèbres (anniversaire 🎂 / date de décès 🕯️). Dates vérifiées dans le pack ja. ---- */
  people: [
    { month:11, day:14, type:"birth", name:"Claude Monet",          note:"Peintre français. Né en 1840. Maître de l'impressionnisme, célèbre pour ses « Nymphéas »." },
    { month:12, day:5,  type:"death", name:"Claude Monet",          note:"Peintre. Mort en 1926. Son tableau « Impression, soleil levant » a donné son nom à l'impressionnisme." },
    { month:2,  day:25, type:"birth", name:"Auguste Renoir",        note:"Peintre français. Né en 1841. Maître de l'impressionnisme au style plein de lumière et de bonheur." },
    { month:12, day:3,  type:"death", name:"Auguste Renoir",        note:"Peintre. Mort en 1919. Il a peint jusqu'au bout malgré les rhumatismes." },
    { month:1,  day:19, type:"birth", name:"Paul Cézanne",          note:"Peintre français. Né en 1839. Surnommé le « père de la peinture moderne »." },
    { month:10, day:23, type:"death", name:"Paul Cézanne",          note:"Peintre. Mort en 1906. Ses pommes et ses montagnes ont marqué l'art du XXe siècle." },
    { month:7,  day:19, type:"birth", name:"Edgar Degas",           note:"Peintre français. Né en 1834. Connu pour ses danseuses de ballet." },
    { month:9,  day:27, type:"death", name:"Edgar Degas",           note:"Peintre. Mort en 1917. Il saisissait l'instant avec un art rare." },
    { month:10, day:4,  type:"birth", name:"Jean-François Millet",  note:"Peintre français. Né en 1814. Célèbre pour « Des glaneuses » et « L'Angélus »." },
    { month:1,  day:20, type:"death", name:"Jean-François Millet",  note:"Peintre. Mort en 1875. Figure de l'école de Barbizon, il a peint la vie paysanne." },
    { month:6,  day:7,  type:"birth", name:"Paul Gauguin",          note:"Peintre français. Né en 1848. Célèbre pour ses scènes de Tahiti, figure du postimpressionnisme." },
    { month:5,  day:8,  type:"death", name:"Paul Gauguin",          note:"Peintre. Mort en 1903. Connu aussi pour son amitié avec Van Gogh." },
    { month:12, day:31, type:"birth", name:"Henri Matisse",         note:"Peintre français. Né en 1869. Le « magicien de la couleur », chef de file du fauvisme." },
    { month:11, day:3,  type:"death", name:"Henri Matisse",         note:"Peintre. Mort en 1954. Dans ses dernières années, il a innové avec ses gouaches découpées." },
    { month:2,  day:26, type:"birth", name:"Victor Hugo",           note:"Écrivain français. Né en 1802. Auteur des « Misérables »." },
    { month:5,  day:22, type:"death", name:"Victor Hugo",           note:"Écrivain. Mort en 1885. Figure du romantisme, il eut des funérailles nationales." },
    { month:12, day:27, type:"birth", name:"Louis Pasteur",         note:"Bactériologiste français. Né en 1822. Inventeur des vaccins et de la pasteurisation." },
    { month:9,  day:28, type:"death", name:"Louis Pasteur",         note:"Bactériologiste. Mort en 1895. Considéré comme le père de la microbiologie moderne." },
    { month:11, day:7,  type:"birth", name:"Marie Curie",           note:"Physicienne et chimiste. Née en 1867. La première femme à recevoir un prix Nobel." },
    { month:7,  day:4,  type:"death", name:"Marie Curie",           note:"Scientifique. Morte en 1934. Pionnière de l'étude de la radioactivité." },
    { month:8,  day:15, type:"birth", name:"Napoléon Bonaparte",    note:"Empereur des Français. Né en 1769. Il a dirigé la France révolutionnaire et dominé l'Europe." },
    { month:5,  day:5,  type:"death", name:"Napoléon Bonaparte",    note:"Empereur. Mort en 1821 en exil sur une île. « Impossible n'est pas français », disait-il." },
    { month:6,  day:29, type:"birth", name:"Saint-Exupéry",         note:"Écrivain et aviateur français. Né en 1900. Auteur du « Petit Prince »." },
    { month:7,  day:31, type:"death", name:"Saint-Exupéry",         note:"Écrivain et aviateur. Disparu en 1944 lors d'un vol de reconnaissance." },
    { month:10, day:17, type:"death", name:"Frédéric Chopin",       note:"Compositeur polonais. Né en 1810, mort en 1849 à Paris. On l'appelle le « poète du piano »." },
    { month:3,  day:26, type:"death", name:"Ludwig van Beethoven",  note:"Compositeur allemand. Né vers 1770, mort en 1827. Maître connu pour sa 9e symphonie." },
    { month:1,  day:27, type:"birth", name:"Wolfgang Amadeus Mozart", note:"Compositeur autrichien. Né en 1756. Un génie musical aux innombrables chefs-d'œuvre." },
    { month:12, day:5,  type:"death", name:"Wolfgang Amadeus Mozart", note:"Compositeur. Mort en 1791. L'un des plus grands du classicisme viennois." },
    { month:7,  day:28, type:"death", name:"Jean-Sébastien Bach",   note:"Compositeur allemand. Né en 1685, mort en 1750. Le « père de la musique », géant du baroque." },
    { month:3,  day:14, type:"birth", name:"Albert Einstein",       note:"Physicien né en Allemagne. Né en 1879. Sa théorie de la relativité a changé le monde." },
    { month:4,  day:18, type:"death", name:"Albert Einstein",       note:"Physicien. Mort en 1955. L'un des plus grands savants du XXe siècle." },
    { month:5,  day:12, type:"birth", name:"Florence Nightingale",  note:"Infirmière britannique. Née en 1820. Fondatrice des soins modernes ; le 12 mai est la Journée des infirmières." },
    { month:8,  day:13, type:"death", name:"Florence Nightingale",  note:"Infirmière. Morte en 1910. Surnommée « la dame à la lampe »." },
    { month:2,  day:12, type:"birth", name:"Charles Darwin",        note:"Naturaliste britannique. Né en 1809. Auteur de « L'Origine des espèces » et de la théorie de l'évolution." },
    { month:4,  day:19, type:"death", name:"Charles Darwin",        note:"Naturaliste. Mort en 1882. Il a profondément marqué la biologie." },
    { month:2,  day:11, type:"birth", name:"Thomas Edison",         note:"Inventeur américain. Né en 1847. Connu pour l'ampoule et le phonographe." },
    { month:10, day:18, type:"death", name:"Thomas Edison",         note:"Inventeur. Mort en 1931. On l'appelait le « magicien de Menlo Park »." },
    { month:8,  day:6,  type:"birth", name:"Alexander Fleming",     note:"Bactériologiste britannique. Né en 1881. Il a découvert le premier antibiotique, la pénicilline." },
    { month:3,  day:11, type:"death", name:"Alexander Fleming",     note:"Bactériologiste. Mort en 1955. La pénicilline a sauvé d'innombrables vies ; prix Nobel." },
    { month:3,  day:30, type:"birth", name:"Vincent van Gogh",      note:"Peintre néerlandais. Né en 1853. Célèbre pour « Les Tournesols » et « La Nuit étoilée »." },
    { month:7,  day:29, type:"death", name:"Vincent van Gogh",      note:"Peintre. Mort en 1890. Maître du postimpressionnisme reconnu après sa mort." },
    { month:10, day:25, type:"birth", name:"Pablo Picasso",         note:"Peintre espagnol. Né en 1881. Cofondateur du cubisme et géant de l'art moderne." },
    { month:4,  day:8,  type:"death", name:"Pablo Picasso",         note:"Peintre. Mort en 1973. Connu notamment pour « Guernica »." },
    { month:4,  day:16, type:"birth", name:"Charlie Chaplin",       note:"Acteur et réalisateur anglais. Né en 1889. Ses comédies muettes ont fait rire le monde entier." },
    { month:12, day:25, type:"death", name:"Charlie Chaplin",       note:"Le « Charlot ». Mort en 1977. Aimé pour des films comme « Les Temps modernes »." },
    { month:6,  day:1,  type:"birth", name:"Marilyn Monroe",        note:"Actrice américaine. Née en 1926. Une icône du cinéma des années 1950." },
    { month:8,  day:4,  type:"death", name:"Marilyn Monroe",        note:"Actrice. Morte en 1962. L'une des stars les plus durables d'Hollywood." },
    { month:1,  day:8,  type:"birth", name:"Elvis Presley",         note:"Chanteur américain. Né en 1935. Surnommé le « roi du rock'n'roll »." },
    { month:8,  day:16, type:"death", name:"Elvis Presley",         note:"Chanteur. Mort en 1977. Il a fait connaître le rock'n'roll au monde entier." },
    { month:4,  day:2,  type:"birth", name:"Hans Christian Andersen", note:"Conteur danois. Né en 1805. Célèbre pour « La Petite Sirène » et « La Petite Fille aux allumettes »." },
    { month:8,  day:4,  type:"death", name:"Hans Christian Andersen", note:"Conteur. Mort en 1875. Ses contes sont aimés dans le monde entier." },
    { month:6,  day:12, type:"birth", name:"Anne Frank",            note:"Auteure du « Journal d'Anne Frank ». Née en 1929. Une jeune fille qui écrivait, cachée des nazis." },
    /* ---- Transfert de personnalités mondiales (données indépendantes de la langue) — Lot 1 ---- */
    { month:7,  day:6,  type:"birth", name:"Frida Kahlo",           note:"Peintre mexicaine. Née en 1907. Célèbre dans le monde entier pour ses autoportraits aux couleurs vives." },
    { month:7,  day:6,  type:"birth", name:"Sylvester Stallone",    note:"Acteur américain. Né en 1946. Connu pour les films « Rocky » et « Rambo »." },
    { month:7,  day:6,  type:"death", name:"Louis Armstrong",       note:"Musicien de jazz américain. Mort en 1971. Aimé pour « What a Wonderful World »." },
    { month:7,  day:6,  type:"death", name:"Odilon Redon",          note:"Peintre français. Mort en 1916. Connu pour son style onirique." },
    { month:5,  day:4,  type:"birth", name:"Audrey Hepburn",        note:"Actrice. Née en 1929. Connue pour « Vacances romaines » ; elle s'est aussi consacrée à des œuvres humanitaires." },
    { month:1,  day:20, type:"death", name:"Audrey Hepburn",        note:"Actrice. Morte en 1993. Aimée pour des films comme « Vacances romaines »." },
    { month:10, day:9,  type:"birth", name:"John Lennon",           note:"Musicien britannique. Né en 1940. Connu comme membre des Beatles." },
    { month:8,  day:26, type:"birth", name:"Mère Teresa",           note:"Religieuse catholique. Née en 1910. Elle a aidé les pauvres et reçu le prix Nobel de la paix." },
    { month:9,  day:5,  type:"death", name:"Mère Teresa",           note:"Religieuse. Morte en 1997. Vénérée comme « la mère des pauvres »." },
    { month:10, day:2,  type:"birth", name:"Mahatma Gandhi",        note:"Guide de l'indépendance de l'Inde. Né en 1869. Il a mené la résistance non-violente." },
    { month:6,  day:27, type:"birth", name:"Helen Keller",          note:"Militante américaine. Née en 1880. Sourde et aveugle, elle a inspiré le monde entier." },
    { month:6,  day:1,  type:"death", name:"Helen Keller",          note:"Militante sociale. Morte en 1968. Elle a agi par-delà son handicap." },
    { month:2,  day:12, type:"birth", name:"Abraham Lincoln",       note:"16e président des États-Unis. Né en 1809. Il a fait avancer l'abolition de l'esclavage." },
    { month:8,  day:29, type:"birth", name:"Michael Jackson",       note:"Chanteur américain. Né en 1958. On l'appelait le « roi de la pop »." },
    { month:12, day:5,  type:"birth", name:"Walt Disney",           note:"Créateur de dessins animés et entrepreneur américain. Né en 1901. Créateur de Mickey Mouse." },
    { month:12, day:15, type:"death", name:"Walt Disney",           note:"Créateur de dessins animés. Mort en 1966. Fondateur de Disneyland." },
    { month:7,  day:21, type:"birth", name:"Ernest Hemingway",      note:"Romancier américain. Né en 1899. Prix Nobel, connu pour « Le Vieil Homme et la Mer »." },
    { month:5,  day:29, type:"birth", name:"John F. Kennedy",       note:"35e président des États-Unis. Né en 1917. Devenu président jeune, il a séduit les foules." },
    { month:11, day:30, type:"birth", name:"Winston Churchill",     note:"Homme d'État britannique. Né en 1874. Premier ministre durant la Seconde Guerre mondiale, célèbre pour ses discours." },
    { month:1,  day:24, type:"death", name:"Winston Churchill",     note:"Premier ministre britannique. Mort en 1965. Il a aussi reçu le prix Nobel de littérature." },
    { month:5,  day:7,  type:"birth", name:"Piotr Tchaïkovski",     note:"Compositeur russe. Né en 1840. Connu pour « Le Lac des cygnes » et « Casse-Noisette »." },
    { month:11, day:6,  type:"death", name:"Piotr Tchaïkovski",     note:"Compositeur. Mort en 1893. Il a laissé de superbes musiques de ballet." },
    { month:2,  day:6,  type:"birth", name:"Babe Ruth",             note:"Joueur de baseball américain. Né en 1895. Un frappeur de légende." },
    { month:8,  day:16, type:"death", name:"Babe Ruth",             note:"Joueur de baseball. Mort en 1948. Une icône du baseball américain." },
    { month:1,  day:31, type:"birth", name:"Franz Schubert",        note:"Compositeur autrichien. Né en 1797. « Roi du lied », connu pour « Le Roi des aulnes »." },
    { month:11, day:19, type:"death", name:"Franz Schubert",        note:"Compositeur. Mort en 1828 à seulement 31 ans. Il a laissé la « Symphonie inachevée »." },
    { month:5,  day:7,  type:"birth", name:"Johannes Brahms",       note:"Compositeur allemand. Né en 1833. L'un des « trois B » avec Bach et Beethoven." },
    { month:4,  day:3,  type:"death", name:"Johannes Brahms",       note:"Compositeur. Mort en 1897. Aimé pour sa « Berceuse »." },
    { month:5,  day:22, type:"birth", name:"Richard Wagner",        note:"Compositeur allemand. Né en 1813. Célèbre pour ses grands drames lyriques." },
    { month:2,  day:13, type:"death", name:"Richard Wagner",        note:"Compositeur. Mort en 1883. Il a laissé « L'Anneau du Nibelung »." },
    { month:10, day:10, type:"birth", name:"Giuseppe Verdi",        note:"Compositeur italien. Né en 1813. Connu pour des opéras comme « La Traviata » et « Aïda »." },
    { month:1,  day:27, type:"death", name:"Giuseppe Verdi",        note:"Compositeur. Mort en 1901. Un maître de l'opéra italien." },
    { month:11, day:30, type:"birth", name:"Mark Twain",            note:"Écrivain américain. Né en 1835. Connu pour « Les Aventures de Tom Sawyer »." },
    { month:4,  day:21, type:"death", name:"Mark Twain",            note:"Écrivain. Mort en 1910. Ses œuvres pleines d'humour et d'ironie sont toujours appréciées." },
    { month:5,  day:11, type:"birth", name:"Salvador Dalí",         note:"Peintre espagnol. Né en 1904. Connu pour ses montres molles — un maître du surréalisme." },
    { month:1,  day:23, type:"death", name:"Salvador Dalí",         note:"Peintre. Mort en 1989. Célèbre aussi pour sa moustache singulière." },
    { month:2,  day:8,  type:"birth", name:"James Dean",            note:"Acteur américain. Né en 1931. Connu pour « À l'est d'Éden » — une idole de la jeunesse." },
    { month:12, day:22, type:"birth", name:"Giacomo Puccini",       note:"Compositeur italien. Né en 1858. Connu pour des opéras comme « Madame Butterfly » et « Tosca »." },
    { month:11, day:29, type:"death", name:"Giacomo Puccini",       note:"Compositeur. Mort en 1924. Une grande figure de l'opéra italien." },
    { month:9,  day:8,  type:"birth", name:"Antonín Dvořák",        note:"Compositeur tchèque. Né en 1841. Connu pour la symphonie « Du Nouveau Monde »." },
    { month:5,  day:1,  type:"death", name:"Antonín Dvořák",        note:"Compositeur. Mort en 1904. Il a tissé les mélodies de son pays dans ses œuvres." },
    { month:3,  day:4,  type:"birth", name:"Antonio Vivaldi",       note:"Compositeur italien. Né en 1678. Connu pour les concertos « Les Quatre Saisons »." },
    { month:7,  day:28, type:"death", name:"Antonio Vivaldi",       note:"Compositeur. Mort en 1741. L'un des grands maîtres du baroque." },
    { month:8,  day:28, type:"birth", name:"Goethe",                note:"Grand écrivain allemand. Né en 1749. Connu pour « Faust » et « Les Souffrances du jeune Werther »." },
    { month:3,  day:22, type:"death", name:"Goethe",                note:"Écrivain. Mort en 1832. Un poète et auteur emblématique de l'Allemagne." },
    { month:10, day:21, type:"birth", name:"Alfred Nobel",          note:"Inventeur suédois. Né en 1833. Il a inventé la dynamite et fondé les prix Nobel." },
    { month:12, day:10, type:"death", name:"Alfred Nobel",          note:"Inventeur. Mort en 1896. Le 10 décembre reste le jour de la remise des prix Nobel." },
    { month:3,  day:3,  type:"birth", name:"Alexander Graham Bell", note:"Inventeur. Né en 1847. Il a inventé le premier téléphone pratique." },
    { month:8,  day:2,  type:"death", name:"Alexander Graham Bell", note:"Inventeur. Mort en 1922. Avec le téléphone, il a changé le monde." },
    { month:8,  day:29, type:"birth", name:"Ingrid Bergman",        note:"Actrice suédoise. Née en 1915. Connue pour « Casablanca »." },
    { month:8,  day:29, type:"death", name:"Ingrid Bergman",        note:"Actrice. Morte en 1982, le jour même de son anniversaire, le 29 août." },
    { month:11, day:12, type:"birth", name:"Grace Kelly",           note:"Actrice américaine. Née en 1929. D'actrice hollywoodienne, elle devint princesse de Monaco." },
    { month:5,  day:26, type:"birth", name:"John Wayne",            note:"Acteur américain. Né en 1907. Une grande star du western." },
    { month:6,  day:11, type:"death", name:"John Wayne",            note:"Acteur. Mort en 1979. Surnommé affectueusement « Duke »." },
    { month:12, day:12, type:"birth", name:"Frank Sinatra",         note:"Chanteur et acteur américain. Né en 1915. Connu pour « My Way »." },
    { month:5,  day:14, type:"death", name:"Frank Sinatra",         note:"Chanteur et acteur. Mort en 1998. Un artiste emblématique du XXe siècle." },
    { month:11, day:20, type:"death", name:"Léon Tolstoï",          note:"Écrivain russe. Mort en 1910. Connu pour « Guerre et Paix » et « Anna Karénine »." },
    { month:2,  day:9,  type:"death", name:"Fiodor Dostoïevski",    note:"Écrivain russe. Mort en 1881. Connu pour « Crime et Châtiment » et « Les Frères Karamazov »." },
    { month:7,  day:14, type:"birth", name:"Gustav Klimt",          note:"Peintre autrichien. Né en 1862. Connu pour « Le Baiser », rehaussé de feuilles d'or." },
    { month:2,  day:6,  type:"death", name:"Gustav Klimt",          note:"Peintre. Mort en 1918. Il a mené la Sécession viennoise." },
    { month:12, day:12, type:"birth", name:"Edvard Munch",          note:"Peintre norvégien. Né en 1863. Mondialement connu comme auteur du « Cri »." },
    { month:1,  day:23, type:"death", name:"Edvard Munch",          note:"Peintre. Mort en 1944. Un expressionniste qui a peint l'angoisse et la solitude." },
    { month:2,  day:7,  type:"birth", name:"Charles Dickens",       note:"Écrivain anglais. Né en 1812. Connu pour « Un chant de Noël » et « Oliver Twist »." },
    { month:6,  day:9,  type:"death", name:"Charles Dickens",       note:"Écrivain. Mort en 1870. Un auteur national attentif aux plus faibles." },
    { month:2,  day:3,  type:"birth", name:"Felix Mendelssohn",     note:"Compositeur allemand. Né en 1809. Connu pour la « Marche nuptiale » et « Le Songe d'une nuit d'été »." },
    { month:11, day:4,  type:"death", name:"Felix Mendelssohn",     note:"Compositeur. Mort en 1847. Une grande figure du romantisme." },
    { month:6,  day:8,  type:"birth", name:"Robert Schumann",       note:"Compositeur allemand. Né en 1810. Connu pour des pièces pour piano comme « Rêverie » et pour ses lieder." },
    { month:7,  day:29, type:"death", name:"Robert Schumann",       note:"Compositeur. Mort en 1856. On l'appelle le poète de la musique romantique." },
    { month:10, day:22, type:"birth", name:"Franz Liszt",           note:"Compositeur hongrois. Né en 1811. Connu pour ses « Rhapsodies hongroises » — le « magicien du piano »." },
    { month:7,  day:31, type:"death", name:"Franz Liszt",           note:"Compositeur. Mort en 1886. Célèbre aussi comme pianiste virtuose." },
    { month:8,  day:22, type:"birth", name:"Claude Debussy",        note:"Compositeur français. Né en 1862. Connu pour « Clair de lune » et « La Mer »." },
    { month:3,  day:25, type:"death", name:"Claude Debussy",        note:"Compositeur. Mort en 1918. Un maître de la musique impressionniste." },
    { month:1,  day:4,  type:"birth", name:"Louis Braille",         note:"Inventeur français de l'écriture pour aveugles. Né en 1809. Devenu aveugle lui-même, il créa l'écriture en points." },
    { month:1,  day:6,  type:"death", name:"Louis Braille",         note:"Inventeur du braille. Mort en 1852. Il a apporté la lecture aux aveugles du monde entier." },
    { month:2,  day:4,  type:"birth", name:"Rosa Parks",            note:"Militante américaine des droits civiques. Née en 1913. Son refus de céder sa place dans un bus a lancé un mouvement." },
    { month:10, day:24, type:"death", name:"Rosa Parks",            note:"Militante des droits civiques. Morte en 2005. Surnommée « la mère du mouvement des droits civiques »." },
    { month:2,  day:2,  type:"birth", name:"James Joyce",           note:"Écrivain irlandais. Né en 1882. Auteur d'« Ulysse », une œuvre majeure du XXe siècle." },
    { month:1,  day:13, type:"death", name:"James Joyce",           note:"Écrivain. Mort en 1941. Il a marqué la littérature moderne par des formes nouvelles." },
    { month:2,  day:29, type:"birth", name:"Gioachino Rossini",     note:"Compositeur italien. Né en 1792, un jour bissextile. Connu pour « Le Barbier de Séville »." },
    { month:11, day:13, type:"death", name:"Gioachino Rossini",     note:"Compositeur. Mort en 1868. Apprécié pour ses opéras enjoués." },
    { month:3,  day:24, type:"birth", name:"Harry Houdini",         note:"Artiste d'évasion américain. Né en 1874. Surnommé le « roi de l'évasion », il a étonné le monde." },
    { month:10, day:31, type:"death", name:"Harry Houdini",         note:"Magicien. Mort en 1926, justement le jour d'Halloween, le 31 octobre." },
    { month:5,  day:31, type:"birth", name:"Clint Eastwood",        note:"Acteur et réalisateur américain. Né en 1930. Connu pour les westerns et « L'Inspecteur Harry »." },
    { month:8,  day:9,  type:"birth", name:"Jean Piaget",           note:"Psychologue suisse. Né en 1896. Il a étudié le développement de l'esprit chez l'enfant." },
    { month:2,  day:23, type:"birth", name:"Georg Friedrich Haendel", note:"Compositeur né en Allemagne. Né en 1685. Connu pour l'oratorio « Le Messie »." },
    { month:4,  day:14, type:"death", name:"Georg Friedrich Haendel", note:"Compositeur. Mort en 1759. Actif en Angleterre, il a laissé de solennelles œuvres chorales." },
    { month:3,  day:31, type:"birth", name:"Joseph Haydn",          note:"Compositeur autrichien. Né en 1732. « Père de la symphonie », auteur d'innombrables œuvres." },
    { month:5,  day:31, type:"death", name:"Joseph Haydn",          note:"Compositeur. Mort en 1809. Il a façonné le quatuor à cordes et la symphonie." }
  ]
};
