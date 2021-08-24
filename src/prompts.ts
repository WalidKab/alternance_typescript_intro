export const questions = [
    {
        type: 'text',
        name: 'name',
        message: 'Quel est le nom de votre personnage?'
    },
    {
        type: 'select',
        name: 'gender',
        message: 'Quel est le genre de votre personnage?',
        choices: [
            {title: 'Féminin', value: "Féminin"},
            {title: 'Masculin', value: "Masculin"},
        ],
    },
    {
        type: 'select',
        name: 'characterType',
        message: 'Quel est le type de votre personnage?',
        choices: [
            {title: 'Guerrier', value: "Guerrier"},
            {title: 'Magicien', value: "Magicien"},
        ],
    }
];

export const fightQuestion = [
    {
        type: 'select',
        name: 'fightChoice',
        message: 'Que veux-tu faire?',
        choices: [
            {title: 'Combattre', value: 1},
            {title: 'Fuir', value: 2},
        ],
    }
];