import platform from '../Img/platform.png'
import hills from '../Img/hills.png'
import background from '../Img/background.png'
import platformSmallTall from '../Img/platformSmallTall.png'
import spriteRunLeft from '../Img/spriteRunLeft.png'
import spriteRunRight from '../Img/spriteRunRight.png'
import spriteStandLeft from '../Img/spriteStandLeft.png'
import spriteStandRight from '../Img/spriteStandRight.png'

const canvas = document.querySelector('#gameCanvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.49;
class Player {
    constructor(){
        this.speed = 7
        this.position = {
            x:100,
            y:100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 66;
        this.height = 150;

        this.image = createImage(spriteStandRight);
        this.frames = 0;
        this.sprites = {
            stand: {
                right: createImage(spriteStandRight)
            },
            run: {
                right: createImage(spriteRunRight)
            }
        }
        this.currentSprite = this.sprites.stand.right
    }

    draw(){
        c.drawImage(
            this.crurrentSprite,
            177 * this.frames,
            0,
            177,
            400,
             this.position.x, 
             this.position.y, 
             this.width, 
             this.height
             )
    }
    update() {
        this.frames ++
        if(this.frames > 28) this.frames = 0
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        
    }
}

class Platform {
    constructor({x, y, image}) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
        
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y )
    }
}

class GenericObject {
    constructor({x, y, image}) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
        
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y )
    }
}

function createImage(imageSrc){
   const image = new Image()
   image.src = imageSrc 
return image
}

let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall);
let player = new Player ()
let platforms = []
let genericObjects = []

const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    }
}


let scrollOffset = 0

function init(){
platformImage = createImage(platform)

 player = new Player ()
 platforms = [
    new Platform({
        x: platformImage.width *4 
        + 300 
        -2 +
        platformImage.width - 
        platformSmallTallImage.width,
        y: 270, 
        image: createImage(platformSmallTall)
    }),

    new Platform({
        x: -1, 
        y: 470,
        image: platformImage
    }),
     new Platform({
        x: platformImage.width -3,
        y: 470, 
        image: platformImage
    }),
    new Platform({
        x: platformImage.width *2 +100,
        y: 470, 
        image: platformImage
    }),
    new Platform({
        x: platformImage.width *3 + 300,
        y: 470, 
        image: platformImage
    }),
    new Platform({
        x: platformImage.width *4 + 300 -2,
        y: 470, 
        image: platformImage
    }),
    new Platform({
        x: platformImage.width *5 + 700 -2,
        y: 470, 
        image: platformImage
    })

]

 genericObjects = [
    new GenericObject({
        x: -1,
        y: -1,
        image: createImage(background)
    }),
    new GenericObject({
        x: -1,
        y: -1,
        image: createImage(hills)
    })
]

scrollOffset = 0
}


export function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.clearRect(0, 0, canvas.width, canvas.height)

    genericObjects.forEach(genericObject => {
        genericObject.draw()
    } )

    platforms.forEach(platform => {
      platform.draw()
    })
    player.update()
    
    if(keys.right.pressed && player.position.x < 400){
        player.velocity.x = player.speed
    } else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
    ){
        player.velocity.x = -player.speed 
    }else{ 
        player.velocity.x = 0

        if(keys.right.pressed){
            scrollOffset += player.speed
            platforms.forEach(platform => {
                platform.position.x -= player.speed
              })
            genericObjects.forEach(genericObject =>{
                genericObject.position.x -= player.speed * .66
            })
            
        }else if(keys.left.pressed && scrollOffset > 0){
            scrollOffset -= player.speed
            platforms.forEach(platform => {
                platform.position.x += player.speed
              })
            genericObjects.forEach(genericObject =>{
                genericObject.position.x += player.speed * .66
            })
            
        }

    }


    // platform collision detection
    platforms.forEach(platform => {

    if(
        player.position.y + player.height <= platform.position.y 
        && 
        player.position.y + player.height + player.velocity.y 
        >= 
        platform.position.y && 
        player.position.x + player.width >= platform.position.x 
        && 
        player.position.x <= platform.position.x + platform.width
        ) {
        player.velocity.y = 0
    }
})
// win condition
 if(scrollOffset > platformImage.width *5 + 700 -2){
    console.log('You Passed the Hunter Exam');
 }
// lose condition
if (player.position.y > canvas.height) {
    init()
    console.log('You have failed');
}
}



// change the instance into key from e after you have it working.
window.addEventListener('keydown', (e) => {
    // console.log(e.keyCode);
    switch (e.keyCode){
        case 65:
         console.log('left');
         keys.left.pressed = true
         break
        case 83:
         console.log('down');
         break
        case 68:
         console.log('right');
         keys.right.pressed = true
         player.currentSprite = player.sprites.run.right
         break
        case 87:
         console.log('up');
         player.velocity.y -= 14
         break     
    }

} )

window.addEventListener('keyup', (e) => {
    // console.log(e.keyCode);
    switch (e.keyCode){
        case 65:
         console.log('left');
         keys.left.pressed = false
         break
        case 83:
         console.log('down');
         break
        case 68:
         console.log('right');
         keys.right.pressed = false
         break
        case 87:
         console.log('up');
         break     
    }

} )