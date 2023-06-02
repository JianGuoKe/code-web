export = Dolphin;
declare class Dolphin extends BaseEntity {
    getFrameForDirection(): "Dolphin09" | "Dolphin27" | "Dolphin18" | "Dolphin00" | "Dolphin_Surface15" | "Dolphin_Surface00";
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity");
