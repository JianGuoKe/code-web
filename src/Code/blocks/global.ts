import * as Blockly from 'blockly/core';

Blockly.Blocks['startDay'] = {
  init: function () {
    this.jsonInit({
      "type": "startDay",
      "message0": "进入白天",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['startNight'] = {
  init: function () {
    this.jsonInit({
      "type": "startNight",
      "message0": "进入夜晚",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

Blockly.Blocks['setDayNightCycle'] = {
  init: function () {
    this.jsonInit({
      "type": "setDayNightCycle",
      "message0": "设置白昼循环,首次延迟 %1,每 %2 秒循环一次,从 %3 开始",
      "args0": [
        {
          "type": "field_number",
          "name": "firstDelay",
          "text": "多少",
          "value": 10
        },
        {
          "type": "field_number",
          "name": "delayInSecond",
          "text": "多少",
          "value": 30
        },
        {
          "type": "field_number",
          "name": "startTime",
          "text": "几点",
          "value": 6
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};

// getScreenshot: () => any;
Blockly.Blocks['getScreenshot'] = {
  init: function () {
    this.jsonInit({
      "type": "getScreenshot",
      "message0": "getScreenshot",
      "previousStatement": null,
      "nextStatement": null,
    });
    this.setStyle('loop_blocks');
  }
};