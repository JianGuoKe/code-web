export = Zombie;
declare class Zombie extends BaseEntity {
    burningSprite: any[];
    burningSpriteGhost: any[];
    burningSpriteOffset: number[];
    setBurn(burn: any): void;
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity.js");
