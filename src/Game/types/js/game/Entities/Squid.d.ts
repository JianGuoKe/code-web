export = Squid;
declare class Squid extends BaseEntity {
    getOffsetForDirection(): number[];
    getFrameForDirection(): "Squid32" | "Squid00" | "Squid48" | "Squid17";
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity");
