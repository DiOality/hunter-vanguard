import platform from '../Img/platform.png'
import hills from '../Img/hills.png'
import background from '../Img/background.png'
import platformSmallTall from '../Img/platformSmallTall.png'

const canvas = document.querySelector('#gameCanvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;
class Player {
    constructor(){
        this.speed = 10
        this.position = {
            x:100,
            y:100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30;
        this.height = 30;
    }
    draw(){
        c.fillStyle = 'green '
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
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

let platformImage = createImage(platform)

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
        x: platformImage.width *4 + 300 -1,
        y: 370, 
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
    
    if(keys.right.pressed && player.position.x < 450){
        player.velocity.x = player.speed
    } else if (keys.left.pressed && player.position.x > 100){
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
            
        }else if(keys.left.pressed){
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
 if(scrollOffset > 2000){
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
         break
        case 87:
         console.log('up');
         player.velocity.y -= 10
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
         player.velocity.y -= 10
         break     
    }

} )