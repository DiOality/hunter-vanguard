import spriteSheetRight from "../../Img/killua-sprite-sheet-right.png";
import spriteSheetLeft from "../../Img/killua-sprite-sheet-left.png";
import createImage from "../createImage";

export default {
  zoom: 2,
  spriteSheet: {
    w: 930,
  },
  spriteSheetRight: createImage(spriteSheetRight),
  spriteSheetLeft: createImage(spriteSheetLeft),
  frames: {
    idle: [
      { x: 0 + 20, y: 20 },
      { x: 93 + 20, y: 20 },
      { x: 186 + 20, y: 20 },
      { x: 279 + 20, y: 20 },
    ],
    run: [
      { x: 372 + 20, y: 20 },
      { x: 465 + 20, y: 20 },
      { x: 558 + 20, y: 20 },
      { x: 651 + 20, y: 20 },
      { x: 744 + 20, y: 20 },
      { x: 837 + 20, y: 20 },
      { x: 0 + 20, y: 100 },
      { x: 93 + 20, y: 100 },
    ],
  },
  // the cut of the frame spritesheet
  positions: {
    idle: {
      width: 25,
      height: 50,
    },
    run: {
      width: 40,
      height: 50,
    },
  },
};
