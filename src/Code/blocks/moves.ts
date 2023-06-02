import * as Blockly from 'blockly/core';
import { direction, targetEntities } from './enums';

Blockly.Blocks['moveDirection'] = {
  init: function () {
    this.jsonInit({
      "type": "moveDirection",
      "message0": "让 %1 向 %2 移动一步",
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
          "options": direction,
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['movenUp'] = {
  init: function () {
    this.jsonInit({
      "type": "moveDirection",
      "message0": "让玩家向北移一步",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};
Blockly.Blocks['moveDown'] = {
  init: function () {
    this.jsonInit({
      "type": "moveDirection",
      "message0": "让玩家向南移一步",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};
Blockly.Blocks['moveLeft'] = {
  init: function () {
    this.jsonInit({
      "type": "moveDirection",
      "message0": "让玩家向东移一步",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};
Blockly.Blocks['moveRight'] = {
  init: function () {
    this.jsonInit({
      "type": "moveDirection",
      "message0": "让玩家向西移一步",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};


Blockly.Blocks['agentMoveUp'] = {
  init: function () {
    this.jsonInit({
      "type": "moveDirection",
      "message0": "让 助手 向北移一步",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};
Blockly.Blocks['agentMoveDown'] = {
  init: function () {
    this.jsonInit({
      "type": "moveDirection",
      "message0": "让 助手 向南移一步",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};
Blockly.Blocks['agentMoveLeft'] = {
  init: function () {
    this.jsonInit({
      "type": "moveDirection",
      "message0": "让 助手 向东移一步",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};
Blockly.Blocks['agentMoveRight'] = {
  init: function () {
    this.jsonInit({
      "type": "moveDirection",
      "message0": "让 助手 向西移一步",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// moveForward: (highlightCallback: any, targetEntity: any, onFinish: any) => void;
Blockly.Blocks['moveForward'] = {
  init: function () {
    this.jsonInit({
      "type": "moveForward",
      "message0": "让 %1 前进一步",
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

// moveBackward: (highlightCallback: any, targetEntity: any) => void;
Blockly.Blocks['moveBackward'] = {
  init: function () {
    this.jsonInit({
      "type": "moveBackward",
      "message0": "让 %1 后退一步",
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


// moveAway: (highlightCallback: any, targetEntity: any, moveAwayFrom: any) => void;
Blockly.Blocks['moveAway'] = {
  init: function () {
    this.jsonInit({
      "type": "moveAway",
      "message0": "让 %1 远离 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        }, {
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
// moveToward: (highlightCallback: any, targetEntity: any, moveTowardTo: any) => void;
Blockly.Blocks['moveToward'] = {
  init: function () {
    this.jsonInit({
      "type": "moveToward",
      "message0": "让 %1 移动到 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
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



// turn: (highlightCallback: any, direction: any, targetEntity: any, onFinish: any) => void;
Blockly.Blocks['turn'] = {
  init: function () {
    this.jsonInit({
      "type": "turn",
      "message0": "让 %1 转向 %2",
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
          "options": direction,
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// turnRandom: (highlightCallback: any, targetEntity: any) => void;
Blockly.Blocks['turnRandom'] = {
  init: function () {
    this.jsonInit({
      "type": "turnRandom",
      "message0": "让 %1 随机转向",
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

// turnRight: (highlightCallback: any, targetEntity: any, onFinish: any) => void;
Blockly.Blocks['turnRight'] = {
  init: function () {
    this.jsonInit({
      "type": "turnRight",
      "message0": "让 %1 向左转",
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

// turnLeft: (turnLeft: any, targetEntity: any, onFinish: any) => void;
Blockly.Blocks['turnLeft'] = {
  init: function () {
    this.jsonInit({
      "type": "turnLeft",
      "message0": "让 %1 向右转后执行 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "targetEntity",
          "text": "哪个角色",
          "options": targetEntities
        },
        {
          "type": "input_statement",
          "name": "onFinish",
          "text": "动作"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};