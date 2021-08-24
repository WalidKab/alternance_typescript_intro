import {Enemy} from "./enemy";
import {Fighter} from "../Interface/fighter";

export abstract class Character implements Fighter<Character>{
    name : string;
    gender : string;
    lifePoints : number;
    attackPoints : number;

    protected constructor(name : string, gender : string) {
        this.name = name;
        this.gender =  gender;
        this.lifePoints = 50;
        this.attackPoints =  Math.floor(Math.random() * 100) + 1;
    }

    summary(){
        return this.name + " tu es un personnage " + this.gender + " Tu dispose de " + this.lifePoints + " points de vie";
    }

    attack(fighter: Enemy){
        console.log(fighter.summary());
        console.log("Tu inflige " + this.attackPoints + " points de dégat à l'ennemi");
        fighter.lifePoints -= this.attackPoints;
        console.log(fighter.summary());
    }

    takeDamage(damage: number) {
        throw new Error("Method not implemented.");
    }
}
