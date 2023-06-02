import * as Blockly from 'blockly/core';
import { blockTypes, direction, targetEntities } from './enums';

// use: (highlightCallback: any, targetEntity: any) => void;
Blockly.Blocks['use'] = {
  init: function () {
    this.jsonInit({
      "type": "use",
      "message0": "use %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};


// playSound: (highlightCallback: any, sound: any, targetEntity: any) => void;
Blockly.Blocks['playSound'] = {
  init: function () {
    this.jsonInit({
      "type": "playSound",
      "message0": "%1 playSound %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "field_text",
          "name": "playSound",
          "text": "playSound",
          "value": ''
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};


// placeDirection: (highlightCallback: any, blockType: any, targetEntity: any, direction: any) => void;
Blockly.Blocks['placeDirection'] = {
  init: function () {
    this.jsonInit({
      "type": "placeDirection",
      "message0": "在 %1 的 %2 放置 %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "field_dropdown",
          "name": "direction",
          "text": "哪个方向",
          "options": direction
        },
        {
          "type": "field_dropdown",
          "name": "blockType",
          "text": "什么",
          "options": blockTypes
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// placeInFront: (highlightCallback: any, blockType: any, targetEntity: any) => void;
Blockly.Blocks['placeInFront'] = {
  init: function () {
    this.jsonInit({
      "type": "placeInFront",
      "message0": "%1 在他的前边放置 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "field_dropdown",
          "name": "blockType",
          "text": "什么",
          "options": blockTypes
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// tillSoil: (highlightCallback: any, targetEntity: any) => void;
Blockly.Blocks['tillSoil'] = {
  init: function () {
    this.jsonInit({
      "type": "tillSoil",
      "message0": "%1 开始耕地",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// ifBlockAhead: (highlightCallback: any, blockType: any, targetEntity: any, codeBlock: any) => void;
Blockly.Blocks['ifBlockAhead'] = {
  init: function () {
    this.jsonInit({
      "type": "ifBlockAhead",
      "message0": "%2 在 %1 手里后执行 %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "field_dropdown",
          "name": "blockType",
          "text": "什么",
          "options": blockTypes
        },
        {
          "type": "input_statement",
          "name": "codeBlock",
          "text": "动作"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};


// repeat: (highlightCallback: any, codeBlock: any, iteration: any, targetEntity: any) => void;
Blockly.Blocks['repeat'] = {
  init: function () {
    this.jsonInit({
      "type": "repeat",
      "message0": "%1 重复执行 %3 次 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "input_statement",
          "name": "codeBlock",
          "text": "动作"
        },
        {
          "type": "field_input",
          "name": "iteration",
          "text": "多少",
          "value": 1
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};
// repeatRandom: (highlightCallback: any, codeBlock: any, targetEntity: any) => void;
Blockly.Blocks['repeatRandom'] = {
  init: function () {
    this.jsonInit({
      "type": "repeatRandom",
      "message0": "%1 随机重复执行 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "input_statement",
          "name": "codeBlock",
          "text": "动作"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// destroyBlock: (highlightCallback: any, targetEntity: any) => void;
Blockly.Blocks['destroyBlock'] = {
  init: function () {
    this.jsonInit({
      "type": "destroyBlock",
      "message0": "销毁 %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// placeBlock: (highlightCallback: any, blockType: any, targetEntity: any) => void;
Blockly.Blocks['placeBlock'] = {
  init: function () {
    this.jsonInit({
      "type": "placeBlock",
      "message0": "在 %1 后面放置 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "field_dropdown",
          "name": "blockType",
          "text": "什么",
          "options": blockTypes
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// drop: (highlightCallback: any, itemType: any, targetEntity: any) => void;
Blockly.Blocks['drop'] = {
  init: function () {
    this.jsonInit({
      "type": "drop",
      "message0": "%1 drop %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "field_text",
          "name": "itemType",
          "text": "itemType",
          "value": 'diamond'
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};


Blockly.Blocks['wait'] = {
  init: function () {
    this.jsonInit({
      "type": "wait",
      "message0": "等待 %1 秒，%2 角色",
      "args0": [
        {
          "type": "field_input",
          "name": "time",
          "text": "多少"
        },
        {
          "type": "field_dropdown",
          "name": "direction",
          "text": "哪个",
          "options": targetEntities
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// attack: (highlightCallback: any, targetEntity: any) => void;
Blockly.Blocks['attack'] = {
  init: function () {
    this.jsonInit({
      "type": "attack",
      "message0": "%1 攻击",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['addScore'] = {
  init: function () {
    this.jsonInit({
      "type": "addScore",
      "message0": "给 %1 增加 %2 分数",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "field_input",
          "name": "score",
          "text": "多少",
          "value": 0
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['arrowDown'] = {
  init: function () {
    this.jsonInit({
      "type": "arrowDown",
      "message0": "向下箭头朝向 %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "direction",
          "text": "哪个方向",
          "options": direction,
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['arrowUp'] = {
  init: function () {
    this.jsonInit({
      "type": "arrowUp",
      "message0": "向上箭头朝向 %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "direction",
          "text": "哪个方向",
          "options": direction,
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['clickDown'] = {
  init: function () {
    this.jsonInit({
      "type": "clickDown",
      "message0": "clickUp",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['clickUp'] = {
  init: function () {
    this.jsonInit({
      "type": "clickUp",
      "message0": "clickUp",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};