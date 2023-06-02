export function get(controller: any): {
    /**
     * Called before a list of user commands will be issued.
     */
    startCommandCollection: () => void;
    /**
     * Called when an attempt should be started, and the entire set of
     * command-queue API calls have been issued.
     *
     * @param {Function} onAttemptComplete - callback with two parameters,
     * "success", i.e., true if attempt was successful (level completed),
     * false if unsuccessful (level not completed), and the current level model.
     * @return {Promise.<boolean>} a promise for a success value when
     *   attempt is complete.
     */
    startAttempt: (onAttemptComplete: Function) => Promise<boolean>;
    resetAttempt: () => void;
    /**
     * @param highlightCallback
     * @param codeBlockCallback - for example:
     *  (e) => {
     *    if (e.type !== 'blockDestroyed') {
     *      return;
     *    }
     *
     *    if (e.blockType !== '[dropdown value, e.g. logOak') {
     *      return;
     *    }
     *
     *    evalUserCode(e.block);
     *  }
     */
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
