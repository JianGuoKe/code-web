export = TropicalFish;
declare class TropicalFish extends BaseEntity {
    getFrameForDirection(): "Tropical_Fish00" | "Tropical_Fish10" | "Tropical_Fish15" | "Tropical_Fish05" | "Tropical_Fish_Surface00" | "Tropical_Fish_Surface07";
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity");
