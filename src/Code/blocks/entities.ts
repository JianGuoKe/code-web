import * as Blockly from 'blockly/core';
import { targetEntities } from './enums';

// flashEntity: (highlightCallback: any, targetEntity: any) => void;
Blockly.Blocks['flashEntity'] = {
  init: function () {
    this.jsonInit({
      "type": "flashEntity",
      "message0": "flash %1",
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

// explodeEntity: (highlightCallback: any, targetEntity: any) => void;
Blockly.Blocks['explodeEntity'] = {
  init: function () {
    this.jsonInit({
      "type": "explodeEntity",
      "message0": "explode %1",
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

// spawnEntity: (highlightCallback: any, type: any, spawnDirection: any) => void;
Blockly.Blocks['spawnEntity'] = {
  init: function () {
    this.jsonInit({
      "type": "spawnEntity",
      "message0": "spawn %1 %2",
      "args0": [
        {
          "type": "field_input",
          "name": "type",
          "text": "type",
          "value": 'sheep'
        },
        {
          "type": "field_input",
          "name": "spawnDirection",
          "text": "spawnDirection",
          "value": 'middle'
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// spawnEntityAt: (highlightCallback: any, type: any, spawnX: any, spawnY: any, spawnDirection: any) => void;
Blockly.Blocks['spawnEntityAt'] = {
  init: function () {
    this.jsonInit({
      "type": "spawnEntityAt",
      "message0": "spawn %1 at %2 %3 direction %4",
      "args0": [
        {
          "type": "field_input",
          "name": "type",
          "text": "type",
          "value": 'sheep'
        },
        {
          "type": "field_input",
          "name": "spawnX",
          "text": "spawnX",
          "value": 0
        },
        {
          "type": "field_input",
          "name": "spawnY",
          "text": "spawnY",
          "value": 0
        },
        {
          "type": "field_input",
          "name": "spawnDirection",
          "text": "spawnDirection",
          "value": 'middle'
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};


// destroyEntity: (highlightCallback: any, targetEntity: any) => void;
Blockly.Blocks['destroyEntity'] = {
  init: function () {
    this.jsonInit({
      "type": "destroyEntity",
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

