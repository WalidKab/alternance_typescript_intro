import {Character} from "./character";
import {Weapon} from "./weapon";

export class Wizard extends Character{

    constructor(name : string, gender : string, weapon : Weapon) {
        super(name, gender, weapon);
        this.attackPoints += 25;
    }

}