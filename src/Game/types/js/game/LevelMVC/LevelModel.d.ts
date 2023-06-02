export = LevelModel;
declare class LevelModel {
    constructor(levelData: any, controller: any);
    planeWidth: any;
    planeHeight: any;
    controller: any;
    player: {};
    agent: {};
    usingAgent: boolean;
    initialLevelData: any;
    initialPlayerState: any;
    initialAgentState: any;
    isUnderwater(): boolean;
    getOceanType(): any;
    isInBoat(): any;
    planeArea(): number;
    inBounds(position: any): boolean;
    reset(): void;
    groundPlane: LevelPlane;
    groundDecorationPlane: LevelPlane;
    shadingPlane: any[];
    actionPlane: LevelPlane;
    fluffPlane: LevelPlane;
    fowPlane: any[];
    isDaytime: any;
    usePlayer: any;
    /**
     * Creates the Agent entity
     *
     * @param {Object} levelData the initial level data object, specifying the
     *        Agent's default position and direction
     * @param {[Number, Number]} [positionOverride] optional position override
     * @param {Number} [directionOverride] optional direction override
     */
    spawnAgent(levelData: any, positionOverride?: [number, number], directionOverride?: number): void;
    /**
     * Destroys the agent entity; is the inverse of spawnAgent.
     */
    destroyAgent(): void;
    yToIndex(y: any): number;
    isSolved(): any;
    isFailed(): any;
    getHouseBottomRight(): Position;
    isPlayerNextTo(blockType: any): boolean;
    isEntityNextTo(entityType: any, blockType: any): any;
    isEntityOnBlocktype(entityType: any, blockType: any, count?: number): boolean;
    /**
     * @param {string} entityType
     * @param {Position|Number[]} position to check against as either a Position
     *        instance or an array of the form [x, y]. Array-style position is
     *        supported for compability with the verification API
     */
    isEntityAt(entityType: string, position: Position | number[]): boolean;
    isEntityTypeRunning(entityType: any): boolean;
    isEntityDied(entityType: any, count?: number): boolean;
    getScore(): any;
    shouldRide(direction: any): boolean;
    isNextRailValid(block: any, direction: any): boolean;
    getNextRailPosition(entity: {}, direction: any): Position;
    getEntityCount(entityType: any): any;
    getCommandExecutedCount(commandName: any, targetType: any): any;
    getRepeatCommandExecutedCount(commandName: any, targetType: any): any;
    getTurnRandomCount(): any;
    getInventoryAmount(inventoryType: any): any;
    getInventoryTypes(): string[];
    countOfTypeOnMap(blockType: any): number;
    /**
     * @param {Position|Number[]} position to check against as either a Position
     *        instance or an array of the form [x, y]. Array-style position is
     *        supported for compability with the verification API
     */
    isPlayerAt(position: Position | number[]): boolean;
    spritePositionToIndex(offset: any, spritePosition: any): Position;
    solutionMapMatchesResultMap(solutionMap: any): boolean;
    getTnt(): [number, number][];
    getMoveForwardPosition(entity?: {}): Position;
    getMoveDirectionPosition(entity: any, direction: any): Position;
    isForwardBlockOfType(blockType: any): boolean;
    getForwardBlockType(): any;
    getForwardBlock(): LevelBlock;
    isBlockOfType(position: any, blockType: any): boolean;
    isEntityOfType(position: any, type: any): any;
    isBlockOfTypeOnPlane(position: any, blockType: any, plane: any): boolean;
    isPlayerStandingInWater(): boolean;
    isPlayerStandingInLava(): boolean;
    coordinatesToIndex(coordinates: any): any;
    checkPositionForTypeAndPush(blockType: any, position: any, objectArray: any): boolean;
    houseGroundToFloorHelper(position: any, woolType: any, arrayCheck: any): any;
    houseGroundToFloorBlocks(startingPosition: any): any;
    getEntityAt(position: any): any;
    getAllBorderingPositionNotOfType(position: any, blockType: any): boolean[];
    getAllBorderingPosition(position: any, blockType: any): boolean[];
    canMoveForward(entity?: {}): false | boolean[];
    canMoveBackward(entity?: {}): boolean[];
    isPositionEmpty(position: any, entity?: {}): boolean[];
    canMoveDirection(entity: {}, direction: any): false | boolean[];
    canPlaceBlock(entity: any, blockAtPosition: any): any;
    canPlaceBlockDirection(blockType: string, entity: any, direction: any): boolean;
    checkEntityConflict(position: any): boolean;
    canPlaceBlockForward(blockType?: string, entity?: {}): boolean;
    getPlaneToPlaceOn(position: any, entity: any, blockType: any): LevelPlane;
    canDestroyBlockForward(entity?: {}): boolean;
    moveForward(entity?: {}): void;
    moveBackward(entity?: {}): void;
    moveTo(position: any, entity?: {}): void;
    turnLeft(entity?: {}): void;
    turnRight(entity?: {}): void;
    turnToDirection(entity: {}, direction: any): void;
    moveDirection(entity: {}, direction: any): void;
    placeBlock(blockType: any, entity?: {}): any;
    placeBlockForward(blockType: any, targetPlane: any, entity?: {}): any;
    placeBlockDirection(blockType: any, targetPlane: any, entity: any, direction: any): any;
    destroyBlock(position: any): LevelBlock;
    destroyBlockForward(entity: any): LevelBlock;
    solveFOWTypeForMap(): void;
    solveFOWTypeFor(position: any, emissives: any): void;
    pushIfHigherPrecedence(index: any, fowObject: any): void;
    /**
     * @return {Position[]}
     */
    getAllEmissives(): Position[];
    /**
     * @param {Position[]}
     */
    findBlocksAffectedByEmissives(emissives: any): {};
    findEmissivesThatTouch(position: any, emissives: any): any[];
    computeFowPlane(): void;
    clearFowAround(x: any, y: any): void;
    clearFowAt(x: any, y: any): void;
    clearFow(): void;
    computeShadingPlane(): void;
    occludedBy(block: any): boolean;
    computeShading(plane: any): void;
}
import LevelPlane = require("./LevelPlane.js");
import Position = require("./Position.js");
import LevelBlock = require("./LevelBlock.js");
