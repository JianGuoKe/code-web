export = Chicken;
declare class Chicken extends BaseEntity {
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity.js");
