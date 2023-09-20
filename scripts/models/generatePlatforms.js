import createImage from "../createImage";
import platformSmallTall from "../../Img/platformSmallTall.png";
import platform from "../../Img/platform.png";
import Platform from "./platform";

let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall);

export default [
  // Tall platforms
  {
    x:
      platformImage.width * 4 +
      300 -
      2 +
      platformImage.width -
      platformSmallTallImage.width,
    y: 270,
    image: platformSmallTallImage,
  },
  {
    x:
      platformImage.width * 14 +
      1200 -
      2 +
      platformImage.width -
      platformSmallTallImage.width,
    y: 270,
    image: platformSmallTallImage,
  },
  {
    x:
      platformImage.width * 15 +
      1200 -
      2 +
      platformImage.width -
      platformSmallTallImage.width,
    y: 270,
    image: platformSmallTallImage,
  },
  {
    x:
      platformImage.width * 21 +
      1200 -
      2 +
      platformImage.width -
      platformSmallTallImage.width,
    y: 270,
    image: platformSmallTallImage,
  },

  // Flat platforms

  {
    x: -1,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width - 3,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 4 + 300 - 2,
    y: 470,
    image: platformImage,
  },

  {
    x: platformImage.width * 5 + 700 - 2,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 6 + 700 - 4,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 7 + 900 - 4,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 8 + 800 - 2,
    y: 345,
    image: platformImage,
  },
  {
    x: platformImage.width * 9 + 800 - 3,
    y: 225,
    image: platformImage,
  },
  {
    x: platformImage.width * 10 + 700 - 2,
    y: 350,
    image: platformImage,
  },
  {
    x: platformImage.width * 11 + 700 - 2,
    y: 225,
    image: platformImage,
  },
  {
    x: platformImage.width * 12 + 1200 - 2,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 13 + 1200 - 4,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 14 + 1200 - 6,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 15 + 1200 - 9,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 16 + 1200 - 11,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 17 + 1200 - 2,
    y: 370,
    image: platformImage,
  },
  {
    x: platformImage.width * 18 + 1200 - 2,
    y: 270,
    image: platformImage,
  },
  {
    x: platformImage.width * 19 + 1200 - 2,
    y: 170,
    image: platformImage,
  },
  {
    x: platformImage.width * 20 + 1200 - 2,
    y: 70,
    image: platformImage,
  },
  {
    x: platformImage.width * 21 + 1100 - 2,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 22 + 1100 - 4,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 22 + 1000 - 2,
    y: 70,
    image: platformImage,
  },
  {
    x: platformImage.width * 23 + 1250 - 2,
    y: 170,
    image: platformImage,
  },
  {
    x: platformImage.width * 24 + 1250 - 2,
    y: 270,
    image: platformImage,
  },
  {
    x: platformImage.width * 25 + 1250 - 2,
    y: 370,
    image: platformImage,
  },
  {
    x: platformImage.width * 26 + 1250 - 2,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 27 + 1250 - 4,
    y: 470,
    image: platformImage,
  },
  {
    x: platformImage.width * 28 + 1600 - 2,
    y: 470,
    image: platformImage,
  },
].map((p) => new Platform(p));
