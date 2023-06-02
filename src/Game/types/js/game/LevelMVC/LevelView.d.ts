export = LevelView;
declare class LevelView {
    constructor(controller: any);
    controller: any;
    audioPlayer: any;
    game: any;
    baseShading: any;
    prismarinePhase: number;
    uniforms: {
        time: {
            type: string;
            value: number;
        };
        surface: {
            type: string;
            value: any;
        };
        tint: {
            type: string;
            value: number[];
        };
        x: {
            type: string;
            value: number;
        };
        y: {
            type: string;
            value: number;
        };
    };
    waveShader: any;
    player: any;
    agent: any;
    selectionIndicator: any;
    groundGroup: any;
    shadingGroup: any;
    actionGroup: any;
    fluffGroup: any;
    fowGroup: any;
    collectibleItems: any[];
    trees: any[];
    miniBlocks: {
        bed: string;
        boat: string;
        bookEnchanted: string;
        bricks: string;
        bucketEmpty: string;
        bucketLava: string;
        milk: string;
        bucketWater: string;
        cactus: string;
        carrots: string;
        chest: string;
        clay: string;
        coal: string;
        dirtCoarse: string;
        cobblestone: string;
        compass: string;
        blackConcrete: string;
        blueConcrete: string;
        brownConcrete: string;
        blackConcretePowder: string;
        blueConcretePowder: string;
        brownConcretePowder: string;
        deadbush: string;
        diamond: string;
        axeDiamond: string;
        pickaxeDiamond: string;
        shovelDiamond: string;
        dirt: string;
        door: string;
        doorIron: string;
        egg: string;
        emerald: string;
        flint: string;
        flintAndSteel: string;
        daisy: string;
        dandelion: string;
        poppy: string;
        glowstoneDust: string;
        ingotGold: string;
        gravel: string;
        gunPowder: string;
        hardenedClay: string;
        hardenedClayBlack: string;
        hardenedClayBlue: string;
        hardenedClayBrown: string;
        hardenedClayCyan: string;
        hardenedClayGray: string;
        hardenedClayGreen: string;
        hardenedClayLightBlue: string;
        hardenedClayLime: string;
        hardenedClayMagenta: string;
        hardenedClayOrange: string;
        hardenedClayPink: string;
        hardenedClayPurple: string;
        hardenedClayRed: string;
        hardenedClaySilver: string;
        hardenedClayWhite: string;
        hardenedClayYellow: string;
        heartofthesea: string;
        ingotIron: string;
        lapisLazuli: string;
        logAcacia: string;
        logBirch: string;
        logJungle: string;
        logOak: string;
        logSpruce: string;
        mapEmpty: string;
        minecart: string;
        nautilus: string;
        netherbrick: string;
        netherrack: string;
        obsidian: string;
        piston: string;
        planksAcacia: string;
        planksBirch: string;
        planksJungle: string;
        planksOak: string;
        planksSpruce: string;
        potato: string;
        potion: string;
        pressurePlateOak: string;
        prismarine: string;
        quartzOre: string;
        railGolden: string;
        railNormal: string;
        redstoneDust: string;
        redstoneTorch: string;
        reeds: string;
        sand: string;
        sandstone: string;
        seaPickles: string;
        seedsWheat: string;
        snow: string;
        snowBall: string;
        tnt: string;
        torch: string;
        turtle: string;
        cropWheat: string;
        wool_black: string;
        wool_blue: string;
        wool_brown: string;
        wool_cyan: string;
        wool_gray: string;
        wool_green: string;
        wool_light_blue: string;
        wool_lime: string;
        wool_magenta: string;
        wool_orange: string;
        wool_pink: string;
        wool_purple: string;
        wool_red: string;
        wool_silver: string;
        wool: string;
        wool_yellow: string;
    };
    blocks: {
        bedrock: (string | number)[];
        bricks: (string | number)[];
        oreCoal: (string | number)[];
        dirtCoarse: (string | number)[];
        cobblestone: (string | number)[];
        oreDiamond: (string | number)[];
        dirt: (string | number)[];
        oreEmerald: (string | number)[];
        farmlandWet: (string | number)[];
        flowerDandelion: (string | number)[];
        flowerOxeeye: (string | number)[];
        flowerRose: (string | number)[];
        glass: (string | number)[];
        oreGold: (string | number)[];
        grass: (string | number)[];
        gravel: (string | number)[];
        oreIron: (string | number)[];
        oreLapis: (string | number)[];
        lava: (string | number)[];
        logAcacia: (string | number)[];
        logBirch: (string | number)[];
        logJungle: (string | number)[];
        logOak: (string | number)[];
        logSpruce: (string | number)[];
        logSpruceSnowy: (string | number)[];
        obsidian: (string | number)[];
        planksAcacia: (string | number)[];
        planksBirch: (string | number)[];
        planksJungle: (string | number)[];
        planksOak: (string | number)[];
        planksSpruce: (string | number)[];
        oreRedstone: (string | number)[];
        sand: (string | number)[];
        sandstone: (string | number)[];
        stone: (string | number)[];
        tnt: (string | number)[];
        water: (string | number)[];
        wool: (string | number)[];
        wool_orange: (string | number)[];
        wool_black: (string | number)[];
        wool_blue: (string | number)[];
        wool_brown: (string | number)[];
        wool_cyan: (string | number)[];
        wool_gray: (string | number)[];
        wool_green: (string | number)[];
        wool_light_blue: (string | number)[];
        wool_lime: (string | number)[];
        wool_magenta: (string | number)[];
        wool_pink: (string | number)[];
        wool_purple: (string | number)[];
        wool_red: (string | number)[];
        wool_silver: (string | number)[];
        wool_yellow: (string | number)[];
        leavesAcacia: (string | number)[];
        leavesBirch: (string | number)[];
        leavesJungle: (string | number)[];
        leavesOak: (string | number)[];
        leavesSpruce: (string | number)[];
        leavesSpruceSnowy: (string | number)[];
        watering: (string | number)[];
        cropWheat: (string | number)[];
        torch: (string | number)[];
        tallGrass: (string | number)[];
        lavaPop: (string | number)[];
        redstoneSparkle: (string | number)[];
        fire: (string | number)[];
        bubbles: (string | number)[];
        explosion: (string | number)[];
        door: (string | number)[];
        doorIron: (string | number)[];
        rails: (string | number)[];
        railsNorthEast: (string | number)[];
        railsNorthWest: (string | number)[];
        railsEast: (string | number)[];
        railsWest: (string | number)[];
        railsEastWest: (string | number)[];
        railsSouthEast: (string | number)[];
        railsSouthWest: (string | number)[];
        railsNorth: (string | number)[];
        railsSouth: (string | number)[];
        railsNorthSouth: (string | number)[];
        railsUnpowered: (string | number)[];
        railsUnpoweredNorth: (string | number)[];
        railsUnpoweredSouth: (string | number)[];
        railsUnpoweredNorthSouth: (string | number)[];
        railsUnpoweredEast: (string | number)[];
        railsUnpoweredWest: (string | number)[];
        railsUnpoweredEastWest: (string | number)[];
        railsPowered: (string | number)[];
        railsPoweredNorth: (string | number)[];
        railsPoweredSouth: (string | number)[];
        railsPoweredNorthSouth: (string | number)[];
        railsPoweredEast: (string | number)[];
        railsPoweredWest: (string | number)[];
        railsPoweredEastWest: (string | number)[];
        railsRedstoneTorch: (string | number)[];
        redstoneWire: (string | number)[];
        redstoneWireHorizontal: (string | number)[];
        redstoneWireVertical: (string | number)[];
        redstoneWireUpRight: (string | number)[];
        redstoneWireUpLeft: (string | number)[];
        redstoneWireDownRight: (string | number)[];
        redstoneWireDownLeft: (string | number)[];
        redstoneWireTUp: (string | number)[];
        redstoneWireTDown: (string | number)[];
        redstoneWireTLeft: (string | number)[];
        redstoneWireTRight: (string | number)[];
        redstoneWireCross: (string | number)[];
        redstoneWireOn: (string | number)[];
        redstoneWireHorizontalOn: (string | number)[];
        redstoneWireVerticalOn: (string | number)[];
        redstoneWireUpRightOn: (string | number)[];
        redstoneWireUpLeftOn: (string | number)[];
        redstoneWireDownRightOn: (string | number)[];
        redstoneWireDownLeftOn: (string | number)[];
        redstoneWireTUpOn: (string | number)[];
        redstoneWireTDownOn: (string | number)[];
        redstoneWireTLeftOn: (string | number)[];
        redstoneWireTRightOn: (string | number)[];
        redstoneWireCrossOn: (string | number)[];
        pressurePlateUp: (string | number)[];
        pressurePlateDown: (string | number)[];
        pistonUp: (string | number)[];
        pistonDown: (string | number)[];
        pistonLeft: (string | number)[];
        pistonRight: (string | number)[];
        pistonUpOn: (string | number)[];
        pistonDownOn: (string | number)[];
        pistonLeftOn: (string | number)[];
        pistonRightOn: (string | number)[];
        pistonArmLeft: (string | number)[];
        pistonArmRight: (string | number)[];
        pistonArmUp: (string | number)[];
        pistonArmDown: (string | number)[];
        pistonUpSticky: (string | number)[];
        pistonDownSticky: (string | number)[];
        pistonLeftSticky: (string | number)[];
        pistonRightSticky: (string | number)[];
        pistonUpOnSticky: (string | number)[];
        pistonDownOnSticky: (string | number)[];
        pistonLeftOnSticky: (string | number)[];
        pistonRightOnSticky: (string | number)[];
        pistonArmLeftSticky: (string | number)[];
        pistonArmRightSticky: (string | number)[];
        pistonArmUpSticky: (string | number)[];
        pistonArmDownSticky: (string | number)[];
        cactus: (string | number)[];
        deadBush: (string | number)[];
        glowstone: (string | number)[];
        grassPath: (string | number)[];
        ice: (string | number)[];
        netherrack: (string | number)[];
        netherBrick: (string | number)[];
        quartzOre: (string | number)[];
        snow: (string | number)[];
        snowyGrass: (string | number)[];
        topSnow: (string | number)[];
        sandDeep: (string | number)[];
        gravelDeep: (string | number)[];
        reeds: (string | number)[];
        Nether_Portal: (string | number)[];
        bedFoot: (string | number)[];
        bedHead: (string | number)[];
        clay: (string | number)[];
        glassBlack: (string | number)[];
        glassBlue: (string | number)[];
        glassBrown: (string | number)[];
        glassCyan: (string | number)[];
        glassGray: (string | number)[];
        glassGreen: (string | number)[];
        glassLightBlue: (string | number)[];
        glassLime: (string | number)[];
        glassMagenta: (string | number)[];
        glassOrange: (string | number)[];
        glassPink: (string | number)[];
        glassPurple: (string | number)[];
        glassRed: (string | number)[];
        glassSilver: (string | number)[];
        glassWhite: (string | number)[];
        glassYellow: (string | number)[];
        terracotta: (string | number)[];
        terracottaBlack: (string | number)[];
        terracottaBlue: (string | number)[];
        terracottaBrown: (string | number)[];
        terracottaCyan: (string | number)[];
        terracottaGray: (string | number)[];
        terracottaGreen: (string | number)[];
        terracottaLightBlue: (string | number)[];
        terracottaLime: (string | number)[];
        terracottaMagenta: (string | number)[];
        terracottaOrange: (string | number)[];
        terracottaPink: (string | number)[];
        terracottaPurple: (string | number)[];
        terracottaRed: (string | number)[];
        terracottaSilver: (string | number)[];
        terracottaWhite: (string | number)[];
        terracottaYellow: (string | number)[];
        strippedOak: (string | number)[];
        strippedDarkOak: (string | number)[];
        stoneBricks: (string | number)[];
        chiseledStoneBricks: (string | number)[];
        mossyStoneBricks: (string | number)[];
        crackedStoneBricks: (string | number)[];
        magmaBlock: (string | number)[];
        blueCoralBlock: (string | number)[];
        pinkCoralBlock: (string | number)[];
        magentaCoralBlock: (string | number)[];
        redCoralBlock: (string | number)[];
        yellowCoralBlock: (string | number)[];
        deadCoralBlock: (string | number)[];
        blueDeadCoralBlock: (string | number)[];
        pinkDeadCoralBlock: (string | number)[];
        magentaDeadCoralBlock: (string | number)[];
        readDeadCoralBlock: (string | number)[];
        yellowDeadCoralBlock: (string | number)[];
        prismarine: (string | number)[];
        prismarineBricks: (string | number)[];
        darkPrismarine: (string | number)[];
        seaLantern: (string | number)[];
        packedIce: (string | number)[];
        blueIce: (string | number)[];
        blackConcrete: (string | number)[];
        seaGrass: (string | number)[];
        kelp: (string | number)[];
        polishedGranite: (string | number)[];
        coralFanBlueBottom: (string | number)[];
        coralFanPinkBottom: (string | number)[];
        coralFanMagentaBottom: (string | number)[];
        coralFanRedBottom: (string | number)[];
        coralFanYellowFanBottom: (string | number)[];
        coralFanBlueTop: (string | number)[];
        coralFanPinkTop: (string | number)[];
        coralFanMagentaTop: (string | number)[];
        coralFanRedTop: (string | number)[];
        coralFanYellowFanTop: (string | number)[];
        coralFanBlueLeft: (string | number)[];
        coralFanPinkLeft: (string | number)[];
        coralFanMagentaLeft: (string | number)[];
        coralFanRedLeft: (string | number)[];
        coralFanYellowFanLeft: (string | number)[];
        coralFanBlueRight: (string | number)[];
        coralFanPinkRight: (string | number)[];
        coralFanMagentaRight: (string | number)[];
        coralFanRedRight: (string | number)[];
        coralFanYellowFanRight: (string | number)[];
        coralPlantBlue: (string | number)[];
        coralPlantBlueDeep: (string | number)[];
        coralPlantPink: (string | number)[];
        coralPlantPinkDeep: (string | number)[];
        coralPlantMagenta: (string | number)[];
        coralPlantMagentaDeep: (string | number)[];
        coralPlantRed: (string | number)[];
        coralPlantRedDeep: (string | number)[];
        coralPlantYellow: (string | number)[];
        coralPlantYellowDeep: (string | number)[];
        magmaUnderwater: (string | number)[];
        magmaDeep: (string | number)[];
        bubbleColumn: (string | number)[];
        conduit: (string | number)[];
        seaPickles: (string | number)[];
        Chest: (string | number)[];
        chest: (string | number)[];
        invisible: (string | number)[];
    };
    actionPlaneBlocks: any[];
    toDestroy: any[];
    resettableTweens: any[];
    treeFluffTypes: {
        treeAcacia: number[][];
        treeBirch: number[][];
        treeJungle: number[][];
        treeOak: number[][];
        treeSpruce: number[][];
        treeSpruceSnowy: number[][];
    };
    initPrismarine(): void;
    prismarine: any;
    prismarineFrames: any[];
    updatePrismarine(): void;
    yToIndex(y: any): any;
    create(levelModel: any): void;
    resetEntity(entity: any): void;
    reset(levelModel: any): void;
    update(): void;
    render(): void;
    scaleShowWholeWorld(completionHandler: any): void;
    getDirectionName(facing: any): string;
    playDoorAnimation(position: any, open: any, completionHandler: any): void;
    playOpenConduitAnimation(position: any): void;
    playCloseConduitAnimation(position: any): void;
    playOpenChestAnimation(position: any): void;
    getTreasureTypeFromChest(blockData: any): any;
    playPlayerAnimation(animationName: any, position: any, facing: any, isOnBlock?: boolean, entity?: any): any;
    playIdleAnimation(position: any, facing: any, isOnBlock: any, entity?: any): void;
    initWithIdleAnimation(position: any, facing: any, isOnBlock: any, entity?: any): void;
    playSuccessAnimation(position: any, facing: any, isOnBlock: any, completionHandler: any, entity?: any): void;
    playFailureAnimation(position: any, facing: any, isOnBlock: any, completionHandler: any, entity?: any): void;
    playBumpAnimation(position: any, facing: any, isOnBlock: any, entity?: any): any;
    playDrownFailureAnimation(position: any, facing: any, isOnBlock: any, completionHandler: any): void;
    playBurnInLavaAnimation(position: any, facing: any, isOnBlock: any, completionHandler: any): void;
    playDestroyTntAnimation(position: any, facing: any, isOnBlock: any, tntArray: any, newShadingPlaneData: any, completionHandler: any): void;
    playCreeperExplodeAnimation(position: any, facing: any, destroyPosition: any, isOnBlock: any, completionHandler: any): void;
    flashEntity(entity: any): number;
    flashBlock(position: any): number;
    flashSpriteToWhite(sprite: any): number;
    playExplodingCreeperAnimation(position: any, facing: any, destroyPosition: any, isOnBlock: any, completionHandler: any): void;
    playExplosionCloudAnimation(position: any): void;
    coordinatesToIndex(coordinates: any): any;
    playMinecartTurnAnimation(position: any, isUp: any, isOnBlock: any, completionHandler: any, turnDirection: any): any;
    playMinecartMoveForwardAnimation(position: any, facing: any, isOnBlock: any, completionHandler: any, nextPosition: any, speed: any): any;
    playMinecartAnimation(isOnBlock: any, completionHandler: any): void;
    playTrack(position: any, facing: any, isOnBlock: any, entity: any, completionHandler: any): void;
    /**
    * Handling the first case of walking onto a track while not currently on one
    */
    isFirstTimeOnRails(currPos: any, nextPos: any): boolean;
    addHouseBed(bottomCoordinates: any): void;
    addDoor(coordinates: any): void;
    playSuccessHouseBuiltAnimation(position: any, facing: any, isOnBlock: any, createFloor: any, houseObjectPositions: any, completionHandler: any, updateScreen: any): void;
    playLevelEndAnimation(position: any, facing: any, isOnBlock: any, completionHandler: any, playSuccessAnimation: any): any;
    tweenFromWhiteToClear(sprite: any): any;
    tweenToWhite(sprite: any): any;
    playBlockSound(groundType: any): void;
    /**
     * Play the MoveForward animation for the given entity. Note that both
     * MoveForward and MoveBackward are implemented using the same walk
     * animations, and the only difference between the two is the logic they use
     * for moving north after placing a block
     *
     * @see LevelView.playWalkAnimation
     */
    playMoveForwardAnimation(entity: any, oldPosition: any, facing: any, shouldJumpDown: any, isOnBlock: any, groundType: any, completionHandler: any): void;
    /**
     * @see LevelView.playMoveForwardAnimation
     */
    playMoveBackwardAnimation(entity: any, oldPosition: any, facing: any, shouldJumpDown: any, isOnBlock: any, groundType: any, completionHandler: any): void;
    playWalkAnimation(entity: any, oldPosition: any, facing: any, shouldJumpDown: any, isOnBlock: any, groundType: any, targetYIndex: any, completionHandler: any): void;
    /**
     * Animate the player jumping down from on top of a block to ground level.
     * @param {FacingDirection} facing
     * @param {Array<int>}position
     * @param {?Array<int>} oldPosition
     * @return {Phaser.Tween}
     */
    playPlayerJumpDownVerticalAnimation(facing: Readonly<{
        North: 0;
        East: 1;
        South: 2;
        West: 3;
        opposite: (facing: any) => 0 | 2 | 1 | 3;
        left: (facing: any) => number;
        right: (facing: any) => number;
        turnDirection: (from: any, to: any) => "left" | "right";
        turn: (facing: any, rotation: any) => number;
        directionToOffset: (direction: any) => number[];
        directionToRelative(direction: any): "Up" | "Down" | "Right" | "Left";
    }>, position: Array<int>, oldPosition?: Array<int> | null): Phaser.Tween;
    playPlaceBlockAnimation(position: any, facing: any, blockType: any, blockTypeAtPosition: any, entity: any, completionHandler: any): void;
    playPlaceBlockInFrontAnimation(entity: any, playerPosition: any, facing: any, blockPosition: any, completionHandler: any): void;
    correctForShadowOverlay(blockType: any, sprite: any): void;
    createActionPlaneBlock(position: any, blockType: any): void;
    playShearAnimation(playerPosition: any, facing: any, destroyPosition: any, blockType: any, completionHandler: any): void;
    playShearSheepAnimation(playerPosition: any, facing: any, destroyPosition: any, blockType: any, completionHandler: any): void;
    destroyBlockWithoutPlayerInteraction(destroyPosition: any): void;
    playDestroyBlockAnimation(playerPosition: any, facing: any, destroyPosition: any, blockType: any, entity: any, completionHandler: any): void;
    playPunchDestroyAirAnimation(playerPosition: any, facing: any, destroyPosition: any, completionHandler: any, entity?: any): void;
    playPunchAirAnimation(playerPosition: any, facing: any, destroyPosition: any, completionHandler: any, entity?: any): void;
    playPunchAnimation(playerPosition: any, facing: any, destroyPosition: any, animationType: any, completionHandler: any, entity?: any): void;
    /**
     * Play the block Destroy Overlay animation. As a side effect, also actually
     * destroy the block in the level model, update the visualization, and play
     * the block Explision animation.
     *
     * Note that if the block is of a type that does not require an overlay
     * animation, this method (confusingly) simply calls the side effects
     * immediately.
     */
    playBlockDestroyOverlayAnimation(playerPosition: any, facing: any, destroyPosition: any, blockType: any, entity: any, completionHandler: any): void;
    playMiningParticlesAnimation(facing: any, destroyPosition: any): void;
    playExplosionAnimation(playerPosition: any, facing: any, destroyPosition: any, blockType: any, completionHandler: any, placeBlock: any, entity?: any): void;
    playItemDropAnimation(destroyPosition: any, blockType: any, completionHandler: any): void;
    playScaledSpeed(animationManager: any, name: any, factor?: number): any;
    playItemAcquireAnimation(playerPosition: any, facing: any, sprite: any, completionHandler: any, blockType: any): void;
    /**
     * Convert a grid coordinate position to a screen X/Y location.
     * @param {Array<int>} position
     * @param {?boolean} isOnBlock
     * @return {{x: number, y: number}}
     */
    positionToScreen(position: Array<int>, isOnBlock?: boolean | null, entity?: any): {
        x: number;
        y: number;
    };
    /**
     * @param {Position} position
     * @param {boolean} isOnBlock
     * @param {Entity} entity
     */
    setPlayerPosition(position: Position, isOnBlock: boolean, entity?: Entity): void;
    setSelectionIndicatorPosition(x: any, y: any): void;
    /**
     * @param {Array<Array<int>>} gridSpaces An array of x and y grid coordinates.
     */
    drawHintPath(gridSpaces: Array<Array<int>>): void;
    createGroups(): void;
    hintGroup: any;
    resetGroups(levelData: any): void;
    refreshGroundGroup(): void;
    refreshActionGroup(positions: any): void;
    updateShadingGroup(shadingData: any): void;
    updateFowGroup(fowData: any): void;
    playRandomPlayerIdle(facing: any, entity?: any): void;
    generatePlayerCelebrateFrames(): string[];
    generateFramesWithEndDelay(frameName: any, startFrame: any, endFrame: any, endFrameFullName: any, buffer: any, frameDelay: any): any;
    generateReverseFrames(frameName: any, startFrame: any, endFrame: any, suffix: any, buffer: any): any;
    preparePlayerSprite(playerName: any, entity?: any): void;
    playerFrameName(n: any): any;
    /**
     * Create action animations for Alex, Steve and the Agent from the sprite
     * sheet and JSON map.
     * @param {FacingDirection} facing
     * @param {int} offset
     */
    generateAnimations(facing: Readonly<{
        North: 0;
        East: 1;
        South: 2;
        West: 3;
        opposite: (facing: any) => 0 | 2 | 1 | 3;
        left: (facing: any) => number;
        right: (facing: any) => number;
        turnDirection: (from: any, to: any) => "left" | "right";
        turn: (facing: any, rotation: any) => number;
        directionToOffset: (direction: any) => number[];
        directionToRelative(direction: any): "Up" | "Down" | "Right" | "Left";
    }>, offset: int, entity?: any): void;
    /**
     * Create a "miniblock" asset (representing a floating collectable) based on
     * the given block at the given coordinates
     *
     * @param {Number} x
     * @param {Number} y
     * @param {String} blockType
     * @param {Object} [overrides] optional overrides for various defaults
     * @param {Number} [overrides.collectibleDistance=2] distance at which the
     *        miniblock can be collected
     * @param {Number} [overrides.xOffsetRange=40]
     * @param {Number} [overrides.yOffsetRange=40]
     */
    createMiniBlock(x: number, y: number, blockType: string, overrides?: {
        collectibleDistance?: number;
        xOffsetRange?: number;
        yOffsetRange?: number;
    }): any;
    playAnimationWithRandomOffset(animations: any, animationName: any): void;
    psuedoRandomTint(group: any, sprite: any, x: any, y: any): void;
    createBlock(group: any, x: any, y: any, blockType: any): any;
    addRedstoneSparkle(): any;
    blockReceivesCornerShadow(x: any, y: any): boolean;
    isUnderTree(treeIndex: any, position: any): boolean;
    changeTreeAlpha(treeIndex: any, alpha: any): void;
    onAnimationEnd(animation: any, completionHandler: any): void;
    onAnimationStart(animation: any, completionHandler: any): void;
    onAnimationLoopOnce(animation: any, completionHandler: any): void;
    addResettableTween(sprite: any): any;
    /**
    * Animate Door and set the status
    */
    animateDoor(index: any, open: any): void;
}
import Position = require("./Position.js");
