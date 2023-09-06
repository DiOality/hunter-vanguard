import drawBox from './DrawBox.js'
import { drawBoxText } from './DrawBoxText.js'

export default function drawDebugBox (ctx, box, colour, name) {
  drawBoxText(ctx, box, colour, name)
  drawBox(ctx, box, colour, name)
}
