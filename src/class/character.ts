import {Enemy} from "./enemy";

export class Character{
    name : string;
    gender : string;
    lifePoints : number;
    attackPoints : number;


    constructor(name : string, gender : string) {
        this.name = name;
        this.gender =  gender;
        this.lifePoints = 50;
        this.attackPoints =  Math.floor(Math.random() * 100) + 1;
    }

    summary(){
        return this.name + " vous êtes un personnage " + this.gender + " Vous disposez de " + this.lifePoints + " points de vie";
    }

    attack(enemy: Enemy){
        console.log(enemy.summary());
        console.log("Vous infliger " + this.attackPoints + " points de dégat");
        enemy.lifePoints -= this.attackPoints;
        console.log(enemy.summary());
    }
}
