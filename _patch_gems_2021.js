'use strict';
/* 誕生石を現行公式(全国宝石卸商協同組合・2021年12月改訂の29石)に更新するパッチ。
   既存12石(各月の代表石)は変更せず、足りない17石を追加する。
   出典: 日本ジュエリー協会 https://jja.ne.jp/aboutjewellery/aboutjewellery_inner04/
         全国宝石卸商協同組合 https://zho.or.jp/news/566/
   石言葉: herschedule.com/c/column/birthstone ほか業界サイト(2026-08-12裏取り)
   実行: node _patch_gems_2021.js  → 9言語の content.<code>.js の gems 配列末尾に追記 */
const fs = require('fs');
const path = require('path');

const ADD = {
  ja: [
    { month:2,  name:"クリソベリル・キャッツアイ", emoji:"💛", meaning:"守護・慈愛", note:"猫の目のような光の筋が浮かぶ石。2021年に誕生石に加わりました。" },
    { month:3,  name:"サンゴ（珊瑚）", emoji:"🧡", meaning:"幸福・長寿", note:"海が育んだ宝石。長寿のお守りとして親しまれています。" },
    { month:3,  name:"ブラッドストーン", emoji:"💚", meaning:"勇気・情熱", note:"深い緑に赤い模様のまじる石。2021年に加わりました。" },
    { month:3,  name:"アイオライト", emoji:"💙", meaning:"誠実・道を示す", note:"すみれ色の石。昔の船乗りの道しるべと伝わります。2021年に加わりました。" },
    { month:4,  name:"モルガナイト", emoji:"💗", meaning:"愛情・優しさ", note:"やわらかな桃色の石。2021年に加わりました。" },
    { month:5,  name:"ヒスイ（翡翠）", emoji:"🍀", meaning:"繁栄・健康・長寿", note:"日本でも古くから愛されてきた深い緑の石。" },
    { month:6,  name:"ムーンストーン", emoji:"🌙", meaning:"愛情・癒やし", note:"月の光のようにやわらかく輝く石。" },
    { month:6,  name:"アレキサンドライト", emoji:"🔮", meaning:"高貴・秘めた思い", note:"昼と夜で色が変わる不思議な石。2021年に加わりました。" },
    { month:7,  name:"スフェーン", emoji:"✨", meaning:"純粋・永久不変", note:"ダイヤのようにきらめく黄緑の石。2021年に加わりました。" },
    { month:8,  name:"サードオニックス", emoji:"🧡", meaning:"夫婦円満・幸せな結婚", note:"赤と白のしま模様の石。" },
    { month:8,  name:"スピネル", emoji:"💖", meaning:"成功・発展", note:"鮮やかな赤で知られる石。2021年に加わりました。" },
    { month:9,  name:"クンツァイト", emoji:"🌸", meaning:"無償の愛・純粋", note:"やさしい藤色の石。2021年に加わりました。" },
    { month:10, name:"トルマリン", emoji:"⚡", meaning:"希望・友情", note:"和名は電気石。こすると電気を帯びる性質があります。" },
    { month:11, name:"シトリン", emoji:"🍋", meaning:"繁栄・成功", note:"レモン色の水晶。黄水晶とも呼ばれます。" },
    { month:12, name:"ラピスラズリ", emoji:"🌌", meaning:"真実・幸運", note:"金の星をちりばめた夜空のような瑠璃色の石。" },
    { month:12, name:"タンザナイト", emoji:"💜", meaning:"高貴・神秘", note:"夕暮れの空のような青紫の石。2021年に加わりました。" },
    { month:12, name:"ジルコン", emoji:"🔹", meaning:"安らぎ・永遠", note:"ダイヤのような輝きを放つ石。2021年に加わりました。" }
  ],
  en: [
    { month:2,  name:"Chrysoberyl Cat's Eye", emoji:"💛", meaning:"protection & tender love", note:"A stone with a band of light like a cat's eye. Added to the birthstones in 2021." },
    { month:3,  name:"Coral", emoji:"🧡", meaning:"happiness & long life", note:"A gem nurtured by the sea, long cherished as a charm for longevity." },
    { month:3,  name:"Bloodstone", emoji:"💚", meaning:"courage & passion", note:"Deep green flecked with red. Added in 2021." },
    { month:3,  name:"Iolite", emoji:"💙", meaning:"sincerity & guidance", note:"A violet-blue stone, said to have guided sailors of old. Added in 2021." },
    { month:4,  name:"Morganite", emoji:"💗", meaning:"love & gentleness", note:"A soft pink stone. Added in 2021." },
    { month:5,  name:"Jade", emoji:"🍀", meaning:"prosperity, health & long life", note:"A deep green stone treasured for centuries." },
    { month:6,  name:"Moonstone", emoji:"🌙", meaning:"love & healing", note:"A stone that glows softly like moonlight." },
    { month:6,  name:"Alexandrite", emoji:"🔮", meaning:"nobility & hidden feelings", note:"A mysterious stone that changes color between day and night. Added in 2021." },
    { month:7,  name:"Sphene", emoji:"✨", meaning:"purity & permanence", note:"A yellow-green stone that sparkles like diamond. Added in 2021." },
    { month:8,  name:"Sardonyx", emoji:"🧡", meaning:"marital happiness", note:"A stone with red and white stripes." },
    { month:8,  name:"Spinel", emoji:"💖", meaning:"success & growth", note:"Famed for its vivid red. Added in 2021." },
    { month:9,  name:"Kunzite", emoji:"🌸", meaning:"unconditional love & purity", note:"A gentle lilac-pink stone. Added in 2021." },
    { month:10, name:"Tourmaline", emoji:"⚡", meaning:"hope & friendship", note:"Known as the electric stone: it holds a static charge when rubbed." },
    { month:11, name:"Citrine", emoji:"🍋", meaning:"prosperity & success", note:"A lemon-colored quartz." },
    { month:12, name:"Lapis Lazuli", emoji:"🌌", meaning:"truth & good fortune", note:"Deep blue like a night sky sprinkled with golden stars." },
    { month:12, name:"Tanzanite", emoji:"💜", meaning:"nobility & mystery", note:"A blue-violet stone like the evening sky. Added in 2021." },
    { month:12, name:"Zircon", emoji:"🔹", meaning:"peace & eternity", note:"A stone with diamond-like brilliance. Added in 2021." }
  ],
  de: [
    { month:2,  name:"Chrysoberyll-Katzenauge", emoji:"💛", meaning:"Schutz & liebevolle Fürsorge", note:"Ein Stein mit einem Lichtstreifen wie ein Katzenauge. Seit 2021 ein Geburtsstein." },
    { month:3,  name:"Koralle", emoji:"🧡", meaning:"Glück & langes Leben", note:"Ein Schatz aus dem Meer, seit jeher ein Glücksbringer für ein langes Leben." },
    { month:3,  name:"Heliotrop", emoji:"💚", meaning:"Mut & Leidenschaft", note:"Tiefgrün mit roten Sprenkeln. Seit 2021 dabei." },
    { month:3,  name:"Iolith", emoji:"💙", meaning:"Aufrichtigkeit & Wegweisung", note:"Ein veilchenblauer Stein, einst Wegweiser der Seefahrer. Seit 2021 dabei." },
    { month:4,  name:"Morganit", emoji:"💗", meaning:"Liebe & Sanftheit", note:"Ein zartrosa Stein. Seit 2021 dabei." },
    { month:5,  name:"Jade", emoji:"🍀", meaning:"Wohlstand, Gesundheit & langes Leben", note:"Ein tiefgrüner Stein, seit Jahrhunderten geschätzt." },
    { month:6,  name:"Mondstein", emoji:"🌙", meaning:"Liebe & Heilung", note:"Ein Stein, der sanft wie Mondlicht schimmert." },
    { month:6,  name:"Alexandrit", emoji:"🔮", meaning:"Würde & verborgene Gefühle", note:"Ein geheimnisvoller Stein, der zwischen Tag und Nacht die Farbe wechselt. Seit 2021 dabei." },
    { month:7,  name:"Sphen (Titanit)", emoji:"✨", meaning:"Reinheit & Beständigkeit", note:"Ein gelbgrüner Stein mit diamantartigem Feuer. Seit 2021 dabei." },
    { month:8,  name:"Sardonyx", emoji:"🧡", meaning:"eheliches Glück", note:"Ein Stein mit rot-weißen Streifen." },
    { month:8,  name:"Spinell", emoji:"💖", meaning:"Erfolg & Entfaltung", note:"Berühmt für sein leuchtendes Rot. Seit 2021 dabei." },
    { month:9,  name:"Kunzit", emoji:"🌸", meaning:"bedingungslose Liebe & Reinheit", note:"Ein zarter fliederrosa Stein. Seit 2021 dabei." },
    { month:10, name:"Turmalin", emoji:"⚡", meaning:"Hoffnung & Freundschaft", note:"Bekannt als elektrischer Stein: Beim Reiben lädt er sich statisch auf." },
    { month:11, name:"Citrin", emoji:"🍋", meaning:"Wohlstand & Erfolg", note:"Ein zitronengelber Quarz." },
    { month:12, name:"Lapislazuli", emoji:"🌌", meaning:"Wahrheit & Glück", note:"Tiefblau wie ein Nachthimmel voller goldener Sterne." },
    { month:12, name:"Tansanit", emoji:"💜", meaning:"Würde & Geheimnis", note:"Ein blauvioletter Stein wie der Abendhimmel. Seit 2021 dabei." },
    { month:12, name:"Zirkon", emoji:"🔹", meaning:"Ruhe & Ewigkeit", note:"Ein Stein mit diamantgleichem Glanz. Seit 2021 dabei." }
  ],
  fr: [
    { month:2,  name:"Œil de chat (chrysobéryl)", emoji:"💛", meaning:"protection & tendresse", note:"Une pierre traversée d'un rai de lumière, comme l'œil d'un chat. Pierre de naissance depuis 2021." },
    { month:3,  name:"Corail", emoji:"🧡", meaning:"bonheur & longévité", note:"Un trésor né de la mer, porte-bonheur de longue vie." },
    { month:3,  name:"Héliotrope", emoji:"💚", meaning:"courage & passion", note:"Vert profond moucheté de rouge. Ajouté en 2021." },
    { month:3,  name:"Iolite", emoji:"💙", meaning:"sincérité & bonne direction", note:"Une pierre bleu violacé qui guidait, dit-on, les marins. Ajoutée en 2021." },
    { month:4,  name:"Morganite", emoji:"💗", meaning:"amour & douceur", note:"Une pierre rose tendre. Ajoutée en 2021." },
    { month:5,  name:"Jade", emoji:"🍀", meaning:"prospérité, santé & longévité", note:"Une pierre vert profond, aimée depuis des siècles." },
    { month:6,  name:"Pierre de lune", emoji:"🌙", meaning:"amour & apaisement", note:"Une pierre au doux éclat de clair de lune." },
    { month:6,  name:"Alexandrite", emoji:"🔮", meaning:"noblesse & sentiments secrets", note:"Une pierre mystérieuse qui change de couleur entre le jour et la nuit. Ajoutée en 2021." },
    { month:7,  name:"Sphène", emoji:"✨", meaning:"pureté & permanence", note:"Une pierre jaune-vert au feu de diamant. Ajoutée en 2021." },
    { month:8,  name:"Sardonyx", emoji:"🧡", meaning:"bonheur conjugal", note:"Une pierre rayée de rouge et de blanc." },
    { month:8,  name:"Spinelle", emoji:"💖", meaning:"réussite & essor", note:"Célèbre pour son rouge éclatant. Ajouté en 2021." },
    { month:9,  name:"Kunzite", emoji:"🌸", meaning:"amour inconditionnel & pureté", note:"Une douce pierre rose lilas. Ajoutée en 2021." },
    { month:10, name:"Tourmaline", emoji:"⚡", meaning:"espoir & amitié", note:"La « pierre électrique » : frottée, elle se charge d'électricité statique." },
    { month:11, name:"Citrine", emoji:"🍋", meaning:"prospérité & réussite", note:"Un quartz couleur citron." },
    { month:12, name:"Lapis-lazuli", emoji:"🌌", meaning:"vérité & bonne fortune", note:"Bleu profond, comme un ciel de nuit semé d'étoiles d'or." },
    { month:12, name:"Tanzanite", emoji:"💜", meaning:"noblesse & mystère", note:"Une pierre bleu-violet comme le ciel du soir. Ajoutée en 2021." },
    { month:12, name:"Zircon", emoji:"🔹", meaning:"sérénité & éternité", note:"Une pierre à l'éclat de diamant. Ajoutée en 2021." }
  ],
  it: [
    { month:2,  name:"Occhio di gatto (crisoberillo)", emoji:"💛", meaning:"protezione & tenerezza", note:"Una pietra attraversata da una striscia di luce, come l'occhio di un gatto. Pietra natale dal 2021." },
    { month:3,  name:"Corallo", emoji:"🧡", meaning:"felicità & lunga vita", note:"Un tesoro nato dal mare, da sempre portafortuna di longevità." },
    { month:3,  name:"Eliotropio", emoji:"💚", meaning:"coraggio & passione", note:"Verde profondo punteggiato di rosso. Aggiunto nel 2021." },
    { month:3,  name:"Iolite", emoji:"💙", meaning:"sincerità & buona guida", note:"Una pietra blu-violetta che, si dice, guidava i marinai. Aggiunta nel 2021." },
    { month:4,  name:"Morganite", emoji:"💗", meaning:"amore & dolcezza", note:"Una pietra rosa tenue. Aggiunta nel 2021." },
    { month:5,  name:"Giada", emoji:"🍀", meaning:"prosperità, salute & lunga vita", note:"Una pietra verde intenso, amata da secoli." },
    { month:6,  name:"Pietra di luna", emoji:"🌙", meaning:"amore & serenità", note:"Una pietra dal tenue chiarore di luna." },
    { month:6,  name:"Alessandrite", emoji:"🔮", meaning:"nobiltà & sentimenti segreti", note:"Una pietra misteriosa che cambia colore tra il giorno e la notte. Aggiunta nel 2021." },
    { month:7,  name:"Sfene", emoji:"✨", meaning:"purezza & perennità", note:"Una pietra giallo-verde dal fuoco di diamante. Aggiunta nel 2021." },
    { month:8,  name:"Sardonice", emoji:"🧡", meaning:"felicità coniugale", note:"Una pietra a strisce rosse e bianche." },
    { month:8,  name:"Spinello", emoji:"💖", meaning:"successo & crescita", note:"Celebre per il suo rosso acceso. Aggiunto nel 2021." },
    { month:9,  name:"Kunzite", emoji:"🌸", meaning:"amore incondizionato & purezza", note:"Una tenera pietra rosa lilla. Aggiunta nel 2021." },
    { month:10, name:"Tormalina", emoji:"⚡", meaning:"speranza & amicizia", note:"La «pietra elettrica»: strofinata si carica di elettricità statica." },
    { month:11, name:"Citrino", emoji:"🍋", meaning:"prosperità & successo", note:"Un quarzo color limone." },
    { month:12, name:"Lapislazzuli", emoji:"🌌", meaning:"verità & fortuna", note:"Blu profondo, come un cielo notturno cosparso di stelle d'oro." },
    { month:12, name:"Tanzanite", emoji:"💜", meaning:"nobiltà & mistero", note:"Una pietra blu-viola come il cielo della sera. Aggiunta nel 2021." },
    { month:12, name:"Zircone", emoji:"🔹", meaning:"serenità & eternità", note:"Una pietra dalla brillantezza di diamante. Aggiunto nel 2021." }
  ],
  es: [
    { month:2,  name:"Ojo de gato (crisoberilo)", emoji:"💛", meaning:"protección & ternura", note:"Una piedra cruzada por una franja de luz, como el ojo de un gato. Piedra de nacimiento desde 2021." },
    { month:3,  name:"Coral", emoji:"🧡", meaning:"felicidad & larga vida", note:"Un tesoro nacido del mar, amuleto de longevidad desde antiguo." },
    { month:3,  name:"Heliotropo", emoji:"💚", meaning:"valor & pasión", note:"Verde profundo salpicado de rojo. Añadida en 2021." },
    { month:3,  name:"Iolita", emoji:"💙", meaning:"sinceridad & buen rumbo", note:"Una piedra azul violácea que, se dice, guiaba a los marinos. Añadida en 2021." },
    { month:4,  name:"Morganita", emoji:"💗", meaning:"amor & dulzura", note:"Una piedra rosa suave. Añadida en 2021." },
    { month:5,  name:"Jade", emoji:"🍀", meaning:"prosperidad, salud & larga vida", note:"Una piedra verde profundo, apreciada desde hace siglos." },
    { month:6,  name:"Piedra luna", emoji:"🌙", meaning:"amor & sosiego", note:"Una piedra de suave brillo de luna." },
    { month:6,  name:"Alejandrita", emoji:"🔮", meaning:"nobleza & sentimientos ocultos", note:"Una piedra misteriosa que cambia de color entre el día y la noche. Añadida en 2021." },
    { month:7,  name:"Esfena", emoji:"✨", meaning:"pureza & permanencia", note:"Una piedra verde amarillenta con fuego de diamante. Añadida en 2021." },
    { month:8,  name:"Sardónice", emoji:"🧡", meaning:"felicidad conyugal", note:"Una piedra de franjas rojas y blancas." },
    { month:8,  name:"Espinela", emoji:"💖", meaning:"éxito & crecimiento", note:"Famosa por su rojo intenso. Añadida en 2021." },
    { month:9,  name:"Kunzita", emoji:"🌸", meaning:"amor incondicional & pureza", note:"Una delicada piedra rosa lila. Añadida en 2021." },
    { month:10, name:"Turmalina", emoji:"⚡", meaning:"esperanza & amistad", note:"La «piedra eléctrica»: al frotarla se carga de electricidad estática." },
    { month:11, name:"Citrino", emoji:"🍋", meaning:"prosperidad & éxito", note:"Un cuarzo color limón." },
    { month:12, name:"Lapislázuli", emoji:"🌌", meaning:"verdad & buena fortuna", note:"Azul profundo, como un cielo nocturno sembrado de estrellas doradas." },
    { month:12, name:"Tanzanita", emoji:"💜", meaning:"nobleza & misterio", note:"Una piedra azul violeta como el cielo del atardecer. Añadida en 2021." },
    { month:12, name:"Circón", emoji:"🔹", meaning:"serenidad & eternidad", note:"Una piedra con brillo de diamante. Añadido en 2021." }
  ],
  ko: [
    { month:2,  name:"크리소베릴 캐츠아이", emoji:"💛", meaning:"수호・자애", note:"고양이 눈처럼 빛의 줄이 떠오르는 보석. 2021년에 탄생석에 더해졌습니다." },
    { month:3,  name:"산호", emoji:"🧡", meaning:"행복・장수", note:"바다가 길러낸 보석. 장수의 부적으로 사랑받아 왔습니다." },
    { month:3,  name:"블러드스톤", emoji:"💚", meaning:"용기・열정", note:"짙은 초록에 붉은 반점이 섞인 보석. 2021년에 더해졌습니다." },
    { month:3,  name:"아이올라이트", emoji:"💙", meaning:"성실・길잡이", note:"제비꽃빛 보석. 옛 뱃사람들의 길잡이로 전해집니다. 2021년에 더해졌습니다." },
    { month:4,  name:"모거나이트", emoji:"💗", meaning:"애정・다정함", note:"은은한 분홍빛 보석. 2021년에 더해졌습니다." },
    { month:5,  name:"비취", emoji:"🍀", meaning:"번영・건강・장수", note:"동양에서 오랫동안 사랑받아 온 짙은 초록의 보석." },
    { month:6,  name:"문스톤", emoji:"🌙", meaning:"애정・치유", note:"달빛처럼 은은하게 빛나는 보석." },
    { month:6,  name:"알렉산드라이트", emoji:"🔮", meaning:"고귀함・숨긴 마음", note:"낮과 밤에 색이 달라지는 신비한 보석. 2021년에 더해졌습니다." },
    { month:7,  name:"스펜(티타나이트)", emoji:"✨", meaning:"순수・영원불변", note:"다이아몬드처럼 반짝이는 황록색 보석. 2021년에 더해졌습니다." },
    { month:8,  name:"사도닉스", emoji:"🧡", meaning:"부부 화목・행복한 결혼", note:"붉은색과 흰색 줄무늬의 보석." },
    { month:8,  name:"스피넬", emoji:"💖", meaning:"성공・발전", note:"선명한 붉은빛으로 유명한 보석. 2021년에 더해졌습니다." },
    { month:9,  name:"쿤자이트", emoji:"🌸", meaning:"무조건적인 사랑・순수", note:"은은한 연보라빛 보석. 2021년에 더해졌습니다." },
    { month:10, name:"투르말린", emoji:"⚡", meaning:"희망・우정", note:"전기석이라고도 불리며, 문지르면 정전기를 띱니다." },
    { month:11, name:"시트린", emoji:"🍋", meaning:"번영・성공", note:"레몬빛 수정. 황수정이라고도 합니다." },
    { month:12, name:"라피스라줄리", emoji:"🌌", meaning:"진실・행운", note:"금빛 별을 뿌린 밤하늘 같은 짙은 파란 보석." },
    { month:12, name:"탄자나이트", emoji:"💜", meaning:"고귀함・신비", note:"저녁 하늘 같은 청보라빛 보석. 2021년에 더해졌습니다." },
    { month:12, name:"지르콘", emoji:"🔹", meaning:"평온・영원", note:"다이아몬드 같은 광채의 보석. 2021년에 더해졌습니다." }
  ],
  sv: [
    { month:2,  name:"Krysoberyll kattöga", emoji:"💛", meaning:"beskydd & ömhet", note:"En sten med en ljusstrimma som ett kattöga. Födelsesten sedan 2021." },
    { month:3,  name:"Korall", emoji:"🧡", meaning:"lycka & långt liv", note:"En skatt ur havet, sedan länge en lyckoamulett för långt liv." },
    { month:3,  name:"Heliotrop", emoji:"💚", meaning:"mod & passion", note:"Djupgrön med röda stänk. Tillagd 2021." },
    { month:3,  name:"Iolit", emoji:"💙", meaning:"uppriktighet & vägledning", note:"En violblå sten som sägs ha väglett sjöfarare. Tillagd 2021." },
    { month:4,  name:"Morganit", emoji:"💗", meaning:"kärlek & mildhet", note:"En mjukt rosa sten. Tillagd 2021." },
    { month:5,  name:"Jade", emoji:"🍀", meaning:"välgång, hälsa & långt liv", note:"En djupgrön sten, älskad i århundraden." },
    { month:6,  name:"Månsten", emoji:"🌙", meaning:"kärlek & läkning", note:"En sten som skimrar mjukt som månljus." },
    { month:6,  name:"Alexandrit", emoji:"🔮", meaning:"ädelhet & dolda känslor", note:"En gåtfull sten som skiftar färg mellan dag och natt. Tillagd 2021." },
    { month:7,  name:"Sfen (titanit)", emoji:"✨", meaning:"renhet & beständighet", note:"En gulgrön sten med diamantlik eld. Tillagd 2021." },
    { month:8,  name:"Sardonyx", emoji:"🧡", meaning:"äktenskaplig lycka", note:"En sten med röda och vita ränder." },
    { month:8,  name:"Spinell", emoji:"💖", meaning:"framgång & utveckling", note:"Berömd för sin klarröda färg. Tillagd 2021." },
    { month:9,  name:"Kunzit", emoji:"🌸", meaning:"villkorslös kärlek & renhet", note:"En mild syrenrosa sten. Tillagd 2021." },
    { month:10, name:"Turmalin", emoji:"⚡", meaning:"hopp & vänskap", note:"Kallas den elektriska stenen: gnuggad laddas den med statisk elektricitet." },
    { month:11, name:"Citrin", emoji:"🍋", meaning:"välgång & framgång", note:"En citrongul kvarts." },
    { month:12, name:"Lapis lazuli", emoji:"🌌", meaning:"sanning & lycka", note:"Djupblå som en natthimmel beströdd med gyllene stjärnor." },
    { month:12, name:"Tanzanit", emoji:"💜", meaning:"ädelhet & mystik", note:"En blåviolett sten som kvällshimlen. Tillagd 2021." },
    { month:12, name:"Zirkon", emoji:"🔹", meaning:"ro & evighet", note:"En sten med diamantlik lyster. Tillagd 2021." }
  ],
  nl: [
    { month:2,  name:"Chrysoberyl kattenoog", emoji:"💛", meaning:"bescherming & tederheid", note:"Een steen met een lichtstreep als het oog van een kat. Geboortesteen sinds 2021." },
    { month:3,  name:"Koraal", emoji:"🧡", meaning:"geluk & lang leven", note:"Een schat uit de zee, van oudsher een amulet voor een lang leven." },
    { month:3,  name:"Heliotroop", emoji:"💚", meaning:"moed & passie", note:"Diepgroen met rode spikkels. Toegevoegd in 2021." },
    { month:3,  name:"Ioliet", emoji:"💙", meaning:"oprechtheid & richting", note:"Een violetblauwe steen die zeelieden de weg zou hebben gewezen. Toegevoegd in 2021." },
    { month:4,  name:"Morganiet", emoji:"💗", meaning:"liefde & zachtheid", note:"Een zachtroze steen. Toegevoegd in 2021." },
    { month:5,  name:"Jade", emoji:"🍀", meaning:"voorspoed, gezondheid & lang leven", note:"Een diepgroene steen, al eeuwen geliefd." },
    { month:6,  name:"Maansteen", emoji:"🌙", meaning:"liefde & rust", note:"Een steen die zacht glanst als maanlicht." },
    { month:6,  name:"Alexandriet", emoji:"🔮", meaning:"adel & verborgen gevoelens", note:"Een geheimzinnige steen die van kleur verandert tussen dag en nacht. Toegevoegd in 2021." },
    { month:7,  name:"Sfeen (titaniet)", emoji:"✨", meaning:"zuiverheid & bestendigheid", note:"Een geelgroene steen met diamantachtig vuur. Toegevoegd in 2021." },
    { month:8,  name:"Sardonyx", emoji:"🧡", meaning:"huwelijksgeluk", note:"Een steen met rode en witte strepen." },
    { month:8,  name:"Spinel", emoji:"💖", meaning:"succes & groei", note:"Beroemd om zijn felle rood. Toegevoegd in 2021." },
    { month:9,  name:"Kunziet", emoji:"🌸", meaning:"onvoorwaardelijke liefde & zuiverheid", note:"Een zachte lilaroze steen. Toegevoegd in 2021." },
    { month:10, name:"Toermalijn", emoji:"⚡", meaning:"hoop & vriendschap", note:"De elektrische steen: door wrijven raakt hij statisch geladen." },
    { month:11, name:"Citrien", emoji:"🍋", meaning:"voorspoed & succes", note:"Een citroengele kwarts." },
    { month:12, name:"Lapis lazuli", emoji:"🌌", meaning:"waarheid & geluk", note:"Diepblauw als een nachthemel bezaaid met gouden sterren." },
    { month:12, name:"Tanzaniet", emoji:"💜", meaning:"adel & mysterie", note:"Een blauwviolette steen als de avondhemel. Toegevoegd in 2021." },
    { month:12, name:"Zirkoon", emoji:"🔹", meaning:"rust & eeuwigheid", note:"Een steen met diamantachtige schittering. Toegevoegd in 2021." }
  ]
};

let total = 0;
for (const code of Object.keys(ADD)) {
  const p = path.join(__dirname, 'content.' + code + '.js');
  let t = fs.readFileSync(p, 'utf8');
  if (/2021/.test((t.match(/gems:\s*\[[\s\S]*?\n\s*\]/) || [''])[0])) {
    console.log(code + ': 既に適用済みらしき記述あり。スキップ');
    continue;
  }
  const m = t.match(/(gems:\s*\[)([\s\S]*?)(\n(\s*)\],)/);
  if (!m) { console.error(code + ': gems配列が見つからない'); process.exitCode = 1; continue; }
  const lines = ADD[code].map(it =>
    '    { month:' + it.month + ', name:"' + it.name + '", emoji:"' + it.emoji + '", meaning:"' + it.meaning + '", note:"' + it.note + '" }'
  ).join(',\n');
  const replaced = m[1] + m[2] + ',\n' + lines + m[3];
  t = t.replace(m[0], replaced);
  fs.writeFileSync(p, t);
  total += ADD[code].length;
  console.log(code + ': +' + ADD[code].length + '石');
}
console.log('done. 追加合計 ' + total + ' 石(9言語×17)');
