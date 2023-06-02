export = Agent;
declare class Agent extends BaseEntity {
    constructor(controller: any, type: any, x: any, y: any, name: any, isOnBlock: any, facing: any);
    name: any;
    isOnBlock: any;
    inventory: {};
    movementState: number;
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
    updateMovement(): void;
    lastMovement: number;
    doMove(commandQueueItem: any, movement: any): void;
    doMoveForward(commandQueueItem: any): void;
    doMoveBackward(commandQueueItem: any): void;
    hasPermissionToWalk(actionBlock: any): any;
}
import BaseEntity = require("./BaseEntity.js");
