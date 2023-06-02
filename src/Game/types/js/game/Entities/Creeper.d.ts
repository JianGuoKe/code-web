export = Creeper;
declare class Creeper extends BaseEntity {
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity.js");
