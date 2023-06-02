export = BaseEntity;
declare class BaseEntity {
    constructor(controller: any, type: any, identifier: any, x: any, y: any, facing: any);
    queue: CommandQueue;
    controller: any;
    game: any;
    position: Position;
    type: any;
    facing: any;
    offset: number[];
    identifier: any;
    healthPoint: number;
    underTree: {
        state: boolean;
        treeIndex: number;
    };
    tick(): void;
    reset(): void;
    canMoveThrough(): boolean;
    canPlaceBlock(): boolean;
    canTriggerPressurePlates(): boolean;
    /**
     * Whether or not the white "selection indicator" highlight square should
     * update to follow this entity around as it moves and interacts with the
     * world
     *
     * @return {boolean}
     */
    shouldUpdateSelectionIndicator(): boolean;
    setMovePosition(position: any): void;
    /**
     * For entities which need to be able to accomodate rendering in the same
     * cell as other entities, provide a way to define a rendering offset.
     *
     * @see LevelView.playPlayerAnimation
     * @see LevelView.playMoveForwardAnimation
     * @return Number
     */
    getSortOrderOffset(): number;
    addCommand(commandQueueItem: any, repeat?: boolean): void;
    addAnimation(...args: any[]): any;
    getAnimationManager(): any;
    getWalkAnimation(): string;
    getIdleAnimation(): string;
    playMoveForwardAnimation(position: any, facing: any, commandQueueItem: any, groundType: any): void;
    /**
     * player walkable stuff
     */
    walkableCheck(): void;
    updateHidingTree(): void;
    updateHidingBlock(prevPosition: any): void;
    doMoveForward(commandQueueItem: any, forwardPosition: any): void;
    bump(commandQueueItem: any): void;
    callBumpEvents(forwardPositionInformation: any): void;
    moveDirection(commandQueueItem: any, direction: any): void;
    moveForward(commandQueueItem: any, record?: boolean): void;
    moveBackward(commandQueueItem: any, record?: boolean): void;
    /**
     * @typedef {Object} CanPlace
     * @property {boolean} canPlace - whether or not placement is allowed at all
     * @property {string} plane - which plane the block should be placed on. Can
     *                    be either "groundPlane" or "actionPlane"
     */
    /**
     * check whether or not the entity can place the given block on top of the
     * given block
     *
     * @param {LevelBlock} [toPlaceBlock]
     * @param {LevelBlock} [onTopOfBlock]
     * @return {CanPlace}
     */
    canPlaceBlockOver(): {
        /**
         * - whether or not placement is allowed at all
         */
        canPlace: boolean;
        /**
         * - which plane the block should be placed on. Can
         * be either "groundPlane" or "actionPlane"
         */
        plane: string;
    };
    /**
     * check all the movable points and choose the farthest one
     *
     * @param {any} commandQueueItem
     * @param {any} moveAwayFrom (entity)
     *
     * @memberOf BaseEntity
     */
    moveAway(commandQueueItem: any, moveAwayFrom: any): void;
    /**
     * check all the movable points and choose the farthest one
     *
     * @param {any} commandQueueItem
     * @param {any} moveTowardTo (entity)
     *
     * @memberOf BaseEntity
     */
    moveToward(commandQueueItem: any, moveTowardTo: any): boolean;
    moveTo(commandQueueItem: any, moveTowardTo: any): void;
    turn(commandQueueItem: any, direction: any, record?: boolean): void;
    turnRandom(commandQueueItem: any): void;
    use(commandQueueItem: any, userEntity: any): void;
    drop(commandQueueItem: any, itemType: any): void;
    attack(commandQueueItem: any): void;
    pushBack(commandQueueItem: any, pushDirection: any, movementTime: any, completionHandler: any): void;
    takeDamage(callbackCommand: any): void;
    playRandomIdle(facing: any): void;
    updateAnimationDirection(): void;
    getDistance(entity: any): number;
    blowUp(commandQueueItem: any, explosionPosition: any): void;
    hasPermissionToWalk(actionBlock: any, frontEntity: any, groundBlock?: any): boolean;
    handleMoveOffPressurePlate(moveOffset: any): void;
    handleMoveOnPressurePlate(moveOffset: any): boolean;
    handleMoveOffIronDoor(moveOffset: any): void;
    handleMoveAwayFromPiston(moveOffset: any): void;
    handleGetOnRails(direction: any): void;
    getOffTrack: boolean;
}
import CommandQueue = require("../CommandQueue/CommandQueue.js");
import Position = require("../LevelMVC/Position.js");
