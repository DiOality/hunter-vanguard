import spriteSheet from "../../Img/killua-sprite-sheet.png";
import createImage from "../createImage";
export default {
  spriteSheet: createImage(spriteSheet),
  frames: {
    idle: [
      { x: 0, y: 0 },
      { x: 93, y: 0 },
      { x: 186, y: 0 },
      { x: 279, y: 0 },
    ],
    run: [
      { x: 372, y: 0 },
      { x: 465, y: 0 },
      { x: 558, y: 0 },
      { x: 651, y: 0 },
      { x: 744, y: 0 },
      { x: 837, y: 0 },
      { x: 0, y: 80 },
      { x: 93, y: 80 },
    ],
  },
  positions: {
    idle: {
      heightOffset: 14,
      width: 93,
      height: 70,
    },
    run: {
      heightOffset: 14,
      width: 93,
      height: 70,
    },
  },
};
