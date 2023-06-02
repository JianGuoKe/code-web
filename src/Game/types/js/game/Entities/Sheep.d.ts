export = Sheep;
declare class Sheep extends BaseEntity {
    naked: boolean;
    prepareSprite(): void;
    sprite: any;
    drop(commandQueueItem: any, itemType: any): boolean;
    getNakedSuffix(): "" | "naked_";
}
import BaseEntity = require("./BaseEntity.js");
