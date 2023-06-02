export = RepeatCommand;
declare class RepeatCommand extends BaseCommand {
    constructor(gameController: any, highlightCallback: any, actionCallback: any, iteration: any, targetEntity: any);
    actionCallback: any;
    iteration: any;
    addRepeatCommand(): void;
}
import BaseCommand = require("./BaseCommand.js");
