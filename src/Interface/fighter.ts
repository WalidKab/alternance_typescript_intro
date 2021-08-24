export interface Fighter <T>{
    attack(fighter: Fighter<T>):any;

    takeDamage(damage : number):any;
}