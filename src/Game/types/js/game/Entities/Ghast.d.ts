export = Ghast;
declare class Ghast extends BaseEntity {
    audioDelay: number;
    prepareSprite(): void;
    sprite: any;
    playMoan(number: any): void;
    patrolA(): void;
    patrolB(): void;
}
import BaseEntity = require("./BaseEntity.js");
