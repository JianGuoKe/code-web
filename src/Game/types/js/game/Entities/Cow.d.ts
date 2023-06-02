export = Cow;
declare class Cow extends BaseEntity {
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity.js");
