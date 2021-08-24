import {Character} from "./character";

export class Warrior extends Character{

    constructor(name : string, gender : string) {
        super(name, gender);
        this.lifePoints += 25;
    }

}