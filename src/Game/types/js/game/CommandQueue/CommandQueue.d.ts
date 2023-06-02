export = CommandQueue;
declare class CommandQueue {
    constructor(gameController: any);
    gameController: any;
    game: any;
    repeatCommands: any[];
    setUnshiftState: boolean;
    highPriorityCommands: any[];
    addCommand(command: any, repeat?: boolean): void;
    setWhileCommandInsertState(queue: any): void;
    whileCommandQueue: any;
    begin(): void;
    state: 0 | 2 | 1 | 3;
    reset(): void;
    currentCommand: any;
    commandList_: any[];
    startPushHighPriorityCommands(): void;
    endPushHighPriorityCommands(): void;
    tick(): void;
    getLength(): number;
    /**
     * Whether the command has started working.
     * @returns {boolean}
     */
    isStarted(): boolean;
    /**
     * Whether the command has succeeded or failed, and is
     * finished with its work.
     * @returns {boolean}
     */
    isFinished(): boolean;
    /**
     * Whether the command has finished with its work and reported success.
     * @returns {boolean}
     */
    isSucceeded(): boolean;
    /**
     * Whether the command has finished with its work and reported failure.
     * @returns {boolean}
     */
    isFailed(): boolean;
    addRepeatCommands(codeBlock: any, iteration: any): void;
}
