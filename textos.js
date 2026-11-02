/* ==========================================================================
   ELS SECRETS DE PEDRA DE TALARN — CONTINGUT
   Ajuntament de Talarn · Geoparc Mundial UNESCO Orígens

   Aquest fitxer conté TOTS els textos del joc en quatre llengües:
     ca = català   es = castellà   en = anglès   fr = francès

   Per canviar un text, busca'l i edita el que hi ha entre cometes.
   Per afegir una llengua nova, afegeix-la a IDIOMES i posa la seva
   clau (per exemple oc:) a cada camp d'UI i de PARADES.

   REGLES QUE NO ES PODEN TRENCAR
   · Cada parada té una i només una opció amb ok:true
   · La frase secreta ha de tenir EXACTAMENT 11 paraules en cada llengua,
     una per parada i en el mateix ordre que les parades
   · Els textos van entre cometes dobles; les cometes dobles interiors
     s'escriuen \"així\"
   ========================================================================== */

const IDIOMES = ['ca','es','en','fr'];

/* --------------------------------------------------------------------------
   FRASE SECRETA — 11 paraules per llengua
   -------------------------------------------------------------------------- */
const FRASE = {
  ca:"TALARN ÉS ON ES VA DESCOBRIR EL PRIMER DINOSAURE DE CATALUNYA",
  es:"TALARN ES DONDE SE DESCUBRIÓ EL PRIMER DINOSAURIO DE TODA CATALUÑA",
  en:"TALARN IS WHERE THE VERY FIRST DINOSAUR IN CATALONIA WAS DISCOVERED",
  fr:"TALARN EST LE VILLAGE OÙ FUT DÉCOUVERT LE PREMIER DINOSAURE CATALAN"
};

/* --------------------------------------------------------------------------
   TEXTOS DE LA INTERFÍCIE
   -------------------------------------------------------------------------- */
const UI = {
ca:{
  titol:"Els Secrets de Pedra de Talarn",
  lede:"Sabíeu que Talarn va amagar un secret durant més de 70 milions d'anys? Les pedres de les seves parets us l'expliquen, si les sabeu llegir.",
  passos:["Feu les 11 parades de la ruta, en ordre.","A cada parada, escanegeu el QR i responeu la pregunta.","Si l'encerteu, guanyareu una paraula.","Al final, les 11 paraules formen la frase secreta."],
  regTitol:"Qui sou?",
  regText:"Digueu-nos el nom del vostre equip abans de començar. Us acompanyarà tota la ruta.",
  regNom:"Nom o nom d'equip", regNomPh:"Els caçadors de fòssils",
  regMem:"Quants sou?", regOk:"Comença la ruta", regSkip:"Prefereixo no dir-ho",
  etapa:"Parada",
  deOnze:n=>`Parada ${n} de 11`,
  comenca:"Comença per la parada 1",
  continua:n=>`Continua per la parada ${n}`,
  moltBe:"Molt bé. La paraula secreta és",
  retry:"No hi és. Torneu a mirar la pedra i proveu-ho un altre cop.",
  fraseBtn:"Descobriu la frase secreta",
  paraules:"Les vostres paraules",
  reset:"Comença de nou",
  confirmReset:"Voleu esborrar les paraules recollides i començar de nou?",
  completada:"Ruta completada",
  enhoraPre:"", enhorabona:"Enhorabona",
  fossil:"L'any 1917 es va trobar aquí el fèmur d'un titanosaure: el primer fòssil de dinosaure documentat a Catalunya.",
  tanca:"Heu sabut llegir el que expliquen les pedres de Talarn: un mar poc profund, una platja, un delta, un riu, un sòl amb plantes, unes muntanyes que s'aixequen. I aquella última, una pedra forastera que va fer el viatge riu avall.",
  encaraNo:"Encara no hi sou",
  falten:n=>n===1?"Us falta una paraula":`Us falten ${n} paraules`,
  faltenText:"La frase només apareix quan teniu les onze. Torneu a la ruta i continueu recollint-les.",
  inici:"Tornar a l'inici",
  equip:"Equip",
  portadaAlt:"Talarn vist des dels camps"
},
es:{
  titol:"Los Secretos de Piedra de Talarn",
  lede:"¿Sabíais que Talarn escondió un secreto durante más de 70 millones de años? Las piedras de sus paredes os lo cuentan, si sabéis leerlas.",
  passos:["Haced las 11 paradas de la ruta, en orden.","En cada parada, escanead el QR y responded la pregunta.","Si acertáis, ganaréis una palabra.","Al final, las 11 palabras forman la frase secreta."],
  regTitol:"¿Quiénes sois?",
  regText:"Decidnos el nombre de vuestro equipo antes de empezar. Os acompañará toda la ruta.",
  regNom:"Nombre o nombre de equipo", regNomPh:"Los cazadores de fósiles",
  regMem:"¿Cuántos sois?", regOk:"Empieza la ruta", regSkip:"Prefiero no decirlo",
  etapa:"Parada",
  deOnze:n=>`Parada ${n} de 11`,
  comenca:"Empieza por la parada 1",
  continua:n=>`Continúa por la parada ${n}`,
  moltBe:"¡Muy bien! La palabra secreta es",
  retry:"No es esa. Volved a mirar la piedra y probad otra vez.",
  fraseBtn:"Descubrid la frase secreta",
  paraules:"Vuestras palabras",
  reset:"Empezar de nuevo",
  confirmReset:"¿Queréis borrar las palabras recogidas y empezar de nuevo?",
  completada:"Ruta completada",
  enhoraPre:"¡", enhorabona:"Enhorabuena",
  fossil:"En 1917 se encontró aquí el fémur de un titanosaurio: el primer fósil de dinosaurio documentado en Cataluña.",
  tanca:"Habéis sabido leer lo que cuentan las piedras de Talarn: un mar poco profundo, una playa, un delta, un río, un suelo con plantas, unas montañas que se levantan. Y esa última, una piedra forastera que hizo el viaje río abajo.",
  encaraNo:"Todavía no estáis",
  falten:n=>n===1?"Os falta una palabra":`Os faltan ${n} palabras`,
  faltenText:"La frase solo aparece cuando tenéis las once. Volved a la ruta y seguid recogiéndolas.",
  inici:"Volver al inicio",
  equip:"Equipo",
  portadaAlt:"Talarn visto desde los campos"
},
en:{
  titol:"The Stone Secrets of Talarn",
  lede:"Did you know Talarn kept a secret for more than 70 million years? The stones in its walls will tell you, if you can read them.",
  passos:["Visit all 11 stops, in order.","At each stop, scan the QR code and answer the question.","Get it right and you win a word.","At the end, the 11 words spell out the secret sentence."],
  regTitol:"Who are you?",
  regText:"Tell us your team name before you set off. It will follow you round the whole trail.",
  regNom:"Name or team name", regNomPh:"The fossil hunters",
  regMem:"How many of you?", regOk:"Start the trail", regSkip:"I'd rather not say",
  etapa:"Stop",
  deOnze:n=>`Stop ${n} of 11`,
  comenca:"Start at stop 1",
  continua:n=>`Continue at stop ${n}`,
  moltBe:"Well done. The secret word is",
  retry:"Not that one. Take another look at the stone and try again.",
  fraseBtn:"Reveal the secret sentence",
  paraules:"Your words",
  reset:"Start over",
  confirmReset:"Delete the words you have collected and start over?",
  completada:"Trail completed",
  enhoraPre:"", enhorabona:"Congratulations",
  fossil:"In 1917 a titanosaur femur was found here: the first dinosaur fossil ever documented in Catalonia.",
  tanca:"You have read what the stones of Talarn have to say: a shallow sea, a beach, a delta, a river, a soil full of plants, mountains rising. And that last one, a foreign stone that travelled all the way down the river.",
  encaraNo:"Not yet",
  falten:n=>n===1?"You are one word short":`You are ${n} words short`,
  faltenText:"The sentence only appears once you have all eleven. Head back out and keep collecting.",
  inici:"Back to the start",
  equip:"Team",
  portadaAlt:"Talarn seen from the fields"
},
fr:{
  titol:"Les Secrets de Pierre de Talarn",
  lede:"Saviez-vous que Talarn a gardé un secret pendant plus de 70 millions d'années ? Les pierres de ses murs vous le racontent, si vous savez les lire.",
  passos:["Faites les 11 étapes du parcours, dans l'ordre.","À chaque étape, scannez le QR et répondez à la question.","Si vous trouvez, vous gagnez un mot.","À la fin, les 11 mots forment la phrase secrète."],
  regTitol:"Qui êtes-vous ?",
  regText:"Donnez-nous le nom de votre équipe avant de partir. Il vous suivra tout au long du parcours.",
  regNom:"Nom ou nom d'équipe", regNomPh:"Les chasseurs de fossiles",
  regMem:"Combien êtes-vous ?", regOk:"Commencer le parcours", regSkip:"Je préfère ne pas le dire",
  etapa:"Étape",
  deOnze:n=>`Étape ${n} sur 11`,
  comenca:"Commencer par l'étape 1",
  continua:n=>`Continuer à l'étape ${n}`,
  moltBe:"Bravo ! Le mot secret est",
  retry:"Ce n'est pas ça. Regardez la pierre de nouveau et réessayez.",
  fraseBtn:"Découvrir la phrase secrète",
  paraules:"Vos mots",
  reset:"Recommencer",
  confirmReset:"Effacer les mots recueillis et recommencer ?",
  completada:"Parcours terminé",
  enhoraPre:"", enhorabona:"Félicitations",
  fossil:"En 1917, on a trouvé ici le fémur d'un titanosaure : le premier fossile de dinosaure documenté en Catalogne.",
  tanca:"Vous avez su lire ce que racontent les pierres de Talarn : une mer peu profonde, une plage, un delta, une rivière, un sol couvert de plantes, des montagnes qui se soulèvent. Et cette dernière, une pierre étrangère qui a fait tout le voyage en descendant la rivière.",
  encaraNo:"Pas encore",
  falten:n=>n===1?"Il vous manque un mot":`Il vous manque ${n} mots`,
  faltenText:"La phrase n'apparaît que lorsque vous avez les onze. Retournez sur le parcours et continuez à les recueillir.",
  inici:"Retour à l'accueil",
  equip:"Équipe",
  portadaAlt:"Talarn vu depuis les champs"
}
};

/* --------------------------------------------------------------------------
   LES ONZE PARADES
   -------------------------------------------------------------------------- */
const PARADES = [

/* ═══ PARADA 1 ═══════════════════════════════════════════════════════════ */
{
num:1, color:"#A8532F", foto:"fotos/p01.jpg",
nom:{
  ca:"La Vila de Talarn",
  es:"La Villa de Talarn",
  en:"The Town of Talarn",
  fr:"Le Village de Talarn"},
peu:{
  ca:"Una olla pardalera encaixada en un mur del poble",
  es:"Una olla pardalera encajada en un muro del pueblo",
  en:"An olla pardalera set into a village wall",
  fr:"Une olla pardalera encastrée dans un mur du village"},
intro:{
  ca:"Benvinguts a la ruta geològica de Talarn! Durant les 11 parades descobrireu la història de les roques d'aquestes parets. Comencem per una peça que no és pedra: les olles pardaleres, encaixades als murs perquè els ocells hi facin el niu. Són del mateix material que les teules del teulat.",
  es:"¡Bienvenidos a la ruta geológica de Talarn! A lo largo de las 11 paradas descubriréis la historia de las rocas de estas paredes. Empezamos por una pieza que no es piedra: las ollas pardaleras, encajadas en los muros para que los pájaros aniden dentro. Son del mismo material que las tejas del tejado.",
  en:"Welcome to the Talarn geology trail! Over eleven stops you will uncover the story behind the stones in these walls. We begin with something that isn't stone at all: the olles pardaleres, pots set into the walls so that birds can nest inside. They are made of the same material as the roof tiles above you.",
  fr:"Bienvenue sur le sentier géologique de Talarn ! Au fil des onze étapes, vous découvrirez l'histoire des roches de ces murs. Commençons par un élément qui n'est pas de la pierre : les olles pardaleres, ces pots encastrés dans les murs pour que les oiseaux y nichent. Ils sont faits de la même matière que les tuiles du toit."},
pregunta:{
  ca:"Les olles pardaleres estan fetes de ceràmica. Però com es fa la ceràmica?",
  es:"Las ollas pardaleras están hechas de cerámica. Pero ¿cómo se hace la cerámica?",
  en:"The olles pardaleres are made of ceramic. But how is ceramic made?",
  fr:"Les olles pardaleres sont en céramique. Mais comment fabrique-t-on la céramique ?"},
opcions:[
  {t:{ca:"Fonent sorra a temperatures molt altes",
      es:"Fundiendo arena a temperaturas muy altas",
      en:"By melting sand at very high temperatures",
      fr:"En faisant fondre du sable à très haute température"}},
  {ok:true,
   t:{ca:"Modelant argila i coent-la al forn",
      es:"Modelando arcilla y cociéndola en el horno",
      en:"By shaping clay and firing it in a kiln",
      fr:"En façonnant de l'argile et en la cuisant au four"}},
  {t:{ca:"Premsant pols de pedra amb aigua",
      es:"Prensando polvo de piedra con agua",
      en:"By pressing stone powder together with water",
      fr:"En pressant de la poudre de pierre avec de l'eau"}},
  {t:{ca:"Deixant assecar fang al sol",
      es:"Dejando secar barro al sol",
      en:"By letting mud dry in the sun",
      fr:"En laissant sécher de la boue au soleil"}}],
paraula:{ca:"TALARN", es:"TALARN", en:"TALARN", fr:"TALARN"},
expl:{
  ca:["L'argila és fang molt fi. Modelada amb les mans i cuita al forn, perd l'aigua i s'endureix per sempre.",
      "Fonent sorra s'obté vidre, i el fang assecat al sol es torna a desfer amb la pluja. La cocció és el que fa que una olla aguanti."],
  es:["La arcilla es barro muy fino. Modelada con las manos y cocida en el horno, pierde el agua y se endurece para siempre.",
      "Fundiendo arena se obtiene vidrio, y el barro secado al sol vuelve a deshacerse con la lluvia. La cocción es lo que hace que una olla aguante."],
  en:["Clay is very fine mud. Shaped by hand and fired in a kiln, it loses its water and hardens for good.",
      "Melting sand gives you glass, and sun-dried mud simply dissolves again in the rain. Firing is what makes a pot last."],
  fr:["L'argile est une boue très fine. Façonnée à la main puis cuite au four, elle perd son eau et durcit pour toujours.",
      "Le sable fondu donne du verre, et la boue séchée au soleil se délite de nouveau sous la pluie. C'est la cuisson qui fait tenir un pot."]}
},

/* ═══ PARADA 2 ═══════════════════════════════════════════════════════════ */
{
num:2, color:"#D9A441", foto:"fotos/p02.jpg",
nom:{
  ca:"Portal de Sols i Plaça dels Arbres",
  es:"Portal de Sols y Plaça dels Arbres",
  en:"Portal de Sols and Plaça dels Arbres",
  fr:"Portal de Sols et Plaça dels Arbres"},
peu:{
  ca:"La llosa del Portal de Sols",
  es:"La losa del Portal de Sols",
  en:"The flagstone at Portal de Sols",
  fr:"La dalle du Portal de Sols"},
intro:{
  ca:"Fa 70 milions d'anys, Talarn era un mar poc profund de fons sorrenc. El corrent hi movia la sorra i hi dibuixava ondulacions. Amb el temps, aquella sorra es va comprimir fins a formar una roca dura: el grès. Mireu la llosa de la fotografia.",
  es:"Hace 70 millones de años, Talarn era un mar poco profundo de fondo arenoso. La corriente movía la arena y dibujaba ondulaciones. Con el tiempo, aquella arena se comprimió hasta formar una roca dura: la arenisca. Mirad la losa de la fotografía.",
  en:"Seventy million years ago, Talarn was a shallow sea with a sandy floor. The current shifted the sand and drew ripples across it. Over time that sand was compressed into a hard rock: sandstone. Look at the flagstone in the photograph.",
  fr:"Il y a 70 millions d'années, Talarn était une mer peu profonde au fond sableux. Le courant déplaçait le sable et y dessinait des ondulations. Avec le temps, ce sable s'est comprimé jusqu'à former une roche dure : le grès. Regardez la dalle de la photographie."},
pregunta:{
  ca:"Observeu la superfície de la llosa. Aquestes ondulacions són la marca de:",
  es:"Observad la superficie de la losa. Estas ondulaciones son la huella de:",
  en:"Look closely at the surface of the flagstone. These ripples are the mark of:",
  fr:"Observez la surface de la dalle. Ces ondulations sont la trace de :"},
opcions:[
  {t:{ca:"El pas de carros i cavalleries pel carrer",
      es:"El paso de carros y caballerías por la calle",
      en:"Carts and horses passing along the street",
      fr:"Le passage des charrettes et des chevaux dans la rue"}},
  {t:{ca:"Els cops del picapedrer en tallar la pedra",
      es:"Los golpes del cantero al tallar la piedra",
      en:"The stonemason's blows as he cut the block",
      fr:"Les coups du tailleur de pierre taillant le bloc"}},
  {ok:true,
   t:{ca:"El moviment de l'aigua sobre el fons del mar",
      es:"El movimiento del agua sobre el fondo del mar",
      en:"Water moving across the sea floor",
      fr:"Le mouvement de l'eau sur le fond marin"}},
  {t:{ca:"L'erosió de la pluja al llarg dels segles",
      es:"La erosión de la lluvia a lo largo de los siglos",
      en:"Rain eroding the stone over the centuries",
      fr:"L'érosion de la pluie au fil des siècles"}}],
paraula:{ca:"ÉS", es:"ES", en:"IS", fr:"EST"},
expl:{
  ca:["Aquestes marques s'anomenen <em>ripples</em>. Han quedat conservades a la roca durant 70 milions d'anys, tal com eren el dia que el mar les va dibuixar.",
      "La propera vegada que aneu a la platja, mireu el fons de sorra sota l'aigua: hi trobareu unes ondulacions similars, acabades de fer."],
  es:["Estas marcas se llaman <em>ripples</em>. Se han conservado en la roca durante 70 millones de años, tal como eran el día que el mar las dibujó.",
      "La próxima vez que vayáis a la playa, mirad el fondo de arena bajo el agua: encontraréis ondulaciones parecidas, recién hechas."],
  en:["These marks are called <em>ripples</em>. They have been preserved in the rock for 70 million years, exactly as they were the day the sea drew them.",
      "Next time you are at the beach, look at the sandy floor under the water: you will find the very same ripples, freshly made."],
  fr:["Ces marques s'appellent des rides, ou <em>ripples</em>. Elles se sont conservées dans la roche pendant 70 millions d'années, telles que la mer les avait dessinées.",
      "La prochaine fois que vous irez à la plage, regardez le fond de sable sous l'eau : vous y trouverez les mêmes ondulations, toutes fraîches."]}
},

/* ═══ PARADA 3 ═══════════════════════════════════════════════════════════ */
{
num:3, color:"#9B5236", foto:"fotos/p03.jpg",
nom:{
  ca:"Les cases nobles del Carrer Major",
  es:"Las casas nobles de la Calle Mayor",
  en:"The noble houses of Carrer Major",
  fr:"Les maisons nobles du Carrer Major"},
peu:{
  ca:"La font de la plaça de la Vila",
  es:"La fuente de la plaza de la Vila",
  en:"The fountain in Plaça de la Vila",
  fr:"La fontaine de la Plaça de la Vila"},
intro:{
  ca:"Mireu la font: hi ha pedres groguenques i pedres vermelloses. Totes dues són grès, sorra convertida en roca. El que les diferencia és on es va dipositar aquella sorra i, sobretot, si va quedar exposada a l'aire o coberta per l'aigua del mar.",
  es:"Mirad la fuente: hay piedras amarillentas y piedras rojizas. Ambas son arenisca, arena convertida en roca. Lo que las diferencia es dónde se depositó aquella arena y, sobre todo, si quedó expuesta al aire o cubierta por el agua del mar.",
  en:"Look at the fountain: some stones are yellowish, others reddish. Both are sandstone — sand turned to rock. What tells them apart is where that sand settled and, above all, whether it lay open to the air or under sea water.",
  fr:"Regardez la fontaine : certaines pierres sont jaunâtres, d'autres rougeâtres. Toutes deux sont du grès, du sable devenu roche. Ce qui les différencie, c'est l'endroit où ce sable s'est déposé et, surtout, s'il est resté à l'air libre ou sous l'eau de mer."},
pregunta:{
  ca:"Per què, en una mateixa font, hi ha grès vermell i grès groc?",
  es:"¿Por qué, en una misma fuente, hay arenisca roja y arenisca amarilla?",
  en:"Why does a single fountain contain both red and yellow sandstone?",
  fr:"Pourquoi, dans une même fontaine, trouve-t-on du grès rouge et du grès jaune ?"},
opcions:[
  {t:{ca:"Perquè les pedres vermelles es van cremar en un incendi",
      es:"Porque las piedras rojas se quemaron en un incendio",
      en:"Because the red stones were scorched in a fire",
      fr:"Parce que les pierres rouges ont brûlé dans un incendie"}},
  {t:{ca:"Perquè els constructors van pintar unes pedres i les altres no",
      es:"Porque los constructores pintaron unas piedras y otras no",
      en:"Because the builders painted some stones and not others",
      fr:"Parce que les bâtisseurs ont peint certaines pierres et pas d'autres"}},
  {t:{ca:"Perquè les pedres vermelles són molt més modernes",
      es:"Porque las piedras rojas son mucho más modernas",
      en:"Because the red stones are far more recent",
      fr:"Parce que les pierres rouges sont bien plus récentes"}},
  {ok:true,
   t:{ca:"Perquè la sorra vermella ve d'un riu i la groga, del fons del mar",
      es:"Porque la arena roja viene de un río y la amarilla, del fondo del mar",
      en:"Because the red sand came from a river and the yellow from the sea floor",
      fr:"Parce que le sable rouge vient d'une rivière et le jaune du fond marin"}}],
paraula:{ca:"ON", es:"DONDE", en:"WHERE", fr:"LE"},
expl:{
  ca:["Totes dues pedres contenen ferro, i el ferro es rovella. En un riu, la sorra queda exposada a l'aire i el rovell la tenyeix de vermell intens. Sota el mar, en canvi, hi ha menys oxigen i el to es queda en groc o ocre.",
      "Fixeu-vos en qualsevol barana rovellada del poble: hi trobareu els mateixos colors que a la font."],
  es:["Ambas piedras contienen hierro, y el hierro se oxida. En un río, la arena queda expuesta al aire y el óxido la tiñe de rojo intenso. Bajo el mar, en cambio, hay menos oxígeno y el tono se queda en amarillo u ocre.",
      "Fijaos en cualquier barandilla oxidada del pueblo: encontraréis los mismos colores que en la fuente."],
  en:["Both stones contain iron, and iron rusts. In a river the sand lies open to the air, and rust stains it deep red. Under the sea there is less oxygen, so the colour stops at yellow or ochre.",
      "Look at any rusty railing in the village: you will find the same two colours as in the fountain."],
  fr:["Les deux pierres contiennent du fer, et le fer rouille. Dans une rivière, le sable reste à l'air libre et la rouille le teinte de rouge vif. Sous la mer, en revanche, il y a moins d'oxygène et la teinte s'arrête au jaune ou à l'ocre.",
      "Regardez n'importe quelle rambarde rouillée du village : vous y retrouverez les couleurs de la fontaine."]}
},

/* ═══ PARADA 4 ═══════════════════════════════════════════════════════════ */
{
num:4, color:"#8E7A5E", foto:"fotos/p04.jpg",
nom:{
  ca:"L'església de Sant Martí i l'orgue barroc",
  es:"La iglesia de Sant Martí y el órgano barroco",
  en:"Sant Martí church and its baroque organ",
  fr:"L'église Sant Martí et son orgue baroque"},
peu:{
  ca:"Detall de la paret de l'església de Sant Martí",
  es:"Detalle de la pared de la iglesia de Sant Martí",
  en:"Detail of the wall of Sant Martí church",
  fr:"Détail du mur de l'église Sant Martí"},
intro:{
  ca:"Mireu de prop els blocs de la fotografia, a la dreta del panell: no són d'una sola pedra. Hi ha còdols de mides i colors diferents, arrodonits, enganxats entre si per un ciment natural. Cada còdol va ser abans un fragment de roca d'una muntanya, arrossegat aigües avall per rius de fa milions d'anys fins a arribar a la cantera d'on van extreure aquests blocs.",
  es:"Mirad de cerca los bloques de la fotografía, a la derecha del panel: no son de una sola piedra. Hay cantos de tamaños y colores distintos, redondeados, pegados entre sí por un cemento natural. Cada canto fue antes un fragmento de roca de una montaña, arrastrado aguas abajo por ríos de hace millones de años hasta llegar a la cantera de donde extrajeron estos bloques.",
  en:"Look closely at the blocks in the photograph, to the right of the panel: they are not made of a single stone. They contain pebbles of different sizes and colours, all rounded, held together by a natural cement. Each pebble was once a fragment of some mountain, carried downstream by rivers millions of years ago until it reached the quarry these blocks came from.",
  fr:"Regardez de près les blocs de la photographie, à droite du panneau : ils ne sont pas d'une seule pierre. On y voit des galets de tailles et de couleurs différentes, arrondis, collés entre eux par un ciment naturel. Chaque galet fut jadis un fragment de montagne, emporté vers l'aval par des rivières d'il y a des millions d'années jusqu'à la carrière d'où proviennent ces blocs."},
pregunta:{
  ca:"Per què els còdols del conglomerat són arrodonits i no punxeguts?",
  es:"¿Por qué los cantos del conglomerado son redondeados y no puntiagudos?",
  en:"Why are the pebbles in this conglomerate rounded rather than sharp?",
  fr:"Pourquoi les galets du conglomérat sont-ils arrondis et non pointus ?"},
opcions:[
  {t:{ca:"Perquè els va polir el picapedrer abans de col·locar-los",
      es:"Porque los pulió el cantero antes de colocarlos",
      en:"Because the stonemason polished them before laying them",
      fr:"Parce que le tailleur de pierre les a polis avant de les poser"}},
  {ok:true,
   t:{ca:"Perquè l'aigua els va anar desgastant mentre els arrossegava",
      es:"Porque el agua los fue desgastando mientras los arrastraba",
      en:"Because water wore them down as it carried them along",
      fr:"Parce que l'eau les a usés en les charriant"}},
  {t:{ca:"Perquè van créixer rodons dins la roca",
      es:"Porque crecieron redondos dentro de la roca",
      en:"Because they grew round inside the rock",
      fr:"Parce qu'ils ont poussé ronds dans la roche"}},
  {t:{ca:"Perquè el vent els va llimar durant segles",
      es:"Porque el viento los limó durante siglos",
      en:"Because the wind filed them down over centuries",
      fr:"Parce que le vent les a limés pendant des siècles"}}],
paraula:{ca:"ES", es:"SE", en:"THE", fr:"VILLAGE"},
expl:{
  ca:["Els còdols van baixar per rius i torrents xocant els uns amb els altres. A cada cop perdien una aresta, i al cap de quilòmetres van quedar ben arrodonits. Després, el fang i la sorra del voltant els van cimentar tots junts fins a formar una sola roca: el conglomerat.",
      "Fixeu-vos que n'hi ha de colors diferents: cada còdol ve d'una muntanya diferent del Pirineu. Si baixeu al riu també n'hi trobareu de ben arrodonits i de colors diversos."],
  es:["Los cantos bajaron por ríos y torrentes chocando unos con otros. A cada golpe perdían una arista, y al cabo de kilómetros quedaron bien redondeados. Después, el barro y la arena del entorno los cementaron todos juntos hasta formar una sola roca: el conglomerado.",
      "Fijaos en que los hay de colores distintos: cada canto viene de una montaña diferente del Pirineo. Si bajáis al río también los encontraréis bien redondeados y de colores diversos."],
  en:["The pebbles tumbled down rivers and torrents, knocking into one another. Every collision took off another edge, and after a few kilometres they were thoroughly rounded. Later, the surrounding mud and sand cemented them together into a single rock: conglomerate.",
      "Notice the different colours: each pebble comes from a different Pyrenean mountain. Down at the river you will find them just as round and just as varied."],
  fr:["Les galets ont dévalé rivières et torrents en se heurtant les uns aux autres. À chaque choc ils perdaient une arête, et au bout de quelques kilomètres ils étaient bien arrondis. Ensuite, la boue et le sable alentour les ont cimentés ensemble pour former une seule roche : le conglomérat.",
      "Remarquez leurs couleurs différentes : chaque galet vient d'une montagne différente des Pyrénées. Si vous descendez à la rivière, vous en trouverez d'aussi ronds et d'aussi variés."]}
},

/* ═══ PARADA 5 ═══════════════════════════════════════════════════════════ */
{
num:5, color:"#6F7377", foto:"fotos/p05.jpg",
nom:{
  ca:"Les cases nobles del Carrer Soldevila",
  es:"Las casas nobles de la Calle Soldevila",
  en:"The noble houses of Carrer Soldevila",
  fr:"Les maisons nobles du Carrer Soldevila"},
peu:{
  ca:"La portalada tapiada de l'església de Sant Martí",
  es:"La portada tapiada de la iglesia de Sant Martí",
  en:"The walled-up doorway of Sant Martí church",
  fr:"Le portail muré de l'église Sant Martí"},
intro:{
  ca:"Mireu la portalada: l'arc és fet de carreus grisos, tots iguals, molt ben tallats i escairats. La paret que el tapia, en canvi, és una barreja de pedres vermelles, groguenques i fosques. Dues maneres de construir, i dos moments ben distints.",
  es:"Mirad la portada: el arco está hecho de sillares grises, todos iguales, muy bien tallados y escuadrados. La pared que lo tapia, en cambio, es una mezcla de piedras rojas, amarillentas y oscuras. Dos maneras de construir, y dos momentos bien distintos.",
  en:"Look at the doorway: the arch is built of grey blocks, all alike, carefully cut and squared. The wall that seals it, by contrast, is a jumble of red, yellow and dark stones. Two ways of building, from two very different moments.",
  fr:"Regardez le portail : l'arc est fait de blocs gris, tous semblables, soigneusement taillés et équarris. Le mur qui l'obture, en revanche, est un mélange de pierres rouges, jaunes et sombres. Deux façons de bâtir, à deux moments bien distincts."},
pregunta:{
  ca:"Per què les pedres de l'arc són totes iguals i les de la paret que el tapia, no?",
  es:"¿Por qué las piedras del arco son todas iguales y las de la pared que lo tapia, no?",
  en:"Why are the stones of the arch all alike, while those of the wall sealing it are not?",
  fr:"Pourquoi les pierres de l'arc sont-elles toutes semblables, et non celles du mur qui l'obture ?"},
opcions:[
  {t:{ca:"Perquè les pedres de l'arc s'han descolorit amb el temps",
      es:"Porque las piedras del arco se han descolorido con el tiempo",
      en:"Because the arch stones have faded over time",
      fr:"Parce que les pierres de l'arc se sont décolorées avec le temps"}},
  {t:{ca:"Perquè l'arc és molt més modern que la paret",
      es:"Porque el arco es mucho más moderno que la pared",
      en:"Because the arch is far more recent than the wall",
      fr:"Parce que l'arc est bien plus récent que le mur"}},
  {ok:true,
   t:{ca:"Perquè l'arc es va fer amb pedra escollida i tallada, i la paret es va tapiar amb pedra del voltant",
      es:"Porque el arco se hizo con piedra escogida y tallada, y la pared se tapió con piedra de los alrededores",
      en:"Because the arch used chosen, dressed stone, while the wall was sealed with whatever stone lay nearby",
      fr:"Parce que l'arc a été fait de pierre choisie et taillée, et le mur bouché avec la pierre des environs"}},
  {t:{ca:"Perquè la paret es va fer amb pedres portades de fora",
      es:"Porque la pared se hizo con piedras traídas de fuera",
      en:"Because the wall was built with stone brought from elsewhere",
      fr:"Parce que le mur a été fait de pierres venues d'ailleurs"}}],
paraula:{ca:"VA", es:"DESCUBRIÓ", en:"VERY", fr:"OÙ"},
expl:{
  ca:["Una portalada d'església era una obra visible i important: s'hi va invertir pedra uniforme, de bona qualitat i treballada amb cura. Tapiar-la, en canvi, era una feina pràctica, i s'hi va fer servir el que hi havia a mà: grès vermell, grès groc, lutites… la mateixa varietat de roques que trobeu pels camins de Talarn.",
      "Mirant els colors d'una paret podeu endevinar si la pedra va venir de lluny o de quatre passes d'aquí."],
  es:["Una portada de iglesia era una obra visible e importante: se invirtió en ella piedra uniforme, de buena calidad y trabajada con esmero. Tapiarla, en cambio, era una faena práctica, y se usó lo que había a mano: arenisca roja, arenisca amarilla, lutitas… la misma variedad de rocas que encontráis por los caminos de Talarn.",
      "Mirando los colores de una pared podéis adivinar si la piedra vino de lejos o de cuatro pasos de aquí."],
  en:["A church doorway was a public, important piece of work: it deserved uniform, good-quality stone, carefully dressed. Sealing it, on the other hand, was a practical job, done with whatever was to hand: red sandstone, yellow sandstone, mudstone — the same mix of rocks you meet on the paths around Talarn.",
      "By reading the colours of a wall you can guess whether its stone travelled far or came from a few steps away."],
  fr:["Un portail d'église était un ouvrage visible et important : on y a investi une pierre uniforme, de bonne qualité, travaillée avec soin. L'obturer, en revanche, était un travail pratique, fait avec ce qu'on avait sous la main : grès rouge, grès jaune, lutites… la même variété de roches que sur les chemins de Talarn.",
      "En lisant les couleurs d'un mur, vous pouvez deviner si la pierre vient de loin ou de quelques pas d'ici."]}
},

/* ═══ PARADA 6 ═══════════════════════════════════════════════════════════ */
{
num:6, color:"#C08A46", foto:"fotos/p06.jpg",
nom:{
  ca:"La torre de la presó del Castell",
  es:"La torre de la prisión del Castillo",
  en:"The prison tower of the castle",
  fr:"La tour-prison du château"},
peu:{
  ca:"La roca on s'assenta el castell de Talarn",
  es:"La roca sobre la que se asienta el castillo",
  en:"The bedrock the castle stands on",
  fr:"Le rocher sur lequel repose le château"},
intro:{
  ca:"Mireu la roca on s'assenta el castell: hi veureu capes de grès, però no són planes. Estan inclinades. Aquestes capes de grès i lutita eren originalment nivells de sorra i llim dipositats en una plana fluvial gairebé al nivell del mar i ben horitzontals. Ara les trobem a 550 metres d'altitud i inclinades cap al sud-oest.",
  es:"Mirad la roca sobre la que se asienta el castillo: veréis capas de arenisca, pero no son planas. Están inclinadas. Estas capas de arenisca y lutita eran originalmente niveles de arena y limo depositados en una llanura fluvial casi al nivel del mar y bien horizontales. Ahora las encontramos a 550 metros de altitud e inclinadas hacia el suroeste.",
  en:"Look at the rock the castle sits on: you will see layers of sandstone, but they are not flat. They tilt. These beds of sandstone and mudstone were originally sheets of sand and silt laid down on a river plain, almost at sea level and perfectly horizontal. Today we find them 550 metres up, tilted towards the south-west.",
  fr:"Regardez le rocher sur lequel repose le château : vous verrez des couches de grès, mais elles ne sont pas planes. Elles sont inclinées. Ces couches de grès et de lutite étaient à l'origine des nappes de sable et de limon déposées dans une plaine fluviale, presque au niveau de la mer et parfaitement horizontales. Aujourd'hui on les trouve à 550 mètres d'altitude, inclinées vers le sud-ouest."},
pregunta:{
  ca:"Aquestes capes es van formar horitzontals, al nivell del mar. Per què ara les veiem inclinades i a 550 metres d'altitud?",
  es:"Estas capas se formaron horizontales, al nivel del mar. ¿Por qué ahora las vemos inclinadas y a 550 metros de altitud?",
  en:"These beds formed horizontally, at sea level. Why do we now see them tilted, 550 metres up?",
  fr:"Ces couches se sont formées horizontales, au niveau de la mer. Pourquoi les voyons-nous aujourd'hui inclinées, à 550 mètres d'altitude ?"},
opcions:[
  {ok:true,
   t:{ca:"Perquè durant la formació dels Pirineus les va aixecar i les va tombar",
      es:"Porque durante la formación de los Pirineos las levantó y las volcó",
      en:"Because the rise of the Pyrenees lifted them and tipped them over",
      fr:"Parce que la formation des Pyrénées les a soulevées et basculées"}},
  {t:{ca:"Perquè el mar va baixar de nivell i les va deixar penjades",
      es:"Porque el mar bajó de nivel y las dejó colgadas",
      en:"Because the sea dropped and left them stranded up there",
      fr:"Parce que la mer a baissé et les a laissées perchées"}},
  {t:{ca:"Perquè els constructors del castell les van inclinar per assentar-hi els fonaments",
      es:"Porque los constructores del castillo las inclinaron para asentar los cimientos",
      en:"Because the castle builders tilted them to seat the foundations",
      fr:"Parce que les bâtisseurs du château les ont inclinées pour asseoir les fondations"}},
  {t:{ca:"Perquè la pluja n'ha erosionat un costat més que l'altre",
      es:"Porque la lluvia ha erosionado un lado más que el otro",
      en:"Because rain has eroded one side more than the other",
      fr:"Parce que la pluie a érodé un côté plus que l'autre"}}],
paraula:{ca:"DESCOBRIR", es:"EL", en:"FIRST", fr:"FUT"},
expl:{
  ca:["Els sediments es dipositen generalment en capes horitzontals. Si les trobem tombades, és que alguna cosa les ha mogut després. En aquest cas, el xoc entre dues plaques tectòniques va plegar i aixecar les capes de roca de la regió i va formar els Pirineus. Les capes del castell van pujar 550 metres i van quedar inclinades cap al sud-oest.",
      "Fixeu-vos en les roques de la presa de Talarn: hi retrobareu les mateixes capes seguint el mateix pendent."],
  es:["Los sedimentos se depositan generalmente en capas horizontales. Si las encontramos volcadas, es que algo las ha movido después. En este caso, el choque entre dos placas tectónicas plegó y levantó las capas de roca de la región y formó los Pirineos. Las capas del castillo subieron 550 metros y quedaron inclinadas hacia el suroeste.",
      "Fijaos en las rocas de la presa de Talarn: allí reencontraréis las mismas capas siguiendo la misma pendiente."],
  en:["Sediment normally settles in horizontal layers. If we find them tipped over, something moved them afterwards. Here, the collision of two tectonic plates folded and lifted the region's rock and built the Pyrenees. The castle's beds rose 550 metres and ended up tilting south-west.",
      "Look at the rocks by the Talarn dam: the same beds are there, following the same slope."],
  fr:["Les sédiments se déposent généralement en couches horizontales. Si on les trouve basculées, c'est que quelque chose les a déplacées ensuite. Ici, la collision de deux plaques tectoniques a plissé et soulevé les roches de la région et formé les Pyrénées. Les couches du château sont montées de 550 mètres et se sont inclinées vers le sud-ouest.",
      "Regardez les roches du barrage de Talarn : vous y retrouverez les mêmes couches, suivant la même pente."]}
},

/* ═══ PARADA 7 ═══════════════════════════════════════════════════════════ */
{
num:7, color:"#7E6B70", foto:"fotos/p07.jpg",
nom:{
  ca:"Els cellers de Talarn",
  es:"Las bodegas de Talarn",
  en:"The wine cellars of Talarn",
  fr:"Les caves à vin de Talarn"},
peu:{
  ca:"La plaça del Vi",
  es:"La plaza del Vino",
  en:"Plaça del Vi, the wine square",
  fr:"La Plaça del Vi, place du Vin"},
intro:{
  ca:"Mireu aquesta cantonada de prop. Tots els carreus porten els mateixos anys a la paret i han rebut la mateixa pluja, però alguns es mantenen sencers i d'altres s'han anat buidant i escrostonant fins a deixar una cantonera molt irregular. La diferència no és l'edat: és la pedra.",
  es:"Mirad esta esquina de cerca. Todos los sillares llevan los mismos años en la pared y han recibido la misma lluvia, pero algunos se mantienen enteros y otros se han ido vaciando y descostrando hasta dejar una esquina muy irregular. La diferencia no es la edad: es la piedra.",
  en:"Look closely at this corner. Every block has stood in the wall for the same number of years and taken the same rain, yet some remain whole while others have hollowed and flaked away until the corner is badly ragged. The difference is not age: it is the stone.",
  fr:"Regardez cet angle de près. Tous les blocs ont le même âge dans le mur et ont reçu la même pluie, pourtant certains restent intacts et d'autres se sont creusés et écaillés jusqu'à laisser un angle très irrégulier. La différence n'est pas l'âge : c'est la pierre."},
pregunta:{
  ca:"Per què algunes pedres d'aquesta paret estan enfonsades i desfetes, i les del costat es mantenen senceres?",
  es:"¿Por qué algunas piedras de esta pared están hundidas y deshechas, y las de al lado se mantienen enteras?",
  en:"Why are some stones in this wall sunken and crumbling while those beside them are intact?",
  fr:"Pourquoi certaines pierres de ce mur sont-elles creusées et délitées, alors que celles d'à côté restent intactes ?"},
opcions:[
  {t:{ca:"Perquè les pedres desfetes es van col·locar molt més tard",
      es:"Porque las piedras deshechas se colocaron mucho más tarde",
      en:"Because the crumbling stones were laid much later",
      fr:"Parce que les pierres délitées ont été posées bien plus tard"}},
  {t:{ca:"Perquè els paletes les van picar per fer-hi encaixar el morter",
      es:"Porque los albañiles las picaron para encajar el mortero",
      en:"Because the masons chipped them to key in the mortar",
      fr:"Parce que les maçons les ont piquées pour faire tenir le mortier"}},
  {ok:true,
   t:{ca:"Perquè són roques més toves i la pluja les desgasta abans",
      es:"Porque son rocas más blandas y la lluvia las desgasta antes",
      en:"Because they are softer rocks and the rain wears them away faster",
      fr:"Parce que ce sont des roches plus tendres, que la pluie use plus vite"}},
  {t:{ca:"Perquè els bolets i les molses se les han anat menjant",
      es:"Porque las setas y los musgos se las han ido comiendo",
      en:"Because fungi and moss have eaten into them",
      fr:"Parce que les champignons et les mousses les ont rongées"}}],
paraula:{ca:"EL", es:"PRIMER", en:"DINOSAUR", fr:"DÉCOUVERT"},
expl:{
  ca:["Les pedres senceres són de grès: grans de sorra ben cimentats, dures i resistents. Les enfonsades són de lutita, feta de fang molt fi, molt més tova. L'aigua de pluja se li fica entre les capes, la va estovant i la va erosionant poc a poc.",
      "Si aneu mirant les parets del poble trobareu aquest contrast en molts indrets."],
  es:["Las piedras enteras son de arenisca: granos de arena bien cementados, duros y resistentes. Las hundidas son de lutita, hecha de barro muy fino, mucho más blanda. El agua de lluvia se le mete entre las capas, la va ablandando y la erosiona poco a poco.",
      "Si vais mirando las paredes del pueblo encontraréis este contraste en muchos sitios."],
  en:["The intact stones are sandstone: sand grains firmly cemented, hard and resistant. The hollowed ones are mudstone, made of very fine mud and far softer. Rainwater works its way between its layers, softens it and carries it off little by little.",
      "Keep looking at walls as you go through the village and you will find the same contrast again and again."],
  fr:["Les pierres intactes sont du grès : des grains de sable bien cimentés, durs et résistants. Les pierres creusées sont de la lutite, faite d'une boue très fine, bien plus tendre. L'eau de pluie s'infiltre entre ses feuillets, la ramollit et l'emporte peu à peu.",
      "Regardez les murs en parcourant le village : vous retrouverez ce contraste un peu partout."]}
},

/* ═══ PARADA 8 ═══════════════════════════════════════════════════════════ */
{
num:8, color:"#C9C3B2", foto:"fotos/p08.jpg",
nom:{
  ca:"Les cases nobles del Portal de Caps",
  es:"Las casas nobles del Portal de Caps",
  en:"The noble houses of Portal de Caps",
  fr:"Les maisons nobles du Portal de Caps"},
peu:{
  ca:"La torre arrebossada del Portal de Caps",
  es:"La torre revocada del Portal de Caps",
  en:"The rendered tower at Portal de Caps",
  fr:"La tour enduite du Portal de Caps"},
intro:{
  ca:"La paret d'aquesta torre no ensenya la pedra: la tapa una capa d'arrebossat. Sembla un material fabricat, molt diferent dels carreus que hi ha a sota. Però si mireu d'on surt cadascun dels seus ingredients, hi retrobareu la mateixa geologia de sempre.",
  es:"La pared de esta torre no enseña la piedra: la tapa una capa de revoco. Parece un material fabricado, muy distinto de los sillares que hay debajo. Pero si miráis de dónde sale cada uno de sus ingredientes, reencontraréis la misma geología de siempre.",
  en:"This tower's wall does not show its stone: a layer of render covers it. It looks like a manufactured material, quite unlike the blocks beneath. But trace each of its ingredients back to its source and you meet the same old geology.",
  fr:"Le mur de cette tour ne montre pas sa pierre : une couche d'enduit la recouvre. Cela ressemble à un matériau fabriqué, très différent des blocs qui sont dessous. Mais si vous cherchez d'où vient chacun de ses ingrédients, vous retrouverez la même géologie que partout ailleurs."},
pregunta:{
  ca:"L'arrebossat d'aquesta paret és una barreja de sorra, aigua i un pols blanc o gris que fa d'aglomerant. D'on surt aquest pols?",
  es:"El revoco de esta pared es una mezcla de arena, agua y un polvo blanco o gris que hace de aglomerante. ¿De dónde sale ese polvo?",
  en:"The render on this wall is a mix of sand, water and a white or grey powder that binds it. Where does that powder come from?",
  fr:"L'enduit de ce mur est un mélange de sable, d'eau et d'une poudre blanche ou grise qui sert de liant. D'où vient cette poudre ?"},
opcions:[
  {t:{ca:"D'una argila cuita al forn, com la de les teules",
      es:"De una arcilla cocida en el horno, como la de las tejas",
      en:"From clay fired in a kiln, like roof tiles",
      fr:"D'une argile cuite au four, comme celle des tuiles"}},
  {t:{ca:"De guix mòlt extret de les mines",
      es:"De yeso molido extraído de las minas",
      en:"From gypsum ground up out of mines",
      fr:"Du gypse broyé extrait des mines"}},
  {ok:true,
   t:{ca:"De roca calcària amb argila, cuita al forn fins que es desfà en pols",
      es:"De roca caliza con arcilla, cocida en el horno hasta deshacerse en polvo",
      en:"From limestone with clay, fired until it crumbles into powder",
      fr:"De calcaire mêlé d'argile, cuit au four jusqu'à se réduire en poudre"}},
  {t:{ca:"De sorra molt fina passada per un sedàs",
      es:"De arena muy fina pasada por un tamiz",
      en:"From very fine sand put through a sieve",
      fr:"De sable très fin passé au tamis"}}],
paraula:{ca:"PRIMER", es:"DINOSAURIO", en:"IN", fr:"LE"},
expl:{
  ca:["L'arrebossat tradicional es feia amb calcària cuita al forn a alta temperatura fins a convertir-se en pols. Barrejada amb sorra i aigua, s'escampa per la paret i en assecar-se torna a agafar duresa de pedra. El ciment modern es fabrica igual, però afegint argila i altres additius a la calcària abans de coure-la, perquè sigui més dur i s'endureixi més de pressa.",
      "Una paret arrebossada és, doncs, roca per fora i roca per dins: només canvia la forma."],
  es:["El revoco tradicional se hacía con caliza cocida en el horno a alta temperatura hasta convertirse en polvo. Mezclada con arena y agua, se extiende por la pared y al secarse vuelve a coger dureza de piedra. El cemento moderno se fabrica igual, pero añadiendo arcilla y otros aditivos a la caliza antes de cocerla, para que sea más duro y endurezca más deprisa.",
      "Una pared revocada es, pues, roca por fuera y roca por dentro: solo cambia la forma."],
  en:["Traditional render was made from limestone fired at high temperature until it turned to powder. Mixed with sand and water it spreads across a wall, and as it dries it takes on the hardness of stone again. Modern cement is made the same way, but with clay and other additives blended into the limestone before firing, to make it harder and quicker-setting.",
      "A rendered wall, then, is rock outside and rock inside: only the shape has changed."],
  fr:["L'enduit traditionnel se faisait avec du calcaire cuit à haute température jusqu'à se réduire en poudre. Mélangé à du sable et de l'eau, il s'étale sur le mur et, en séchant, retrouve la dureté de la pierre. Le ciment moderne se fabrique de la même façon, mais en ajoutant de l'argile et d'autres adjuvants au calcaire avant la cuisson, pour qu'il soit plus dur et prenne plus vite.",
      "Un mur enduit est donc de la roche dehors et de la roche dedans : seule la forme change."]}
},

/* ═══ PARADA 9 ═══════════════════════════════════════════════════════════ */
{
num:9, color:"#B79C6B", foto:"fotos/p09.jpg",
nom:{
  ca:"El Portal de Caps",
  es:"El Portal de Caps",
  en:"Portal de Caps",
  fr:"Le Portal de Caps"},
peu:{
  ca:"El carreu marcat, a la base de la torre",
  es:"El sillar marcado, en la base de la torre",
  en:"The marked block at the foot of the tower",
  fr:"Le bloc entouré, à la base de la tour"},
intro:{
  ca:"Fixeu-vos en el carreu gran de la torre: la superfície és plena de foradets i clotets, com si l'haguessin picada. No ho ha fet ningú. És la mateixa pedra que es va desfent de dins estant, en un procés lent que encara continua avui.",
  es:"Fijaos en el sillar grande de la torre: la superficie está llena de agujeritos y hoyos, como si la hubieran picado. No lo ha hecho nadie. Es la propia piedra que se va deshaciendo por dentro, en un proceso lento que aún continúa hoy.",
  en:"Look at the large block in the tower: its surface is covered in small holes and pits, as though someone had chipped at it. Nobody did. It is the stone itself coming apart from the inside, in a slow process that is still going on today.",
  fr:"Observez le grand bloc de la tour : sa surface est criblée de petits trous et de cupules, comme si on l'avait piquée. Personne ne l'a fait. C'est la pierre elle-même qui se défait de l'intérieur, dans un processus lent qui se poursuit encore aujourd'hui."},
pregunta:{
  ca:"Aquest bloc de grès és ple de foradets. Qui els hi ha fet?",
  es:"Este bloque de arenisca está lleno de agujeritos. ¿Quién se los ha hecho?",
  en:"This sandstone block is full of little holes. Who made them?",
  fr:"Ce bloc de grès est plein de petits trous. Qui les a faits ?"},
opcions:[
  {t:{ca:"El picapedrer, per poder-hi lligar les cordes i aixecar el bloc",
      es:"El cantero, para atar las cuerdas y levantar el bloque",
      en:"The stonemason, to tie ropes round it and lift the block",
      fr:"Le tailleur de pierre, pour y attacher les cordes et lever le bloc"}},
  {t:{ca:"Insectes i ocells que hi fan el niu",
      es:"Insectos y pájaros que anidan en ella",
      en:"Insects and birds nesting in it",
      fr:"Des insectes et des oiseaux qui y nichent"}},
  {t:{ca:"El vent, clavant-hi sorra durant segles",
      es:"El viento, clavándole arena durante siglos",
      en:"The wind, driving sand against it for centuries",
      fr:"Le vent, y projetant du sable pendant des siècles"}},
  {ok:true,
   t:{ca:"L'aigua de pluja, que ha anat dissolent la pedra per dins",
      es:"El agua de lluvia, que ha ido disolviendo la piedra por dentro",
      en:"Rainwater, slowly dissolving the stone from within",
      fr:"L'eau de pluie, qui dissout peu à peu la pierre de l'intérieur"}}],
paraula:{ca:"DINOSAURE", es:"DE", en:"CATALONIA", fr:"PREMIER"},
expl:{
  ca:["El grès és sorra enganxada. Els grans de sorra són duríssims, però el ciment que els manté units és carbonat càlcic: la mateixa calç que trobàvem a l'arrebossat de la parada anterior.",
      "L'aigua lleugerament àcida que s'infiltra a la roca va dissolent aquest ciment. Sense res que els subjecti, els grans de sorra cauen i el forat es va fent gran.",
      "Aquest fenomen s'anomena <em>carstificació</em>. Als voltants de Talarn, especialment prop de l'embassament, el veureu per tot arreu: és el comportament típic dels gresos de la Costa Ampla."],
  es:["La arenisca es arena pegada. Los granos de arena son durísimos, pero el cemento que los mantiene unidos es carbonato cálcico: la misma cal que encontrábamos en el revoco de la parada anterior.",
      "El agua ligeramente ácida que se infiltra en la roca va disolviendo ese cemento. Sin nada que los sujete, los granos de arena caen y el agujero se agranda.",
      "Este fenómeno se llama <em>carstificación</em>. En los alrededores de Talarn, especialmente cerca del embalse, lo veréis por todas partes: es el comportamiento típico de las areniscas de la Costa Ampla."],
  en:["Sandstone is glued-together sand. The grains themselves are extremely hard, but the cement holding them is calcium carbonate: the same lime we met in the render at the previous stop.",
      "Slightly acidic water seeping into the rock dissolves that cement away. With nothing to hold them, the sand grains drop out and the hole grows.",
      "This process is called <em>karstification</em>. Around Talarn, especially near the reservoir, you will see it everywhere: it is how the Costa Ampla sandstones behave."],
  fr:["Le grès, c'est du sable collé. Les grains de sable sont extrêmement durs, mais le ciment qui les lie est du carbonate de calcium : la même chaux que dans l'enduit de l'étape précédente.",
      "L'eau légèrement acide qui s'infiltre dans la roche dissout ce ciment. Plus rien ne les retenant, les grains de sable tombent et le trou s'agrandit.",
      "Ce phénomène s'appelle la <em>karstification</em>. Autour de Talarn, surtout près du barrage, vous le verrez partout : c'est le comportement typique des grès de la Costa Ampla."]}
},

/* ═══ PARADA 10 ══════════════════════════════════════════════════════════ */
{
num:10, color:"#6E5A6B", foto:"fotos/p10.jpg",
nom:{
  ca:"El safareig",
  es:"El lavadero",
  en:"The public washhouse",
  fr:"Le lavoir"},
peu:{
  ca:"Els carreus marcats, al mur del safareig",
  es:"Los sillares marcados, en el muro del lavadero",
  en:"The marked blocks in the washhouse wall",
  fr:"Les blocs entourés, dans le mur du lavoir"},
intro:{
  ca:"Mireu aquests carreus: no són d'un color uniforme, sinó clapejats de lila, gris i vermellós. Aquestes taques no són brutícia ni humitat. Són la marca d'un terreny on abans hi creixien plantes, endurit i convertit en pedra fa milions d'anys.",
  es:"Mirad estos sillares: no son de un color uniforme, sino moteados de lila, gris y rojizo. Estas manchas no son suciedad ni humedad. Son la marca de un terreno donde antes crecían plantas, endurecido y convertido en piedra hace millones de años.",
  en:"Look at these blocks: instead of one even colour they are mottled with lilac, grey and reddish patches. These stains are neither dirt nor damp. They are the mark of ground where plants once grew, hardened into stone millions of years ago.",
  fr:"Regardez ces blocs : au lieu d'une couleur unie, ils sont marbrés de lilas, de gris et de rougeâtre. Ces taches ne sont ni de la saleté ni de l'humidité. Ce sont les traces d'un terrain où poussaient autrefois des plantes, durci et changé en pierre il y a des millions d'années."},
pregunta:{
  ca:"Aquesta pedra clapejada de lila i gris, què era abans de ser pedra?",
  es:"Esta piedra moteada de lila y gris, ¿qué era antes de ser piedra?",
  en:"This stone, mottled lilac and grey — what was it before it was stone?",
  fr:"Cette pierre marbrée de lilas et de gris, qu'était-elle avant d'être pierre ?"},
opcions:[
  {ok:true,
   t:{ca:"Terra d'un camp, amb arrels i plantes",
      es:"Tierra de un campo, con raíces y plantas",
      en:"Soil from a field, with roots and plants in it",
      fr:"De la terre d'un champ, avec des racines et des plantes"}},
  {t:{ca:"Cendra d'un volcà",
      es:"Ceniza de un volcán",
      en:"Ash from a volcano",
      fr:"De la cendre de volcan"}},
  {t:{ca:"Fang del fons d'un llac profund",
      es:"Barro del fondo de un lago profundo",
      en:"Mud from the bottom of a deep lake",
      fr:"De la vase du fond d'un lac profond"}},
  {t:{ca:"Sorra d'una platja",
      es:"Arena de una playa",
      en:"Sand from a beach",
      fr:"Du sable de plage"}}],
paraula:{ca:"DE", es:"TODA", en:"WAS", fr:"DINOSAURE"},
expl:{
  ca:["Era un sòl: terra de veritat, en una plana on el riu es desbordava de tant en tant. Les arrels s'hi endinsaven i l'aigua hi pujava i baixava, i aquest anar i venir va deixar les taques de colors que hi veieu. Després, una nova crescuda el va enterrar sota més fang, i el sòl va quedar guardat. Els geòlegs en diuen <em>paleosol</em>: un sòl antic convertit en roca.",
      "Aquesta pedra no ve de gaire lluny. Si baixeu pel carrer de la Serra, la trobareu al talús de mà dreta en la seva posició original. Un sòl que trepitjaven els animals de fa uns 60 milions d'anys."],
  es:["Era un suelo: tierra de verdad, en una llanura donde el río se desbordaba de vez en cuando. Las raíces se adentraban en él y el agua subía y bajaba, y ese ir y venir dejó las manchas de colores que veis. Después, una nueva crecida lo enterró bajo más barro, y el suelo quedó guardado. Los geólogos lo llaman <em>paleosuelo</em>: un suelo antiguo convertido en roca.",
      "Esta piedra no viene de muy lejos. Si bajáis por la calle de la Serra, la encontraréis en el talud de la derecha en su posición original. Un suelo que pisaban los animales de hace unos 60 millones de años."],
  en:["It was a soil: real earth, on a plain where the river burst its banks from time to time. Roots pushed down into it and the water table rose and fell, and that coming and going left the coloured mottling you can see. Then a new flood buried it under more mud, and the soil was saved. Geologists call it a <em>palaeosol</em>: an ancient soil turned to rock.",
      "This stone did not travel far. Walk down Carrer de la Serra and you will find it in the bank on your right, still in its original position. A soil once trodden by animals some 60 million years ago."],
  fr:["C'était un sol : de la vraie terre, dans une plaine où la rivière débordait de temps à autre. Les racines s'y enfonçaient et l'eau montait et descendait, et ce va-et-vient a laissé les taches colorées que vous voyez. Puis une nouvelle crue l'a enseveli sous d'autres boues, et le sol s'est conservé. Les géologues appellent cela un <em>paléosol</em> : un sol ancien devenu roche.",
      "Cette pierre ne vient pas de loin. Si vous descendez le Carrer de la Serra, vous la trouverez dans le talus de droite, à sa place d'origine. Un sol que foulaient les animaux d'il y a quelque 60 millions d'années."]}
},

/* ═══ PARADA 11 ══════════════════════════════════════════════════════════ */
{
num:11, color:"#2E3A31", foto:"fotos/p11.jpg",
nom:{
  ca:"La Font de Caps",
  es:"La Fuente de Caps",
  en:"The Font de Caps fountain",
  fr:"La Font de Caps"},
peu:{
  ca:"El bloc d'ofita, al pilar davant de la font",
  es:"El bloque de ofita, en el pilar frente a la fuente",
  en:"The ophite block on the pillar facing the fountain",
  fr:"Le bloc d'ophite, sur le pilier face à la fontaine"},
intro:{
  ca:"Aquest bloc, al pilar de l'altra banda del carrer davant de la font, no s'assembla a cap altra pedra de la ruta: és fosc, verdós i clapejat, sense capes ni grans de sorra. Es diu ofita, d'ofidi, serp, perquè la textura recorda una pell de serp. I no és originària de Talarn.",
  es:"Este bloque, en el pilar del otro lado de la calle frente a la fuente, no se parece a ninguna otra piedra de la ruta: es oscuro, verdoso y moteado, sin capas ni granos de arena. Se llama ofita, de ofidio, serpiente, porque su textura recuerda una piel de serpiente. Y no es originaria de Talarn.",
  en:"This block, on the pillar across the street from the fountain, looks like nothing else on the trail: dark, greenish and mottled, with no layers and no sand grains. It is called ophite, from <em>ophis</em>, snake, because its texture recalls a snakeskin. And it is not native to Talarn.",
  fr:"Ce bloc, sur le pilier de l'autre côté de la rue face à la fontaine, ne ressemble à aucune autre pierre du parcours : sombre, verdâtre et moucheté, sans couches ni grains de sable. On l'appelle ophite, d'<em>ophis</em>, serpent, car sa texture évoque une peau de serpent. Et il n'est pas originaire de Talarn."},
pregunta:{
  ca:"Totes les pedres que heu vist avui es van formar aquí mateix. Aquesta, no. Com creieu que hi va arribar?",
  es:"Todas las piedras que habéis visto hoy se formaron aquí mismo. Esta, no. ¿Cómo creéis que llegó?",
  en:"Every stone you have seen today formed right here. This one did not. How do you think it arrived?",
  fr:"Toutes les pierres que vous avez vues aujourd'hui se sont formées ici même. Celle-ci, non. Comment croyez-vous qu'elle est arrivée ?"},
opcions:[
  {t:{ca:"La van portar amb vaixell des d'un país llunyà",
      es:"La trajeron en barco desde un país lejano",
      en:"It was shipped in from a distant country",
      fr:"On l'a apportée par bateau d'un pays lointain"}},
  {ok:true,
   t:{ca:"L'aigua la va arrossegar riu avall des de les muntanyes de dalt",
      es:"El agua la arrastró río abajo desde las montañas de arriba",
      en:"Water carried it downstream from the mountains above",
      fr:"L'eau l'a charriée depuis les montagnes en amont"}},
  {t:{ca:"Va sortir del terra quan van excavar la font",
      es:"Salió del suelo cuando excavaron la fuente",
      en:"It came out of the ground when the fountain was dug",
      fr:"Elle est sortie du sol lors du creusement de la fontaine"}},
  {t:{ca:"És una pedra artificial, fabricada al poble",
      es:"Es una piedra artificial, fabricada en el pueblo",
      en:"It is an artificial stone, made in the village",
      fr:"C'est une pierre artificielle, fabriquée au village"}}],
paraula:{ca:"CATALUNYA", es:"CATALUÑA", en:"DISCOVERED", fr:"CATALAN"},
expl:{
  ca:["L'ofita és una roca volcànica: no ve de sorra ni de fang, sinó de roca fosa que es va refredar dins la terra. A la nostra comarca només la trobem al seu lloc d'origen aigües amunt, cap a Gerri de la Sal i Senterada.",
      "D'allà va baixar rodolant amb la Noguera Pallaresa, com un còdol més, fins que algú la va veure, li va agradar i la va pujar fins aquí per col·locar-la en aquest pilar. Si aneu al riu i busqueu amb atenció, segur que en trobeu alguna."],
  es:["La ofita es una roca volcánica: no viene de arena ni de barro, sino de roca fundida que se enfrió dentro de la tierra. En nuestra comarca solo la encontramos en su lugar de origen aguas arriba, hacia Gerri de la Sal y Senterada.",
      "De allí bajó rodando con la Noguera Pallaresa, como un canto más, hasta que alguien la vio, le gustó y la subió hasta aquí para colocarla en este pilar. Si vais al río y buscáis con atención, seguro que encontráis alguna."],
  en:["Ophite is a volcanic rock: it comes not from sand or mud but from molten rock that cooled underground. In this county we only find it in place upstream, towards Gerri de la Sal and Senterada.",
      "From there it tumbled down with the Noguera Pallaresa river, just another pebble, until somebody spotted it, liked it, and carried it up here to set on this pillar. Go down to the river and look carefully — you are sure to find one."],
  fr:["L'ophite est une roche volcanique : elle ne vient ni du sable ni de la boue, mais d'une roche en fusion refroidie dans la terre. Dans notre comarque, on ne la trouve en place qu'en amont, vers Gerri de la Sal et Senterada.",
      "De là elle a dévalé avec la Noguera Pallaresa, comme un galet parmi d'autres, jusqu'à ce que quelqu'un la remarque, l'apprécie et la monte ici pour la poser sur ce pilier. Descendez à la rivière et cherchez bien : vous en trouverez sûrement."]}
}

];
