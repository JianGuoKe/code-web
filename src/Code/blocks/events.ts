import * as Blockly from 'blockly/core';

//  registerEventCallback(highlightCallback: any, codeBlockCallback: any): void;
Blockly.Blocks['registerEventCallback'] = {
  init: function () {
    this.jsonInit({
      "type": "registerEventCallback",
      "message0": "事件发生后执行 %1",
      "args0": [
        {
          "type": "input_statement",
          "name": "codeBlockCallback",
          "text": "什么动作"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

//  onEventTriggered: (highlightCallback: any, type: any, eventType: any, callback: any) => void;
Blockly.Blocks['onEventTriggered'] = {
  init: function () {
    this.jsonInit({
      "type": "onEventTriggered",
      "message0": "%1 %2 触发后执行 %3",
      "args0": [
        {
          "type": "field_input",
          "name": "type",
          "text": "哪个类型",
          "value": null
        },
        {
          "type": "field_input",
          "name": "eventType",
          "text": "哪个事件",
          "value": null
        },
        {
          "type": "input_statement",
          "name": "callback",
          "text": "什么动作"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

//  isEventTriggered: (event: any, eventType: any) => boolean;
Blockly.Blocks['isEventTriggered'] = {
  init: function () {
    this.jsonInit({
      "type": "isEventTriggered",
      "message0": "是否 %1 被触发?",
      "args0": [
        {
          "type": "field_input",
          "name": "eventType",
          "text": "哪个事件",
          "value": null
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};