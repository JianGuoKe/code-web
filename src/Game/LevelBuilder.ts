export function createPlane(type: string, gridDimensions: number[]) {
  const plans = [];
  for (let i = 0; i < gridDimensions[0]; i++) {
    for (let i = 0; i < gridDimensions[0]; i++) {
      plans.push(type);
    }
  }
  return plans;
}

export function createLevel(gDimensions?: [number, number]) {
  const gridDimensions = [gDimensions ? gDimensions[0] : 10, gDimensions ? gDimensions[1] : 10];
  var defaults = {
    instructions:
      "Nighttime is boring with no zombies (sheep at this time). Get the Zombies spawning at night, and get them to chase you.",
    useAgent: true,

    playerStartPosition: [3, 4],
    agentStartPosition: [3, 6],

    // up: 0, right: 1, down: 2, left: 3
    playerStartDirection: 1,
    agentStartDirection: 1,

    playerName: "SteveEvents",
    isAgentLevel: true,
    earlyLoadAssetPacks: ["heroAllAssetsMinusPlayer"],
    earlyLoadNiceToHaveAssetPacks: ["playerSteveEvents", "playerAgent"],

    assetPacks: {
      beforeLoad: [
        "heroAllAssetsMinusPlayer",
        "playerSteveEvents",
        "playerAgent",
      ],
      afterLoad: [],
    },

    levelVerificationTimeout: -1,
    timeoutResult: function () {
      return false;
    },

    gridDimensions,

    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "magmaUnderwater",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "water",
    //   "water",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",

    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    //   "grass",
    // ],
    groundPlane: createPlane('grass', gridDimensions),

    groundDecorationPlane: createPlane('', gridDimensions),

    actionPlane: createPlane('', gridDimensions),

    fluffPlane: createPlane('', gridDimensions),

    failureCheckFunction: function () {
      return false;
    },

    verificationFunction: function () {
      return false;
    },
  };

  return defaults;
}