import * as Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';

// moveDirection: (highlightCallback: any, targetEntity: any, direction: any) => void;
javascriptGenerator['moveDirection'] = function (block: Blockly.Block) {
    return `moveDirection(null, '${block.getField('targetEntity')?.getValue() || 'Player'}', ${block.getField('direction')?.getValue() || 0});\n`;
};

javascriptGenerator['movenUp'] = function (block: Blockly.Block) {
    return `moveDirection(null, 'Player', 0);\n`;
};
javascriptGenerator['moveDown'] = function (block: Blockly.Block) {
    return `moveDirection(null, 'Player', 2);\n`;
};
javascriptGenerator['moveLeft'] = function (block: Blockly.Block) {
    return `moveDirection(null, 'Player', 3);\n`;
};
javascriptGenerator['moveRight'] = function (block: Blockly.Block) {
    return `moveDirection(null, 'Player', 1);\n`;
};

javascriptGenerator['agentMoveUp'] = function (block: Blockly.Block) {
    return `moveDirection(null, 'PlayerAgent', 0);\n`;
};
javascriptGenerator['agentMoveDown'] = function (block: Blockly.Block) {
    return `moveDirection(null, 'PlayerAgent', 2);\n`;
};
javascriptGenerator['agentMoveLeft'] = function (block: Blockly.Block) {
    return `moveDirection(null, 'PlayerAgent', 3);\n`;
};
javascriptGenerator['agentMoveRight'] = function (block: Blockly.Block) {
    return `moveDirection(null, 'PlayerAgent', 1);\n`;
};

// javascriptGenerator['moveDirection_up_currentTarget'] = function (block: Blockly.Block) {
//     return `moveDirection(null, '${block.getField('targetEntity')?.getText() || 'Player'}', ${block.getField('direction')?.getText() || 0})`;
// };

// moveForward: (highlightCallback: any, targetEntity: any, onFinish: any) => void;
javascriptGenerator['moveForward'] = function (block: Blockly.Block) {
    return `moveForward(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// moveBackward: (highlightCallback: any, targetEntity: any) => void;
javascriptGenerator['moveBackward'] = function (block: Blockly.Block) {
    return `moveBackward(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// moveAway: (highlightCallback: any, targetEntity: any, moveAwayFrom: any) => void;
javascriptGenerator['moveAway'] = function (block: Blockly.Block) {
    return `moveAway(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// moveToward: (highlightCallback: any, targetEntity: any, moveTowardTo: any) => void;
javascriptGenerator['moveToward'] = function (block: Blockly.Block) {
    return `moveToward(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// flashEntity: (highlightCallback: any, targetEntity: any) => void;
javascriptGenerator['flashEntity'] = function (block: Blockly.Block) {
    return `flashEntity(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// explodeEntity: (highlightCallback: any, targetEntity: any) => void;
javascriptGenerator['explodeEntity'] = function (block: Blockly.Block) {
    return `explodeEntity(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// use: (highlightCallback: any, targetEntity: any) => void;
javascriptGenerator['use'] = function (block: Blockly.Block) {
    return `use(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// playSound: (highlightCallback: any, sound: any, targetEntity: any) => void;
javascriptGenerator['playSound'] = function (block: Blockly.Block) {
    return `playSound(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// turn: (highlightCallback: any, direction: any, targetEntity: any, onFinish: any) => void;
javascriptGenerator['turn'] = function (block: Blockly.Block) {
    return `turn(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// turnRandom: (highlightCallback: any, targetEntity: any) => void;
javascriptGenerator['turnRandom'] = function (block: Blockly.Block) {
    return `turnRandom(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// turnRight: (highlightCallback: any, targetEntity: any, onFinish: any) => void;
javascriptGenerator['turnRight'] = function (block: Blockly.Block) {
    return `turnRight(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// turnLeft: (highlightCallback: any, targetEntity: any, onFinish: any) => void;
javascriptGenerator['turnLeft'] = function (block: Blockly.Block) {
    return `turnLeft(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// destroyBlock: (highlightCallback: any, targetEntity: any) => void;
javascriptGenerator['destroyBlock'] = function (block: Blockly.Block) {
    return `destroyBlock(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// placeBlock: (highlightCallback: any, blockType: any, targetEntity: any) => void;
javascriptGenerator['placeBlock'] = function (block: Blockly.Block) {
    return `placeBlock(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// placeDirection: (highlightCallback: any, blockType: any, targetEntity: any, direction: any) => void;
javascriptGenerator['placeDirection'] = function (block: Blockly.Block) {
    return `placeDirection(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// placeInFront: (highlightCallback: any, blockType: any, targetEntity: any) => void;
javascriptGenerator['placeInFront'] = function (block: Blockly.Block) {
    return `placeInFront(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// tillSoil: (highlightCallback: any, targetEntity: any) => void;
javascriptGenerator['tillSoil'] = function (block: Blockly.Block) {
    return `tillSoil(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// ifBlockAhead: (highlightCallback: any, blockType: any, targetEntity: any, codeBlock: any) => void;
javascriptGenerator['ifBlockAhead'] = function (block: Blockly.Block) {
    return `ifBlockAhead(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// repeat: (highlightCallback: any, codeBlock: any, iteration: any, targetEntity: any) => void;
javascriptGenerator['repeat'] = function (block: Blockly.Block) {
    return `repeat(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// repeatRandom: (highlightCallback: any, codeBlock: any, targetEntity: any) => void;
javascriptGenerator['repeatRandom'] = function (block: Blockly.Block) {
    return `repeatRandom(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// getScreenshot: () => any;
// javascriptGenerator['move_forward'] = function (block: Blockly.Block) {
//     return `moveForward(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
// };

// spawnEntity: (highlightCallback: any, type: any, spawnDirection: any) => void;
javascriptGenerator['spawnEntity'] = function (block: Blockly.Block) {
    return `spawnEntity(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// spawnEntityAt: (highlightCallback: any, type: any, spawnX: any, spawnY: any, spawnDirection: any) => void;
javascriptGenerator['spawnEntityAt'] = function (block: Blockly.Block) {
    return `spawnEntityAt(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// destroyEntity: (highlightCallback: any, targetEntity: any) => void;
javascriptGenerator['destroyEntity'] = function (block: Blockly.Block) {
    return `destroyEntity(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// drop: (highlightCallback: any, itemType: any, targetEntity: any) => void;
javascriptGenerator['drop'] = function (block: Blockly.Block) {
    return `drop(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// startDay: (highlightCallback: any) => void;
javascriptGenerator['startDay'] = function (block: Blockly.Block) {
    return `startDay(null);\n`;
};

// startNight: (highlightCallback: any) => void;
javascriptGenerator['startNight'] = function (block: Blockly.Block) {
    return `startNight(null);\n`;
};

// wait: (highlightCallback: any, time: any, targetEntity: any) => void;
javascriptGenerator['wait'] = function (block: Blockly.Block) {
    return `wait(null, ${block.getField('time')?.getValue()}, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// attack: (highlightCallback: any, targetEntity: any) => void;
javascriptGenerator['attack'] = function (block: Blockly.Block) {
    return `attack(null, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// setDayNightCycle: (firstDelay: any, delayInSecond: any, startTime: any) => void;
javascriptGenerator['setDayNightCycle'] = function (block: Blockly.Block) {
    return `setDayNightCycle(${block.getField('firstDelay')?.getValue()}, ${block.getField('delayInSecond')?.getValue()}, ${block.getField('startTime')?.getValue()});\n`;
};

// addScore: (highlightCallback: any, score: any, targetEntity: any) => void;
javascriptGenerator['addScore'] = function (block: Blockly.Block) {
    return `addScore(null, ${block.getField('score')?.getValue()}, '${block.getField('targetEntity')?.getValue() || 'Player'}');\n`;
};

// arrowDown: (direction: any) => void;
javascriptGenerator['arrowDown'] = function (block: Blockly.Block) {
    return `arrowDown(${block.getField('direction')?.getValue()});\n`;
};

// arrowUp: (direction: any) => void;
javascriptGenerator['arrowUp'] = function (block: Blockly.Block) {
    return `arrowUp(${block.getField('direction')?.getValue()});\n`;
};

// clickDown: () => void;
javascriptGenerator['clickDown'] = function (block: Blockly.Block) {
    return `clickDown();\n`;
};

// clickUp: () => void;
javascriptGenerator['clickUp'] = function (block: Blockly.Block) {
    return `clickUp();\n`;
};

