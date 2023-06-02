export = BaseCommand;
declare class BaseCommand {
    constructor(gameController: any, highlightCallback: any, targetEntity: any, onFinish: any);
    GameController: any;
    Game: any;
    HighlightCallback: any;
    state: 0;
    target: any;
    onFinish: any;
    repeat: boolean;
    tick(): void;
    begin(): void;
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
    succeeded(): void;
    failed(): void;
}
