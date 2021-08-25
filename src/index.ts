import {Character} from "./class/character";
import {Enemy} from "./class/enemy";
import {fightQuestion, questions} from "./prompts";
import {Warrior} from "./class/warrior";
import {Wizard} from "./class/wizard";
import {Weapon} from "./class/weapon";
import {Sword} from "./class/sword";
import {Bow} from "./class/bow";

const axios = require('axios').default;
const prompts = require('prompts');

function chosenType(choice: string, name: string, gender: string, weapon:Weapon) {
    let choosenClass: Character;
    if (choice == "Guerrier") {
        choosenClass = new Warrior(name, gender, weapon);
    } else {
        choosenClass = new Wizard(name, gender, weapon);
    }
    return choosenClass;
}

function choosenWeapon(choice : string){
    let chosenWeapon : Weapon;
    if (choice=="Epée"){
        chosenWeapon = new Sword();
    }
    else{
        chosenWeapon = new Bow();
    }
    return chosenWeapon;
}

async function fight(choice: number, character: Character) {
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
        } else {
            console.log("Tu es mort");
        }
    } else {
        // await apiMessage();
        console.log("heyheyehey")
    }

}

async function apiMessage() {
    try {
        const response = await axios.get('https://kaamelott.hotentic.com/api/random/personnage/Le%20Ma%C3%AEtre%20d\'Armes');
        console.log(response.data.citation.citation);
    } catch (error) {
        console.error(error);
    }
}

(async () => {
    const response = await prompts(questions);
    const playerWeapon = choosenWeapon(response.weaponChosen);
    const playerCharacter = chosenType(response.characterType, response.name, response.gender, playerWeapon);
    console.log(playerCharacter.weapon.name)
    console.log(playerCharacter.summary());
    let gameIsRunning = 1;
    do {
        console.log('Prends garde! Un ennemi approche!');
        const fightResponse = await prompts(fightQuestion);
        if (fightResponse.fightChoice == 2){
            await apiMessage();
            gameIsRunning = 0;
        }
        else{
            fight(fightResponse.fightChoice, playerCharacter);
        }
    }
    while (playerCharacter.lifePoints > 0 && gameIsRunning == 1 );
})();