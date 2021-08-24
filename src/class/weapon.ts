export abstract class Weapon{
    name : string;
    damage : number;

    protected constructor(name:string, damage:number) {
        this.name = name;
        this.damage = damage;
    }
}