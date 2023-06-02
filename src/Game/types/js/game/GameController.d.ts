export = GameController;
/**
 * Initializes a new instance of a mini-game visualization
 */
declare class GameController {
    /**
     * @param {Object} gameControllerConfig
     * @param {String} gameControllerConfig.containerId DOM ID to mount this app
     * @param {Phaser} gameControllerConfig.Phaser Phaser package
     * @constructor
     */
    constructor(gameControllerConfig: {
        containerId: string;
        Phaser: any;
    });
    DEBUG: any;
    /**
     * @public {Object} codeOrgAPI - API with externally-callable methods for
     * starting an attempt, issuing commands, etc.
     */
    public codeOrgAPI: {
        startCommandCollection: () => void;
        startAttempt: (onAttemptComplete?: Function) => Promise<boolean>;
        resetAttempt: () => void;
        registerEventCallback(highlightCallback: any, codeBlockCallback: any): void;
        onEventTriggered: (highlightCallback: any, type: any, eventType: any, callback: any) => void;
        isEventTriggered: (event: any, eventType: any) => boolean;
        moveDirection: (highlightCallback: any, targetEntity: any, direction: any) => void;
        moveForward: (highlightCallback: any, targetEntity: any, onFinish: any) => void;
        moveBackward: (highlightCallback: any, targetEntity: any) => void;
        moveAway: (highlightCallback: any, targetEntity: any, moveAwayFrom: any) => void;
        moveToward: (highlightCallback: any, targetEntity: any, moveTowardTo: any) => void;
        flashEntity: (highlightCallback: any, targetEntity: any) => void;
        explodeEntity: (highlightCallback: any, targetEntity: any) => void;
        use: (highlightCallback: any, targetEntity: any) => void;
        playSound: (highlightCallback: any, sound: any, targetEntity: any) => void;
        turn: (highlightCallback: any, direction: any, targetEntity: any, onFinish: any) => void;
        turnRandom: (highlightCallback: any, targetEntity: any) => void;
        turnRight: (highlightCallback: any, targetEntity: any, onFinish: any) => void;
        turnLeft: (highlightCallback: any, targetEntity: any, onFinish: any) => void;
        destroyBlock: (highlightCallback: any, targetEntity: any) => void;
        placeBlock: (highlightCallback: any, blockType: any, targetEntity: any) => void;
        placeDirection: (highlightCallback: any, blockType: any, targetEntity: any, direction: any) => void;
        placeInFront: (highlightCallback: any, blockType: any, targetEntity: any) => void;
        tillSoil: (highlightCallback: any, targetEntity: any) => void;
        ifBlockAhead: (highlightCallback: any, blockType: any, targetEntity: any, codeBlock: any) => void;
        repeat: (highlightCallback: any, codeBlock: any, iteration: any, targetEntity: any) => void;
        repeatRandom: (highlightCallback: any, codeBlock: any, targetEntity: any) => void;
        getScreenshot: () => any;
        spawnEntity: (highlightCallback: any, type: any, spawnDirection: any) => void;
        spawnEntityAt: (highlightCallback: any, type: any, spawnX: any, spawnY: any, spawnDirection: any) => void;
        destroyEntity: (highlightCallback: any, targetEntity: any) => void;
        drop: (highlightCallback: any, itemType: any, targetEntity: any) => void;
        startDay: (highlightCallback: any) => void;
        startNight: (highlightCallback: any) => void;
        wait: (highlightCallback: any, time: any, targetEntity: any) => void;
        attack: (highlightCallback: any, targetEntity: any) => void;
        setDayNightCycle: (firstDelay: any, delayInSecond: any, startTime: any) => void;
        addScore: (highlightCallback: any, score: any, targetEntity: any) => void;
        arrowDown: (direction: any) => void;
        arrowUp: (direction: any) => void;
        clickDown: () => void;
        clickUp: () => void;
    };
    /**
     * Main Phaser game instance.
     * @property {Phaser.Game}
     */
    game: any;
    specialLevelType: any;
    queue: CommandQueue;
    OnCompleteCallback: any;
    assetRoot: any;
    audioPlayer: any;
    afterAssetsLoaded: any;
    assetLoader: AssetLoader;
    earlyLoadAssetPacks: any;
    earlyLoadNiceToHaveAssetPacks: any;
    resettableTimers: any[];
    timeouts: any[];
    timeout: number;
    score: number;
    useScore: boolean;
    scoreText: any;
    onScoreUpdate: any;
    events: any[];
    assumedSlowMotion: number;
    initialSlowMotion: any;
    tweenTimeScale: number;
    playerDelayFactor: number;
    dayNightCycle: boolean;
    player: Player;
    agent: {};
    timerSprite: any;
    /**
     * Is this one of those level types in which the player is controlled by arrow
     * keys rather than by blocks?
     *
     * @return {boolean}
     */
    getIsDirectPlayerControl(): boolean;
    /**
     * @param {Object} levelConfig
     */
    loadLevel(levelConfig: any): void;
    levelData: any;
    levelEntity: LevelEntity;
    levelModel: LevelModel;
    levelView: LevelView;
    timeoutResult: any;
    onDayCallback: any;
    onNightCallback: any;
    reset(): void;
    preload(): void;
    create(): void;
    run(): void;
    followingPlayer(): boolean;
    update(): void;
    addCheatKeys(): void;
    handleEndState(result: any): void;
    render(): void;
    scaleFromOriginal(): number[];
    getScreenshot(): any;
    initializeCommandRecord(): void;
    commandRecord: Map<any, any>;
    repeatCommandRecord: Map<any, any>;
    isRepeat: boolean;
    startPushRepeatCommand(): void;
    endPushRepeatCommand(): void;
    addCommandRecord(commandName: any, targetType: any, repeat: any): void;
    getCommandCount(commandName: any, targetType: any, repeat: any): any;
    getEntity(target: any): any;
    getEntities(type: any): any[];
    isType(target: any): boolean;
    printErrorMsg(msg: any): void;
    /**
     * @param {any} commandQueueItem
     * @param {any} moveAwayFrom (entity identifier)
     *
     * @memberOf GameController
     */
    moveAway(commandQueueItem: any, moveAwayFrom: any): void;
    /**
     * @param {any} commandQueueItem
     * @param {any} moveTowardTo (entity identifier)
     *
     * @memberOf GameController
     */
    moveToward(commandQueueItem: any, moveTowardTo: any): void;
    positionEquivalence(lhs: any, rhs: any): boolean;
    /**
     * Run a command. If no `commandQueueItem.target` is provided, the command
     * will be applied to all targets.
     *
     * @param commandQueueItem
     * @param command
     * @param commandArgs
     */
    execute(commandQueueItem: any, command: any, ...commandArgs: any[]): void;
    moveForward(commandQueueItem: any): void;
    moveBackward(commandQueueItem: any): void;
    moveDirection(commandQueueItem: any, direction: any): void;
    turn(commandQueueItem: any, direction: any): void;
    turnRandom(commandQueueItem: any): void;
    flashEntity(commandQueueItem: any): void;
    explodeEntity(commandQueueItem: any): void;
    wait(commandQueueItem: any, time: any): void;
    spawnEntity(commandQueueItem: any, type: any, spawnDirection: any): void;
    spawnEntityAt(commandQueueItem: any, type: any, x: any, y: any, facing: any): void;
    destroyEntity(commandQueueItem: any, target: any): void;
    drop(commandQueueItem: any, itemType: any): void;
    attack(commandQueueItem: any): void;
    playSound(commandQueueItem: any, sound: any): void;
    use(commandQueueItem: any): void;
    destroyBlock(commandQueueItem: any): void;
    destroyBlockWithoutPlayerInteraction(position: any): void;
    checkTntAnimation(): boolean;
    checkMinecartLevelEndAnimation(): boolean;
    checkHouseBuiltEndAnimation(): boolean;
    checkAgentSpawn(): boolean;
    placeBlock(commandQueueItem: any, blockType: any): void;
    setPlayerActionDelayByQueueLength(): void;
    delayBy(ms: any, completionHandler: any): void;
    delayPlayerMoveBy(minMs: any, maxMs: any, completionHandler: any): void;
    originalMsToScaled(ms: any): number;
    originalFpsToScaled(fps: any): number;
    placeBlockForward(commandQueueItem: any, blockType: any): void;
    placeBlockDirection(commandQueueItem: any, blockType: any, direction: any): void;
    checkSolution(): void;
    resultReported: boolean;
    endLevel(result: any): void;
    addScore(commandQueueItem: any, score: any): void;
    updateScore(): void;
    isPathAhead(blockType: any): boolean;
    addCommand(commandQueueItem: any): void;
    addGlobalCommand(commandQueueItem: any): void;
    startDay(commandQueueItem: any): void;
    startNight(commandQueueItem: any): void;
    initiateDayNightCycle(firstDelay: any, delayInSecond: any, startTime: any): void;
    setDayNightCycle(delayInSecond: any, startTime: any): void;
    arrowDown(direction: any): void;
    arrowUp(direction: any): void;
    clickDown(): void;
    clickUp(): void;
    updateFowPlane(): void;
    updateShadingPlane(): void;
}
import CommandQueue = require("./CommandQueue/CommandQueue.js");
import AssetLoader = require("./LevelMVC/AssetLoader.js");
import LevelEntity = require("./LevelMVC/LevelEntity.js");
import LevelModel = require("./LevelMVC/LevelModel.js");
import LevelView = require("./LevelMVC/LevelView.js");
