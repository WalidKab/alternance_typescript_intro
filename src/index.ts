import {Character} from "./class/character";
import {Enemy} from "./class/enemy";
import {fightQuestion, questions} from "./prompts";
import {Warrior} from "./class/warrior";
import {Wizard} from "./class/wizard";

const prompts = require('prompts');

function choosenType(choice:string, name:string, gender:string){
    let choosenClass:Character;
    if (choice== "Guerrier"){
        choosenClass = new Warrior(name, gender);
    }
    else {
        choosenClass = new Wizard(name, gender);
    }
    return choosenClass;
}

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
    const playerCharacter = choosenType(response.characterType, response.name, response.gender);
    console.log(playerCharacter.summary());
    console.log('Prends garde! Un ennemi approche!');

    const fightResponse = await prompts(fightQuestion);
    fight(fightResponse.fightChoice, playerCharacter);
})();