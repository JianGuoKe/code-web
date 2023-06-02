export = CallbackCommand;
declare class CallbackCommand extends BaseCommand {
    constructor(gameController: any, highlightCallback: any, actionCallback: any, targetEntity: any, onFinish: any);
    actionCallback: any;
}
import BaseCommand = require("./BaseCommand.js");
