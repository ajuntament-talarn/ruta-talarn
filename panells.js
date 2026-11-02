/* ==========================================================================
   RUTA URBANA DE TALARN — CONTINGUTS DELS PANELLS
   Ajuntament de Talarn · Geoparc Mundial UNESCO Orígens

   Textos interpretatius dels panells físics en tres idiomes:
     es = castellà   en = anglès   fr = francès

   Estructura: PANELLS[i].es / .en / .fr
   Cada idioma és un array de seccions {titol, paras:[...]}
   ========================================================================== */

const PANELLS = [

/* ── PARADA 1 ──────────────────────────────────────────────────────────── */
{
  num: 1,
  nom: {
    es: "La Villa de Talarn",
    en: "The Town of Talarn",
    fr: "Le Village de Talarn"
  },
  es: [
    {
      titol: "Una villa con mil años de historia",
      paras: [
        "Talarn es una villa privilegiada. Construida sobre una colina que domina toda la Cuenca de Tremp, su posición estratégica le ha proporcionado seguridad y un clima más benigno que el de los valles. Al este, el río Noguera Pallaresa dibuja su límite natural.",
        "Sus orígenes se remontan al siglo VII aC, pero es en la Edad Media cuando la villa vive su gran esplendor. En el siglo XI se construyen el castillo y la iglesia de Sant Martí, y poco después se levanta la muralla con sus dos puertas. En 1453, la reina María la proclama capital de la subveguería del Pallars. En 1716, Talarn se convierte en capital del Corregimiento. Durante el siglo XVIII la villa cuenta con molino de harina y de aceite, horno de pan, carnicería, posada e imprenta."
      ]
    },
    {
      titol: "La fauna urbana de Talarn",
      paras: [
        "Pasear por Talarn permite descubrir una naturaleza sorprendente. En los muros de las casas y en los tejados crían aves como el gorrión común, el petirrojo tizón, el herrerillo o el roquero solitario. En verano, vencejos y aviones roqueros entran y salen de sus nidos. La plaza del Castillo es un magnífico mirador para observar buitres, águilas y milanos planeando en las corrientes de aire cálido. En invierno, el treparriscos baja de la alta montaña y se puede ver en las fachadas buscando insectos.",
        "En algunas casas se pueden ver ollas pardaleras: tinajas de cerámica incrustadas en las fachadas que hasta mediados del siglo XX servían para criar gorriones y comer sus polluelos en tiempos de penuria."
      ]
    }
  ],
  en: [
    {
      titol: "A village with a thousand years of history",
      paras: [
        "Talarn is a privileged village. Built on a hill that dominates the entire Tremp Basin, its strategic position has provided it with security and a milder climate than the valleys below. To the east, the Noguera Pallaresa river marks its natural boundary.",
        "Its origins date back to the seventh century BCE, but it was in the Middle Ages that the village experienced its greatest splendour. In the eleventh century the castle and the church of Sant Martí were built, and shortly afterwards the walls were raised with their two gateways. In 1453, Queen Maria proclaimed it the capital of the subvegueria del Pallars. In 1716, Talarn became the capital of the Corregimiento. During the eighteenth century the village had a flour mill and oil press, a bakery, a butcher's, an inn and a printing house."
      ]
    },
    {
      titol: "The urban wildlife of Talarn",
      paras: [
        "Walking through Talarn reveals a surprising world of nature. House sparrows, black redstarts, blue tits and blue rock thrushes nest in the walls and rooftops. In summer, common swifts and crag martins dart in and out of their nests. The castle square is a magnificent vantage point for watching griffon vultures, eagles and kites soaring on warm air currents. In winter, the wallcreeper descends from the high mountains and can be spotted on the building facades searching for insects.",
        "On some houses you can see olles pardaleres — ceramic pots embedded in the walls that until the mid-twentieth century were used to raise house sparrows and eat their chicks in times of scarcity."
      ]
    }
  ],
  fr: [
    {
      titol: "Un village avec mille ans d'histoire",
      paras: [
        "Talarn est un village privilégié. Construit sur une colline qui domine toute la Cuvette de Tremp, sa position stratégique lui a conféré une protection naturelle et un climat plus doux que celui des vallées. À l'est, la rivière Noguera Pallaresa dessine sa limite naturelle.",
        "Ses origines remontent au VIIe siècle avant notre ère, mais c'est au Moyen Âge que le village connaît sa plus grande splendeur. Au XIe siècle, le château et l'église de Sant Martí sont construits, et peu après s'élèvent les murailles avec leurs deux portes. En 1453, la reine Marie le proclame capitale de la sous-viguerie du Pallars. En 1716, Talarn devient capitale du Corregimiento. Au XVIIIe siècle, le village dispose d'un moulin à farine et à huile, d'un four à pain, d'une boucherie, d'une auberge et d'une imprimerie."
      ]
    },
    {
      titol: "La faune urbaine de Talarn",
      paras: [
        "Se promener à Talarn permet de découvrir une nature surprenante. Dans les murs des maisons et sur les toits nichent des oiseaux comme le moineau domestique, le rougequeue noir, la mésange bleue ou le merle de roche. En été, martinets noirs et hirondelles de rochers entrent et sortent de leurs nids. La place du Château est un magnifique belvédère pour observer vautours fauves, aigles et milans planant dans les courants d'air chaud. En hiver, le tichodrome descend de la haute montagne et se repère sur les façades à la recherche d'insectes.",
        "Sur certaines maisons on peut voir des olles pardaleres : des pots en céramique incrustés dans les façades qui, jusqu'au milieu du XXe siècle, servaient à élever des moineaux et à manger leurs petits en période de disette."
      ]
    }
  ]
},

/* ── PARADA 2 ──────────────────────────────────────────────────────────── */
{
  num: 2,
  nom: {
    es: "Portal de Sols y Plaça dels Arbres",
    en: "Portal de Sols and Plaça dels Arbres",
    fr: "Portal de Sols et Plaça dels Arbres"
  },
  es: [
    {
      titol: "El Portal de Sols (s. XVI)",
      paras: [
        "El Portal de Sols era una de las dos entradas al recinto amurallado de Talarn, abierta hacia el mediodía, por donde llegaba el camino real. Era la salida hacia la llanura y los caminos del sur. Tiene la forma de un arco de medio punto con dovelas de piedra, que se cerraba con puertas de madera. El cierre del portal permitía controlar la entrada y salida de personas y mercancías. En 1881, el Ayuntamiento vendió las puertas para pagar la instalación del primer alumbrado público del pueblo. A la derecha se alza la torre de Soldevila, una de las torres defensivas de la muralla, construida probablemente en la segunda mitad del siglo XIV para reforzar la defensa de la villa por el lado sur."
      ]
    },
    {
      titol: "La Plaza de los Árboles",
      paras: [
        "En 1867 había en este lugar un paseo con árboles, pero su estado era lamentable. En 1885 el espacio se transformó en la plaza dels Arbres y se prohibió el paso de ganado para proteger la vegetación. La intervención responde a una preocupación propia de la segunda mitad del siglo XIX: convertir los espacios abiertos fuera del recinto antiguo en lugares de estancia para los vecinos. Aquí encontraréis una fuente con la imagen de Anna Maria Janer, fundadora de las Hermanas de la Sagrada Familia, y la estatua del barón de Eroles, héroe de la Guerra del Francés nacido en Talarn en 1784."
      ]
    }
  ],
  en: [
    {
      titol: "The Portal de Sols (16th c.)",
      paras: [
        "The Portal de Sols was one of the two entrances to Talarn's walled enclosure, facing south, through which the royal road arrived. This was the side connecting the village with the plain and the routes to the south. It takes the form of a semicircular arch with stone voussoirs, originally closed by wooden doors. The gateway allowed control of the movement of people and goods in and out. In 1881, the Town Council sold the doors to pay for the installation of the village's first public street lighting. To the right stands the Soldevila tower, one of the wall's defensive towers, probably built in the second half of the fourteenth century to reinforce the defence of the village on the southern side."
      ]
    },
    {
      titol: "The Tree Square",
      paras: [
        "In 1867 there was a tree-lined promenade at this spot, but it was in a sorry state. In 1885 the space was transformed into the Plaça dels Arbres and the passage of livestock was forbidden to protect the vegetation. The intervention reflects a concern typical of the second half of the nineteenth century: transforming the open spaces outside the old enclosure into places of rest for residents. Here you will find a fountain with the image of Anna Maria Janer, founder of the Sisters of the Holy Family, and the statue of the Baron of Eroles, a hero of the Peninsular War born in Talarn in 1784."
      ]
    }
  ],
  fr: [
    {
      titol: "Le Portal de Sols (XVIe s.)",
      paras: [
        "Le Portal de Sols était l'une des deux entrées de l'enceinte fortifiée de Talarn, ouvert vers le midi, par où arrivait le chemin royal. C'était le côté par où le village communiquait avec la plaine et les chemins du sud. Il prend la forme d'un arc en plein cintre à claveaux de pierre, fermé à l'origine par des portes en bois. La fermeture du portail permettait de contrôler l'entrée et la sortie des personnes et des marchandises. En 1881, la Mairie vendit les portes pour payer l'installation du premier éclairage public du village. À droite s'élève la tour de Soldevila, l'une des tours défensives de la muraille, construite probablement dans la seconde moitié du XIVe siècle pour renforcer la défense du village côté sud."
      ]
    },
    {
      titol: "La Place des Arbres",
      paras: [
        "En 1867, il y avait en cet endroit une promenade arborée, mais son état était déplorable. En 1885, l'espace fut transformé en la Plaça dels Arbres et le passage du bétail y fut interdit pour protéger la végétation. Cette intervention répond à une préoccupation typique de la seconde moitié du XIXe siècle : transformer les espaces ouverts à l'extérieur de l'enceinte ancienne en lieux de séjour pour les habitants. Vous y trouverez une fontaine à l'effigie d'Anna Maria Janer, fondatrice des Sœurs de la Sainte Famille, et la statue du baron d'Eroles, héros de la Guerre d'Espagne né à Talarn en 1784."
      ]
    }
  ]
},

/* ── PARADA 3 ──────────────────────────────────────────────────────────── */
{
  num: 3,
  nom: {
    es: "Las Casas Nobles del Carrer Major",
    en: "The Noble Houses of Carrer Major",
    fr: "Les Maisons Nobles du Carrer Major"
  },
  es: [
    {
      titol: "Una calle de nobles y caballeros",
      paras: [
        "Talarn fue durante siglos una de las villas más importantes del Pirineo, y las familias nobles que la habitaron lo dejaron escrito en las fachadas. Escudos heráldicos, portaladas y capillas privadas convierten el carrer Major en un auténtico paseo de la nobleza pirenaica."
      ]
    },
    {
      titol: "Las casas más destacadas",
      paras: [
        "La Casa del Barón de Eroles (s. XVIII) fue incendiada por los liberales, pero el rey Fernando VII ordenó reconstruirla. En el escudo se lee: «Perseguidos mas no vencidos». La Casa Sabater (s. XVII) lleva un zapato y espigas de arroz en el escudo, alusión al apellido de la esposa del propietario, Campderròs. La Casa Figuerola (1662) muestra unas balanzas y una higuera. La Casa Pallarès, la más antigua —habitada en 1581— presenta un león, cinco piñas y un pajar de oro.",
        "La Casa del Barón de Abella, aunque tenía su centro señorial en el pueblo del mismo nombre, mantenía aquí la residencia principal de la familia. Su presencia en Talarn es un ejemplo de cómo la nobleza pirenaica concentraba su poder en esta villa."
      ]
    }
  ],
  en: [
    {
      titol: "A street of nobles and knights",
      paras: [
        "For centuries Talarn was one of the most important towns in the Pyrenees, and the noble families who lived here inscribed their status on the building façades. Heraldic shields, grand doorways and private chapels make the Carrer Major a genuine promenade of Pyrenean nobility."
      ]
    },
    {
      titol: "The most notable houses",
      paras: [
        "The Casa del Barón de Eroles (18th c.) was burned down by liberal forces, but King Ferdinand VII ordered it rebuilt. The coat of arms reads: «Perseguidos mas no vencidos» (Persecuted but undefeated). The Casa Sabater (17th c.) bears a shoe and rice ears on its shield, an allusion to the surname of the owner's wife, Campderròs. The Casa Figuerola (1662) displays scales and a fig tree. The Casa Pallarès, the oldest — inhabited since 1581 — shows a lion, five pine cones and a golden haystack.",
        "The Casa del Barón de Abella, although its seigneurial centre was in the village of the same name, maintained its family's principal residence here. Its presence in Talarn is an example of how Pyrenean nobility concentrated its power in this town."
      ]
    }
  ],
  fr: [
    {
      titol: "Une rue de nobles et de chevaliers",
      paras: [
        "Talarn fut pendant des siècles l'une des villes les plus importantes des Pyrénées, et les familles nobles qui l'habitaient l'ont inscrit sur les façades. Écus héraldiques, portails monumentaux et chapelles privées font du Carrer Major une véritable promenade de la noblesse pyrénéenne."
      ]
    },
    {
      titol: "Les maisons les plus remarquables",
      paras: [
        "La Maison du Baron d'Eroles (XVIIIe s.) fut incendiée par les libéraux, mais le roi Ferdinand VII en ordonna la reconstruction. Sur l'écu on lit : « Perseguidos mas no vencidos » (Persécutés mais non vaincus). La Maison Sabater (XVIIe s.) porte une chaussure et des épis de riz sur l'écu, allusion au nom de l'épouse du propriétaire, Campderròs. La Maison Figuerola (1662) montre une balance et un figuier. La Maison Pallarès, la plus ancienne — habitée dès 1581 — présente un lion, cinq pommes de pin et une meule d'or.",
        "La Maison du Baron d'Abella, bien qu'ayant son centre seigneurial dans le village du même nom, maintenait ici la résidence principale de la famille. Sa présence à Talarn illustre la façon dont la noblesse pyrénéenne concentrait son pouvoir dans cette ville."
      ]
    }
  ]
},

/* ── PARADA 4 ──────────────────────────────────────────────────────────── */
{
  num: 4,
  nom: {
    es: "La Iglesia de Sant Martí y el Órgano Barroco",
    en: "Sant Martí Church and its Baroque Organ",
    fr: "L'Église Sant Martí et son Orgue Baroque"
  },
  es: [
    {
      titol: "Mil años de fe en el corazón de Talarn",
      paras: [
        "La iglesia de Talarn tiene sus orígenes en el año 1097, construida paralelamente al castillo. Inicialmente era un pequeño templo románico dedicado a la Virgen de la Piedad. A su alrededor se reservaban treinta pasos de terreno para el cementerio, un espacio que gozaba de inmunidad y derecho de asilo y que se convirtió en el núcleo a partir del cual se edificaron las casas de la villa. Todavía hoy, delante del portal de Soldevila, un cuadrado empedrado en el pavimento permite identificar la ubicación del antiguo cementerio. La actual iglesia de Sant Martí, documentada desde 1527, es fruto de diversas ampliaciones durante los siglos XVII y XVIII."
      ]
    },
    {
      titol: "Sepulturas de la nobleza",
      paras: [
        "La iglesia de Sant Martí se convirtió en el lugar de enterramiento de la nobleza y de las familias acomodadas de Talarn. Aún se conserva la lápida de Marià Sabater de Pior, arcipreste de Àger, muerto en 1780. Otras sepulturas, cubiertas por el solado, corresponden a familias como los Bertran, los Monjo y los Pallarès. Se conserva también un banco de la familia Sabater y otros elementos artísticos."
      ]
    },
    {
      titol: "El órgano barroco",
      paras: [
        "Este es uno de los elementos más valiosos de Sant Martí. Construido en 1748, con un solo teclado de 45 notas y 691 tubos, es un testimonio excepcional de la tradición musical de Talarn. Restaurado en 1975, el instrumento sigue vivo. Durante el verano, la iglesia acoge conciertos con prestigiosos organistas, manteniendo viva la tradición musical del templo."
      ]
    }
  ],
  en: [
    {
      titol: "A thousand years of faith at the heart of Talarn",
      paras: [
        "The church of Talarn has its origins in 1097, built alongside the castle. Initially it was a small Romanesque temple dedicated to Our Lady of Piety. Around it, thirty paces of land were reserved for the cemetery, a space that enjoyed immunity and the right of asylum, which became the nucleus from which the houses of the village were built. Today, in front of the Soldevila gateway, a paved square in the pavement marks the location of the old cemetery. The current church of Sant Martí, documented since 1527, is the result of various extensions carried out during the seventeenth and eighteenth centuries."
      ]
    },
    {
      titol: "Burials of the nobility",
      paras: [
        "The church of Sant Martí became the burial place of the nobility and wealthy families of Talarn. The tombstone of Marià Sabater de Pior, archpriest of Àger, who died in 1780, is still preserved. Other burials, covered by the flooring, belong to families such as the Bertran, Monjo and Pallarès. A pew belonging to the Sabater family and other artistic elements are also preserved."
      ]
    },
    {
      titol: "The Baroque organ",
      paras: [
        "This is one of the most valuable elements of Sant Martí. Built in 1748, with a single keyboard of 45 notes and 691 pipes, it is an exceptional witness to the musical tradition of Talarn. Restored in 1975, the instrument is still in use. During the summer, the church hosts concerts with distinguished organists, keeping the musical tradition of the temple alive."
      ]
    }
  ],
  fr: [
    {
      titol: "Mille ans de foi au cœur de Talarn",
      paras: [
        "L'église de Talarn a ses origines en 1097, construite parallèlement au château. À l'origine, c'était un petit temple roman dédié à Notre-Dame de la Pitié. Autour d'elle, trente pas de terrain étaient réservés au cimetière, un espace jouissant de l'immunité et du droit d'asile, qui devint le noyau à partir duquel furent construites les maisons du village. Aujourd'hui encore, devant le portail de Soldevila, un carré pavé dans le sol permet d'identifier l'emplacement de l'ancien cimetière. L'église actuelle de Sant Martí, documentée depuis 1527, est le fruit de plusieurs agrandissements aux XVIIe et XVIIIe siècles."
      ]
    },
    {
      titol: "Sépultures de la noblesse",
      paras: [
        "L'église de Sant Martí devint le lieu d'inhumation de la noblesse et des familles aisées de Talarn. La pierre tombale de Marià Sabater de Pior, archiprêtre d'Àger, mort en 1780, est toujours conservée. D'autres sépultures, recouvertes par le carrelage, appartiennent à des familles telles que les Bertran, les Monjo et les Pallarès. Un banc de la famille Sabater et d'autres éléments artistiques sont également conservés."
      ]
    },
    {
      titol: "L'orgue baroque",
      paras: [
        "C'est l'un des éléments les plus précieux de Sant Martí. Construit en 1748, avec un seul clavier de 45 touches et 691 tuyaux, il est un témoignage exceptionnel de la tradition musicale de Talarn. Restauré en 1975, l'instrument est toujours en activité. Durant l'été, l'église accueille des concerts avec de prestigieux organistes, perpétuant la tradition musicale du temple."
      ]
    }
  ]
},

/* ── PARADA 5 ──────────────────────────────────────────────────────────── */
{
  num: 5,
  nom: {
    es: "Las Casas Nobles del Carrer Soldevila",
    en: "The Noble Houses of Carrer Soldevila",
    fr: "Les Maisons Nobles du Carrer Soldevila"
  },
  es: [
    {
      titol: "Un eje principal de la villa",
      paras: [
        "El carrer Soldevila fue durante siglos uno de los ejes principales de la villa; aquí estaba el antiguo hospital y tenían casa familias muy influyentes de Talarn. Las fachadas que se conservan dan testimonio de ello.",
        "Casa Camarlot era de una saga de notarios. Josep Camarlot i Macià, notario y teniente coronel de infantería, fue nombrado corregidor interino por Fernando VII. La casa fue destruida en 1822 y él acabó ejecutado en 1835 en Tremp por su pasado absolutista.",
        "El antiguo hospital, del siglo XVI, responde a la tradición medieval de instituciones religiosas de asistencia a los desfavorecidos, donde se atendía a los enfermos pobres de la villa. Más tarde se convirtió en casa consistorial; la portalada actual lleva la fecha de 1694."
      ]
    },
    {
      titol: "Casas y linajes",
      paras: [
        "La casa de Roc Balaguer, del siglo XVII, quedó dañada por la Guerra de Sucesión. En 1734, dos reverendos comunitarios la repararon. Una mitad se destinó a la causa pía y la otra a la iglesia, que habilitó allí la rectoría.",
        "Casa Pons está documentada desde 1595 y su linaje obtuvo título nobiliario en 1706. El escudo muestra, en campo de oro, un águila volando sobre dos puentes. Hoy se conoce como casa Blanquet.",
        "La casa del D. Pau aparece como casa noble en el siglo XVIII, regentada por el regidor Amadeu Borrell. Conectada con la del barón de Eroles, es el origen del nombre de casa Baró con que se conoce actualmente."
      ]
    }
  ],
  en: [
    {
      titol: "A main axis of the village",
      paras: [
        "The Carrer Soldevila was for centuries one of the main axes of the village; the old hospital was here, and influential families had their homes along it. The preserved façades bear witness to this.",
        "Casa Camarlot belonged to a dynasty of notaries. Josep Camarlot i Macià, notary and lieutenant colonel of infantry, was appointed interim corregidor by Ferdinand VII. The house was destroyed in 1822 and he was executed in 1835 in Tremp for his absolutist past.",
        "The old hospital, from the sixteenth century, follows the medieval tradition of religious institutions for the care of the disadvantaged, where the poor sick of the village were tended. It later became the town hall; the current doorway bears the date 1694."
      ]
    },
    {
      titol: "Houses and lineages",
      paras: [
        "The house of Roc Balaguer, from the seventeenth century, was damaged during the War of the Spanish Succession. In 1734, two community reverends repaired it. Half was set aside for pious purposes and half for the church, which established the rectory there.",
        "Casa Pons is documented from 1595, and its lineage obtained a noble title in 1706. The shield shows, on a gold field, an eagle flying over two bridges. Today it is known as casa Blanquet.",
        "The house of D. Pau appears as a noble house in the eighteenth century, managed by councillor Amadeu Borrell. Connected to the barón de Eroles' house, it is the origin of the name casa Baró by which it is known today."
      ]
    }
  ],
  fr: [
    {
      titol: "Un axe principal du village",
      paras: [
        "Le Carrer Soldevila fut pendant des siècles l'un des axes principaux du village ; l'ancien hôpital s'y trouvait et des familles très influentes de Talarn y possédaient une maison. Les façades conservées en témoignent.",
        "La maison Camarlot appartenait à une lignée de notaires. Josep Camarlot i Macià, notaire et lieutenant-colonel d'infanterie, fut nommé corregidor intérimaire par Ferdinand VII. La maison fut détruite en 1822 et il fut exécuté en 1835 à Tremp pour son passé absolutiste.",
        "L'ancien hôpital, du XVIe siècle, répond à la tradition médiévale des institutions religieuses d'assistance aux défavorisés, où étaient soignés les pauvres malades du village. Il devint plus tard maison communale ; le portail actuel porte la date de 1694."
      ]
    },
    {
      titol: "Maisons et lignages",
      paras: [
        "La maison de Roc Balaguer, du XVIIe siècle, fut endommagée par la Guerre de Succession. En 1734, deux révérends de la communauté la restaurèrent. Une moitié fut affectée à la cause pie et l'autre à l'église, qui y aménagea le presbytère.",
        "La maison Pons est documentée depuis 1595 et sa lignée obtint un titre nobiliaire en 1706. L'écu montre, sur fond d'or, un aigle volant au-dessus de deux ponts. Elle est aujourd'hui connue sous le nom de maison Blanquet.",
        "La maison de D. Pau apparaît comme maison noble au XVIIIe siècle, tenue par le conseiller Amadeu Borrell. Reliée à celle du baron d'Eroles, elle est à l'origine du nom de maison Baró sous lequel elle est actuellement connue."
      ]
    }
  ]
},

/* ── PARADA 6 ──────────────────────────────────────────────────────────── */
{
  num: 6,
  nom: {
    es: "La Torre de la Prisión del Castillo",
    en: "The Prison Tower of the Castle",
    fr: "La Tour-Prison du Château"
  },
  es: [
    {
      titol: "El castillo que dominó el Pallars (s. XI)",
      paras: [
        "En el punto más alto de Talarn se alzaba uno de los castillos más importantes del Pallars. Aparece documentado por primera vez en 1055. En 1370, el rey Pedro el Ceremonioso lo incorporó a la Corona. Lo que vemos hoy es todo lo que queda: una torre de vigilancia circular construida con sillares de piedra rojiza, que ya consta como en ruinas en 1871.",
        "La tradición popular llama a este lugar «la prisión del castillo» y recuerda que la torre fue usada como calabozo, un uso habitual en los castillos que habían perdido su función militar pero conservaban una estructura sólida y aislada. En 1957, la explosión de un polvorín durante la construcción del embalse de Sant Antoni derrumbó definitivamente la torre. Sus piedras no se perdieron: se reutilizaron para construir el muro del carrer de la Mota, de modo que el castillo sigue presente en el pueblo en forma de material de construcción."
      ]
    },
    {
      titol: "Cuevas naturales",
      paras: [
        "Bajo el castillo había numerosas cuevas naturales, hoy tapadas por derrumbes. El topónimo Susterris, que en latín significa «bajo las cuevas», es el testimonio más antiguo que conservamos."
      ]
    }
  ],
  en: [
    {
      titol: "The castle that dominated the Pallars (11th c.)",
      paras: [
        "At the highest point of Talarn stood one of the most important castles in the Pallars. It is first documented in 1055. In 1370, King Peter the Ceremonious incorporated it into the Crown. What we see today is all that remains: a circular watchtower built with blocks of reddish stone, already recorded as ruined in 1871.",
        "Local tradition calls this place «la presó del castell» (the castle prison) and remembers that the tower was used as a dungeon, a common use in castles that had lost their military function but retained a solid and isolated structure. In 1957, the explosion of a powder store during the construction of the Sant Antoni reservoir brought the tower down definitively. Its stones were not lost: they were reused to build the wall of the Carrer de la Mota, so the castle lives on in the village in the form of building material."
      ]
    },
    {
      titol: "Natural caves",
      paras: [
        "Below the castle there were numerous natural caves, today buried by landslides. The place name Susterris, meaning «under the caves» in Latin, is the oldest written testimony we have."
      ]
    }
  ],
  fr: [
    {
      titol: "Le château qui dominait le Pallars (XIe s.)",
      paras: [
        "Au point le plus élevé de Talarn s'élevait l'un des châteaux les plus importants du Pallars. Il est documenté pour la première fois en 1055. En 1370, le roi Pierre le Cérémonieux l'incorpora à la Couronne. Ce que nous voyons aujourd'hui est tout ce qu'il en reste : une tour de guet circulaire construite avec des blocs de pierre rougeâtre, déjà signalée en ruine en 1871.",
        "La tradition populaire appelle cet endroit « la presó del castell » (la prison du château) et se souvient que la tour fut utilisée comme cachot, un usage habituel dans les châteaux qui avaient perdu leur fonction militaire mais conservaient une structure solide et isolée. En 1957, l'explosion d'une poudrière lors de la construction du barrage de Sant Antoni fit définitivement s'effondrer la tour. Ses pierres ne furent pas perdues : elles furent réutilisées pour construire le mur du Carrer de la Mota, de sorte que le château continue d'être présent au village sous forme de matériau de construction."
      ]
    },
    {
      titol: "Grottes naturelles",
      paras: [
        "Sous le château se trouvaient de nombreuses grottes naturelles, aujourd'hui comblées par des éboulements. Le toponyme Susterris, qui signifie « sous les grottes » en latin, est le plus ancien témoignage écrit que nous conservions."
      ]
    }
  ]
},

/* ── PARADA 7 ──────────────────────────────────────────────────────────── */
{
  num: 7,
  nom: {
    es: "Las Bodegas de Talarn",
    en: "The Wine Cellars of Talarn",
    fr: "Les Caves à Vin de Talarn"
  },
  es: [
    {
      titol: "La viña y el vino en Talarn",
      paras: [
        "La tradición vitivinícola de Talarn tiene raíces medievales. Los monjes de la Orden de San Juan (hospitalarios) fueron los primeros en introducir y explotar el potencial vitícola de la zona de Encús durante el siglo XII. De esta época datan los lagares de fermentación esculpidos directamente en la roca a cielo abierto que hoy ha recuperado el Celler Castell d'Encús.",
        "El Pallars Jussà fue en el siglo XIX una de las grandes zonas vitícolas del Pirineo, hasta el punto de ser conocido como «el celler dels Pirineus». La comarca contaba con unas 8.000 hectáreas de viña. Talarn formaba parte de este paisaje, y las casas del núcleo antiguo conservaban bodegas en los bajos, donde cada familia elaboraba su propio vino para el autoconsumo o la comercialización.",
        "La plaga de la filoxera, a finales del siglo XIX, arrasó el cultivo. La viña fue sustituida por otros cultivos, en un proceso acentuado por la mecanización del campo. A principios del siglo XXI, el interés por los vinos de altitud volvió a hacer atractiva la viticultura en esta zona. Hoy Talarn es un referente del vino de montaña."
      ]
    },
    {
      titol: "La Feria del Vino del Pirineo",
      paras: [
        "Cada mes de junio, Talarn acoge la Feria del Vino del Pirineo. Durante tres días el pueblo reúne bodegas del Pirineo en torno a catas guiadas, maridajes, charlas, música y experiencias enoturísticas. Una de las propuestas más características es la visita a las antiguas bodegas particulares de las casas del pueblo, que permite recorrer el núcleo antiguo a través de su patrimonio vitivinícola."
      ]
    }
  ],
  en: [
    {
      titol: "The vine and wine in Talarn",
      paras: [
        "The winemaking tradition of Talarn has medieval roots. The monks of the Order of St John (the Hospitallers) were the first to introduce and develop the viticulture potential of the Encús area during the twelfth century. From this era date the fermentation vats carved directly into the open rock, now recovered by the Celler Castell d'Encús.",
        "In the nineteenth century, the Pallars Jussà was one of the great wine-growing regions of the Pyrenees, to the point of being known as «el celler dels Pirineus» (the cellar of the Pyrenees). The region had some 8,000 hectares of vineyard. Talarn was part of this landscape, and houses in the old centre had cellars on the ground floor, where each family made their own wine for domestic use or sale.",
        "The phylloxera plague at the end of the nineteenth century devastated the vineyards. The vine was gradually replaced by other crops, a process accelerated by the mechanisation of farming. In the early twenty-first century, interest in high-altitude wines made viticulture attractive again in this area. Today Talarn is a benchmark for mountain wine."
      ]
    },
    {
      titol: "The Pyrenean Wine Fair",
      paras: [
        "Every June, Talarn hosts the Pyrenean Wine Fair. For three days the village brings together wineries from the Pyrenees for guided tastings, food pairings, talks, music and wine tourism experiences. One of the most distinctive features is the visit to the old private cellars of the village houses, which allows visitors to explore the historic centre through its wine heritage."
      ]
    }
  ],
  fr: [
    {
      titol: "La vigne et le vin à Talarn",
      paras: [
        "La tradition viticole de Talarn a des racines médiévales. Les moines de l'Ordre de Saint-Jean (les Hospitaliers) furent les premiers à introduire et à développer le potentiel viticole de la zone d'Encús au XIIe siècle. De cette époque datent les cuves de fermentation sculptées directement dans la roche à ciel ouvert, aujourd'hui récupérées par le Celler Castell d'Encús.",
        "Au XIXe siècle, le Pallars Jussà était l'une des grandes régions viticoles des Pyrénées, au point d'être connu comme « el celler dels Pirineus » (la cave des Pyrénées). La région comptait quelque 8 000 hectares de vignes. Talarn faisait partie de ce paysage, et les maisons du centre ancien conservaient des caves au rez-de-chaussée, où chaque famille élaborait son propre vin pour la consommation domestique ou la commercialisation.",
        "Le fléau du phylloxéra, à la fin du XIXe siècle, ravagea les cultures. La vigne fut progressivement remplacée par d'autres cultures, dans un processus accentué par la mécanisation de l'agriculture. Au début du XXIe siècle, l'intérêt pour les vins d'altitude rendit à nouveau la viticulture attractive dans cette zone. Aujourd'hui Talarn est une référence pour le vin de montagne."
      ]
    },
    {
      titol: "La Foire aux Vins des Pyrénées",
      paras: [
        "Chaque mois de juin, Talarn accueille la Foire aux Vins des Pyrénées. Pendant trois jours, le village réunit des caves des Pyrénées autour de dégustations guidées, d'accords mets-vins, de conférences, de musique et d'expériences œnotouristiques. L'une des propositions les plus caractéristiques est la visite des anciennes caves particulières des maisons du village, qui permet de parcourir le centre historique à travers son patrimoine vitivinicole."
      ]
    }
  ]
},

/* ── PARADA 8 ──────────────────────────────────────────────────────────── */
{
  num: 8,
  nom: {
    es: "Las Casas Nobles del Portal de Caps",
    en: "The Noble Houses of Portal de Caps",
    fr: "Les Maisons Nobles du Portal de Caps"
  },
  es: [
    {
      titol: "Tres casas, tres historias",
      paras: []
    },
    {
      titol: "Casa Prior (s. XVII)",
      paras: [
        "Casa pairal de la familia Prior, una de las sagas acomodadas de la villa, que aprovecha una torre redonda de la antigua muralla como parte de la vivienda. Es un caso bien visible de cómo las casas del núcleo fueron absorbiendo las estructuras defensivas una vez estas perdieron su función militar. En el escudo aparecen rayos, una herradura y la fecha de 1607 en el portal de Caps. Según la tradición, fue en la estancia de esta torre donde Josep Prior i de Ferrer hizo testamento en 1681."
      ]
    },
    {
      titol: "Casa del Comendador de Susterris",
      paras: [
        "Perteneció a los frailes de la encomienda hospitalaria de San Antonio de Susterris, que entre los siglos XIII y XIV se trasladaron a Talarn. El traslado incorporó a la villa una institución religiosa con propiedades y rentas propias, que mantuvo presencia durante siglos. En 1885 la casa todavía era conocida como «casa del Comanador» y en la puerta figuraba la cruz de la Orden de San Juan de Jerusalén."
      ]
    },
    {
      titol: "Casa del Corregidor (s. XVII)",
      paras: [
        "Situada en lo alto del carrer Major, fue inicialmente la antigua casa del barón de Eroles, Amadeu Borrell i de Vilanova, que se instaló allí en 1645. A partir de 1789 albergó al corregidor. Contaba con jardín y suministro propio de agua. Desde 1874 fue convento de la orden de la Sagrada Familia hasta 1900, año en que se trasladó a la Seu d'Urgell. En 1954 fue ocupada por los miembros de la Hermandad Misionera de Cristo Trabajador."
      ]
    }
  ],
  en: [
    {
      titol: "Three houses, three stories",
      paras: []
    },
    {
      titol: "Casa Prior (17th c.)",
      paras: [
        "The ancestral home of the Prior family, one of the well-off lineages of the village, which incorporated a round tower from the old city wall as part of the house. It is a vivid example of how houses in the old centre absorbed the defensive structures once these had lost their military function. The coat of arms bears lightning bolts, a horseshoe and the date 1607 at the Portal de Caps. According to tradition, it was in the chamber of this tower that Josep Prior i de Ferrer made his will in 1681."
      ]
    },
    {
      titol: "House of the Commander of Susterris",
      paras: [
        "It belonged to the monks of the Hospitaller commandery of Sant Antoni de Susterris, who moved to Talarn between the thirteenth and fourteenth centuries. The move brought into the village a religious institution with its own properties and income, which maintained a presence there for centuries. In 1885 the house was still known as «casa del Comanador» and the cross of the Order of St John of Jerusalem was displayed on the door."
      ]
    },
    {
      titol: "House of the Corregidor (17th c.)",
      paras: [
        "Located at the top of the Carrer Major, it was originally the old house of the Baron of Eroles, Amadeu Borrell i de Vilanova, who moved there in 1645. From 1789 it housed the corregidor. It had a garden and its own water supply. From 1874 it was a convent of the Sisters of the Holy Family until 1900, when they relocated to la Seu d'Urgell. In 1954 it was occupied by the members of the Hermandad Misionera de Cristo Trabajador."
      ]
    }
  ],
  fr: [
    {
      titol: "Trois maisons, trois histoires",
      paras: []
    },
    {
      titol: "Maison Prior (XVIIe s.)",
      paras: [
        "Maison de famille de la lignée Prior, l'une des familles aisées du village, qui intègre une tour ronde de l'ancienne muraille comme partie du logement. C'est un exemple bien visible de la façon dont les maisons du centre ont absorbé les structures défensives une fois celles-ci ayant perdu leur fonction militaire. Sur l'écu figurent des éclairs, un fer à cheval et la date de 1607 au portail de Caps. Selon la tradition, c'est dans la chambre de cette tour que Josep Prior i de Ferrer fit son testament en 1681."
      ]
    },
    {
      titol: "Maison du Commandeur de Susterris",
      paras: [
        "Elle appartint aux frères de la commanderie hospitalière de Sant Antoni de Susterris, qui s'installèrent à Talarn entre les XIIIe et XIVe siècles. Ce déménagement apporta au village une institution religieuse dotée de propriétés et de revenus propres, qui y maintint une présence pendant des siècles. En 1885, la maison était encore connue sous le nom de « casa del Comanador » et la croix de l'Ordre de Saint-Jean de Jérusalem figurait sur la porte."
      ]
    },
    {
      titol: "Maison du Corregidor (XVIIe s.)",
      paras: [
        "Située au sommet du Carrer Major, c'était à l'origine l'ancienne maison du baron d'Eroles, Amadeu Borrell i de Vilanova, qui s'y installa en 1645. À partir de 1789, le corregidor y prit résidence. Elle disposait d'un jardin et d'un approvisionnement en eau propre. De 1874 à 1900, elle fut couvent de l'ordre de la Sainte Famille, avant que celui-ci ne déménage à la Seu d'Urgell. En 1954, elle fut occupée par les membres de la Hermandad Misionera de Cristo Trabajador."
      ]
    }
  ]
},

/* ── PARADA 9 ──────────────────────────────────────────────────────────── */
{
  num: 9,
  nom: {
    es: "El Portal de Caps",
    en: "Portal de Caps",
    fr: "Le Portal de Caps"
  },
  es: [
    {
      titol: "La puerta del norte (s. XVI)",
      paras: [
        "El Portal de Caps era la entrada norte al recinto amurallado de Talarn, por donde pasaba el camino real que venía de Aragón y de Francia. Como el Portal de Sols, tenía la forma de un arco de medio punto adovelado que se cerraba con puertas de madera. Los dos portales, situados en extremos opuestos de la villa, marcaban el recorrido que atravesaba el núcleo de norte a sur y que estructura todavía hoy el trazado de las calles.",
        "Durante siglos fue el punto de entrada de quienes venían del norte: mercaderes, peregrinos, tropas y viajeros de toda clase. Por aquí llegaban las mercancías y las noticias del otro lado de la cordillera, en un camino que conectaba el Pallars con los valles pirenaicos."
      ]
    },
    {
      titol: "Un límite invisible",
      paras: [
        "En 1930, con la llegada de los primeros automóviles, fue necesario practicar una apertura con porche en lo alto del carrer Major para mejorar el acceso de vehículos al interior del recinto amurallado, y el Portal de Caps fue tapiado. Hoy su ubicación original puede reconocerse gracias al cambio de pavimento en el suelo: aquel límite invisible era la frontera entre el mundo exterior y la villa protegida de Talarn."
      ]
    }
  ],
  en: [
    {
      titol: "The north gateway (16th c.)",
      paras: [
        "The Portal de Caps was the northern entrance to Talarn's walled enclosure, through which passed the royal road coming from Aragon and France. Like the Portal de Sols, it had the form of a semicircular voussoir arch that closed with wooden doors. The two gateways, located at opposite ends of the village, marked the route that crossed the centre from north to south and which still structures the street layout today.",
        "For centuries it was the entry point for those coming from the north: merchants, pilgrims, troops and travellers of all kinds. Through here arrived the goods and news from the other side of the mountain range, along a road that connected the Pallars with the Pyrenean valleys."
      ]
    },
    {
      titol: "An invisible boundary",
      paras: [
        "In 1930, with the arrival of the first automobiles, it was necessary to open a porched passage at the top of the Carrer Major to improve vehicle access to the interior of the walled enclosure, and the Portal de Caps was blocked up. Today its original location can be recognised by the change in the paving on the ground: that invisible boundary was the frontier between the outside world and the protected village of Talarn."
      ]
    }
  ],
  fr: [
    {
      titol: "La porte du nord (XVIe s.)",
      paras: [
        "Le Portal de Caps était l'entrée nord de l'enceinte fortifiée de Talarn, par où passait le chemin royal venant d'Aragon et de France. Comme le Portal de Sols, il avait la forme d'un arc en plein cintre à claveaux fermé par des portes en bois. Les deux portails, situés aux extrémités opposées du village, jalonnaient le parcours qui traversait le centre du nord au sud et qui structure encore aujourd'hui le tracé des rues.",
        "Pendant des siècles, ce fut le point d'entrée de ceux qui venaient du nord : marchands, pèlerins, troupes et voyageurs de toutes sortes. Par ici arrivaient les marchandises et les nouvelles de l'autre côté de la chaîne, sur un chemin qui reliait le Pallars aux vallées pyrénéennes."
      ]
    },
    {
      titol: "Une frontière invisible",
      paras: [
        "En 1930, avec l'arrivée des premières automobiles, il fallut pratiquer une ouverture avec auvent au sommet du Carrer Major pour améliorer l'accès des véhicules à l'intérieur de l'enceinte fortifiée, et le Portal de Caps fut muré. Aujourd'hui, son emplacement d'origine peut être reconnu grâce au changement de revêtement au sol : cette frontière invisible marquait la limite entre le monde extérieur et le village protégé de Talarn."
      ]
    }
  ]
},

/* ── PARADA 10 ─────────────────────────────────────────────────────────── */
{
  num: 10,
  nom: {
    es: "El Lavadero",
    en: "The Public Wash House",
    fr: "Le Lavoir"
  },
  es: [
    {
      titol: "El lavadero público de la villa",
      paras: [
        "En 1765, los vecinos de Talarn solicitaron la construcción de un lavadero público: las mujeres tenían que lavar de rodillas al borde del camino, y las autoridades lo consideraban indecente. El safareig se construyó aprovechando el agua que bajaba de la Font de Caps, situada unos metros más arriba al otro lado de la plaza. En 1811 se enfoscó, y en 1919 se cubrió con la elegante cubierta semicircular que vemos hoy."
      ]
    },
    {
      titol: "Un espacio de mujeres",
      paras: [
        "Durante generaciones, el safareig fue un punto de encuentro esencial para las mujeres del pueblo. Mientras fregaban la ropa en las pilas de piedra, intercambiaban noticias y tejían la vida social de la comunidad. Era un espacio de libertad y de palabra en un tiempo en que las mujeres tenían muy poco espacio público."
      ]
    }
  ],
  en: [
    {
      titol: "The public wash house of the village",
      paras: [
        "In 1765, the residents of Talarn requested the construction of a public wash house: women had to do laundry on their knees at the roadside, which the authorities considered indecent. The safareig was built using the water that flowed down from the Font de Caps, located a few metres above on the other side of the square. In 1811 it was rendered, and in 1919 it was covered with the elegant semicircular roof we see today."
      ]
    },
    {
      titol: "A women's space",
      paras: [
        "For generations, the safareig was an essential meeting point for the women of the village. While they scrubbed clothes on the stone washing boards, they exchanged news and wove the social fabric of the community. It was a space of freedom and conversation at a time when women had very little public space."
      ]
    }
  ],
  fr: [
    {
      titol: "Le lavoir public du village",
      paras: [
        "En 1765, les habitants de Talarn demandèrent la construction d'un lavoir public : les femmes devaient faire la lessive à genoux au bord du chemin, ce que les autorités jugeaient indécent. Le safareig fut construit en profitant de l'eau qui descendait de la Font de Caps, située quelques mètres plus haut de l'autre côté de la place. En 1811, il fut crépis, et en 1919, il fut couvert de l'élégant toit semi-circulaire que nous voyons aujourd'hui."
      ]
    },
    {
      titol: "Un espace de femmes",
      paras: [
        "Pendant des générations, le safareig fut un point de rencontre essentiel pour les femmes du village. Pendant qu'elles frottaient le linge sur les pierres à laver, elles échangeaient des nouvelles et tissaient la vie sociale de la communauté. C'était un espace de liberté et de parole à une époque où les femmes disposaient de très peu d'espace public."
      ]
    }
  ]
},

/* ── PARADA 11 ─────────────────────────────────────────────────────────── */
{
  num: 11,
  nom: {
    es: "La Font de Caps",
    en: "The Font de Caps Fountain",
    fr: "La Font de Caps"
  },
  es: [
    {
      titol: "El corazón de agua de Talarn",
      paras: [
        "La Font de Caps, conocida también como fuente de Llassus, aparece documentada por primera vez en 1685. Durante siglos fue la única fuente que abastecía toda la villa: para beber, para cocinar y para regar los huertos. El agua que manaba hizo posibles las abundantes y fértiles huertas de Talarn, cuyas verduras se exportaban al mercado de Tremp para abastecer a toda la comarca. Hoy todavía se conservan la mayoría de estos huertos, y se puede pasear tranquilamente por el camino que lleva su nombre."
      ]
    },
    {
      titol: "La construcción de la fuente",
      paras: [
        "En 1770 se hizo la nueva conducción del agua hasta el emplazamiento del futuro manantial, y en 1792 se llevaron a cabo las obras de la fuente propiamente dicha. A lo largo de los años se fueron haciendo sucesivas mejoras: la construcción de las dos acequias, la pila central y la sustitución de los antiguos grifos por unos nuevos de bronce con forma de cabeza de animal, tal como los vemos hoy."
      ]
    }
  ],
  en: [
    {
      titol: "The water heart of Talarn",
      paras: [
        "The Font de Caps, also known as the font de Llassus, is first documented in 1685. For centuries it was the only spring supplying the entire village: for drinking, cooking and watering the vegetable gardens. The water that flowed from it made possible the abundant and fertile market gardens of Talarn, whose vegetables were exported to the market in Tremp to supply the whole region. Most of these gardens are still preserved today, and visitors can stroll along the path that bears its name."
      ]
    },
    {
      titol: "The construction of the fountain",
      paras: [
        "In 1770 the new water pipe was laid to the site of the future fountain, and in 1792 the construction of the fountain itself was carried out. Over the years successive improvements were made: the construction of the two irrigation channels, the central basin and the replacement of the old spouts with new bronze ones in the shape of animal heads, as we see them today."
      ]
    }
  ],
  fr: [
    {
      titol: "Le cœur d'eau de Talarn",
      paras: [
        "La Font de Caps, connue aussi sous le nom de font de Llassus, est documentée pour la première fois en 1685. Pendant des siècles, ce fut l'unique source qui approvisionnait tout le village : pour boire, cuisiner et arroser les potagers. L'eau qui en jaillissait permit la création des jardins maraîchers abondants et fertiles de Talarn, dont les légumes étaient exportés au marché de Tremp pour approvisionner toute la région. La plupart de ces jardins sont encore préservés aujourd'hui, et l'on peut se promener tranquillement sur le chemin qui porte son nom."
      ]
    },
    {
      titol: "La construction de la fontaine",
      paras: [
        "En 1770, la nouvelle conduite d'eau fut posée jusqu'à l'emplacement de la future source, et en 1792 furent réalisés les travaux de la fontaine proprement dite. Au fil des années, des améliorations successives furent apportées : la construction des deux séquies (canaux d'irrigation), le bassin central et le remplacement des anciens robinets par de nouveaux en bronze en forme de tête d'animal, tels que nous les voyons aujourd'hui."
      ]
    }
  ]
}

];

/* --------------------------------------------------------------------------
   TEXTS DE LA INTERFÍCIE per a la secció de panells
   (3 idiomes: es, en, fr)
   -------------------------------------------------------------------------- */
const UI_PANELLS = {
  es: {
    titolSeccio: "Paneles interpretativos",
    subtitol: "Contenidos multilingüe",
    descripcio: "Textos completos de los paneles físicos instalados en las 11 paradas de la Ruta Urbana de Talarn.",
    parada: "Parada",
    tornar: "Volver a la lista",
    tornarJoc: "Volver al juego"
  },
  en: {
    titolSeccio: "Interpretive panels",
    subtitol: "Multilingual content",
    descripcio: "Full texts of the physical panels installed at the 11 stops of the Talarn Urban Trail.",
    parada: "Stop",
    tornar: "Back to the list",
    tornarJoc: "Back to the game"
  },
  fr: {
    titolSeccio: "Panneaux interprétatifs",
    subtitol: "Contenu multilingue",
    descripcio: "Textes complets des panneaux physiques installés aux 11 étapes de la Route Urbaine de Talarn.",
    parada: "Étape",
    tornar: "Retour à la liste",
    tornarJoc: "Retour au jeu"
  }
};
