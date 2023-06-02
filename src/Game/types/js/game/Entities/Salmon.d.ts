export = Salmon;
declare class Salmon extends BaseEntity {
    getFrameForDirection(): "Salmon08" | "Salmon24" | "Salmon16" | "Salmon00" | "Salmon_Surface00" | "Salmon_Surface13";
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity");
