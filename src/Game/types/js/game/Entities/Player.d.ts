export = Player;
declare class Player extends BaseEntity {
    constructor(controller: any, type: any, x: any, y: any, name: any, isOnBlock: any, facing: any);
    name: any;
    isOnBlock: any;
    inventory: {};
    movementState: number;
    onTracks: boolean;
    moveDelayMin: number;
    moveDelayMax: number;
    /**
     * @override
     */
    override canPlaceBlockOver(toPlaceBlock: any, onTopOfBlock: any): {
        canPlace: boolean;
        plane: string;
    };
    /**
     * @override
     */
    override canPlaceBlock(block: any): any;
    /**
     * player walkable stuff
     */
    walkableCheck(block: any): void;
    updateMovement(): void;
    lastMovement: number;
    canUpdateMovement(): boolean;
    doMoveForward(commandQueueItem: any): void;
    doMoveBackward(commandQueueItem: any): void;
    afterMove(commandQueueItem: any): void;
    collectItems(targetPosition?: Position): void;
}
import BaseEntity = require("./BaseEntity.js");
import Position = require("../LevelMVC/Position");
