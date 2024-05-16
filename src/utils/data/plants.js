const plantes = [
  {
    id: 1,
    nom: {
      vernaculaire: "Anis vert",
      scientifique: "Pimpinella anisum",
    },
    img: "http://www.fr36.org/plantes/anis-vert.webp",
    famille: "Apiacées",
    feuille: {
      folioles: "composées",
      decoupe: "dentées",
      disposition: "alternées",
    },

    fleur: {
      couleur: "blanche",
      disposition: "ombelles",
    },

    partieUtil: "Semences",
    proprietes: "antispasmodique, carminatif, galactogène",
    indicationsTrad: "En interne : ballonements, spasmes digestifs, allaitement",
    coordonnees: [
      {
        lat: 43.49181787604796,
        lng: 5.998361649582645,
      },
      {
        lat: 30.244967249331136,
        lng: 29.48720342249763,
      },
      {
        lat: 24.33932129895795,
        lng: 79.13492152021523,
      },
    ],
  },
  {
    id: 2,
    nom: {
      vernaculaire: "Millepertuis perforé",
      scientifique: "Hypericum perforatum",
    },
    img: "http://www.fr36.org/plantes/millepertuis-perfore.webp",
    famille: "Apiacées",
    feuille: {
      folioles: "simples",
      decoupe: "lisses",
      disposition: "opposées",
    },

    fleur: {
      couleur: "jaunes",
      disposition: "panicules",
      petale: "5",
    },
    partieUtil: "Sommités fleuries",
    proprietes: "Anxiolytique, antidepressive",
    indicationsTrad:
      "En interne : état dépressif léger à modéré, 'coup de blues'. ATTENTION ! Ne pas utiliser en cas de prise de médicaments quelconques ou en remplacement de ceux-ci.",
    coordonnees: [
      {
        lat: 43.63094593756725,
        lng: -0.14909023008954747,
      },
      {
        lat: 48.11802970817162,
        lng: -98.72475109019254,
      },
      {
        lat: 29.202142003662463,
        lng: 33.94589843155854,
      },
    ],
  },
  {
    id: 3,
    nom: {
      vernaculaire: "Mauve sylvestre",
      scientifique: "Malva sylvestris",
    },
    img: "http://www.fr36.org/plantes/mauve-sylvestre.webp",
    famille: "Malvaceae",
    feuille: {
      folioles: "simples",
      decoupe: "dentées",
      disposition: "verticillées",
    },

    fleur: {
      couleur: "violette",
      disposition: "fascicules",
      petale: "5",
    },
    partieUtil: "Fleurs",
    proprietes: "Émollientes, anti-inflammatoires, adoucissantes, laxatif léger",
    indicationsTrad:
      "En interne : inflammations digestives (estomac, intestins), gorges irritées, toux sèche, constipatio chronique. En externe : en cataplasme pour apaiser les petites irritations de la peau",
    coordonnees: [
      {
        lat: 34.138367492210854,
        lng: 2.7462037459468314,
      },
      {
        lat: 37.653621057615766,
        lng: 40.037372037642804,
      },
      {
        lat: 50.16235669945323,
        lng: 10.934475952907745,
      },
    ],
  },
  {
    id: 4,
    nom: {
      vernaculaire: "Chicorée sauvage",
      scientifique: "Cichorium intybus",
    },
    img: "http://www.fr36.org/plantes/chicoree-sauvage.webp",
    famille: "Asteraceae",
    feuille: {
      folioles: "simples",
      decoupe: "dentées",
      disposition: "alternées",
    },

    fleur: {
      couleur: "bleues",
      disposition: "panicules",
      petale: "> 15",
    },
    partieUtil: "Racines",
    proprietes: "Choléretique et cholagogue, apéritive, prébiotique",
    indicationsTrad:
      'En interne : dyspépsies, troubles de la digestion accompagnés de nausées, ballonements, etc. Pour stimuler l"appétit',
    coordonnees: [
      {
        lat: 48.55618625963882,
        lng: 2.05562612397562,
      },
      {
        lat: 42.55538722254759,
        lng: 84.163252611712,
      },
      {
        lat: 32.99971744056039,
        lng: 3.6047242366849535,
      },
    ],
  },
  {
    id: 5,
    nom: {
      vernaculaire: "Achillée millefeuille",
      scientifique: "Achillea millefolium",
    },
    img: "http://www.fr36.org/plantes/achille-millefeuille.webp",
    famille: "Asteraceae",
    feuille: {
      folioles: "simple",
      decoupe: "pennées",
      disposition: "alternées",
    },

    fleur: {
      couleur: "blanches",
      disposition: "corymbes",
    },

    partieUtil: "Sommités fleuries",
    proprietes: "Hémostatique, emménagogue, antispasmodique et décongestionante",
    indicationsTrad:
      "En infusion : soulagement des spasmes digestifs et menstruels, réduire les saignements trop abondants lors des règles. En externe : stopper les saignements (plaies, coupures)",
    coordonnees: [
      {
        lat: 53.49781927449844,
        lng: 83.08380943647768,
      },
      {
        lat: 44.03623337279991,
        lng: 0.11505934223644011,
      },
      {
        lat: 40.760510238029646,
        lng: -98.48060747644661,
      },
    ],
  },
  {
    id: 6,
    nom: {
      vernaculaire: "Grande aunée",
      scientifique: "Inula helenium",
    },
    img: "http://www.fr36.org/plantes/grande-aunee.webp",
    famille: "Asteraceae",
    feuille: {
      folioles: "simples",
      decoupe: "dentées",
      disposition: "alternées",
    },

    fleur: {
      couleur: "jaunes",
      disposition: "capitules",
    },

    partieUtil: "Racine",
    proprietes:
      "Bronchodilatatrice, expectorante, prébiotque, choléretique, cholagogue, diurétique",
    indicationsTrad:
      "En interne : encombrement des poumons, infections des bronches ou des poumons, ralentissement des fonctions d'éliminations de l'organisme",
    coordonnees: [
      {
        lat: 41.97687099176781,
        lng: 21.347804108288013,
      },
      {
        lat: 31.410085983608507,
        lng: 47.13854130299731,
      },
      {
        lat: 56.28728242499943,
        lng: 23.926877506771856,
      },
    ],
  },
  {
    id: 7,
    nom: {
      vernaculaire: "Epilobe à petite fleur",
      scientifique: "Epilobium parviflorum",
    },
    img: "http://www.fr36.org/plantes/epilobe-a-petites-fleurs.webp",
    famille: "Oenotheraceae",
    feuille: {
      folioles: "simple",
      decoupe: "dentées",
      disposition: "opposées",
    },

    fleur: {
      couleur: "jaunes",
      disposition: "capitules",
      petale: "4",
    },

    partieUtil: "Tiges et feuilles",
    proprietes: "Émollient et astringeant",
    indicationsTrad: "ballonement, spasmes digestifs, allaitement",
    coordonnees: [
      {
        lat: 48.86560891427111,
        lng: 20.70303535743318,
      },
      {
        lat: 43.28136854970913,
        lng: 53.42503317322064,
      },
      {
        lat: 47.35903072848311,
        lng: -104.54323474930759,
      },
    ],
  },
  {
    id: 8,
    nom: {
      vernaculaire: "Pavot de Californie",
      scientifique: "Eschscholzia californica",
    },

    img: "http://www.fr36.org/plantes/pavot-de-californie.webp",
    famille: "Papaveraceae",
    feuille: {
      folioles: "composées",
      decoupe: "lisses",
      disposition: "alternées",
    },

    fleur: {
      couleur: "oranges",
      disposition: "isolées",
      petale: "4",
    },
    partieUtil: "Parties aériennes fleuries",
    proprietes: "Sédatives et hypnotiques, anxiolytiques",
    indicationsTrad: "En interne : pour faciliter l'endormissement en cas d'insomnies et de stress",
    coordonnees: [
      {
        lat: 47.46810937532003,
        lng: -123.40271218096196,
      },
      {
        lat: -34.293535458242914,
        lng: -71.53032278766591,
      },
      {
        lat: 45.10547835041408,
        lng: -1.0310700212915667,
      },
    ],
  },
  {
    id: 9,
    nom: {
      vernaculaire: "Digitale pourpre",
      scientifique: "Digitalis purpurea",
    },
    img: "http://www.fr36.org/plantes/digitale-pourpre.webp",
    famille: "Scrophulariaceae",
    feuille: {
      folioles: "simple",
      decoupe: "dentées",
      disposition: "alternées",
    },

    fleur: {
      couleur: "rose",
      disposition: "grappes",
    },
    proprietes:
      "Plante extrêmement toxique ! Certains de ses principes actifs comme la dioxine sont utilisés à des dosages infimes dans des médicaments comme cardiotonique",
    coordonnees: [
      {
        lat: 42.23108338997669,
        lng: -4.90685883911829,
      },
      {
        lat: 48.36140142314136,
        lng: 5.022556067111329,
      },
      {
        lat: 51.22777733114312,
        lng: 17.564975436381882,
      },
    ],
  },
  {
    id: 10,
    nom: {
      vernaculaire: "Bourrache officinale",
      scientifique: "Borago officinalis",
    },
    img: "http://www.fr36.org/plantes/bourrache-officinale.webp",
    famille: "Boraginaceae",
    feuille: {
      folioles: "simple",
      decoupe: "poilues",
      disposition: "alternées",
    },

    fleur: {
      couleur: "bleues",
      disposition: "panicules",
      petale: "5",
    },
    partieUtil: "Graines (huile)",
    proprietes:
      "Anti-inflammatoire, émollient et humidifiant en voie cutanée de la peau et des muqueuses",
    indicationsTrad:
      "En interne : pour l'apport d'acide gamma-linolénique (précurseur des prostaglandines anti-inflammatoires. Notamment utile dans certains cas pour soulager le syndrome prémenstruel ou à la peri-ménopause. En externe : pour les peaux ou muqueuses sèches.",
    coordonnees: [
      {
        lat: 47.5917583061168,
        lng: 2.775373217934753,
      },
      {
        lat: 33.547113693884754,
        lng: 0.3191496526830822,
      },
      {
        lat: 40.598198617830604,
        lng: 34.67979414159286,
      },
    ],
  },
];
