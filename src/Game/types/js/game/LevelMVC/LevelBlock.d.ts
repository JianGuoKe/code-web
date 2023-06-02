export = LevelBlock;
declare class LevelBlock {
    /**
     * Static to determine if a block would fall from Action Plane into Ground Plane.
     * @param {String} blockType
     * @return {boolean}
     */
    static getCanFall(blockType: string): boolean;
    /**
     * Static to determine if a block is placeable over water at all.
     * @param {String} blockType
     * @return {boolean}
     */
    static getIsPlaceableInLiquid(blockType: string): boolean;
    /**
     * Static passthrough to the isWalkable property for the given blockType.
     * TODO @hamms: remove this method once all calling methods have been updated
     *      to operate on actual LevelBlocks rather than blockType strings
     *
     * @param {String} blockType
     * @return {boolean}
     */
    static isWalkable(blockType: string): boolean;
    /**
     * Does the given block type represent a miniblock?
     * TODO @hamms: remove this method once all calling methods have been updated
     *      to operate on actual LevelBlocks rather than blockType strings
     *
     * @param {String} blockType
     * @return {boolean}
     */
    static isMiniblock(blockType: string): boolean;
    /**
     * Does the given block type represent a chest that reveals a miniblock?
     * TODO @hamms: remove this method once all calling methods have been updated
     *      to operate on actual LevelBlocks rather than blockType strings
     *
     * @param {String} blockType
     * @return {boolean}
     */
    static isChestblock(blockType: string): boolean;
    /**
     * Static passthrough to the isWalkable property for the given blockType.
     * TODO @hamms: remove this method once all calling methods have been updated
     *      to operate on actual LevelBlocks rather than blockType strings
     *
     * @param {String} blockType
     * @return {boolean}
     */
    static isFlat(blockType: string): boolean;
    static skipsDestructionOverlay(blockType: any): boolean;
    static notValidOnGroundPlane(blockType: any): any;
    /**
     * For any given block type, get the appropriate mini block frame (as defined
     * in LevelView.miniblocks) if it exists.
     *
     * For miniblock block types, this should be the miniblock itself, so this
     * means simply removing the "Miniblock" identifier, so a "diamondMiniblock"
     * block will produce a "diamond" frame.
     *
     * For regular block types, this should be the miniblock produced when
     * destroying the block type, so a "oreDiamond" block will produce a "diamond"
     * frame
     *
     * @param {String} blockType
     * @return {String} frame identifier
     */
    static getMiniblockFrame(blockType: string): string;
    constructor(blockType: any);
    blockType: any;
    isEntity: boolean;
    isWalkable: boolean;
    isPlacable: boolean;
    isDestroyable: boolean;
    isUsable: boolean;
    isEmpty: boolean;
    isEmissive: boolean;
    isTransparent: boolean;
    isRedstone: boolean;
    isPowered: boolean;
    isConnectedToRedstone: boolean;
    isRedstoneBattery: boolean;
    isOpen: boolean;
    isRail: boolean;
    isSolid: boolean;
    isWeaklyPowerable: boolean;
    isStickable: boolean;
    isActivatedConduit: boolean;
    connectionA: any;
    connectionB: any;
    /**
     * Does the given block type represent a "flat" block?
     * "flat" blocks are those subset of walkable blocks which are walkable
     * because they are lying right on the ground, as opposed to those blocks like
     * torches which are walkable because they do not occupy very much space.
     *
     * @return {boolean}
     */
    isFlat(): boolean;
    notValidOnGroundPlane(): any;
    skipsDestructionOverlay(): boolean;
    shouldRenderOnGroundPlane(): boolean;
    getIsPowerableRail(): boolean;
    /**
     * Helper method specifically for powered rails, which can only be veritical
     * or horizontal.
     *
     * @return {boolean}
     */
    getIsHorizontal(): boolean;
    /**
     * Helper method specifically for powered rails, which can only be veritical
     * or horizontal.
     *
     * @return {boolean}
     */
    getIsVertical(): boolean;
    getIsStickyPiston(): boolean;
    canHoldCharge(): boolean;
    /**
     * @see {LevelBlock.isMiniblock}
     * @return {boolean}
     */
    getIsMiniblock(): boolean;
    /**
     * @see {LevelBlock.isChestBlock}
     * @return {boolean}
     */
    getIsChestblock(): boolean;
    getIsTree(): boolean;
    getIsDoor(): any;
    getIsConduit(): any;
    getIsLiquid(): boolean;
    getCanFall(): boolean;
    /**
     * Can this block be placed in liquid to replace a liquid block? Should
     * generally be true for all "standard" blocks like cobblestone and dirt, and
     * false for all "special" blocks like redstone and torches.
     *
     * @return {boolean}
     */
    getIsPlaceableInLiquid(): boolean;
    /**
     * Note that this will be true for blocks representing the unpowered piston,
     * the "base" of the powered piston, AND the extended arm of the powered
     * piston
     *
     * @return {boolean}
     */
    getIsPiston(): boolean;
    /**
     * @return {boolean}
     */
    getIsPistonArm(): boolean;
    getIsPushable(): boolean;
    isDestroyableUponPush(): any;
    needToRefreshRedstone(): boolean;
    getPistonDirection(): 0 | 2 | 1 | 3;
    getIsEmptyOrEntity(): boolean;
}
