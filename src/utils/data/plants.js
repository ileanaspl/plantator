const plantes = [
    {
        anis: {
            id: 1,
            nom: {
                vernaculaire: 'Anis vert',
                scientifique: 'Pimpinella anisum'
            },
            img: '../../assets/anis_vert.jpg',
            famille: 'Apiacées',
            feuille: {
                folioles: 'composées',
                decoupe: 'dentelées',
                disposition: 'alternées'
            },

            fleur:
            {
                couleur: 'blanche',
                disposition: 'ombelles',
            },

            fruit:
            {
                couleur: 'gris verdâtre',
                forme: 'oblongue',
                odeur: 'forte',
            },

        },
        millepertuis: {
            id: 2,
            nom: {
                vernaculaire: 'Millepertuis perforé',
                scientifique: 'Hypericum perforatum'
            },
            img: '../../assets/plantes/millepertuis-perfore.jpg',
            famille: 'Apiacées',
            feuille:
            {
                folioles: 'simples',
                decoupe: 'lisses',
                disposition: 'opposées',
            },

            fleur:
            {
                couleur: 'jaunes',
                disposition: 'panicules',
                petale: '5',
            },

            geolocX: 1,
            geolocY: 2,
        },
        mauve: {
            id: 3,
            nom: {
                vernaculaire: 'Mauve sylvestre',
                scientifique: 'Malva sylvestris'
            },
            img: '../../assets/plantes/mauve-sylvestre.jpg',
            famille: 'Malvaceae',
            feuille:
            {
                folioles: 'simples',
                decoupe: 'dentelées',
                disposition: 'verticillées',
            },

            fleur:
            {
                couleur: 'violette',
                disposition: 'fascicules',
                petale: '5',
            },

            geolocX: 1,
            geolocY: 2,
        },
        chicoree: {
            id: 4,
            nom: {
                vernaculaire: 'Chicorée sauvage',
                scientifique: 'Cichorium intybus'
            },
            img: '../../assets/plantes/chicoree-sauvage.jpg',
            famille: 'Asteraceae',
            feuille:
            {
                folioles: 'simples',
                decoupe: 'dentelées',
                disposition: 'alternées',
            },

            fleur:
            {
                couleur: 'bleues',
                disposition: 'panicules',
                petale: '> 15',
            },

            geolocX: 1,
            geolocY: 2,
        },
        achillee: {
            id: 5,
            nom: {
                vernaculaire: 'Achillée millefeuille',
                scientifique: 'Achillea millefolium'
            },
            img: '../../assets/plantes/achille-millefolium.jpg',
            famille: 'Asteraceae',
            feuille:
            {
                folioles: 'simple',
                decoupe: 'pennées',
                disposition: 'alternées',
            },

            fleur:
            {
                couleur: 'blanches',
                disposition: 'corymbes',
            },

            partieUtil: 'Sommités fleuries',
            proprietes: 'Hémostatique, emménagogue, antispasmodique et décongestionante',
            indicationsTrad:
                'En infusion : soulagement des spasmes digestifs et menstruels, réduire les saignements trop abondants lors des règles. En externe : stopper les saignements (plaies, coupures)',
            geolocX: 1,
            geolocY: 2,
        },
        aunee: {
            id: 6,
            nom: {
                vernaculaire: 'Grande aunée',
                scientifique: 'Inula helenium'
            },
            img: '../../assets/plantes/grande-aunee.jpg',
            famille: 'Asteraceae',
            feuille:
            {
                folioles: 'simples',
                decoupe: 'dentées',
                disposition: 'alternées',
            },

            fleur:
            {
                couleur: 'jaunes',
                disposition: 'capitules',
            },

            partieUtil: 'Racine',
            proprietes: 'Bronchodilatatrice, expectorante, prébiotque, choléretique, cholagogue, diurétique',
            indicationsTrad:
                "En interne : encombrement des poumons, infections des bronches ou des poumons, ralentissement des fonctions d'éliminations de l'organisme",
            geolocX: 1,
            geolocY: 2,
        },
        epilobe: {
            id: 7,
            nom: {
                vernaculaire: 'Epilobe à petite fleur',
                scientifique: 'Epilobium parviflorum'
            },
            img: '../../assets/plantes/epilobe-a-petites-fleurs.jpg',
            famille: 'Oenotheraceae',
            feuille:
            {
                folioles: 'simple',
                decoupe: 'dentées',
                disposition: 'opposées',
            },

            fleur:
            {
                couleur: 'jaunes',
                disposition: 'capitules',
                petale: '4',
            },

            partieUtil: 'Tiges et feuilles',
            proprietes: 'émollient et astringeant',
            indicationsTrad: 'ballonement, spasmes digestifs, allaitement',
            geolocX: 1,
            geolocY: 2,
        },
        pavot: {
            id: 8,
            nom:
            {
                vernaculaire: 'Pavot de Californie',
                scientifique: 'Eschscholzia californica'
            },

            img: '../../assets/plantes/pavot-de-californie.jpg',
            famille: 'Papaveraceae',
            feuille:
            {
                folioles: 'composées',
                decoupe: 'lisses',
                disposition: 'alternées',
            },

            fleur:
            {
                couleur: 'oranges',
                disposition: 'isolées',
                petale: '4',
            },

            geolocX: 1,
            geolocY: 2,
        },
        digitale: {
            id: 9,
            nom: {
                vernaculaire: 'Digitale pourpre',
                scientifique: 'Digitalis purpurea'
            },
            img: '../../assets/plantes/digitale-pourpre.jpg',
            famille: 'Scrophulariaceae',
            feuille:
            {
                folioles: 'simple',
                decoupe: 'dentées',
                disposition: 'alternées',
            },

            fleur:
            {
                couleur: 'pourpres',
                disposition: 'grappes',
            },

            geolocX: 1,
            geolocY: 2,
        },
        bourrache: {
            id: 10,
            nom: {
                vernaculaire: 'Bourrache officinale',
                scientifique: 'Borago officinalis'
            },
            img: '../../assets/plantes/bourrache-officinale.jpg',
            famille: 'Boraginaceae',
            feuille:
            {
                folioles: 'simple',
                decoupe: 'poilues',
                disposition: 'alternées',
            },

            fleur:
            {
                couleur: 'bleues',
                disposition: 'panicules',
                petale: '5',
            },

            geolocX: 1,
            geolocY: 2,
        },
    },
];
