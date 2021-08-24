import {Character} from "./character";
import {Weapon} from "./weapon";

export class Warrior extends Character{

    constructor(name : string, gender : string, weapon : Weapon) {
        super(name, gender, weapon);
        this.lifePoints += 25;
    }

}