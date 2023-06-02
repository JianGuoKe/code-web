export = IfBlockAheadCommand;
declare class IfBlockAheadCommand extends BaseCommand {
    constructor(gameController: any, highlightCallback: any, blockType: any, targetEntity: any, callback: any);
    blockType: any;
    ifCodeCallback: any;
    queue: CommandQueue;
    handleIfCheck(): void;
}
import BaseCommand = require("./BaseCommand.js");
import CommandQueue = require("./CommandQueue.js");
