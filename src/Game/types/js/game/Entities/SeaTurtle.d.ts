export = SeaTurtle;
declare class SeaTurtle extends BaseEntity {
    getFrameForDirection(): "Sea_Turtle00" | "Sea_Turtle10" | "Sea_Turtle05" | "Sea_Turtle15" | "Sea_Turtle_Surface13" | "Sea_Turtle_Surface00";
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity");
