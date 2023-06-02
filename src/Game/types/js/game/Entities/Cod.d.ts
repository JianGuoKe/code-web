export = Cod;
declare class Cod extends BaseEntity {
    getFrameForDirection(): "Cod00" | "Cod10" | "Cod05" | "Cod15" | "Cod_Surface00" | "Cod_Surface06";
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity");
