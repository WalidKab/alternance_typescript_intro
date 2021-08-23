import {Character} from "./character";

export class Enemy {
    name: string;
    attackPoints: number;
    lifePoints: number;

    constructor() {
        this.name = "La Gobeline";
        this.attackPoints = Math.floor(Math.random() * 100) + 1;
        this.lifePoints = 50;
    }

    summary() {
        return "Attention, un ennemi : " + this.name + " dispose de " + this.attackPoints + " points d'attaque et de " + this.lifePoints + " points de vie";
    }

    attack(character: Character) {
        console.log(character.summary());
        console.log("L'ennemi vous inflige " + this.attackPoints + " points de dégat");
        character.lifePoints -= this.attackPoints;
        console.log(character.summary());
    }
}