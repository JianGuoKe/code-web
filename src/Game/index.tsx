import React, { useEffect } from "react";
import type { GameController as GameControllerType } from "./types";
import { createLevel } from "./LevelBuilder";
import { state } from "../StateDexie";
import { createSandBox } from "../Sandbox";

const win = global as any;
const { GameController, Sounds, Phaser } = global as any;

const blocks = [
  "rails",
  "railsUnpowered",
  "railsRedstoneTorch",
  "redstoneWire",
  "pressurePlateUp",
  "grass",
  "cobblestone",
  "pistonRight",
  "pistonLeft",
  "prismarine",
];

export default function Game() {
  useEffect(() => {
    let gameController: GameControllerType = win.gameController;
    if (!gameController) {
      const levelToLoad = createLevel([100, 100]);
      // Initialize test instance of game, exposed to window for debugging.
      gameController = new GameController({
        Phaser: Phaser,
        containerId: "code-app-game",
        assetRoot: (process.env.PUBLIC_PATH || "") + "static/assets/",
        audioPlayer: new Sounds(),
        debug: false,
        width: "100%",
        height: "100%",
        earlyLoadAssetPacks: levelToLoad.earlyLoadAssetPacks,
        earlyLoadNiceToHaveAssetPacks:
          levelToLoad.earlyLoadNiceToHaveAssetPacks,
        afterAssetsLoaded: () => {
          gameController.codeOrgAPI.startAttempt();
          gameController.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        },
      });
      gameController.loadLevel(levelToLoad);
      win.gameController = gameController;
      win.sandbox = createSandBox(gameController.codeOrgAPI);
      win.reset = () => {
        gameController.codeOrgAPI.resetAttempt();
        gameController.codeOrgAPI.startAttempt();
      };

      const handleKeyDown = async (e: KeyboardEvent) => {
        if (e.target !== document.body) {
          e.preventDefault();
        }
        e.stopImmediatePropagation();

        const options = await state.getOptions();
        if (options?.editorVisible) {
          // 正在编码时跳过
          return;
        }
        const target = options?.target || "Player";
        var instance =
          target === "Player" ? gameController.player : gameController.agent;

        if (instance.queue.getLength() > 0) {
          return;
        }

        switch (e.key) {
          case "Backspace":
            gameController.codeOrgAPI.destroyBlock(null, target);
            break;
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "0":
            state.setBlock(e.key === "0" ? 9 : parseInt(e.key) - 1);
            break;
          case "Enter":
            gameController.codeOrgAPI.placeInFront(
              null,
              blocks[options?.blockIndex || 0],
              target
            );
            break;
          case "Shift":
            state.setTarget(target === "Player" ? "PlayerAgent" : "Player");
            break;
          case "w":
          case "W":
          case "ArrowUp":
            gameController.codeOrgAPI.moveDirection(null, target, 0);
            break;
          case "s":
          case "S":
          case "ArrowDown":
            gameController.codeOrgAPI.moveDirection(null, target, 2);
            break;
          case "a":
          case "A":
          case "ArrowLeft":
            gameController.codeOrgAPI.moveDirection(null, target, 3);
            break;
          case "d":
          case "D":
          case "ArrowRight":
            gameController.codeOrgAPI.moveDirection(null, target, 1);
            break;
        }
      };

      const handleMouseDown = () => {
        state.setCodeEditorVisible(true);
      };

      win.addEventListener("keydown", handleKeyDown, true);
      win.addEventListener("mousedown", handleMouseDown);
      win.addEventListener("touchstart", handleMouseDown); 
    }
  }, []);

  return <div id="code-app-game" className="code-app-game"></div>;
}
