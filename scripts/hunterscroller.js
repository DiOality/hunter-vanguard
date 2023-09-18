import platform from "../Img/platform.png";
import hills from "../Img/hills.png";
import background from "../Img/background.png";
import platformSmallTall from "../Img/platformSmallTall.png";
import Debug from "./debug/Debug.js";
import Killua from "./spriteSheets/Killua";
import createImage from "./createImage";

const canvas = document.querySelector("#gameCanvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
const debug = new Debug(false);
const gravity = 0.49;

// hitbox
class Player {
  constructor() {
    this.speed = 7;
    this.position = {
      x: 400,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    // hitbox
    this.width = 40;
    this.height = 100;

    this.frames = 0;

    this.character = Killua;
    this.currentSprite = this.character.spriteSheetRight;
    this.state = "idle";
    this.direction = "right";
  }

  draw() {
    // this is the frames of the spritesheet based on teh current state
    const frame = this.character.frames[this.state][this.frames];
    // this is the width it is cutting out of the spritesheet and showing
    const frameW = this.character.positions[this.state].width;
    // This is an algorithm to flip the spritesheet and cut a reversed sheet of it if it is not going right
    const frameX =
      this.direction === "right"
        ? frame.x
        : this.character.spriteSheet.w - frame.x - frameW;

    let positionXDrawImageOffset = 2;
    if (this.direction === "right" && this.state === "idle") {
      positionXDrawImageOffset = 10;
    }
    c.drawImage(
      this.currentSprite,
      frameX,
      frame.y,
      frameW,
      this.character.positions[this.state].height,
      this.position.x - positionXDrawImageOffset,
      this.position.y,
      this.character.positions[this.state].width * this.character.zoom,
      this.character.positions[this.state].height * this.character.zoom
    );
    console.log(
      this.direction,
      this.state,
      this.character.positions[this.state].width * this.character.zoom
    );
  }

  frameDelay = 30;

  update() {
    if (this.frameDelay > 0) {
      this.frameDelay -= 1;
    } else {
      this.frames++;
      if (
        this.state === "idle" &&
        this.frames > this.character.frames.idle.length - 1
      ) {
        this.frames = 0;
      } else if (
        this.state === "run" &&
        this.frames > this.character.frames.run.length - 1
      ) {
        this.frames = 0;
      }
      this.frameDelay = 30;
    }

    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x: x,
      y: y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall);

let player = new Player();
let platforms = [];
let genericObjects = [];

let lastKey;
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

function init() {
  platformImage = createImage(platform);

  player = new Player();
  platforms = [
    new Platform({
      x:
        platformImage.width * 4 +
        300 -
        2 +
        platformImage.width -
        platformSmallTallImage.width,
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({
      x:
        platformImage.width * 14 +
        1200 -
        2 +
        platformImage.width -
        platformSmallTallImage.width,
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({
      x:
        platformImage.width * 15 +
        1200 -
        2 +
        platformImage.width -
        platformSmallTallImage.width,
      y: 270,
      image: createImage(platformSmallTall),
    }),
    new Platform({
      x:
        platformImage.width * 21 +
        1200 -
        2 +
        platformImage.width -
        platformSmallTallImage.width,
      y: 270,
      image: createImage(platformSmallTall),
    }),

    // flat platforms

    new Platform({
      x: -1,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width - 3,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 300,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 300 - 2,
      y: 470,
      image: platformImage,
    }),

    new Platform({
      x: platformImage.width * 5 + 700 - 2,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 6 + 700 - 4,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 7 + 900 - 4,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 8 + 800 - 2,
      y: 345,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 9 + 800 - 3,
      y: 225,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 10 + 700 - 2,
      y: 350,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 11 + 700 - 2,
      y: 225,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 12 + 1200 - 2,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 13 + 1200 - 4,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 14 + 1200 - 6,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 15 + 1200 - 9,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 16 + 1200 - 11,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 17 + 1200 - 2,
      y: 370,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 18 + 1200 - 2,
      y: 270,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 19 + 1200 - 2,
      y: 170,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 20 + 1200 - 2,
      y: 70,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 21 + 1100 - 2,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 22 + 1100 - 4,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 22 + 1000 - 2,
      y: 70,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 23 + 1250 - 2,
      y: 170,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 24 + 1250 - 2,
      y: 270,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 25 + 1250 - 2,
      y: 370,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 26 + 1250 - 2,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 27 + 1250 - 4,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 28 + 1600 - 2,
      y: 470,
      image: platformImage,
    }),
  ];

  genericObjects = [
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(background),
    }),
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(hills),
    }),
  ];

  scrollOffset = 0;
}
export function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.clearRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }

  // platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  let oldState = player.state;
  let oldDirection = player.direction;

  // Sprite switching
  if (keys.right.pressed && lastKey === "right") {
    player.state = "run";
    player.direction = "right";
  } else if (keys.left.pressed && lastKey === "left") {
    player.state = "run";
    player.direction = "left";
  } else if (!keys.left.pressed && lastKey === "left") {
    player.state = "idle";
    player.direction = "left";
  } else if (!keys.right.pressed && lastKey === "right") {
    player.state = "idle";
    player.direction = "right";
  }
  player.currentSprite =
    player.direction === "right"
      ? Killua.spriteSheetRight
      : Killua.spriteSheetLeft;
  if (oldState !== player.state || oldDirection !== player.direction) {
    player.frames = 0;
  }

  // win condition
  function restart() {
    location.replace("https://dioality.glowfinger.com/");
  }
  if (scrollOffset > platformImage.width * 29 + 1100 - 2) {
    alert("You Passed the Hunter Exam").onclick = restart();
  }
  // lose condition
  if (player.position.y > canvas.height) {
    init();
    console.log("You have failed");
  }

  debug.updatePlayer(player);
  debug.updatePlatforms(platforms);
  debug.draw(c);
}

// change the instance into key from e after you have it working.
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      keys.left.pressed = true;
      lastKey = "left";
      break;
    case "s":
      break;
    case "d":
      keys.right.pressed = true;
      lastKey = "right";
      break;
    case "w":
      if (e.repeat) {
        return;
      }
      player.velocity.y -= 14;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "a":
      keys.left.pressed = false;
      break;
    case "s":
      break;
    case "d":
      keys.right.pressed = false;
      break;
    case "w":
      break;
  }
});
