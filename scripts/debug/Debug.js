import drawFrameBox from "./DrawFrameBox.js";
import drawPlayerBox from "./DrawPlayerBox.js";
import drawHitBox from "./DrawHitBox.js";
import { drawPlatformBox } from "./DrawPlatformBox.js";

export default class Debug {
  platforms = [];
  playerBox;
  hitBox;
  frameBox;

  constructor(showDebug = false) {
    this.showDebug = showDebug;
  }

  updatePlayer(player) {
    if (!this.showDebug || !player) {
      return;
    }

    // TODO this need to be in the player class because it is duplicated

    this.playerBox = {
      x: player.position.x,
      y: player.position.y,
      w: player.character.positions[player.state].width * 2,
      h: player.character.positions[player.state].height * 2,
    };

    this.frameBox = {
      x: player.position.x,
      y: player.position.y,
      w: player.character.positions[player.state].width * 2,
      h: player.character.positions[player.state].height * 2,
    };

    this.hitBox = {
      x: player.position.x,
      y: player.position.y,
      w: player.width,
      h: player.height,
    };
  }

  updatePlatforms(platforms) {
    if (!this.showDebug || !platforms) {
      return;
    }

    this.platforms = platforms.map((platform) => {
      return {
        x: platform.position.x,
        y: platform.position.y,
        w: platform.width,
        h: platform.height,
      };
    });
  }

  draw(ctx) {
    if (!this.showDebug || !ctx) {
      return;
    }
    drawFrameBox(ctx, this.frameBox);
    drawHitBox(ctx, this.hitBox);
    drawPlayerBox(ctx, this.playerBox);
    this.platforms.forEach((platform) => drawPlatformBox(ctx, platform));
  }
}
