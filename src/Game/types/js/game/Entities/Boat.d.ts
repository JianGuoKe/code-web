export = Boat;
declare class Boat extends BaseEntity {
    /**
     * Apply a "bob up and down in the water" animation to the sprite,
     * which runs forever.
     * @param {Phaser.Game} game
     * @param {Phaser.Sprite} sprite
     * @returns {Phaser.Tween}
     */
    static addBobTween(game: Phaser.Game, sprite: Phaser.Sprite): Phaser.Tween;
    getFrameForDirection(): "Boat_05" | "Boat_01" | "Boat_07" | "Boat_03";
    prepareSprite(): void;
    sprite: any;
}
import BaseEntity = require("./BaseEntity");
