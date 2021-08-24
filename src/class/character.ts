import {Enemy} from "./enemy";
import {Fighter} from "../Interface/fighter";
import {Weapon} from "./weapon";

export abstract class Character implements Fighter<Character>{
    name : string;
    gender : string;
    lifePoints : number;
    attackPoints : number;
    weapon : Weapon;

    protected constructor(name : string, gender : string, weapon : Weapon) {
        this.name = name;
        this.gender =  gender;
        this.lifePoints = 50;
        this.attackPoints =  Math.floor(Math.random() * 100) + 1;
        this.weapon = weapon;
    }

    summary(){
        return this.name + " tu es un personnage " + this.gender + " Tu dispose de " + this.lifePoints + " points de vie";
    }

    attack(fighter: Enemy){
        console.log(fighter.summary());
        console.log("Tu inflige " + this.attackPoints + " points de dégat à l'ennemi et " + this.weapon.damage + " points grace à ton arme");
        fighter.lifePoints -= (this.attackPoints + this.weapon.damage );
        console.log(fighter.summary());
    }

    takeDamage(damage: number) {
        throw new Error("Method not implemented.");
    }
}
