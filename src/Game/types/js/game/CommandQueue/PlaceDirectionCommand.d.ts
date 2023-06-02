export = PlaceDirectionCommand;
declare class PlaceDirectionCommand extends BaseCommand {
    constructor(gameController: any, highlightCallback: any, blockType: any, targetEntity: any, direction: any);
    BlockType: any;
    Direction: any;
}
import BaseCommand = require("./BaseCommand.js");
