import drawFrameBox from './DrawFrameBox.js'
import drawPlayerBox from './DrawPlayerBox.js'
import drawHitBox from './DrawHitBox.js'
import { drawPlatformBox } from './DrawPlatformBox.js'

export default class Debug {

  platforms = []
  playerBox
  hitBox
  frameBox

  constructor (showDebug = false) {
    this.showDebug = showDebug
  }

  update () {
    if (!this.showDebug) {
      return
    }
  }

  draw (c) {
    if (!this.showDebug) {
      return
    }
    drawFrameBox(c, this.frameBox)
    drawHitBox(c, this.hitBox)
    drawPlayerBox(c, this.playerBox)
    this.platforms.forEach(platform => drawPlatformBox(c, platform))
  }
}

