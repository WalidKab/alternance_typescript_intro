import {Character} from "./character";

export class Wizard extends Character{

    constructor(name : string, gender : string) {
        super(name, gender);
        this.attackPoints += 25;
    }

}