export = LevelPlane;
declare class LevelPlane {
    constructor(planeData: any, width: any, height: any, levelModel: any, planeType: any);
    _data: LevelBlock[];
    width: any;
    height: any;
    levelModel: any;
    planeType: any;
    playPistonOn: boolean;
    playPistonOff: boolean;
    redstoneAdjacencySet: AdjacencySet;
    /**
     * Determines whether the position in question is within the bounds of the plane.
     */
    inBounds(position: any): boolean;
    /**
     * Converts coordinates to a index
     */
    coordinatesToIndex(position: any): any;
    /**
    * Determines the positional coordinates given a specific index.
    */
    indexToCoordinates(index: any): Position;
    /**
     * Retrieve all the [x, y] coordinates within this plane
     *
     * @return {[Number, Number][]}
     */
    getAllPositions(): [number, number][];
    /**
     * Gets the block at the desired position within the plane, optionally with an
     * offset
     *
     * @param {Position} position - [x, y] coordinates of block
     *
     * @return {LevelBlock}
     */
    getBlockAt(position: Position): LevelBlock;
    isActionPlane(): boolean;
    isDecorationPlane(): boolean;
    isGroundPlane(): boolean;
    /**
     * Changes the block at a desired position to the desired block.
     * Important note: This is the cornerstone of block placing/destroying.
     */
    setBlockAt(position: any, block: any): any;
    /**
    * Gets the blocks within orthogonal positions around a given position.
    * Important note: This DOES to bounds checking. Will be undefined if OOB.
    */
    getOrthogonalBlocks(position: any): {
        north: {
            block: LevelBlock;
            relative: 2;
        };
        south: {
            block: LevelBlock;
            relative: 0;
        };
        east: {
            block: LevelBlock;
            relative: 3;
        };
        west: {
            block: LevelBlock;
            relative: 1;
        };
    };
    /**
     * Gets the blocks surrounding a given position.
     * Important note: This DOES to bounds checking. Will be undefined if OOB.
     */
    getSurroundingBlocks(position: any): {
        north: LevelBlock;
        northEast: LevelBlock;
        east: LevelBlock;
        southEast: LevelBlock;
        south: LevelBlock;
        southWest: LevelBlock;
        west: LevelBlock;
        northWest: LevelBlock;
    };
    /**
    * Gets the mask of the orthogonal indices around the given position.
    */
    getOrthogonalMask(position: any, comparator: any): number;
    getMinecartTrack(position: any, facing: any): any[];
    /**
     * Determine whether or not the blocks at the given positions are powered
     * rails that are connected to each other.
     *
     * @param {Posititon} left
     * @param {Posititon} right
     * @return {boolean}
     */
    getPoweredRailsConnected(left: Posititon, right: Posititon): boolean;
    /**
     * Propagate power to (and orient) all redstone wire in the level
     */
    powerRedstone(): Position[];
    createRedstoneAdjacencySet(): AdjacencySet;
    /**
     * Propagate power to (and orient) all powerable rails in the level.
     */
    powerRails(): [number, number][];
    /**
     * Determines which rail object should be placed given the context of surrounding
     * indices.
     */
    determineRailType(position: any, updateTouching?: boolean): void;
    /**
    * Determines which redstoneWire variant should be placed given the context of
    * surrounding indices and Powered state.
    */
    determineRedstoneSprite(position: any): string;
    /**
     * Updates the state and sprites of all redstoneWire on the plane.
     * Important note: This is what kicks off redstone charge propagation and is called
     * on place/destroy/run/load.... wherever updating charge is important.
     */
    refreshRedstone(): Position[];
    playPistonSound(): void;
    checkEntityConflict(position: any): boolean;
    /**
    * Evaluates what state Iron Doors on the map should be in.
    */
    getIronDoors(position: any): void;
    /**
    * Evaluates what state Pistons on the map should be in.
    */
    getPistonState(position: any): void;
    /**
    * Find all iron doors in a level and evaluate if they need to be animated based on state
    */
    findDoorToAnimate(positionInQuestion: any): void;
    /**
     * Activates a piston at a given position to push blocks away from it
     * depending on type.
     */
    activatePiston(position: any): void;
    pistonArmBlocked(position: any, offset: any): boolean;
    /**
     * Deactivates a piston at a given position by determining what the arm
     * orientation is.
     */
    deactivatePiston(position: any): void;
    /**
    * Does the actual retraction of the arm of a piston.
    */
    retractArm(armPosition: any, pistonPosition: any): void;
    /**
     * Goes through a list of blocks and shuffles them over 1 index in a given direction.
     *
     * @param {Position[]} blocksPositions
     * @param {Position} [offset=[0, 0]]
     */
    pushBlocks(blocksPositions: Position[], offset?: Position): void;
    /**
     * Returns a list of blocks in a given direction to be shuffled over later.
     * @param {Position} position
     * @param {Position} [offset=[0, 0]]
     */
    getBlocksToPush(position: Position, offset?: Position): Position[];
    /**
    * Checking power state for objects that are powered by redstone.
    */
    powerCheck(position: any, canReadCharge?: boolean): boolean;
    powerAllBlocks(): void;
    updateWeakCharge(position: any, block: any): void;
    getConduitRingPositions(position: any, ringSize: any): any[];
    resolveConduitState(): void;
    getRingRequirement(ringSize: any): number;
}
import LevelBlock = require("./LevelBlock.js");
import AdjacencySet = require("./AdjacencySet");
import Position = require("./Position");
