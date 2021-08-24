import {Character} from "./character";
import {Fighter} from "../Interface/fighter";

export class Enemy implements Fighter<Enemy>{
    name: string;
    attackPoints: number;
    lifePoints: number;

    constructor() {
        this.name = "L'elfe riche";
        this.attackPoints = Math.floor(Math.random() * 100) + 1;
        this.lifePoints = 50;
    }

    summary() {
        return "Attention, un ennemi : " + this.name + " dispose de " + this.attackPoints + " points d'attaque et de " + this.lifePoints + " points de vie";
    }

    attack(fighter: Character) {
        console.log(fighter.summary());
        console.log("L'ennemi t'as infligé " + this.attackPoints + " points de dégat");
        fighter.lifePoints -= this.attackPoints;
        console.log(fighter.summary());
    }

    takeDamage(damage: number): any {
    }
}