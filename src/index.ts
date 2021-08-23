import {Character} from "./class/character";
import {Enemy} from "./class/enemy";

const prompts = require('prompts');

const questions = [
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
    }
];

const fightQuestion = [
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

function fight(choice: number, character: Character) {
    if (choice == 1) {
        const enemy = new Enemy();
        console.log("Le combat va commencer");
        do {
            character.attack(enemy);
            console.log("_________________");

            if (enemy.lifePoints > 0) {
                console.log("L'ennemi riposte");
                enemy.attack(character);
                console.log("_________________");
            }
        }
        while (enemy.lifePoints > 0 && character.lifePoints > 0);

        if (enemy.lifePoints <= 0) {
            console.log("L'ennemi a été vaincu");
        }
        else {
            console.log("Tu es mort");
        }

    } else {
        console.log("Tu fuis, la partie s'arrête ici")
    }
}

(async () => {
    const response = await prompts(questions);
    const playerCharacter = new Character(response.name, response.gender);
    console.log(playerCharacter.summary());
    console.log('Prends garde! Un ennemi approche!');

    const fightResponse = await prompts(fightQuestion);
    fight(fightResponse.fightChoice, playerCharacter);
})();